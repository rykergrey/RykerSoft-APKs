# Hyperscribe Mobile updates

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
