# ComicCraft.ing specifications

- Android package: `com.rykersoft.comiccrafting`
- Initial release: 1.0.0, version code 1
- Minimum Android: 7.0 (API 24); target API 36
- React 19, TypeScript, Vite, Capacitor 8
- Bundled Tailwind styling and fonts
- Local IndexedDB comic storage; editable ZIP backup exchange
- Android file sharing via the system share sheet
- Google sign-in through Android Credential Manager and Firebase Auth
- Hub project: `rykersoft-abe84`
- Pro entitlement: exact Boolean field in `users/{uid}/entitlements/apps`
- Gemini credential delivery: entitlement-scoped `providerKeys/com.rykersoft.comiccrafting`
- AI models: Gemini 2.5 Flash for scripts/captions; Gemini 3.1 Flash Image for artwork
- Provider keys are retrieved at runtime, never baked into the release or stored in localStorage
- Images and generation prompts are sent to Google Gemini when AI tools are used
- Public installation is independent of Pro authorization
