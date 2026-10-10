# Scramble implementation and release gate

Scramble (the internal Word Builder game) uses `functions/src/builder/engine.ts`
on the client and server. Bungle (internally Hunt)
continues through `services/games/huntAdapter.ts` without changing its engine,
mode identity, saves, competitive collections or weekly cleanup.

The current match-options, custom-mode, board-size, turn-limit, timer and local
roster changes are source changes only. This task has not deployed them. Dated
rollout notes below describe earlier releases.

## Current source

- Match Options begins with game selection. Bungle and Scramble retain separate
  configurations while sharing controls, typography and layout. Choose Solo or
  Multiplayer, then Pass & Play, Online or Vs Raid. Online offers Live and Play
  by turn. Solo has exactly one human player and no AI opponent.
- Small, standard and large board fixtures, 100-tile distribution, blanks, crossing validation,
  stack values, premiums, seven-tile bonus, exchanges and endgame deductions.
- Ten modifiers, 576 legal combinations, deterministic barrier/premium generation,
  simultaneous Falling clears and gravity cascades. Hidden previews redact premiums.
- Dedicated gray-and-orange board with touch navigation, tap selection and
  placement, universal tile swapping, recall, shuffle and exchange selection.
  Pass and resign live in the match menu; local autosave and concealed local
  handoffs remain available.
- Separate dictionary policy requiring successful initialization and accepting
  two-letter Builder words, while preserving Hunt behavior.
- Game-scoped Matches, Modes and ranking queries; turn views; device/account saves,
  archives, voting, Builder PNG version 2, per-ruleset statistics and weekly totals.
- Scramble match cards show the match start date, board/turn/timer options,
  configured modifiers and every player's score. A unique current leader is
  emphasized; tied scores do not imply a winner. Lobbies show their creation date
  until play starts, and legacy online matches fall back to their creation time.
- Independent announcement/tutorial keys, four touch-first panels, swipe
  navigation, focus management, dismissal, and replay from menu Help.

## Match options and custom modes

Scramble offers 11×11, 15×15 and 19×19 boards. The standard board preserves the
existing layout. Every size uses a seven-tile rack and the same shared bag.
Turn limit means **5, 10 or unlimited turns per player**. The separate turn timer
offers **30 seconds, 1 minute, 2 minutes or unlimited time**. A pass, exchange or
expired turn consumes a turn. Players who have used their allocation are skipped;
the match ends when every remaining player reaches the cap, with normal endgame
scoring. Other end conditions can still finish the match earlier.

The shared compact selectors cycle to the next choice on a short tap. Hold for
about 400 ms, or drag vertically, to open the choices. A drag opens toward the
finger when space permits; release over an option to select it. The popup stays
within the viewport and escapes clipped or transformed modal containers. Arrow
keys open and navigate the list, Enter/Space select, and Escape or native Back
dismiss the popup before its parent screen. Cancelling a pointer gesture does
not change the setting.

Home → Modes → Scramble contains built-in starting modes, Community discoveries
and Saved modes. Saved includes private account saves and saves on this device;
archived account modes can be restored. Create a mode opens Match Options to
combine the board, format, turn settings and compatible modifiers. Save on device
keeps a local copy; Save to account syncs a private copy; Publish to community
explicitly adds the combination to discovery. Guests can browse published modes
but cannot read another player's account library. Both games use the same mode
card, tab and control components.

Scramble PNG sharing/import preserves the complete validated reusable config,
including board size, turn cap, timer, AI difficulty and local joining behavior.
It excludes racks, seeds and credentials. Import also saves the mode on the
device, so it remains available from the library.

## Pass & Play roster and handoffs

New Pass & Play matches begin with Player 1 and discover the roster during the
first round, up to eight players. After a turn, the confirmation shows the played
word and score and records the player's initials. The device can pass to a new
player or return to Player 1. On a proposed return, the receiving player either
acknowledges Player 1 or joins as another new player; acknowledging Player 1 closes
enrollment and starts normal rotation. Racks stay concealed during confirmations
and handoffs. The next player's timer starts when that player accepts the device,
so passing the device does not consume their time.

