# Roadtrip Copilot Updates

## v1.1.0

- Added a prominent Google Maps navigation handoff from every selected trip, using the current location, the next planned stops in route order, and the trip destination.
- Brought Android planning and research to parity with the website: route-aware discovery, comparisons, grounded dossiers, videos, and the trip assistant.
- Added full stop creation/editing/deletion, richer profiles, all statuses, advanced filters, comment deletion, and clickable links.
- Added native drive-mode GPS tracking, approach notifications, route recalculation, bulk enrichment, and Sheets push/pull.
- Added collaborator invitations, join-by-link/code, member visibility, and a consolidated tools hub.
- Preserved SQLite-first startup, queued offline mutations, separate Firebase identities, and exact-package Pro checks.

## v1.0.0

Android offline release.

- Added an installable Android application with the package `com.rykersoft.roadtripper`.
- Added a SQLite-first trip library that opens without network access.
- Added downloaded stops, comments, route progress, saved research, and addresses.
- Added an offline mutation outbox for stop status, priority, route progress, and comments.
- Added automatic synchronization when connectivity returns.
- Added separate Google sessions for trip data and RykerSoft family Pro access.
- Added package-scoped Google Places, YouTube, and OpenAI Pro tools whose results are saved offline.
- Retained the full hosted website for route planning, live integrations, and spreadsheet workflows.
