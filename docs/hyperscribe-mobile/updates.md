# 2.17.0 — Custom command grid and speech actions

- Open the floating menu with an inward swipe or hold to reveal a compact category grid. Selecting a category opens its tools without starting recording or running an action. Capture and Actions use compact grids; active recording controls remain available across modules.
- Add, duplicate, rename, reorder, hide, and remove Capture, Actions, Inbox, and Listen tabs. Choose capture profiles and import shortcuts, all matching actions or an ordered selection, Action categories/tags, and live saved Inbox views with optional Inbox tags. Multiple tabs can use the same module with different content.
- Keep matching pinned items and recent-item limits inside each Inbox tab's filters. Saved-view tabs follow later view edits; a removed view shows an empty state until another view is chosen.
- Replace separate default speech parameters with a reusable default TTS action. Existing effective provider, voice, model, and playback settings migrate to a **Default speech** action, and existing per-chat presets become equivalent speech actions.
- Select a speech action in Chat, Inbox, text viewers/editors, Listen, and spoken reminders. **Default** follows the current default action; another choice overrides it for that conversation or use. Compatible action editors can mark an action **Use as default TTS action**.
- Run a speech workflow on the complete input before splitting it for playback. A copied article can be summarized once and then read aloud; nested multi-step workflows and multiple speech outputs retain their execution order.
- Keep explicit saved-audio replay available separately from generating speech with the current action. Invalid or missing speech actions report a useful error, and actions referenced by the default, Chat, or spoken reminders are protected from deletion.

# 2.16.1 — Desktop action compatibility

- Retain Desktop Computer actions as Desktop-only content through Sync and JSON import/export, with their original operation and automatic-trigger metadata. Android shows **Requires Desktop** and rejects direct or nested execution before provider calls.
- Skip unavailable actions in Android automatic transcription and clipboard delivery, including the legacy configured Auto Action, so synced Desktop triggers cannot interrupt local capture processing.
- Recheck the signed-in account before updating cloud-tag status after a server read.
- Include the conversational-note and Sync improvements prepared in 2.16.0 below. Version 2.16.1/code 45 supersedes that preparation build.

# 2.16.0 — Conversational notes and reliable Sync preparation

- Include Inbox text in knowledge by default. **Only include tagged items** remains available in Chat and Settings; explicit exclusions and retention still apply. Scope changes rebuild the derived semantic index without moving or retagging notes.
- Enable related-idea search for missing/new preferences while preserving existing opt-outs; preserve both knowledge settings in portable backups.
- Interpret natural note/list requests with bounded recent conversation. Search, refine, and read source entries before answering; append new list items without replacing existing text and propose full replacements through review.
- Keep operation receipts, source revision checks, cancellation, and source citations. Saved content cannot change a recall request into a write.
- Route natural note/list commands and short write follow-ups from Index through the shared Chat assistant.
- Match Desktop's all-tagged Inbox policy, keep Inbox and Action tag catalogs separate, read Desktop Chat payloads, and optionally sync transcription text replacement rules.
- Report Sync completion only after server confirmation and saved local acknowledgments. Show upload/download counts and the latest successful check; Pro access and another device's delivery remain separate states.
- Protect in-flight local and remote edits, slow device clocks, deletion markers, and device-only exclusions. Preserve compatible Desktop history/metadata and this device's attachment handles while excluding local paths from uploads.
- Coalesce relevant automatic edits, use incremental server-change checks, retry failed work, and schedule Android background checks subject to network and battery restrictions. Manual Sync now performs a full reconciliation.

# 2.15.0 — Voice reminders and browsable answers

- Understand reminder requests inside longer voice messages from Chat or Index 01. Create an Inbox item with a short task title, the saved spoken transcription, configured auto-tags, and an alert at the requested time.
- Keep the Alerts tab visible for every Inbox item, including items without alerts, so an alert can be added later. Show scheduled alerts there and allow follow-up controls to use the short task title.
- Open saved sources and search results directly from Chat, with consistent result cards and local Inbox navigation.

# 2.14.0 — Browse your knowledge from Chat

- Ask **Search for Batman** for a native search card with expandable, clickable excerpts and **Open in Inbox**. Browse local matches without sending the result list to the AI provider or reading it aloud.
- Search active and archived entries with the same query, scope, aliases, and ordering in Chat and the temporary Inbox search. Page beyond the previous candidate window; refresh if the library changes.
- Preserve the previous Inbox view on exit and suspend its full-library rendering observer while browsing the temporary search.
- Let explicit collection questions gather up to forty matching excerpts in one bounded provider request. Explain partial coverage rather than implying an exhaustive review of the library or of inferred preferences.
- Exclude expired entries from explicit librarian counts before cleanup and recheck result availability when opening an entry.

