# Daily community rotation and weekly seasons

The production backend was deployed and verified on 2026-09-15. The matching
client is version 1.3.25 (Android build 31).

## Daily Boards

Every day has five ranked slots: the usual 4×4, 120-second Classic and four
community selections. The server selects solo configurations supported by trusted
scoring, preserving their grid, duration, and complete modifier combination.
Classic already has its own slot. Multiplayer, unsupported durations/modifiers,
and incompatible combinations are excluded rather than converted.

Selections use a deterministic date-and-mode hash. Four distinct modes are used
when available. A smaller pool repeats its modes on different seeded boards; an
empty eligible pool retains the five built-in daily boards. A growing community
therefore increases variety without changing the five-attempt daily structure.

`dailyBoardSets/{Pacific date}` freezes the first lineup for the day. The menu,
rankings, opponent profiles, and trusted attempt startup use the same definition.
Votes, retirement, and new discoveries cannot alter a frozen board. Historical
snapshots remain readable through the callable. Days predating snapshots retain
their original built-in definitions. If a legacy attempt already exists when
this version first runs, that day's original lineup is preserved through midnight.
Classic’s legacy date-only link and current link share one attempt, enforced
transactionally in either direction. The new rotation starts the following day. Old clients must update to see and
start the four new community slots; Classic remains compatible.

The client shows a loading/error state with retry if the lineup cannot load,
rather than presenting generated replacements as ranked boards.

## Weekly community review

Monday at 00:00 America/Los_Angeles, modes with cumulative upvotes minus downvotes
of **zero or less** retire. This applies the requested “only positive scores
remain” rule, including ties. Weekly charts remain separate from cumulative votes.
Modes first discovered in the new week get that week to collect votes.

`finalizeWeeklyCommunityModes` performs an idempotent paginated sweep. Every vote
and new recorded play also checks the boundary within its transaction. Daily
lineup creation and recap requests finish any delayed sweep. A new-season vote
cannot rescue a mode whose prior-season total failed the threshold.

Retired public profiles move to `archivedCommunityModes/{id}` with a retirement
season and immutable configuration. The active directory/charts and public player
mode discovery exclude them. Private saved entries, private names, list memberships,
recorded statistics, and gameplay options remain intact. Saved configurations
still start fresh games. Voting is closed and the same identity cannot silently
republish itself. Archives permit exact-document reads, not directory scans or
client writes; clients cannot access internal daily snapshots or season reports.

## Weekly recap

The first menu visit after rollover shows the previous season, including users
who submitted no matches. It contains paginated lists of modes added during the
season and modes retired at rollover, with names, full options, and retirement
vote totals. Events are server-owned under `communitySeasons/{week}/added|removed`.
Existing modes created in the previous week are included during the first review;
older historical additions are not fabricated.

Personal totals come only from submitted `leaderboardV2` rows. Best Word and
Longest Word read the owner's private submitted word lists. Public score rows
remain redacted, and no opponent word lists are fetched. Word counts are now
visible. Favorite Mode distinguishes duration and each modifier combination;
Top Rival counts submitted opponents by UID on shared boards. Existing one-week
recap retention remains in effect; missing older word details are disclosed.
Failed history/report reads never become an empty recap or mark it seen.
Acknowledgments are monotonic and use the displayed report's season end.

## Release and verification

Deploy the Firestore rules and indexes, then the functions (including
`getDailyBoardSet`, `getCommunitySeasonChanges`, `finalizeWeeklyCommunityModes`,
and updated voting, recording, attempt, and profile endpoints), and release the
client. The rules, indexes, and eleven affected functions were deployed on 2026-09-15.
Read-only checks confirmed ACTIVE functions, READY indexes, and an enabled
Monday 00:00 Pacific scheduler. No gameplay callable or manual retirement was
invoked during verification; the live Daily Boards smoke test was blocked by
automatic approval review because it can change production data.

Checks: `npm run typecheck`, `npm run build`, `npm --prefix functions test`,
`npm run verify:home`, `npm run verify:season-recap`, `npm run verify:player-engagement`,
`npm run verify:competitive-time`, and the Firestore emulator season/community/
competitive/profile suites. Use separate emulator projects for the season and
profile fixtures: retirement intentionally changes the global status of a mode.
