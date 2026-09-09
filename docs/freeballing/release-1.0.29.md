FreeBall.ing 1.0.29 improves mobile and desktop play and adds Linux downloads.

- Pause now freezes gameplay; Escape, Android Back, and focus changes have consistent behavior.
- Browse boards with thumbnails, favorites, recent boards, sorting, and paged Community previews.
- Try untimed practice and keyboard aiming; share audio, accessibility, and quality preferences across Home and Pause.
- Use the updated desktop editor with contextual inspectors, live parameter previews, and improved numeric and color controls.
- Reduce mobile rendering work and load Community geometry only when a board is selected.

Downloads: signed Android APK (version code 30), portable Windows x86_64 EXE, Linux x86_64 AppImage, and a Linux tar.gz alternative. Linux supports guest/offline play and editing; Google sign-in is available on Android and Windows. Mark the AppImage executable before launching, or extract the archive and run `freeballing`.

Validation: 30 headless regression suites and three backend test files passed; Linux launched with its native renderer; Android package identity and release signature verified; Windows version and embedded game data checked. Native Android and Windows gameplay/sign-in were not exercised for this build. The Windows EXE is unsigned. Existing Linux resource cleanup warnings remain at exit.

The score-validation and Community-publishing backend updates are deployed, and existing Community preview metadata has been migrated. SHA256SUMS and release-manifest.json describe the published files.
