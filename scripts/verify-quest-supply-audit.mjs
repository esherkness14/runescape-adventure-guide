import assert from 'node:assert/strict';
import { readFileSync, readdirSync, statSync, existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { resolve, join, extname } from 'node:path';
import { execFileSync } from 'node:child_process';
import { createServer } from 'node:http';
import { chromium } from '@playwright/test';

// Compare the built guide with the existing progress contract, not with copied
// assertions about the new prose. This protects saved user progress while the
// quest inventory is expanded.
const baseline = process.env.GUIDE_AUDIT_BASE || '6a0a409ee8bc4568b81cba2b2a350ee63dc28080';
const basePath = '/runescape-adventure-guide';
const dist = resolve('dist');
const pages = readdirSync('src/pages/intermediate')
  .filter(name => /^chapter-[1-3]-\d+\.astro$/.test(name)).sort();
assert.equal(pages.length, 17, 'The audit must cover all 17 Intermediate pages');

function contracts(source) {
  const tags = [...source.matchAll(/<(RouteStep|TrainingOptions)\b(?:"[^"]*"|'[^']*'|[^'">])*>/g)];
  return tags.map(([tag, component]) => ({
    component,
    id: tag.match(/\bid="([^"]+)"/)?.[1],
    informational: /\binformational=\{true\}/.test(tag),
    optional: /\boptional=\{true\}/.test(tag),
  }));
}
const allExpected = new Map();
for (const name of pages) {
  const path = 'src/pages/intermediate/' + name;
  const previous = execFileSync('git', ['show', baseline + ':' + path], { encoding: 'utf8' });
  const current = readFileSync(path, 'utf8');
  assert.deepEqual(contracts(current), contracts(previous), path + ': changed progress ID/order/semantics');
  const key = previous.match(/storageKey="([^"]+)"/)?.[1];
  assert.equal(current.match(/storageKey="([^"]+)"/)?.[1], key, path + ': changed storage key');
  assert.deepEqual([...current.matchAll(/<style\b[^>]*>[\s\S]*?<\/style>/g)].map(m => m[0]),
    [...previous.matchAll(/<style\b[^>]*>[\s\S]*?<\/style>/g)].map(m => m[0]), path + ': changed styles');
  const expected = contracts(previous).filter(c => !c.informational)
    .map(c => ({ id: c.id, required: !c.optional }));
  allExpected.set(name.replace('.astro', ''), { expected, key });
}
for (const component of ['RouteStep', 'TrainingOptions', 'ProgressTracker', 'ExpandableNote']) {
  const path = 'src/components/' + component + '.astro';
  assert.equal(readFileSync(path, 'utf8'), execFileSync('git', ['show', baseline + ':' + path], { encoding: 'utf8' }),
    component + ': shared behaviour changed');
}

