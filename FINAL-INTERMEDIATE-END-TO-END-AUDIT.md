# Final Intermediate end-to-end audit

Audit date: 26 September 2026. Baseline: `a1041ab0b614569cc953690085bdee448089c6d3` (`main`). Scope: the mandatory route from Tutorial Island through Intermediate 1.1–3.6 and the Quest point cape; no Chapter 3.7 or route redesign. This is a source, arithmetic, generated-HTML and build audit, **not** a claim that every quest was played through in-game or that every viewport was visually tested.

## Findings and implementation

| Severity | Page / step | Current behavior at baseline | Verified mechanic | Impact | Correction | Status |
| --- | --- | --- | --- | --- | --- | --- |
| MEDIUM | 3.5, Desert Treasure II preflight and boss baseline | Starts on Ancient Magicks for the vault and Leviathan, then recommends Earth Wave for the Whisperer without an explicit intervening spellbook switch. | Leviathan's stun uses Shadow spells; Earth Wave is a standard-spellbook spell, and the Whisperer has an Earth weakness. | A literal follower could arrive with the right runes and staff but the wrong spellbook. | Explicitly direct Ancients for Leviathan's Shadow stun and standard before any Earth Wave Whisperer attempt, without imposing a boss order. | Fixed in `chapter-3-5.astro`. |
| LOW | 3.6, Blood Moon preflight | Says the route already covers “the last six (including Slayer),” although Slayer is first in its ten-skill list. | Previously supplied skills are Slayer, Mining, Hunter, Crafting, Herblore and Magic; the four final live checks are Woodcutting, Smithing, Cooking and Fletching. | The division between prior guarantees and new training could be misread. | Name both groups explicitly. | Fixed in `chapter-3-6.astro`. |
| LOW | 3.6, Blood Moon reward and Chapter 3 ledger | Calls the tome eligible for skills “over level 70.” | [Jagex's release notes](https://secure.runescape.com/m=news/the-blood-moon-rises---out-today?oldschool=1) say **level 70 or above** for each of six 30,000-XP uses. | A player at exactly 70 could defer a usable reward. | Correct both descriptions; keep the tome outside prerequisite arithmetic. | Fixed in `chapter-3-6.astro` and `CHAPTER-3-DEPENDENCY-LEDGER.md`. |

**Counts:** BLOCKER 0; HIGH 0; MEDIUM 1; LOW 2. No unresolved finding requires a route restructure.

## Literal chapter-boundary pass

Each row compares mandatory exit state with the next chapter's entry assumption. A live bank/XP check is intentional where drops, prior optional play or spending vary; an optional block is never the sole supplier.

| Boundary | Reconciled handoff |
| --- | --- |
| Tutorial Island → 1.1 | Tutorial/“Learning the Ropes” foundation starts the account; 1.1 obtains its own starter tools, coins, quests and transport. |
| 1.1 → 1.2 | Early quest/transport unlocks and initial skilling precede the Fishing/Tempoross and thieving loops; no optional reward is needed. |
| 1.2 → 1.3 | Actual 50 Agility and Thieving precede Rogue's Den, and the chapter's liquid-coin stop is separate from later earned/alched value. Optional Angler is not consumed. |
| 1.3 → 1.4 | Glass, magic-log and quest reserves are carried into their named consumers; the actual-46 Crafting orb bridge is explicit, not inferred from making glass twice. |
| 1.4 → 2.1 | Chapter 1's conservative Crafting floor is actual 55, not guaranteed 56. The 1,590-orb/staff block and standard-spellbook Alchemy supply the Chapter 2 floor. The Museum Camp bank and clay-bracelet checks are explicit. |
| 2.1 → 2.2 | The actual-63 Crafting floor and real coin/bank checks replace an assumed payout or an optional construction method. |
| 2.2 → 2.3 | Quest prerequisites, materials and the staged Runecraft/Slayer bridges are obtained before their consumers. |
| 2.3 → 2.4 | Required Rogue and minigame/quest unlocks persist; Recipe for Disaster subquests and their item checks are mandatory, not optional panels. |
| 2.4 → 2.5 | Barrows gloves and earlier transport/skill floors carry forward; later quest XP is claimed only after its awarding quest. |
| 2.5 → 2.6 | Live Magic, Thieving, Runecraft and combat checks cover the next quest gates; the guide does not borrow XP from a future reward. |
| 2.6 → 2.7 | Late Chapter 2 quests and selectable XP are resolved before the 2.7 exit audit; banked reserves remain subject to live checks. |
| 2.7 → 3.1 | The Chapter 2 exit deliberately identifies remaining actual-level gaps; optional Sepulchre wealth and optional gear do not fund or equip Chapter 3. |
| 3.1 → 3.2 | WGS, Final Dawn and Fremennik Exiles hard gates are established by actual levels and completed prerequisite quests; 60 Mining is not an Exiles hard gate. |
| 3.2 → 3.3 | One Final Dawn lamp goes to Ranged by default; at the exact actual-60 floor it leaves only 5,062 XP to actual 62. No lamp is counted twice. |
| 3.3 → 3.4 | Actual 62 only unlocks Arrav; the route then reaches actual 75 Ranged and earns the mandatory Fire Cape with deterministic adamant-crossbow/ammunition stock. |
| 3.4 → 3.5 | Live cash-reset and resource checks support the grandmaster-quest run without 35m Sepulchre proceeds, a rare crossbow, or optional drops. |
| 3.5 → 3.6 | DS2/DT2 and other quest rewards precede the four final Blood Moon actual-level checks. Fire Cape, flail and quest/access chain are present; the final tome cannot retroactively satisfy an entry gate. |

## Current Quest Cape and gate coverage

The [current quest-list mirror](https://osrsindex.com/wiki/quests-list?site=osrs_wiki) was compared name-by-name against the 17 chapter sources, with punctuation/alternate-title matches checked manually. It has 182 released entries through Fallen From Grace; [Jagex's 8 September release](https://secure.runescape.com/m=news/a-ruff-situation--crab-quest-out-today?oldschool=1) adds A Ruff Situation and Crab Quest, both in 3.3. Thus **all 184 quests identified as released at audit time appear in mandatory route content**. Apparent string misses were title punctuation/typography, Desert Treasure II's full subtitle, and Recipe for Disaster's prefixed subquest names; the subquests are present. The Ides of Milk, The Red Reef, Fallen From Grace and The Blood Moon Rises are covered. The 3.5 classic cleanup and the 3.6 final live journal check close the remaining quest list. Announced but unreleased quests were not added. The in-game journal, not this dated snapshot, remains the final authority before spending 99,000 coins on the cape.

Hard gates were checked against current quest references for [While Guthix Sleeps](https://osrsindex.com/wiki/while-guthix-sleeps?site=osrs_wiki), [The Final Dawn](https://osrsindex.com/wiki/the-final-dawn?site=osrs_wiki), [The Fremennik Exiles](https://osrsindex.com/wiki/the-fremennik-exiles?site=osrs_wiki), [The Curse of Arrav](https://osrsindex.com/wiki/the-curse-of-arrav?site=osrs_wiki), [Monkey Madness II](https://osrsindex.com/wiki/monkey-madness-ii?site=osrs_wiki), [Dragon Slayer II](https://osrsindex.com/wiki/dragon-slayer-ii?site=osrs_wiki), [Desert Treasure II](https://osrsindex.com/wiki/desert-treasure-ii-the-fallen-empire?site=osrs_wiki) and [The Blood Moon Rises](https://osrsindex.com/wiki/the-blood-moon-rises?site=osrs_wiki). The route distinguishes actual/nonboostable gates from optional boost routes. Specifically, Exiles' 60 Mining is only a boostable option for mining lunar ores, not a quest hard requirement; Arrav consumes actual 62 Ranged; and Blood Moon checks all ten nonboostable levels after its prior quest chain. Earlier Tempoross 35 Fishing, Rogue's Den 50/50, MTA spell levels, Death on the Isle, Hand in the Sand, Earth-orb spellbook and Wizards' Guild checks remain in place. No old 77-Thieving, 74/99-Fishing, 98-Agility, 92-Ranged, 93-Magic, 75-Slayer or 100-combat target re-enters mandatory progress.

## Deterministic XP and selectable rewards

Recomputed from the route's conservative floors, not from optional methods or repeated reward claims:

| Chain | Check |
| --- | --- |
| Crafting 1 | Fixed pre-glass quest XP is 22,950; 1,600 molten glass adds 32,000 once, giving 54,950 XP. Actual 46 starts at 67,983, so the explicit bridge is 13,033 XP. 1,590 unpowered orbs add 83,475 XP; the later Chapter 1 quest/lens rewards yield a conservative 179,825.4 XP exit (actual 55). |
| Crafting 2 | 1,590 Earth battlestaff attachments add 178,875 XP. Slug Menace 3,500, Shilo Village 3,875 and Fremennik Isles 5,000 bring the conservative Chapter 2 floor to **371,075.4 XP**, past actual 63's 368,599 threshold. Fallen From Grace and Exiles XP occur later, before their later Crafting consumers. |
| Magic | At exact actual 63 (368,599 XP), 1,590 High Alchs add 103,350 and the named Chapter 2 quest rewards bring the conservative calculation to 514,111 XP (actual 66). Path of Glouphrie then adds 5,000, leaving 28,842 XP to actual 67 for WGS. Later actual 75 is trained before DS2/DT2; Slayer/burst overlap is not counted as guaranteed free XP. |
| Runecraft | The staged bridges remain 47 → 50 → 52 → 55 → 60. From conservative floors: Perilous Moons leaves 36,917 XP to 47; Fallen From Grace leaves 21,206 to 50; Devious Minds leaves 17,327 to 52; Final Dawn leaves 17,976 to 55; Exiles leaves 77,106 to 60. Each reward occurs only after its quest. |
| Slayer | Exact 58 (224,466 XP) plus Perilous Moons 40,000 and Heart of Darkness 8,000 leaves 1,276 XP to 60; Exiles' 50,000 follows the 60 gate. At exact 69 (668,051 XP), MM2's 80,000 leaves 348,227 to actual 74. There is no premature 75 requirement. |
| Ranged/Thieving | Final Dawn's single 55,000-XP lamp takes exact actual-60 Ranged from 273,742 to 328,742, leaving 5,062 to actual 62. Arrav uses 62; 70 brings a quest break; 75 is normal Fire Cape readiness, not a game gate. Thieving progresses through actual 50, 53, 56 and 72 checkpoints with live XP/coin stops; no 77 gate is assumed. |

Selectable XP was checked at its point of claim: Tourist Trap, Shadow of the Storm, Legends, Recipe for Disaster, diaries, Path of Glouphrie, Final Dawn, MM2, Duke-related rewards, A Night at the Theatre, Contact!, DS2/Ellen, DT2 ancient lamps and the Curse of the Empty Lord museum lamp. No single lamp is assigned twice or used to meet a requirement of the quest that awards it. The [Blood Moon tome](https://secure.runescape.com/m=news/the-blood-moon-rises---out-today?oldschool=1) is post-quest discretionary XP only.

## Cash, resources, RNG and optionality

The 1.35m Chapter 1 liquidity checkpoint is a **working float**, not a guaranteed perpetual balance. The 1,590-staff cycle's nominal 3.657m gross buy/alch spread is not simultaneous cash-on-hand or net profit after runes/shop variation. Early construction/other named outlays and Kingdom's possible daily withdrawals can absorb it. Chapter 3.4 therefore checks live coins, permits pausing discretionary Kingdom funding and offers repeatable cash resets (Wealthy Citizens, Agility Pyramid, Sepulchre or Giants' Foundry) before buying bounded rune/quest-supply batches. Chapter 3.5 protects the 99,000-coin cape fee and plausible death-reclaim reserves. No mandatory purchase was found to require the skipped 35m Sepulchre grind; no exact ending coin stack is claimed.

Major reserve/consumer checks: 16 magic logs cover 12 for Desert Treasure I, one for Mourning's End I and three for the MM2 balloon; 1,600 glass yields 1,590 orbs plus named quest/birdhouse glass and a small spare buffer. Bracelets of clay are consumed flexibly after checking existing soft clay/furniture. Two reserved goutweed cover later quests; the optional gout tuber is not a hard input. Slime, sap, fish, seeds, jewellery, stardust, bones, runes, quest outfits/tools, mith grapple and cats are either bank-audited at their use or have a repeatable acquisition. Teak seeds are not the sole timber path. Dragonstone/key halves have a repeatable Gorak → Taverley-chest fallback. Clean necklace and essence pouches have repeatable sources. The mandatory ranged floor is a Keldagrim-limbs **adamant crossbow**, with ordinary/diamond (e)/ruby (e) bolt stock audited before conditional production; 73 Smithing and 63–65 Fletching are not universal gates. An owned RCB bypasses work, but RCB drop/runite-limb RNG does not enter the mandatory graph.

Optional Angler, early melee, Piscarilius, Sepulchre, black mask/Slayer helmet, assembler, CG/Bowfa/crystal, blowpipe, zenytes, basilisk jaw, Barrows pieces, DT2 uniques, Maggot King uniques, POH conveniences and post-guide bossing supply no mandatory downstream assumption. Wintertodt supplies, Sulliuscep caps, birdhouse teak seeds, gout tuber, quest gems/seeds and other variable outcomes have bank bypasses, bounded expectations or repeatable fallback methods. No unbounded rare unique is required.

## Spellbooks, combat, risk and teaching

The standard spellbook is explicitly restored before Telekinetic Grab/MTA, Charge Earth Orb, High Alchemy, bolt enchantment and WGS standard spells when relevant; making a house tablet at a lectern is not falsely treated as standard-only. Lunar/Astral Contact, Ancient spell access and the DT2 vault/Leviathan are checked separately. The only newly found handoff gap was the DT2 Ancient → standard change for Whisperer's Earth Wave, corrected above.

Seren, Jad, Glough, Entry Mode Theatre, MM2 gorillas, quest Vorkath/Galvek, WGS, the four DT2 bosses/finale and Drakan retain reproducible baselines: dragon scimitar/defender, Fire Cape, Barrows gloves, Piety, adamant crossbow/finite bolt stock, Ava's accumulator, upgraded Iban/Ancient staff/ordinary spells, then the deterministic Hallowed flail. Actual food, Prayer, runes and deaths are checked per encounter; rare gear is never silently presumed. Ranged Jad remains the default two-prayer encounter outside melee distance, with one action between checks. A first failure is not recast as a Bowfa dependency.

Risk language distinguishes a safe Fight Caves death for normal and solo Hardcore accounts from HCGIM life loss, and distinguishes Blood Moon's item-preserving Vampyrium deaths (which **do** remove Hardcore status, per [Jagex](https://secure.runescape.com/m=news/the-blood-moon-rises---out-today?oldschool=1)) from its Theatre segment's ordinary grave risk. Wilderness, Gauntlet references, Seren, WGS/DT2, DS2 deathbank and Entry Theatre warnings do not promise universal safety or free reclaim. Newer Wintertodt Warmth, Tempoross, Rogue's Den, Wealthy Citizens, Foundry, Guardians of the Rift, birdhouses/Fossil Island/Sulliusceps, Mahogany Homes, Sailing/Varlamore, Sepulchre, Perilous Moons, Wyrmscraig/Golem Crafting, Frost Crabs and Vampyrium are introduced with a location/start, operational loop, reason and stop/checkpoint rather than only a name.

## Build and generated-output regression checks

`npm run build` succeeded and emitted 22 static pages, including all 17 Intermediate chapters. The 17 generated Intermediate chapter HTML files parse with **zero `parse5` errors**; representative 1.1, 1.4, 2.1, 2.7, 3.1, 3.4 and 3.6 each parse cleanly. Generated markup has **254 unique required progress IDs**, **four optional IDs** (258 total), **17 unique chapter localStorage keys**, no duplicate IDs/keys, and no missing Intermediate `href` target. The optional IDs belong to Angler (1.2), early AFK combat (1.4), Piscarilius (2.1) and black mask (3.1); the optional endgame paths do not enter graduation. Informational method comparisons do not create required checkboxes. Chapter 3.3's weapon/ammo checkpoint is one mandatory **outcome**, not universal Smithing/Fletching checkboxes. All 17 current-page nav states and adjacent pagers match route order; 3.5 → 3.6 works, 3.6 has overview/back but **no next/3.7** link. The existing left chapter rail has independent scrolling and a responsive small-screen rule; no UI redesign was made. These are static checks, not an interactive browser-session test.

## Verdict

The currently released quest set, mandatory prerequisite chains, rewards, resources, cash resets, spellbook transitions and final progress/navigation state reconcile with the literal mandatory route. No known blocker, high-impact mechanic error, mandatory optional-content dependency, unbounded rare-drop dependency or cash dead-end remains. A future quest release can change cape eligibility; Chapter 3.6 deliberately requires a fresh live all-green journal check before cape purchase. No Chapter 3.7 is authored.

**RELEASE READY — no known mandatory-route blockers remain.**
