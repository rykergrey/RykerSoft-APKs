# Earbound Technical Specifications

## Application

- Package: `com.rykersoft.earbound`
- Release: `0.11.0` (`versionCode 20`)
- Platform: Android 7.0 (API 24) or newer; target API 36
- Requires a current Android System WebView
- UI: React 19, TypeScript and Vite, packaged with Capacitor 8
- Audio: on-device synthesis and bundled instrument samples; no streaming

## Data and Privacy

- No analytics. An account is optional and only used for sync and friends
- Progress, achievements, cosmetics and settings are stored locally on the device
- Optional sync: signing in with Google stores a copy of that data in Earbound's Firebase project (Google Cloud Firestore), readable only by the signed-in account. Volume and the on-device restore point are not uploaded
- Optional friends: after choosing a username, Earbound stores the username, a stats summary and the people you chose to share it with. Others see only the username and, if you added them, the summary; never your email or name
- Find by email stores a one-way SHA-256 fingerprint of your address, never the address itself, and can be turned off
- Settings → App & data → Delete cloud copy deletes the synced copy, your username, shared stats and the account
- Backups are user-exported JSON files
- Microphone access is used only for optional voice answers
- Local network access is used only when hosting or joining a party

## Learning Records

- Up to 200 recent sets kept in full detail, and up to 10,000 set receipts for lifetime totals
- Lesson progress and practice history are kept on the device and included in backups; lesson checks are never recorded as match results
- Achievement dates are stored separately, so they survive history trimming and are included in backups

## Party Play

- 2–8 players on the same Wi-Fi; the host phone serves the room locally
- Pass the phone: 2–8 players on one device, offline
- Hosting stops if the host app is backgrounded, locked or closed
- Wi-Fi client isolation, VPNs or firewalls can prevent guests from connecting

## Limitations

- Note memory exercises are not an absolute-pitch assessment
- Sync needs a Google account; without one, use backup and restore to move progress
- Changes from another device load at the next launch, or with Sync now