const server = createServer((req, res) => {
  try {
    let pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    if (pathname.startsWith(basePath)) pathname = pathname.slice(basePath.length);
    let file = resolve(dist, '.' + pathname);
    if (!file.startsWith(dist + '/') && file !== dist) { res.writeHead(403); res.end(); return; }
    if (existsSync(file) && statSync(file).isDirectory()) file = join(file, 'index.html');
    if (!existsSync(file)) { res.writeHead(404); res.end('Not found'); return; }
    const types = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css', '.svg': 'image/svg+xml' };
    res.setHeader('Content-Type', types[extname(file)] || 'application/octet-stream');
    res.end(readFileSync(file));
  } catch { res.writeHead(500); res.end(); }
});
await new Promise(resolve => server.listen(4173, '127.0.0.1', resolve));
const origin = 'http://127.0.0.1:4173';
const browser = await chromium.launch();
const failures = [];
let requiredTotal = 0, optionalTotal = 0, detailsTotal = 0;
const routeData = new Map();
mkdirSync('audit-artifacts', { recursive: true });
try {
  const context = await browser.newContext({ viewport: { width: 1440, height: 1000 } });
  const page = await context.newPage();
  page.on('pageerror', error => failures.push(error.message));
  for (const [slug, { expected, key }] of allExpected) {
    const url = origin + basePath + '/intermediate/' + slug + '/';
    await page.goto(url, { waitUntil: 'networkidle' });
    const data = await page.evaluate(() => ({
      checks: [...document.querySelectorAll('.progress-check')].map(c => ({
        id: c.dataset.progressId, required: c.dataset.progressRequired !== 'false',
      })),
      key: document.querySelector('[data-progress-tracker]')?.dataset.storageKey,
      ids: [...document.querySelectorAll('[id]')].map(el => el.id),
      links: [...document.querySelectorAll('a[href]')].map(a => a.getAttribute('href')),
      details: document.querySelectorAll('.expandable-note').length,
      opened: document.querySelectorAll('.expandable-note[open]').length,
      overflow: document.documentElement.scrollWidth > innerWidth + 1,
    }));
    assert.deepEqual(data.checks, expected, slug + ': built checkboxes differ from saved-progress contract');
    assert.equal(data.key, key, slug + ': built storage key');
    assert.equal(new Set(data.ids).size, data.ids.length, slug + ': duplicate HTML IDs');
    assert.equal(data.opened, 0, slug + ': disclosures should start closed');
    assert.equal(data.overflow, false, slug + ': desktop overflow');
    requiredTotal += data.checks.filter(c => c.required).length;
    optionalTotal += data.checks.filter(c => !c.required).length;
    detailsTotal += data.details;
    routeData.set(new URL(url).pathname, data);
  }

  // Check chapter-to-chapter references and every same-page anchor. Other
  // internal pages must exist; external Wiki availability is not assumed.
  for (const [pathname, data] of routeData) {
    for (const href of data.links) {
      const target = new URL(href, origin + pathname);
      if (target.origin !== origin) continue;
      const relative = target.pathname.startsWith(basePath) ? target.pathname.slice(basePath.length) : target.pathname;
      const file = resolve(dist, '.' + relative, extname(relative) ? '' : 'index.html');
      assert(existsSync(file), pathname + ': missing internal destination ' + href);
      if (target.hash && routeData.has(target.pathname)) {
        assert(routeData.get(target.pathname).ids.includes(decodeURIComponent(target.hash.slice(1))),
          pathname + ': missing anchor ' + href);
      }
    }
  }

  const dtUrl = origin + basePath + '/intermediate/chapter-1-4/';
  await page.goto(dtUrl, { waitUntil: 'networkidle' });
  const dt = page.locator('#i14-dt');
  await dt.scrollIntoViewIfNeeded();
  await page.screenshot({ path: 'audit-artifacts/desert-treasure-desktop.png' });
  const summary = dt.locator('#i14-potion-supplies summary');
  await summary.focus();
  await page.keyboard.press('Enter');
  assert.equal(await dt.locator('#i14-potion-supplies details').getAttribute('open'), '',
    'Keyboard must open the potion disclosure');
  await dt.locator('#i14-potion-supplies').scrollIntoViewIfNeeded();
  await page.screenshot({ path: 'audit-artifacts/potion-preparation-desktop.png' });

  // Exercise real persisted state: a completed DT block must survive reload,
  // while an optional activity must not increase the required numerator.
  const tracker = page.locator('[data-progress-tracker]');
  await page.locator('#i14-dt-check').check();
  await page.reload({ waitUntil: 'networkidle' });
  assert.equal(await page.locator('#i14-dt-check').isChecked(), true);
  const textBeforeOptional = await tracker.locator('[data-progress-text]').textContent();
  await page.locator('.progress-check[data-progress-required="false"]').first().check();
  assert.equal(await tracker.locator('[data-progress-text]').textContent(), textBeforeOptional);
  const state = await page.evaluate(() => JSON.parse(localStorage.getItem('rsag-intermediate-1-4') || '{}'));
  assert.equal(state['i14-dt'], true);
  await page.getByRole('button', { name: 'Reset progress' }).click();
  assert.equal(await page.locator('#i14-dt-check').isChecked(), false);

  await page.setViewportSize({ width: 390, height: 844 });
  for (const slug of allExpected.keys()) {
    await page.goto(origin + basePath + '/intermediate/' + slug + '/', { waitUntil: 'networkidle' });
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1), false,
      slug + ': mobile overflow with disclosures closed');
  }
  await page.goto(dtUrl, { waitUntil: 'networkidle' });
  await page.locator('#i14-potion-supplies summary').click();
  await page.locator('#i14-potion-supplies').scrollIntoViewIfNeeded();
  assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1), false,
    'DT potion disclosure: mobile overflow');
  await page.screenshot({ path: 'audit-artifacts/potion-preparation-mobile.png' });
  assert.deepEqual(failures, [], 'Browser console errors');

  const result = { pages: pages.length, requiredTotal, optionalTotal, detailsTotal, baseline,
    progressContract: 'unchanged', localLinks: 'passed', mobileAndDesktop: 'passed',
    keyboardDisclosure: 'passed', persistedProgress: 'passed', browserErrors: failures };
  writeFileSync('audit-artifacts/verification.json', JSON.stringify(result, null, 2) + '\n');
  console.log(JSON.stringify(result, null, 2));
} finally {
  await browser.close();
  await new Promise(resolve => server.close(resolve));
}
