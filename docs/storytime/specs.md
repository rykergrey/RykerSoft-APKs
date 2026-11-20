# Storytime Technical Specifications

## Application

- Package: `com.superstorycraft.ing`
- Release: `1.7.0` (`versionCode 13`)
- UI: React 19, TypeScript, Vite, and Tailwind CSS
- Android: Capacitor 8 with native Java bridges
- Windows: Electron 40, NSIS installer, and portable x86-64 executable
- Linux: Electron 40 AppImage, x86-64
- Narration: Story Engine only; recordings made with earlier engines still play
- Data: localStorage plus IndexedDB; stories and generated media remain local unless the user explicitly syncs

## Story Studio

- Title-first scene insertion, expandable drafts, idea inbox, structural views, editable/focused manuscript, and read-through revision notes
- Selective Quick Start with source provenance, character merges, and reviewed application
- Persistent versions, alternative drafts, and linked continuity checks
- Transactional autosave with conflict recovery; reviewed assistant changes and session undo
- Floating solo-only assistant with programmatic screen/selection context, saved auto-named conversations, local commands, and optional connected writing assistance
- Editable ZIP backups retain studio documents, versions, alternatives, and revision notes; device-local assistant conversations remain outside backups

## Standard and Pro Boundary

- Standard functions do not call external writing providers.
- Provider-backed writing, artwork, creative assistance, cloud speech, and Story Party hosting are marked with `*` as Pro features.
- A personal provider key can be used as an optional local override.
- RykerSoft-managed keys are runtime-only and never enter localStorage, IndexedDB, story files, Drive backups, logs, source, or packaged artifacts.

## Firebase Boundaries

- App-owned Firebase project: `superstorycrafting`
  - Google authentication for online rooms
  - Ephemeral room, membership, response, and public-state documents
  - Director/listener roles and a short-lived single-speaker lease with a bounded playlist cursor
  - Public room names chosen by the player and separated from email/profile identity
- RykerSoft hub project: `rykersoft-abe84`
  - Named Firebase app: `rykersoft-hub`
  - Entitlement: `users/{hubUid}/entitlements/apps["com.superstorycraft.ing"] == true`
  - Provider record: `providerKeys/com.superstorycraft.ing`
  - Capability record: `appCapabilities/com.superstorycraft.ing`

Firebase UIDs are project-scoped. Storytime never treats app-project and hub-project UIDs as equal and never authorizes access from an email string supplied by the client.

## Provider Model

- Model: trusted-family runtime credential delivery
- Fields, in the order the hub's admin screen shows them: `anthropic` (Claude, the default writer), `gemini` (artwork, Gemini Voice and Gemini writing), `openai`, `kimi`, `elevenLabs`, `voicehouseConnection`. The list is `.rykersoft/app-capabilities.json`; publish it to the hub with `node scripts/release-app-capabilities.mjs snapshot`, then `apply`, then `verify`.
- The client also accepts `anthropicApiKey`, `claude` or `claudeApiKey` for the Claude key (`services/proAccessSession.ts`).
- A key delivered by Pro is used only while no personal key for that provider is saved on the device; a personal key in Settings wins.
- Entitled clients perform one exact-document read; list queries and every client provider write are denied.
- Credentials are cleared before every entitlement refresh, on sign-out, and when entitlement/provider access fails.
- Revocation prevents future retrieval. If a trusted device is lost, rotate the package-specific provider credentials.

## Authentication

- Android app-data sign-in uses the Capacitor Firebase Authentication native Google flow.
- Android hub sign-in uses a dedicated Credential Manager bridge with the app-project web client ID accepted by the hub, then imports the short-lived Google credential into the named hub Firebase Auth instance.
- Windows app-data and hub sign-in use a temporary loopback Firebase helper opened in the system browser. The helper uses in-memory persistence and returns only short-lived credentials through narrow IPC.
- Web development uses Firebase Google popup authentication.
- Google Drive authorization is separate from Firebase authentication.

## Security and Privacy

- Electron context isolation, sandboxing, navigation restrictions, and a narrow preload bridge remain enabled.
- No OAuth client secret, service-account credential, provider key, entitlement-writing authority, or reusable family code is packaged.
- Online-room public data excludes email, Firebase UID presentation, tokens, provider keys, and entitlement state.
- Road-trip audio files remain in the active speaker's local cache; Firestore carries only story text, lease state, and playlist progress.
- Personal keys are masked by default with accessible show/hide controls and may be removed independently.
- Android backups are disabled at the application manifest level.

## Release Targets

- Signed non-debug Android APK, package `com.superstorycraft.ing`
- Windows portable x86-64 executable
- Linux x86-64 AppImage
- Public artifacts and documentation in `rykergrey/RykerSoft-APKs`
- Registry activation in `rykergrey/RykerSoft` occurs only after artifacts, capability state, and screenshots are verified