Clash Pass & Play chooses a fixed roster of two to four players before the match.
Its handoff hides each submitted plan and the next player's rack until they
accept the device.

`localPlayerJoining: true` distinguishes this flow from existing fixed-roster
matches. The reusable mode retains one starting player while the saved match
state stores the actual roster, initials and handoff progress. Old fixed-player
matches continue with their original roster. Missing `boardSize` means 15×15;
missing `turnLimit` means unlimited. Default board/turn values preserve existing
mode IDs, and old supported online deadlines remain loadable.

## Letter and score rules

Each match starts with one shuffled 100-tile English bag, including two zero-point
blanks. All players draw seven tiles from that same bag. A play draws only enough
tiles to refill its rack; an exchange draws before the returned tiles are shuffled
back into the bag, and requires at least seven tiles in the bag. Bag, racks and
board retain unique physical tile IDs throughout the match. Local matches use a
cryptographic seed, and the server creates its own seed for online matches; the
seeded shuffle makes subsequent actions replayable.

Classic placements use face values, one-time letter and word premiums, full
credit for each newly formed crossword, and a 50-point bonus for playing seven
tiles. Blanks retain zero points after choosing a letter. When the bag is empty,
playing out applies rack deductions and awards the opponents' remaining tile
values to the player who went out. Six consecutive zero-score turns, including
passes, exchanges and zero-point plays, also end the match. Stacking and Falling
Tiles intentionally add their own scoring and board behavior.

Lasting Bonuses (`lasting`) makes all four premium types reusable: each newly
scored word applies premiums beneath every contributing tile, including letters
already on the board. Letter bonuses multiply the full stack. A lasting premium
colors the tile's bold point value after coverage, with the bonus type keyed by the four initialed color swatches above the board; hidden premiums
remain concealed until covered. Falling Tiles continues to refresh bonuses after
each clear. This modifier changes scoring and has its own mode identity.

Free Placement (`free-placement`) allows up to seven tiles anywhere on the board
in a turn. Separate valid words all score, and isolated letters can be left as a
zero-point setup. It works with Stacking. Falling Tiles remains incompatible.

## Clash rounds

Clash (`clash`) is available in Vs Raid, fixed-roster Pass & Play, Live and Play
by turn. Every participant plans against the same committed board. Submit locks
the plan privately and advances to the next participant without changing the
public board or drawing replacement tiles. Public state shows only which players
have locked in. A pass or exchange also occupies a slot in the round.

Once everyone has acted, matching square placements battle by tile value. Equal
values use the match's seeded random state. Separate placements that compete
over one existing word battle by the total value of their contributed tiles plus
two points of strength per tile, so adding more letters provides an advantage.
An invalid word created by combining otherwise legal plans also triggers a word
battle. Only losing tiles in the contested word are removed; unrelated letters
survive. Losing tiles stay in their owner's rack. Every surviving word scores for
the player whose tiles changed it, then racks refill and the next round begins.
The public reveal preserves every submitted word, its letter contributions and
its score before the clash, including words whose tiles lose. Returning players
read opponents' words first, count the letters one at a time, then compare all
submitted scores before the battles. Each winner stays visible before losing
tiles fall away; the recap distinguishes submitted scores from actual round
points. Player colors stay consistent in the word comparison and tile battles,
with names and You/Opponent labels alongside color. Settled board tiles keep
their normal backgrounds. Only opponents’ letters added since your last turn
use your chosen accent, across every opponent who played. Your next accepted
turn clears those highlights; simply reopening the match does not.
The reveal can be paused and pauses automatically while the match is hidden.
Show result returns to the settled board early. Explicit online match clocks
continue during playback; those reveals display a reminder alongside this control.
Reduced motion retains the reading sequence without spatial animation. The board
and match scores settle after the full reveal. Clash can combine with Free
Placement or Stacking; Falling Tiles remains incompatible.

