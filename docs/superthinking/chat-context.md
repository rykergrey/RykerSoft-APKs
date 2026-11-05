# Chat context and action reviews

Open a card's Chat tab and choose **Manage context**. The same manager is available from the chat toolbar.

- **Card tabs & media** attaches text tabs, image/audio tabs, or individual media items. Media is sent as image/audio data, not just filenames. Preview media before attaching it.
- **Actions** attaches any saved action as a reusable skill reference. Attaching an action does not run it. The shared harness identifies its purpose, instructions, configuration, output contract, and saved reviews separately from the user's chat request.
- **Attached** shows the current sources. Detach individually or use **Detach all**. Earlier messages keep their historical snapshots; detaching does not erase the conversation.

Text and action definitions can be opened with **View / edit**. Images/audio can be previewed, renamed, or replaced with a file. Text selections are snapshots: editing a selection changes the attachment rather than its original tab. Every source edit has a before/after review and requires **Confirm and save**. Chat-generated proposals follow the same confirmation flow. Proposals are rejected when the source has changed or is no longer attached. Chat never executes attached utility code.

## Google Sheets Formula

The built-in **Google Sheets Formula** action is available to existing and new users. Copy a description of the desired formula, then run the action. From the context manager, **Run from clipboard** displays the formula with a **Copy formula** button. From the Actions panel, execution creates a text tab containing only the formula.

Each run has two separate model calls: formula generation and an improvement review. The formula response must pass a conservative output-format check; it is not executed in Sheets. The second call sees the action definition, the current input/output, and the previous reviews. It suggests an instruction change or no change, always with pros and cons. A failed review does not discard a successful formula.

The latest 10 inputs, outputs, and reviews are stored on the action using the existing guest/cloud action persistence. Expand **Run reviews** in the context manager to review or dismiss suggestions. Accepted proposals update the instructions after explicit confirmation. Accepted and dismissed reviews inform later improvement reviews. This is persistent action feedback, not model training. No Google account or spreadsheet connector is required; the action uses the configured Gemini key.

## Verification

`npm run check` runs TypeScript checks, Vitest, and the production build. Context tests cover attachment identity/scope, rejected edits, selected-text write isolation, multimodal send/regeneration, strict formula output, and independent review failure handling. Model calls are mocked in tests.
