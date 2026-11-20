# Home navigation

Home is scoped to one game at a time. A carousel at the top lists every game in a fixed order that
starts with Bungle: Bungle, Scramble, Whittle, Axle, Muddle, Tangle, Noodle. Swipe it, tap a card, or
use the arrow keys; the card in the middle is the selected game, and the four tabs below belong to it.
The app opens on Bungle and keeps the chosen game while it stays open. All seven games use the same
four tabs, built from the same components.

## Room for the list

- **The carousel folds away.** Scrolling a list down hides the carousel and moves the tabs up; scrolling
  back up, or pulling down on a list that is already at its top, brings it back. Changing tab or game
  shows it again. While it is folded, the chip beside the logo names the open game.
- **The game library.** Dragging the carousel downward pulls a sheet out from the top with every game:
  a large picture, the name and one line on what you do (`components/home/GameLibrary.tsx`; the line is
  `description` in `GAME_REGISTRY` and `summary` in `PUZZLE_GAMES`). The chip beside the logo and Arrow
  Down on the carousel open it too. Choosing a game, dragging the handle up, tapping outside, Escape and
  Back close it.
- **No bottom bar.** Only Modes has a bottom button. Every other tab gives that space to its list.

## The four tabs

Two kinds of match exist, and the tabs follow from them:

- A **daily match** is one of the five boards a game offers each day, the same for everyone, playable
  only on its own day.
- A **custom match** is any other match: one set up in Modes, with a preset or with hand-picked
  options and modifiers.

**Matches** is where a match is played. One list (`components/home/YourMatches.tsx`), in four groups:

1. **Daily boards**: today's five, with a five-segment meter and count (`2/5`) in the group heading. One
   segment fills per finished board. This replaced the "Today's boards" header, its description and bar.
2. **In play**: matches that are under way, your turn first (saved Pass & Play, online and lobby matches).
3. **Open to play**: custom matches other players posted that you have not played.
4. **Finished**: concluded matches, with the scores compared on the card.

The chips above the list narrow it: All, Your turn, Available, Waiting, Finished, each with a count.
The filter button adds Type and Status. Every card has its own Play, Resume or Open button on the
right; there is no Create match button. The last row, **Custom match**, leads to Modes. Join by code
and (Scramble) turn notifications are icon buttons beside Refresh.

**Modes** is where a custom match is set up, in the same order for every game: **Presets** (one tap loads
a preset's options and modifiers), players or match format, options, modifiers, and the bottom button
**Start match** (Create lobby for an online match). For Bungle and Scramble this is Match Options
embedded in the tab (`SettingsModal variant="embedded"`); **More modes** in the preset row opens the full
library of built-in, community and saved modes. The separate Match Options page and the community
directory that used to fill this tab are gone.

**Leaderboards** has one row that chooses the list, and the rest of the tab is the list:

| Game | Row |
| --- | --- |
| Bungle | Daily boards · Today · This week · Career · My matches |
| Scramble | Daily boards · Rankings · Career |
| Whittle, Axle, Muddle, Tangle, Noodle | Daily boards · Today · This week |

**Daily boards** lists every day of the season so far, newest first, under a day heading. There is no
day picker and no description. A board whose scores are hidden from the viewer is one line with a lock
and a Play button. Earlier days list only the boards whose scores the viewer may see.

**Awards** is one scrolling list in every game: three numbers, the unlocked count, then the awards.

## Daily reads and account state

Home shares one activity fetch between the Challenges/Daily views and today's
rankings. Locked boards request an account-filtered submission lookup and an
aggregate player count, without fetching other players' score rows. Full
standings are fetched only once the viewer's own entry exists. A compound index
on `leaderboardV2` (`trustedVersion`, `dailyKey`, `uid`) supports the submission
lookup. Classic legacy keys remain supported.

Local used-attempt flags prevent replay but do not unlock scores or claim a
submitted completion. Signed-in flags are scoped to the account. Switching
accounts remounts the home view and cancels stale reads. Guests can browse daily
options and public modes; ranked play and private lists require sign-in.

Run `npm run verify:home` for navigation, the folding carousel, the game library, the
grouped Matches list and its filters, completion gating, account isolation and
query-shape checks; `npm run verify:match-options` covers the setup embedded in Modes.
`scripts/matches-preview.html` shows the Matches list with one card in every state. Chart counters,
retry behavior, week rollover, and write restrictions run against Firestore in
`npm run test:community-modes`.

The updated `recordCommunityModePlay` and `voteCommunityMode` functions and chart
rules were deployed to `wordplaying-5eec3` on 2026-09-12; both functions were verified
ACTIVE and the daily submission lookup index reached READY.
The public weekly chart query was checked in the real browser. Production had
zero public modes at rollout, so existing chart data did not need migration.
The client was built and checked at desktop and 360px phone width; distribution
still uses the application's normal release process.

## Setup and library usability

Modes holds the configuration: Solo, Pass & Play, Showdown, or Live; then board size,
timer, rounds when relevant, and modifiers. More modes opens
one library with built-in starting modes, community discoveries, Upvoted, Saved,
and named account lists. Saved also contains device-only saves and image import /
sharing. Save to account copies a device setup explicitly, retaining its name as
a private library alias without publishing a mode or casting a vote.

Modifier buttons retain their position and keyboard focus when selected.
Replacements and format-driven removals produce a message with Undo. A persistent
expandable summary sits above Start Match. Most used and Recent reflect accepted
match starts on this device (including direct preset and daily starts); no cloud
preference write is involved. Randomize applies one result without repeatedly
changing the configuration while animating.

Home puts Sign in / Account in the notifications panel, Log out inside Account and
Join by code in Matches. The mode library (More modes) features the first
three actual results from the selected chart above its directory sort control;
there is no extra featured feed query. An empty chart offers built-in starting
modes, clearly separate from community stats.

Since your last visit compares a device-local, account-scoped baseline with the
already fetched unplayed challenges and one private discovery-activity document.
The server increments other-player plays and first votes transactionally, sharing
receipt/vote deduplication with the existing functions. Own activity, repeated
votes, direction changes, and retries do not produce new-vote notifications.
The first visit establishes a baseline; later visits/Refresh show the differences.
Optional summary failures never block matches. No historical activity is fabricated.

`npm run verify:match-options` covers configuration focus, conflicts/Undo, formats,
lazy loading, and explicit device-to-account copies. Home tests also cover the
featured daily, direct preset play, account menu, and returning-player summary.

The usability follow-up was built and checked on 2026-09-12. The three mode
functions, rules (including private activity), and indexes deployed successfully
to `wordplaying-5eec3`. The updated client is ready for the normal app release.

See [Player engagement and submission](player-engagement.md) for explicit result
submission, successful-defense updates, and playable opponent profiles.

See [Daily community seasons](daily-community-seasons.md) for daily rotation, weekly retirement, saved-mode preservation, and recap statistics.
