# Home navigation

The home screen centers on choosing the next match:

- **Matches → Challenges** lists unplayed community challenges from this week.
  When there are none, the next unplayed daily appears directly with its Play
  button, option descriptions, and player activity. Daily retains the full checklist.
- **Matches → Daily** shows all five current Daily Boards, even before anyone
  plays them. Each card offers its complete option descriptions, available/used/
  completed status, and player count. Submitted boards display the viewer's score,
  rank, leading score, and expandable full standings. Scores stay hidden until
  the viewer's account has a submitted leaderboard entry for that exact board.
- **Modes** contains the community directory, weekly and all-time top-ten charts,
  latest discoveries, Upvoted, Saved, and named private lists. A mode opens Match
  Options for review before play, retaining audio preference and using a fresh
  board. It never imports ranked attempt IDs.
- **Leaderboards → My standings** holds winning/outranked community matches and
  the weekly recap. **Rankings** offers Today, This week, and per-board scores for
  days in the current week. **Career** retains lifetime rankings.
- **Awards** retains achievements, career progress, and streaks.

The separate Daily Boards modal and footer button are removed. Result-screen
links and Play Again after a daily match return to **Matches → Daily**. Past boards
remain accessible as rankings, with the same submission requirement; they cannot
be replayed. The home screen detects the Pacific date change on a timer and on
returning to the tab, refreshing today's boards automatically.

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

Run `npm run verify:home` for navigation, completion gating, account isolation,
query-shape checks, option popups, chart selection, and mode setup. Chart counters,
retry behavior, week rollover, and write restrictions run against Firestore in
`npm run test:community-modes`.

The updated `recordCommunityModePlay` and `voteCommunityMode` functions and chart
rules were deployed to `wordplaying-5eec3` on 2026-09-12; both functions were verified
ACTIVE and the daily submission lookup index reached READY.
The public weekly chart query was checked in the real browser. Production had
zero public modes at rollout, so existing chart data did not need migration.
The client was built and checked at desktop and 360px phone width; distribution follows the application's normal release process.

## Setup and library usability

Create match opens configuration first: Solo, Pass & Play, Showdown, or Live;
then board size, timer, rounds when relevant, and modifiers. Load a mode opens
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

Home puts Sign in / Account by the logo, Log out inside Account, Join live in
Matches, and a single Create match action in the footer. Modes features the first
three actual results from the selected chart above its directory sort control;
there is no extra featured feed query. An empty chart offers built-in starting
modes with setup and immediate play actions, clearly separate from community stats.

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
to `wordplaying-5eec3`. Client downloads are published through the WordPlay.ing v1.3.24 release.
