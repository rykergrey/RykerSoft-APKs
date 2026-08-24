Roadtrip Copilot is an offline-first family trip planner for deciding which stops are worth the detour, keeping everyone coordinated, and retaining the useful plan when the road leaves cell coverage.

The Android app downloads each shared trip into an on-device SQLite library. Route progress, stop details, addresses, priorities, comments, and saved research open without a connection. Edits made offline wait in a local outbox and synchronize through the Roadtripper Firebase project after connectivity returns.

## Standard Features

- Download shared trips, stops, comments, route mileage, and saved research
- Search and filter downloaded stops by route window, category, status, price, priority, or text
- Follow progress with native GPS drive mode, configurable look-ahead, and approach alerts
- Send the selected trip to Google Maps for turn-by-turn navigation through upcoming planned stops
- Add, edit, delete, and mark stops candidate, backup, planned, visited, or skipped offline
- Adjust priorities and create or delete family travel notes offline
- Ask the local trip assistant about downloaded stops without Pro
- Share trips, join by invitation, and view collaborators while connected
- Push or pull the Google Sheets mirror through the credential-safe hosted backend
- Synchronize changes automatically after service returns
- Start with a bundled example route before signing in
- Continue the same trip on the full companion website

Standard downloaded-trip features do not depend on RykerSoft Pro or provider credentials.

## PRO Features

- * Discover route-aware places by name or idea, compare detours, and save candidates without retyping.
- * Refresh a stop with live Google Places details and store them offline.
- * Find destination videos through YouTube and save their links with the stop.
- * Generate structured, web-grounded destination research with OpenAI and download the result.
- * Ask the grounded trip assistant to combine saved trip data with cited current facts.
- * Enrich unresolved places and recalculate traffic-aware route geometry and route-derived miles.

`*` items require administrator-granted RykerSoft Pro access, a current connection, and the corresponding managed provider credential. Roadtrip Copilot checks the exact `com.rykersoft.roadtripper` entitlement after Google sign-in. Credentials are retained only in memory and cleared on sign-out, revocation, or refresh failure. Trusted-family delivery cannot recall a value already inspected on a device; if a family device stops being trusted, rotate the affected provider credential.

## Platforms

- **Android** — signed Capacitor APK distributed through RykerSoft Application Manager
- **Web** — full planning workspace at the hosted Roadtrip Copilot site
