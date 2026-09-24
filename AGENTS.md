## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## Intermediate Ironman Guide doctrine

The Intermediate Guide adapts BRUHsailer's strong dependency planning; it is not a cosmetic rewrite. The governing principle is:

> **Macro-efficient, not tile-efficient. Optimize progression, not playtime.**

Preserve useful macro planning: quest prerequisites, early unlocks, transport, resource preparation, rare-item retention, passive systems worth starting early, and decisions that avoid expensive future rework. Do not optimize around every walking tile or inventory slot, tiny diary detours, constant multi-questing, incidental XP assumptions, tick manipulation, or EHP for its own sake. The game must remain fun. Prefer a slower method when it is substantially more relaxed or enjoyable.

### Every grind needs a reason and a stopping condition

Before requiring a long skill or resource grind, establish:

- why the level or resource is needed;
- which downstream requirement consumes it;
- the minimum useful stopping point;
- what continuing farther provides; and
- whether BRUHsailer's higher target is mandatory or only macro-efficient.

Decompose inherited mega-grinds into their outputs before retaining them. For example, treat Prayer XP, combat XP, Crafting materials, and GP from a dragon block as separate dependencies, then decide whether obtaining them together is still best. Do not require a 99, 90+, fixed kill count, or other large grind merely because BRUHsailer does.

### Optional means optional

Every mandatory future step must work if the player skipped every optional block. Never silently depend on optional melee training, extra skilling, diary work, bossing, tick-manipulation routes, or long grinds. If an optional activity becomes necessary later, move the required portion into the mandatory route or add an explicit catch-up checkpoint.

### Prefer low-attention methods

Recommend AFK or low-attention methods when reasonable, even if somewhat slower. Do not default to blackjacking, 2-tick or 3-tick skilling, tick manipulation, high-intensity EHP methods, or excessive hopping/clicking solely for efficiency. Where practical, give a relaxed/default method, reasonable alternatives, and an active/faster option, explaining the tradeoff rather than treating EHP as inherently superior.

Normal Barbarian Fishing followed by using a knife on a caught leaping fish and allowing the automatic gutting/cutting action to process the inventory is an acceptable relaxed method. Its small Cooking XP is useful. This is distinct from high-input 3-tick "cut-eat" Barbarian Fishing used to maintain a tick-manipulated cycle; that may be an optional faster technique but must never be assumed.

### Explain unfamiliar activities

Assume the reader may know 2007/2014 RuneScape but not modern OSRS systems. When first introducing an activity, minigame, transport system, or modern training method, briefly explain:

- what it is and where it is;
- how to reach it;
- what to bring and how to start;
- what the ordinary gameplay loop looks like;
- why the route uses it; and
- when to stop.

Never leave a modern activity as only "Do Tithe Farm," "Do Sepulchre," "train Sailing by charting," "Do Mahogany Homes," or similar. The Chapter 1 Sulliuscep explanation is the preferred model.

### Audit dependencies against current sources

For dependency-heavy work, prioritize thorough reasoning and current research over speed. Use this source hierarchy:

1. This repository is authoritative for our guide's design decisions and its mandatory/optional route.
2. Current BRUHsailer is the source for the macro route being adapted.
3. Current official Jagex information and current OSRS Wiki/mechanics references establish factual requirements and mechanics.

BRUHsailer is not authoritative over current game mechanics. When sources disagree, investigate dates and updates, use the current mechanic, and document the resolution. Do not rely on stale search snippets where mechanics may have changed.

For important gates, verify quest and skill requirements, boostability, quest XP, required items, transport/unlocks, diary and combat requirements, and relevant Chapter 3 dependencies. Never assume BRUHsailer's incidental XP still occurs after replacing the activity that supplied it.
