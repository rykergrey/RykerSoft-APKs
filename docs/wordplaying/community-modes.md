# Community Modes

The match-over screen offers an upvote and downvote for the complete gameplay
configuration in solo, live, Pass & Play, and completed One Word Showdown matches.
Every option opens a description. Both votes publish a discovery; one account has
one changeable vote per mode. The first upvoter reserves naming rights, including
when another player discovered the mode with a downvote. Names are permanent;
downvoting never grants naming rights. Existing device-saved modes remain intact.

Match Options includes paginated Highest rated (upvotes minus downvotes) and
Latest discoveries views. Choosing a mode loads its gameplay options with a fresh
seed. Assembling an existing combination opens its profile once per settings
session and leaves a compact notice with the discovery credit and vote totals.
Profiles show paginated public voters, scores, longest words, best words, play
counts, total words, and total points.

The home screen has a dedicated **Modes** directory, open without an accordion.
Its Community, Upvoted, Saved, and named-list views reuse the same library as Match
Options. Players can open records, expand any option, save a mode, or choose
**Set up match** to review its options before starting. **Create mode** opens Match
Options. Community sorting includes latest discoveries, all-time net rating,
top 10 most played ever, top 10 most played this week, and top 10 by net votes
this week. Positive chart scores only are included in weekly rating charts.

Weekly charts use Monday–Sunday in America/Los_Angeles, including DST. A vote
counts in the week it is first cast or changes direction; retries and naming do
not count as fresh votes. A player's direction changes within a week replace
their earlier vote in that week's totals. Older weeks retain their historical
votes. Play charts include both verified and local recorded matches; profiles
continue to distinguish the two score-record lanes.

Signed-in players can save any combination privately before playing or voting.
The Upvoted filter automatically contains their positive votes; Saved contains
their bookmarks. A mode can belong to multiple named custom match lists. Players
can create, rename, and delete lists, and add/remove modes without affecting votes.
Deleting a list keeps its modes saved; removing a save clears its list memberships
but retains the vote. Up to 50 named lists are supported per account. The Match
Options footer and mode profiles/results all provide **Save / lists**. Existing
device saves remain available; load one and use **Save / lists** to sync its options.

Identity is a versioned SHA-256 hash of normalized board size, starting duration,
sorted unique modifiers, solo/local/showdown/live format, and Showdown round count.
Standard is equivalent to no modifiers. Seeds, legacy player counts (the roster
is discovered during play), daily/challenge IDs, deadlines, and audio preferences
are excluded. The sound setting is still visible on the result card.

## Storage and validation

- `communityModes/{hash}` holds discovery metadata, naming ownership, and vote totals.
- `communityModes/{hash}/votes/{uid}` holds each public vote and player name.
- `communityModeStats/{hash}` holds permanent `verified` and `local` records.
- `communityModes/{hash}.playCount` provides indexed all-time play sorting.
- `communityModeStats/{hash}` also holds the current `weekKey` and `weekPlays`.
- `communityModeWeeks/{Monday}/modes/{hash}` holds public weekly plays and vote
  totals, written in the same transactions as the underlying results/votes.
  Unvoted configurations have no public chart entry. Charts read at most 10 rows
  plus one bounded profile query; they never scan play receipts or votes.
- `communityModePlays/{receipt}` privately deduplicates player/match submissions.
- `communityModeLimits/{uid}` limits recording to 250 new results per UTC day.
- `communityModeLibraries/{uid}` holds private list names and creation dates.
- `communityModeLibraries/{uid}/modes/{hash}` holds reusable options, saved status,
  list memberships, and a transactionally maintained copy of the player's vote.

`recordCommunityModePlay` reads sealed/submitted competitive attempts or finished
live results directly from server-owned documents. Local results are explicitly
device-reported and never mix with validated records. A recorded-play receipt is
required by `voteCommunityMode`; transactions prevent duplicate votes and naming
races. Client writes to these collections are denied. Players need a registered
account and a public player name to record results or vote.

Recording starts on the completed-result screen, including before discovery, so
the discovery match contributes to its profile. Subsequent recorded matches keep
updating stats without needing another vote. Guests and legacy clients do not
contribute records. No historical backfill is performed. Local Pass & Play uses
the highest-scoring player's result, and Showdown uses the highest-scoring turn;
both are attributed to the signed-in device owner. Changing votes does not change
records. Loading a mode never imports private or expired attempt metadata.

## Efficient private preferences

`updateCommunityModeLibrary` handles saves and list edits with authenticated,
owner-scoped transactions. It never accepts a target user ID. Firestore rules
permit only the owner to read their library and prohibit all direct client writes.
Public vote changes update the private vote index in the same transaction, merging
with rather than replacing saves and list memberships. Repeated identical saves,
votes, list creations, renames, and deletions avoid redundant writes. Incremental
membership edits preserve concurrent additions from another device.

Private mode views query 12 entries at a time using the `saved + savedAt`,
`vote + votedAt`, and `listIds + savedAt` indexes. A single bounded public-profile
query gets current community names/ratings for the page. Public browsing never
loads every player's vote, and it does not fetch per-mode save preferences until
the save dialog opens. Only bounded list metadata has a live subscription, active
while its UI is open; library pages refresh on filters, local mutations, or Refresh.
Sort/filter preferences stay in per-account device storage, with no server write
on every click. Group deletion updates one metadata document, retains saved modes,
and prunes obsolete membership IDs on the next mode edit.

## Validation and rollout

```sh
npm run verify:community-modes
npm run verify:mode-library
npm run verify:home
npm run test:community-modes # local demo Firestore emulator; Java 21+
npm run test:firestore-rules
npm run typecheck
npm --prefix functions run lint
npm run build
```

Deploy the three callable functions, Firestore rules, and indexes before releasing the client:

```sh
npx firebase deploy --only functions:recordCommunityModePlay,functions:voteCommunityMode,functions:updateCommunityModeLibrary,firestore:rules,firestore:indexes --project wordplaying-5eec3
```

The three functions, rules, and indexes were deployed to `wordplaying-5eec3` on
2026-09-12 using the application's existing Firebase CLI account. All three
functions were verified ACTIVE, all three library indexes reached READY, and the
endpoints correctly rejected unauthenticated requests. No existing indexes were
removed. Public discovery data and private library data begin with
this release; there are no historical public votes to migrate. Device saves are
not uploaded automatically. Client distribution remains the application's normal
web/Android/desktop release step.

## Unified library and discovery activity

Saved contains account modes and a labeled On this device section. Device saves
retain image import, sharing, and removal. Save to account opens the normal list
picker and offers an optional private name (1–40 characters, or empty to clear).
`privateName` lives only on the owner-readable library entry; public naming still
requires the first upvote. Loading any reusable setup strips previous seeds and
ranked attempt identifiers, while preserving the current audio preference.

`communityModeActivity/{uid}` is owner-readable and server-write-only. Recording a
new play of an already discovered mode increments the original discoverer's
`plays` when the actor differs. A player's first vote on that mode increments
`voters`; repeated votes, vote flips, and naming edits do not. These increments
are in the existing transactions, so delivery retries cannot duplicate activity.
Home reads one document and keeps its visit baseline locally per account. No new
index or activity listener is necessary, and counters begin at this rollout.
