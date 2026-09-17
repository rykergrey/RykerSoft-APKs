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
