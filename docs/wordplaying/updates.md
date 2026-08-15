# Updates

## v1.3.0

### Word Grid & Trusted Live Play

- Added Word Grid, a new modifier where players tap two tiles to swap them and build as many valid straight horizontal and vertical words as possible before time expires
- Word Grid replaces swipe-to-submit play with a rewarding top-left-to-bottom-right results sequence that reveals and scores each completed word with length-aware sounds and effects
- Word Grid supports Letter Boost, Letter Values, and Color Bonus scoring while excluding movement, path, and live-match modifiers that conflict with tile arranging
- Rebuilt Live Match as a trusted Firebase v2 flow: callable functions now own room creation, joining, configuration, readiness, starts, word claims, finalization, rematches, and departures
- Live rounds use a deterministic board fingerprint and a server deadline; every submitted word, tile path, dictionary entry, score, and First Claim result is validated on the server
- Live results, winners, presence, and room expiry are server-owned, and every participant must use a registered account with a reserved public player name
- Rebuilt Daily Boards and community competition as an isolated trusted V2 flow: the server reserves boards before reveal, enforces deadlines and expiry, recalculates paths or final Word Grid arrangements, writes immutable rankings, and creates challenge/series summaries without trusting client scores or names
- Compatible signed-in solo rounds can be transparently reserved as publishable drafts; offline/local fallback remains playable but cannot be posted after its board has been revealed
- Public player-name rules now reject reserved/service and obvious abusive variants, preserve case-insensitive uniqueness, and make client-side renaming unavailable so abandoned reservations cannot be reassigned
- Retired the legacy Colyseus/VPS path and Android cleartext and mixed-content allowances; maintained remote traffic now uses secure Firebase and dictionary HTTPS endpoints

## v1.2.1 — Reliable Finishes & Safer Accounts

- Fixed a timer-expiry race that could leave Android on the TIME'S UP transition when a letter was selected as the match ended
- Match completion now commits before decorative audio, catches Android Web Audio failures, and includes a watchdog that always advances to results
- Post-match board analysis now yields to the UI and cancels cleanly; the results screen is loaded before it is needed
- Google is now the default account provider, with a migration-only legacy login that links Google without changing the existing Firebase UID or progression ownership
- Public multiplayer identity now uses a separate, user-chosen, case-insensitively reserved player name and never exposes Google or email identity
- The remaining legacy password field starts hidden and includes an accessible in-field show/hide control
- Added the registered Android Firebase app, release SHA-1/SHA-256 fingerprints, and native Capacitor Google authentication bridge

## v1.2.0 — Your Game, Everywhere

- Signed-in Wordbook entries, career totals, personal bests, Daily Mission progress, awards, and tile-theme unlocks now follow the player across devices
- Completed solo, community, Daily Board, and live multiplayer rounds use per-match receipts so progression is recorded only once
- Match Options now focuses on grid size, duration, multiplayer, featured modes, modifiers, and saved modes
- Tile themes, effects volume, haptics, reduced motion, high contrast, and large letters moved into a dedicated Player Settings screen
- Today’s Board and Start New Match now share the primary action row, with Settings beside Login or Logout
- Saved Modes opens expanded, and a contextual Save Mode action appears beside Start Match for non-default setups
- Firestore rules now isolate progression summaries, Wordbook entries, and immutable match receipts to their owning registered account

## v1.1.1 — Fair Play & Competitive Integrity

- Registered accounts are now required before Daily Boards, Daily Missions, and community challenge boards are revealed
- Each competitive board creates an account-bound, write-once Firebase attempt claim before play begins
- The first result is recorded automatically and cannot be replaced by logging out, clearing local data, switching devices, or changing accounts
- Daily and challenge retries remain available as practice, but cannot affect rankings, missions, streaks, or competitive rewards
- Firestore rules reject forged users, duplicate claims, altered Daily configurations, alternate score IDs, and score overwrites
- Daily Mission progress is isolated by account so guest and signed-in progress cannot leak between profiles

## v1.1.0 — Feel, Mastery & Daily Play

- Clear submission feedback for valid, duplicate, short, and invalid words
- Visible tile-selection path, score/time/multiplier callouts, and optional haptics
- Personal bests by ruleset plus accuracy, pace, longest-word, and max-combo results
- Same-board practice retries and high-value missed-word analysis for static boards
- A deterministic Daily Board with a comparable skill leaderboard and practice runs
- Rotating daily goals plus current/best Daily Board streaks
- Career totals, nine achievements, and three unlockable tile themes
- A persistent, searchable Wordbook with collection insights and award progress
- Effects-volume, haptics, reduced-motion, high-contrast, and large-letter preferences
- A guided first-round tutorial, keyboard tile play, live announcements, and accessible dialogs
- Direct challenge links and asynchronous best-of-three series with combined standings
- Tested Firebase rules for guest reads and registered-user writes, plus a trusted weekly-winner job
- Locally compiled Tailwind, lazy-loaded secondary screens, vendor chunks, and deferred dictionary data

## v1.0.0

- First RykerSoft hub release (package `com.rykersoft.wordplaying`)
- Solo Boggle-style play with 4×4 / 5×5 boards, modifiers, presets, and saved configs
- Community challenges, match standings, and per-match word lists
- Local pass & play and Firebase live multiplayer (room codes)
- Weekly seasons / leaderboards and season recap
- Audio Lab synth workstation and word gallery with dictionary lookups
- Signed Android release APK for Application Manager install