Strict (`strict`) conceals the draft word, score, and dictionary-validity preview.
Players can submit any structurally legal placement. If any submitted word is
missing from the dictionary, the board and rack stay unchanged, the player scores
zero, and the turn passes. The result announces the invalid submission after
commit. Strict also applies to Free Placement, Falling Tiles, and Clash plans.

## Board interactions

With no tile selected, a quick board tap toggles between the complete board and
a 2.8× close-up. Dragging pans the board; pinching or the mouse wheel adjusts
the zoom continuously from 1× to 4×. Navigation uses the board itself, with no zoom or fit buttons.

Tapping a rack tile selects it. Tapping an available board cell places the
selected tile, at either zoom level. Selecting a blank opens its letter chooser;
there is no persistent blank-letter field. A selected blank has a contextual
Change action, including after placement. Selecting a tile and tapping another
tile swaps their positions, within the rack, between rack and draft, or between
two draft tiles. Every drafted letter stays in the tray with a dashed border and
board marker; tapping its tray copy recalls it immediately. Dragging any rack
letter, or using Shift+Left/Right, rearranges the full tray without moving the
board drafts. Shuffle also includes drafted letters. Drafts are outlined ghost
copies; only Submit commits them. Committed tiles are not rearrangeable. A selected draft tile can
move to another available cell, or be tapped again to return it to the rack.
Rack order is independent of the order in which tiles are played. Zoom and the
order of remaining rack tiles survive a turn; local handoffs still conceal racks.

Exchange is a toggle: entering returns draft tiles to the rack. Select one or more rack tiles,
then tap Exchange again to submit the trade. Exiting without a selection cancels
the operation. Shuffle remains next to the rack; Pass and Resign are secondary
actions in the three-dot menu. Coordinate selectors, directional keyboard
controls and a separate Drop action are absent from the touch interface.

Undo and Redo sit side by side below the rack. Each placement, move, recall,
swap, blank assignment, shuffle, or exchange selection/preparation change is a
single history step. Returning every draft tile on entry to Exchange is one
reversible step. Undo restores both board positions and exact rack order; Redo
restores the saved result without rerunning a shuffle. Navigation and transient
letter selection do not add history steps. A new edit after Undo replaces the
redo branch. Failed submissions keep history. Successful Submit, exchange,
pass, resignation or Falling submission, and authoritative turn changes clear both
stacks. History cannot change while a submission is pending.

The word and score preview appears above the board; the main action is Submit.
Enabled modifiers appear in a horizontally scrollable strip. Each opens an
explanation with the configured barrier count or stack height when relevant.

Falling Tiles stages one to seven drops in order. Tapping a column places the
selected letter at its landing square without ending the turn. Players may keep
building, recall, move, swap, undo or redo their staged letters, then tap Submit.
The preview evaluates the whole staged sequence; valid runs of three or more
clear together only after submission. The server accepts both the original
single-drop action and the multi-drop action for older clients. Tile moves use
screen-space travel animations, and a drop tapped above its landing square
travels through the tapped square with a brief light trail. Local pass-and-play
shows a short turn-complete transition before the concealed next-player screen.

## Authoritative online state

Deploy the updated backend before releasing this client. Updated clients send
protocol version 7 and can resume versions 1 through 7. Matches with legacy-compatible
15×15 boards, unlimited turn counts and legacy timers retain version 1; new
board sizes, turn caps and timers require version 2. Lasting Bonuses requires
version 3, Free Placement version 4, Clash version 5, Strict version 6, and Bungle Finale version 7. Older clients can leave or
resign after a lobby upgrade, but cannot ready, start or play unsupported rules.
Changing lobby rules clears readiness. Engine rules versions and existing mode
identities remain unchanged.

All online data is under `games/word-builder`. A match document contains the
participant-visible projection. `racks/{uid}` is owner-readable. `private/state`
is server-only and holds racks, bag order, random state and concealed premiums.
Turn logs and private request receipts are append-only. Each action transaction
checks identity, membership, turn, revision and deadline before applying the
shared engine. Request retries return the committed receipt. The expiry worker
passes missed turns and forfeits a player on the second successive personal miss.

