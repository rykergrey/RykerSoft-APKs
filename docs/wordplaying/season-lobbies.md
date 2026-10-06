# Public weekly multiplayer lobbies

Creating an online Bungle or Scramble match creates an independent public lobby.
Players can keep several setups at once. Signed-in players (including the app’s
anonymous Firebase session) can discover waiting lobbies in Home → Matches,
inspect all options and modifier descriptions, and join available seats. Lobby
membership, private racks, game results, and claims keep their existing access
restrictions; only waiting-room documents have public authenticated reads.

New lobbies carry an immutable `seasonEndsAt`: the next Monday at midnight in
America/Los_Angeles, using the existing season calendar including DST. Joining,
editing, readying, leaving, and restarting play do not move that deadline.
The home subscription removes expired rooms even if the screen stays open;
server operations also reject expired rooms independently of client clocks.
Scheduled cleanup eventually removes expired waiting-room records. Active games
retain their existing completion and result-retention behavior.

Starting a game atomically creates one fresh waiting lobby with the same settings,
host, and original season deadline. The host starts unready in that room. The
started game keeps its own ID, scores, and results; its `nextLobbyId` points to the
waiting room. Retrying start cannot create a duplicate. This keeps each setup
available during and after play. A Bungle rematch moves both consenting players
into that waiting room when seats are available, without deleting the prior
result. If another player has filled it, the server asks players to open Matches
or create a separate lobby.

Going home from a Bungle lobby retains the player's seat and clears their readiness.
Explicitly leaving frees the seat and transfers hosting to a remaining player;
an empty lobby stays available and its next joiner becomes host. Offline Bungle
members retain their seats; stale readiness is cleared instead of kicking them.
A server transaction prevents the same player starting two live Bungle games.

Both games let the host edit the waiting-room setup. Scramble uses an explicit
Save settings action and checks the revision the host edited. Settings changes
clear every ready vote. Bungle ready votes acknowledge `configHash`; Scramble
votes acknowledge the match revision, so an unseen settings change cannot race
a ready vote. Bungle clients predating this change need an updated client to send
the settings acknowledgement when readying in a lobby.

## Release and verification

Deploy the Functions changes, Firestore rules, and the `status` / `seasonEndsAt`
composite indexes together before releasing clients. No production deployment is
performed by the development tests. Existing waiting rooms without a
`seasonEndsAt` derive their deadline from creation time. Scheduled cleanup
migrates their stored expiry or removes them if their season has ended.

- `npm run test:season-lobbies` (Firebase emulator; Java 21 or later)
- `node functions/scripts/verify-live-match-emulator.cjs` inside the emulator
- `npm run verify:builder-online-ui`
- `npm run verify:competitive-time`
- `npm run typecheck` and `npm run build`


The required production functions, rules, and composite indexes were deployed with
version 1.3.52 on 2026-10-05. The isolated emulator suite passed before deployment.
