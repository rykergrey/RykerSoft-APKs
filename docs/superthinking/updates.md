# Release notes

## v2.2.9
- Fix Android RykerSoft Pro Google sign-in error 28444 by using the OAuth client paired with the app's package and signing certificate, already safelisted by the Hub.
- Show the underlying Google credential error when sign-in fails.
- Preserve separate vault and Pro sessions, existing account identities, and package-scoped Pro access.

## v2.2.8
- Added Ctrl+1 through Ctrl+9 shortcuts for jumping directly to visible tabs in the active card
- Side panels now collapse automatically when the app window enters a compact width
- Navigation dropdowns remain available as icon controls at narrow widths, and cloud save status is now icon-only
- Remember in-session scroll positions independently for text previews, text editors, and chat tabs when switching tabs or panes
- Added Linux as a first-class Electron target with native Wayland behavior, an Omarchy/Arch pacman package, a portable AppImage, XDG-aware build output, and complete desktop launcher metadata
- Added a stable `com.rykersoft.superthinking` Wayland app ID / X11 class for Hyprland launcher matching and xdg-desktop-portal permissions without custom window rules
- Added secure desktop permission handling, standard native menus, single-instance focus behavior, and Wayland-safe window restoration
- Added a reproducible Node.js 24 LTS mise environment and repaired the web/Electron TypeScript verification paths

## v2.2.7
- Fix RykerSoft Pro Google sign-in on Android by requesting the ID token with the RykerSoft Hub web client ID
- Keep the SuperThink.ing data-vault Google account on its independent Firebase project
- Preserve the existing release signing identity, Firebase UID, and package-scoped Pro entitlement lookup

## v2.2.6
- Removed email/password authentication, password reset, and account-linking controls from both SuperThink.ing vault sync and RykerSoft PRO access; Google is now the only account provider
- Fixed stale offline sessions so Settings reports an offline vault accurately, can reconnect with Google, and can end the cached session without clearing app storage
- Keep Android audio-tab recordings active with a microphone foreground service when the app is backgrounded or the screen turns off, and reconnect the interface to an active recording when it returns

## v2.2.5
- Restore a complete, source-backed release after an unreleased direct-device build advanced the Android version
- Preserve the trusted Android signer and provide a monotonic update path without removing local app data
- Rebuild synchronized Android and Windows artifacts from the current stable source

## v2.2.3
- Open signed-in vaults from a local snapshot immediately, so notes and recordings are available without waiting on a network
- Restore the last account on this device even when Firebase Auth is offline, instead of hanging on an endless Loading screen
- Keep edits and media on the device first, then sync to Firestore in the background when the connection returns

## v2.2.2
- Redesigned the audio player for narrow mobile screens, placing previous, play/pause, next, and the seek bar together in a compact playback row so secondary actions no longer get clipped
- Turned the seek track into a live green input-level meter while recording, then restored normal seeking as soon as recording stops
- Added native Android microphone-level reporting with a browser-compatible analyser fallback for responsive recording feedback across supported devices

## v2.2.1
- Fixed the Windows startup splash so the bundled SuperThink.ing artwork fills the launch window instead of appearing as a blank white panel
- Kept the main Windows window hidden until Chromium has painted its first frame, eliminating the blank transition into the app

## v2.2.0
- Added a responsive interface foundation with reusable dialogs, improved mobile navigation and creation flows, clearer error recovery, and refreshed installable-app assets
- Expanded safe card, category, batch, context-menu, and Tab Manager actions with capability checks, confirmations, and more predictable save behavior
- Improved media workflows with stronger ownership handling, linked-audio playback modes, local video transcription support, FFmpeg runtime checks, and more reliable exports
- Reworked Windows packaging and Google authentication with a localhost callback flow, navigation restrictions, clean build output, and Electron 43 support
- Kept RykerSoft package-entitled provider credentials isolated in memory while preserving device-local bring-your-own-key access
- Hardened Android permissions, microphone routing, share imports, downloads, and Firebase Google authentication for the release-signed package

## v2.1.0
- Fixed signed-in image durability: image/audio/video saves requested for cloud storage now fail visibly instead of silently leaving device-only `idb://` references, and recoverable legacy media is migrated to Firebase Storage
- Added adaptive JSON/ZIP project import with a preview/content picker, native SuperThink.ing archives, loose-file ZIPs, and RykerSoft portable-project v1 support
- Added import actions throughout empty vault, card, mobile, and kanban creation surfaces; kanban navigation now expands the active card consistently
- Introduced Google sign-in for both SuperThink.ing cloud sync and RykerSoft PRO access
- Registered the release-signed Android app in both Firebase projects and added native Google authentication support
- Hub provider keys now remain in memory only and are stripped from app preferences/Firestore; all password and API-key fields have accessible show/hide controls

## v2.0.119
- RykerSoft AI unlock: sign in with your RykerSoft account under **Settings → RykerSoft AI unlock** to sync Gemini and Groq keys after unlocking SuperThink.ing in the RykerSoft App Manager
- AI actions, chat, and transcription are now unlock-gated; manually entered keys in Settings still work and take priority
- Editing, songs, diagrams, media, and vault sync remain fully available without the unlock

## v2.0.118
- First RykerSoft hub release (`com.rykersoft.superthinking`)
- Release-signed APK, hub screenshots, and registry entry
