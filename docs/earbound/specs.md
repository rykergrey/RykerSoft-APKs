# Earbound Technical Specifications

## Application

- Package: `com.rykersoft.earbound`
- Release: `0.7.0` (`versionCode 13`)
- Platform: Android 7.0 (API 24) or newer; target API 36
- Requires a current Android System WebView
- UI: React 19, TypeScript and Vite, packaged with Capacitor 8
- Audio: on-device synthesis and bundled instrument samples; no streaming

## Data and Privacy

- No account, sign-in or analytics
- Progress, achievements, cosmetics and settings are stored locally on the device
- Backups are user-exported JSON files; nothing is uploaded
- Microphone access is used only for optional voice answers
- Local network access is used only when hosting or joining a party

## Learning Records

- Up to 200 recent sets kept in full detail, and up to 10,000 set receipts for lifetime totals
- Achievement dates are stored separately, so they survive history trimming and are included in backups

## Party Play

- 2–8 players on the same Wi-Fi; the host phone serves the room locally
- Hosting stops if the host app is backgrounded, locked or closed
- Wi-Fi client isolation, VPNs or firewalls can prevent guests from connecting

## Limitations

- Note memory exercises are not an absolute-pitch assessment
- No cloud sync between devices; use backup and restore to move progress
