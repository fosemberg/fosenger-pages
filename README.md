# fosenger-pages

Static production build of [**Fosenger**](https://github.com/fosemberg/fosenger) — a serverless,
peer-to-peer WhatsApp-style messenger (React + MobX + raw WebRTC).

**Open the app:** https://fosemberg.github.io/fosenger-pages/

GitHub Pages serves the `docs/` folder of this repository. The bundle is fully static: identity,
contacts, messages and media stay in your browser's IndexedDB, and connections between two people
are made directly (copy/paste connection codes, then WebRTC).

## Updating the build

From a checkout of the `fosenger` repository placed next to this one:

```bash
bun install
bun run deploy:pages        # builds apps/web and replaces docs/ here
```

(`PAGES_DIR=/path/to/fosenger-pages/docs bun run deploy:pages` if the repositories are not siblings.)

Commit and push the updated `docs/` folder; GitHub Pages picks it up automatically.
