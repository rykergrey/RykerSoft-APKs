# Release notes

## v1.14.0 — October 26, 2026

- Keep calorie overages in full-history accounting until subsequent usable logged days balance them, without Monday resets or recent-window expiry
- Distinguish daily and recent intake versus base goals and estimated maintenance
- Keep daily nutrient goals and limits intact; show nutrient history without borrowing or repaying daily nutrition
- Use recent logs for optional calorie guidance and 1–365 day plan previews, with daily caps, nutrient-aware floors, calorie maxima and conflict notices
- Recalculate later allowances after backdated edits; do not turn missing, skipped, excluded or incomplete days into unused allowance
- Include the optional Android Index Assistant library, journal and staging connection from the intervening local versions
- Android versionCode 30, Windows x64 portable, Linux x64 AppImage and Debian packages. See [release notes](releases/1.14.0.md).

## v1.13.1 — October 20, 2026

- Index tray reads now include ordinary local manual selections, clearly identified as volatile and read only through the bridge.
- Empty-query tray listing covers all actual rows; filtered results disclose unfiltered counts.
- Manual reads preserve quantity, date and custom values without saving, logging or duplicating data. See [release notes](releases/1.13.1.md).

## v1.13.0 — October 20, 2026

- Index Assistant can prepare items in the real durable staging tray through `staging_item`, using an existing library item and its observed revision.
- Stage quantity/unit/date/custom values survive restart; owner changes keep tray data scoped correctly.
- Native tray edits compare revisions, and logging atomically consumes selected stages exactly once.
- Library discovery exposes supported units for the selected item. See [release notes](releases/1.13.0.md).

## v1.12.1 — October 20, 2026

- Wake the already loaded Android runtime when an Index bridge request is queued, without launching another activity or WebView.
- Coalesce native wake events into one serialized drain, finish bounded queue pages without depending on background timers, and retain interval recovery.
- Renew readiness on a native wake; keep owner, access, expiry, cancellation and canonical-save checks in place. Remove listeners on runtime disposal.
- Android versionCode 27. See [release notes](releases/1.12.1.md).

## v1.12.0 — October 20, 2026

- Optional Android connection for the verified Index Assistant, with separate default-off read and write controls in Profile → Preferences.
- Search/read library items and dated journal entries with exact IDs, revisions, bounded pages and explicit cache freshness.
- Create/update validated library and journal content with stale-edit checks, deterministic identity, atomic Firestore save receipts and interrupted-operation reconciliation.
- Keep Profile, health goals, provider credentials and sign-in data inside Better Tracking. Preserve rich content and fields outside requested edits.
- Android versionCode 26. Local verification and artifact details are recorded in [release notes](releases/1.12.0.md); installation/distribution are separate steps.

## v1.11.2 — October 14, 2026

- Replace Home’s D/W/M controls with Log/Stats so daily logging and period statistics have clear destinations
- Keep the selected day’s dashboard and daily entries in Log; start Stats on Week the first time and retain its selected range when returning
- Use one Day/Week/Month/Year/All time/Custom range control for both Stats tabs, keeping Trends & History and Analysis on the same dates
- Retain charts, calculations, relationships, food exploration and selected-period logs in Trends & History, with inline AI reviews and saved reports in Analysis
- Release Android (versionCode 25), Windows x64 portable, Linux x64 AppImage and Debian packages

## v1.11.1 — October 14, 2026

- Place all programmatic charts, metrics, relationships and food exploration in Trends & History alongside the existing filtered log list
- Use Home's W/M controls for week/month statistics, then open the separate Analysis tab for AI review of the same period
- Generate AI reviews inline, save weekly/monthly reports and findings in the existing account storage, and support exports and same-period chat follow-ups
- Put nutrition and weight progress first, with a dedicated recorded weight trend and calorie/protein/fiber/weight comparisons in the existing app style
- Focus default AI reviews on nutrition and confirmed weight goals while retaining full training, habits and relationships
- Release Android (versionCode 24), Windows x64 portable, Linux x64 AppImage and Debian packages

## v1.11.0 — October 13, 2026

