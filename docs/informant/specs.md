# Technical specifications

## Package
- **App name:** INFORMANT
- **Android package ID:** `com.rykersoft.informant`
- **Current version:** 1.3.1 (versionCode 15)

## Platforms
| Platform | Stack | Storage |
|---|---|---|
| Android | Capacitor 8 + WebView | IndexedDB (`clientDb`) |
| Desktop | Electron / local Node server | Projects JSON + SQLite `informant.db` |
| Web (dev) | Vite + React 19 | Same as platform above |

## Requirements
- **Android:** minSdk 24, targetSdk/compileSdk 36; release builds need `android/keystore.properties`
- **Desktop:** Node.js for `npm run dev` / portable builds
- **Optional APIs:** Gemini, YouTube Data API, YouTube Transcript API, Webshare proxy, ElevenLabs
- **Pro unlock:** Google authentication uses the named RykerSoft hub Firebase app (`rykersoft-abe84`); Android uses native Credential Manager, web uses Firebase popup auth, and packaged Electron uses a temporary loopback helper in the system browser
- **Provider access:** Public users bring their own keys. Family-and-friends Pro is an administrator-managed Boolean grant at `users/{hubUid}/entitlements/apps` for the exact package `com.rykersoft.informant`; there is no reusable unlock code or global family role
- **Provider security:** Manual keys remain local and take priority. An entitled account may read only `providerKeys/com.rykersoft.informant`; those keys are loaded into process memory for the signed-in session, cleared on sign-out, and never embedded in distributable artifacts
- **Firebase plan:** This Auth + Firestore model works on Firebase Spark. Blaze is required only if a future release deliberately moves provider operations into Cloud Functions

## Architecture notes
- Project-centric navigation: `ProjectHome` → `Workspace` (no React Router)
- Single global YouTube player (`PlayerManager`) repositions over the active card target
- Player modes: `collapsed`, `expanded`, `pip`
- Video artifacts (notes, bookmarks, transcripts, comments, chat, analyses) keyed by content id (`videoId` / `articleId`)
- Selective project + per-item JSON export stamped with `app: INFORMANT` and `packageId: com.rykersoft.informant`; project exports use `rykersoft.portable-project` version 1 with normalized resources/tabs and lossless INFORMANT extensions
- Hub identity is Google-first. A migration-only email/password path can link Google to the authenticated legacy Firebase user so the UID and existing entitlements remain intact
- Provider credentials are absent from renderer, Android, Electron, and server bundles. Hub Firestore rules allow an authenticated user to read only the exact package-key document for which their UID has a true entitlement, and deny client writes and collection listing
- All remaining password/API-key fields start hidden and include accessible in-field show/hide controls
- Android file save via native `FileSave` plugin (`ACTION_CREATE_DOCUMENT`); share via Capacitor Share
- TTS engines: System (Android TextToSpeech / desktop Web Speech), Piper WASM in a Web Worker (`@diffusionstudio/vits-web`), ElevenLabs (desktop Express proxy / mobile direct)
- TTS audio cache in IndexedDB (`informant-tts-cache`); section queue with single look-ahead prefetch
- TTS fencing / tap-to-play only while the tab TTS toolbar is open

## Distribution
- RykerSoft hub installs the signed APK from `rykergrey/RykerSoft-APKs` releases (`informant-v<version>`)
- Hub docs are served from `RykerSoft-APKs/docs/informant/`
- Hub gallery screenshots live in `rykergrey/RykerSoft` → `screenshots/informant/`
