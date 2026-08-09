# Photocraft.ing User Guide

AI photo editor for transforming images with Gemini and OpenAI — local feed, craft actions, chat, and paint markup.

## Table of Contents

- [1. Getting started](#1-getting-started)
- [2. Feed and results](#2-feed-and-results)
- [3. Actions and crafts](#3-actions-and-crafts)
- [4. Multi-image and references](#4-multi-image-and-references)
- [5. Transformation chat](#5-transformation-chat)
- [6. Action Builder](#6-action-builder)
- [7. Paint, markup, and crop](#7-paint-markup-and-crop)
- [8. Download and share](#8-download-and-share)
- [PRO Features](#pro-features)
- [10. Microphone](#10-microphone)
- [11. RykerSoft AI unlock](#11-rykersoft-ai-unlock)
- [12. Android and desktop](#12-android-and-desktop)

## 1. Getting started

1. Open Photocraft.ing and upload a source photo (file picker, drag-and-drop on desktop, or Camera/Photos on Android).
2. Browse the Actions panel for catalog crafts, or open Transformation Chat to describe a change in plain language.
3. For AI generation, ask the RykerSoft administrator to enable Photocraft.ing for your account and sign in under **Settings → RykerSoft AI unlock** (see section 11), or paste your own keys in Settings.
4. Non-AI browsing of your local feed still works when AI is locked.

## 2. Feed and results

- The home feed shows your original and generated images.
- Tap to select; multi-select for multi-input transforms (first image is primary).
- Peek original / before-after on results.
- Delete a single image or clear all transformations from the header controls.

## 3. Actions and crafts

1. Open the Actions panel.
2. Pick a catalog craft (Art, Characters, Photography, World) or one of your custom My Actions.
3. Fill any form controls (sliders, lists, text, colors, reference slots).
4. Optionally change provider/model for this run, then generate.
5. Favorite, rename, hide defaults, or fork actions into My Actions as needed.

## 4. Multi-image and references

- Some crafts accept reference-image slots in the form.
- On the feed, select multiple images: first = primary, others = Gemini reference images.
- OpenAI image edits use a single primary image path.

## 5. Transformation chat

1. Open Transformation Chat.
2. Describe what you want changed (optionally with mic dictation).
3. Review the proposed prompt, then Execute.
4. Use **Save as new action** to send the result into Action Builder.

## 6. Action Builder

- Create custom actions with chat assistance or the manual editor.
- Define controls and a prompt template, then save to My Actions.
- Refine an existing action with “Chat with action.”

## 7. Paint, markup, and crop

- Open paint/markup on an image to draw guidance for the model.
- Use crop when you want a tighter framing before generating.
- Markup is sent with the generation request so the model can follow your annotations.

## 8. Download and share

- Download a result or a before/after composite.
- On Android, save into the Photocraft album via the system gallery helpers when available.
- Share uses the platform share sheet where supported.

## PRO Features

- **Gemini** — native image models (Flash default; Pro Image when unlocked).
- **OpenAI** — GPT Image models when an OpenAI key is available.
- Set defaults under Settings → Image generation defaults; override per action or chat run.
- Pro models unlock when RykerSoft AI is unlocked or when you supply your own keys.

## 10. Microphone

- Mic buttons in Transformation Chat and Action Builder use OpenAI Whisper.
- Requires an OpenAI key from hub sync or a manual key in Settings.

## 11. RykerSoft AI unlock

AI image transforms, Action Builder chat, prompt optimization, and related Gemini features need an unlock. Browsing your local feed and organizing actions still work without AI.

1. In the **RykerSoft App Manager**, create or sign in to your RykerSoft account.
2. Open Photocraft.ing’s page and use **PRO ACCESS INFO** to confirm the account the administrator should authorize.
3. After the administrator enables `com.rykersoft.photocrafting` for that account's Firebase UID, install and open Photocraft.ing, go to **Settings → RykerSoft AI unlock**, and sign in with the **same** RykerSoft account.
4. Provider access syncs automatically. Use **Refresh keys** if PRO features do not appear right away.

Notes:
- Pro access is the package entitlement on your Firebase UID; no reusable family code is required.
- Keys you enter manually in Settings take priority over synced keys.

## 12. Android and desktop

- **Android** — Capacitor app `com.rykersoft.photocrafting`; camera/gallery pick; hardware Back dismisses overlays.
- **Windows** — Electron portable build with the same UI and file drag-and-drop.
- Image library stays on the device (IndexedDB); there is no required cloud album login.
