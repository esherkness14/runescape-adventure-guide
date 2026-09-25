# Intermediate Ironman Guide — Chapter 2 dependency ledger

This is a planning and audit document, not player-facing guide copy. It establishes the mandatory dependency spine before any Chapter 2 Astro page is written.

## Audit basis and status language

Verified on **2026-09-24** against:

- the four current Intermediate Chapter 1 pages and `CHAPTER-2-BOUNDARY-AUDIT.md` in this repository;
- live BRUHsailer Chapter 2 and Chapter 3 source at commit [`ecd8451`](https://github.com/Osrsper/BRUHsailer/commit/ecd84514afe12ad715c48ba5bcf2c9f2b088309c), pulled on 2026-09-24; and
- current OSRS Wiki/Jagex mechanics linked in the source register.

Status labels used below:

- **Verified** — a current requirement/mechanic was checked against a current primary or maintained mechanics source.
- **Derived** — arithmetic or a route conclusion derived from verified facts; recheck the account's live XP/items at the checkpoint.
- **Route decision** — our proposed design, not a game requirement.
- **Open** — authoring or ordering work still needs a decision or an exact live-account calculation.

All level expectations are conservative checkpoints. Quest rewards may reduce a later grind, but mandatory steps must verify the real level rather than assume incidental XP landed exactly as BRUHsailer projects.

## Chapter 1 handoff used by this ledger

The boundary audit remains authoritative for the full item and unlock list. The approximate skill handoff is:

| Skill | Expected handoff | Important interpretation |
| --- | ---: | --- |
| Attack / Strength / Defence | 46 / 50 / 34 | The optional 65/65/65 block is never assumed. |
| Hitpoints / Ranged / Prayer / Magic | 39 / 45 / 43 / 63 | Ava's attractor is complete; retain 75 steel arrows for the accumulator upgrade. |
| Runecraft / Construction / Agility | 24 / 39 / 51 | Chapter 2 must explicitly supply Construction and Agility levels. |
| Herblore / Thieving / Crafting / Fletching | 40 / 77 / 56 / 46 deliberate | BRUHsailer's displayed 48 Fletching is incidental, not the route checkpoint. |
| Slayer / Hunter | at least 20 / 46 | Slayer must be trained explicitly for Sins of the Father and Troubled Tortugans. |
| Mining / Smithing | 44 / 42 | Both require explicit large Chapter 2 blocks. |
| Fishing / Cooking | 74 / 60 | Fishing already exceeds every identified Chapter 2 quest gate; Cooking does not. |
| Firemaking / Woodcutting / Farming | 89 / 70 / 63 | Woodcutting already meets Song of the Elves; Farming needs passive lead time. |

Critical carried resources include 1,590 Earth orbs, four mushroom pies, planted Fossil Island teaks, the crystal saw, gout tuber, reserved quest supplies, transport jewellery, and the Chapter 1 unlock network. See the boundary audit rather than duplicating its complete inventory here.

### Why the live BRUHsailer finish line cannot be copied wholesale

The live source ends Chapter 2 at the approximate levels below. “Intermediate floor” is the current dependency-based proposal, not a prediction of exact incidental XP.

| Skill | Live BRUHsailer Ch. 2 end | Intermediate dependency floor | Difference to expose in the rewrite |
| --- | ---: | ---: | --- |
| Attack / Strength / Defence | 62 / 77 / 70 | Proposed 60 / 70 / 70 | Guild entry, defender, King's Ransom, and Piety set the useful stops; quest XP may push Attack/Strength higher. |
| Hitpoints | 64 | Organic | No standalone Chapter 2 grind identified. |
| Ranged | 62 | 60, or 62 if The Curse of Arrav stays | 60 is the MEPI gate; source chinning is not mandatory. |
| Prayer | 70 | 70 | Retained for Piety, but the number of dragons is recalculated. |
| Magic | 93 | 65; 75 only if Mage Arena II is retained | Most source Magic XP comes from the optional long Sepulchre/alching plan. |
| Runecraft | 40 | No new hard stop identified | Do not force 40 without a named dependency. |
| Construction | 73 | 70 | Exact 70 is SotE; source's extra levels are incidental. |
| Agility | 98 | 70 | Exact actual 70 is SotE; Sepulchre floors 1–5 require 52/62/72/77/87, with floor-entry boosts now allowed. |
| Herblore | 73 | 70 | Exact 70 is SotE. The resource budget remains open. |
| Thieving | 86 | 77, or 78 for the retained diary action | Artefact and Sepulchre XP are not assumed. |
| Crafting | 68 | 61+ | Earth battlestaves clear Lunar's 61; 56 also clears Sins. Higher incidental levels are welcome. |
| Fletching | 69 | 60 | Exact 60 is the Sins gate. |
| Slayer | 59 | 51; 56 if Path of Glouphrie stays as Ch. 3 prep | 50 Sins and 51 Tortugans are the Chapter 2 spine; 56 buys a real WGS prerequisite. |
| Hunter | 73 | 70 | Exact 70 is SotE. |
| Mining | 73 | Recommended 72 | 72 makes Making Friends boost-free and already clears SotE. |
| Smithing | 74 | 70 | Exact 70 is SotE; 74 supported the source's optional Sepulchre nail plan. |
| Fishing | 99 | 74 handoff | No mandatory Fishing XP remains in the identified Chapter 2/early Chapter 3 route. |
| Cooking | 81 | 70 | Real 70 closes Awowogei/RFD without tick-manipulated cut-eat. |
| Firemaking | 89 | 89 handoff | Already clears every listed Chapter 2 gate. |
| Woodcutting | 73 | 70 handoff | Already clears SotE; source quest XP may raise it. |
| Farming | 94 | 70 | Exact 70 is SotE; 94 is passive efficiency, not a gate. |
| Sailing | 67 | Proposed 67 | Retained because the ship tier and Chapter 3 route consume it. |

## Route-level conclusions

1. **Fishing 99 is not mandatory.** Level 74 already clears the identified Chapter 2 Fishing gates. Ordinary Barbarian Fishing can be an optional Strength/Agility/Cooking supplement; 99 is an optional “finish Fishing forever” branch.
2. **Cooking 70 is mandatory and explicit.** Normal leaping-fish gutting can contribute, but the route must include a visible 60→70 catch-up before the Awowogei RFD subquest.
3. **Agility stops at an actual 70 for Song of the Elves.** Use 52 for Sins, a boost at 63/65 for Making Friends with My Arm if desired, and exact unboosted 70 for Song of the Elves. Sepulchre 84/98 is optional. Its current floor requirements are 52/62/72/77/87 and floor entry is boostable; at actual 72, a summer pie can open floor 4. Floor 5's Grand Coffin has a separate, boostable 84 Thieving **or** 92 Agility check.
4. **The dragon block is an output budget, not 1,300 compulsory kills.** Calculate bones from live Prayer XP, subtract quest rewards and existing bones, choose safe Isle of Souls blues or faster opt-in Wilderness greens, and obtain any remaining combat/Crafting/GP goals independently when that is more pleasant.
5. **Construction needs three real checkpoints:** 50 for adept Mahogany Homes, at least 62 for a +5 build of the level-67 mahogany eagle lectern, and exact unboosted 70 for Song of the Elves.
6. **Thieving 77 is enough for the mandatory route.** A Dorgesh-Kaan rich-chest diary interruption needs 78; train that one level explicitly only if the diary step remains.
7. **Sailing is mandatory progression.** Level 67 is the proposed Chapter 2 handoff because the live macro route and Chapter 3 ship plan use the camphor hull/Deepfin tier. It is not a Song of the Elves gate.
8. **The current live Sins of the Father gate is 50 Slayer, not 42.** Troubled Tortugans then requires 51. These must be deliberate training checkpoints.
9. **The live BRUHsailer floor-boost idea is valid under the August 12, 2026 update.** Jagex lowered floor 4 to 77 and floor 5 to 87, and explicitly permits boosting for entry. These are optional activity breakpoints, not new Chapter 2 requirements.
10. **The tentative 2.1–2.7 grouping works, with one ordering seam:** 2.3 can reach 45 Sailing, but Troubled Tortugans and the 45→67 continuation must either wait for 51 Slayer in 2.5 or move the Slayer checkpoint earlier. The cleaner recommendation is to split Sailing into an introductory 2.3 block and a post-Sins/Tortugans continuation, with an explicit forward pointer.

## Provisional macro map

The requested headings remain intact. The “exit state” is the minimum state later sections may assume.

| Section | Purpose | Mandatory exit state | Optional continuation |
| --- | --- | --- | --- |
| **2.1 — Cash & Construction Backbone** | Convert the Earth-orb stock, establish cash and house travel, unlock efficient contracts. | Earth orbs processed; 50 Construction; 350+ Mahogany Homes points/plank sack; base Construction sufficient for a verified +5 build of the level-67 mahogany eagle lectern; house tablets available. | Piscarilius artefact multiskilling; extra contracts; 78 Thieving diary step. |
| **2.2 — Quest Infrastructure** | Build the transport, weapon, kingdom-prerequisite, and quest-point spine. | Dragon Slayer I finished; Underground Pass/upgraded Iban's staff, Shilo, Dorgesh-Kaan chain, Tears of Guthix, Between a Rock, Heroes and Monkey Madness I complete; actual 50 Smithing and 50 Mining. Family Crest was completed in 1.4. | Opportunistic diaries and geographic multi-questing. |
| **2.3 — Sailing, Combat & the Kingdom** | Start passive kingdom resources, close RFD's lighthouse prerequisite, teach Sailing, and establish first ship tiers. | Throne of Miscellania/Royal Trouble; Alfred Grimhand's Barcrawl/Horror from the Deep; Sailing through actual 45; clear statement that 51 Slayer gates Troubled Tortugans. | Barbarian Assault comfort unlock; Dagannoth Rex deferred; active Barracuda Trials and costly hull upgrades are optional. |
| **2.4 — Lunar, Cooking & Recipe for Disaster** | Unlock spellbook/quest utilities and close the food/quest-point gates. | Fremennik Isles, Lunar Diplomacy, Swan Song, Making Friends with My Arm, 70 Cooking, 175 quest points, and Recipe for Disaster complete. | Fishing 99 branch; extra utility quests not needed by the spine. |
| **2.5 — Defender, Piety & Morytania** | Establish durable melee, Prayer, Kourend, and Myreque progression. | 130 Attack+Strength entry (proposed 60/70), dragon defender and 60 Defence, King's Ransom/Knight Waves, 70 Defence, 70 Prayer/Piety, 50 Slayer and Sins of the Father, then 51 Slayer and Troubled Tortugans; Sailing continuation to proposed 67. | More dragons, 75 Magic/Mage Arena II, Sepulchre resource route, higher Slayer. |
| **2.6 — The 70s: Song of the Elves Preparation** | Close every missing exact skill gate without optional assumptions. | Actual 70 Agility, Construction, Farming, Herblore, Hunter, Mining, Smithing, and Woodcutting; 60 Ranged for MEPI already scheduled; adequate quest supplies. | 72 Agility/floor 3; 73 Construction or other incidental targets; 84/98 Agility. |
| **2.7 — The Elf Finale** | Complete the elf chain as prepared quests, not one collapsed instruction. | Regicide → Roving Elves → Mourning's End Part I → Mourning's End Part II → Song of the Elves complete. | Prifddinas skilling and post-Chapter goals. |

### Live-source coverage and disposition register

BRUHsailer interleaves many quests and diaries for tile/EHP efficiency. The Intermediate pages may regroup them, but the dependency decision must be visible rather than losing content accidentally.

| Live Chapter 2 cluster | Proposed home / disposition | Dependency decision |
| --- | --- | --- |
| Ernest the Chicken and Animal Magnetism | Already moved into Intermediate Chapter 1 | Do not repeat. Ava's attractor and 20 Slayer are handoff state. |
| Family Crest, Ernest the Chicken, Animal Magnetism, Barbarian Training foundation, basic diaries already completed in the Intermediate route | Chapter 1 is authoritative | Do not replay a BRUHsailer step merely because its current Chapter 2 source still contains it. Dragon Slayer I is different: start only in 1.4 for the anti-dragon shield, finish in 2.2. |
| Dragon Slayer I; Underground Pass/Iban upgrade; Between a Rock; Heroes; Shilo; Death to the Dorgeshuun/Another Slice; Tears of Guthix; Monkey Madness I | 2.2 infrastructure | Retain the unlock/prerequisite spine. Group into coherent quest inventories; diary coincidences are secondary. |
| Haunted Mine | 2.5 Morytania/combat block | Salve amulet matters for later undead combat, not the 2.3 kingdom or 2.4 Lunar/RFD gate. |
| Recruitment Drive/Wanted!/Slug Menace, One Small Favour, Temple of the Eye, Enakhra's Lament, Spirits of the Elid, Icthlarin's Little Helper, Contact!, Scorpion Catcher, Ghosts Ahoy, Big Chompy, Zogre Flesh Eaters | 2.4–2.5 or later named prerequisite batches | Retain only where they feed Initiate/Proselyte, RFD, Lunar, later quest chains, or route travel. Verify inventories per quest; do not preserve source zig-zagging by default. |
| Rag and Bone Man II kills and tiny diary actions embedded in unrelated travel | Postpone/group unless an immediate reward closes a documented XP budget | Never let collection errands obscure the mandatory quest block. Rag and Bone Man II itself needs 40 Slayer, already supplied by Royal Trouble planning if retained later. |
| Pandemonium, Prying Times, Current Affairs, charting/port tasks, ship upgrades, Tempor Tantrum | 2.3 Sailing primer through 45 | Retain the quest and relaxed charting/task spine. Explain the systems rather than copying coordinate-by-coordinate routing; Tempor Tantrum and material-costly ship upgrades are optional choices, not level-45 gates. |
| Alfred Grimhand's Barcrawl and Horror from the Deep | 2.3, before Recipe for Disaster in 2.4 | Both are mandatory RFD infrastructure, not optional combat/bossing. |
| Barbarian Assault queen run, granite body, fighter torso; Dagannoth Rex/berserker ring | Optional combat-upgrade branches around 2.3/2.5 | Neither is a gate for SotE, Warriors' Guild, or Piety. Give a comfort/reward case and a clean rejoin point. Do not make a rare ring drop a cash-flow assumption. |
| Throne of Miscellania/Royal Trouble and early Slayer | 2.3 | Retain to start passive resources and reach the first real Slayer checkpoint. |
| Fremennik Isles, Lunar, Slug Menace, One Small Favour completion, Cold War, Making History, Swan Song, Making Friends, full RFD | 2.4 | Retain. Cooking 70 and the quest-point gates are explicit. |
| Ratcatchers, A Tail of Two Cats, Tai Bwo Wannai Trio, Eagles' Peak and other RFD/prerequisite side chains | 2.4 prerequisite batches | Retain only to the extent required by the chosen quest spine/RFD or a valuable unlock; remove incidental diary pacing from the dependency layer. |
| At First Light, Perilous Moons, The Heart of Darkness, Shadows of Custodia, Vale Totems/Scrambled! | Late 2.5 optional quest-and-unlock cluster unless a selected Chapter 3 plan consumes it | The live source uses this Varlamore cluster after 51 Slayer. It is not a SotE prerequisite. Heart of Darkness needs 55 Mining, 48 Thieving, 48 Slayer, and 46 Agility; Perilous Moons needs 48 Slayer. Mark player-facing inclusion as a route choice, not a hidden requirement. |
| Myreque chain through Sins of the Father | 2.5 | Retain. Sins unlocks Sepulchre as an option and provides important regional progression. |
| Green dragons to a fixed count; chin catch/chin Ranged training; long Sepulchre; Blast Mine/UIM gold; arteglass; one-tick karambwans | 2.5–2.6 deconstructed training blocks | Replace each with dependency stops and method choices. Tick/high-input methods remain alternatives. |
| Defender of Varrock, The Curse of Arrav, The Path of Glouphrie | Late 2.6 Chapter 3-prep decision | Defender and Path feed While Guthix Sleeps early in live Ch. 3. If kept, the real extra gates are listed below; Curse is useful quest progression but not needed to justify SotE. |
| Mage Arena I/II, Dream Mentor, Fairytale II completion, Land of the Goblins, Grim Tales, Rum Deal/Cabin Fever/Great Brain Robbery, Rag and Bone Man II | Late 2.6/after 2.7 quest-backlog groups | Some unlock durable spells/travel or future prerequisites, but they are not all SotE gates. Retain only with a named payoff and exact requirement; otherwise defer with a Chapter 3 catch-up. Mage Arena II specifically requires 75 Magic. |
| Troubled Tortugans, ship facilities, Jubbly/other training to 67 | Resume after 51 Slayer near end of 2.5 or in 2.6 | Retain for the Chapter 3 ship plan. This is the only material grouping change recommended by the audit. |
| Regicide through Song of the Elves | 2.7 | Retain and expand into five properly prepared quest blocks. |

## Hard dependency ledger

### 2.1 — Cash & Construction Backbone

| Gate / activity | Exact requirement | Boostable? | Expected before | Mandatory supplier | Relevant XP / incidental output | Downstream reason | Source | Status / notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Attach Earth orbs | 58 Crafting | Yes: mushroom pie +4 | 56 Crafting; four pies banked | Chapter 1 stock | 1,590 staves × 112.5 = **178,875 Crafting XP** | Cash engine; clears 61 Crafting for Lunar without relying on other skilling | [Battlestaff](https://oldschool.runescape.wiki/w/Battlestaff), local boundary | Verified / derived 2026-09-24. Keep the boost instruction until actual 58. |
| Alch finished staves | 55 Magic and Nature runes | No useful dependency issue | 63 Magic | Chapter 1 Magic and rune/cash stock | 1,590 × 65 = **103,350 Magic XP**, excluding other casts | Cash and progress toward 65/66 Magic gates | [High Level Alchemy](https://oldschool.runescape.wiki/w/High_Level_Alchemy) | Verified / derived 2026-09-24. Bankstanding is default; artefacts are optional. |
| Wizards' Guild purchase access | 66 Magic | Yes: 63 + Wizard's mind bomb (+3) | 63 | Chapter 1 Magic | None required | Battlestaff/shop logistics if retained | [Wizards' Guild](https://oldschool.runescape.wiki/w/Wizards%27_Guild) | Verified 2026-09-24. Do not call 66 a permanent checkpoint here. |
| Adept Mahogany Homes contracts | 50 Construction | Use actual 50; crystal saw does not obtain contracts | About 39 before the explicit Novice bridge to 50 | Teak/plank preparation and Novice Mahogany Homes | Contract XP varies by layout; do not promise BRUHsailer's exact level | Points and relaxed Construction progression | [Adept contract](https://oldschool.runescape.wiki/w/Adept_contract) | Verified 2026-09-24. |
| Plank sack | 350 Mahogany Homes points | No | Existing point balance varies after Chapter 1 Mahogany Homes | From zero points, 88 full-value adept contracts × 4 = 352; subtract points already earned from Novice/earlier work | Contract XP should put the account near the lectern base target, but verify | Useful for later contracts and the source macro plan | [Mahogany Homes Rewards](https://oldschool.runescape.wiki/w/Mahogany_Homes_Reward_Shop) | Verified/derived 2026-09-24. Do not prescribe 88 if earlier points reduce the count. |
| Mahogany eagle lectern | 67 Construction to build; 2 mahogany planks and 1 gold leaf | Yes: crystal saw +3 plus an available +2 tea allows **base 62**; boosts must be active at build | 50+, then contracts | Mandatory 2.1 Construction block and retained crystal saw | 580 Construction XP is irrelevant; the unlock matters | Makes house teleport tablets and supports sustainable routing | [Constructed items](https://oldschool.runescape.wiki/w/Constructed_items), [Temporary skill boost](https://oldschool.runescape.wiki/w/Temporary_skill_boost) | Verified 2026-09-24. Author must name the exact kitchen shelf/tea setup and recheck it before page copy. |
| Optional Dorgesh-Kaan rich-chest diary action | 78 Thieving | A visible Thieving boost can satisfy the chest interaction; route policy should still use actual 78 if the task is retained | 77 | Explicit one-level catch-up only if kept | Artefact XP is optional and cannot supply it silently | Lumbridge & Draynor elite task, not core progression | [Lumbridge & Draynor Diary](https://oldschool.runescape.wiki/w/Lumbridge_%26_Draynor_Diary) | Verified/route decision 2026-09-24: postpone or add a visible actual-78 checkpoint. |

### 2.2 — Quest Infrastructure

**Committed order and stops:** actual 50 Smithing → finish Dragon Slayer I → Underground Pass/Iban upgrade → Shilo Village → Death to the Dorgeshuun → Tears of Guthix → Another Slice of H.A.M. → Between a Rock → actual 50 Mining → Heroes' Quest → Monkey Madness I. No 2.2 Herblore grind: the Chapter 1 actual-40 baseline covers Heroes' 25. The 2,000 stardust banked in Chapter 1 buys the celestial ring once; later stars are for relaxed Mining XP, not a second quota. The optional 65/65/65 melee and Piscarilius blocks supply no mandatory levels.

| Gate / activity | Exact requirement | Boostable? | Expected before | Mandatory supplier | Relevant XP / incidental output | Downstream reason | Source | Status / notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Dragon Slayer I and anti-dragon shield | 32 quest points to start; complete it for Heroes' Quest | N/A | 1.4 starts the quest only to claim/equip the shield; it does not finish it | Finish coherently in 2.2 | 18,650 Strength and Defence XP each | Heroes' Quest prerequisite; safe Chapter 1 dragon-bone collection | [Dragon Slayer I](https://oldschool.runescape.wiki/w/Dragon_Slayer_I), [Anti-dragon shield](https://oldschool.runescape.wiki/w/Anti-dragon_shield) | Corrected 2026-09-24: current shield equip requires starting Dragon Slayer I, so the minimal 1.4 partial-unlock instruction is explicit. |
| Actual 50 Smithing | Between a Rock gold helmet needs 50 Smithing | Quest skill can be boosted, but route takes an actual level | About 42 | Early 2.2 Giants' Foundry/anvil checkpoint | Between a Rock then awards 5,000 Smithing XP; do not count it before entry | Between a Rock; later quests | [Between a Rock...](https://oldschool.runescape.wiki/w/Between_a_Rock...) | Stop at actual 50 now; 70 is a later dedicated block. |
| Underground Pass | 25 Ranged | No issue | 45 | Chapter 1 | Iban's staff access | Regicide and elf chain | [Underground Pass](https://oldschool.runescape.wiki/w/Underground_Pass) | Verified 2026-09-24. |
| Shilo Village | Jungle Potion prerequisite and quest supplies/combat | N/A | Prerequisite foundation present | Explicit quest block | Access to Shilo; prerequisite for Lunar via Lunar's chain | Lunar Diplomacy and convenient travel | [Shilo Village](https://oldschool.runescape.wiki/w/Shilo_Village) | Verified 2026-09-24. |
| Dorgesh-Kaan access | Death to the Dorgeshuun chain; 23 Agility and 23 Thieving in chain | Requirements already exceeded | 51 Agility / 77 Thieving | Explicit quest block | Transport and utility | Source macro route and later diary/quest infrastructure | [Death to the Dorgeshuun](https://oldschool.runescape.wiki/w/Death_to_the_Dorgeshuun) | Verified 2026-09-24. Do not force 78 Thieving here. |
| Between a Rock... | 30 Defence, 40 Mining, 50 Smithing | Mining/Smithing are boostable, but route trains actual 50 Smithing | At least 34 Defence / 44 Mining / actual 50 Smithing | Early Smithing block; existing Defence/Mining | 5,000 Mining, Smithing and Defence XP each, counted only afterward | Arzinian gold mine and useful Mining XP before Heroes | [Between a Rock...](https://oldschool.runescape.wiki/w/Between_a_Rock...) | Verified 2026-09-24; no optional melee branch assumed. |
| Actual 50 Mining | Heroes' Quest needs 50 Mining | Boostable for quest, but route takes actual 50 | About 44 before Another Slice and Between a Rock | First claim their 3,000 + 5,000 Mining XP, then train only the visible remainder | Stop at actual 50; no 52 Legends target yet | Heroes and Throne of Miscellania | [Heroes' Quest](https://oldschool.runescape.wiki/w/Heroes%27_Quest) | 2026-09-24 route decision: stars or Motherlode Mine default, calcified deposits only if already unlocked. |
| Heroes' Quest | 55 quest points; 53 Cooking, 53 Fishing, 25 Herblore, 50 Mining; Shield of Arrav, Lost City, Merlin's Crystal, Dragon Slayer I | Listed skills are boostable, but route uses actual 50 Mining | 60 Cooking / 74 Fishing / 40 Herblore / actual 50 Mining | 2.2 quest backbone and Mining checkpoint | About 3,075 each Attack/Defence/Strength/HP plus smaller skill rewards | Throne of Miscellania, dragon weapons, later quests | [Heroes' Quest](https://oldschool.runescape.wiki/w/Heroes%27_Quest) | Verified 2026-09-24. Opposite-gang partner still required; use Grouping → Shield of Arrav. Chapter 1's reserved harralander supplies the oily rod. |
| Monkey Madness I | The Grand Tree and Tree Gnome Village; combat/navigation supplies | No skill gate requiring optional melee | Mandatory Chapter 1 combat floor plus observed 2.2 quest XP | Quest infrastructure block | **Committed Daero reward: 35,000 Attack, 35,000 Defence, 20,000 Strength and 20,000 Hitpoints XP** | Dragon scimitar purchase, Awowogei RFD, later 50-Attack Iban staff and Defence gates | [Monkey Madness I](https://oldschool.runescape.wiki/w/Monkey_Madness_I) | 2026-09-24 route choice already made in 2.2. Check observed levels; it does not supply 130 Attack+Strength or 70 Defence by itself. |
| Family Crest | 40 Mining, 40 Smithing, 59 Magic, 40 Crafting | Met in Chapter 1 | Already complete before 2.1 | Chapter 1.4, not 2.2 | Gauntlet access retained | Later utility/quest chain | [Family Crest](https://oldschool.runescape.wiki/w/Family_Crest) | Corrected 2026-09-24: do not repeat. |
| Legends' Quest start vs completion | **107 quest points to start**; full completion additionally needs 50 Agility, Crafting, Strength, Thieving, Woodcutting; 45 Herblore; 56 Magic; 52 Mining; 42 Prayer; 50 Smithing plus quest chain | Full-completion skills generally boostable and not required to start | Herblore about 40 / Mining actual 50 at 2.2 exit | 2.4 verifies 107 QP and starts for Kharazi Jungle/Sir Amik; full completion deferred to later 70s/Chapter 3-prep lane | Allocate selectable completion XP to Herblore when actually earned | RFD Sir Amik only needs a start and jungle access | [Legends' Quest](https://oldschool.runescape.wiki/w/Legends%27_Quest), [Freeing Sir Amik Varze](https://oldschool.runescape.wiki/w/Recipe_for_Disaster/Freeing_Sir_Amik_Varze) | Route decision 2026-09-24: no 45-Herblore or 52-Mining grind in 2.2 solely for eventual completion. |

### 2.3 — Sailing, Combat & the Kingdom

| Gate / activity | Exact requirement | Boostable? | Expected before | Mandatory supplier | Relevant XP / incidental output | Downstream reason | Source | Status / notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Throne of Miscellania | Heroes' Quest and The Fremennik Trials | N/A | Fremennik Trials from Chapter 1; Heroes in 2.2 | 2.2 quest spine | Starts kingdom approval/coffers | Passive herbs/logs started early; Royal Trouble | [Throne of Miscellania](https://oldschool.runescape.wiki/w/Throne_of_Miscellania) | Verified 2026-09-24. Bought flowers can avoid unnecessary skill assumptions. |
| Royal Trouble | Throne of Miscellania; 40 Agility and 40 Slayer | Not boostable for route purposes | 51 Agility / at least 20 Slayer | Explicit 20→40 Slayer block | 5,000 Slayer XP | Better kingdom output and progress toward 50/51 Slayer | [Royal Trouble](https://oldschool.runescape.wiki/w/Royal_Trouble) | Verified 2026-09-24. This is the first deliberate Slayer stop. |
| Unlock Sailing | Complete Pandemonium | No | Sailing untrained | Introductory Sailing primer | 300 Sailing XP | Entire Chapter 2/3 Sailing chain | [Sailing training](https://oldschool.runescape.wiki/w/Sailing_training) | Verified 2026-09-24. Player-facing copy needs controls, boat repair, charting, and port-task primer. |
| Prying Times | Pandemonium; The Knight's Sword; actual 12 Sailing; actual 30 Smithing; one open Port Task slot | Sailing not boostable; Smithing already met | Knight's Sword completed in Chapter 1.1; 12 Sailing / 50 Smithing | Port tasks/charting; 2.2 Smithing | 800 Sailing XP; crowbar and 25 oak sawmill coupons | Expands sea charting | [Prying Times](https://oldschool.runescape.wiki/w/Prying_Times) | Verified 2026-09-24. Free a Port Task slot before starting; do not repeat The Knight's Sword. |
| Current Affairs | 22 Sailing, 10 Fishing | Sailing not boostable | 22 / 74 | Sailing loop | 1,400 Sailing XP | Sailing progression | [Sailing training](https://oldschool.runescape.wiki/w/Sailing_training) | Verified 2026-09-24. |
| Teak hull tier | 31 Sailing and 23 Construction to build the upgrade; materials still needed with shipwright assistance | Sailing not boostable; a shipwright may substitute for the Construction level, not the materials | 31 / 50+ | Sailing loop; 2.1 Construction if player chooses the upgrade | Faster skiff, not required XP | Optional quality-of-life choice toward 45 and later sea content | [Sailing level-up table](https://oldschool.runescape.wiki/w/Sailing/Level_up_table), [Shipbuilding](https://oldschool.runescape.wiki/w/Shipbuilding) | Verified 2026-09-24. Do not force a fresh teak-plank grind or imply coins alone buy the hull. |
| Troubled Tortugans | Pandemonium; **45 Sailing, 51 Slayer, 48 Construction, 45 Hunter, 40 Woodcutting, 34 Crafting** | Treat quest levels as exact/unboosted | At 2.3: all except Slayer 51; Sailing reaches 45 here | 2.5 Sins/Slayer block unless deliberately moved earlier | 10,000 Sailing and 8,000 Slayer XP; Great Conch access | Opens highest-value 45+ Sailing continuation and later The Red Reef | [Jagex launch preparation](https://oldschool.runescape.wiki/w/Update%3APrepare_for_Sailing_-_Launching_November_19th%21), [Sailing training](https://oldschool.runescape.wiki/w/Sailing_training) | Verified 2026-09-24. **Ordering seam:** do not pretend it completes in early 2.3 without moving Slayer. |
| Sailing 50–55 utility | 50 sloop/recruit tier; 52 mahogany mast/canvas (45 Construction); 53 large shipwrecks/wind catcher (47 Construction); 55 Jubbly and teleport focus (49 Construction) | Sailing levels not boostable | 45 after introduction; 50+ Construction | Post-Tortugans training | Travel, salvage, ship capability | Chapter 3 Sailing assumptions | [Sailing level-up table](https://oldschool.runescape.wiki/w/Sailing/Level_up_table), [Shipbuilding](https://oldschool.runescape.wiki/w/Shipbuilding) | Verified 2026-09-24. Exact facility materials belong in the page inventory, not this ledger. |
| Proposed Sailing handoff | 67 Sailing; camphor hull tier also needs 59 Construction | No Sailing boost | 55 after utility tier / 70 Construction by 2.6 | Port/courier/charting/salvage loop plus quests | Unlocks Deepfin/camphor tier | Live Chapter 3 expects this tier before later 72/73/75/78 targets | [Sailing level-up table](https://oldschool.runescape.wiki/w/Sailing/Level_up_table), live BRUHsailer Ch. 3 | Route decision 2026-09-24: 67 is justified macro preparation, not a SotE gate. |

### 2.4 — Lunar, Cooking & Recipe for Disaster

| Gate / activity | Exact requirement | Boostable? | Expected before | Mandatory supplier | Relevant XP / incidental output | Downstream reason | Source | Status / notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| The Fremennik Isles | 20 Construction; 40 Agility only for an optional mine route; Ironmen need 56 Woodcutting to make the shield/log items | Construction boostable, but already 50+ | 50+ Construction / 70 Woodcutting | 2.1 and Chapter 1 | Useful melee rewards | Fremennik/Lunar region progression | [The Fremennik Isles](https://oldschool.runescape.wiki/w/The_Fremennik_Isles) | Verified 2026-09-24. |
| Lunar Diplomacy | 5 Herblore, 61 Crafting, 40 Defence, 49 Firemaking, 65 Magic, 60 Mining, 55 Woodcutting; Fremennik Trials, Lost City, Rune Mysteries, Shilo Village | Required skill levels are not boostable | Crafting 61+ after staves; **40 Defence guaranteed by mandatory 2.2 XP**; check actual Magic after 2.1 alchs; Mining needs 60; others met | 2.1 stave block, explicit Magic/Mining gap checks, 2.2 Shilo and Defence rewards | Quest rewards and Lunar spellbook | Utility magic and later quest backbone | [Lunar Diplomacy](https://oldschool.runescape.wiki/w/Lunar_Diplomacy) | Corrected 2026-09-24: DS1 18,650 + Between a Rock 5,000 + Heroes' Quest ~3,075 + committed Daero 35,000 Defence XP clear actual 40 regardless of optional 65/65/65. Do not add a 40-Defence grind in 2.4. |
| Swan Song | 100 quest points; 62 Fishing, 62 Cooking, 66 Magic, 45 Smithing, 42 Firemaking, 40 Crafting plus quest chain | Fishing/Cooking/Magic can be boosted; route already owns or explicitly trains them | 74 Fishing / at least 62 Cooking / 65 Magic / 50 Smithing | Chapter 1, Cooking block, mind bomb or one Magic level, 2.2 Smithing | Quest XP and Piscatoris access | Macro resources and quest progression | [Swan Song](https://oldschool.runescape.wiki/w/Swan_Song) | Verified 2026-09-24. Do not turn Fishing 62 into a reason for 99. |
| Making Friends with My Arm | 68 Agility, 35 Construction, 66 Firemaking, 72 Mining | Agility and Mining are boostable; Firemaking is not | 63/65+ Agility planned, 50+ Construction, 89 Firemaking, actual 72 Mining recommended | 2.6 Mining can be pulled forward; targeted Agility | **50,000 Agility, 50,000 Mining, 40,000 Firemaking, 10,000 Construction XP** | Disease-free herb patch and progression utility | [Making Friends with My Arm](https://oldschool.runescape.wiki/w/Making_Friends_with_My_Arm) | Verified 2026-09-24. Prefer actual 72 Mining; use +3 potion from 65 or +5 summer pie from 63 for Agility if desired. These are the post-2022 increased rewards. |
| Awowogei RFD subquest | Monkey Madness I; 70 Cooking and 48 Agility | Cooking can be boosted; Agility cannot | 60 Cooking / 51+ Agility | Explicit Cooking block; Chapter 1 Agility | None may be assumed | Required for full Recipe for Disaster | [Recipe for Disaster/Freeing King Awowogei](https://oldschool.runescape.wiki/w/Recipe_for_Disaster/Freeing_King_Awowogei) | Verified 2026-09-24. Route decision: train real 70 Cooking rather than make a rare mature-ale boost a dependency. |
| Full Recipe for Disaster | 175 quest points and all subquests; Alfred Grimhand's Barcrawl and Horror from the Deep; aggregate notable gates include 70 Cooking, 48 Agility, 50 Mining, 53 Fishing, 53 Thieving, 25 Herblore, 59 Magic, 40 Smithing, 50 Firemaking, 40 Ranged, 40 Crafting, 10 Fletching, 10 Slayer, 36 Woodcutting | Varies by subquest; do not use boosts to hide route holes | Barcrawl/Horror completed in 2.3; remaining gates after named 2.2–2.4 checkpoints | Quest spine and explicit Cooking | Barrows gloves | Major combat/utility upgrade and future baseline | [Recipe for Disaster](https://oldschool.runescape.wiki/w/Recipe_for_Disaster) | Corrected 2026-09-24. Audit quest items per subquest when authoring inventories. |

### 2.5 — Defender, Piety & Morytania

| Gate / activity | Exact requirement | Boostable? | Expected before | Mandatory supplier | Relevant XP / incidental output | Downstream reason | Source | Status / notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Warriors' Guild entry | Attack + Strength ≥130, or 99 in either | No | Use observed post-2.2 Attack/Strength/Defence; mandatory 2.2 includes the Attack/Defence-heavy Daero reward and no optional Chapter 1 combat is assumed | Train only the remaining Attack + Strength gap to 130, with a useful split such as 60/70 | Combat XP only | Defender progression | [Warriors' Guild](https://oldschool.runescape.wiki/w/Warriors%27_Guild) | Corrected 2026-09-24. Do not publish an unproven projected level. Later gates remain actual 60 Defence for dragon defender, 65 for King's Ransom and 70 for Piety. |
| Dragon defender | Obtain bronze→rune upstairs, then dragon in basement; 60 Defence to equip dragon defender | Defence cannot be boosted to equip | Train actual 60 Defence | Mandatory combat block | Cyclopes also provide alchables | Durable melee upgrade | [Dragon defender](https://oldschool.runescape.wiki/w/Dragon_defender) | Verified 2026-09-24. Explain token loop and basement transition in player copy. |
| King's Ransom | 45 Magic and **65 Defence**, plus Black Knights' Fortress, Holy Grail/Merlin's Crystal, Murder Mystery, One Small Favour | Not boostable | 65+ Magic / 60 Defence | Explicit 60→65 Defence and quest spine | Opens Knight Waves | Piety path | [King's Ransom](https://oldschool.runescape.wiki/w/King%27s_Ransom) | Verified 2026-09-24. |
| Knight Waves | Complete King's Ransom; combat encounter | N/A; safe on death | 65 Defence and useful melee | Mandatory combat block | 20,000 XP each in Attack, Strength, Defence, Hitpoints | Unlocks Chivalry/Piety prayers once levels are met | [Knight Waves Training Grounds](https://oldschool.runescape.wiki/w/Knight_Waves_Training_Grounds) | Verified 2026-09-24. Apply rewards before calculating the final Defence grind. |
| Piety | Knight Waves; 70 Prayer and 70 Defence | No | 43 Prayer / 65+ Defence | Dragon/Prayer budget and combat block | Unlock rather than XP reward | Major combat breakpoint used throughout later chapters | [Piety](https://oldschool.runescape.wiki/w/Piety) | Verified 2026-09-24. Both 70s are route-mandatory macro targets, not SotE requirements. |
| Dragon bone budget | Dragon bones give 72 base Prayer XP; Chaos Altar gives 350% and has a 50% save chance, for **504 expected XP per starting bone** before variance | N/A | 43 Prayer plus banked leftovers and future quest XP | Recalculate at start of block | From the level-43 floor to level 70 is about 687,288 XP, or ~1,364 expected bones before subtracting current XP, rewards, and banked bones | Supplies Piety; hides/combat/GP are secondary outputs | [Pay-to-play Prayer training](https://oldschool.runescape.wiki/w/Pay-to-play_Prayer_training), [Dragon bones](https://oldschool.runescape.wiki/w/Dragon_bones) | Derived 2026-09-24. Add a variance/death buffer; never promise a fixed kill count. |
| Safe/faster dragon choice | Isle of Souls blue dragons are safespottable; Wilderness greens are faster but expose the player to PK risk | N/A | Water spells/ranged setup and transport | Activity primer | Both supply bones/hides; combat XP differs by method | Makes 70 Prayer achievable without mandatory Wilderness exposure | [Blue dragon](https://oldschool.runescape.wiki/w/Blue_dragon), [Green dragon](https://oldschool.runescape.wiki/w/Green_dragon) | Verified 2026-09-24. Isle of Souls blues are a first-class default alternative, not a footnote. |
| A Kingdom Divided | 54 Agility, 52 Thieving, 52 Woodcutting, 50 Herblore, 42 Mining, 38 Crafting and Kourend quest chain | Required levels not boostable | All met except Herblore 50 must be explicit | Quest backbone and Herblore plan | Kourend spell/quest access | Current macro route and later content | [A Kingdom Divided](https://oldschool.runescape.wiki/w/A_Kingdom_Divided) | Verified 2026-09-24. Place 40→50 Herblore before this gate. |
| Myreque chain through A Taste of Hope | Chain from Priest in Peril/Nature Spirit; notable later gates include 48 Crafting, 45 Agility, 40 Attack, 40 Herblore, 38 Slayer | Treat exact quest levels as mandatory | Craft/Agility/Herblore met; Attack and Slayer deliberately trained | 2.5 combat/Slayer | Quest rewards help but do not close Sins gates automatically | Sins prerequisite | [A Taste of Hope](https://oldschool.runescape.wiki/w/A_Taste_of_Hope) | Verified 2026-09-24. Author each quest as a coherent inventory block. |
| Sins of the Father | Vampyre Slayer and A Taste of Hope chain; **62 Woodcutting, 60 Fletching, 56 Crafting, 52 Agility, 50 Attack, 50 Slayer, 49 Magic** | All listed skill gates are not boostable | WC 70, Craft 61+, Agility 52+, Magic 65+; Fletching 46, Slayer 40 after Royal Trouble | Explicit Fletching 46→60 and Slayer 40→50; combat block | Unlocks Darkmeyer and Hallowed Sepulchre | Sepulchre option and Morytania progression | [Sins of the Father](https://oldschool.runescape.wiki/w/Sins_of_the_Father) | Verified 2026-09-24. Current 50 Slayer corrects older/secondary references to 42. |
| Troubled Tortugans after Sins | 51 Slayer plus the 2.3 requirements | No | 50 Slayer at Sins | One explicit Slayer level or suitable task; Sins itself does not grant Slayer XP | Quest gives 8,000 Slayer XP after the 51 gate | Reopens Sailing route to proposed 67 | [Sailing training](https://oldschool.runescape.wiki/w/Sailing_training) | Route decision/verified gate 2026-09-24. This resolves the 2.3 ordering seam without front-loading 31 Slayer levels. |

### 2.6 — The 70s: Song of the Elves preparation

Song of the Elves requires **actual, unboosted level 70** in all eight skills below. Optional fishing, Sepulchre, diaries, or dragon combat may shorten these blocks but cannot be prerequisites.

| Skill gate | Expected before focused block | Mandatory supplier and timing | Incidental XP to count only after observed | Recommended relaxed/default | Faster/active alternative | Status / downstream reason |
| --- | ---: | --- | --- | --- | --- | --- |
| 70 Agility | 52+, perhaps 63/65 for Making Friends; exact value varies with quests/optional barb fishing | Dedicated training before 2.7; stop at actual 70 | Ordinary Barbarian Fishing and Making Friends reward | Compare Seers rooftop, Sepulchre and the lower-input post-August-2026 Colossal Wyrm course | Hallowed Sepulchre floors actually unlocked | Verified 2026-09-24. Exact 70 is SotE; floor 3 needs 72 actual or a suitable boost, and floor 4 can be entered at 72 with a summer pie. Wyrm is a strong low-attention candidate, not a declared winner. |
| 70 Construction | At least 62 after 2.1 target, potentially higher | Continue Mahogany Homes to actual 70 late in 2.6 | Quest rewards and earlier contracts | Adept contracts with plank sack | Faster furniture building | Verified 2026-09-24. Do not inherit BRUHsailer's incidental 73. |
| 70 Farming | About 63 | Start tree, fruit-tree, hardwood, herb, and contract cycles early; verify 70 before elf finale | Quest/diary XP only after awarded | Passive tree/fruit/hardwood runs and contracts | More frequent/high-cost tree runs | Verified 2026-09-24. A calendar pacing risk, not a late emergency grind. |
| 70 Herblore | 40, with 50 needed in 2.5 | Kingdom/herb runs start early; reserve quest/diary lamps for Herblore unless final XP budget proves another bottleneck | Legends and other selectable lamps | Herb runs, kingdom herbs, make useful potions | More frequent runs/resource processing | Verified gate; **open exact budget**. Final page plan must reconcile herbs, secondaries, quest rewards, and lamp allocations. |
| 70 Hunter | 46 | Birdhouse runs throughout, then a visible final block | Birdhouses completed during other progression | Birdhouses plus low-attention trapping/rumours appropriate to level | Chinchompas or active rumours | Verified gate 2026-09-24. Do not let optional birdhouse frequency become an assumption; add catch-up. |
| 70 Mining | 44; target actual 72 before Making Friends if following the recommendation | Staged 50 for Heroes/Between a Rock, 60 Lunar, then 72 before Making Friends | Quest rewards observed at each stage | Motherlode Mine, shooting stars, or calcified deposits | Sandstone/granite or Volcanic Mine when prerequisites/team fit | Verified 2026-09-24. 72 already exceeds SotE. |
| 70 Smithing | 42; target 50 in 2.2 | 50 early, then dedicated block to 70; apply Red Reef reward only if quest is already complete | Between a Rock/Heroes and later quest rewards | Giants' Foundry using planned metal stock | Blast Furnace gold/other active methods | Verified 2026-09-24. Red Reef itself needs actual 48. |
| 70 Woodcutting | 70 | None | N/A | Maintain level only | N/A | Verified from Chapter 1 handoff. |

Supporting non-SotE gates that must be closed before 2.7:

| Gate | Exact requirement | Supply | Status / note |
| --- | --- | --- | --- |
| Mourning's End Part I | 60 Ranged and 50 Thieving, not boostable; Roving Elves, Big Chompy Bird Hunting, Sheep Herder | Explicit 45→60 Ranged block; Thieving already 77 | Verified 2026-09-24. Ranged training cannot depend on optional melee or dragon methods. |
| Elf-chain Agility travel | Regicide commonly uses 56 Agility obstacles | Actual 70 SotE prep | Verified. No boost dependency needed at this point. |
| Mourning's End Part II supplies | Mourning's End Part I; death talisman access or the 50-item alternative; 43 Prayer strongly recommended | Prepare talisman/item list as its own quest block | Verified 2026-09-24. This is a preparation dependency, not another skill grind. |

Conditional Chapter 3 preparation, if kept before the elf finale:

| Gate | Exact requirement | What it changes | Status / recommendation |
| --- | --- | --- | --- |
| Defender of Varrock | 55 Smithing, 52 Hunter; Shield of Arrav, Temple of Ikov, Below Ice Mountain, Family Crest, Garden of Tranquillity chain, What Lies Below, Romeo & Juliet, Demon Slayer | All skill gates are already below the 70s plan; advances the Mahjarrat chain | Verified 2026-09-24. Retain if preparing While Guthix Sleeps; group prerequisites coherently. |
| The Path of Glouphrie | 60 Strength, 56 Slayer, 56 Thieving, 47 Ranged, 45 Agility plus The Eyes of Glouphrie/Waterfall/tree-gnome chain | Raises the Chapter 2 Slayer floor from 51 to 56 and is required for While Guthix Sleeps | Verified 2026-09-24. This is the strongest reason to continue Slayer beyond Tortugans before Chapter 3. If deferred, Chapter 3 must own the explicit 51→56 catch-up. |
| The Curse of Arrav | Defender of Varrock and Troll Romance; 64 Mining, 62 Ranged, 62 Thieving, 61 Agility, 58 Strength, 37 Slayer | Raises the Ranged stop from 60 to 62; all other skill gates fit the current plan | Verified 2026-09-24 against the [Jagex/quest update](https://oldschool.runescape.wiki/w/Update%3AThe_Curse_of_Arrav_%26_Mobile_Anniversary_Update). Valuable current quest progression, but not a SotE requirement; decide explicitly. |
| Mage Arena II | Mage Arena I and 75 Magic | Adds the imbued god cape, but 75 Magic is not otherwise needed for this Chapter 2 spine | Verified 2026-09-24 via the [Ironman Magic guide](https://oldschool.runescape.wiki/w/Ironman_Guide/Magic). Recommend optional unless another retained quest supplies/needs 75. |

### 2.7 — The Elf Finale

| Gate / activity | Exact requirement | Boostable? | Expected before | Mandatory supplier | Relevant XP / incidental output | Downstream reason | Source | Status / notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Regicide | Underground Pass; practical 56 Agility traversal gate | Agility obstacles can be boosted, but route owns 70 | 70 Agility | 2.6 | Quest XP after completion | Roving Elves | [Regicide](https://oldschool.runescape.wiki/w/Regicide) | Verified 2026-09-24. |
| Roving Elves | Regicide and Waterfall Quest; practical 56 Agility route | Boostable/avoidable via travel alternatives, but unnecessary | 70 | 2.6 and quest spine | 10,000 Strength XP | Mourning's End Part I | [Roving Elves](https://oldschool.runescape.wiki/w/Roving_Elves) | Verified 2026-09-24. |
| Mourning's End Part I | Roving Elves, Big Chompy Bird Hunting, Sheep Herder; 60 Ranged, 50 Thieving | Not boostable | 60 / 77+ | Explicit Ranged block, Chapter 1 Thieving | Quest rewards | Mourning's End Part II | [Mourning's End Part I](https://oldschool.runescape.wiki/w/Mourning%27s_End_Part_I) | Verified 2026-09-24. |
| Mourning's End Part II | Mourning's End Part I; puzzle and death-talisman/item preparation | No extra hard skill gate; 43 Prayer recommended | 70 Agility / 70 Prayer | 2.5–2.6 | Quest rewards | Song of the Elves | [Mourning's End Part II](https://oldschool.runescape.wiki/w/Mourning%27s_End_Part_II) | Verified 2026-09-24. Must be a real preparation section, not one sentence. |
| Song of the Elves | Mourning's End Part II, Making History, Druidic Ritual; 70 Agility, Construction, Farming, Herblore, Hunter, Mining, Smithing, Woodcutting | **None of the eight levels is boostable** | All actual 70+ | 2.6 matrix | Large quest rewards occur only afterward | Prifddinas and Chapter 3 progression | [Song of the Elves](https://oldschool.runescape.wiki/w/Song_of_the_Elves) | Verified 2026-09-24. Final preflight must check every level and boss supplies. |

## Deconstruction of major BRUHsailer grinds

| Original BRUHsailer block | What BRUHsailer gains | Actual downstream hard requirements | Outputs separable? | Relaxed alternatives | Faster / active alternatives | Proposed mandatory stop | Optional continuation | Future dependencies affected | Recommendation / unresolved question |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Barbarian Fishing to ~88, then eventually 99 with cut-eat | Fishing plus roughly proportional Agility/Strength XP and small Cooking XP; removes a future maxing grind | Ch. 2 Fishing gates top out at 62 for Swan Song and handoff is already 74; no identified Ch. 3 gate justifies 99 | Yes; train Agility and Cooking directly | Ordinary Barbarian Fishing; knife one leaping fish and let auto-gutting process the inventory | 3-tick cut-eat or other tick manipulation, explicitly optional | **No Fishing grind required for gates.** Use only a chosen bounded session if its side XP is enjoyable | 88 or 99 “finish Fishing forever” branch | Minor Agility/Strength/Cooking reductions; future maxing | Route decision: 99 optional. Ordinary auto-gutting is relaxed; never budget 3-tick XP. At 74→88, a rough 11:1 Fishing:Agility ratio suggests ~299k Agility/Strength XP, but catch mix and cutting success make this an estimate only. |
| Cooking assumed from cut-eat and later route | 70+ Cooking for Awowogei/RFD and food stock | Actual 70 recommended; 62 Swan Song | Yes | Cook banked fish/karambwans at Hosidius; a bounded Mess Hall block where appropriate | Higher-click cooking methods | **Actual 70 before Awowogei** | Further food preparation by need | RFD and later food supply | 60→70 is 463,885 XP from the level floors. Count normal gutting XP only after earned; do not require mature chef's delight or tick manipulation. |
| Hallowed Sepulchre to 84, later 98 | Agility, Thieving/Construction/Prayer/Ranged interactions, loot, prayer supplies, alchables | 52 Sins; 68 Making Friends boostable; exact 70 SotE. No identified Ch. 3 quest exceeds 70 | Yes; loot/resources have other suppliers | Compare Seers rooftop and the updated Colossal Wyrm course; Sepulchre only to an enjoyed cutoff | Efficient Sepulchre laps | **Actual 70 Agility** | Floors 1–5: 52/62/72/77/87, all boostable for entry; 72 + summer pie reaches floor 4. Floor 5 Grand Coffin separately needs boostable 84 Thieving **or** 92 Agility. 84/98 remain efficiency branches | Prif course at 75; resource stock; future maxing | [Jagex's 2026-08-12 update](https://secure.runescape.com/m=news/summer-sweep-up---agility--chambers-of-xeric-changes?oldschool=1) changed floors 4/5 and allowed floor boosts; BRUHsailer's early floor-4 boost is no longer stale. The Wyrm basic/advanced laps now take ~25%/~40% longer with XP and rewards adjusted to keep roughly comparable rates but fewer inputs/hour. Compare rather than assume it wins. |
| Old Brimhaven one-obstacle spam | Low-movement Agility XP/tickets | None unique | Yes | Full arena laps, rooftops, Wyrm course | Full efficient arena routing | Do not make it the default | Player preference only | Agility outfit/rewards | The 2024 rework and follow-up introduced an 8-tick/4.8-second no-XP delay after two consecutive uses of one obstacle. Old indefinite pressure-pad spam is not preserved as described by older guides. |
| Roughly 1,300 green dragons | Bones for 70 Prayer; combat XP; hides for Crafting; alchable bodies/GP | 70 Prayer + 70 Defence for Piety; Crafting 61 Lunar and 56 Sins are already cleared by staves; no fixed kill count | Yes | Safespot Isle of Souls blue dragons; obtain combat XP at crabs/Slayer and Crafting/GP elsewhere | Wilderness greens when comfortable; faster combat methods | **Live Prayer-XP-derived bone budget plus a buffer; actual 70 Prayer and 70 Defence** | More hides/GP/combat only by choice | Piety, combat, cash, Crafting | Do not preserve 1,300. From bare level 43, expected altar math is ~1,364 bones before rewards/current XP/banked bones and RNG; calculate at the checkpoint. Green-body processing is useful but not a gate. |
| Construction 39→50→contracts→73 | Contracts, plank sack, lectern, later SotE and resource XP | 50 contracts, base ≥62 for planned +5 lectern build, exact 70 SotE; Ch. 3 begins around 75 and later needs higher | Yes | Normal plank preparation and Mahogany Homes | Faster furniture/butler methods | **50, then verified lectern base, then actual 70** | 73/75+ when future page needs it | SotE; Sailing ship facilities; Ch. 3 house progression | Keep Mahogany Homes as relaxed default. Do not require 73 just because Sepulchre supplied it in BRUHsailer. |
| Piscarilius artefacts during battlestaves | Thieving XP while attaching/alching | Chapter 1 level 77 clears mandatory Ch. 2; optional diary action needs 78 | Yes | Bankstand/process/alch; normal low-attention Thieving catch-up if 78 retained | Artefacts | **77; or explicit 78 only at retained diary gate** | 84/86+ only when a future dependency names it | Ch. 3 While Guthix Sleeps needs 72, already met | Never assume artefact XP. |
| Sailing 1→67 | Quest unlocks, Great Conch, ship upgrades, travel, Chapter 3 setup | 45 Tortugans; 52 Red Reef; meaningful camphor/Deepfin tier at 67 with 59 Construction | Partly: Sailing itself is not replaceable, while some facilities can be shipwright-built | Port tasks, charting, salvage with primers and sensible variety | Best current courier/route loops | **45 in 2.3; 51 Slayer/Tortugans in 2.5; proposed 67 by Ch. 2 end** | 72/73/75/78 belong to Chapter 3 | Red Reef, camphor hull, Gwenith Glide, crystal extractor, later routes | Keep 67 as macro preparation. Resolve only whether post-Tortugans Sailing appears at end of 2.5 or in 2.6. |
| Smithing 42→70+ | Quest gates, plate/ship capability, SotE | 50 Between a Rock plan, 60 Mining pair for Lunar is separate, 70 Smithing SotE, 48 Red Reef | Yes | Giants' Foundry | Blast Furnace gold | **Actual 70** | 74+ only when a named facility/item needs it | Red Reef and future gear/quests | Stage it instead of one opaque grind; document metal input budget before player copy. |
| Mining 44→72+ | Lunar, Making Friends, SotE and resources | 50 Heroes, 60 Lunar, 70 SotE; 72 Making Friends (boostable) | Yes | MLM/stars/calcified deposits | Sandstone/granite/Volcanic Mine | **Recommend actual 72 before Making Friends** | Higher levels only for named content | Quest chain and resources | 72 is a clean single stop that clears SotE; explain alternatives. |
| Herblore 40→70 | Kourend quests, potions, SotE | 50 A Kingdom Divided; exact 70 SotE | Partly; XP is resource/time gated | Herb runs, kingdom, useful potions, lamps | More frequent runs/secondary gathering | **50 by 2.5, exact 70 by 2.7** | Higher levels by potion unlock | SotE and later PvM | Open: produce an exact herb/secondary/quest-lamp budget after quest ordering is frozen. |
| Hunter 46→70 | SotE and resources | 70 SotE; 45 Tortugans already met | Yes | Birdhouses plus relaxed trapping/rumours | Chinchompas/active rumours | **Actual 70** | Beyond 70 optional | SotE, supplies | Include a deterministic catch-up because passive birdhouse frequency varies by player. |
| Farming 63→70 | SotE plus herbs/kingdom synergy | 70 SotE | No substitute for level, but timing is flexible | Early tree/fruit/hardwood runs and contracts | More frequent expensive runs | **Actual 70** | Beyond 70 optional | SotE, Herblore inputs | Start immediately; make this a background lane with preflight checks. |
| Slayer 20→51 | Royal Trouble, Myreque, Sins, Tortugans; combat XP | 40 Royal Trouble, 38 Taste of Hope, 50 Sins, 51 Tortugans | No, though quest XP helps after gates | Conventional tasks with skips/block advice | Efficient task list/cannon/burst where available | **40, then 50, then 51** | 56 Path of Glouphrie only if that Chapter 3-prep quest stays in Chapter 2 | Sailing continuation and Morytania | Explicitly train it; do not spend all selectable XP elsewhere and hope source incidental XP survives. |
| Combat to guild/defender/Piety | Warriors' Guild, defender, quest fights, Piety | 130 Attack+Strength; actual 60 Defence defender equip; actual 65 Defence King's Ransom; actual 70 Defence Piety; 50 Attack Sins | Yes | Crabs or ordinary Slayer for relaxed training | Faster Slayer/combat methods | Start from observed post-2.2 levels, including the **committed Daero reward: 35,000 Attack, 35,000 Defence, 20,000 Strength and 20,000 Hitpoints XP**. Train only the remaining 130 Attack+Strength and actual 60/65/70 Defence gaps; never assume optional Chapter 1 65/65/65. | Higher combat by preference | Quest bosses and later PvM | Route choice already made in 2.2; apply Heroes and later Knight Waves rewards before budgeting further training. |

## Chapter 3 look-ahead

This check decides which Chapter 2 continuations are genuine preparation rather than completionism.

| Chapter 3 dependency | Current requirement / source-route expectation | Chapter 2 implication | Status |
| --- | --- | --- | --- |
| The Red Reef | Troubled Tortugans; 52 Sailing and 48 Smithing | 67 Sailing / 70 Smithing handoff comfortably clears it | Verified 2026-09-24 against current quest data. |
| Camphor hull / Deepfin tier | 67 Sailing and approximately 59 Construction for the hull build | Supports the proposed 67 Sailing stop; 70 Construction clears the build gate | Verified 2026-09-24. |
| Gwenith Glide and later Sailing | Live Ch. 3 proceeds through 72, then 73/75 and eventually 78 Sailing | Do not pretend 67 finishes Sailing; make the Chapter 3 catch-up explicit | Verified against live BRUHsailer Ch. 3 and current level table. |
| Crystal extractor | 73 Sailing / 67 Construction in the live ship plan | Chapter 2's 70 Construction is enough; Sailing remains Chapter 3 work | Verified against live source/current Sailing table. |
| While Guthix Sleeps | 180 quest points; 72 Thieving, 67 Magic, 66 Agility, 65 Farming, 65 Herblore, 62 Hunter, Warriors' Guild access; Defender of Varrock, Path of Glouphrie, Dream Mentor and the rest of its quest chain | Chapter 1's 77 Thieving and the Chapter 2 70s/combat plan clear every skill gate. Defender/Path and Dream Mentor are the meaningful quest-prep decisions; no reason to force BRUHsailer's 84/86 Thieving | Verified 2026-09-24 against [While Guthix Sleeps](https://oldschool.runescape.wiki/w/While_Guthix_Sleeps). |
| General quest Agility | Song of the Elves at 70 is the highest identified quest gate | No dependency case for mandatory 84/98 in Chapter 2 | Verified 2026-09-24; revisit only if Chapter 3 selects non-quest content with a higher hard gate. |
| Construction progression | Live Ch. 3 starts around 75 and later reaches 83 | Chapter 2 must deliver 70 for SotE; Chapter 3 should own its visible 70→75/83 blocks | Route decision based on live source. |

## Source conflicts and resolutions

| Conflict | Resolution |
| --- | --- |
| BRUHsailer text implies boosting into a higher Hallowed Sepulchre floor. | This is now valid: Jagex's [2026-08-12 update](https://secure.runescape.com/m=news/summer-sweep-up---agility--chambers-of-xeric-changes?oldschool=1) permits floor-entry boosts and lowered floors 4/5 to 77/87. The full entry sequence is 52/62/72/77/87. Its floor 5 Grand Coffin separately needs boostable 84 Thieving or 92 Agility. None replaces the mandatory actual 70 SotE target. |
| Older recollection/search material may describe Sins of the Father as a 42 Slayer gate. | Current quest requirement is 50 Slayer, unboostable. The ledger schedules actual 50, then 51 for Troubled Tortugans. |
| Old Brimhaven advice treats one-obstacle pressure-pad spam as indefinitely repeatable XP. | The 2024 changes added a no-XP delay after two consecutive uses. Present current full-arena play or other relaxed methods instead. |
| BRUHsailer assumes cut-eat Fishing side XP and later 99 Fishing. | Normal automatic knife/gutting is retained as relaxed; 3-tick cut-eat and 99 are optional because no hard dependency justifies them. |
| BRUHsailer uses about 1,300 green dragons as a monolithic target. | Recalculate the bone budget from live Prayer XP and altar assumptions; expose Isle of Souls blues as a safe peer route; separate combat, hides/Crafting, and GP as needed. |
| Tentative 2.3 includes Sailing, but Troubled Tortugans needs 51 Slayer while the Myreque/Slayer block sits in 2.5. | Split Sailing at 45, then resume after the 50→51 Slayer checkpoint in 2.5. This preserves the headings and avoids an early forced Slayer grind. |

## Open decisions for later Chapter 2 pages

1. **Herblore budget:** freeze the quest order, then calculate exact guaranteed XP, lamp choices, herb quantities, secondaries, kingdom timing, and a deterministic catch-up to 70. This is the largest unresolved resource budget.
2. **Sailing placement:** recommended resolution is 1→45 in 2.3, then Tortugans and 45→67 after 51 Slayer in 2.5. Decide whether the latter is a 2.5 closing block or a short named lane in 2.6.
3. **Sailing beyond 45:** 2.3 uses one-time charting bonuses and ordinary courier tasks, with salvaging for variety and Tempor Tantrum as an optional active method. Recheck live task lists and rates before authoring the post-Tortugans 45→67 continuation; Sailing balance may change.
4. **Combat arithmetic:** the MM1 Daero reward is already fixed at 35,000 Attack/Defence and 20,000 Strength/Hitpoints. Apply the observed post-2.2 levels, 2.3 Slayer combat and later Knight Waves XP before calculating manual stops. The remaining gates are 130 Attack+Strength, actual 60 Defence, 65 Defence, then 70 Defence.
5. **Dragon/Prayer budget:** at the actual checkpoint, record current Prayer XP, banked bones, guaranteed quest rewards still ahead, Chaos Altar risk tolerance, and buffer policy. Do not publish “kill 1,300” as a universal instruction.
6. **Optional Chapter 3-prep quests:** decide whether Path of Glouphrie/Curse of Arrav/Defender of Varrock stay late in Chapter 2. If retained, add their exact gates (including any 56 Slayer or 62 Ranged requirement) to the mandatory route; otherwise place an explicit Chapter 3 catch-up.
7. **Thieving 78 diary step:** either demonstrate enough guaranteed XP and create a checkpoint, or defer the step. It is not needed by the core route.
8. **RFD inventory audit:** requirements are mapped, but each subquest's one-off items and the 175-QP schedule need a page-level preflight once the full quest order is frozen.

## Authoring preflight for every future activity block

Before a Chapter 2 activity becomes player-facing copy, the author must be able to answer:

- What hard dependency does it satisfy, and what is the mandatory stopping condition?
- If the player skipped every optional block, what mandatory earlier step supplies its entry requirements?
- What is the relaxed/default method, and what faster alternative is worth mentioning?
- For an unfamiliar system: what is it, where is it, how is it reached, what should the player bring, how does the normal loop work, and when do they stop?
- Which level checks are boostable, with what exact boost, and which are not?
- Which incidental XP/resource assumptions were observed rather than merely projected?
- Has a current mechanics source been rechecked if Sailing, an activity, or a requirement has changed since this audit date?

## Source register

Primary route sources:

- [Intermediate Guide repository](https://github.com/esherkness14/runescape-adventure-guide)
- [Live BRUHsailer repository](https://github.com/Osrsper/BRUHsailer)
- [Live BRUHsailer site](https://osrsper.github.io/BRUHsailer/)

Current mechanics hubs used repeatedly:

- [Quest skill requirements](https://oldschool.runescape.wiki/w/Quests/Requirements_by_skill)
- [Temporary skill boosts](https://oldschool.runescape.wiki/w/Temporary_skill_boost)
- [Hallowed Sepulchre](https://oldschool.runescape.wiki/w/Hallowed_Sepulchre)
- [Jagex August 12, 2026 Agility update](https://secure.runescape.com/m=news/summer-sweep-up---agility--chambers-of-xeric-changes?oldschool=1) — current Sepulchre floor entry, Grand Coffin and Colossal Wyrm changes.
- [Agility training](https://oldschool.runescape.wiki/w/Agility_training)
- [Brimhaven Agility Arena](https://oldschool.runescape.wiki/w/Brimhaven_Agility_Arena)
- [Barbarian Training](https://oldschool.runescape.wiki/w/Barbarian_Training)
- [Fish offcuts / automatic gutting](https://oldschool.runescape.wiki/w/Fish_offcuts)
- [Sailing](https://oldschool.runescape.wiki/w/Sailing)
- [Sailing training](https://oldschool.runescape.wiki/w/Sailing_training)
- [Sailing level-up table](https://oldschool.runescape.wiki/w/Sailing/Level_up_table)
- [Shipbuilding](https://oldschool.runescape.wiki/w/Shipbuilding)
- [Mahogany Homes](https://oldschool.runescape.wiki/w/Mahogany_Homes)
- [Recipe for Disaster](https://oldschool.runescape.wiki/w/Recipe_for_Disaster)
- [Song of the Elves](https://oldschool.runescape.wiki/w/Song_of_the_Elves)
- [Warriors' Guild](https://oldschool.runescape.wiki/w/Warriors%27_Guild)
- [King's Ransom](https://oldschool.runescape.wiki/w/King%27s_Ransom)
- [Sins of the Father](https://oldschool.runescape.wiki/w/Sins_of_the_Father)

Because Sailing and its quest series are recent, reverify their current requirements and training balance immediately before authoring the corresponding page rather than treating this dated ledger as immutable mechanics documentation.
