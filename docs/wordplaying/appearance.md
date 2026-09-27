# Appearance system

Open the palette button on Home, or **Appearance** in Scramble's match menu. The studio previews coordinated palettes, tile finishes, and motion separately. Locked pieces can be tried without changing the live game. Applying an earned combination is explicit; dismissing a preview leaves the current look alone.

## Visual contract

Charcoal surfaces and warm off-white letters keep the board calm. Ember is the default orange accent. Each palette supplies one action/new-letter accent, one distinct waiting-player planning accent, and one quiet contributing-word outline. Finishes only alter neutral tile surfaces. These constraints make every offered combination compatible; arbitrary per-element color picking is intentionally unavailable.

| Meaning | Default treatment |
| --- | --- |
| Background / empty cell / tile | Near-black / dark charcoal / lighter graphite |
| Active selection and newly committed letters | Warm orange |
| Planning while waiting | Sea glass; dashed ghosts, never white selection |
| All tiles in scored words | Cool outline; existing letters stay off-white |
| Stack | Small layered mark/count opposite the letter's point value |
| DL / TL | Muted teal / periwinkle |
| DW / TW | Sand / rose |

Bonus hues and labels remain stable across palettes. Lasting Bonuses keep an outer premium outline and label even under a tile; word contribution uses a separate inner outline. Hidden bonuses remain invisible until discovered. Color is reinforced by labels, dashed draft outlines, and stack marks.

Gentle is the restrained default animation. Halo and Glint add cosmetic emphasis without changing scoring or reveal timing. Reduced-motion preferences disable these effects. Opponent entry animations remain limited to actual new placements; contributing tiles receive an outline instead of falling into the board again.

## Rewards

Every piece can be earned through completed matches; online wins are an optional faster route. Starter pieces are Ember, Graphite, and Gentle.

| Piece | Completed matches | Or online wins |
| --- | ---: | ---: |
| Honey palette | 3 | 1 |
| Slate tiles | 5 | 2 |
| Halo motion | 10 | 3 |
| Copper palette | 12 | 4 |
| Warm carbon tiles | 15 | 5 |
| Dusk palette | 25 | 8 |
| Glint motion | 30 | 10 |
| Tide palette | 50 | 15 |

Local completion requires actual play and a finished whole match, not a draft, handoff, or intermediate round. Stable receipts prevent repeat saves from earning again. Trusted Bungle competitive totals, Bungle live records, and Scramble ruleset statistics are counted separately to avoid overlap. Totals retain their high-water mark so delayed snapshots cannot revoke rewards.

This first implementation stores selections and local receipts on the device, separated by registered profile or guest. A local match credits one profile; guest receipts do not transfer on sign-in. Account-backed online statistics rebuild online eligibility on other devices, but selected looks and locally earned progress do not sync between devices. These are optional cosmetic rewards, not a server-authoritative economy.

## Extending the collection

Add a stable ID, label, description, and play/win thresholds to `services/appearanceCatalog.ts`. Palettes must supply the existing semantic roles, finishes must preserve letter and premium-label contrast, and effects must implement matching live and preview styles with reduced-motion support. Never recycle IDs. Catalog entries automatically appear in the studio and unlock evaluation; no separate settings page is needed.

Run `npm run verify:appearance`, `npm run verify:builder-ui`, and `npm run verify:builder-score-effects` after changing this system. Check a narrow mobile viewport and keyboard interaction as well as the live board.

Lasting Bonuses changes scoring and requires protocol 3 support. Release its backend together with the client; earlier protocol 1/2 matches remain supported. Source changes do not deploy the backend automatically.
