# Android specifications

- Version 0.1.23, version code 24.
- Package: `app.flux.download`.
- Android 8.0 (API 26) or later; arm64-v8a and x86_64.
- Kotlin host with the shared React interface, bundled yt-dlp and FFmpeg through youtubedl-android 0.18.1.
- APK signed locally with the RykerSoft release certificate. SHA-256 certificate fingerprint: `f1b2d0a742f03a714a84c42fa503dfd88ad6260938488b18e3cf865cd0ae21d6`.
- The earlier development APK uses a different signing certificate. Android cannot update that installation directly with this release APK.