# 2.13.3 — Read-aloud-friendly sources

- Use source numbers, dates, and brief descriptions in new replies instead of opaque source IDs.
- Keep exact source IDs and revision metadata in Saved sources for entry navigation and reviewed edits.
- Filter known IDs before displaying or speaking streamed answers, including IDs split across provider chunks. Source reading and library summaries also use readable labels.

# 2.13.2 — Chat commands and dated project updates

- Create or extend text replacement rules with “Whenever I say X, I mean Y.” Check existing mappings, preserve unrelated settings, avoid duplicates, and leave conflicts unchanged.
- Protect settings commands against replay after interruption or edits to past messages.
- For current-status questions, reserve recent topic matches alongside relevant notes and instruct Chat to distinguish last known status, capture dates, event dates, plans, and conflicting updates.
- Give conversational Chat an accurate list of supported app operations and require application execution before claiming success.

# 2.13.1 — Names and search aliases

- Use matching enabled text replacement rules as bidirectional knowledge-search aliases, so alternate spellings can find older saved entries without rewriting them or rebuilding the index.
- Prioritize alias matches before broad generic search terms; keyword search supports the feature without a semantic model download.
- Tell Chat which configured aliases matched, and strengthen guidance against claiming a person or topic is absent merely because retrieval found no match.

# 2.13.0 — My knowledge in Chat

- Ground Chat in saved text and transcripts, including archived entries, using bounded local keyword retrieval and optional on-device semantic search.
- Open **My knowledge** in Chat to control automatic retrieval and related-idea search, see indexing progress, and rebuild the index. Controls apply immediately and preserve your draft.
- Expand **Saved sources** beneath a reply to see dated previews, including all eight retrieved sources. Open the relevant passage, read onward, or open the entry and its history. Changed or unavailable sources are identified.
- Review entry replacements with current and proposed text, **Apply change**, **Cancel change**, and **Review later**. Edits check the source revision, retain history, and commit the entry and proposal status together.
- Use **Available to Chat** in capture contents & history to exclude an entry from future retrieval. Search access and retention are explained separately.
- Keep generated library answers in Chat and index new or edited entries through resumable background work. The optional 23 MB English model runs on-device; selected context still goes to the configured chat provider.

# 2.12.1 — Faster recording-to-clipboard delivery

- Speed up audio compression after stopping a recording.
- Reuse captured audio for experimental 2× transcription, avoiding redundant decoding while preserving archive-based fallback.
- Prioritize new transcription requests and copy final text before optional speech and tagging.
- Add stage timings for diagnosing recording-to-clipboard latency.

# 2.12.0 — Global voice chat

- Choose one Chat thread for Global voice chat. Newly captured voice transcripts from the phone microphone, floating control, and Index 01 are sent to that thread automatically; the reply is read aloud using its Chat voice even when the phone UI is closed.
- Toggle the mode in Chat, from the Chat navigation button’s drag menu, or from the floating control’s Input menu. A green outline marks the floating button and central microphone; the Chat navigation icon also turns green.
- Pin the chosen voice thread at the top of Chat’s thread picker and assign a different thread from its Chat menu. Browsing another thread on the watch does not change the global target while the mode is on.
- Browse recent Chat threads on the Pebble watch and read full conversations newest first. The bundled watch app is now 0.3.0 and should be installed through Settings → Readiness → Set up Index ring & Pebble watch.
- Only new voice captures are automatically sent. Text and clipboard Inbox entries keep their existing behavior. Interrupted background delivery reuses the same saved Chat request and response.

# 2.11.0 — Multiple alerts on a unified Inbox item

- Display alerts attached to either a recording or any of its transcripts on the same visible Inbox card and Alerts tab. Notification links open that same item and clear filters that could hide it.
- Add several independent one-time or recurring alerts to one item. **Add alert** creates a new alert; **Edit alert → Update alert** changes the selected alert. Saved alerts appear in a numbered list, with a confirmation after saving.
- Keep enabled recurring alerts in Upcoming alerts while due as well as between occurrences. Cards show recurrence, the nearest countdown, and additional alert summaries.
- Dismiss, snooze, edit, stop, or remove alerts individually. Preserve all remaining alerts, tags, exports, backups, and the underlying capture.
- Migrate the existing alert table without losing schedules. Text edits preserve alert changes made since the editor opened.

