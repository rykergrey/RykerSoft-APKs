# Specifications

- Application: Field Recorder
- Package: `com.rykersoft.fieldrecorder`
- Version: 1.0.0; Android version code: 2
- Minimum Android: 7.0 (API 24); target SDK: 36
- Stack: React, TypeScript, Vite, Capacitor 8, Android WebView
- Players: 2–8 on one device; touch controls, plus supported keyboard/gamepad controls
- Permissions: internet, microphone recording, and audio settings
- Audio: mono 16-bit WAV at the device audio-context sample rate when AudioWorklet is available; MediaRecorder fallback otherwise
- Transcription: user-supplied Groq key; `whisper-large-v3-turbo` or `whisper-large-v3`
- Optional server features: Gemini category judging and generated deck ideas
- RykerSoft access: free; no account, entitlement, or hub-managed provider key required

The Android APK includes the interface and capture code, not the Node API server. Groq transcription requires internet access and a valid personal provider key. Browser speech fallback depends on browser/device support. Audio capture, deck and roster editing, and review do not require a RykerSoft login. Player data, settings, custom packs, and saved match history use local app storage; do not clear app data to resolve installation issues.

Audio submitted for Groq transcription leaves the device for the provider. A configured API server receives requests for server-backed features. The saved personal Groq key is stored in the app's local storage; it is not included in the distributed APK or supplied by RykerSoft.
