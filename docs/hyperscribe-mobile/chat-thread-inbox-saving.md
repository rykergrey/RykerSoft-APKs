# Save selected chat threads to Inbox

Ordinary Chat messages and library answers stay in Chat. To save a conversation, open the chat menu and choose **Save thread to Inbox**. The action is unavailable for an empty thread, while a reply is generating, or while a save is already running.

Each save creates one independent Inbox item containing the current conversation. Later messages, edits, and deleting the original chat leave the saved item unchanged. Saving again creates a new snapshot.

The snapshot is readable Markdown: a thread title, speaker headings, local timestamps with a timezone, and the original message formatting, including lists, links, tables, and code blocks. Answers retain their numbered saved-source references with local previews taken at save time. Internal system messages are excluded. Stopped or failed responses are labeled. Attachments are listed by name and type; their media files are not embedded in the snapshot.

Saving follows the same processing as a new manual Inbox item: configured clipboard-trigger actions run first, auto-tagging uses the resulting text when enabled, system tags apply their behavior, and tag workflows run. Normal retention, knowledge access, and sync policies apply. Mentioning a reminder in the conversation does not schedule one.

Explicit requests to create a note or reminder still create their requested Inbox item. Recording captures retain their normal recording/transcription behavior. Existing saved questions and answers are preserved.

Regression coverage includes ordinary sends/replies, edits, regeneration, forks, synced chats, archive restore, Markdown fidelity, repeated save taps, automation before tagging, disabled auto-tagging, and snapshot independence. Android UI tests exercise the save menu states and capture the menu and saved Markdown preview.

Verified on October 8, 2026: all 719 unit tests pass, the debug app and Android test APKs build, and lint reports zero errors. All 11 focused Android tests pass on an API 36 Pixel 7 emulator. The three UI tests also pass with assertions that the native Markdown preview is visible before capture. Menu screenshots cover light mode and dark mode with 1.3× text; the saved preview shows headings, timestamps, paragraphs, bold text, lists, and code content. Logs and screenshots are retained in the ignored `.gradle-tmp/chat-inbox/` directory.
