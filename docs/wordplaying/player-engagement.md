# Player engagement and submission

Match standings use unique accounts with a trusted submitted score for the exact
board. Creator metadata and device-local used-attempt flags cannot create a
standing, including for the unplayed rounds of a published series.

- **Awaiting opponents:** just the player's submitted score.
- **Winning:** at least one opponent submitted, all with lower scores.
- **Tied for lead:** another submission matches the player's top score.
- **Outranked:** an opponent submitted a higher score.

Returning-player updates compare each new opponent submission with the player's
own submitted score. Failed challenges celebrate **Score defended!**, with the
opponent's name and both scores. Ties and higher scores have separate messages.
Events use submission IDs, account IDs, and timestamps, so the latest player
cannot be incorrectly credited for an earlier overtake. Updates apply to submitted
community matches in the active week, including matches the player did not create.
Acknowledgments merge transactionally and never move another device's seen time
backward. Word lists retain their existing submission-based access rules.

## Submission

Daily Boards and community challenges no longer submit automatically. All timed
competitive results are sealed privately at game over, preserving immutable
validated evidence before the short verification deadline. The player then chooses
to submit; sealed evidence may be submitted for up to 24 hours, capped at the
weekly boundary and the board's expiry. Only submission creates a leaderboard row,
career totals, a played-match receipt, and a public played-mode entry. Zero-point
submissions are valid. Attempt reservations still prevent replay if a player leaves
without submitting.

Mode recording rejects sealed-but-unsubmitted competitive attempts. Casual/local
and finished live results have an explicit **Submit result** action before mode
records, play charts, public played modes, or private career progression change.
Live round adjudication and its room scoreboard still finish normally for everyone;
submitting the finished result controls its contribution to discovery statistics.
No historical statistics are deleted or rewritten.

## Profiles

Tapping players from rankings, match standings, activity updates, or community
mode voter/record lists opens **Explore player**; career records and awards remain
in a separate tab. Profiles offer:

- **Matches to play:** current community matches and today's Daily Boards the
  opponent submitted, excluding the viewer's submitted or already-used attempts.
  Each card opens the existing match-start path.
- **Played modes:** reusable options from submitted matches, public vote history,
  and historical trusted career combinations.
- **Upvoted modes:** the player's current positive public votes, including existing
  votes from before this feature.

Mode setup preserves the viewer's sound preference and generates a fresh board.
Private saved setups, aliases, and list memberships are never exposed. Historical
local plays that neither cast a vote nor retained public options cannot be
reconstructed; newly submitted local results appear going forward.

`listPlayerChallenges` pages submitted leaderboard rows 12 at a time and filters
playability using server-owned attempts. `listPlayerModes` pages the server-owned
`playerModes/{uid}/modes` index and public vote facts, with historical career modes
merged by canonical mode ID. The callable response whitelists gameplay options;
private library documents remain owner-readable only. An empty filtered match page
can still offer **Load more** for earlier submissions.

## Validation and rollout

Run `npm run verify:player-engagement`, `npm run verify:home`,
`npm run verify:mode-library`, `npm run typecheck`, `npm --prefix functions test`,
`npm run test:community-modes`, `npm run test:player-engagement`, and `npm run build`.
Firestore emulator checks require Java 21 or newer.

Deploy the following backend functions and the new leaderboard paging index
before distributing the updated client:

```sh
npx firebase deploy --project wordplaying-5eec3 --only functions:sealCompetitiveAttempt,functions:submitCompetitiveAttempt,functions:publishCompetitiveDraft,functions:recordCommunityModePlay,functions:listPlayerModes,functions:listPlayerChallenges,firestore:indexes
```

No rules change or destructive backfill is required. The production functions and required indexes were deployed on 2026-09-15
with the 1.3.25 release. Older clients retain their existing automatic-submission behavior until
updated, but cannot record sealed competitive drafts as mode statistics after the
backend update.
