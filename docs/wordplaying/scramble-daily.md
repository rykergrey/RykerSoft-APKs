# Daily Scramble experiment

Open **Matches → Daily Scramble**, with either All games or Scramble selected. The development playtest at `/scripts/scramble-daily-preview.html` uses the same backend and requires the daily callables to be deployed.

Each Pacific calendar day has one 11×11 board with two intersecting words already placed, visible randomized premium squares, and seven fixed rack tiles. Date, puzzle version, board, bonus positions, tile values, tile IDs, and rack order are deterministic and identical for every player. The letter pool follows Scramble’s existing tile distribution. A puzzle stays on its starting date if midnight passes while it is open.

Players explicitly start a two-minute clock before seeing the board or rack. They have score previews, shuffle, undo, and redo during that time. The persisted deadline keeps running when they leave or reload; an unsubmitted attempt expires for 0 points. One valid connected placement locks the result. Normal word, crossword, premium, and full-rack bonuses apply; unused letters have no penalty. Invalid drafts do not consume the attempt. There is no exchange, pass, or redraw. Existing board premiums are consumed; newly placed letters activate available premiums.

Attempts now live on the server, separately from ordinary Scramble matches. Registered accounts resume the same deadline and result across devices; guest Firebase sessions can also play. The server owns the deadline, reconstructs the canonical board, validates placements with its dictionary, and stores the result once. Device storage only caches shared results and account-scoped drafts. Clearing it cannot reset a server attempt. Copy result shares the date and score without revealing the word. These daily results do not enter the existing live/async Scramble rankings.

Today’s daily is always listed for everyone. Starting a daily publishes its original date in the shared weekly directory. That board remains open for any other player through Sunday, closing at Monday 00:00 Pacific. Late arrivals get the original board, bonuses, and rack with their own two-minute clock. Unstarted historical boards, future boards, and previous-season boards cannot start attempts. A clock started just before season end is capped by the season boundary. Historical cards include the original date. Earlier device-only experimental attempts are not automatically published as trusted shared history.

Deploy `getSeasonDailyBoards`, `beginScrambleDailyAttempt`, `getScrambleDailyAttempt`, `submitScrambleDailyAttempt`, the updated `beginCompetitiveAttempt`, Firestore rules, and the client together. This source change does not deploy production.


## What to evaluate in playtests

- Does seeing the score invite better exploration, or make choosing too mechanical?
- Are simple hooks tempting while longer words and crosswords reward further thought?
- Do blanks create enjoyable choice, or too much searching?
- Are two-word crossings sufficiently varied, or should later versions include denser connected positions?

The initial version rotates four hand-checked word crossings, orientation, six curated racks, and seeded premium layouts. Every rack has an S for a guaranteed legal hook. Boards should offer several plausible moves rather than a single forced solution. Keep published daily versions stable when changing generation or scoring.

Run the deterministic and gameplay checks with:

```sh
npm run verify:scramble-daily
npm run verify:scramble-daily-ui
npm run test:season-daily # Firestore emulator; Java 21+ required
```

The check covers 366 distinct daily setups, repeatability, the complete tile pool, dictionary-valid starting words, guaranteed legal moves, rejected non-placement actions, immutable source boards, one-move completion, score handling, no redraw, replayed saved results, blank validation, Pacific midnight, persisted deadlines, boundary-time rejection, timeout restoration, and move variety using the production move finder.
