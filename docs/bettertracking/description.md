Holistic personal tracking for food, supplements, exercise, measurements, lifestyle, and notes — with an adaptive calorie engine, AI logging and coaching, reminders, cloud sync, and offline support.

bettertracking is a full journal + library system, not a simple calorie counter. Track what you eat and do, build a personal library of ingredients and combos, stage batches into your journal, and let targets adapt from your weight trend and activity.

## New in 1.14.0

- Full-history calorie accounting keeps earlier overages visible until later logged days balance them, including across weeks
- Daily and recent views distinguish intake above your goal from intake above estimated maintenance
- Optional recent-window plans use manageable daily adjustment caps and nutrient-aware bounds; historical balances remain visible without requiring a payoff deadline
- Protein, fat, carbohydrate, fiber, vitamin, mineral and sodium goals keep their daily meaning; earlier intake does not reduce today's nutrient requirements or raise today's limits
- Android also includes the optional Index Assistant library, journal and staging-tray connection, with separate default-off read/write controls

## Features

- **Six domains** in one place: Food, Supplement, Exercise, Measurement, Lifestyle, and Note
- **Journal** with a Home Log/Stats control, selected-day dashboards and entries in Log, domain filters, tag search, selected-period history in Stats, and multi-select export (CSV / Markdown / clipboard)
- **Stats → Trends & History** puts nutrition and weight progress first, with calorie/protein/fiber comparisons and a dedicated recorded weight trend; explore all six domains, custom numeric trends, nutrient goal rules, food contributors, exercise-specific metrics, body measurements, habit distributions and diary relationships; ranges support up to 3,660 days, with older history explored in smaller periods
- **Period AI analysis** generates reviews inline in Stats → Analysis, saves weekly/monthly reports and findings, and offers exports and chat follow-ups using the same selected period
- **Logging tally** combines tray/combo batches into one before/contribution/after view, including nutrients, exercise, measurements and habits, with separate goal adjustments, pause/skip and reduced-motion support
- **Personal library** of reusable ingredients and combos with macros, micros, custom fields, exercise routines, and attached reminders
- **Staging tray** for multi-item logging with quantities, units, voice quick-add (uses each library item’s defined unit), and day-target awareness
- **Library panel** remembers search, scroll, and expanded groups across tray switches
- **Quick Log**: free text and/or a photo → AI-estimated macros, refine with feedback
- **Adaptive nutrition engine**: Mifflin–St Jeor BMR, weight-trend adaptation after ~14 days, conservative 0.8× trust on exercise burn, manual overrides
- **Rolling Goal Balances** that retain full-history calorie accounting, distinguish goals from estimated maintenance, protect daily nutrient goals, explain logging coverage and support capped opt-in plans
- **Rolling nutrient progress** with daily and period views, goal-type-aware boundaries, cumulative variance, and individual overage-day counts
- **AI assistant & coaching**: tool-using chat (navigate, query logs, create/update items, set reminders), inline coach reviews grounded in calculated period reports, and portable briefs for Perplexity, ChatGPT, Google Gemini or another chatbot
- **AI Architect**: describe an item (optionally with images) and let the model draft the library entry
- **Speech-to-text** via Groq Whisper (default) or OpenAI Whisper, plus on-device voice capture on Android
- **Alerts & reminders**: per-item schedules (daily/weekly/monthly/etc.), wake/sleep alarms, Capacitor local notifications with reboot rescheduling
- **Firebase Auth + Firestore** account sync with IndexedDB offline persistence
- **Library JSON export/import** including combo dependencies

## PRO Features

Items marked * require app-specific RykerSoft pro access for your signed-in account when using app-provided AI credentials. Sign in with the same RykerSoft account under Profile → API Keys.

* **Library Draft Assistant** — Draft described restaurant dishes and recipes with estimates, read food and supplement labels, and refine portions or partial drafts
* **AI chat, coach reviews and Quick Log** — Tool-assisted chat, calculated-report reviews and food analysis
* **Cloud transcription** — Dictate using configured speech providers

## AI unlock

In-app AI features (Quick Log, AI Architect, chat, and voice transcription) are enabled through the RykerSoft App Manager: have bettertracking access granted to your RykerSoft account, then sign in with that account inside the app under **Profile → API Keys → RykerSoft AI unlock**. In-app coach reviews use your configured AI provider. Charts, statistics, exports and portable coach briefs need no AI credentials; an external chatbot uses your own account. All tracking, journaling, library, and reminder features work without the unlock. You can also supply your own Gemini/Groq/OpenAI keys manually.

## Platforms

- **Android** — Capacitor APK via the RykerSoft hub (`com.rykersoft.bettertracking`)
- **Web** — Vite PWA with service worker
- **Windows** — x64 Electron portable build (not Authenticode signed)
- **Linux** — x64 AppImage and Debian package

## Download version 1.14.0

- [Android APK](https://github.com/rykergrey/RykerSoft-APKs/releases/download/bettertracking-v1.14.0/app-release.apk)
- [Windows x64 portable](https://github.com/rykergrey/RykerSoft-APKs/releases/download/bettertracking-v1.14.0/bettertracking-v1.14.0-win-x64.exe)
- [Linux x64 AppImage](https://github.com/rykergrey/RykerSoft-APKs/releases/download/bettertracking-v1.14.0/bettertracking-v1.14.0-linux-x86_64.AppImage)
- [Linux x64 Debian package](https://github.com/rykergrey/RykerSoft-APKs/releases/download/bettertracking-v1.14.0/bettertracking-v1.14.0-linux-amd64.deb)