Result submission is automatic when an online match finishes and transactional:
it writes a verified result, seasonal rankings, community records and permanent career statistics.
The timeout worker retries unfinished result recording every minute, and the
30-day cleanup finalizes any remaining result before deleting match details.
Players can also retry from the finished match. Negative scores are retained. A weekly
profile total is separate from Hunt. Completed details are recursively removed
after 30 days; active asynchronous games have no weekly expiry. At cleanup, the
result is reduced to a scoreless receipt so retries cannot count career totals
twice. The current season's rankings are shown; the previous season is retained
briefly for recap, then older ranking rows are pruned.

Builder rankings use a mode identity that includes format, player setup, board
size, turn cap, turn timer and modifiers. The leaderboard exposes those settings
so each current-season verified online score can be found in its comparable ruleset. Scramble
Solo and local scores remain on the device and do not enter verified online
rankings. Bungle Solo remains eligible for its existing leaderboards; Solo is not
labelled as practice in either game's interface. Hunt's existing
`leaderboardV2`, `competitiveUsersV2` and weekly winner records remain Hunt-only.

## Verification

- `npm run verify:builder`: engine and real bundled dictionary checks, including
  finite-bag inventory, all board sizes, per-player caps, legacy defaults,
  dynamic local roster behavior and six scoreless-turn ending.
- `npm run verify:builder-ui`: settings preservation, clocks, compatibility,
  tutorial tracking, handoff privacy and local resume. The expanded touch suite
  also covers every rack/draft swap direction, blank editing and swaps, invalid
  cells and stacks, exchange cancellation/retry, failed submissions, direct
  Falling placement, turn transitions and camera/rack persistence. Pointer
  tests cover tap zoom, drag suppression, wheel, pinch, cancellation and resize.
  Undo/redo checks cover sequential edits, exact shuffle replay, atomic swaps,
  blank assignments, exchange preparation/cancellation, new branches, failed and
  pending submissions, commit boundaries, turn resets and modifier explanations.
- `npm run test:builder`: Firestore emulator lifecycle, concurrency, duplicate and
  stale requests, rack/private-state rules, timeout races, forfeits, retention,
  result idempotency, voting and community records. The chain also runs custom-mode
  handler tests covering private saves, explicit publication, config round-trips,
  archive/restore and old-client behavior; rules tests cover guest discovery and
  account-library isolation.
- `npm run verify:builder-modes`: reusable config round-trips, device deduplication,
  account/private/public saves, guest discovery, account changes and archives.
- `npm run verify:builder-pass-play`: player enrollment, confirmation and initials,
  private handoffs and resumed turns, roster locking, timer races and stale AI replies.
- `npm run verify:cycle-option`: tap-to-open choices, native scrolling, cancellation,
  keyboard selection, modal focus/Escape, native Back, viewport placement and cleanup.
- `npm run verify:mode-library`, `npm run verify:home` and
  `npm run verify:match-options` cover shared mode controls and cross-game navigation.
- Run frontend/backend TypeScript checks, the backend build and Vite production
  build alongside the relevant suites. Existing Firestore permission, Hunt live,
  competitive, player discovery, community-mode and season emulator suites remain
  available. Use isolated emulator projects for
  independent suites: the competitive suite assumes an initially empty challenge
  collection, whereas the security suite intentionally seeds one.
- Earlier touch-overhaul browser checks covered 320×568, 390×667, 390×844, 844×390
  landscape and 1280×900 desktop layouts; four-player score layout; 2.8× tap
  zoom, drag panning, wheel zoom, blank picker, placement, real dictionary
  preview, submission, refill and zoom persistence. Pinch was covered by
  synthetic pointer tests, not by a physical device.
- That earlier overhaul passed frontend TypeScript, Builder UI, Builder engine,
  Word Hunt verification and the Vite production build. The local development
  fixture is `/scripts/builder-preview.html` (`?players=4`, `?falling`, or
  `?empty` or `?modifiers` provide additional layouts). It uses the actual board and engine
  without writing saved matches.
