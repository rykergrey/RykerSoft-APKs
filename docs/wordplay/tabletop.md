# Tabletop multiplayer

Choose **Create match → Tabletop**, or load the Tabletop / Tabletop Fuse preset. Choose 2–8 players before starting, optionally enter up to three initials for each seat, and sit clockwise from P1. Put one phone in the center. Boggled turns on by default whenever you select Tabletop, but you can disable it in Modifiers. Saved modes preserve your choice. When enabled, tile rotations stay fixed even while selected.

Release a valid word to score and immediately start the next player's turn. A brief green flash confirms acceptance; invalid attempts flash red and keep the same player active. Every word is claimed only once across the match, including words later broken by Letter Lock or Word Grid. No pass-device screen, confirm button, or success animation delays the next swipe. Tap Out retains its explicit Submit button.

The current player's color fills the space around the board with a textured glow, colors the turn banner and word tray, and strengthens the board frame. Saved local-player initials appear in the banner, score cards, word list, and on all four board edges; player numbers are the fallback. The active player and personal time remain legible from every side of the phone.

## Clocks and scoring

The selected duration is the **total starting time**, split equally. A 60-second match with four players starts each player at 15 seconds. Only the active player's clock burns. Expired players are skipped; every remaining player can spend their own time, including the last active player. The match ends when every clock expires, all Bounty Hunt targets are cleared, or someone chooses End match. Highest score wins; ties share victory. A clock expiring does not erase earned points.

**Fuse** is a timer modifier, available in solo, ordinary local play, and Tabletop. Each new valid word adds one second per scored word point. In Tabletop the bonus goes only to its finder. The timer and point tally are separate: words earn points, time spent burns the clock. Best Word still uses only each player's highest word for the final score, while every fresh word can earn time. Earned time is not removed if Letter Lock or Word Grid later breaks a word. Fuse does not stack with Endless and is unavailable in Showdown, Turf War, and authoritative online play.

## Information and combinations

Scores and found words are visible by default. **Hide Scores** hides totals, point feedback, and word scores until results. Fuse time gains remain visible. **Hide Words List** hides the persistent word list; immediate submission feedback still shows the submitted word. Final results reveal everyone's words and points. Hide Words List cannot combine with Bounty Hunt because the target list is the hunt itself.

Tabletop supports Letter Boost, Letter Values, Color Bonus, Best Word, Connected Words, Letter Lock, Hide & Seek, Tap Out, Reroll, Full Reroll, Gravity, Word Grid, Bounty Hunt, Strict, Super Strict, Fuse, and both hide modifiers, subject to their existing pairwise conflicts. Board changes carry to the next player. Rerolls and gravity settle immediately in this format; other formats retain their animations.

Connected Words continues from the previous player's accepted path. Letter Lock can break another player's words; Word Grid swaps can invalidate anyone's locked words. Strict costs the offender 5 seconds. Super Strict expires only the offender's clock. Dizzy, Turf War, Unique Finds, Endless, Combo Meter, and live-only rules have conflicting turn or board semantics and are disabled with explanations in setup.

Saved/community mode identity includes the Tabletop format and player count. No existing mode identities change. These are local matches; the online authoritative scoring protocol is unchanged.

## Verification

`npm run verify:tabletop` covers personal time accounting, subsecond turns, duplicate pointer events, delayed timers and late submissions, individual expiration, Fuse rewards, Strict and Super Strict, gravity, hidden-score UI, active-turn labeling, four-sided labels, final results, normalization, and mode identity. Match Options tests cover choosing Tabletop, default/removable Boggled, modifiers, and player count.
