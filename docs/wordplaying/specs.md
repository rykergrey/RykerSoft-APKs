# Technical Specifications

## Platform & Requirements
- **Android**: Android 7.0+ (API Level 24+)
- **Windows**: 64-bit Windows desktop executable built with Electron 40
- **Web**: Modern Chromium-, Firefox-, or WebKit-based browser
- **compileSdk / targetSdk**: 36
- **Package ID**: `com.rykersoft.wordplaying`
- **Release version**: 1.2.1 (version code 5)
- **Shell**: Capacitor 8 (WebView) wrapping a Vite + React 19 TypeScript app

## Architecture
- **UI**: React components for board, overlays, modals, multiplayer lobby
- **Game engine**: Client-side PRNG boards, adjacency rules, TWL06 DAWG dictionary
- **Backend**: Firebase Google Authentication + Firestore (live matches, challenges, seasons, private user data, public player-name reservations, immutable competitive-attempt claims, account progression summaries, Wordbook entries, and idempotent progression receipts)
- **Audio**: Web Audio API synth / step sequencer
- **Definitions**: Free Dictionary API (`api.dictionaryapi.dev`)
- **Optional desktop**: Electron + electron-builder
- **Release artifacts**: Signed Android APK and portable Windows executable from the same versioned source
- **Legacy**: Colyseus Node server under `server/` (not used by current live multiplayer)

## Network
- Android cleartext / mixed content enabled for local multiplayer HTTP endpoints when configured
- Cloud features require network access to Firebase
- Firestore security rules bind Daily/challenge attempt and score IDs to the authenticated UID, reject score updates, and validate the competitive board configuration
- Private progression documents live under each registered user and are readable/writable only by that account; per-match progression receipts are create-only
- Public player profiles contain only a custom player name. Case-insensitive username reservations are atomic, cannot be reassigned by another user, and contain no Google name, email, provider ID, entitlement, or token data.
- Existing password accounts use a migration-only sign-in and link a Google credential to the current Firebase user so UID-owned data is preserved.
- Android Google sign-in uses the Capacitor Firebase Authentication bridge and the registered RykerSoft release SHA-1/SHA-256 certificate fingerprints.
- The packaged Electron app serves its bundled UI only on a loopback HTTP origin so Firebase popup authentication uses an authorized domain.
