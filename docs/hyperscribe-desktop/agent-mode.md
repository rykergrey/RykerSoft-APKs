# Agent mode

The **Agent** toggle beside the Chat composer connects to Codex CLI or Gemini CLI installed
on this computer. It starts off each time Hyperscribe launches. Turn it on for
file tasks; turn it off to use the selected text-generation provider again.

## Global AI provider override

The **sliders / AI button in the bottom-right footer**, alongside the existing
global toggles, applies across every tab. **Left-click** to toggle the override;
**right-click** to configure it (keyboard users can focus it and use the context-menu key).
The highlighted state and tooltip show whether it is on. The selection and enabled
state survive restart; switching it off restores normal settings without rewriting
saved actions, personas, or Chat model selections.

The dialog has two tabs: **While override is ON**, and **Normal text provider
(override OFF)**. Both offer Gemini API, Codex CLI, or Gemini CLI. Choose a model,
authentication method for CLI connections, and supported generation parameters.
Empty/default fields retain the normal settings for Gemini API or the configured
CLI model/provider defaults. Provider-specific model choices are not reused when
switching between providers in the dialog. Codex supports reasoning effort, not
temperature; Gemini supports temperature/thinking. Google Search grounding is
available only on Gemini API. Unsupported explicit settings report an error;
there is no automatic fallback to a different provider or billing method.

Use **CLI connections: sign in / API keys…** to configure account access. Gemini API
uses its existing key in the main Settings dialog. Subscription mode consumes the
account's available allowance; it is neither unlimited nor local inference.

The routing covers Inbox actions, saved/custom actions, before/combined/after
pipelines, hotkeys, Chat (streaming, non-streaming, and regeneration), Python/action
generation and repair, snippet/template/category optimization, and image-to-text.
Text-only CLI requests expose no file or shell tools. Images are sent inline to
the selected provider; unsupported image capabilities fail instead of using another
provider. The original action instructions and output-format requirements remain intact.

Each queued job snapshots its provider, model, parameters, and CLI connection
references when submitted; changing the override affects new jobs, not later
steps of an already queued/running pipeline. Secrets remain in the credential store.
Agent Chat also honors the enabled override, including provider/model/auth settings,
and starts a fresh session when relevant settings change. If Gemini API is selected,
Agent Chat reports that it needs a CLI provider; turn Agent mode off to use normal
text Chat with the API. It never ignores an enabled global override.

Audio recording, speech recognition, speech synthesis, and local non-LLM utilities
are separate capabilities and keep their own settings. Any LLM text preparation
they invoke uses the shared text provider. CLI processes currently start per
request; Gemini requests are serialized to protect its shared private profile.
Codex text responses are delivered when the final answer is complete, without
mixing agent progress into transformed text. Gemini text supports incremental output.

## Setup

Open **Agent settings…**, choose **Codex** or **Gemini CLI**, and choose the
authentication method. Executable, model, and authentication preferences are
remembered separately for each provider. The allowed folders apply to both.

- **Account / subscription:** click **Sign in with ChatGPT…** or **Sign in with
  Google…** and finish the provider's browser login. Use the account linked to
  your plan. Codex reuses its existing CLI login; signing in here updates that
  shared login. Gemini uses a private Hyperscribe CLI profile, so sign in once
  here even if you already signed in in your terminal. Google AI Pro/Ultra
  accounts use their available Gemini CLI quota; eligible free accounts also work.
  Some Google organization accounts need the optional Google Cloud project field.
  **Check connection** checks the current login without generating a response.
- **API key:** enter an OpenAI key for Codex or a Gemini Developer API key for
  Gemini and click **Save**. This uses separate API billing/quota, not your
  subscription allowance. API access is validated by the first real request.
  Keys are masked and saved in the OS credential store when available. If that
  store is unavailable, the app tells you the key is memory-only and must be
  re-entered after restarting. Keys are not placed in Chat, settings JSON, session
  references, command-line arguments, or sync.

There is **no automatic fallback** between subscription and API billing. Provider
quotas, model access, and account restrictions still apply. This is not unlimited
usage. Transcription and text-to-speech keep their separate providers.

Choose the CLI executable if automatic detection fails. Install the actual CLI,
not a launcher that prints setup output to stdout. Gemini CLI also requires its
supported Node.js runtime. The model field is optional; Codex uses medium reasoning.
Protocol compatibility was tested with Codex CLI **0.153.4** and Gemini CLI
**0.59.0**. Older versions may need updating, especially for Gemini's ACP API-key
extension. There are no API calls to install or purchase a subscription.

The default allowed folders are `Downloads` and `audio` inside your home folder.
Add or change paths in Agent settings. A destination folder can be listed before
it exists. Paths must be absolute; symbolic links and Windows junctions are not
supported. Settings and Codex session references stay local to this computer.

## Using it

Click a file link in a Chat response to open it in the default application for
that file type. Folder links open that folder in the default file manager.
The response stays visible in Chat. Missing files or unavailable default
applications show an error. Older home-relative links (such as
`Downloads/Photos`) resolve from your home folder.

