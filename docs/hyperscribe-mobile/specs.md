# Hyperscribe Mobile specifications

## Android

- Package: `com.rykersoft.hyperscribemobile`
- Version: `2.1.2` (code 3)
- Minimum Android: 10 / API 29
- Target Android: API 36
- Architectures: arm64-v8a and x86_64
- UI: Kotlin, Jetpack Compose, Material 3
- Persistence: Room, DataStore, app-private files
- Background work: WorkManager and a user-initiated microphone foreground service

## Providers

Gemini, Groq, OpenAI, and ElevenLabs support both personal bring-your-own keys and optional RykerSoft Pro Access. Personal keys are encrypted through Android Keystore and take priority. An entitled Google account can read only the package-scoped family fields declared for `com.rykersoft.hyperscribemobile`; those values remain in process memory and clear when access is lost. Piper and Android system speech provide local/device alternatives where available. No provider credential is bundled.

RykerSoft Pro authorization uses Firebase Authentication and the exact Boolean grant at `users/{uid}/entitlements/apps`. Free features continue when signed out, unentitled, revoked, or temporarily unable to verify access.

## Distribution

The source is maintained in a private Hyperscribe Mobile repository. The signed APK, these documents, and Mobile screenshots are published anonymously through a dedicated public RykerSoft release entry.

## Support

heavensounds@gmail.com
