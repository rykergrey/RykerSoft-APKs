# Technical specifications

## Package
- **App name:** SuperThink.ing
- **Android package ID:** `com.rykersoft.superthinking`
- **Current version:** 2.2.0 (versionCode 123)

## Platforms
| Platform | Stack | Storage |
|---|---|---|
| Android | Capacitor + WebView | localStorage + IndexedDB (guest) / Firestore + Firebase Storage (signed in) |
| Web | Vite + React | Same as above |
| Windows | Capacitor Community Electron portable | Same web bundle |

## Android
- **minSdk:** 24, **targetSdk / compileSdk:** 36
- Release builds signed via `android/keystore.properties` (gitignored)
- Native plugins: Firebase Authentication (Google), MicrophoneRouting (mic/Bluetooth routing), DownloadSaver (public Downloads), share-target import

## Accounts & sync
- **Guest mode**: cards and prefs in local storage, media in IndexedDB — no account needed
- **Signed-in mode**: Google-first authentication against the app-data Firebase project syncs cards/actions/templates via Firestore and media via Firebase Storage; empty cloud vaults can migrate guest cards on sign-in
- **Legacy migration**: existing email/password users can sign in through the migration panel, reset their password, and link Google without changing their Firebase UID

## AI providers
- **Gemini** — text actions, chat, Tab Manager AI, image/video generation, OCR, dictation fallback
- **Groq Whisper** (default) / **OpenAI Whisper** (fallback) — speech-to-text
- **ElevenLabs** — text-to-speech presets
- **Datamuse** (free) — Word Lab; **TubeText** — YouTube captions
- Gemini/Groq keys come from the separate RykerSoft hub Firebase (`rykersoft-abe84`) after entitlement verification and Google sign-in, or can be entered manually
- Hub-supplied provider keys are held in process memory only and are never copied into localStorage or the app-data Firestore project

## Architecture notes
- `App.tsx` — orchestration and platform hooks; `hooks/` — cards, actions, execution, dictation, audio
- `services/` — AI providers, Firebase, media, export, transcription, song tools
- `services/rykersoftHub.ts` — second Firebase app (`rykersoft-hub`) for entitlements + provider keys
- FFmpeg WASM for audio export and local video → audio extraction

## Distribution
- RykerSoft hub installs the signed APK from this repo's GitHub Releases
- Hub gallery screenshots live in `rykergrey/RykerSoft` → `screenshots/superthinking/`
