# Hyperscribe Mobile v2.8.0

Hyperscribe Mobile 2.8.0 adds recording workflows and makes the Inbox and action workspace more compact.

- Collapsible Inbox search with an active-filter indicator, wider item previews, animated copy feedback without losing your reading position, and automatic alignment of expanded day groups.
- More room for the text editor while the keyboard is open; repaired new-tag creation.
- Voice and music capture profiles, configurable stop profiles, ordered action steps, and recoverable transcript delivery.
- Configurable floating Recording, Actions, Inbox, and custom action tabs.
- Every action type in navigation menus, direct action-type filtering, and automatic execution settings in individual action editors.
- Independent action tags with creation, editing, and assignment; category color picker; compact clipboard/Inbox input picker.
- Non-destructive database upgrades and backup compatibility for existing tag assignments.

Package: `com.rykersoft.hyperscribemobile` · version code: `19`.
Android 10 or newer; ARM64 and x86-64. Signed with the existing production certificate for in-place upgrades.

Download `app-release.apk` for installation. `app-release.aab` is the store distribution bundle.

# 2.7.0 — Saved Inbox views

Hyperscribe Mobile 2.7.0 adds fully customizable saved Inbox views.

- Full view titles in a horizontally scrolling tab bar above live search.
- Compact save icon captures search text, tags and matching modes, item/audio filters, reminders, pins, sorting, and day-group expansion.
- Recall views instantly, clear or replace their search, and long-press All to restore defaults.
- Preserves the editor tag-dialog fix, editor attachments/recording, recording profiles, and retention behavior from 2.6.2.

Package: `com.rykersoft.hyperscribemobile` · version code: `16`.
Signed with the existing production certificate for in-place upgrades.

# Hyperscribe Mobile updates

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
