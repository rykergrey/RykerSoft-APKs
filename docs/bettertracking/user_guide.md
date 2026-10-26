# bettertracking User Guide

Holistic tracking for food, supplements, exercise, measurements, lifestyle, and notes — with adaptive calorie targets, AI logging, and coaching.

## Table of Contents

- [PRO Features](#pro-features)
- [1. Getting started](#1-getting-started)
- [2. The Journal](#2-the-journal)
- [3. Library & Composer](#3-library--composer)
- [4. Staging tray & Quick Log](#4-staging-tray--quick-log)
- [5. Adaptive targets & Energy Bank](#5-adaptive-targets--energy-bank)
- [6. AI chat & Health Coach](#6-ai-chat--health-coach)
- [7. Alerts & reminders](#7-alerts--reminders)
- [8. RykerSoft AI unlock](#8-rykersoft-ai-unlock)
- [9. Profile, keys & preferences](#9-profile-keys--preferences)
- [10. Export & import](#10-export--import)
- [11. Health analysis](#11-health-analysis)
- [12. Index Assistant connection](#12-index-assistant-connection)

## PRO Features

Items marked * require app-specific RykerSoft pro access for your signed-in account when using app-provided AI credentials. Sign in with the same RykerSoft account under Profile → API Keys.

* **Library Draft Assistant** — Read food and supplement labels, search exact manufacturer products, and refine partial drafts with photos or typed details
* **AI chat, coach reviews and Quick Log** — Tool-assisted chat, calculated-report reviews and food analysis
* **Cloud transcription** — Dictate using configured speech providers

## 1. Getting started

1. Create an account or sign in (email/password). Your library, logs, and profile sync through the cloud and keep working offline.
2. Fill in **Profile → Goals & biometrics** (weight goal, gender, height, date of birth, wake/bed times) so calorie targets can be calculated.
3. New accounts come seeded with builtin items (Weight, Water, Sleep, bodyweight exercises, and more) so you can log immediately.
4. To use AI features, unlock bettertracking in the RykerSoft App Manager and sign in under **Profile → API Keys** (see section 8).

## 2. The Journal

- On **Home**, use the upper-right **Log / Stats** control. **Log** shows the selected day’s dashboard and entries; its daily date navigator lets you review another day.
- Filter by domain (Food / Supplement / Exercise / Measurement / Lifestyle / Note), search, and filter by tags.
- Sort by time, calories, burn, macros, or name; group by time, category, or item.
- Day dashboards summarize nutrition, supplements, exercise, measurements, lifestyle, and notes.
- **Stats** starts on Week the first time and retains your selected range when you return. Choose Day, Week, Month, Year, All time or Custom there. **Trends & History** contains the programmatic metrics, charts, relationships and food explorer alongside your filtered log items. Open **Analysis** for an AI review of the same selected period; both Stats tabs use the same range.
- Tap a log to edit its quantity, unit, date, or custom values. Multi-select for batch delete/update or export.
- A yesterday catch-up banner appears when food logging looked thin, which keeps Energy Bank math honest.

## 3. Library & Composer

- The Library holds reusable items across all six domains: simple **ingredients** and **combos** that compose child items with quantities.
- Items carry macros, optional micros (fiber, vitamins, minerals, etc.), units, serving size, tags, categories, icons, and custom fields.
- Build exercise **routines** with rest periods, and attach structured **reminders** to any item.
- **AI Architect**: describe an item in plain language (optionally with photos) and let the model draft the entry; nutrition AI can estimate macros and exercise burn from your biometrics.
- Tap behavior is configurable: stage the item to the tray or open its details.
- Your Library search, scroll position, and open groups are kept when you leave for the staging tray and return.

### Calculate an amount

Tap an amount to open the number pad. Use **+**, **−**, **×**, and **÷** to enter a calculation: `11 + 14` previews **25**, and **Log Now**, **To Tray**, or **Done** uses that result with the selected unit. Multiplication and division run before addition and subtraction (`2 + 3 × 4` gives **14**).

You can also type or paste calculations using `+`, `-`, `*`, and `/`. Decimals work in each number. Tap backspace to correct the last character, or hold it to clear everything. Finish an incomplete calculation or correct an error such as division by zero before submitting. Time entry keeps its AM/PM controls.

### Add a restaurant dish or recipe

Describe the dish, known toppings or ingredients, and your usual portion in **Library draft assistant**. For example: “Giuseppe’s Chicago-style deep dish pizza with pepperoni, sausage, red onions, jalapenos and mushrooms; I usually have two slices.” The assistant can draft rounded nutrition estimates without a package label. Review the portion, values marked ≈, and recipe assumptions before tapping **Save Item**. Two slices are stored as two pieces; one serving of that saved item represents the whole two-slice portion. Ask for a refinement when slice size or toppings change. For exact restaurant nutrition, provide its location or official source so similarly named restaurants are not confused.

### Add a product from photos

1. Open a new food or supplement item and its **Library draft assistant**.
2. Use **Take photo** or select up to four images: the package front, Nutrition/Supplement Facts and ingredients. Rotate or crop each image, or choose **Use whole photo**. Keep serving sizes and complete text visible.
3. Send the photos, with any product name or other details you already know. The assistant reads supported facts, keeps unknown values unknown, and can search for the exact manufacturer product.
4. Review the compact draft card: serving size, calories, nutrients, suggested category, tags and icon. Expand ingredients or additional nutrients for details. A dash means unknown, and ≈ marks an estimate. Check the missing-information message. Send another photo or type the missing details; a partial ingredients photo is not treated as a complete list. You can also finish later.
5. Tap **Edit current draft** to review or change the name, manufacturer, description, serving basis, nutrition, ingredients and supplement facts before saving. Package marketing claims are not a facts panel. If a request fails, use **Retry with the same photos and message**.

Tap the **Tags** field to browse all existing tags in a scrollable list. Tap checkboxes to select several, type to filter, or press Enter / **Add** to create a new tag. Use **Done** to close the list. Assistant suggestions reuse existing categories and tags; you can change these and the icon before saving.

Photos stay on the device where they were attached. The current library draft conversation keeps its photos in memory; save the draft before leaving the editor.

## 4. Staging tray & Quick Log

- Stage several items with quantities, units, and custom values before committing them as logs.
- Pick the log date/time and watch staged vs remaining nutrition against your day targets.
- Use voice or text quick-add inside the tray, create a combo from the current tray, or open chat with the staged items as context.
- When you add from the library with a phrase like “three whole eggs,” the quantity uses that item’s library unit (pcs, g, srv, etc.), not adjectives from the phrase.
- **Quick Log**: type free text and/or attach a photo → AI estimates the macros. Refine with feedback before saving; one-off hidden items can be created automatically.
- After logging, a tally shows the previous values, combined contribution and new totals for affected stats. A tray or combo appears as one update, including mixed food/exercise batches. **Goal adjustments** follows the logged stats so adaptive calorie/macro changes are easy to distinguish from what you logged. Pause or skip the animation; the results remain available, and reduced-motion preferences are respected.

## 5. Adaptive targets & Energy Bank

- Daily calorie targets start from Mifflin–St Jeor BMR using your biometrics.
- After about 14 days of weight history, targets shift from calibrating to **adaptive**, driven by your actual weight trend.
- Logged exercise burn is trusted at 0.8× to stay conservative. You can override calories, macros, and micros manually.
- The calorie widget switches between **Today** and the recent rolling average. **Plans & details** opens the what-if planner, maintenance context and per-day history. The 3–14 day control selects recent completed days for averages and optional guidance; it does not expire historical balances.
- **Full-history allowance** is today's base calorie goal minus the net difference from all available usable prior food days. An earlier overage remains visible across weeks until later logged days below their own base goals balance it. Days at goal keep the balance steady. With a 2,000 kcal goal, yesterday at 3,000 kcal leaves +1,000 in history and a 1,000 kcal accounting allowance today. A negative allowance is an accounting value, not an intake recommendation.
- Daily and recent comparisons show intake versus both the base goal and estimated maintenance. For example, 2,200 kcal against a 2,000 kcal goal and 2,500 kcal estimated maintenance is 200 above goal and 300 below maintenance. These estimates do not predict an exact weight change.
- **Explore your options** compares keeping the current goal, balancing a recent difference sooner, spreading it across 1–365 days (including this day), or entering a finishing total. Suggestions respect the selected 200/350/500 kcal daily adjustment cap on every planned day, already logged intake, the existing calorie floor, protein, explicit fat/carbohydrate minima and calorie limits. Conflicting goals are flagged and withhold suggestions. Entered scenarios outside those bounds are identified as scenarios. A preview does not change the saved goal.
- Plans show both the projected recent balance and the full historical balance. A limited plan may leave a balance; clearing all historical overage is not required. Old overages stay visible without forcing indefinite reductions when recent days are back at goal.
- Daily goals stay unchanged by default. In **Profile → Rolling Goal Balances**, optionally enable adjustments to adaptive calorie goals and choose the recent window, timeframe and daily limit. Fixed calorie goals stay fixed. A partial recent shortfall does not justify suggesting extra intake. Adjustments are recalculated daily, with no promised clearance date.
- Missing food days, skipped entries, unknown calories, unresolved items and days with bank-excluded entries do not create unused allowance. Supplement-only and exercise-only dates are not food-log coverage. Partial history is labeled. Even a logged day may have missing meals; review coverage before interpreting a shortfall.
- Historical base goals are reconstructed with current profile settings and each day's available weight and exercise records. Past profile versions are not stored, so changing a goal can change historical balances. Backdated additions, edits and deletions recalculate later accounting. Exercise is counted once in adaptive goals and does not increase fixed goals.
- **Macros & Nutrients** retains today's actual goals and limits. **Prior logs vs goals** shows nutrient history, but yesterday's extra fat or protein does not reduce today's goal, and low sodium yesterday does not raise today's sodium limit. Today and Remaining use known current intake, including meals excluded from calorie carryover. The recent-average view retains goal-type-aware minimums, maximums and ranges, selected-day markers and usable-day coverage.
- In-app **Help** explains the engine, the burn trust factor, and the BMR floor in detail.

For background on sustainable changes and weight management, see [NIDDK’s eating and physical activity guide](https://www.niddk.nih.gov/health-information/weight-management/adult-overweight-obesity/eating-physical-activity). The rolling balance describes logged intake; it does not predict an exact change in body weight.

## 6. AI chat & Health Coach

- Chat streams replies with markdown and item cards; conversations persist to your account.
- The assistant can use tools to query your library and logs, propose journal additions or corrections, create or update library items, adjust your profile, and manage reminders. Review and apply the proposed action; a chat reply alone does not save it.
- Say “I just had a waffle sandwich” to start a meal log. When similar saved items exist, the assistant asks whether to use those entries or a one-off estimate. Estimated meals show the described portion and assumptions. Tap **Log meal** to save the hidden one-off record and journal entry together; you do not need a new regular library entry.
- For personalized nutrition advice, chat checks saved goals and relevant weight records. It asks about missing goals or a stale weight instead of treating application defaults as personal facts.
- Ask for a progress check-in, or accept an invitation when due. Questions cover progress, goals, nutrition, training, recovery and changed constraints; you can skip questions. Review and apply the completed check-in and any profile changes. Invitations appear inside chat.
- Attach day logs or a saved analysis by calendar date as chat context.
- Open **Stats → Analysis** and explicitly generate a review for the selected period. The AI response and findings appear inline and the period report is saved to your account; weekly/monthly reports use the existing analysis storage. The default review prioritizes nutrition and confirmed weight goals. It receives the calculated metrics, comparisons and logging coverage shown in **Trends & History**, together with your saved goals and constraints. In-app generation uses your configured AI model and credentials.
- Read a saved period report, export it or continue with chat follow-ups using that same period as context. **Coach review** in Trends & History opens Analysis within Stats.
- **Copy coach brief** or select Perplexity, ChatGPT, Google Gemini or a copy-to-another-coach option to use your own external chatbot. The brief is built locally; no AI request is needed to create it. Preview the brief before sharing. Long briefs use clipboard/manual paste when a prefilled URL would be unreliable.
- Voice input works in chat (Groq or OpenAI Whisper).

## 7. Alerts & reminders

- Attach schedules to library items: once, daily, weekdays, weekly, biweekly, or monthly.
- The Alerts view shows Active (today) and Scheduled reminders; log, edit, duplicate, or delete from there.
- Profile wake/sleep alarms and per-domain notification toggles control local notifications.
- On Android, notifications reschedule automatically after a reboot.

## 8. RykerSoft AI unlock

When using app-provided credentials, in-app AI features (Quick Log, AI Architect, chat, coach reviews and cloud voice transcription) require an unlock. Manually configured provider keys remain an alternative. Charts, statistics, exports and portable coach briefs need no unlock or AI request; an external chatbot uses your own account or subscription. All tracking, journaling, library, and reminder features work without an unlock.

1. In the **RykerSoft App Manager**, create or sign in to your RykerSoft account.
2. Have an administrator grant bettertracking pro access to your RykerSoft account through the App Manager.
3. In bettertracking, go to **Profile → API Keys** and sign in with the **same** RykerSoft account.
4. AI keys sync automatically. Use **Refresh keys** if AI features don't light up right away.

Notes:
- Pro access is granted per app to your RykerSoft account; no reusable unlock code is required.
- This RykerSoft sign-in is separate from your bettertracking account (which syncs your data).
- Keys you enter manually under Profile → API Keys take priority over synced keys.

## 9. Profile, keys & preferences

- **Goals & biometrics**: confirmed weight and fitness goals, body-composition goals, and dietary preferences.
- **Your coach profile**: allergies, food preferences, nutrition/training philosophies, training context, practical constraints and coaching style. Edit these directly or ask chat to propose a change. Keep allergies separate from dislikes.
- **Coach check-ins**: enable invitations, set the interval, and review or remove saved check-ins. Record a new body weight in the journal or ask chat to prepare the measurement.
- **Custom targets**: manual calorie/macro/micro overrides and an adaptive-target preview.
- **Rolling Goal Balances**: show/hide history, recent average window, planning timeframe, daily adjustment limit and opt-in calorie pacing.
- **API Keys**: RykerSoft AI unlock sign-in, plus optional manual Gemini / Groq / OpenAI keys and model picks.
- **Transcription provider**: Groq (default) or OpenAI.
- **Library tap** preference: stage to tray or open details.

## 10. Export & import

- Multi-select journal logs → export **CSV**, **Markdown**, or copy to clipboard.
- In **Stats → Trends & History**, use **Export data** for daily metrics in CSV. **Stats → Analysis** offers report exports and calculated coach briefs for the selected period. CSV blanks mean missing values; zero remains a recorded zero.
- Export library items (including combo dependencies) as a JSON file; import that JSON on another device or account.

## 11. Health analysis

Start on **Home**: choose **Stats → Trends & History** for statistics and log items. Stats opens Week the first time and keeps your selected range when you return. Choose **Analysis** for the AI review of those same dates. For a monthly review, select Month in Stats, then switch between Trends & History and Analysis. Your existing domain, search and tag filters remain available on the log list alongside the charts. **Coach review** also opens Analysis for the selected period. **Log** returns to the selected day’s dashboard and daily entries.

Only Stats has the period range control. It supports **Day**, **Week**, **Month**, **Year**, **All time** and **Custom**, with arrows to navigate periods, and stays shared between Trends & History and Analysis. Weeks start on Monday; custom start/end dates are inclusive. Reports cover up to **3,660 days** per range. For older history, use years or smaller custom ranges; an oversized range shows a message instead of silently omitting records.

In **Trends & History**, use the phone **Explore** selector to choose among six statistics sections. Wider screens show the same sections as navigation buttons:

- **Overview:** start with nutrition and weight progress: calorie, protein, fiber and weight comparisons, plus a dedicated recorded weight trend when weight measurements are available. Choose a numeric metric to inspect its interactive trend, recorded total or latest value, observed-day average and range. Turn **Compare previous period** on or off. **Your logging picture** shows daily and domain coverage; inspect a date and choose **Open journal** to review its records.
- **Nutrition:** explore all 16 nutrients, macro composition, hydration and food-log timing. Current aim, minimum, maximum and range rules appear as references, with the number of recorded days that meet them. **What contributes most** ranks foods and supplements by the selected nutrient.
- **Training & body:** compare exercise time, distance, repetitions, sets, sessions and estimated burn with weight, other measurements and exercise-specific numeric fields. Compatible units are converted; rest intervals are excluded from exercise totals. Daily body measurements use the latest compatible reading.
- **Habits & journal:** explore numeric ratings and habits, hydration, supplement/lifestyle frequency, categorical or boolean distributions and dated notes. Different item scales stay separate.
- **Relationships:** choose two numeric metrics and compare the same day, the second metric on the next day or two days later. The scatter plot shows paired observations and a descriptive correlation only when at least eight complete date pairs have variation in both metrics. Suggested cross-domain pairs offer questions to investigate. These diary associations cannot establish a cause or predict an outcome.
- **Food explorer:** compare recorded amounts, saved servings, per 100 calories or known weights; filter nutrients, use favorites, stage a food or export the food report's CSV.

**Stats → Analysis** contains inline AI generation, saved period reports and findings, exports and chat follow-ups. The main review starts with nutrition and your confirmed weight goals, and follows the same period selected in the statistics view. See section 6 for provider and sharing details.

Charts, calculations and data exports work without AI. They use records synchronized to this device, including saved nutrient amounts. Missing days and unknown values remain unknown; averages use days with complete recorded values and show their denominators. A recorded day does not prove that every meal or activity was captured. In-progress calendar periods compare equal elapsed portions of the preceding period, so coverage still matters when interpreting a change.

Statistics use **current goals as references**, rather than reconstructing historical profile settings. An aim uses a displayed ±10% band; minimums, maximums and ranges keep their literal boundaries. Adaptive references require confirmed goals and a recent recorded weight. Intake minus logged exercise is not an energy deficit or a prediction of weight change. Expand **How to read this report** for coverage and interpretation notes.

## Nutrition assistant and reports (1.2.0)

Use **Reports** in the journal header, **Stats → Trends & History → Food explorer**, or **Food finder** in the library to compare foods without AI. Choose a preset, date range and nutrient limits. You can compare recorded amounts, saved servings, per 100 calories or known weights; save favorites, stage a food or export CSV. Missing nutrition appears as unknown.

In chat, ask “Help me meet my protein goal using my library” or “What foods do I eat most?” Chat retrieves the relevant totals and records as needed. It offers ideas outside your library when useful. Use **Web research: Auto / Off / On** to control external evidence searches.

Attach a label or describe a new food, supplement, exercise or other item. Review the draft serving basis, nutrition and evidence before applying it. Proposed changes are not saved until you apply them. Images are retained on the device where they were attached; extracted drafts and source links sync with chat.

Profile now supports explicit nutrient aims, minimums, maximums, ranges and excluded foods. Library favorites are different from foods you consume frequently.

For Linux, mark the AppImage executable before launching, or install the Debian package on a compatible Debian/Ubuntu system. Download links are in the app description.

### If a Library Assistant update cannot be displayed

Invalid updates are rejected with a notice in the chat. The existing draft remains available for review. If the editor encounters an unexpected display error, close the assistant panel and choose **Restore previous draft**. The conversation and attached photos remain available, so you can continue with a correction or another photo. **Return to library** closes the unfinished item without saving it. An unexpected app-wide display error shows **Reload application** instead of a blank screen; saved data remains available, but unsaved edits may need to be entered again.

## 12. Index Assistant connection

On Android, open **Profile → Preferences → Index Assistant**. Read access and add/update access are independent and default off. Only the verified Index Assistant app can use this connection; the content belongs to the current Better Tracking account. Profile, health goals, credentials and sign-in data stay inside Better Tracking.

Index can search/read library items and dated journal entries, prepare durable staging items from existing library entries, and save validated edits using revisions and confirmed atomic receipts. Review the actual tray before logging. Open editors, the visible tray, sign-out, account changes, revoked access or expired requests can require action in Better Tracking. Ordinary manual tray rows are readable through the connection but remain local and volatile; save or log unsaved selections before restarting or updating the app. Reading does not save, log or duplicate them.
