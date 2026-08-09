# Rush Technical Specifications

## Platform and Release

- **Platform:** Native Android application written in Kotlin
- **UI:** Jetpack Compose with Material 3
- **Package ID / namespace:** `com.rykersoft.rush`
- **Version:** 1.0.2 (`versionCode` 3)
- **Minimum Android:** Android 8.0 / API 26
- **Target Android:** API 35
- **Java/Kotlin target:** Java 17

## Architecture and Storage

- Single Android application module with Compose navigation and screens
- Offline bundled discography and media assets
- Kotlin serialization for structured catalog and collection data
- DataStore-backed local preferences and collection state
- Coil image loading for bundled and linked artwork
- JSON export and merge-or-replace import for the user's collection

## Privacy and Connectivity

- Core catalog browsing and collection features work locally without an account.
- Collection data is stored on the device unless the user explicitly exports it.
- External Rush and YouTube links open only when the user chooses them.
- The application has no Windows release target in the RykerSoft catalog.
