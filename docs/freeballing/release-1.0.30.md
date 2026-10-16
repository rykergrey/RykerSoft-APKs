# FreeBall.ing v1.0.30

Android and Windows release built from the complete current source. Android package `com.rykersoft.freeballing`, versionCode 46; Windows portable x86_64 EXE, version 1.0.30.0.

- Rebuild Android navigation as separate Home, Community, More, and Profile screens, preserving destination browsing state and returning through Android Back in order
- Add real board thumbnails with bounded shared rendering/cache work, compact list filters, and clear loading, empty, retry, and load-more states
- Carry square-corner paper controls, opaque panels, raised shadows, and the selected board's rail color through mobile menus and gameplay
- Keep the supplied logo visible as the selected board preview expands into its matching gameplay frame, with a shorter dissolve for reduced motion and a safe pause when the transition is interrupted
- Keep mobile previews static and remove automatic mobile idle demos; retain animated previews and attract mode on desktop
- Stop hidden/inactive ambient processing and suspended score effects while retaining the Android 60 FPS presentation target and existing physics/scoring
- Reduce local high-score entry to three initials and fix touch direction changes so players can scroll up or down again without lifting their finger; public usernames remain one to five letters
- Apply square-corner styling to desktop editor controls while preserving the existing Foreground/Background studios and authoring tools

The full desktop editor, guest/offline play, optional Google sign-in, one-to-five-letter public usernames, and existing scoring remain available. Local three-letter initials are separate from the public account name. Existing local player preferences longer than three letters use their first three A–Z letters; stored score history is retained.

Validation results and artifact hashes are recorded separately with this release. Linux-hosted checks do not establish native Windows browser sign-in or DPAPI behavior, or Android thermal performance.