- Replace the Analysis tab with a health dashboard spanning food, supplements, exercise, measurements, lifestyle and notes
- Add day, Monday-based week, calendar month/year, all-time and inclusive custom reports, with previous-period comparisons and a 3,660-day range limit
- Explore interactive numeric trends, all 16 nutrients and current goal rules, food contributors, training quantities, body measurements, habit distributions and dated notes
- Inspect daily/domain coverage and return to a selected journal day; missing data stays unknown rather than becoming zero
- Compare same-day, next-day and two-days-later relationships with scatter plots and descriptive correlations when at least eight complete date pairs vary
- Ground explicit AI coach reviews in the same calculated reports, saved goals and logging coverage; offer focused reviews, external coach briefs and CSV / Markdown exports
- Use a compact Explore selector on phones and section navigation on wider screens
- Release Android (versionCode 23), Windows x64 portable, Linux x64 AppImage and Debian packages

## v1.10.1
- Separate adaptive calorie and macro goal changes into a Goal adjustments section after the logged stats
- Use Change in the tally so goal and budget adjustments are clearer
- Verify exercise affects burned energy and activity without adding consumed nutrients, including mixed food/exercise batches

## v1.10.0
- Show an animated tally after logging, with before values, the combined contribution, and new totals for affected dashboard stats
- Treat a whole staging tray or combo as one update, including food and exercise logged together
- Smoothly fade the complete tray into the tally without removing its rows one by one or changing totals during the handoff
- Support direct library logs, Quick Log, journal measurements, and confirmed coach meal/log actions
- Include adaptive goals, remaining calories, tracked nutrients, measurements, scheduled doses and habit progress when affected
- Add pause, skip, persistent results, reduced motion, and back-button support
- Save tray batches and one-off meals atomically, with local offline acceptance and failed-save recovery

## v1.9.0
- Add a saved coach profile for confirmed goals, allergies, food preferences, coaching philosophies, training context and practical constraints
- Use current profile facts and dated weight for personalized advice, with questions when relevant information is missing or stale
- Add conversational progress check-ins with editable cadence and saved review history
- Propose journal, library, profile and reminder updates through reviewable chat actions
- Recognize natural meal reports and ask whether to use a similar saved library item or a one-off estimate
- Log estimated vacation and restaurant meals in one step without creating regular library entries
- Improve restaurant library drafts: readable portions, estimated nutrition and assumptions without package-label requirements
- Normalize review notes, preserve valid drafts on failed corrections, and remove stale errors and repeated retry narration
- Prevent cached tool results from skipping repeated draft updates

## v1.8.0
- Calculate amounts with addition, subtraction, multiplication, and division directly in the number pad
- Preview results live and use the calculated amount with Log Now, To Tray, and Done
- Keep familiar digit positions with a thumb-friendly operator column and compact phone layout
- Support typed and pasted calculations, decimal operands, and standard operator precedence
- Block incomplete calculations and division by zero while preserving units, time entry, and hold-to-clear

## v1.7.1
- Let a library long press open item options without adding the item to the tray
- Expand combo alerts into their individual components for logging or staging
- Mark combo alerts complete when all constituent items have been logged, including older logs without combo metadata

## v1.7.0
- Add mobile tap glows, independent light trails to the tray, and arrival pulses
- Show persistent tray selection checks across multiple library items, including combos
- Long-press selects and expands without duplicating items; cancel holds safely during scrolling
- Add visual feedback to navigation and library controls, with reduced-motion support
- Remove vibration from library, tray navigation, and number-pad interactions

## v1.6.0
- Show parsed library items as compact nutrition draft cards with serving size, nutrient values, category, tags and icon
- Keep unknown values and partial-label notices visible; expand ingredients, additional nutrients and lengthy assistant notes as needed
- Suggest organization using existing categories/tags and supported icons, preserving current selections during photo follow-ups
- Browse every tag in a scrollable multi-select picker, with typed filtering, keyboard navigation and new-tag entry
- Preserve existing category and tag capitalization on save
- Keep the beginning of new results visible within the chat without moving the surrounding editor

## v1.5.1
- Reject malformed assistant custom attributes before they can crash the library item editor
- Show rejected-update notices in chat while keeping the existing draft available
- Recover from an editor rendering failure without losing the assistant conversation or attached photos, with an option to restore the previous draft
- Keep automatic scrolling inside the conversation and provide a reload screen for unexpected app rendering errors
- Added React integration tests and verified cropped photo submission, multi-step tool results, recovery, and saving in mobile and desktop browsers

