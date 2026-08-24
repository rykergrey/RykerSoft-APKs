# Roadtrip Copilot User Guide

Plan with the full website, download the trip to Android, and keep the useful route knowledge with you when service disappears.

## Table of Contents

- [1. Install and start](#1-install-and-start)
- [PRO Features](#pro-features)
- [2. Download trips](#2-download-trips)
- [3. Follow the route](#3-follow-the-route)
- [4. Use stops offline](#4-use-stops-offline)
- [Discover and compare places](#discover-and-compare-places)
- [Trip assistant](#trip-assistant)
- [Trip settings and connections](#trip-settings-and-connections)
- [Share or join a trip](#share-or-join-a-trip)
- [5. Notes and synchronization](#5-notes-and-synchronization)
- [6. Offline library](#6-offline-library)
- [RykerSoft Pro Access](#rykersoft-pro-access)
- [7. Accounts and privacy](#7-accounts-and-privacy)
- [8. Troubleshooting](#8-troubleshooting)

## 1. Install and start

1. Install the Roadtrip Copilot APK from RykerSoft Application Manager.
2. Open it once while connected. A bundled example route appears immediately, even before sign-in.
3. Open **More → Accounts & Pro** and connect **Trip data** with the Google account used for the family trip.
4. Select the refresh button on **Trips** or **Download latest trips** under **Offline**.

The app opens its device database first on every launch. A failed or slow connection does not prevent downloaded trips from opening.

## PRO Features

- * **Discover along the route** finds places by name or idea, calculates route position and added drive, and supports comparisons.
- * **Refresh place** retrieves current address, phone, rating, website, hours, coordinates, and a Maps link.
- * **Find videos** saves up to three useful YouTube destination links.
- * **AI research** creates a structured, current destination briefing with web sources.
- * **Grounded trip assistant** combines the downloaded plan with cited current web facts. Local trip answers remain free and offline-capable.
- * **Route recalculation and enrichment** resolve places and calculate traffic-aware route geometry and route-derived miles.

`*` tools need an internet connection, an exact-package family Pro grant, and the matching managed provider credential. Results are written into the downloaded stop so they remain readable offline afterward. All standard route, stop, note, and offline features work without Pro.

## 2. Download trips

1. Build or update the route on Android or the full Roadtrip Copilot website.
2. In Android, open **Trips**, choose the trip, and select refresh.
3. Wait for “Trips are downloaded and ready offline.”
4. Open **Offline** to confirm the downloaded-trip, saved-stop, and pending-change counts.

Download before entering remote areas. A first-time trip cannot be fetched without connectivity.

## 3. Follow the route

- **Trips** is the home for selecting a trip. The selected trip shows its origin, destination, current mile, estimated miles remaining, and next useful stops.
- Move the mile slider as the drive progresses. The new value is saved locally immediately.
- Select any upcoming stop to open it in the downloaded stop list.
- Select **Navigate in Google Maps** to start from the phone's current location, visit up to the next three planned stops in route order, and finish at the trip destination. Google Maps opens ready to start navigation.
- Switch trips from the **Trips** tab or the active-trip selector at the top of **Stops**. Routes, stops, research, and conversations immediately switch together.
- Select **Start drive mode** for continuous native GPS route tracking.
- Select **Enable alerts** for an approaching-stop notification within 30 miles.
- Use the 25, 50, 100, or 250-mile range to focus the drive-ahead list.

Do not operate the phone while driving. Have a passenger make changes, or stop safely first.

## 4. Use stops offline

- Search by name, city, category, address, description, or notes without a connection.
- Expand a stop to read its description, hours, phone, saved research, and source links.
- Mark it **candidate**, **backup**, **planned**, **visited**, or **skipped**.
- Adjust priority from 1 to 5.
- Move the route-position slider, refresh GPS, resume the live position, or choose 50, 100, 250, 500 miles, or the full remaining route.
- Filter by state, category, and status, then sort by route, priority, price, or category. **Clear filters** restores the full remaining trip.
- Add, edit, and delete stops offline; changes wait in the outbox.
- Use one-tap Google, Perplexity, reviews, YouTube, Maps, and official-site links.
- Provider buttons become unavailable offline, while their previously saved results remain visible.

## Discover and compare places

1. Open **Discover** and search an exact place or an idea such as “scenic overlooks.”
2. Choose the route window, maximum detour, and result ordering.
3. Select up to four **Compare** buttons, then **Explain tradeoffs**.
4. Run **Research** or **Videos** for promising candidates.
5. Select **Shortlist** or **Plan stop** to add the place without retyping.

## Trip assistant

Open **Copilot** to ask about saved priorities, meals, timing, route position, or stops to skip. Downloaded-trip answers work without Pro. With an OpenAI Pro provider, current facts can be verified with cited sources.

## Trip settings and connections

Open **More → Trip & connections** to edit endpoints, coordinates, departure/arrival targets, enrich unresolved places, calculate route geometry, or push/pull the Google Sheets mirror. Sheet credentials remain on the hosted backend and are never included in the APK.

## Share or join a trip

Select **Share trip** from the selected trip, **Share** from the Stops active-trip bar, or **More → Share this trip**. Create a 30-day editor invitation with Android sharing, see collaborators, or paste a link/code to join another trip. An invited editor can view the route and add, update, or remove stops. Authorization remains tied to the signed-in Roadtripper Firebase UID.

## 5. Notes and synchronization

- Sign in to Trip data to write a family travel note.
- Offline notes and edits are appended to the outbox.
- When network service returns, the app attempts to send queued changes and download the newest shared state.
- Use **Offline → Download latest trips** to force a synchronization.

If synchronization fails, the app keeps its downloaded copy and pending outbox. It does not discard the offline changes.

## 6. Offline library

The **Offline** screen reports how many trips, stops, and pending changes are on the device. Downloaded data includes route metadata, stops, comments, addresses, phone numbers, hours, saved links, and research. Traffic, live provider results, route recalculation, initial downloads, and Google Sheets synchronization still require a connection.

## RykerSoft Pro Access

1. Sign in to RykerSoft Application Manager with Google.
2. Ask the administrator to grant `com.rykersoft.roadtripper` to that hub account.
3. In Roadtrip Copilot, open **More → Accounts & Pro → RykerSoft Pro**.
4. Select **Google sign-in** and choose the same account.
5. Select **Refresh Pro access**, then confirm that Google Maps, YouTube, and OpenAI show ready. A “needs setup” pill means the exact provider field has not been configured for Roadtrip Copilot yet.

The Pro session is separate from the Trip data session. Roadtrip Copilot reads only the exact entitlement and exact package provider record. It cannot grant access or edit managed credentials. Managed values exist only in memory and are cleared on sign-out, revocation, or refresh failure.

This is trusted-family delivery. A trusted device can inspect a credential delivered to it, and removing a grant cannot recall a previously extracted value. Rotate that provider credential if a device or person is no longer trusted.

## 7. Accounts and privacy

- **Trip data** controls shared Roadtripper Firebase content.
- **RykerSoft Pro** controls only family entitlement and managed online providers.
- Signing out leaves downloaded trips on the device for offline continuity.
- Removing the app clears its private SQLite database under normal Android uninstall behavior.
- Google Sheets service-account credentials stay on the hosted backend and are never placed in the APK.

## 8. Troubleshooting

- **No trips after sign-in:** confirm that the account is a member of the trip, then refresh while online.
- **Pro is locked:** confirm the same Google account has the exact package grant in Application Manager.
- **A provider pill is unavailable:** the hub administrator has not configured that optional provider field.
- **A live tool looks unavailable:** tap it for the exact requirement, then open **Accounts & Pro** and select **Refresh Pro access** after the grant or provider setup changes.
- **Changes are pending:** reconnect and select **Download latest trips**. Keep the app installed until the outbox reaches zero.
- **The route is old:** refresh before leaving coverage; the offline copy deliberately favors availability over live traffic.