For example: “Find audio files in my Downloads folder and move them into a new
audio folder in my home directory.” The agent inspects real directory entries,
then presents a table of proposed changes. Uncheck any rows you do not want, then
choose **Apply selected changes**. Cancel declines that batch.

Agent can list files, inspect metadata, create directories, and copy, move, or
rename regular files. It scans subfolders only when requested. Creating a folder
and moving files into it can appear in one preview; keep the folder-creation row
checked when approving dependent moves. It cannot overwrite existing files,
delete files, move directories, run arbitrary shell commands, or execute generated
Python. Personas/action stacks and Google Search controls apply to regular Chat.

Moves copy and verify the file contents before removing the original; copies keep
the original. Changed sources and destination conflicts produce errors instead
of silent overwrites. Large copies can take time. Stop cancels pending approvals
and stops between copy chunks/operations; completed operations remain applied.
There is no automatic rollback or Undo button. A follow-up request can propose
moving files back, with a new preview.

**Activity…** shows progress and the latest operation results. Completed Agent
messages have a **File changes…** button with the executor's results. If a run
fails or is stopped after making changes, those results are preserved in Chat.
The private `agent/operations.jsonl` file inside the Hyperscribe data directory
also records attempted and completed operations. A `started` record without a
matching result after a machine crash requires checking both paths before retrying.

Continue a task with another message. Agent conversations resume the matching
local provider session when the transcript and configuration match. Editing,
forking, changing provider, login identity, API key, model, or folders starts a
fresh session using the visible history.
Agent responses do not offer Regenerate, because repeating an agent turn can
repeat file operations.

The CLI runs locally but sends prompts, filenames, tool results, and attached Chat
context to the selected provider (OpenAI or Google) for model processing. OAuth
credentials are managed by the CLI; Hyperscribe never collects your account
password. Codex keeps its usual account storage. Gemini's account cache lives in
the private Hyperscribe data directory under `agent/gemini/subscription/.gemini`.
API mode has a separate Gemini profile; Codex API credentials are ephemeral in
the CLI process so using an API key does not replace its saved ChatGPT login.
This feature does not send audio contents for transcription. Agent configuration,
credentials, and CLI sessions are machine-local, outside sync.

## Implementation

`codex_agent.py` runs a dedicated `codex app-server --listen stdio://` subprocess,
speaks JSON-RPC, and exposes only the three structured Hyperscribe file tools.
Shell execution, apps, plugins, hooks, browser/computer tools, web search, and
delegation are disabled for these sessions. Codex is configured read-only with no
approval escalation; file writes are performed by the reviewed host tools.
`agent_files.py` enforces allowed paths, exact previews, no-overwrite creation,
source checks, cancellable copies, verification, and an operation journal.

`agent_runtime.py` shares process lifecycle, streaming transport, cancellation,
and native approval handling. `gemini_agent.py` uses Gemini's built-in
**Agent Client Protocol (ACP)** over stdio. `agent_mcp.py` exposes the same three
tools using an ephemeral loopback-only MCP endpoint with a random bearer token.
It rejects browser origins and unauthenticated calls, and accepts tool execution
only during an active user request. Built-in Gemini tools, extensions, hooks,
skills, local environment loading, and subagents are disabled. Only the empty
application-owned workspace is trusted; file access still goes through the
host's allowed-folder checks. CLI-side slash commands are not exposed through Chat.

ACP is the existing cross-agent standard for client integration. Gemini supports
it natively; Codex is available through an ACP adapter. This implementation
uses native Gemini ACP plus native Codex app-server behind a shared worker API:
the Codex adapter would add another executable dependency without improving the
file-review controls. MCP complements ACP by standardizing tools; it does not
replace provider authentication or convert subscriptions into generic API access.

References: [Gemini ACP](https://geminicli.com/docs/cli/acp-mode/),
[Gemini authentication](https://geminicli.com/docs/get-started/authentication/),
and [ACP agents and adapters](https://agentclientprotocol.com/get-started/agents).

Before upgrading Gemini CLI, run `python tests/gemini_cli_smoke.py /absolute/path/to/gemini`
using the project's Python environment. This drives the real CLI against a local
fake model endpoint and disposable files, verifies that only the three expected
tools are exposed, and tests a native approved move without API billing. The
regular pytest suite uses protocol fixtures and covers approval/decline/stop,
provider routing, account isolation, secret redaction, and file safety.
Also run the same smoke command with `--text-only` to verify zero exposed tools
and explicit generation settings through the installed CLI without API billing.

The integration uses the documented [Codex app-server interface](https://learn.chatgpt.com/docs/app-server)
and [ChatGPT authentication](https://learn.chatgpt.com/docs/auth). The raw
app-server/dynamic-tool interface is experimental, so protocol regression tests
and a temporary-file live smoke test should accompany Codex upgrades.
