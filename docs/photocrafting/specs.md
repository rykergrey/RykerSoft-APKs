# Photocraft.ing — Technical Specs

| Field | Value |
|-------|-------|
| Package ID | `com.rykersoft.photocrafting` |
| Display name | Photocraft.ing |
| versionName | 1.0.0 |
| versionCode | 2 |
| minSdk | 24 |
| targetSdk / compileSdk | 36 |
| Platforms | Android (Capacitor 8), Windows (Electron) |

## Stack

- React 19 + TypeScript + Vite 6
- Capacitor Android shell (`@capacitor/android`, Camera, Filesystem, Share, Media)
- IndexedDB for local images and custom actions
- Google GenAI SDK (`@google/genai`) for Gemini image/text
- OpenAI Images + Whisper (REST) when an OpenAI key is present
- Firebase JS SDK (named app `rykersoft-hub`) for RykerSoft Auth + Firestore entitlements / `providerKeys`

## AI unlock

- Hub project: `rykersoft-abe84`
- Entitlements: `users/{uid}/entitlements/apps` → `com.rykersoft.photocrafting: true`
- Provider keys: `providerKeys/com.rykersoft.photocrafting` (`gemini`, optional `openai`)
- Manual Settings keys override hub-synced keys
- Release builds do not bake Gemini/OpenAI keys (`VITE_ALLOW_BAKED_AI_KEYS` must stay false for hub APKs)

## Local storage keys (selected)

- `photocraft_user_gemini_api_key` / `photocraft_user_openai_api_key` — manual overrides
- `GEMINI_API_KEY` / `OPENAI_API_KEY` — hub sync slots
- `photocraft_hub_ai_unlocked` — Pro model gate cache after hub unlock
