Intermediate Chapter 1 update — Chapter 2 handoff audit pass

Extract/copy the CONTENTS of this update directly into:
C:\Projects\runescape-adventure-guide

Allow Windows to merge folders and replace matching files. Do not leave this update folder nested inside the project.

This revision includes:
- Full standalone Intermediate Chapter 1, split into 1.1–1.4.
- Exact instructions/items instead of vague “grab useful supplies” wording.
- Current Wintertodt Warmth/warm-clothing guidance.
- Expanded Mage Training Arena and birdhouse instructions.
- Explicit quest/skill dependency checks, including Fairytale I -> Farming progression.
- Restored Fremennik quest foundation.
- Tai Bwo Wannai Cleanup to 100% favour, with the regular gout tuber now a required banked carryover for Karamja Medium.
- Explicit 100 Varrock Museum Kudos before Bone Voyage.
- Explicit Construction checkpoints for Getting Ahead (26) and Scrambled! (38).
- Children of the Sun and A Porcine of Interest restored where their unlock/XP matters.
- Completed route steps visibly dim when checked.
- Optional route blocks can still be checked/dimmed but no longer inflate required progress.
- Restored the full 1,600-bucket sandstone target, with Shooting Stars as the relaxed finish and 2,000 stardust banked.
- Added Gemstone Crab as the recommended AFK Ranged option and an optional 60/60/60 melee break.
- Expanded the 43 Prayer step into an explicit hybrid: use fast green dragons while the Wilderness is quiet, then finish roughly 75–80 total bones on safespotted Isle of Souls blue dragons if PK traffic becomes annoying. The walkthrough now explains the Soul Wars teleport, dungeon route, safespot, Water Strike fallback, 100-chaos-rune reserve, banking, and one-inventory-at-a-time Chaos Altar cash-in.
- Added Chapter 2 carryover checks (mushroom pies, teak trees, stardust, gout tuber, harralander, bucket sap, slime, salmon, heavy fishing rod, spare molten glass, etc.).
- Explicit Desert Treasure supply list and retained Plague City gas mask.

After copying, run from the project folder:
  npm run dev

Then open:
  http://localhost:4321/runescape-adventure-guide/intermediate/

- Herblore 40 is now a guaranteed XP chain rather than a bankstanding grind: 31 minimum -> Jungle Potion -> Eadgar's Ruse -> Kourend & Kebos Easy lamp -> My Arm's Big Adventure. My Arm now sits directly beside that progression in 1.4.
- Clarified the Chapter 1.3 Crafting route: smelting 1,600 molten glass is not the 56 Crafting target; reserve 7 quest glass, then blow 1,590 unpowered orbs (83,475 Crafting XP), either immediately or in chunks, with a hard completion checkpoint in 1.4.

- Chapter 1.1 now combines the early 35 Woodcutting and 50 Firemaking progression: burn the logs you cut by default, with banking as an optional convenience. Wintertodt now also explicitly presents 99 Firemaking as an optional stopping point while keeping ~89 as the recommended Intermediate target.
- The 65→70 Woodcutting break now deliberately overlaps the five-cap Sulliuscep grind instead of finishing 70 first. The guide includes a returning-player/first-timer swamp walkthrough, the Sticky Swamp mushtree unlock, required rake/antipoison/food, the six-location loop, a ~45–75 minute planning estimate for five caps, and a clearly labeled 58-Crafting-via-extra-glass alternative with its extra material/world-hop cost.
- Added the Woodcutting Guild axe stop during the Zeah arc: buy the rune axe for the long 1.4 Woodcutting block once 60 Woodcutting is available (skip if you got a dragon axe), and bank a mithril axe at the same stop for Animal Magnetism later in 1.4.

- Clarified the Prayer cash-in destination: use the level-38 Chaos Temple (hut) northwest of the Forgotten Cemetery / west of the Lava Maze, not the low-level Chaos Temple with Zombie Pirates and aggressive Elder Chaos Druids.
- Added a reusable closed-by-default optional-info accordion component. The Prayer step uses it for gravestone / Death's Office recovery mechanics, including the confusing repeated-death transfer behavior and when not to death-run a dangerous grave.

- Reworked the Chapter 1 Ranged block around the ammunition the route already created: the guaranteed Slayer XP is now explained (Museum quiz + A Porcine of Interest + RFD Mountain Dwarf = 3,000 XP / level 16), one Vannaka assignment closes the 523-XP gap to 18 Slayer while steel arrows push Ranged toward 30, then Ernest the Chicken + Animal Magnetism are completed before the long Ranged grind. Ava's attractor is now a Chapter 1 unlock, steel arrows are the default AFK ammunition, and 75 arrows are reserved for the accumulator upgrade at 50 Ranged.
