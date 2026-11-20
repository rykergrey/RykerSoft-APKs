# Puzzle games

WordPlay has seven game types, all equal: Bungle, Scramble, **Whittle**, **Axle**, **Muddle**, **Tangle** and
**Noodle**. This page covers the last five, which share a puzzle engine and screen kit. They are original games. Every puzzle is built on the device from the TWL06 dictionary, a list of common
words, and a category bank written for this app.

| Game | What you do | Board points (0 to 100) |
| --- | --- | --- |
| Whittle | Find a hidden word in six guesses. The count of possible answers is shown after every guess. | 100 for a first-guess solve, an even share less per guess, 0 unsolved |
| Axle | Make words from seven letters; every word uses the axle letter. Words score by length as in Bungle, 7 extra for a full wheel. | Score against the wheel's common words; Full throttle is 100 |
| Muddle | Sort sixteen words into four hidden groups. Exactly one sorting works. | 100 clean, 15 off per strike, 10 per group if unsolved |
| Tangle | Chain words around a ring without two letters in a row from one side, until every letter is covered. | 100 under par, 85 at par, 15 off per extra word |
| Noodle | Trace themed words that fill a grid. Other real words earn hints. | 100 cleared, 12 off per hint, up to 40 unfinished |

Names, rules text, options, modifiers and the daily mix pools live in `services/puzzles/rules.ts`.
Each game's engine is a pure module in `services/puzzles/`; screens are in `components/puzzles/`.

Tangle's ring doubles as a visualizer (`components/puzzles/TangleArt.tsx`, measured by
`services/puzzles/tangleIntricacy.ts`). Every mark comes from the
played chain: strands follow the letters, knots sit where strands really cross, and the effects grow with
intricacy (hops plus twice the square root of crossings) across tiers at 20, 36, 56 and 84. Tier 2 adds
glow and comets running along the strands, tier 3 a rotating echo of the chain and pulsing knots, tier 4
mirrored echoes and knot halos, tier 5 a faster spin. A covered ring blooms and shows at least tier 3. Undo lowers the tier again.
Colors are appearance roles, by word order (by player in versus), and each word in the chain list above
the ring takes its strand's color. While dragging, the word's line stretches from its last letter to the finger.
Reduced motion stops all movement.

## Feel

All seven games give the same kinds of feedback, each in its own way:

- **Touch.** Tiles, keys and buttons sink on touch-down and spring back on release (Bungle's tiles press
  into their bevel).
- **Motion style.** The Appearance motion style (Gentle, Halo or Glint) sets how a letter reacts when it
  is picked: Bungle's selected tiles, Scramble's placed tiles, and the lit letters in the other five.
- **Scores.** Points count up instead of jumping: Bungle's and Scramble's final score (`ScoreReveal`), Scramble's per-turn count-in, and
  the other five's readouts and finished points (which glow at 100).
- **Reduced motion.** When it is on, numbers show their value at once and nothing moves.

Each game has its own signature moments:

| Game | On a play | At the end |
| --- | --- | --- |
| Bungle | Letters pop as they join the path; a word's score pops in | Tiles pop off the board, then the score is tallied |
| Scramble | A placed tile drops into its square; bonus squares and multipliers call out before the score counts in | The final score counts up, as in Bungle |
| Whittle | Marks flip in letter by letter; the answer count rolls down | The solved row hops |
| Axle | A line traces the word across the wheel and its keys light; a find sends a ring outward (wider for a full wheel) | The wheel takes one full lap |
| Muddle | A correct four take their group's heat and rise into the new bar | The bars cheer in turn; missed groups arrive one by one |
| Tangle | The visualizer above | A covered ring blooms |
| Noodle | The strand draws itself along the word and its letters settle in trace order | A wave runs corner to corner and every strand glows |

For the five puzzles this is CSS on the appearance roles (`components/puzzles/puzzles.css`) except the
rolling numbers (`Rolling` in `PuzzleKit.tsx`) and Noodle's strand draw. Bungle and Scramble keep theirs
in `styles.css`, `components/Tile.tsx` and `components/builder/`.

## Home

Home is described in [Home navigation](home-screen.md): a carousel of every game that folds away while a
list scrolls, a pull-down game library, and the same four tabs for all seven games. For a puzzle game:

