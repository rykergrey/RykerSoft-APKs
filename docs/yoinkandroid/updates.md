# yoink. Release Updates

## 0.1.26

- Save independent editing sessions per video, including the selected tool, clips, timeline view, export settings, and playhead. Back closes the editor from any tool after autosaving; reopening the video restores the saved session.
- Keep Android export batches in a persisted queue with foreground progress, cancellation, retry, and recovery after interruption. Library cards show active exports.
- Add cached proxy previews for smoother editing. Proxy playback retains the original media for exports, and automatic proxy generation can be chosen for new videos.
- Simplify the editor's Clips and Export controls while preserving individual and combined exports.

## 0.1.24

- Redesigned the saved-video player with inline seeking, speed and shuttle controls, looping, and a compact variation picker for edited versions.
- Improved Android video seek recovery and added an explicit native-player fallback.
- Added ordered combined exports, more precise video and animation formats, and reusable export profiles.
- Made Trim segments selectable and movable by long press. Tracks now starts with enabled clips side by side, supports long-press selection and magnetic Placement reordering, and ripples later clips when a source clip changes length.
- Compactly displays clip order below the editor controls and folds linked video/audio rows into expandable summaries.
- Added explicit video/audio download-track selection and clearer library ordering and media indicators.

## 0.1.23

- Added the simple lightning-shaped y logo and platform icons while using the same lightning y in an outlined yoink. title bar wordmark.
- Unified Studio track editing, source audio/video selection, waveforms, and jog controls.
- Improved mobile back navigation and chronological edit history.
- Published Android alongside Windows and Linux builds. Android uses package `app.flux.download`; desktop retains `com.rykersoft.yoink`.

## 0.1.0

- Initial Windows and Linux desktop release.
- Added media downloading with video/audio presets and detailed output controls.
- Added non-destructive Studio profiles, timeline editing, clip export, joining, metadata, tracks, and layered media workflows.
- Added consent-gated OpenAI, Gemini, Groq, and local Codex CLI assistant routes.
- Added Google-account-bound RykerSoft Pro access for package-scoped managed OpenAI, Gemini, and Groq credentials.
- Kept downloads, inspection, manual editing, exports, personal keys, and Codex access available without Pro.
