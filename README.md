# BSD Brawl Mod — Decompiled Source Tree

The fully decrypted, deobfuscated and decompiled **main mod script** of
BSD Brawl (Voron Studio private server, client `v69.230`, package
`bsd.suitcase.release`, `channel=plus`) — the script normally delivered
encrypted by `bsdbrawl.com/api/v3/GetScript` and executed by a custom
QuickJS engine inside a protected Frida gadget.

All **433 webpack modules** of the bundle, reorganized into **one file per
mod feature** plus clean category folders. Every merged file keeps the
original module banners (`// ----- MODULE <id> — <name> -----`) so webpack
IDs stay cross-referenceable — full mapping in [`MODULES.md`](MODULES.md).

## Layout

| Folder | What's inside |
|---|---|
| [`features/`](features/) | **One file = one mod feature** (44 features). Satellite modules (items, selectors, popups) are merged into their feature's file. |
| [`menu/`](menu/) | The mod menu itself: mod menu, debug menu, configuration popup, icons, UI inspector |
| [`ui/`](ui/) | Reusable UI kit: popups, buttons, text fields, containers, graphics kit, screens, social entries |
| [`network/`](network/) | BSD+ API client, subscription, game proxy, host rewriter, server connection, downloads |
| [`messages/`](messages/) | Game protocol + BSD+ protocol message classes |
| [`game/`](game/) | Game internals: data classes, logic core, client mirrors, players/teams, modes, objects, gatcha |
| [`core/`](core/) | Bootstrap, config & persistence, localisation, protection/integrity, platform bridge (JNI/libc), webpack bootstrap |
| [`utils/`](utils/) | Crypto helpers, misc utilities & listeners |

## Start here

- **Feature list**: [`FEATURES.md`](FEATURES.md) — every feature, its file, its
  config key(s) and its webpack module IDs.
- **Entry chain**: [`core/bootstrap.js`](core/bootstrap.js) (module `8156` → `Init`)
  and [`core/webpack-bootstrap.js`](core/webpack-bootstrap.js).
- **The loader that fetches/decrypts this script** (stage-1 loader, XOR-20 key,
  GetScript signature check) is a separate, smaller script — not part of this bundle.

## Notes for reconstruction

- Files are decompiler output from custom QuickJS bytecode: classes, getters,
  setters, loops and literals are reconstructed, but ~575 spots still carry
  `<underflow>` markers (destructuring / multi-assign chains) and some locals
  keep generated names (`v12`, `a_3`, …).
- Each module banner lists its exports and webpack dependencies (IDs), which
  resolve via [`MODULES.md`](MODULES.md).
- `menu/mod-configuration.js` + `core/config.js` together define every toggle
  the mod menu exposes.
