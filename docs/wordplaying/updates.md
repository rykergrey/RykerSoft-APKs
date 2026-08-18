# Updates

## v1.3.20

Career Leaderboards, Daily Fair-Play Standings & Gravity Integrity

### Public Career Leaderboards & Player Profiles
- Added a **Career** leaderboard scope beside season boards, ranking lifetime high score, longest word, best word score, words found, career score, matches, and weeks at #1
- Tapping a ranked player opens a public career profile with awards, mode records, and modifier bests — using only the chosen player name, never Google or email identity
- Trusted Cloud Functions now write lifetime career totals and per-mode records when a competitive attempt is sealed, so clients cannot forge public career stats

### Daily Board Fair-Play Standings
- Daily Board Hub now shows a Monday–Sunday week strip so you can jump to any board in the current competitive week
- Other players’ names, ranks, and scores stay hidden until you submit that day’s board, so standings cannot spoil an unplayed Daily
- Match word lists remain readable only after you have played the same match

### Gravity Spawn Integrity
- Gravity now assigns replacement-tile IDs exactly once per submitted word, even under React Strict Mode or a second pointer-up during the settle animation
- Gravity timeouts are cleared on new match, retry, and unmount so leftover settle timers cannot skip spawn IDs or lock the board

## v1.3.19 — Immersive Fullscreen Display & Multiplayer Modifier Integrity

### Android Immersive Fullscreen Mode
- Configured Android edge-to-edge system bars controller hiding navigation and status bars with transient swipe gesture support
- Added display cutout short edges mode for full screen expansion across display notches and hole-punch cameras
- Updated application and splash launch window themes to force seamless fullscreen rendering

### Multiplayer Modifier Isolation & Fallback Integrity
- Isolated multiplayer-exclusive modifiers (such as Turf War) with dedicated cleanup on switching to Solo mode
- Cleaned up real-time live match modifiers and multiplayer toggles in Match Settings to prevent invalid state persistences
- Added comprehensive unit and assertion tests ensuring solo modifier normalization and fallback behavior

## v1.3.18 — Turf War Dynamic Territory Replay & Shot Clock Enhancements

### Turf War Post-Game Territory Replay & Stats
- Introduced dynamic, animated territory grid replay on the Game Over screen revealing final tile ownership sequentially with player color bevels
- Added an interactive territory control proportion bar showcasing live percentage breakdown during tally progression
- Upgraded the final territory standings leaderboard with real-time tile tallies and dominance percentages

### Shot Clock & Turn Synchronization
- Synchronized Turf War turn timer directly with the remaining match clock to prevent overrunning the match limit
- Added pulsing critical turn time indicators and an active player-colored shot clock progress bar in the game header
- Enhanced tile depth, active bevel shadows, and active state transitions across standard and multiplayer boards

## v1.3.17 — Swipe Selection Mechanic, Turf War Polish & Competitive Enhancements

### Swipe Tile Selection & Motion Mechanics
- Introduced smooth touch and pointer drag/swipe word selection across the game board for rapid, fluid word formation
- Added responsive haptic feedback and dynamic melody synthesis while swiping across adjacent letter tiles
- Implemented automatic pointer release handling and touch cancellation resilience

### Turf War & Local Multiplayer Polish
- Enhanced Turn-based Local Multiplayer Turf War mode with real-time territory ownership tracking and tile conquest animations
- Added sub-word tile stealing mechanics with dedicated duplicate warning audio chimes
- Streamlined turn transitions, Game Over territory breakdown, and score summary visualizations

### Word Grid & Engine Refinements
- Optimized Word Grid swap interactions and word placement validation
- Enhanced game engine state synchronization and verification test suites

## v1.3.16 — Settings Modal Modifier Controls & UI Layout Streamlining

### Settings & Modifier Controls Polish
- Redesigned the Match Options & Settings modal layout with a streamlined 2-column Grid Size and Duration picker
- Embedded the Modifier Randomizer directly into the Modifiers section header alongside a new quick **"Deselect All"** action button
- Refined the modifier randomizer algorithm to guarantee valid, compatible modifier sets with responsive audio feedback
- Updated the "Bounty Hunter" preset configuration and descriptions

## v1.3.15 — Word Hunt Micro-Animations & Career Progression Integrity

