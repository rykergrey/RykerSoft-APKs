# Daily Scramble challenges

Home → Matches lists five Scramble challenges every Pacific calendar day. Each uses a dense 15×15 crossword, usually 58–62 occupied squares and 10–11 intersecting seed words. The versioned seed lexicon includes words such as CIPHERS, ORBITAL, LANTERN, MOSAIC, and VOYAGE. Generation checks every horizontal and vertical run, reserves the player's balanced rack first, and conserves the existing physical tile distribution. The board, premiums, starting letters, tile IDs, and subsequent draw order are identical for everyone.

| Challenge | Time | Supply | Rules |
| --- | --- | --- | --- |
| One Perfect Word | 2 minutes | 7 tiles | One connected submission |
| Word Rush | 3 minutes | 7 tiles, refilling | Make as many plays as possible; scores accumulate |
| Stack Attack | 2 minutes | 7 tiles | One submission with letter stacking and prebuilt layers |
| Tile Tactics | 3 minutes | 14 tiles, no refills | Spend the supply over multiple plays; stacking allowed |
| Free Rein | 3 minutes | 14 tiles, no refills | One submission anywhere; disconnected words and changes score together |

Players explicitly start the clock before seeing the board or letters. They can preview scores, shuffle, undo, and redo until submitting. Invalid drafts do not consume tiles or plays. Every submitted tile must contribute to a word; isolated setup tiles cannot score. Multi-play formats allow early finishing. Timeouts retain all accepted points. Unused letters have no penalty. There is no exchange or redraw. Existing seed premiums are consumed; new placements activate remaining premiums. Normal word, crossword, stack, and seven-tile bonuses apply.

Attempts live on the server. Accounts resume the same deadline, rack, accepted plays, and result across devices; anonymous Firebase sessions can also play. Board snapshots freeze the initial layout and tile order for later arrivals. Move receipts make network retries idempotent, and revisions reject stale moves. There is a 60-play server ceiling. Clearing local storage cannot reset an attempt. Date-only keys preserve the original v1 two-word boards; new keys use `YYYY-MM-DD_format` and a separate puzzle version.

Today's full lineup is available to everyone. Starting any Bungle or Scramble daily publishes its original key in the shared weekly directory. Those earlier boards remain available through Sunday, closing Monday 00:00 Pacific; late arrivals get their own clock, capped at season end. Unstarted past boards, future boards, and previous-season boards cannot start attempts. Completed boards remain on Home with a results action.

Each Scramble board has its own shared standings. Rival scores are available only after the current player finishes. The Home directory exposes completed-player counts and current leader names (including ties) once at least two players have finished, without scores or word lists. Bungle cards use the same leader labels and retain their existing verified score reveal. Scramble results show the Bungle-style animated score reveal, ranks, rivals' scores, word breakdown, best word, board review, score copying, and standings refresh/retry. Ordinary Scramble matches also use the new results screen; their recap is labeled as recent scoring plays because older matches may retain only partial turn history. Pass & Play shows a shared winner summary and final scores.

Scramble daily scores remain separate from ordinary live/async Scramble rankings. Copy result shares only score information. Internal boards, attempts, receipts, and result documents deny direct client access; callables enforce reveal timing.

Development layout fixtures at `/scripts/scramble-challenges-preview.html?format=freestyle` and `?format=freestyle&result` use local canonical state and illustrative standings, without production writes. The older `/scripts/scramble-daily-preview.html` exercises the real online session and requires deployed callables.

Validation:

```sh
npm run verify:scramble-challenges
npm run verify:scramble-daily # legacy v1 compatibility
npm run verify:scramble-daily-ui
npm run verify:home
npm run test:season-daily # Firestore emulator; Java 21+
```

The new generator suite checks 70 layouts across all five formats, exact tile conservation, dictionary validity, legal choices, stacking transformations, disconnected plays, fixed supplies, refills, and cumulative timeout scores. Emulator checks cover frozen parity, independent attempts, receipt retries, revision conflicts, score privacy, ties, late arrivals, and weekly rollover.

Deploy `getScrambleDailyStandings`, the updated daily attempt callables, `getSeasonDailyBoards`, Firestore rules, and the client together. This source change does not deploy production.
