# Specifications

- Android 7.0+ (API 24); targets Android API 36.
- Package: `com.rykersoft.closecall`.
- Release: 0.4.3, version code 10; non-debuggable production APK.
- Updated Android System WebView recommended.
- Two or three local family players on one shared device; no network multiplayer.
- Internet required for image search, YouTube playback/search and Pro judging.
- Microphone permission required only for song answers; the system speech service may use internet. The app does not save raw audio.
- Private song previews require a usable earpiece/audio route; unsupported routes keep playback paused. Proximity support depends on device hardware.
- Android YouTube search requires a signed-in RykerSoft account, verified Close Call Pro grant, and the centrally managed YouTube service. Credentials stay in native memory and are not sent to the web interface or stored on the device.
- Pro requires the existing RykerSoft identity, an exact-package grant and a configured provider.
- Family selection, sound settings and retained campaign saves are local; match clues, guesses and scores are held in memory. Uninstalling or clearing app data removes local saves and keys.

Automated app and native checks do not establish physical speech recognition, human listening quality, repeated lift-to-ear timing or real Pro account/provider calls. YouTube ads, embedding availability and service restrictions remain external limitations. The concealed/cropped YouTube player remains experimental and may not comply with YouTube player overlay requirements.