# 2.10.2 — Recurring alerts in the Inbox

- Keep the next occurrence active after completing or dismissing a recurring alert. Separate **Skip next alert** from **Stop repeating**.
- Show repeat interval, next alert, and last alert together on Inbox cards. Update quick schedule dialogs from live schedule state.
- Restore series disabled by the previous Complete action without restoring explicitly cancelled schedules. Preserve last-alert information when stopping a schedule.
- Add **Recurring** and **Past** saved-view filters; include future snoozed alerts in **Upcoming**.

# 2.10.0 — Inbox alarms, timers, and reminders

- Attach a reminder, countdown timer, or alarm to an existing Inbox item; preserve its text, attachments, and organization.
- Create and control schedules from typed Chat or Index 01, with clarification for ambiguous targets and durable retry protection.
- Add date/time pickers, duration entry, live countdowns, pause/resume, restart, snooze, dismiss, complete, cancel, and remove controls.
- Filter saved views by schedule type and status, and sort by alert time. Removing a schedule also clears its Reminder tag.
- Use Android exact alarms when permitted, retain WorkManager recovery, and expose notification/exact-access settings. Ringing alerts have snooze and dismiss actions.
- Preserve existing reminders through database migration and retain new schedule metadata in backups/exports.

See [Inbox schedules](inbox-schedules.md) for usage and delivery behavior.

# 2.9.7 — One Hyperscribe controls notification

- Combine recording controls, floating button status, and the Index ring receiver into one notification.
- Keep Pause/Resume, Stop, and Cancel available while recording; restore your shortcuts afterward.
- Keep the shared card when either service stops and the other remains active. The persistent-controls setting keeps shortcuts available when all services are idle.
- Coalesce rapid updates so Android does not drop the newest controls or status. Recording failures remain visible with details.
- Android’s separate display-over-other-apps notice and notifications belonging to the Pebble app remain separate.
- Preserve the Pebble/Index integration, speech improvements, and editable Actions input delivered in 2.9.0–2.9.6. No watch reinstall or database migration is needed for this notification change.

# 2.9.6 — Editable Actions input

- Show a scrollable input panel above the Actions library, with a floating button to expand or collapse it.
- Bring Inbox selections into the panel automatically as names and snippets. Add or remove items, or import their contents with Edit text.
- Keep a separate editable working copy so completed actions never replace the panel or change saved source items. Load current clipboard explicitly to choose new clipboard input.
- Save generated text to Inbox and copy it to the clipboard. Tap the completion message to open the result in Preview, with Write available for editing.
- Keep the input, action list, and completion message usable with the keyboard open.

# 2.9.5 — Plain-text watch replies

- Convert Markdown into readable text before sending watch pages or building mirrored notification previews. Chat keeps the original formatted reply.
- Keep headings, emphasis, link labels, list order, code and Unicode text; turn tables into labeled rows for the narrow display.
- Preserve the original saved-message identity for Read with TTS, and retain the single-display routing introduced in 2.9.4.
- Compatible with watch app 0.2.0; no watch reinstall or database migration is needed.

# 2.9.4 — One watch display per Index reply

- Wait for the Hyperscribe watch app to acknowledge the exact response before posting its phone notification.
- Keep confirmed replies' phone notifications local to the phone, preventing the normal Pebble mirror from covering the custom response display.
- Use a standard mirrorable notification if custom delivery is unavailable, fails or is unconfirmed; preserve the notification's Chat link and TTS actions.
- Preserve saved responses, watch pagination, existing Chat notifications, and database schema 12. No watch app reinstall is needed.

# 2.9.3 — Speech stays with its source

- Reading an Inbox note saves reusable speech on that note without creating another Inbox card. Replays use its saved voice and cached audio; edits invalidate the old rendition.
- Chat/watch read-aloud no longer creates Inbox audio entries. Reading unsaved drafts or a multi-item selection also leaves the Inbox unchanged.
- Text filtering renders text and voice transcripts as text cards, excluding generated TTS entries and attachment filenames. Audio filtering retains recordings and existing standalone generated audio.
- Pull down on the view tab strip, or tap its expand button, to reveal a scrollable, wrapping picker. Selecting a view collapses it. Emoji and emoji-only view names are supported.
- Existing standalone speech history is retained. No speculative matching or removal of older recordings is performed.

