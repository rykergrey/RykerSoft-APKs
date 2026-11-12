# RykerFM1 User Guide

## Table of Contents

- [Getting Started](#getting-started)
- [The Library](#the-library)
- [A Firmware's Page](#a-firmwares-page)
- [What You Keep](#what-you-keep)
- [The Bench](#the-bench)
- [Installing a Firmware](#installing-a-firmware)
- [If an Install Stops](#if-an-install-stops)
- [New Versions](#new-versions)
- [Export and Import](#export-and-import)
- [Tips](#tips)

## Getting Started

Open RykerFM1 and the Library loads the list of firmwares from The Firmware Hub. The two tabs at the bottom are **Library** and **Bench**.

To use the Bench, connect the FM-1 to the phone with a USB-C data cable. Android asks whether RykerFM1 may use the device; allow it. The top right of the screen then shows the unit's identity, for example `FM-1_975`.

## The Library

- The button at the bottom right switches between a shelf of pictures and a dense index.
- The magnifier searches names, makers and descriptions.
- The filter button narrows the list by type, style, sound engine and more. Each choice shows how many firmwares it leaves.
- The order button sorts by most installed, top rated, recently updated, new on the hub or A to Z.
- The wide button at the bottom left chooses what you are looking at: all firmwares, favourites, the watch list, what you installed, or one of your lists.

The list is read from the hub when you open the app and a day has passed since the last read. It is never read more often than that.

## A Firmware's Page

Tap a firmware to open its page. It shows the maker's text, the hub's rating, which FM-1s it runs on, its release and licence, and links to its repository, site, browser emulator, editor and issue tracker. Tap the picture to see it whole and pinch to zoom.

When the firmware has release notes on GitHub, the page shows them for the listed version.

## What You Keep

The row at the bottom of a firmware's page holds four buttons:

- **Heart**: a favourite.
- **Pin**: holds the firmware at the top of the Library.
- **Eye**: puts it on the watch list, so a new version is flagged.
- **List**: adds it to a list you name.

You can also give it your own star rating and write notes. Each note is stamped with the time and the version it is about. Editing a note changes its words and never its stamp.

All of this stays on the phone.

## The Bench

The Bench shows the FM-1 on the cable, its identity and its flash chip, the package that is ready to install, and the history of installs made from this phone. Reading the identity is safe and changes nothing on the unit.

## Installing a Firmware

Installing replaces the firmware on the FM-1. Back up your projects first, with the firmware you are leaving.

1. Connect the FM-1 and check that its identity shows.
2. Open a firmware's page and tap **Install**, or go to the Bench and tap **Open a file** to pick a `.fwsc` file.
3. Confirm. The app downloads the package, checks it against the hub's catalog, and writes it.
4. Leave the cable in and the app open until it says the install is finished. The screen stays on by itself.

There is no cancel once the write has started. Stopping halfway is how an install goes wrong.

Some firmwares show **Install on its page** instead: the maker's own page does that install, and the button opens it. A firmware made only for the original flash chip shows **Not for this FM-1** on a unit with the newer chip.

## If an Install Stops

If the cable comes out or the write drops, connect the FM-1 again and open the Bench. The app looks for the unit's update loader and finishes the install. The Bench says where the failure happened.

## New Versions

A firmware you install is put on the watch list at the version you installed. When the hub lists a newer one, the Library says so and the firmware's page shows what changed. Once a day at most, the app also checks in the background and posts one notification when a watched firmware has a new version.

The Bench offers the firmware that was on the unit before the last install, so you can put it back with one tap.

## Export and Import

In the Library, press the wide button at the bottom left and choose **Lists and backup…**. Under Backup, **Export to a file…** writes everything you keep to one JSON file, and **Import a file…** adds a file's contents to what is on the phone and removes nothing.

## Tips

- Use a data cable. A charge-only cable will not show the FM-1.
- To install without a connection, turn on **Keep the package on this phone** on the firmware's page while you are online.
- If the FM-1 does not appear, unplug it and plug it in again, and allow the USB permission when Android asks.