### Gameplay Polish & Visual FX
- Added dynamic `@keyframes bountyPopBurst` particle burst micro-animations for discovered words in Bounty Hunt mode
- Enhanced ticker status chips with real-time score indicators, strike-through styling, and smooth completion transitions

### Progression & Competitive Fairness
- Gated word discovery, length, clean run, and long-word career achievements during pre-filled Bounty Hunt mode to maintain competitive achievement integrity
- Updated Bounty Hunt modifier rules and descriptive documentation

## v1.3.14 — Word Hunt Mode, Daily Board Hub Redesign & Android Back Navigation

### Word Hunt Gameplay Mode & Board Solver
- Introduced **Word Hunt** (Reverse Word Search) mode with deterministic target word discovery and score-ranked bounties
- Enhanced board solver and word validation with real-time target word bounty tracking
- Added parity verification suite for Word Hunt mode in `scripts/verify-word-hunt.ts`

### UI & UX Modernization
- Redesigned **Daily Boards Hub** modal with streamlined challenge cards, intuitive milestone indicators, and adaptive layouts
- Consolidated **Settings** and **Player Settings** into a unified, tabbed settings modal
- Refined **Enabled Modifiers** groupings in Match Options and Multiplayer Lobby for instant modifier visual hierarchy
- Updated selected tile background colors and active letter themes

### Android Platform Navigation
- Integrated native Android hardware/gesture back button handling via `@capacitor/app` with exit confirmation modal

## v1.3.13 — Local Pass & Play UI Polish & Responsive Overlays

### Game Overlay & Local Multiplayer Polish
- Overhauled the Pass & Play turn handover and player ready overlay with responsive font scaling, optimized stat chips, and adaptive vertical padding
- Added scroll container boundaries ensuring all match rules, modifiers, and start action buttons remain accessible across smaller mobile screens and landscape orientations

## v1.3.12 — Word Grid Rapid Swapping & Responsiveness

### Word Grid Gameplay Polish
- Removed the swap animation input lock in Word Grid mode to enable fluid, high-speed consecutive tile swapping without interaction delays
- Enabled active candidate tile highlight feedback during swap animations in Word Grid for instant visual tracking

## v1.3.11 — Daily Board Activity & Standings Resilience

### Daily Board Hub & UI Polish
- Hardened Daily Boards modal rendering with comprehensive type checks and null safety guards across player counts, contender lists, score summaries, and standings leaderboards
- Ensured smooth, error-free display of daily board activities when attempting unplayed or low-traffic daily challenges
- Preserved responsive layout across desktop and mobile layouts during live daily updates

## v1.3.10 — Competitive Config Hash Validation Fix

### Server-Side Competitive Integrity
- Fixed config hash validation in Cloud Functions to accept both raw and canonicalized competitive configurations, resolving intermittent daily board validation failures
- Updated competitive attempt verification to gracefully handle legacy stored attempts with pre-canonicalization config hashes
- Extended parity test suite with raw vs canonical config hash cross-validation assertions

## v1.3.9 — Electron Custom Protocol & Auth Concurrency Hardening

### Desktop & Authentication Modernization
- Migrated Electron production assets from a local HTTP loopback server to a high-performance custom `app://wordplaying` protocol handler
- Hardened Firebase auth initialization with `authStateReady()` and deduplicated anonymous session provisioning concurrency
- Added graceful offline fallback for public player profile retrieval during active user sessions

## v1.3.8 — Match Updates Reliability & Modal Error Boundaries

### Match Updates & Feed Polish
- Filtered out self-activity and unplayed creator challenges from the match updates notifications feed
- Added dedicated React Suspense and ErrorBoundary guards around dynamic modal lazy loads to prevent crash propagation
- Preserved challenge last-viewed timestamps in local storage to prevent duplicate match notification popups
- Extended server-side competitive attempt validation to seamlessly accept daily board identifiers

## v1.3.7 — Daily Boards Hub & Competitive Fair Play

### Daily Boards Hub & Daily Progression
- Added **Daily Boards Hub** modal featuring 5 curated daily challenges every day (Daily Classic, Word Grid Deluxe, Gravity Well, and two rotating modifier setups)
- Progress tracking showing daily board completion count directly on the main menu button
- Standings & score reveal lock: leaderboard ranks remain obscured until the player completes their ranked attempt for the active board
- Server-authoritative daily configuration resolution on Google Cloud Functions ensuring deterministic validation across all daily boards

