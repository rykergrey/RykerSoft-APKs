# Specifications

- Application: Field Recorder
- Package: `com.rykersoft.fieldrecorder`
- Version: 1.1.0; Android version code: 3
- Minimum Android: 7.0 (API 24); target SDK: 36
- Stack: React, TypeScript, Vite, Capacitor 8, Android WebView
- Players: 2–8 on one device; touch controls, plus supported keyboard/gamepad controls
- Permissions: internet, microphone recording, and audio settings
- Audio: native Android built-in microphone only, with verified routing and mono 16-bit WAV; prefers 48 kHz unprocessed capture, then voice-recognition processing and 44.1 kHz if necessary. Web capture requires an explicit internal input and exact device ID; AudioWorklet WAV or 128 kbps MediaRecorder. External/unknown inputs fail closed.
- Transcription: personal Groq key or RykerSoft Pro-managed Groq service; `whisper-large-v3-turbo` or `whisper-large-v3`
- Optional server features: Gemini category judging and generated deck ideas
- RykerSoft access: free gameplay and recording; Google sign-in and the exact Field Recorder grant enable managed transcription

The Android APK includes the interface and capture code, not the Node API server. Groq transcription requires internet access and either a valid personal provider key or a signed-in RykerSoft account with Field Recorder Pro access. Independent browser speech recognition is disabled to enforce microphone selection. Audio capture, deck and roster editing, and review do not require a RykerSoft login. Player data, settings, custom packs, and saved match history use local app storage; do not clear app data to resolve installation issues.

Audio submitted for Groq transcription leaves the device for the provider. A configured API server receives requests for server-backed features. A saved personal Groq key stays in local app storage. Pro credentials are fetched from Field Recorder's entitlement-protected provider record for each request and never saved to app storage. Provider or administrative credentials are never included in the APK. Firebase client configuration and OAuth client IDs are public application metadata.
