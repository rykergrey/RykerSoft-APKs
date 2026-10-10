# Updates

## 1.1.0 — October 10, 2026 (Android code 3)

- Google sign-in for the RykerSoft account and Field Recorder Pro access.
- Pro-managed Groq transcription for game answers and spoken deck questions, without a personal API key.
- Personal keys remain optional and take priority when saved.
- Live entitlement checks block new managed requests after sign-out, revocation, or backend errors; managed keys are never persisted locally.
- Retains the completed built-in microphone changes: external inputs are excluded and Android routing is verified.


## 1.0.0 — October 10, 2026 (Android code 2)

First production-signed RykerSoft release.

- Bundled Android game interface and audio recording.
- Standalone Groq transcription for answers and spoken deck questions, with an in-app connection test.
- Immediate push-to-talk capture that retains the first syllable and saves only the held interval.
- Persistent player rosters and custom category packs.
- Post-game recordings, transcript review, and score adjustments, including late transcription results.
- Simplified transcription and rules menu with the fixed retro gray console style.

Earlier code-1 builds were development APKs signed with a debug certificate. Production signing begins with this release; Android cannot update a debug-signed installation with the production APK. Existing development installations are left intact by the release workflow.