# 2.9.2 — Watch controls for Chat speech

- Add Read with TTS and Stop reading to Chat notification actions and the Pebble watch app's Select menu.
- Reuse Chat's saved voice preset, preprocessing, segmented playback, cache and history while a foreground audio service keeps speech running with the phone locked.
- Pin actions to the exact reply and suppress duplicate watch commands; old Stop actions cannot interrupt a newer reading.
- Preserve scroll and page navigation, existing ring conversations, and database schema 12.

# 2.9.1 — Connected ring conversations

- Continue a pending ring reminder in Chat when the next recording supplies its time. New requests start separate conversations; clear references and short acknowledgments continue recent threads.
- Keep raw ring recordings, clarification questions, and conversational replies in Chat. Save only the actual note, reminder, or librarian answer to Inbox; preserve existing Inbox entries.
- Show Index origin, original-audio playback, and queued/failed recordings in Chat. Open completed conversations from ring setup.
- Process recordings in durable arrival order and preserve conversation affinity across retries. Deleting an original Chat request cancels its queued capture.
- Preserve existing text replacements, automatic tags, reminder scheduling, watch responses, and database schema 12.

# 2.9.0 — Index capture, Chat assistant, and Pebble display

- Receive Index audio/transcripts through an authenticated webhook on the same phone; save original input before processing and retain pending work across restarts.
- Use the shared Chat assistant for notes, time-aware reminders, and sourced Inbox questions. Preserve text replacements and programmatic tagging, supplemented by bounded semantic tag suggestions.
- Prevent duplicate notes and reminders with stable request IDs and durable receipts. Keep raw speech separate from normalized commands and generated answers.
- Add the Pebble & Index setup screen, receiver status, capture history and retry controls, plus a bundled watch app for Pebble 2 Duo and Time 2.
- Persist the latest watch response, paginate long answers, and report display only after the watch confirms it.
- Preserve deployed 2.8.3 features and database schema 12. See [setup instructions and known delivery limits](pebble-index-setup.md).

# 2.8.3 — Floating TTS playlist and compact controls

- Add a configurable TTS tab to the floating menu, connected to the same segmented speech player as the main app.
- Keep play/pause, stop, previous/next, current-segment time and seeking above the scrolling playlist. Tap any segment to play it; generated, waiting, paused and failed states update live.
- Continue playback when the menu closes or another app is foregrounded. Stop cancels queued speech while retaining the current playlist for replay without regenerating cached sections.
- Increase the default menu to 380 × 640 dp (clamped to the screen), with compact typography, tighter rows, squared panels and cyan selection accents. Preserve custom menu dimensions and tab preferences.

# 2.8.2 — Compact Inbox and action result tags

- Remove redundant per-card dates and generic recording-type labels from the date-grouped Inbox.
- Consolidate cleanup and retention information into one compact, clickable hourglass line above each item's user tags.
- Replace layout-shifting processing banners with an animated, color-cycling **HYPERSCRIBING** state in the fixed app header, including cancellation for supported work.
- Move saved-view creation into the view strip's three-dot menu and add saved-tab reordering while keeping All fixed at the far left.
- Let every action assign separate Inbox result tags to generated items, with Inbox-tag creation and retention controls directly in the action editor.
- Preserve Inbox result tags across local persistence, desktop JSON import/export, chat proposals, custom actions, floating actions, automatic actions, and post-transcription workflows.

# 2.8.1 — Floating input and Inbox controls

- Match the floating tabs to right-edge use: Input nearest the button, then Actions and Inbox. Short swipes select each tab directly, with no repeated first step; custom tab order is respected.
- Rename the standard Recording tab to Input and show recording profiles above import shortcuts.
- Give floating Inbox previews the full width. Long-press an item for Edit and Pin/Unpin; pinned items update live at the top.
- Keep pins and Pin tags consistent for transcripts, recordings, and Inbox metadata.

# 2.8.0 — Recording workflows and a cleaner workspace

- Add every action type to navigation menus, with direct type filtering on the Actions tab.
- Keep automatic execution in individual action editors and remove the Auto Action toolbar button.
- Separate action and Inbox tag catalogs, with action-tag creation, editing, assignment, and migration of existing assignments.
- Use the tag color wheel for action categories and a compact toolbar picker for clipboard or ordered Inbox input.

