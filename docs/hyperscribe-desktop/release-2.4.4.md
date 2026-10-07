# Hyperscribe Desktop 2.4.4

Released October 7, 2026 for Windows and Linux x86-64.

This release supersedes the unpublished 2.4.3 candidate and is offered to earlier
2.4.3 installations through the normal application update check.

- Make cross-device Sync follow acknowledged cloud revisions so sequential edits
  are not lost when device clocks differ. Preserve unseen cloud edits during
  offline deletion conflicts, protect edits made during a request, and guard
  every cloud mutation against an account switch.
- Show the time and record counts of a completed Sync after server confirmation,
  local persistence, and receipt storage. Report disabled runs, changed selections,
  deletion conflicts, and save failures clearly. Coalesce automatic edits, use
  server-stamped incremental reads, and retry failures with bounded backoff.
- Improve interoperability with Hyperscribe Mobile for scoped tags, Chat records,
  sharing-removal markers, and text replacements. Keep local attachment paths and
  speech caches out of shared content. **Sync now** remains the full repair pass.
- Add local saved-knowledge retrieval, reviewed Inbox edits, Viewer action runs,
  improved Chat recording routing, tagged-item archive controls, and clearer
  alerts. Refresh the Action Editor, tag emoji picker, and cross-platform color
  dialogs while preserving existing action libraries and local content.
- Improve Windows Computer Action screenshots and display recording with DXGI
  capture, native fallback, display/frame-rate choices, hardware encoding when
  available, HDR guidance, and recovery of completed recording fragments.

Cross-device Sync remains opt-in and requires approved RykerSoft Pro access.
Sign in with the same Google account and choose compatible content on every
device. Automatic delivery is eventual; attachment bytes remain local, and a
completed pass does not confirm another device's receipt. Personal provider keys
and local workflows remain available without Pro. Provider credentials are not
included in release artifacts.