## v1.5.0
- Fixed the repeated Gemini HTTP 400 error by preserving tool declarations and instructions on every chat request
- Rebuilt photo cropping with original-image resolution, touch controls, rotation, whole-photo attachment, camera capture, and up to four photos per message
- Added structured food and supplement label reading that distinguishes facts panels from marketing and checks units and serving columns
- Preserved partial ingredients, manufacturer details, supplement actives, unknown nutrients and photo evidence across draft follow-ups
- Added explicit requests for missing details, typed corrections, and retry with the same photos and message
- Updated signed Android, Windows portable, Linux AppImage and Debian packages

## v1.4.1
- Moved rolling calorie progress into a Today / rolling-average switch on the calorie widget
- Replaced the always-visible full-width planner with a compact period summary showing average intake, combined balance, coverage, and the selected day
- Moved what-if plans, maintenance context, and daily history into an on-demand Plans & details modal
- Kept partial-window warnings prominent and avoided treating incomplete shortfalls as success

## v1.4.0
- Added a Today / rolling-average switch to the Macros & Nutrients widget so period trends are useful before the window is complete
- Added fixed goal, minimum, limit, and range lines, plus a cyan selected-day marker and bright overage segments
- Shows average variance, cumulative period variance, usable-day coverage, and the count of individual days outside each goal
- Treats nutrient goals by meaning: protein minimums reward adequate intake, maximums expose overages, ranges keep both boundaries, and neutral aims avoid false deficiency warnings
- Keeps incomplete, unknown, unresolved, and supplement-only days from creating misleading nutrient averages

## v1.3.0
- Redesigned Rolling Calorie Balance that surfaces overages from the first usable day instead of waiting for a full week
- Daily what-if planning for keeping the current goal, balancing sooner, spreading a difference across days, or entering a custom intake
- Clear separation between calorie-goal variance and estimated maintenance, with partial-log and incomplete-data warnings
- Per-day rolling history, reconstructed historical goals, current-day projections, safe calorie floors, and opt-in automatic adjustments
- Improved assistant alerts, nutrition reporting periods, reminder reliability, and library data handling
- Android, Windows x64 portable, Linux x64 AppImage, and Debian release builds

## v1.2.0
- Personalized nutrition chat retrieves current intake, goals, preferences and library foods on demand
- Optional Auto / Off / On web research with cited sources
- Nutrition reports without AI: nutrient filters, food rankings, consumption patterns, charts and CSV export
- Text and image library drafts with evidence labels and reliable reviewed changes
- Explicit nutrient minimums, maximums, ranges, favorites and food exclusions
- Bounded chat context, improved historical nutrition calculations and safer serving conversions
- Windows x64 portable and Linux x64 AppImage / Debian builds

## v1.1.5
- Replace app-funded day/week/month Health Coach generation with portable prompts for the user's own chatbot
- Default to Perplexity, with ChatGPT, Google Gemini, and copy-to-any-chatbot options
- Remove automatic background monthly AI reports while preserving access to previously saved reports
- Include chronological logs, notes, nutrients, custom values, recipe portions, targets, and adaptive context in each coaching prompt

## v1.1.4
- Restore **Continue with Google** in Profile settings and remove obsolete password/create-account controls
- Bundle the canonical RykerSoft Hub Firebase configuration so release builds no longer depend on an unpublished local environment file
- Use Android Credential Manager with the Hub web client ID, preserving the existing release signing identity and Pro entitlements

## v1.1.3
- Restore a complete, source-backed release after an unreleased direct-device build advanced the Android version
- Preserve the trusted Android signer and provide a monotonic update path without removing local app data
- Rebuild the current stable application bundle and synchronize RykerSoft hub metadata

## v1.1.1
- Add-from-library (staging tray and Library magic search) now uses each item’s library-defined unit (pcs, g, srv, etc.) instead of adjectives from the phrase (e.g. “three whole eggs” → 3 pcs)
- Library tab keeps search text, scroll position, and expanded groups when you switch to the staging tray and back

## v1.1.0
- RykerSoft AI unlock: sign in with your RykerSoft account under **Profile → API Keys** to sync Gemini and Groq keys after unlocking bettertracking in the RykerSoft App Manager
- AI features (Quick Log, AI Architect, chat, Coach Analysis, transcription) are now unlock-gated; manually entered keys still work and take priority
- All tracking, journal, library, and reminder features remain fully available without the unlock

## v1.0.2
- Release-signed APK for the RykerSoft hub
- Display name changed from bettertrack.ing to bettertracking

## v1.0.1
- First RykerSoft hub release (`com.rykersoft.bettertracking`)
