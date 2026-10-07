# Umm updates

## 0.4.3 — Meadow menu — October 7, 2026

- Refresh the game menu with original soft landscape artwork, dimensional controls, and a bright palette shared by the workshop, player, sticker collection, profiles, and settings.
- Keep **Play**, **Create**, **Stickers**, and **You** easy to reach, with clearer phone browsing arrows and compact profile rows.
- Add light, subtle starter card looks and coordinated random designs. Detailed textures, motion, touch effects, frames, and other expressive design controls remain available.
- Keep saved looks, custom styles, and explicit sticker arrangements. Legacy single-emoji decorations move to a small, faint lower corner beneath the readable question.
- Preserve the selected card's lift into the player, manual card flips, reduced-motion support, and complete question and answer text.
- Keep the existing Google account flow, game rules, privacy, online data, package identity, and local drafts and saved looks.

Build and automated mobile/desktop layout, game flow, account, customization, and card-experience checks passed. Interactive Google sign-in and live push delivery on a physical Android device remain unverified.

## 0.4.2 — Compact You screen — October 7, 2026

- Replace the large illustrated player card with a compact name and username header, and reduce Google connection status to a small row.
- Put coins, answers, questions, and stickers in prominent tiles. Tap coins to play, answers or questions to open private history, and stickers to visit your collection.
- Move **Your quizzes** above activity, with a quiz count and visible Create button.
- Keep question and answer history under **Your activity**, and place extra participation and rating totals in an expandable **More stats** section.
- Preserve profile editing, player search, answer editing, anonymous privacy, and the existing release's installation identity and local data.

Automated profile/account and mobile/desktop layout checks passed. Interactive Google sign-in and live push delivery on a physical Android device remain unverified.

## 0.4.1 — Google accounts and mystery cards

- Require Google sign-in followed by a unique username before gameplay. The hosted API independently enforces both requirements. Returning players keep their account's questions, answers, and coins; switching to an existing Google player does not merge wallets.
- Add a browsable mystery stack with shuffle, answer-time filters, timer sorting, and All, New, and Answered views. Browsing keeps question text, answer previews, quiz titles, and answer formats hidden until play.
- Lift selected cards into a floating, scrollable player. Quiz play advances automatically after submission, skipping, or timeout, with reduced-motion support.
- Keep all questions and shared responses together in a compact completion recap, with direct question voting and answer tools.
- Add creator thumbs-up and thumbs-down reactions. A creator's first thumbs-up awards that responder one bonus coin per question; changing or removing the reaction does not repeat or reclaim the reward.
- Add optional voice typing for supported text fields when the hosted transcription provider is configured. Inserted text remains editable and is never submitted automatically.
- Preserve account-specific workshop drafts, improve account switching and sign-out, and keep anonymous contributions out of public profile history.

Google provider and Android configuration have been checked, and automated account tests cover the new flow. Interactive Google sign-in on a physical Android device remains to be verified.

## 0.4.0 — Hosted Firebase game

- Connect Android builds to the hosted Firebase API by default, removing the need for a computer, LAN server, or ADB tunnel during normal play.
- Store identities and shared game data persistently with Firebase Authentication and Firestore.
- Support migration of previously imported local player histories and wallets.
- Add optional Android completion notifications through Firebase Cloud Messaging and cached pool browsing while offline.

## 0.3.2 — Umm name

- Rename the app and APK files to Umm while preserving existing package identities, signing identity, and saved-data keys.

## 0.3.1 — Signed Android release

- Add an optimized release build with a dedicated persistent signing key and debugging disabled.
- Keep the release installation separate from the development app and its local data.

## 0.3.0 — Game menus

- Refresh the home screen, workshop, player, response reveal, sticker shop, and profile with illustrated menus, compact controls, and accessible button names.

## 0.2.0 — Card style studio

- Add editable colors, gradients, textures, motion, touch responses, typography, answer tiles, borders, and shadows.
- Add independent sticker layers with drag, resize, rotate, fade, flip, duplicate, and reorder controls.
- Carry the last design into new cards and quizzes, save reusable looks, and synchronize a whole quiz's style.
- Make quiz titles optional, with a title derived from the first question when left blank.
