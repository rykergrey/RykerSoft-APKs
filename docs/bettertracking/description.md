Holistic personal tracking for food, supplements, exercise, measurements, lifestyle, and notes — with an adaptive calorie engine, AI logging and coaching, reminders, cloud sync, and offline support.

bettertracking is a full journal + library system, not a simple calorie counter. Track what you eat and do, build a personal library of ingredients and combos, stage batches into your journal, and let targets adapt from your weight trend and activity.

## New in 1.11.1

- Home's W/M controls open weekly/monthly Trends & History with all charts, metrics, relationships and the filtered log list
- A nutrition-first overview with calorie, protein, fiber and weight comparisons and a dedicated recorded weight trend
- The separate Analysis tab generates AI reviews inline, saves period reports and supports exports and chat follow-ups for the same period
- Default AI reviews focus on nutrition and confirmed weight goals; full training, habits and food exploration remain available

## Features

- **Six domains** in one place: Food, Supplement, Exercise, Measurement, Lifestyle, and Note
- **Journal** with day/week/month views, domain filters, tag search, Trends & History statistics alongside filtered logs, and multi-select export (CSV / Markdown / clipboard)
- **Trends & History** puts nutrition and weight progress first, with calorie/protein/fiber comparisons and a dedicated recorded weight trend; explore all six domains, custom numeric trends, nutrient goal rules, food contributors, exercise-specific metrics, body measurements, habit distributions and diary relationships; ranges support up to 3,660 days, with older history explored in smaller periods
- **Period AI analysis** generates reviews inline in the separate Analysis tab, saves weekly/monthly reports and findings, and offers exports and chat follow-ups using the same selected period
- **Logging tally** combines tray/combo batches into one before/contribution/after view, including nutrients, exercise, measurements and habits, with separate goal adjustments, pause/skip and reduced-motion support
- **Personal library** of reusable ingredients and combos with macros, micros, custom fields, exercise routines, and attached reminders
- **Staging tray** for multi-item logging with quantities, units, voice quick-add (uses each library item’s defined unit), and day-target awareness
- **Library panel** remembers search, scroll, and expanded groups across tray switches
- **Quick Log**: free text and/or a photo → AI-estimated macros, refine with feedback
- **Adaptive nutrition engine**: Mifflin–St Jeor BMR, weight-trend adaptation after ~14 days, conservative 0.8× trust on exercise burn, manual overrides
- **Rolling Calorie Balance** that compares recent intake with combined goals, explains logging coverage, and supports opt-in adjustments
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

## Download version 1.11.1

- [Android APK](https://github.com/rykergrey/RykerSoft-APKs/releases/download/bettertracking-v1.11.1/app-release.apk)
- [Windows x64 portable](https://github.com/rykergrey/RykerSoft-APKs/releases/download/bettertracking-v1.11.1/bettertracking-v1.11.1-win-x64.exe)
- [Linux x64 AppImage](https://github.com/rykergrey/RykerSoft-APKs/releases/download/bettertracking-v1.11.1/bettertracking-v1.11.1-linux-x86_64.AppImage)
- [Linux x64 Debian package](https://github.com/rykergrey/RykerSoft-APKs/releases/download/bettertracking-v1.11.1/bettertracking-v1.11.1-linux-amd64.deb)
