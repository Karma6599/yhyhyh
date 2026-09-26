# BSD Brawl — Decompiled Mod Source (channel=plus)

Fully decrypted, deobfuscated and decompiled source of the **BSD Brawl**
mod's main script (`GetScript?name=suitcase&version=38&arch=arm64-v8a&channel=plus`),
reconstructed from the custom QuickJS bytecode back into **433 webpack modules**.

## Repo layout — `features/` mirrors the in-game menus

| Folder | What it is |
|---|---|
| [`features/mod-settings/`](features/mod-settings/) | every toggle of the **BSD BRAWL SETTINGS** popup (68 files, exact in-game names) |
| [`features/mod-menu/`](features/mod-menu/) | every **MOD MENU** button + the sub-menus it opens (26 files) |
| [`features/debug-menu/`](features/debug-menu/) | **all 185 buttons of the Debug Menu**, one file per button, grouped by the menu's own categories (ACCOUNT, BATTLE, GFX, PREVIEW, ...) |
| [`features/battle-ui/`](features/battle-ui/) | buttons / overlays living directly in the battle screen |
| [`features/map-editor/`](features/map-editor/) | the map-maker subsystem |
| [`menu/`](menu/) | the menu frameworks themselves (ModMenu, ModSettings popup, DebugMenu + all button specs, handler registry) |
| [`ui/`](ui/) | reusable UI kit: popups, buttons, text fields, containers, graphics, screens |
| [`network/`](network/) | BSD+ API client, host rewriter, connection, downloads |
| [`messages/`](messages/) | game + BSD protocol messages (incl. every Debug Menu server action) |
| [`game/`](game/) | game data/logic wrappers |
| [`core/`](core/) | bootstrap, config (all keys + defaults), localisation, protection, platform |
| [`utils/`](utils/) | crypto + misc helpers |

## Indexes

- **[FEATURES.md](FEATURES.md)** — every feature grouped exactly like the in-game menus
- **[MODULES.md](MODULES.md)** — all 433 webpack module IDs → file

## How the names were recovered

The mod renders every menu entry through its own string tables:

1. `assets/bsd/internal/localization.json` (441 EN entries)
2. EN overrides compiled into the script (module 6528 `LocalisationOverrides`, 151 entries — wins)
3. if no entry exists, the game falls back to the raw TID key — those files are
   named after the key (that *is* what the menu shows)

Debug Menu buttons are rendered through the same fallback, so their raw labels
(`ADD_ALL_RESOURCES`, `TOGGLE_FPS_COUNTER`, ...) are literally what the game displays.

## Reading the sources

Each file starts with a banner naming the feature (in-game name, TID, config
key, where it's implemented) followed by the original webpack modules, each
introduced by `// ----- MODULE <id> — <name> -----`. The decompile came from
QuickJS bytecode via a custom emulator harness; ~575 spots are still marked
`<underflow>` (destructuring chains) and are being reconstructed module by module.
