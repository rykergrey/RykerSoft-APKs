Roadtrip Copilot is an offline-first family trip planner for deciding which stops are worth the detour, keeping everyone coordinated, and retaining the useful plan when the road leaves cell coverage.

The Android app downloads each shared trip into an on-device SQLite library. Route progress, stop details, addresses, priorities, comments, and saved research open without a connection. Edits made offline wait in a local outbox and synchronize through the Roadtripper Firebase project after connectivity returns.

## Standard Features

- Download shared trips, stops, comments, route mileage, and saved research
- Search the downloaded stop library by name, city, category, or address
- Follow current-mile progress and see the next useful stops ahead
- Change a stop's candidate, planned, visited, or skipped status offline
- Adjust priorities and write family travel notes offline
- Synchronize changes automatically after service returns
- Start with a bundled example route before signing in
- Use the full companion website for route building and spreadsheet import

Standard downloaded-trip features do not depend on RykerSoft Pro or provider credentials.

## PRO Features

- * Refresh a stop with live Google Places details and store them offline.
- * Find destination videos through YouTube and save their links with the stop.
- * Generate current, web-grounded destination research with OpenAI and download the result.

`*` items require administrator-granted RykerSoft Pro access, a current connection, and the corresponding managed provider credential. Roadtrip Copilot checks the exact `com.rykersoft.roadtripper` entitlement after Google sign-in. Credentials are retained only in memory and cleared on sign-out, revocation, or refresh failure. Trusted-family delivery cannot recall a value already inspected on a device; if a family device stops being trusted, rotate the affected provider credential.

## Platforms

- **Android** — signed Capacitor APK distributed through RykerSoft Application Manager
- **Web** — full planning workspace at the hosted Roadtrip Copilot site
