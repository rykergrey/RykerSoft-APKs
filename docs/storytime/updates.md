# Storytime Updates

## v1.1.0

- Add Director and Listener roles to online Story Party rooms
- Let one listener phone become the leased car speaker for the whole room
- Queue narration section by section, cache audio on the speaker device, and share playlist progress without duplicating TTS requests
- Automatically release or recover the speaker role after disconnects, with pause, resume, and retry controls
- Keep listeners synchronized with story text and choices without requiring them to vote or delaying the directors
- Harden Firestore rules so listeners cannot submit choice ballots and only the current listener lease can publish playback progress

## v1.0.2

- Restore a complete, source-backed release after an unreleased direct-device build advanced the Android version
- Recover and verify the original Android release signer so existing installations update in place
- Rebuild synchronized Android and Windows artifacts from the current stable source

## v1.0.0

- First RykerSoft Application Manager release for Android and Windows
- Separate the no-key standard experience from clearly marked Pro-assisted creation
- Add Google-account-bound Storytime entitlement at `com.superstorycraft.ing`
- Deliver Gemini, OpenAI, Kimi, and ElevenLabs credentials only from the exact package-scoped RykerSoft provider record
- Keep RykerSoft-managed credentials in memory and clear them on sign-out, revocation, missing entitlement, or refresh failure
- Replace packaged Windows Firebase OAuth code exchange with the temporary localhost Firebase browser helper
- Preserve optional personal provider-key overrides and existing local data
- Preserve app-owned Firebase online rooms, private UID authorization, and user-chosen public game names
