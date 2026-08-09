# Photocraft.ing

AI-powered photo editor for transforming images with Gemini and OpenAI image models. Local feed storage, reusable craft actions, transformation chat, paint markup, and custom Action Builder — on Android and Windows desktop.

## Features

- **Local image feed** — upload a source photo; keep originals and generated results in on-device IndexedDB
- **Craft catalog** — built-in actions across Art, Characters, Photography, and World (Anime Studio, Clean Up, Selfie Merge, Room Remodeler, and more)
- **My Actions** — favorites, recents, search/tags, custom actions, hide or restore catalog defaults
* **Transformation chat** — describe a change, review the proposed prompt, execute, or save as a new action
* **Action Builder** — chat-assisted or manual creation of reusable action schemas and prompt templates
- **Paint & crop** — annotate or crop before generating so the model can follow your markup
- **Multi-image** — feed multi-select and reference-image slots (Gemini multi-image path)
* **Providers** — Google Gemini native image and OpenAI GPT Image; defaults in Settings, override per run
* **Speech-to-text** — OpenAI Whisper mic input in chat and Action Builder when an OpenAI key is available
- **Download / share** — save results and before/after composites; Android gallery save to a Photocraft album

## PRO Features

Items marked * require an administrator-granted entitlement for `com.rykersoft.photocrafting`, followed by sign-in to the same RykerSoft account under Settings. Free local-feed, action-organizing, paint, crop, download, and share tools remain available without Pro access; manual keys still take priority when supplied.

## Platforms

- Android (Capacitor), package `com.rykersoft.photocrafting`
- Windows desktop (Electron portable)
