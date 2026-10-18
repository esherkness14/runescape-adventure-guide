# Intermediate quest supply and preparation audit

Audit date: **18 October 2026**. Baseline: `6a0a409ee8bc4568b81cba2b2a350ee63dc28080` in `esherkness14/runescape-adventure-guide`. Review branch: `codex/quest-supply-preparation-audit`.

## What this pass establishes

The previous resource audit concentrated on shared allocations, skill gates and contradictions. It explicitly left many ordinary quest items in external walkthroughs. That did not answer the player's practical question: **when this guide says to bring an item, does the route actually supply it, and what should the player do if the bank is empty?**

This pass begins with each quest's requirements, including the quests named inside grouped route steps. It checks required and recommended items separately, follows quest-local acquisition, and supplies a usable purchase, recipe or collection method for outside items. It then checks the bank balance after earlier consumers. Items from optional methods, variable drops and unclaimed rewards are not guaranteed ownership.

All **17 Intermediate pages**, **247 RouteSteps** and **37 TrainingOptions** were reviewed. The [coverage index](QUEST-SUPPLY-COVERAGE.csv) lists the individual route/training blocks and named quest entries; the [detailed records](audit/quest-supplies/) retain the requirement/source evidence and correction notes. The [allocation ledger](RESOURCE-ACQUISITION-LEDGER.csv) now contains **105 selected allocations**. That ledger is deliberately a register of shared or easily mishandled resources; it is not presented as an exhaustive inventory of every item in every quest.

This is a source and executable-guide audit. It does not claim an in-game playthrough, a live bank import, or a guarantee that a fixed combat inventory wins every attempt.

## Evidence and method

The guide's existing route, optionality and saved-progress contract remain the design baseline. The main requirement comparator is the current [Quest Helper source](https://github.com/Zoinkwiz/quest-helper/tree/5f791937a99a676f23c02aa48c4e4d5b50e7edad/src/main/java/com/questhelper/helpers), pinned to `5f791937a99a676f23c02aa48c4e4d5b50e7edad`. The review uses `getItemRequirements`, item constructors/tooltips, `getItemRecommended`, and the actual quest acquisition/processing steps. A flat plugin list is insufficient on its own: it can include quest-local objects or optional conveniences, omit a supplier's access gate, and use “recommended” to cover several different combat methods.

