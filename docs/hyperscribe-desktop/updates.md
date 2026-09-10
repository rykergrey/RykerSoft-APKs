# Hyperscribe Desktop updates

## v2.4.1

- Fix Pro verification after a successful Google login by reusing the Hyperscribe session.
- Desktop and Mobile now use the same shared provider keys, including future updates.

## v2.4.0

- Select recent Inbox items from matching Chat and Actions dropdowns, or right-click Inbox items to send them to Actions. Clear the Actions selection to return to clipboard input.
- Connect Google login to RykerSoft Pro for approved shared provider keys.
- Require Pro for cross-device sync of content, tags, actions, and chats.
- Add optional text replacement rule sync between Windows and Linux, including edits and deletions.
- Preserve personal keys and local workflows when signed out or without Pro.
- Include current Inbox-to-Chat selection, chat audio exports, action review, drag-and-drop, and responsiveness updates.
- Offer Windows and Linux downloads through RykerSoft.

## v2.2.0

- Add Firebase synchronization for the shared tag catalog and selected Inbox items, with cross-device conflict handling and deletion tombstones.
- Add global Inbox search and preserve the current search, tag, and action-library improvements from the reconciled desktop source trees.
- Add action tags and compact, backward-compatible tag editing while retaining compatibility with existing action JSON libraries.
- Keep Hyperscribe content in its dedicated Firebase project and preserve local-first operation when signed out or offline.

## v2.1.0

- First standalone RykerSoft release for Hyperscribe Desktop.
- Package the current Python/PySide6 application as a portable Windows executable.
- Include the action library, Inbox and recordings, transcription, persistent chat, screenshots, reminders, clipboard palette, and local/cloud TTS workflows.
- Keep provider access bring-your-own-key and explicitly exclude credentials from source, diagnostics, backups, and release artifacts.
- Add a private Desktop source repository and a separate public Desktop release entry.

Support: heavensounds@gmail.com.