- **Matches** lists today's five boards under a five-segment meter, then custom matches other players
  posted (Open to play) and the ones you have played (Finished).
- **Modes** is the setup for a custom match: Presets (Classic and today's three mixes), players, options,
  modifiers and Start match.
- **Leaderboards** has Daily boards (every day of the season, newest first), Today (the five boards added
  up) and This week.
- **Awards** counts the daily boards finished on this device.

## Daily boards

Every puzzle game has five boards a day, the same for everyone, rolling over at midnight Pacific:

1. **Classic I** and **Classic II**: the standard rules, no modifiers, two different puzzles.
2. **Three Mix boards**: each uses a different combination of modifiers (and sometimes a different
   option, such as a 6-letter Whittle or a hex Tangle). They are drawn from the game's pool so that the
   three overlap as little as possible, and named by what they change, for example "Twin + No Keys".

Daily boards follow the same rules in every game:

- **Sign in to play.** Guests see the boards and can use free play.
- **Today only.** A board can be opened only on its own Pacific day. A player who does not play that day
  has no score on that day's boards and nothing toward the week from them. A board opened before
  midnight can still be finished and posted for an hour afterwards.
- **Once.** The server records the opening. Leaving early asks first and scores the board as it stands;
  a board opened and abandoned (for example, the app was closed) stays used without a score. An untimed
  Axle wheel keeps its words through its day and can be reopened until the score is banked.
- **Posted automatically.** A finished board posts its score at once. If the device is offline, the post
  is retried when the connection returns and the next time Home loads that game, up to an hour after
  midnight.
- **Scores after you play.** Today's scores for a board appear once you finish it. Earlier days are open.

## Daily variety

Daily boards come back with new content every day, so nobody can memorise them. Two methods, by how
much content each game has:

- **Planned schedule (Muddle, Noodle, Tangle).** `npm run build:schedule` plans two years of days and
  writes `services/puzzles/scheduleData.ts` (about 70 KB, category titles and opening words). Muddle uses
  20 categories a day from a bank of about 270, so each day's boards are chosen, not drawn: a category
  rests at least 10 days, the longest-rested come first, the four groups on a board share words to make
  red herrings, and every planned board is built the way the game builds it, sorts exactly one way and
  passes the fairness checks in `scripts/lib/muddleRules.ts` (no tile from another group may complete a
  fill-in-the-blank phrase or fit a "hides a…" rule without being listed). Noodle themes rest 14 days and
  never repeat a category Muddle shows that day or the day before. Tangle's opening words are chosen so
  no ring's letters return within 60 days.
- **Rotation decks (Whittle, Axle).** Answers and letter wheels come from thousands of words, so each is
  dealt from a shuffled deck in `services/puzzles/rotation.ts`: nothing returns until the deck is dealt,
  and the start of a new pass never repeats the end of the last. Positions come from the date alone.

Both start on `SCHEDULE_FROM` (2026-11-23). Earlier days are rebuilt from the frozen bank in
`categoriesLegacy.ts` exactly as first dealt, so a board already played never changes. **The start date
must be later than the day this ships**, or that day's boards would change after some players have
played them.

| Measured over a year | Before | Now |
| --- | --- | --- |
| Shortest gap before a Muddle category returns | same day | 10 days (13 typical) |
| Muddle red herrings per board | 1.6 | 2.4, never none |
| Noodle theme | same day | 20 days |
| Tangle set of letters | same day | 60 days |
| Whittle answer | same day | 43 days |
| Axle wheel | 6 days | 24 days |

### The category bank

`services/puzzles/categories.ts` holds the Muddle and Noodle categories, one per line, in four tiers
(Muddle's heats). `npm run audit:muddle` checks every category and fails on a broken rule:

1. Eight words or more, so a returning category usually shows different tiles.
2. Familiar words: each within the first 30,000 of the common-word list.
3. Ten letters at most per tile.
4. At least one word shared with a category in another tier, so it can make red herrings.
5. It lists fill-in-the-blank words that make a familiar compound but are not listed (the schedule keeps
   those off the same board).
6. It compares the mix of category types per tier with NYT Connections, measured from 1,900 published
   groups: easy tiers lean on plain sets and synonym groups, the hardest tier on fill-in-the-blank and
   wordplay. The bank uses story sets and "things with…" groups where Connections uses pop culture.

After changing the bank: `npm run audit:muddle`, then `npm run build:schedule` (it keeps every day up to
today and replans the rest), then `npm run verify:puzzles`.

## Ties

Every result stores its play time. On every board, day and week standing, more points rank higher and
equal points go to the faster time; only equal points and equal time tie. Times show beside each score.
The clock stops while How to play is open.

## How to play

The **?** in a puzzle's title bar, and the **?** at the top of Home for whichever game is selected, open
the same guide for all seven games (`components/guides/`). It has five sections: Goal (an example board
and the rules), Try it (a practice board running the real rules, not scored), The screen (every readout,
board part and button; opened from a board it shows that board's live values), Points (with a worked
example) and Modifiers (the board's own first). Readout meanings live beside the readouts themselves, as
the `hint` of each `ReadoutItem`. Preview any section with `scripts/guide-preview.html?game=tangle&step=screen`.

## Scores and notices

`beginPuzzleDaily` opens a board (`games/puzzles/attempts`, server-only) and `submitPuzzleDaily` posts
its result once to `games/puzzles/results/{boardId}_{uid}`, which signed-in players can read. The device
scores the puzzle; this is a family game, so the server checks when and how often a board is played, not
the play itself. A copy stays on the device (`wp_puzzle_results_v1:<uid>`) for an instant display.

`notifyPuzzleDailyScore` tells every player already on a board how the new score leaves them: beaten,
tied, still ahead of the newcomer, or still leading, with their rank ("You are 2nd of 3"). Bungle and
Scramble daily notices use the same wording. Tapping a notice opens that game's Leaderboards on that board.

## Playing together

- **Pass & Play.** Whittle (set a word for each other), Muddle (steal groups), Tangle (one shared chain)
  and Noodle (claim words) can be played by two or three people on one device. These do not post scores.
  Axle has no shared-device game.
- **Custom matches (all five games).** A signed-in player who finishes a solo board set up in Modes can
  press **Post match** on its results. The board (seed, options and modifiers) then appears in everyone's
  Matches under Open to play until the season ends on Sunday. Whoever plays it gets the same board, and
  their score is added automatically, once. Scores stay hidden until you have played; after that the
  card compares them. `services/puzzles/matches.ts` holds this; documents live in
  `games/puzzles/matches/{id}` and `games/puzzles/matchResults/{matchId}_{uid}`. This is a family game, so
  the device scores the board and the rules only check that a player writes their own match and their
  own single result. Nothing is edited or deleted.
- **Not built:** an online room where players on separate devices take turns on one puzzle board.

## Checks

```sh
npm run verify:puzzles      # engines, 60 days of lineups, a year of the schedule and rotation, ties
npm run audit:muddle        # the category bank's quality rules
npm run build:schedule      # replan Muddle, Noodle and Tangle from tomorrow on (keeps earlier days)
npm run verify:home         # carousel, per-game tabs, puzzle daily list and leaderboards
npm run test:puzzles        # Firestore emulator (puzzle functions and rules); needs Java 21 on PATH
```

`scripts/build-puzzle-lexicon.cjs` rebuilds `services/puzzles/lexiconData.ts` from
`scripts/data/puzzle-common-ranked.txt` and holds the list of words never used as a puzzle answer.

## Release

Deploy the client together with these functions and the rules. Until then puzzle dailies cannot be opened,
and until the rules are deployed custom puzzle matches cannot be posted or listed (Matches then shows the
daily boards only).

```sh
npx firebase deploy --project wordplaying-5eec3 --only functions:beginPuzzleDaily,functions:submitPuzzleDaily,functions:notifyPuzzleDailyScore,functions:notifyBungleDailyScore,functions:notifyScrambleDailyScore,functions:beginScrambleDailyAttempt,functions:beginCompetitiveAttempt,firestore:rules
```

`beginCompetitiveAttempt` and `beginScrambleDailyAttempt` carry the same-day rule for Bungle and Scramble.
The two existing notice triggers carry the new rank and lead wording.
