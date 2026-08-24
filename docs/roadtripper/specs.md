# Roadtrip Copilot Specifications

## Release

- Version: 1.1.0
- Android version code: 2
- Package: `com.rykersoft.roadtripper`
- Minimum Android API: 24
- Target Android API: 36
- Runtime: Capacitor 8 with a native Credential Manager bridge

## Offline architecture

- SQLite stores complete trip workspaces on Android; localStorage provides the browser preview fallback.
- Each workspace contains its trip, stops, comments, and last successful synchronization time.
- An ordered outbox stores trip, stop, and comment mutations until Firebase accepts them.
- The app loads local data before attempting any network operation.
- Provider-generated place details, video links, and research become ordinary cached stop data after completion.

## Identity and data

- Trip data project: `roadtrip-7d778`
- RykerSoft entitlement project: `rykersoft-abe84`
- Entitlement path: `users/{hubUid}/entitlements/apps`
- Provider path: `providerKeys/com.rykersoft.roadtripper`
- Hub and trip Firebase sessions are intentionally separate.
- The app cannot write its own RykerSoft entitlement or provider record.

## Managed providers

- Google Maps Platform: Places search and detail refresh
- YouTube Data API: destination video discovery
- OpenAI Responses API: current destination research
- Google Sheets service-account access remains server-only in the hosted application and is never delivered to the APK.

## Connectivity behavior

- Offline: downloaded trips, stops, comments, search, route progress, status, priority, and saved research.
- Queued offline: trip progress, stop creation/editing/deletion, and comment creation/deletion.
- Online only: route-aware discovery, comparison grounding, fresh provider searches, route calculation, traffic, videos, research, initial trip download, sharing/joining, and Sheets synchronization.

## Website parity

- Android includes Discover, the trip assistant, full stop editing and profiles, advanced route-window filters, route recalculation, bulk enrichment, Sheets mirroring, and collaboration workflows.
- Native drive mode continuously projects GPS coordinates onto the saved route and can deliver approach notifications.
- Android hands the selected trip to Google Maps in navigation mode from the current location, through up to three upcoming planned stops in route order, and on to the final destination; route-aware search and calculations remain in-app.
- See `android-web-parity.md` for the complete audited capability matrix.
