# yoink. Technical Specifications

## Platform and release

- Desktop application built with Tauri 2, Rust, React, TypeScript, and Vite.
- RykerSoft package identity: `com.rykersoft.yoink`.
- Release version: `0.1.0`; RykerSoft version code: `1`.
- Windows x86_64 packages: NSIS `.exe` and MSI `.msi`.
- Linux x86_64 packages: AppImage and Debian `.deb`.
- Media engines: system `yt-dlp`, `ffmpeg`, and `ffprobe`.

## Pro Access

- Hub project: `rykersoft-abe84`.
- Entitlement: `users/{hubUid}/entitlements/apps["com.rykersoft.yoink"] == true`.
- Provider document: `providerKeys/com.rykersoft.yoink`.
- Declared provider fields: optional `openai`, `gemini`, and `groq` strings.
- Authentication uses Google in the system browser through a bounded localhost callback.
- Firebase ID and refresh tokens remain in native memory and are never serialized.
- Exact entitlement and provider access are revalidated before managed paid-provider execution.
- Personal session keys take priority over managed keys.
- Signed-out, unentitled, revoked, offline, and verification-error states retain all free workflows.

## Security boundaries

- Provider requests use validated native request bodies and argument arrays rather than shell strings.
- AI edit plans cannot introduce arbitrary files, URLs, scripts, extra outputs, or shell execution.
- API keys never enter the renderer, saved settings, media profiles, logs, or exports.
- Public release artifacts contain no GitHub token, service-account credential, Firebase administrator credential, or provider secret.
- The current trusted-family provider model is transitional; a future authenticated backend should retain provider secrets server-side when warranted.
