# Release notes

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
- Made Google the default sign-in for both SuperThink.ing cloud sync and RykerSoft PRO access, with explicit legacy password recovery/linking that preserves existing Firebase UIDs
- Registered the release-signed Android app in both Firebase projects and added native Google authentication support
- Hub provider keys now remain in memory only and are stripped from app preferences/Firestore; all password and API-key fields have accessible show/hide controls

## v2.0.119
- RykerSoft AI unlock: sign in with your RykerSoft account under **Settings → RykerSoft AI unlock** to sync Gemini and Groq keys after unlocking SuperThink.ing in the RykerSoft App Manager
- AI actions, chat, and transcription are now unlock-gated; manually entered keys in Settings still work and take priority
- Editing, songs, diagrams, media, and vault sync remain fully available without the unlock

## v2.0.118
- First RykerSoft hub release (`com.rykersoft.superthinking`)
- Release-signed APK, hub screenshots, and registry entry