## v1.3.6 — Modifier Parity & Deterministic Simulation Engine

### Competitive Modifier Parity
- Full client and Cloud Functions server-authoritative parity across all active gameplay modifiers: **Gravity**, **Reroll**, **Full Reroll**, **Hide & Seek**, and **Tap Out**
- Deterministic column-based gravity spawning and board advancement logic ensuring identical score calculations across live matches and competitive community challenges
- Added comprehensive parity verification test suites in `scripts/verify-gravity-parity.ts` and `scripts/verify-modifiers-parity.ts`

## v1.3.5 — Career Progression & Expanded Milestones System

### Expanded Career & Achievement Tracking
- Expanded career statistics tracking across games, letters formed, high-scoring words, long-word feats (7+ and 8+ letters), clean sweeps, modifier mastery, and multiplayer/live matches
- Reorganized the Awards system into 5 distinct categories: Milestones, Skill & Feats, Streaks, Modes & Modifiers, and Multiplayer
- Streamlined progression storage to lightweight cloud summaries and idempotent per-match receipts

## v1.3.4 — Color Bonus Themes & Match Prep Polish

- Enhanced word sorting, searching, and length breakdown chips across collected vocabulary

### Color Bonus Theme Refinements
- Rebuilt bonus color styling (red, blue, yellow) across all four visual tile themes (Classic, Ember, Aurora, Royal) with custom gradient depth, contrast borders, and radiant highlights
- Removed redundant corner badges in favor of full-tile theme-integrated color treatments

### Smooth Match Preparation
- Added an animated preparing-match transition overlay during server board reservations and rule setups to prevent screen flickering or home menu drops

## v1.3.3 — Firebase Production Activation & Scoring Parity

### Firebase Infrastructure & Live Competition
- Activated all 16 Firebase Cloud Functions on Google Cloud (`wordplaying-5eec3`) for server-authoritative scoring, anti-cheat attempt reservations, draft sealing, and community challenge publishing
- Verified live real-time multiplayer room creation, joining, heartbeat, word submission, and round completion
- Automated weekly leaderboard winner finalization and crown distribution to `weekWinnersV2`
- Enforced strict Firestore security rules and composite indexes across all competitive and progression collections

## v1.3.2 — Today's Board Polish & Instant Gameplay

### Today's Board Enhancements
- Renamed primary action button to **Today's Board** for clean, immediate recognition
- Removed "one ranked try" and attempt restriction labels for a frictionless experience
- Removed the onboarding tutorial wizard from the daily board function so players launch directly into the active game
- Added robust local/offline fallback to ensure Today's Board always starts instantly without `internal` popups or connection delays

## v1.3.1 — Match Options Redesign & Mode Image Sharing


### Match Options Screen Redesign
- Reorganized Match Options with Featured Modes and Saved Modes side-by-side above General Settings for quick mode selection
- Match Options layout: General Settings and Modifiers are permanently visible; Featured Modes and Saved Modes are collapsible
- Added **Word Grid Deluxe** featured mode: 5×5 grid, 2-minute timer with Word Grid, Color Bonus, and Letter Values
- Upgraded Saved Custom Modes sharing to export and import standard PNG image cards with embedded metadata (`tEXt` chunk with CRC32 and pixel fallback)

### Daily Board & Post-Game Flow
- Added post-match action to save current modifier combinations directly to Saved Modes from the results screen
- Verified deterministic Pacific Time midnight Daily Board resets and match preview overlays
- Streamlined practice retries vs competitive first-attempt scoring

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

- Signed-in career totals, personal bests, Daily Mission progress, awards, and tile-theme unlocks now follow the player across devices
- Completed solo, community, Daily Board, and live multiplayer rounds use per-match receipts so progression is recorded only once
- Match Options now focuses on grid size, duration, multiplayer, featured modes, modifiers, and saved modes
- Tile themes, effects volume, haptics, reduced motion, high contrast, and large letters moved into a dedicated Player Settings screen
- Today’s Board and Start New Match now share the primary action row, with Settings beside Login or Logout
- Saved Modes opens expanded, and a contextual Save Mode action appears beside Start Match for non-default setups
- Firestore rules now isolate progression summaries and immutable match receipts to their owning registered account

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
- Career tracking with milestones, achievements, and award progress
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