The route comparator is [BRUHsailer's underlying guide data](https://github.com/umkyzn/BRUHsailer/blob/6422739188591a5ae18f41a424d7b1d29835f543/data/guide_data.json), pinned to `6422739188591a5ae18f41a424d7b1d29835f543`, with data date **30 August 2026**. The earlier whole-route review covered its three chapters, nine sections and 226 steps, including nested instructions. This pass rechecked the relevant item pickups, bank assumptions and quest methods. BRUHsailer's larger stockpiles and high-attention methods are comparison evidence, not automatically mandatory tasks in this guide.

Current OSRS Wiki quest/item/shop information and relevant Jagex or RuneLite documentation resolve mechanics. Some direct Wiki requests were blocked; available current page content and identified dated Wiki mirrors were cross-checked against the pinned Quest Helper. The detailed records identify uncertainties instead of silently treating an old beta recipe or an unverified shop as current fact.

For each consumer the review asks:

1. What exact item, quantity and form is required? Examples include raw fish versus cooked fish, unspun wool versus balls of wool, molten glass versus a finished orb, and a three-dose craft versus a four-dose bottle.
2. Is it acquired inside the quest? If so, where does the quest supply it, and what must remain available until that stage?
3. If it comes from outside, what is the named supplier or complete recipe? What level, quest, tool, cash, travel or facility gate is needed to use that supplier?
4. Is the earlier allocation still present after previous consumption? A bar, herb, glass or food item is not assigned to two quests at once.
5. What happens when the actual bank is short? The guide gives a live deficit and stop: buy the missing quantity, make the successful items, collect respawns, or continue a clearly variable source until the named item is held.
6. Is a recommendation optional for the chosen method? High-level gear, flicking, protection payments and alternate quest branches must not become hidden entry requirements.

### Scope by page

| Page | RouteSteps | TrainingOptions | Reviewed source |
| --- | ---: | ---: | --- |
| 1.1 | 9 | 2 | [Page](src/pages/intermediate/chapter-1-1.astro) |
| 1.2 | 9 | 3 | [Page](src/pages/intermediate/chapter-1-2.astro) |
| 1.3 | 19 | 3 | [Page](src/pages/intermediate/chapter-1-3.astro) |
| 1.4 | 23 | 5 | [Page](src/pages/intermediate/chapter-1-4.astro) |
| 2.1 | 10 | 2 | [Page](src/pages/intermediate/chapter-2-1.astro) |
| 2.2 | 11 | 2 | [Page](src/pages/intermediate/chapter-2-2.astro) |
| 2.3 | 13 | 2 | [Page](src/pages/intermediate/chapter-2-3.astro) |
| 2.4 | 19 | 2 | [Page](src/pages/intermediate/chapter-2-4.astro) |
| 2.5 | 33 | 5 | [Page](src/pages/intermediate/chapter-2-5.astro) |
| 2.6 | 28 | 7 | [Page](src/pages/intermediate/chapter-2-6.astro) |
| 2.7 | 8 | 0 | [Page](src/pages/intermediate/chapter-2-7.astro) |
| 3.1 | 9 | 2 | [Page](src/pages/intermediate/chapter-3-1.astro) |
| 3.2 | 12 | 2 | [Page](src/pages/intermediate/chapter-3-2.astro) |
| 3.3 | 9 | 0 | [Page](src/pages/intermediate/chapter-3-3.astro) |
| 3.4 | 8 | 0 | [Page](src/pages/intermediate/chapter-3-4.astro) |
| 3.5 | 15 | 0 | [Page](src/pages/intermediate/chapter-3-5.astro) |
| 3.6 | 12 | 0 | [Page](src/pages/intermediate/chapter-3-6.astro) |
| **Total** | **247** | **37** | **17 pages** |

The source contains 284 route/method blocks, but some are informational. The saved-progress contract is **253 required checkboxes and four optional checkboxes**. Adding preparation prose does not add new progress obligations or reset existing completion.

## How the guide presents the corrections

Preparation is placed beside the quest that uses it. Closed `ExpandableNote` components carry the visible label **Quest preparation**, with specific titles such as the complete brewing kit or the local material recovery. The main route keeps the departure check and the decision that matters at that moment.

Chapter 1.3 has a reusable supplier note at `i13-quest-supplies` for common tools, bars, glass, food ingredients, wool, basic herbs and an enclosed oil lantern. Quest notes still state their own quantities and special access conditions. Chapter 1.4 has the complete potion supplier note at `i14-potion-supplies`; later combat steps can link to that actual recipe rather than say “make restores.”

The Farming circuit remains focused on Farming. A quest's missing eggs, snape grass, pie ingredients, bars, dye or lamp are handled at that consumer. A suitable existing farmed or banked ingredient is used first, but immediate ground/shop recovery is available where possible. No new mandatory Farming-contract reward or optional hardwood outcome is invented.

The implementation retains all baseline progress IDs, order, optional/informational flags, storage keys, shared progress components and page styles. It changes content and adds branch-only verification, not the progress model.

## Desert Treasure: the concrete correction

The triggering bank contains **12 ranarrs, two snape grass and no red spiders' eggs**. The verified relevant stats are **63 Magic, 43 Prayer, 61 Defence, 63 Hitpoints and 41 Herblore**. Those facts support a preparation example; they do not establish the rest of the bank. The general route still has explicit prerequisite and actual-level checks, including actual 53 Thieving. Protection prayers are this guide's combat preparation, not a fabricated quest-start requirement.

### Separate ingredients and doses

| Supply | Recipe and gate | Starting calculation | Acquisition or reserve |
| --- | --- | --- | --- |
| Prayer potion | Ranarr + water-filled vial + snape grass; 38 Herblore | Two available grass currently means two crafts, **six doses**. Ten more grass permits twelve crafts, **36 doses = nine prayer(4)**. | Pick the actual grass deficit on the hobgoblin peninsula west of the Crafting Guild, outside the guild. Eadgar's separate ranarr is reserved first if that quest is unfinished. |
| Ordinary restore | Harralander + water-filled vial + red spiders' eggs; 22 Herblore | **Six crafts = 18 doses**: six for the separate ice-troll trip and **twelve = three restore(4)** protected for the Kamil boss trip. | Pick six eggs from the western Varrock Sewers ground spawns and obtain six actual harralanders. Refill anything consumed before the full boss inventory. Keep Heroes' extra herb separate. |
| Energy potion | Additional harralander + water-filled vial + chocolate dust; 26 Herblore | Three crafts from zero give **nine doses**, enough for two energy(4) and one spare dose. | Existing finished potions first; otherwise buy chocolate bars from Heckel Funch, crush them, and use herbs additional to the restore/Heroes allocations. |
| Antipoison | Buy finished ordinary antipoison, or make marrentill + water-filled vial + ground unicorn horn at 5 Herblore | Two antipoison(3) in the bank as a starting pool; withdraw for the chest/pyramid legs and replace used supply. | Jiminua is the direct shop supplier; no assumed unicorn-horn or Farming stock. |

Ordinary restores restore drained combat stats including Magic. They do **not** restore Prayer, Hitpoints or Agility. Super restores are a different 63-Herblore recipe using snapdragon and eggs. They are not an entry assumption for a 41-Herblore account. Decanting changes bottles, not the total doses.

The egg pickup has an actual route: the manhole east of Varrock Palace, then the western sewer moss-giant/deadly-red-spider area. The 51-Agility pipe near Vannaka is an alternative connection. This does not send the player into the Wilderness, and killing the spiders is unnecessary. Missing herbs have the existing Taverley chaos-druid drop route with an actual-item stop and no promised number of kills.

BRUHsailer collects roughly seven eggs earlier in Chapter 1.4 for shared diary/restore/Guthix-balance uses. It subsequently uses prayer potions and death runes for DT. That supports the intended supply chain, but it does not prove an unspent egg or herb balance after this guide's modified route. The local recovery is therefore part of DT itself.

### Combat plan and gloves

The default leaves the appropriate protection prayer on, banks between diamonds and uses a boss-specific positioning plan. Potion and rune quantities are opening buffers with refill conditions, not a guaranteed whole-quest budget. The twelve-ranarr stock is useful, but a failed attempt or slow kill can require more.

- **Fareed:** the no-gloves default starts with the weapon slot empty and manually casts water spells using physical air, water and catalytic rune stacks. Quest Helper's glove tooltip is about avoiding weapon disarm, including the loss of a water staff. Ice gloves permit keeping that staff equipped; smiths gloves (i) incorporate ice gloves. Plain smiths gloves and goldsmith gauntlets do not. The optional Ice Queen route names its 50-Mining access and combat supplies; a Foundry-outfit grind is not required.
- **Damis:** establish the rat/bat block while the first form is alive, with auto-retaliate off and protection prayer during setup. The rat/bat location is not mislabeled as north-east; use the linked positioning illustration. Turn prayer off only when the block actually prevents attacks. Keep it for phase two, and restore the block or teleport if it fails. This saves supplies through positioning.
- **Dessous:** ask Malak how to kill him before asking Ruantun to make the pot. Stand in melee range while casting under Protect from Melee and budget food for the other attack; repeated teleports can end the encounter. The fence is not presented as a permanent safespot. Alternating overheads every tick remains an optional high-attention technique. Failed summons need the blessed pot refilled with blood and a fresh garlic/spice mixture.
- **Kamil:** clear the five ice trolls with ordinary restores available because the cold drains stats there too. Bank after the persistent kills, replenish and take a fresh boss inventory of about four prayer(4), three restore(4), Fire Bolt runes, food, spiked boots and an item teleport. Fight in melee range under Protect from Melee, re-engage after freezes and watch current Magic separately from Prayer. The dropped super restore is a post-kill aid for drained Agility; it cannot fund the fight that earns it. Keep fire runes/casts available for the parents.
- **Pyramid:** bank the boss kit, take all four diamonds, food, antipoison, energy and a teleport, and refill if traps cause another attempt.

The guide now orders the Dessous preparation **Malak's instructions → Ruantun's silver pot → Entrana High Priest's blessing → Malak's blood → garlic powder and ordinary spice**. It no longer invents a pot-mould purchase. It accounts for six fresh molten glass, six steel bars, the separate iron bar, the fifth potential quest silver use, physical blood-rune shop access, mask replacement, lockpick acquisition, boots, and Shantay-supplied passes/waterskins for desert travel when needed. The [current quest guide](https://oldschool.runescape.wiki/w/Desert_Treasure_I) is the mechanics check for this order and the Dessous/Damis positioning corrections.

For Eblis, withdraw **12 magic logs, six steel bars and six molten glass as three noted stacks**, alongside ashes, charcoal, a blood rune and ordinary bones. These materials occupy seven slots instead of 28, leaving room for travel and survival supplies. Keep the thirteenth magic log banked for MEP1; the noted glass must remain molten glass. The [pinned Quest Helper requirements and delivery step](https://github.com/Zoinkwiz/quest-helper/blob/5f791937a99a676f23c02aa48c4e4d5b50e7edad/src/main/java/com/questhelper/helpers/quests/deserttreasure/DesertTreasure.java#L204) explicitly accept notes for all three bulk materials. R026/R027 and the mirrored DT preparation record use the same forms.

The optional practice note uses RuneLite's built-in [Prayer](https://github.com/runelite/runelite/wiki/Prayer) and [Metronome](https://github.com/runelite/runelite/wiki/Metronome) timing aids. It explains lazy flicking against one weak melee enemy, activating prayer before the attack begins rather than at the damage splat. The aids do not automatically toggle prayer or identify an enemy's attack phase. Learning either lazy or one-tick flicking is not a DT prerequisite.

An independent second DT review caught and corrected three concrete issues in the draft: the first troll trip also needed restores; Ruantun makes a silver pot rather than supplying a pot mould; and an initially unarmed Fareed method removes the full-inventory disarm ambiguity. The inventory arithmetic was then checked again: the Kamil kit occupies twelve slots with the fire staff and one recoil equipped, leaving sixteen food slots before optional extra travel supplies.

## Other material repairs

### Early quest chains and reusable supplies

The early pages now name the actual supplies for every grouped quest. Sea Slug receives its finished swamp paste before Holgart's repair. The Knight's Sword has a whole cooked redberry pie, two successful iron bars and the relevant Mining/Smithing recovery; an empty-default-stock shop is not treated as a supplier. Daddy's Home's ten planks, five cloth and nail requirement are explicit, and its actual reward planks are allocated between the level-10 Construction bridge, Tower of Life and Observatory.

Sleeping Giants uses unspun wool. The later cooking handoff distinguishes the required cooked trout and salmon from raw fish in a reward pool. X Marks the Spot and Client of Kourend lamps use destroy/reclaim handling where they cannot be banked. Early sea travel, needed coins, quest-local disguises and Fishing/Construction entry gates are supplied before their consumers.

Chapter 1.3 enumerates the twelve foundation quests and seven Zeah quests individually. It separates Fenkenstrain's new three bronze wires from Pirate Pete's three, ordinary chicken bones from other bones, enchantment runes from elemental staffs, and new glass recipes from the protected orb batch. Balls of wool come from Aemad or shearing/spinning; Ned supplies rope. A complete oil-lantern recipe and access gate are available before enclosed-light consumers.

### Recipes and conditional quest requirements

Fairytale I documents all 31 possible random-item results while telling the player to obtain only the actual three-item roll. High-level herbs can be cleaned by Zahur, and the nature-talisman branch includes the conditional Temple of the Eye unlock and a normal GOTR-to-50-pearls supplier. Jungle Potion may move forward if its items are needed; the later Herblore floor no longer relies on counting its 775 XP in a particular order.

Forgettable Tale receives two real barley malt: buy four barley seeds, grow barley, and cook the harvested grain. Its kelda hop, empty containers, yeast purchase and fermentation time are included. RFD's opening fruit blast needs two lemons, including the garnish, and must be self-made. Pirate Pete has a raw-cod source and burn recovery. The Mountain Dwarf cake gets an accessible cooling method.

Family Crest has sources for all five cooked fish and the Magic/rune gate for all four blast spells. The guide directs the player to select Chaos gauntlets for bolt spells. Enlightened Journey gets all paper, wool, sacks, dye, silk and candle/bowl materials plus the quest-willow branch timer. Animal Magnetism distinguishes five successful iron bars from five ore.

My Arm's guide route deliberately reserves eight supercompost from the fifteen-bucket batch, leaving seven usable spare buckets while preserving the quest allocation. Seven plus plant cure remains a valid alternative. The conservative Herblore floor is **38,333 XP**, above level 40's **37,224**, without double-counting an early Jungle Potion completion.

### Middle and late quests

The middle chapters now handle gang-dependent Heroes' supplies, the Fremennik Isles' Mining-dependent ore and raw fish, Monkey Madness/RFD amulet and greegree retention/recovery, local light sources, and the household ingredients of smaller quest chains. One Small Favour's Guthix rest has its own herb, hot-water and cup recipe. “Empty pot,” “empty bowl” and a filled or unfinished item are kept distinct.

The later pass supplies missing Slayer gloves for Rum Deal, Perilous Moons tools, the Great Brain Robbery's **200 nails** across the stairs and crate, and the crafting-table/Workshop facility needed for its toy cat. It checks the larger household kit in A Tail of Two Cats, Dream Mentor's three food types, What Lies Below's fifteen chaos runes and fired bowl, and Making History's unenchanted strung sapphire amulet.

While Guthix Sleeps' actual Movario storeroom loot supplies the three magic logs needed for an as-yet-unlocked MM2 balloon route. That removes the duplicated early requirement: the Chapter 1 allocation is now **thirteen magic logs**, twelve for DT and one for Mourning's End Part I. If the later chest loot was already spent, the MM2 step still supplies a live recovery. Unclaimed loot is not an existing bank balance.

Late cleanup quests have their own disguise, bones, container, combat-style and tool checklists. Grim Tales checks actual 71 Woodcutting instead of inferring it from the earlier 70 gate, then its reward is counted at the proper later consumer. Enchanting diamond bolts accounts for two law runes per ten bolts. Fight Caves requires Prayer-restoring potions; ordinary stat restores are not a substitute. The final quest chain supplies the appropriate opening combat switch, weapon upgrade inputs and actual cape-purchase cash.

The Red Reef's ship-repair recommendation is separated from Quest Helper's hard requirements. Current and older beta sources disagree about the exact mahogany-kit batch recipe. The guide names the workbench, Construction gate, material suppliers and required finished-kit buffer, and uses the current in-game workbench recipe to calculate only the live ingredient deficit. It does not label a disputed beta quantity as a verified current recipe.

## Verification and practical limits

The production build and browser verification run on the review branch through [Quest guide review](https://github.com/esherkness14/runescape-adventure-guide/actions/workflows/quest-guide-review.yml?query=branch%3Acodex%2Fquest-supply-preparation-audit). The workflow has read-only repository permissions and is scoped to this review branch; it does not deploy the guide.

The complete page changes at `99b5fa1088ad0761cb9be998816dc001f5fa1472` passed [production build and browser checks](https://github.com/esherkness14/runescape-adventure-guide/actions/runs/39092975738): 22 site pages built, all 17 Intermediate pages checked, 253 required and four optional checkboxes preserved, and 170 disclosures starting closed. The [recorded verification result](audit/quest-supplies/verification.json) identifies that exact revision; the review PR also records the final branch check.

The verification script checks:

- All 17 pages compile in the production Astro build.
- Source progress IDs, order, required/optional/informational semantics, storage keys and page styles match the baseline; shared progress components are unchanged.
- The generated pages contain the expected checkboxes, no duplicate IDs, working local destinations/anchors, and preparation disclosures closed by default.
- Desktop 1440-pixel and mobile 390-pixel viewports have no document overflow; the expanded DT potion note is also checked on mobile.
- The potion disclosure opens from the keyboard.
- Completing DT survives reload; checking an optional activity does not change the required-progress numerator; reset works.
- Browser page errors are absent. CI retains a JSON result and desktop/mobile screenshots as review artifacts.

The local execution environment disconnected during the work. Completed drafts were recovered through the repository API, committed to the isolated review branch and verified in GitHub Actions. A successful CI browser run is not described as an in-game test or a manual inspection of every screenshot.

A “fixed” coverage row means the **guide's preparation gap** was repaired. It never means the player owns the item. Shops can be out of stock, herbs and some quest requests are random, crops can fail, and combat can require retries. The new notes give the specific recovery and stopping condition for those cases. They do not promise a number of random kills, import optional rewards into the mandatory route, or use a post-quest reward to pay the quest's entry cost.
