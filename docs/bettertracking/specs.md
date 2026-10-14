# Technical specifications

## Package

- **App name:** bettertracking
- **Android package ID:** `com.rykersoft.bettertracking`
- **Current version:** 1.11.1 (versionCode 24)

## Platforms

| Platform | Stack | Storage |
|---|---|---|
| Android | Capacitor 7 + WebView | Firestore + IndexedDB offline cache |
| Web | Vite + React (PWA, service worker) | Firestore + IndexedDB offline cache |
| Windows | Electron x64 portable | Same web bundle |
| Linux | Electron x64 AppImage / Debian package | Same web bundle |

## Android

- **minSdk:** 23, **targetSdk / compileSdk:** 35
- Release builds signed via `android/keystore.properties` (gitignored)
- Capacitor Local Notifications with reboot rescheduling permissions

## Accounts & sync

- Email/password sign-in via the app's own Firebase Auth project
- Per-user Firestore data: library, logs, profile, chat conversations, analyses, and coach check-in history
- Realtime listeners with IndexedDB offline persistence

## AI providers

- **Gemini / OpenAI** — selected-model tool-using chat; Gemini for Quick Log, AI Architect and nutrition/burn estimates. Explicit in-app Health Coach reviews generate inline in Analysis using the configured chat provider and locally calculated context for the selected period. Portable coach briefs are generated locally for the user's external chatbot without calling a model.
- **Groq Whisper** (default) / **OpenAI Whisper** — speech-to-text
- Keys come from the RykerSoft hub Firebase (`rykersoft-abe84`) after unlock + hub sign-in (Profile → API Keys), or can be entered manually

## Architecture notes

- `App.tsx` — shell, navigation, Firebase subscriptions, overlays
- `services/` — Gemini/AI, adaptive nutrition engine, transcription, notifications, library search
- `services/rykersoftHub.ts` — second Firebase app (`rykersoft-hub`) for entitlements + provider keys
- Adaptive targets: Mifflin–St Jeor BMR, ~14-day calibration, 0.8× exercise-burn trust factor, optional Energy Bank

## Health analysis

- Shared local calculations for Trends & History metrics/charts, CSV / Markdown exports and read-only assistant report tools
- Home W/M selects week/month; Trends & History contains the six statistics sections and existing filtered log items, while the separate Analysis tab handles inline AI generation, saved period reports/findings, exports and chat follow-ups for the same period
- Weekly/monthly AI reports use the existing per-user Firestore analyses collection (`users/{userId}/analyses`); no new backend migration
- Nutrition-first overview with dedicated recorded weight trends and calorie/protein/fiber/weight comparisons; default coach reviews prioritize nutrition and confirmed weight goals
- Six domains; built-in and custom numeric metrics, compatible unit conversion, numeric trends, categorical distributions, notes and daily/domain coverage
- Day, Monday-based week, calendar month/year, all-time and inclusive custom ranges, capped at 3,660 local days per request
- Nutrient values use saved log amounts; missing values remain unknown, averages use complete recorded days and current targets are reference values
- Previous calendar-period comparisons use matching elapsed portions while a period is ongoing
- Descriptive Pearson correlation requires at least eight complete date pairs and variation in both metrics; same-day and delayed associations do not establish causation
- Data comes from locally synchronized records; historical profile/schema versions and complete cross-device coverage are not available

## Distribution

- RykerSoft hub installs the signed APK from the public RykerSoft-APKs GitHub Releases
- Hub gallery screenshots live in `rykergrey/RykerSoft` → `screenshots/bettertracking/`

## Desktop distribution

- Windows x64 portable EXE (not Authenticode signed)
- Linux x64 AppImage and Debian package
- Public artifacts and SHA-256 checksums published together for each release
