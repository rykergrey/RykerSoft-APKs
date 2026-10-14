# Technical specifications

## Package
- **App name:** INFORMANT
- **Android package ID:** `com.rykersoft.informant`
- **Current Android version:** 1.4.13 (versionCode 30)
- **Published Windows download:** 1.4.13 (x64 portable)
- **Published Linux downloads:** 1.4.13 (x64 AppImage and `tar.gz`)

## Platforms
| Platform | Stack | Storage |
|---|---|---|
| Android | Capacitor 8 + WebView | IndexedDB (`clientDb`) |
| Windows / Linux | Bundled Electron + local Node runtime | Projects JSON + SQLite `informant.db` |
| Web (dev) | Vite + React 19 | Same as platform above |

## Requirements
- **Android:** minSdk 24, targetSdk/compileSdk 36; release builds need `android/keystore.properties`
- **Packaged desktop:** Windows or Linux x64; Electron and its Node runtime are included, so end users do not need to install Node.js separately
- **Development only:** Node.js is required to run or build the application from source
- **Optional APIs:** Gemini, OpenAI Responses/Models APIs, YouTube Data API, YouTube Transcript API, ElevenLabs
- **Pro unlock:** Google authentication uses the named RykerSoft hub Firebase app (`rykersoft-abe84`); Android uses native Credential Manager, web uses Firebase popup auth, and packaged Electron uses a temporary loopback helper in the system browser
- **Provider access:** Public users bring their own keys. Family-and-friends Pro is an administrator-managed Boolean grant at `users/{hubUid}/entitlements/apps` for the exact package `com.rykersoft.informant`; there is no reusable unlock code or global family role
- **Provider security:** Manual keys remain local and take priority. An entitled account may read only `providerKeys/com.rykersoft.informant`; those keys are loaded into process memory for the signed-in session, cleared on sign-out, and never embedded in distributable artifacts
- **Firebase plan:** This Auth + Firestore model works on Firebase Spark. Blaze is required only if a future release deliberately moves provider operations into Cloud Functions

## Article retrieval
- Android retrieves article HTML through native HTTP on the device and extracts a sanitized body using semantic article candidates and Readability. Article imports do not require transcript/proxy keys or automatically use a remote scraper.
- Navigation, consent and verification pages are rejected instead of being saved as articles. Sites requiring JavaScript rendering or interactive verification can still fail; Android rendered-browser capture is not included in this release.

## Desktop storage

- Windows portable libraries stay beside the executable in its portable folder. Keep `informant.db`, any remaining SQLite sidecars, and `projects/` when updating or moving the app.
- New Linux installations use the standard application data directory, normally `~/.config/informant/`. An existing adjacent `informant.db` or legacy `supertube.db`, or an explicitly selected portable/data directory, retains its original location.
- The app profile also retains browser-based settings and local queues. Close INFORMANT normally before copying a data folder; item/project JSON exports provide a separate way to carry saved content between devices.

## Direct reader sending

- Android, Windows and Linux send reviewed current-tab content directly to CrossPoint without requiring the standalone Inbox app or a pairing JSON file.
- The reader must be awake in **Receive from phone** on the same Wi-Fi or a joined reader hotspot. Android offers QR scanning or manual address entry; Windows/Linux use manual entry.
- The remembered manual draft accepts a bare address such as `192.168.1.50`; an unpaired fresh field starts with the editable `192.168.1.` prefix. Explicit **Connect reader** validates the address and saved reader identity.
- Transfers use trusted local HTTP, which is unencrypted. Success requires exact EPUB byte verification; readers advertising Library receipt support must also return a matching Library confirmation.
- The local **Reader queue** retains exact snapshots for foreground sending later. Optional **Desktop inbox** publishing uses separate pairing and reader Inbox sync; it is not required for direct transfer.

## Architecture notes
- Navigation: `ProjectHome` → `StandaloneVideoView` or project `Workspace` (no React Router)
- Standalone membership/artifact snapshots are stored separately from projects (SQLite on desktop, IndexedDB on Android); Add to project moves the saved work into an existing project
- URL imports default to standalone; General settings can restore project-based import
- Single global YouTube player (`PlayerManager`) repositions over the active card target
- Player modes: `collapsed`, `expanded`, `pip`
- Video artifacts (notes, bookmarks, transcripts, comments, chat, analyses) keyed by content id (`videoId` / `articleId`)
- Selective project + per-item JSON export stamped with `app: INFORMANT` and `packageId: com.rykersoft.informant`; project exports use `rykersoft.portable-project` version 1 with normalized resources/tabs and lossless INFORMANT extensions
- Hub identity is Google-first. A migration-only email/password path can link Google to the authenticated legacy Firebase user so the UID and existing entitlements remain intact
- Provider credentials are absent from renderer, Android, Electron, and server bundles. Hub Firestore rules allow an authenticated user to read only the exact package-key document for which their UID has a true entitlement, and deny client writes and collection listing
- Gemini and OpenAI model catalogs are retrieved at runtime with the effective BYOK/Pro-session credential; saved models use a provider-qualified identity and assignments cover chat, app-level AI functions, and individual actions
- All remaining password/API-key fields start hidden and include accessible in-field show/hide controls
- Android file save via native `FileSave` plugin (`ACTION_CREATE_DOCUMENT`); share via Capacitor Share
- TTS engines: System (Android TextToSpeech / desktop Web Speech), Piper WASM in a Web Worker (`@diffusionstudio/vits-web`), ElevenLabs (desktop Express proxy / mobile direct)
- TTS audio cache in IndexedDB (`informant-tts-cache`); section queue with single look-ahead prefetch
- TTS fencing / tap-to-play only while the tab TTS toolbar is open

## Distribution
- RykerSoft hub installs the signed APK from `rykergrey/RykerSoft-APKs` releases (`informant-v<version>`)
- Windows portable and Linux AppImage / `tar.gz` downloads share the public `informant-v1.4.13` release; the hub catalog exposes the Windows and Linux download choices
- Hub docs are served from `RykerSoft-APKs/docs/informant/`
- Hub gallery screenshots live in `rykergrey/RykerSoft` → `screenshots/informant/`
