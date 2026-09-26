# BSD Brawl Mod — Feature Index

Every file in [`features/`](features/) is ONE mod feature
(satellite webpack modules merged into the same file, original module
IDs kept in the section banners). Config keys refer to entries in
`core/config.js` (module 4009, the mod's persisted config registry).

| Feature | File | Config key(s) | Modules |
|---|---|---|---|
| FPS Counter | [`features/fps-counter.js`](features/fps-counter.js) | `ShowFPSCounter` | 9786 |
| FPS Limit | [`features/fps-limit.js`](features/fps-limit.js) | `FPSLimit` | 1580, 2660 |
| Damage / DPS Overlay | [`features/damage-dps-overlay.js`](features/damage-dps-overlay.js) | `ShowDPS` | 8138 |
| Trajectory Extender | [`features/trajectory-extender.js`](features/trajectory-extender.js) | `ExtendedTrajectory` | 5003 |
| Enemy Tracer | [`features/enemy-tracer.js`](features/enemy-tracer.js) | — | 6584 |
| Tile Grid | [`features/tile-grid.js`](features/tile-grid.js) | `TileGrid` | 8601 |
| Ally Respawn Timer | [`features/ally-respawn-timer.js`](features/ally-respawn-timer.js) | `AllyRespawnTimer` | 6858 |
| Attack Range Indicator | [`features/attack-range-indicator.js`](features/attack-range-indicator.js) | — | 2255 |
| Hitbox Renderer | [`features/hitbox-renderer.js`](features/hitbox-renderer.js) | — | 4076 |
| Battle Debug Overlay | [`features/battle-debug-overlay.js`](features/battle-debug-overlay.js) | — | 3614 |
| Battle Net Stats Overlay | [`features/battle-net-stats.js`](features/battle-net-stats.js) | `ShowBattleConnectionIndicator` | 4921 |
| Smooth HUD | [`features/smooth-hud.js`](features/smooth-hud.js) | — | 5230, 6364 |
| Latency Tools | [`features/latency.js`](features/latency.js) | — | 9322, 1474, 8335, 7638, 4494, 3187 |
| Combat HUD | [`features/combat-hud.js`](features/combat-hud.js) | `HideBattleBlackBars` | 2476 |
| Overlay Rendering Backend | [`features/overlay-rendering.js`](features/overlay-rendering.js) | — | 1301, 5508, 3388 |
| Text Outline | [`features/outline.js`](features/outline.js) | `OutlineColor` | 8852, 3309 |
| Kill Effects | [`features/kill-effects.js`](features/kill-effects.js) | `KillEffectType` | 4915, 2662, 4179, 3627 |
| Particle Styles | [`features/particles.js`](features/particles.js) | `ParticleStyle`, `ParticleCount`, `ParticleScale`, `ParticleSpeed`, `ParticleAnimationDisabled` | 5291, 7545, 3041, 280, 4367, 7820, 6030, 8944 |
| Fog Override | [`features/fog.js`](features/fog.js) | `FogType` | 4769, 5222 |
| Custom Marks | [`features/custom-marks.js`](features/custom-marks.js) | — | 7146 |
| Watermark | [`features/watermark.js`](features/watermark.js) | — | 7703 |
| Battle Camera | [`features/battle-camera.js`](features/battle-camera.js) | `ShowBattleCameraButton`, `DisableShake` | 3625, 4188, 6247 |
| Battle Chat | [`features/battle-chat.js`](features/battle-chat.js) | `EnforceBattleChatButton`, `BattleTextChat` | 7944, 4551, 515 |
| Instant Exit | [`features/instant-exit.js`](features/instant-exit.js) | `BattleEndInstantExit` | 1052 |
| Auto Play Again | [`features/auto-play-again.js`](features/auto-play-again.js) | `AutoPlayAgain`, `ShowAutoPlayAgainRadioButton` | 5420 |
| Fast Play Again | [`features/fast-play-again.js`](features/fast-play-again.js) | `ShowFastPlayAgainButton` | 3988 |
| Skip Tutorial | [`features/skip-tutorial.js`](features/skip-tutorial.js) | — | 6579 |
| Battle Log Share | [`features/battle-log-share.js`](features/battle-log-share.js) | — | 3982 |
| Disable Bots | [`features/disable-bots.js`](features/disable-bots.js) | — | 5392 |
| Duo Quiz Answers | [`features/quiz-answers.js`](features/quiz-answers.js) | `HighlightDuoQuizAnswers` | 7657 |
| Skin Overrides | [`features/skins.js`](features/skins.js) | `DisableSkins`, `SkinOverrides`, `ShowSkinNamesInProfile` | 8394, 7669, 710, 294, 7435, 9902, 6236, 2053 |
| Themes & Backgrounds | [`features/themes.js`](features/themes.js) | `ThemeBackgroundID`, `ThemeMusicID`, `LegacyBackgrounds`, `SharedBackground`, `RandomThemeMask` | 9244, 7119, 7227, 2562, 3756, 5729 |
| Location Themes | [`features/location-themes.js`](features/location-themes.js) | `LocationThemeOverrides`, `DefaultEnvironments` | 9390, 9739 |
| Custom Fonts | [`features/fonts.js`](features/fonts.js) | `Font` | 3079, 4823, 5637, 9354 |
| Graphics Quality | [`features/gfx-quality.js`](features/gfx-quality.js) | `GfxQualityLevel`, `MemQualityLevel`, `UseLowResGraphics` | 2658 |
| Sound | [`features/sound.js`](features/sound.js) | `SoundMuted` | 7037, 9760 |
| Replay Logger | [`features/replay-logger.js`](features/replay-logger.js) | — | 8073, 4610, 8765 |
| Map Editor | [`features/map-editor.js`](features/map-editor.js) | — | 5765, 6932, 6337, 7394, 4633, 5240, 6994, 7895 |
| Battle Servers | [`features/battle-servers.js`](features/battle-servers.js) | `RegionId` | 9698, 5493 |
| Alternate App Icons | [`features/alternate-icons.js`](features/alternate-icons.js) | — | 9240 |
| Hashtag Code Generator | [`features/hashtag-generator.js`](features/hashtag-generator.js) | — | 4541 |
| Unlock Account | [`features/unlock-account.js`](features/unlock-account.js) | — | 9510 |
| Player Name Display | [`features/player-name-display.js`](features/player-name-display.js) | `PlayerNameOverride`, `ChromaticName` | 9778 |

## Config keys implemented elsewhere

| Config key | Implementing module | Now lives in |
|---|---|---|
| `ShowDPS / ShowOwnPlayerCoordinates` | 7835 BattleScreen | ui/screens.js |
| `ShowBlacklistedPlayersInBattle / ShowAllianceMembersInBattle` | 3000 StartLoadingMessage + 6528 LocalisationOverrides | messages/game-protocol.js + core/localisation.js |
| `HighlightLeonClone` | 7171 LogicCharacterData | game/data-classes.js |
| `ShowCharactersInNames / ShamePlayersWithThumbsdownPin` | 6013 LogicPlayer | game/players.js |
| `SlowMode` | 8775 GameMain + 6139 LogicDataTables | core/bootstrap.js + game/logic-core.js |
| `HideLobbyInfo` | 4009 Config | core/config.js |
| `ShowBSDApiResponse / BSDApiUseAltHost` | 7474 BSDApi | network/bsd-api.js |
| `UseBattleProxy (via BSD+)` | 6312 BSDProxy + 6072 GetBSDBattleProxyMessage | network/proxy.js + messages/bsd-api-messages.js |
| `DevModeEnabled / ShowDebugMenuButton` | 8667 DebugMenu + 8139 ToggleDebugMenuButton | menu/debug-menu.js |
| `ShowTidKeys` | 6528 LocalisationOverrides | core/localisation.js |
| `CustomMods (OldRankMod)` | 9778 PlayerDisplayData | features/player-name-display.js |
