# Roadtrip Copilot User Guide

Plan with the full website, download the trip to Android, and keep the useful route knowledge with you when service disappears.

## Table of Contents

- [1. Install and start](#1-install-and-start)
- [PRO Features](#pro-features)
- [2. Download trips](#2-download-trips)
- [3. Follow the route](#3-follow-the-route)
- [4. Use stops offline](#4-use-stops-offline)
- [5. Notes and synchronization](#5-notes-and-synchronization)
- [6. Offline library](#6-offline-library)
- [RykerSoft Pro Access](#rykersoft-pro-access)
- [7. Accounts and privacy](#7-accounts-and-privacy)
- [8. Troubleshooting](#8-troubleshooting)

## 1. Install and start

1. Install the Roadtrip Copilot APK from RykerSoft Application Manager.
2. Open it once while connected. A bundled example route appears immediately, even before sign-in.
3. Open **Account** and connect **Trip data** with the Google account used for the family trip.
4. Select the refresh button on **Route** or **Download latest trips** under **Offline**.

The app opens its device database first on every launch. A failed or slow connection does not prevent downloaded trips from opening.

## PRO Features

- * **Refresh place** retrieves current address, phone, rating, website, hours, coordinates, and a Maps link.
- * **Find videos** saves up to three useful YouTube destination links.
- * **AI research** creates a concise, current destination briefing with web sources.

`*` tools need an internet connection, an exact-package family Pro grant, and the matching managed provider credential. Results are written into the downloaded stop so they remain readable offline afterward. All standard route, stop, note, and offline features work without Pro.

## 2. Download trips

1. Build or update the route in the full Roadtrip Copilot website.
2. In Android, select **Route → refresh**.
3. Wait for “Trips are downloaded and ready offline.”
4. Open **Offline** to confirm the downloaded-trip, saved-stop, and pending-change counts.

Download before entering remote areas. A first-time trip cannot be fetched without connectivity.

## 3. Follow the route

- **Route** shows the origin, destination, current mile, estimated miles remaining, and the next useful stops.
- Move the mile slider as the drive progresses. The new value is saved locally immediately.
- Select any upcoming stop to open it in the downloaded stop list.
- Switch trips with the selector at the top when several family trips are stored.

Do not operate the phone while driving. Have a passenger make changes, or stop safely first.

## 4. Use stops offline

- Search by name, city, category, or address without a connection.
- Expand a stop to read its description, hours, phone, saved research, and source links.
- Mark it **candidate**, **planned**, **visited**, or **skipped**.
- Adjust priority from 1 to 5.
- Provider buttons become unavailable offline, while their previously saved results remain visible.

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
3. In Roadtrip Copilot, open **Account → RykerSoft Pro**.
4. Select **Google sign-in** and choose the same account.
5. Confirm that the provider pills for the configured family services show ready.

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
- **Changes are pending:** reconnect and select **Download latest trips**. Keep the app installed until the outbox reaches zero.
- **The route is old:** refresh before leaving coverage; the offline copy deliberately favors availability over live traffic.