- Earlier release validation included Android debug APK assembly and Linux
  Electron unpacked packaging. These do not imply a build or deployment of the
  current source changes.

Current browser checks cover compact selectors at 320px and 390px, keyboard and
drag selection, both new board dimensions, and eight-player score layouts. Use
`/scripts/match-options-preview.html` to explore setup controls, and
`/scripts/builder-pass-play-preview.html?phase=result` for an interactive turn
confirmation and handoff fixture. The latter writes only a dedicated local
preview match. `phase=initial`, `phase=receive` and `phase=new` provide the other
handoff entry points. The board fixture also accepts `?size=11`, `?size=19` and
`?players=8`.

Java 21 is available at `/home/ryker/.local/share/mise/installs/java/21.0.2`.
The shell defaults to Java 17; prepend Java 21's `bin` to PATH for Firestore tests.

## Historical production rollout

Additive Builder rules, indexes and 13 functions were deployed to
`wordplaying-5eec3` on 2026-09-23. The result-retry index and all 13 updated
Builder functions were deployed on 2026-09-24. No Hunt function was selected.

New online matches require `games/word-builder/settings/release.allowNewMatches`
to be `true`. Absence defaults to disabled. This check applies only to creation,
so existing matches can finish. Clients enable Builder by default starting with
1.3.32; `VITE_WORD_BUILDER_ENABLED=false` is an explicit build opt-out.
Existing saves and online matches can resume when creation is disabled.

**Remaining release acceptance:** real-device Android quick-tap zoom, pan, pinch,
selection, tile swapping and exchange; native desktop pointer and mouse-wheel
input; and two-device live/asynchronous gameplay checks, including an actual
disconnected/reconnected client session. Verify the rack stays reachable on
small screens and that dragging or pinching never places a selected tile by
accident. No Android device or AVD was available during the original
implementation. Native packaging and emulator protocol tests are not substitutes
for these checks. Windows/macOS packaging was not run.
The backend and index were verified ready for the 1.3.30 build. Real-device
acceptance remains outstanding as of 2026-09-24.


## Multiplayer recovery (1.3.32)

The reported creation error was traced to a missing production release document,
which intentionally fails closed. A production rollout must create/verify
`games/word-builder/settings/release.allowNewMatches = true` after deploying the
Builder backend. Keep that switch for temporary maintenance; do not remove the
server-side check.

Creation accepts an optional idempotency request ID (old clients remain valid).
A retry resolves to the same owner-scoped match, including after creation is
paused. New invitations use an 80-bit, case-insensitive `WB-` code. Readiness
survives arrivals, can be undone, and is cleared when rules change. Leaving a
lobby transfers hosting to the next player or closes the empty lobby.

Board and private-rack listeners publish only matching revisions. Cached or
incomplete snapshots lock online submissions without discarding the displayed
board or draft. Firestore reconnects automatically; terminal listener errors
have explicit recovery. Failed actions reject back to the board, preserving
placements and undo/redo history. Successful calls keep input locked until the
accepted revision arrives. Retries reuse the turn receipt ID. A player's own
rack remains visible, read-only, during other players' turns.

The client shows live/async time remaining; the server owns deadlines and the
minute expiry worker advances missed turns. Device clock differences can affect
the displayed countdown but cannot extend a server turn. Closing the screen
preserves confirmed online turns, not an unsubmitted draft.

Verification added: `npm run verify:builder-online-ui` checks the complete
session boundary (Strict Mode creation, failed action propagation, draft/history
preservation, retry IDs, sync locks and account changes). `npm run test:builder`
now covers 2–4 players in both online formats, lobby lifecycle, and a real
Firestore SDK client with split snapshot delivery, network disabled, server
updates while disconnected, and reconnect catch-up. Real two-phone testing is
still separate from these automated checks.

Deployment verification on 2026-09-24: all 11 online Builder endpoints/workers
were deployed successfully and reported ACTIVE. The production callable was
reachable and rejected unauthenticated access. The missing release setting was
created and read back as `allowNewMatches: true` at 19:28:23 UTC. Three existing
Builder mode endpoints and all Hunt functions were left on their prior versions.
The Android 1.3.32 release (version code 38) was built; its signing certificate
matches 1.3.31 and its bundled assets match the Vite production output. No Android
device was connected for installation or physical gameplay testing.