- Add stop recording profiles with transcription, provider selection, ordered action steps, optional automatic actions, and final clipboard delivery.
- Link capture profiles to stop profiles and choose a default capture profile; every stop profile is available while recording in the floating menu and in-app stop menus.
- Move Recording button tap behavior out of Transcription into Stop recording profiles. Migrate the previous tap choice and Auto Action into stop-profile defaults. Auto-transcribe now describes imported audio.
- Persist the resolved stop plan with each recording and checkpoint completed action steps for recovery. Audio-only stops never enqueue automatic transcription.
- Add configurable Recording, Actions, and Inbox tabs plus custom action tabs. Support tab order, names, visibility, opening tab, remembered tab, top/bottom placement, selected action order, import shortcuts, Inbox limits, and menu dimensions.
- Include workflow and floating-menu preferences in portable backups and add a non-destructive database migration for recording plans.

## Clearer Inbox

- Hide the text editor's tags and bottom Save/Cancel controls while the keyboard is open, without losing the draft or dismissing the Add tag dialog.
- Fix the tag manager's plus button by showing the manager and tag editor as separate full-screen states; return to the manager after saving or cancelling.

- Replace successful Inbox copy toasts with an accent outline flash and animated card movement.
- Preserve the reading position when copying, including the first visible card and cards that move between day groups.
- Scroll newly expanded day groups to the top, with only the trailing space needed for short final groups.

- Collapse Filter Inbox by default; toggle it with the search icon below the view tabs.
- Keep the search icon colored while a query is present, even when the field is hidden.
- Give text and audio previews the full card width, with header actions and a tighter footer.
- Preserve live filtering, saved-view searches, item actions, retention controls, and selection.

# 2.7.0 — Saved Inbox views

- Scrollable tabs above live search show complete view titles.
- Save the current search, tags, filter modes, sorting, and day-group expansion with the compact save button.
- Recall a saved view instantly; long-press All to restore defaults.
- Retains the editor, recording profiles, and retention improvements from 2.6.2.

# Hyperscribe Mobile updates

## v2.6.1

- Preserve all v2.6.0 Inbox, Chat, TTS, Settings and schema-10 behavior.
- Add opt-in experimental 2× transcription with preserved originals, original-time timestamps and normal-speed fallback.
- Add native import normalization, preferred microphone routing, advanced model defaults and portable action availability checks.

## v2.6.0

- Add powerful saved Inbox views with nested tag rules, retention windows, media filters, full date headings, and navigation shortcuts.
- Preserve combined-copy notes and expose ordered Inbox input across Actions, Custom, and Chat.
- Add explicit Chat attachment review, audio transcription/image text extraction choices, and local media snapshots.
- Add responsive TTS section navigation, an upward playlist, cached replay, and safe saved-playlist regeneration.
- Improve Settings search and draft preservation, capture history, and compound attachments.
- Preserve v2.5.1 recording-profile tags and compact editor controls. Upgrade database schema 9 to 10 without replacing the deployed schema-9 migration.

## v2.5.1

- Give recording profiles customizable Inbox tags, defaulting to the profile name, and automatically tag newly captured recordings for profile-based filtering.
- Reclaim Markdown editor space above the keyboard with compact save controls, hidden tag controls, toolbar-based image attachment management, swipeable image previews, and recording controls that appear only when relevant.
- Keep the central recording control compact with frequently used actions and provide a scrollable **All options…** sheet for every recording profile, capture mode, and import method.

## v2.5.0

- Add Markdown-editor recording controls with a fixed right-side record/stop button and separate cancel action, plus automatic tag-panel collapse while the keyboard is visible.
- Add multi-image Inbox import, multi-image OCR insertion, and image attachments on editable text without OCR.
- Make recording profiles editable and extensible, with custom sample rate, channels, encoding, bitrate, retention, noise suppression, echo cancellation, and automatic gain control.
- Add per-profile audio retention and per-tag text/audio retention overrides. The most protective matching tag policy wins, pinned content remains protected, and the Inbox shows expiry status and can sort by retention date.
- Integrate attached Inbox context into Chat as a compact badged control beside the action stack, with an ordered dialog for reviewing and removing items without crowding the composer.
- Improve cross-device sync with case-insensitive tag identity, cloud-to-local tag aliasing, clearer item counts, and explicit per-item Inbox sync controls.

## v2.4.2

