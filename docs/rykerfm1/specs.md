# RykerFM1 Technical Specifications

## Application

- Package: `com.rykersoft.rykerfm1`
- Release: `0.3.0` (`versionCode 3`)
- Platform: Android 8.0 (API 26) or newer; target API 36
- UI: Kotlin and Jetpack Compose

## What You Need

- An M-Vave FM-1
- A phone that works as a USB host (most phones with a USB-C port do)
- A USB-C **data** cable; a charge-only cable will not show the FM-1

## Connection

- The phone talks USB MIDI to the FM-1 directly. Android asks once for permission to use the device.
- The screen stays on during an install. Leave the cable in until the app says the install is finished.

## Data and Privacy

- No account, sign-in or analytics
- Favourites, pins, the watch list, ratings, lists, notes and the install history are stored on the phone
- They export to one JSON file and import again without removing anything
- Nothing you keep is uploaded

## Network Use

- The Firmware Hub's catalog, ratings, engine names and pictures: read at most once a day
- A maker's release notes and package: read from the maker's GitHub release when you open or install that firmware
- A package you choose to keep is stored on the phone and installs without a connection

## Limitations

- Projects saved on the FM-1 are not backed up by this app. Back them up with the firmware you are leaving before you switch.
- A firmware marked for the original flash chip is not offered to an FM-1 that reports the newer chip.
- A firmware whose maker's page does the install (it adds a ROM or a licence step) is linked, not installed.
- There is no cancel once a write has started.