### Opponent move playback

Live and returning online viewers see unseen opponent turns in order. Letters arrive
one at a time with a short lift, bounce, and glow; play controls wait for the reveal.
The device records completion per account and match, so reopening does not repeat
seen moves and leaving during a reveal preserves the unfinished move. Hidden tabs
pause playback, and reduced-motion preferences present the completed board immediately.

New turn records include public placement and board-change data for blanks, stacking,
and Falling Tiles (including letters cleared by cascades). Private racks, drawn tiles,
and unrevealed premium values remain excluded. Revision gaps load the existing
participant-only turn history; legacy records fall back to board differences or the
last available word. Deploy both the client and builder Cloud Functions to record
complete replay data for new turns.

Run `npm run verify:builder-replay` for deterministic playback checks, alongside
`npm run verify:builder-online-ui` and `npm run test:builder` for integration coverage.

## Bungle Finale modifier

`bungle-finale` adds a second phase to Solo, Vs Raid, Pass & Play, Live and Play
by turn. A normal building end (played-out, six scoreless turns, turn limit or
no legal Falling drop) applies the normal rack adjustment once, then freezes the
exact board and starts phase 2 with the next remaining player. Resignation that
ends the match skips the finale. No new players join during phase 2.

Players select one dictionary word of at least three letters per turn through
adjacent occupied squares, including diagonals. A square can appear only once in
a word, and a word can be claimed only once across all players, even along a
different path. Words played during building are eligible. Empty squares and
barriers cannot be traversed. Stacks contribute only their top letter, blanks
keep their assigned letter, and physical Q stays Q (it does not become Qu).

Bungle length scoring is tracked separately, then added to the adjusted Scramble scores when phase 2 ends: 3–4 letters earn
1 point, 5 earn 2, 6 earn 3, 7 earn 5, and 8+ earn 11. Tile values, premiums and
stack values no longer affect scoring. Each player gets **10 turns** in phase 2,
independently of the build turn cap. A word, pass or invalid Strict submission
uses one turn. Players who use all ten turns are skipped. Phase 2 ends when
everyone uses their turns, or every remaining player passes consecutively; a
successful claim resets the pass sequence. **Phase 2 never has a timer**, even
when the building phase uses an explicitly selected timer. Old persisted local
or online deadlines cannot consume phase-two turns or cause missed-turn forfeits. Strict hides word
and validity previews and makes an invalid dictionary submission consume a turn
and count as a pass. Clash finishes its building reveal before the finale uses
ordinary sequential turns. Falling leaves its remaining board for the hunt.

The finale screen supports tap/keyboard selection, undo, clear, zoom/pan, claim
history, separate build/hunt scores, remaining-turn counts, pass, resign, and saved-game resume. Raid
searches adjacent paths and avoids claimed words. Online matches stay active
until phase 2 finishes; only then are Bungle points added to Scramble scores and combined results finalized and ranked.

This modifier requires Builder protocol 7. Older rules continue using their
existing protocols. Deploy the updated client and Builder Cloud Functions
together before offering it online; these source changes do not deploy them.

Verification: `npm run verify:builder`, `npm run verify:builder-ui`,
`npm run verify:builder-online-ui`, `npm run verify:ai`, and
`npm run test:builder-finale`. Use the Java 21 PATH noted above for the emulator.
`/scripts/finale-preview.html` is an interactive fixture using the real rules
and component without writing saved games.

## Waiting for a turn

Scramble defaults to unlimited turns and no timer. A per-player cap or timer
applies only when explicitly chosen in Game options. A waiting online player
can ping the current player after five minutes. Pings share a ten-minute
cooldown across waiting players, appear in the current player’s notifications,
and use push delivery when enabled. A ping never advances, skips, or forfeits
a turn. Bungle Finale remains untimed and uses its own ten turns per player.
