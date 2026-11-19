# Puzzle games

Five word puzzles sit beside Bungle and Scramble: **Whittle**, **Axle**, **Muddle**, **Tangle** and **Noodle**.
They are original games. Every puzzle is built on the device from the TWL06 dictionary, a list of common
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

## Home

Home has a carousel of every game at the top, in a fixed order that starts with Bungle. Swipe it, tap a
card, or use the arrow keys. The card in the middle is the selected game, and Matches, Modes, Leaderboards
and Awards below all belong to that game. The app opens on Bungle and keeps the chosen game while it stays
open. There is no cross-game view.

For a puzzle game:

- **Matches** lists today's five boards and a Pass & Play shortcut.
- **Modes** is the setup: players, options, modifiers, and a Load row with Classic and today's three mixes.
- **Leaderboards** has Board scores (pick a day and a board), Today (the five boards added up) and This week.
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

## Scores and notices

`beginPuzzleDaily` opens a board (`games/puzzles/attempts`, server-only) and `submitPuzzleDaily` posts
its result once to `games/puzzles/results/{boardId}_{uid}`, which signed-in players can read. The device
scores the puzzle; this is a family game, so the server checks when and how often a board is played, not
the play itself. A copy stays on the device (`wp_puzzle_results_v1:<uid>`) for an instant display.

`notifyPuzzleDailyScore` tells every player already on a board how the new score leaves them: beaten,
tied, still ahead of the newcomer, or still leading, with their rank ("You are 2nd of 3"). Bungle and
Scramble daily notices use the same wording. Tapping a notice opens that game's Leaderboards on that board.

## Pass & Play

Whittle (set a word for each other), Muddle (steal groups), Tangle (one shared chain) and Noodle (claim
words) can be played by two or three people on one device. These do not post scores. Axle has no
shared-device game.

## Checks

```sh
npm run verify:puzzles      # engines, 60 days of lineups, every board solvable with its modifiers
npm run verify:home         # carousel, per-game tabs, puzzle daily list and leaderboards
npm run test:puzzles        # Firestore emulator (puzzle functions and rules); needs Java 21 on PATH
```

`scripts/build-puzzle-lexicon.cjs` rebuilds `services/puzzles/lexiconData.ts` from
`scripts/data/puzzle-common-ranked.txt` and holds the list of words never used as a puzzle answer.

## Release

Deploy the client together with these functions and the rules. Until then puzzle dailies cannot be opened.

```sh
npx firebase deploy --project wordplaying-5eec3 --only functions:beginPuzzleDaily,functions:submitPuzzleDaily,functions:notifyPuzzleDailyScore,functions:notifyBungleDailyScore,functions:notifyScrambleDailyScore,functions:beginScrambleDailyAttempt,functions:beginCompetitiveAttempt,firestore:rules
```

`beginCompetitiveAttempt` and `beginScrambleDailyAttempt` carry the same-day rule for Bungle and Scramble.
The two existing notice triggers carry the new rank and lead wording.
