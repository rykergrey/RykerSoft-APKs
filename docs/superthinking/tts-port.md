# Segmented speech and Piper

Superthinking now shares Hyperscribe Mobile's paragraph/list-item and sentence section model. Chat **Speak with TTS**, saved voice actions, and the custom action builder use the same generator. Existing Gemini (including multi-speaker) and ElevenLabs settings remain supported. Piper is a local provider with no API key or separate server.

## Use

1. In **Settings → Chat TTS**, choose a provider. Choose **Piper (local)** to download, preview, or remove a voice on this device. The same controls appear in voice action settings. Medium voices balance quality and size; lower-quality voices use less memory.
2. Choose paragraphs/list items or sentences, a maximum section size, and whether to remove Markdown formatting and fenced code blocks.
3. Run **Speak with TTS** on a chat message, or run a voice action. Sections become saved audio items as generation completes. Chat starts playing its first available section. Progress shows completed sections and supports cancelling generation.
4. Use the persistent speech player to pause, resume, jump to any available section, or change playback speed from 0.5× to 3×. Expand it to read the section text. The audio tab also supports individual section playback, renaming, reordering, downloading, and deletion through its existing media controls.

Speech keeps playing across card/tab navigation. It stops at the end of its own session rather than continuing into unrelated recordings or older speech. If playback catches up to generation, it resumes when the next section arrives; an explicit pause or stop prevents that automatic resume. Cancelling generation preserves already saved sections. Close the speech player to stop playback as well.

## Offline operation and storage

Piper's inference and phonemization run in one worker, serially, without sending the source text to a speech service. Voice downloads come from the Piper model catalog used by `@mintplex-labs/piper-tts-web`. Voice models have their own model cards/licenses. The worker validates configuration, HTTP status, download size, and committed files before marking a voice installed. Removing a voice leaves saved speech audio intact.

ONNX Runtime 1.18.0 and Piper phonemizer 1.0.0 are pinned to match the inference adapter. `predev`/`prebuild` copy runtime assets from installed dependencies into generated `public/piper/`; packaged apps carry these assets, and production web builds precache them through the service worker. Web offline use requires the production app to have finished installing its service worker and the chosen voice to be downloaded. HTTPS (or localhost) and Origin Private File System support are required.

Generated sections have a separate device-local cache bounded to 64 MiB/200 entries. Keys include the text digest and complete voice configuration, never API keys. Rerunning after failure reuses successful cached synthesis; it creates a new playlist session. Clear reusable audio in speech settings without deleting saved playlists. Saved sections continue to follow the app's normal local/cloud media policy; a signed-in cloud save still needs connectivity even when Piper inference is offline.

Cloud providers receive at most two concurrent section requests. Piper uses a single worker. Cancellation aborts cloud speech requests and terminates active Piper inference/downloads. Script preprocessing still uses the configured Gemini script generator; choosing Piper does not make enhanced AI script rewriting local.

## Validation

- Automated tests cover lossless segmentation, Unicode/CRLF boundaries, source ordering, session navigation, provider gating, MIME handling, cancellation, progressive delivery, and cache reuse on retry.
- Production Chromium smoke test: download a voice, decode real generated WAV, start a fresh worker with network disabled and synthesize new text, then remove the voice. Runs under the desktop's relevant CSP restrictions.
- Chromium player checks: late-arriving sections, pause during generation, previous/next, speed retention, end-of-playlist behavior, and stop/reset.
- TypeScript, Electron TypeScript, the full Vitest suite, and production bundling are checked.

This port does not yet read an AI response token-by-token while the response itself is streaming. It segments the completed source and incrementally delivers its audio. Native Android device/background-service behavior and installed Electron packaging require device testing; browser synthesis is verified. Existing device read-aloud controls remain separate from generated/exportable audio.

Run `npm run check` for unit tests/type checking/build. Run `npm run test:tts:browser` for the production browser test (uses a temporary browser profile and downloads the small Lessac voice). Linux defaults to `/usr/bin/chromium`; set `CHROMIUM_PATH` to another Chromium binary if needed. No real account data or provider keys are used.

Run `npm run test:tts:player` for transport checks using synthetic audio. It starts an isolated Vite test server on port 5196.