- Add automatic transcription replacement rules with one canonical result and unlimited spelling or phrase variants.
- Apply replacements before transcript storage, clipboard delivery, Chat routing, tagging, and automatic actions, with retry-safe background processing.
- Support dynamic date and time tokens, per-rule enable controls, and portable backup and restore.

## v2.4.1

- Integrate attached Inbox context into Chat as a compact badged control beside the action stack, with an ordered dialog for reviewing and removing items without crowding the composer.

## v2.4.0

- Simplify the Inbox toolbar by removing duplicate labeling and redundant add, pin, and reminder-filter controls; custom capture modes now live in the central recording button's drag-up menu.
- Make Pin and Reminder built-in behavior tags. Existing pins migrate automatically, scheduled items receive Reminder automatically, and both remain available for ordinary assignment, filtering, saved views, and workflows.
- Show and edit assigned tags directly beneath every Inbox text or transcript editor. Type a name to reuse an existing tag or create a new one without leaving the editor.
- Improve large-Inbox scrolling with bounded card previews, indexed tag lookup, compact tag summaries, constant-time selection checks, and typed Compose row reuse while retaining full text in the editor.
- Repair RykerSoft Pro Google sign-in configuration so the canonical Hyperscribe OAuth client can be used with the Hub entitlement service.

## v2.3.0

- Add a tag-first organization system with custom saved Inbox views, reusable capture modes that preapply tags, and automatic tag workflows such as archiving completed non-journal items.
- Add durable archive/restore state and preserve tagged, pinned, and archived content beyond ordinary clipboard-history cleanup.
- Open Inbox text directly in the editor, replace the row edit shortcut with Copy, display timestamps, and sort by date added or date copied.
- Add multi-selection and temporary one-or-many Inbox context for Chat, repair chat action-stack persistence, support generation cancellation from the send/stop button, and notify through Android whenever a completed response is not actively visible.
- Split bullet and numbered-list items into individual speech segments when paragraph-based TTS segmentation is selected.

## v2.2.0

- Add opt-in Firebase synchronization for the shared tag catalog, selected Inbox items, chat threads, and full/category/tag-filtered action libraries.
- Add automatic offline tag rules, durable assignment evidence and manual-removal suppression, action tagging, and compact tag-management controls.
- Separate Hyperscribe user-data Firebase from the named RykerSoft hub connection used for package-scoped Pro entitlements and in-memory provider access.
- Standardize debug and release signing custody and Google authentication on the current canonical certificates.
- Add configurable recording profiles, PCM quality and input-gain controls, plus current search and action-library interoperability improvements.

## v2.1.4

- Restore all Android action execution by fixing the dynamic-variable initializer that prevented snippets, LLM actions, TTS, search, and pipelines from running.
- Confirm action input uses selected Inbox text or transcripts and falls back to the clipboard when nothing is selected.
- Replace manual action-provider, speech-model, voice, LLM-model, and thinking-level entry with catalog-backed selectors throughout the action editors.

## v2.1.3

- Anchor Inbox and Actions item menus beside their right-side three-dot buttons.
- Run actions against selected Inbox text or transcripts, falling back to the clipboard when nothing is selected; copy text results back to the clipboard and allow snippets to run without an input item.
- Move text-document import from the Inbox toolbar into the recording button's drag-up creation menu.
- Apply automatic tag rules to combined-copy Inbox entries.

## v2.1.2

- Make the central voice-recording control the main entry point for adding Inbox content.
- Move clipboard text, blank text entry, and audio-file import into the recording button's drag-up menu, freeing space in the Inbox toolbar.
- Save imported audio without transcribing it automatically; transcription remains available on demand.

## v2.1.1

- Fix RykerSoft Pro entitlement reads for the literal dotted package key `com.rykersoft.hyperscribemobile`.
- Verify that an administrator grant activates only Hyperscribe Mobile while personal keys remain the preferred source when configured.

## v2.1.0

- First standalone RykerSoft release for Hyperscribe Mobile.
- Add recording, durable transcription, a unified Inbox, actions and pipelines, persistent chat, local/cloud TTS, Android sharing, mobile controls, and portable backups.
- Add optional Google-account-bound RykerSoft Pro Access for package-scoped Gemini, OpenAI, Groq, and ElevenLabs family credentials.
- Keep bring-your-own-key access, with personal Android Keystore-backed keys taking priority and all credentials excluded from source, diagnostics, backups, and release artifacts.
- Add a private Mobile source repository and a separate public Mobile release entry.

Support: heavensounds@gmail.com.
