# BSD Brawl Mod — Feature Index (mirrors the in-game menus)

Every file in `features/` is ONE menu entry, named exactly like the
game shows it. Debug Menu buttons keep their raw labels (that is
literally what the game displays). Module banners inside each file
keep the original webpack IDs.

## Mod Settings — `features/mod-settings/`

The **BSD BRAWL SETTINGS** popup (from the game Settings screen).

| In-game name | File | Config key | Implemented |
|---|---|---|---|
| "Instant leave button" | [`instant-leave-button.js`](features/mod-settings/instant-leave-button.js) | `BattleEndInstantExit` | module 1052 |
| "Extra play again button" | [`extra-play-again-button.js`](features/mod-settings/extra-play-again-button.js) | `ShowFastPlayAgainButton` | module 3988 |
| "Auto play again" | [`auto-play-again.js`](features/mod-settings/auto-play-again.js) | `ShowAutoPlayAgainRadioButton` | module 5420 |
| "Text chat in battle" | [`text-chat-in-battle.js`](features/mod-settings/text-chat-in-battle.js) | `BattleTextChat` | modules 7944, 4551, 515 |
| "Always show chat button" | [`always-show-chat-button.js`](features/mod-settings/always-show-chat-button.js) | `EnforceBattleChatButton` | see note in file |
| "Show camera button in battle" | [`show-camera-button-in-battle.js`](features/mod-settings/show-camera-button-in-battle.js) | `ShowBattleCameraButton` | modules 3625, 4188, 6247 |
| "Show latency in battle" | [`show-latency-in-battle.js`](features/mod-settings/show-latency-in-battle.js) | `ShowBattleConnectionIndicator` | module 4921 |
| "Show own brawler coordinates in battle" | [`show-own-brawler-coordinates-in-battle.js`](features/mod-settings/show-own-brawler-coordinates-in-battle.js) | `ShowOwnPlayerCoordinates` | see note in file |
| "DPS counter" | [`dps-counter.js`](features/mod-settings/dps-counter.js) | `ShowDPS` | module 8138 |
| "Show FPS counter" | [`show-fps-counter.js`](features/mod-settings/show-fps-counter.js) | `ShowFPSCounter` | module 9786 |
| "Colored damage" | [`colored-damage.js`](features/mod-settings/colored-damage.js) | `ColoredDamage` | native layer (config key only) |
| "Hide black bars in battle" | [`hide-black-bars-in-battle.js`](features/mod-settings/hide-black-bars-in-battle.js) | `HideBattleBlackBars` | module 2476 |
| "Hide Super targeting in battle" | [`hide-super-targeting-in-battle.js`](features/mod-settings/hide-super-targeting-in-battle.js) | `HideSuperAim` | native layer (config key only) |
| "Show enemy ammo status in battle" | [`show-enemy-ammo-status-in-battle.js`](features/mod-settings/show-enemy-ammo-status-in-battle.js) | `ShowEnemyAmmoStatus` | native layer (config key only) |
| "Show opponent brawlers in friendly room" | [`show-opponent-brawlers-in-friendly-room.js`](features/mod-settings/show-opponent-brawlers-in-friendly-room.js) | `ShowFriendlyRoomOpponents` | see note in file |
| "Highlight Leon clone in battle" | [`highlight-leon-clone-in-battle.js`](features/mod-settings/highlight-leon-clone-in-battle.js) | `HighlightLeonClone` | see note in file |
| "Highlight players who have negative pins in battle" | [`highlight-players-who-have-negative-pins-in-battle.js`](features/mod-settings/highlight-players-who-have-negative-pins-in-battle.js) | `ShamePlayersWithThumbsdownPin` | see note in file |
| "Show brawlers in names" | [`show-brawlers-in-names.js`](features/mod-settings/show-brawlers-in-names.js) | `ShowCharactersInNames` | see note in file |
| "Ally respawn timer in Trio SD" | [`ally-respawn-timer-in-trio-sd.js`](features/mod-settings/ally-respawn-timer-in-trio-sd.js) | `AllyRespawnTimer` | module 6858 |
| "Trophies above head" | [`trophies-above-head.js`](features/mod-settings/trophies-above-head.js) | `ShowTrophiesAboveHead` | native layer (config key only) |
| "Show mute button" | [`show-mute-button.js`](features/mod-settings/show-mute-button.js) | `ShowMuteButton` | see note in file |
| "Spectate teammates" | [`spectate-teammates.js`](features/mod-settings/spectate-teammates.js) | `ShowSpectateButton` | see note in file |
| "Highlight BSD-clan members" | [`highlight-bsd-clan-members.js`](features/mod-settings/highlight-bsd-clan-members.js) | `ShowAllianceMembersInBattle` | see note in file |
| "Highlight blacklisted players" | [`highlight-blacklisted-players.js`](features/mod-settings/highlight-blacklisted-players.js) | `ShowBlacklistedPlayersInBattle` | see note in file |
| "Duo quiz answers" | [`duo-quiz-answers.js`](features/mod-settings/duo-quiz-answers.js) | `HighlightDuoQuizAnswers` | module 7657 |
| "Extended ball trajectory" | [`extended-ball-trajectory.js`](features/mod-settings/extended-ball-trajectory.js) | `ExtendedTrajectory` | module 5003 |
| "Enemy attack range" | [`enemy-attack-range.js`](features/mod-settings/enemy-attack-range.js) | `AttackRangeIndicator` | module 2255 |
| "Enemy tracer [β]" | [`enemy-tracer-beta.js`](features/mod-settings/enemy-tracer-beta.js) | `EnemyTracer` | module 6584 |
| "Hitbox wireframe" | [`hitbox-wireframe.js`](features/mod-settings/hitbox-wireframe.js) | `HitboxRenderer` | module 4076 |
| "Slow mode" | [`slow-mode.js`](features/mod-settings/slow-mode.js) | `SlowMode` | see note in file |
| "Disable shake" | [`disable-shake.js`](features/mod-settings/disable-shake.js) | `DisableShake` | see note in file |
| "Disable auto shoot" | [`disable-auto-shoot.js`](features/mod-settings/disable-auto-shoot.js) | — | strings only — not implemented |
| "Disable auto shoot for Super" | [`disable-auto-shoot-for-super.js`](features/mod-settings/disable-auto-shoot-for-super.js) | — | strings only — not implemented |
| "Movement based auto shoot (for Mortis)" | [`movement-based-auto-shoot-for-mortis.js`](features/mod-settings/movement-based-auto-shoot-for-mortis.js) | — | strings only — not implemented |
| "Remove keyboard emoji in text chat" | [`remove-keyboard-emoji-in-text-chat.js`](features/mod-settings/remove-keyboard-emoji-in-text-chat.js) | — | strings only — not implemented |
| "Better Fang attack range" | [`better-fang-attack-range.js`](features/mod-settings/better-fang-attack-range.js) | `BetterRange` | see note in file |
| "Instant reward opening" | [`instant-reward-opening.js`](features/mod-settings/instant-reward-opening.js) | `InstantStarrDropOpening` | native layer (config key only) |
| "Don't play «Game Highlight» after battle" | [`dont-play-game-highlight-after-battle.js`](features/mod-settings/dont-play-game-highlight-after-battle.js) | `DoNotShowBattleHighlight` | native layer (config key only) |
| "Hide "BATTLING" status from others" | [`hide-battling-status-from-others.js`](features/mod-settings/hide-battling-status-from-others.js) | `HideBattlingStatusFromOthers` | native layer (config key only) |
| "Friend list optimization" | [`friend-list-optimization.js`](features/mod-settings/friend-list-optimization.js) | `FriendListOptimization` | native layer (config key only) |
| "Show game logs" | [`show-game-logs.js`](features/mod-settings/show-game-logs.js) | `ShowLaserLogs` | native layer (config key only) |
| "Team chat anticensor" | [`team-chat-anticensor.js`](features/mod-settings/team-chat-anticensor.js) | `TeamChatAnticensor` | see note in file |
| "Connect to proxy" | [`connect-to-proxy.js`](features/mod-settings/connect-to-proxy.js) | `BSDProxy` | module 6312 |
| "Use battle proxy" | [`use-battle-proxy.js`](features/mod-settings/use-battle-proxy.js) | `UseBattleProxy` | see note in file |
| "Background matchmaking" | [`background-matchmaking.js`](features/mod-settings/background-matchmaking.js) | `BackgroundMatchmaking` | see note in file |
| "Hide text in lobby" | [`hide-text-in-lobby.js`](features/mod-settings/hide-text-in-lobby.js) | `HideHomeScreenText` | see note in file |
| "Chromatic name (visual-only)" | [`chromatic-name-visual-only.js`](features/mod-settings/chromatic-name-visual-only.js) | `ChromaticName` | see note in file |
| "Disable pin animation" | [`disable-pin-animation.js`](features/mod-settings/disable-pin-animation.js) | `DisablePinAnimation` | native layer (config key only) |
| "Disable all skins" | [`disable-all-skins.js`](features/mod-settings/disable-all-skins.js) | `DisableSkins` | see note in file |
| "Static background" | [`static-background.js`](features/mod-settings/static-background.js) | `SharedBackground` | see note in file |
| "Random theme" | [`random-theme.js`](features/mod-settings/random-theme.js) | `RandomThemeMask[0]` | see note in file |
| "Random theme after every battle" | [`random-theme-after-every-battle.js`](features/mod-settings/random-theme-after-every-battle.js) | `RandomThemeMask[2]` | see note in file |
| "Music independent on the background for random theme" | [`music-independent-on-the-background-for-random-theme.js`](features/mod-settings/music-independent-on-the-background-for-random-theme.js) | `RandomThemeMask[1]` | see note in file |
| "Legacy backgrounds" | [`legacy-backgrounds.js`](features/mod-settings/legacy-backgrounds.js) | `LegacyBackgrounds` | see note in file |
| "Old friends list" | [`old-friends-list.js`](features/mod-settings/old-friends-list.js) | `EnforceOldFriendsList` | see note in file |
| "Old brawler names" | [`old-brawler-names.js`](features/mod-settings/old-brawler-names.js) | `LegacyNames` | see note in file |
| "Random localization" | [`random-localization.js`](features/mod-settings/random-localization.js) | `RandomLocalization` | see note in file |
| "Use low resolution graphics" | [`use-low-resolution-graphics.js`](features/mod-settings/use-low-resolution-graphics.js) | `UseLowResGraphics` | see note in file |
| "Skin names in profile" | [`skin-names-in-profile.js`](features/mod-settings/skin-names-in-profile.js) | `ShowSkinNamesInProfile` | module 2053 |
| "Old level system" | [`old-level-system.js`](features/mod-settings/old-level-system.js) | `CustomMods:oldRankMod` | see note in file |
| "Map maker extension" | [`map-maker-extension.js`](features/mod-settings/map-maker-extension.js) | — | strings only — not implemented |
| "Secret pins" | [`secret-pins.js`](features/mod-settings/secret-pins.js) | — | strings only — not implemented |
| "Anti AFK kick" | [`anti-afk-kick.js`](features/mod-settings/anti-afk-kick.js) | `AntiAfkKick` | native layer (config key only) |
| "Default environments" | [`default-environments.js`](features/mod-settings/default-environments.js) | `DefaultEnvironments` | see note in file |
| "Debug menu button" | [`debug-menu-button.js`](features/mod-settings/debug-menu-button.js) | `ShowDebugMenuButton` | module 8139 |
| "Developer mode" | [`developer-mode.js`](features/mod-settings/developer-mode.js) | `DevModeEnabled` | see note in file |
| "FPS Limit" | [`fps-limit.js`](features/mod-settings/fps-limit.js) | `FPSLimit` | modules 1580, 2660 |
| "Volume" | [`volume.js`](features/mod-settings/volume.js) | `SoundMuted` | modules 7037, 9760 |

## Mod Menu — `features/mod-menu/`

The **MOD MENU** popup (tabs: LOBBY / BATTLE / OTHER / CONFIG) plus
the sub-menus its buttons open.

| In-game name | Where | File |
|---|---|---|
| "Change Theme" | Lobby | [`change-theme.js`](features/mod-menu/change-theme.js) |
| "Particles" | Lobby (disabled) | [`particles.js`](features/mod-menu/particles.js) |
| "3D Outline Color" | Lobby + Battle | [`3d-outline-color.js`](features/mod-menu/3d-outline-color.js) |
| "Team Status" | Lobby | [`team-status.js`](features/mod-menu/team-status.js) |
| "Visual name change" | Lobby + Battle | [`visual-name-change.js`](features/mod-menu/visual-name-change.js) |
| "Test Ping" | Lobby + Battle | [`test-ping.js`](features/mod-menu/test-ping.js) |
| "SelectFont" | Lobby + Battle | [`selectfont.js`](features/mod-menu/selectfont.js) |
| "Environment" | Battle | [`environment.js`](features/mod-menu/environment.js) |
| "Fog" | inside Environment | [`fog.js`](features/mod-menu/fog.js) |
| "Kill Effect" | inside Environment | [`kill-effect.js`](features/mod-menu/kill-effect.js) |
| "Battle Servers" | Battle | [`battle-servers.js`](features/mod-menu/battle-servers.js) |
| "SetTitle" | Battle | [`settitle.js`](features/mod-menu/settitle.js) |
| "Open profile" | Other | [`open-profile.js`](features/mod-menu/open-profile.js) |
| "Icon Changer" | Other | [`icon-changer.js`](features/mod-menu/icon-changer.js) |
| "Gatcha" | Other | [`gatcha.js`](features/mod-menu/gatcha.js) |
| "Brawler Menu" | via Gatcha | [`brawler-menu.js`](features/mod-menu/brawler-menu.js) |
| "Skin Changer" | brawler skin screen | [`skin-changer.js`](features/mod-menu/skin-changer.js) |
| "Stats Trackers" | Other | [`stats-trackers.js`](features/mod-menu/stats-trackers.js) |
| "ManageBSDPlus" | Config | [`managebsdplus.js`](features/mod-menu/managebsdplus.js) |
| "Reload Game" | Config | [`reload-game.js`](features/mod-menu/reload-game.js) |
| "Latest Update" | Config | [`latest-update.js`](features/mod-menu/latest-update.js) |
| "Reset mod settings" | Config | [`reset-mod-settings.js`](features/mod-menu/reset-mod-settings.js) |
| "FAQ" | Config | [`faq.js`](features/mod-menu/faq.js) |
| "Input Menu" | legacy menu | [`input-menu.js`](features/mod-menu/input-menu.js) |
| "Commands" | team chat | [`commands.js`](features/mod-menu/commands.js) |
| "Map environments" | event details | [`map-environments.js`](features/mod-menu/map-environments.js) |

## Battle UI — `features/battle-ui/`

Buttons and overlays that live directly in the battle screen.

| Feature | File |
|---|---|
| Skip tutorial button | [`skip-tutorial-button.js`](features/battle-ui/skip-tutorial-button.js) |
| Disable bots | [`disable-bots.js`](features/battle-ui/disable-bots.js) |
| Battle log share | [`battle-log-share.js`](features/battle-ui/battle-log-share.js) |
| Smooth HUD | [`smooth-hud.js`](features/battle-ui/smooth-hud.js) |
| Battle debug overlay | [`battle-debug-overlay.js`](features/battle-ui/battle-debug-overlay.js) |
| Replay logger | [`replay-logger.js`](features/battle-ui/replay-logger.js) |
| Custom map marks | [`custom-marks.js`](features/battle-ui/custom-marks.js) |
| Hashtag code generator | [`hashtag-generator.js`](features/battle-ui/hashtag-generator.js) |

## Map Maker — `features/map-editor/`

- Map Maker — [`map-editor-suite.js`](features/map-editor/map-editor-suite.js)

## Debug Menu — `features/debug-menu/`

All **185** buttons of the in-game **Debug Menu** (the game's native debug menu the mod exposes), one file per button,
grouped by the menu's own categories. `RECENT: ` prefixed entries are
the user's recently-used buttons (runtime only).

### ACCOUNT (29 buttons) — `features/debug-menu/ACCOUNT/`

| Button | Visibility | Action |
|---|---|---|
| [`ACCOUNT_DELETION_DIALOG.js`](features/debug-menu/ACCOUNT/ACCOUNT_DELETION_DIALOG.js) | always | client callback |
| [`AUTOCOLLECT_OLDEST_SEASON.js`](features/debug-menu/ACCOUNT/AUTOCOLLECT_OLDEST_SEASON.js) | always | client callback |
| [`ADD_RESOURCES.js`](features/debug-menu/ACCOUNT/ADD_RESOURCES.js) | always | #1 |
| [`RESET_ALL_RESOURCES.js`](features/debug-menu/ACCOUNT/RESET_ALL_RESOURCES.js) | always | #250 |
| [`ADD_FAME.js`](features/debug-menu/ACCOUNT/ADD_FAME.js) | always | #165 |
| [`SET_FAME.js`](features/debug-menu/ACCOUNT/SET_FAME.js) | always | #166 |
| [`ADD_GEMS.js`](features/debug-menu/ACCOUNT/ADD_GEMS.js) | always | #14 |
| [`REMOVE_ALL_GEMS.js`](features/debug-menu/ACCOUNT/REMOVE_ALL_GEMS.js) | always | #18 |
| [`REMOVE_ALL_COINS.js`](features/debug-menu/ACCOUNT/REMOVE_ALL_COINS.js) | always | #19 |
| [`ADD_SCORE.js`](features/debug-menu/ACCOUNT/ADD_SCORE.js) | always | #25 |
| [`DECREASE_SCORE.js`](features/debug-menu/ACCOUNT/DECREASE_SCORE.js) | always | #26 |
| [`RESET_ALL_HERO_SCORES.js`](features/debug-menu/ACCOUNT/RESET_ALL_HERO_SCORES.js) | always | #172 |
| [`RESET_CLAN_CREATED.js`](features/debug-menu/ACCOUNT/RESET_CLAN_CREATED.js) | always | #203 |
| [`SET_RANKED_SEEN.js`](features/debug-menu/ACCOUNT/SET_RANKED_SEEN.js) | always | #217 |
| [`ADD_1_WINSTREAK.js`](features/debug-menu/ACCOUNT/ADD_1_WINSTREAK.js) | always | #210 |
| [`OPEN_DEVICE_LINK_FROM_SETTINGS.js`](features/debug-menu/ACCOUNT/OPEN_DEVICE_LINK_FROM_SETTINGS.js) | home | client callback |
| [`ADD_STAR_POINTS.js`](features/debug-menu/ACCOUNT/ADD_STAR_POINTS.js) | always | addResource |
| [`ADD_POWER_POINTS.js`](features/debug-menu/ACCOUNT/ADD_POWER_POINTS.js) | always | addResource |
| [`ADD_CREDITS.js`](features/debug-menu/ACCOUNT/ADD_CREDITS.js) | always | addResource |
| [`ADD_BLING_RESOURCE.js`](features/debug-menu/ACCOUNT/ADD_BLING_RESOURCE.js) | always | addResource |
| [`ADD_COLLAB_CURRENCY.js`](features/debug-menu/ACCOUNT/ADD_COLLAB_CURRENCY.js) | always | addResource |
| [`ADD_GOLD_TICKETS.js`](features/debug-menu/ACCOUNT/ADD_GOLD_TICKETS.js) | always | showFloater |
| [`ADD_LEGENDARY_TROPHIES.js`](features/debug-menu/ACCOUNT/ADD_LEGENDARY_TROPHIES.js) | always | ADD_SCORE |
| [`ADD_ALL_RESOURCES.js`](features/debug-menu/ACCOUNT/ADD_ALL_RESOURCES.js) | always | #249 |
| [`SHOW_PRESTIGE_INTRO.js`](features/debug-menu/ACCOUNT/SHOW_PRESTIGE_INTRO.js) | always | client callback |
| [`ADD_10_WINSTREAK.js`](features/debug-menu/ACCOUNT/ADD_10_WINSTREAK.js) | always | #210 |
| [`ADD_100_WINSTREAK.js`](features/debug-menu/ACCOUNT/ADD_100_WINSTREAK.js) | always | #210 |
| [`REMOVE_WINSTREAK.js`](features/debug-menu/ACCOUNT/REMOVE_WINSTREAK.js) | always | #211 |
| [`CLAIM_TROPHY_ROAD.js`](features/debug-menu/ACCOUNT/CLAIM_TROPHY_ROAD.js) | always | #129 |

### AUDIO (3 buttons) — `features/debug-menu/AUDIO/`

| Button | Visibility | Action |
|---|---|---|
| [`PAUSE_MUSIC_TOGGLE.js`](features/debug-menu/AUDIO/PAUSE_MUSIC_TOGGLE.js) | always | client callback |
| [`MUSIC_VOLUME_CYCLE_0_50_100.js`](features/debug-menu/AUDIO/MUSIC_VOLUME_CYCLE_0_50_100.js) | always | client callback |
| [`BOSS_MUSIC_TOGGLE.js`](features/debug-menu/AUDIO/BOSS_MUSIC_TOGGLE.js) | always | client callback |

### BATTLE (13 buttons) — `features/debug-menu/BATTLE/`

| Button | Visibility | Action |
|---|---|---|
| [`NEXT_CAMERA_MODE.js`](features/debug-menu/BATTLE/NEXT_CAMERA_MODE.js) | battle | client callback |
| [`CAMERA_SETTINGS.js`](features/debug-menu/BATTLE/CAMERA_SETTINGS.js) | battle | client callback |
| [`RESET_CAMERA_SETTINGS.js`](features/debug-menu/BATTLE/RESET_CAMERA_SETTINGS.js) | battle | client callback |
| [`SHOW_CHARACTER_STATE.js`](features/debug-menu/BATTLE/SHOW_CHARACTER_STATE.js) | battle | client callback |
| [`SHOW_CONNECTION_INFO.js`](features/debug-menu/BATTLE/SHOW_CONNECTION_INFO.js) | battle | client callback |
| [`TOGGLE_TILE_GRID.js`](features/debug-menu/BATTLE/TOGGLE_TILE_GRID.js) | battle | client callback ☑ |
| [`SKIP_TUTORIAL.js`](features/debug-menu/BATTLE/SKIP_TUTORIAL.js) | battle | client callback |
| [`START_TUTORIAL.js`](features/debug-menu/BATTLE/START_TUTORIAL.js) | home | client callback |
| [`START_TRAINING.js`](features/debug-menu/BATTLE/START_TRAINING.js) | home | client callback |
| [`TOGGLE_CHAT_BUBBLES.js`](features/debug-menu/BATTLE/TOGGLE_CHAT_BUBBLES.js) | battle | client callback ☑ |
| [`TOGGLE_HUD.js`](features/debug-menu/BATTLE/TOGGLE_HUD.js) | battle | client callback ☑ |
| [`TOGGLE_HERO_HUD.js`](features/debug-menu/BATTLE/TOGGLE_HERO_HUD.js) | battle | client callback ☑ |
| [`TOGGLE_ZOOM.js`](features/debug-menu/BATTLE/TOGGLE_ZOOM.js) | battle | client callback ☑ |

### BRAWL_PASS (8 buttons) — `features/debug-menu/BRAWL_PASS/`

| Button | Visibility | Action |
|---|---|---|
| [`ADD_BP_XP.js`](features/debug-menu/BRAWL_PASS/ADD_BP_XP.js) | always | #81 |
| [`BUY_BP_SEASON_1.js`](features/debug-menu/BRAWL_PASS/BUY_BP_SEASON_1.js) | always | #94 |
| [`BUY_BP_SEASON_2.js`](features/debug-menu/BRAWL_PASS/BUY_BP_SEASON_2.js) | always | #94 |
| [`BUY_BP_SEASON_3.js`](features/debug-menu/BRAWL_PASS/BUY_BP_SEASON_3.js) | always | #94 |
| [`BP_DEBUG_RESET_PROGRESS.js`](features/debug-menu/BRAWL_PASS/BP_DEBUG_RESET_PROGRESS.js) | always | #171 |
| [`COMP_PASS_NEW_SEASON.js`](features/debug-menu/BRAWL_PASS/COMP_PASS_NEW_SEASON.js) | always | #284 |
| [`COMP_PASS_PROGRESS.js`](features/debug-menu/BRAWL_PASS/COMP_PASS_PROGRESS.js) | always | #285 |
| [`COMP_PASS_DEBUG_RESET.js`](features/debug-menu/BRAWL_PASS/COMP_PASS_DEBUG_RESET.js) | always | #287 |

### CHALLENGE (6 buttons) — `features/debug-menu/CHALLENGE/`

| Button | Visibility | Action |
|---|---|---|
| [`ADD_CHAMPIONSHIP_WIN.js`](features/debug-menu/CHALLENGE/ADD_CHAMPIONSHIP_WIN.js) | always | #84 |
| [`ADD_CHAMPIONSHIP_LOSS.js`](features/debug-menu/CHALLENGE/ADD_CHAMPIONSHIP_LOSS.js) | always | #95 |
| [`ADD_PRO_LEAGUE_POINT.js`](features/debug-menu/CHALLENGE/ADD_PRO_LEAGUE_POINT.js) | always | #91 |
| [`SET_CC_ESPORTS_QUALIFIED.js`](features/debug-menu/CHALLENGE/SET_CC_ESPORTS_QUALIFIED.js) | always | #102 |
| [`REMOVE_CC_ESPORTS.js`](features/debug-menu/CHALLENGE/REMOVE_CC_ESPORTS.js) | always | #103 |
| [`COLLAB_SIDE_SEEN.js`](features/debug-menu/CHALLENGE/COLLAB_SIDE_SEEN.js) | always | #266 |

### GACHA_IAP (28 buttons) — `features/debug-menu/GACHA_IAP/`

| Button | Visibility | Action |
|---|---|---|
| [`ADVANCE_PROG_SKINS_BY_1.js`](features/debug-menu/GACHA_IAP/ADVANCE_PROG_SKINS_BY_1.js) | always | #283 |
| [`UNLOCK_PROG_SKINS_TO_LVL_5.js`](features/debug-menu/GACHA_IAP/UNLOCK_PROG_SKINS_TO_LVL_5.js) | always | #282 |
| [`LOCK_ALL_SKINS.js`](features/debug-menu/GACHA_IAP/LOCK_ALL_SKINS.js) | always | #309 |
| [`LEVEL_UP_HERO.js`](features/debug-menu/GACHA_IAP/LEVEL_UP_HERO.js) | always | #127 |
| [`DOWNGRADE_HERO_LEVEL.js`](features/debug-menu/GACHA_IAP/DOWNGRADE_HERO_LEVEL.js) | always | #128 |
| [`MAX_SELECTED_HERO.js`](features/debug-menu/GACHA_IAP/MAX_SELECTED_HERO.js) | always | #72 |
| [`RESET_HERO_GEARS.js`](features/debug-menu/GACHA_IAP/RESET_HERO_GEARS.js) | always | #118 |
| [`MARK_ALL_AS_NEW.js`](features/debug-menu/GACHA_IAP/MARK_ALL_AS_NEW.js) | always | client callback |
| [`MARK_ALL_HEROES_AS_NEW.js`](features/debug-menu/GACHA_IAP/MARK_ALL_HEROES_AS_NEW.js) | always | #113 |
| [`GIVE_BY_GLOBAL_ID.js`](features/debug-menu/GACHA_IAP/GIVE_BY_GLOBAL_ID.js) | always | client callback |
| [`GIVE_FROM_CONTAINER_BY_ID.js`](features/debug-menu/GACHA_IAP/GIVE_FROM_CONTAINER_BY_ID.js) | always | client callback |
| [`GIVE_RANDOM_REWARD.js`](features/debug-menu/GACHA_IAP/GIVE_RANDOM_REWARD.js) | always | client callback |
| [`GIVE_RANDOM_REWARD_ALT.js`](features/debug-menu/GACHA_IAP/GIVE_RANDOM_REWARD_ALT.js) | always | client callback |
| [`REVOKE_IAP_GEMS_TO_NEGATIVE.js`](features/debug-menu/GACHA_IAP/REVOKE_IAP_GEMS_TO_NEGATIVE.js) | always | client callback |
| [`SET_AVATAR_PASSIVE.js`](features/debug-menu/GACHA_IAP/SET_AVATAR_PASSIVE.js) | always | client callback |
| [`SET_AVATAR_PASSIVE_RECRUIT.js`](features/debug-menu/GACHA_IAP/SET_AVATAR_PASSIVE_RECRUIT.js) | always | client callback |
| [`SET_SPRAY_SLOTS_5.js`](features/debug-menu/GACHA_IAP/SET_SPRAY_SLOTS_5.js) | always | #147 |
| [`SKIP_GACHA_ANIM.js`](features/debug-menu/GACHA_IAP/SKIP_GACHA_ANIM.js) | always | client callback ☑ |
| [`UNLOCK_AND_MAX_ALL_LVL_7.js`](features/debug-menu/GACHA_IAP/UNLOCK_AND_MAX_ALL_LVL_7.js) | always | #23 |
| [`UNLOCK_AND_MAX_ALL_LVL_9.js`](features/debug-menu/GACHA_IAP/UNLOCK_AND_MAX_ALL_LVL_9.js) | always | client callback |
| [`UNLOCK_AND_MAX_ALL_NO_STAR_POWERS.js`](features/debug-menu/GACHA_IAP/UNLOCK_AND_MAX_ALL_NO_STAR_POWERS.js) | always | #117 |
| [`UNLOCK_AND_MAX_ONE.js`](features/debug-menu/GACHA_IAP/UNLOCK_AND_MAX_ONE.js) | always | #154 |
| [`UNLOCK_HYPER_BUDDIES_ALL.js`](features/debug-menu/GACHA_IAP/UNLOCK_HYPER_BUDDIES_ALL.js) | always | #420 |
| [`UNLOCK_STAR_BUDDIES_ALL.js`](features/debug-menu/GACHA_IAP/UNLOCK_STAR_BUDDIES_ALL.js) | always | #419 |
| [`UNLOCK_OPENED_GADGETS.js`](features/debug-menu/GACHA_IAP/UNLOCK_OPENED_GADGETS.js) | always | client callback |
| [`UNLOCK_OPENED_STAR_POWERS.js`](features/debug-menu/GACHA_IAP/UNLOCK_OPENED_STAR_POWERS.js) | always | client callback |
| [`UNLOCK_ALL_BRAWLERS.js`](features/debug-menu/GACHA_IAP/UNLOCK_ALL_BRAWLERS.js) | always | client callback |
| [`UPGRADE_ALL_BRAWLERS.js`](features/debug-menu/GACHA_IAP/UPGRADE_ALL_BRAWLERS.js) | always | client callback |

### GFX (5 buttons) — `features/debug-menu/GFX/`

| Button | Visibility | Action |
|---|---|---|
| [`GFX_QUALITY_CYCLE.js`](features/debug-menu/GFX/GFX_QUALITY_CYCLE.js) | always | client callback |
| [`MEM_QUALITY_CYCLE.js`](features/debug-menu/GFX/MEM_QUALITY_CYCLE.js) | always | client callback |
| [`SMOOTH_HUD.js`](features/debug-menu/GFX/SMOOTH_HUD.js) | always | client callback ☑ |
| [`TOGGLE_FPS_COUNTER.js`](features/debug-menu/GFX/TOGGLE_FPS_COUNTER.js) | always | client callback ☑ |
| [`USE_LOW_END_RES.js`](features/debug-menu/GFX/USE_LOW_END_RES.js) | always | client callback ☑ |

### GUI (3 buttons) — `features/debug-menu/GUI/`

| Button | Visibility | Action |
|---|---|---|
| [`GUI_UI_INSPECTOR.js`](features/debug-menu/GUI/GUI_UI_INSPECTOR.js) | always | client callback ☑ |
| [`GUI_CLOSE_ALL_POPUPS.js`](features/debug-menu/GUI/GUI_CLOSE_ALL_POPUPS.js) | always | client callback |
| [`GUI_TEST_FLOATER.js`](features/debug-menu/GUI/GUI_TEST_FLOATER.js) | always | client callback |

### MAP_EDITOR (8 buttons) — `features/debug-menu/MAP_EDITOR/`

| Button | Visibility | Action |
|---|---|---|
| [`OPEN_MAP_EDITOR_POPUP.js`](features/debug-menu/MAP_EDITOR/OPEN_MAP_EDITOR_POPUP.js) | home | client callback |
| [`MAP_EDITOR_TOGGLE_GRID.js`](features/debug-menu/MAP_EDITOR/MAP_EDITOR_TOGGLE_GRID.js) | always | client callback |
| [`MAP_EDITOR_FILL_ALL.js`](features/debug-menu/MAP_EDITOR/MAP_EDITOR_FILL_ALL.js) | always | client callback |
| [`MAP_EDITOR_ERASE_ALL.js`](features/debug-menu/MAP_EDITOR/MAP_EDITOR_ERASE_ALL.js) | always | client callback |
| [`MAP_EDITOR_BYPASS_SAVE_VALIDATION.js`](features/debug-menu/MAP_EDITOR/MAP_EDITOR_BYPASS_SAVE_VALIDATION.js) | always | client callback ☑ |
| [`MAP_EDITOR_UNLOCK_FULL_PALETTE.js`](features/debug-menu/MAP_EDITOR/MAP_EDITOR_UNLOCK_FULL_PALETTE.js) | always | client callback ☑ |
| [`MAP_EDITOR_BYPASS_PLACEMENT_ZONES.js`](features/debug-menu/MAP_EDITOR/MAP_EDITOR_BYPASS_PLACEMENT_ZONES.js) | always | client callback ☑ |
| [`MAP_EDITOR_GO_HOME.js`](features/debug-menu/MAP_EDITOR/MAP_EDITOR_GO_HOME.js) | always | client callback |

### NAVIGATION (7 buttons) — `features/debug-menu/NAVIGATION/`

| Button | Visibility | Action |
|---|---|---|
| [`GOTO_CLAN.js`](features/debug-menu/NAVIGATION/GOTO_CLAN.js) | home | client callback |
| [`GOTO_BRAWL_PASS.js`](features/debug-menu/NAVIGATION/GOTO_BRAWL_PASS.js) | home | client callback |
| [`GOTO_QUESTS.js`](features/debug-menu/NAVIGATION/GOTO_QUESTS.js) | home | client callback |
| [`GOTO_CLUBS.js`](features/debug-menu/NAVIGATION/GOTO_CLUBS.js) | home | client callback |
| [`GOTO_SCID_REWARDS.js`](features/debug-menu/NAVIGATION/GOTO_SCID_REWARDS.js) | home | client callback |
| [`GOTO_PRO_PASS.js`](features/debug-menu/NAVIGATION/GOTO_PRO_PASS.js) | home | client callback |
| [`GOTO_HOME.js`](features/debug-menu/NAVIGATION/GOTO_HOME.js) | home | client callback |

### NOTIFICATIONS (5 buttons) — `features/debug-menu/NOTIFICATIONS/`

| Button | Visibility | Action |
|---|---|---|
| [`OPEN_NOTIFICATION_SETTINGS.js`](features/debug-menu/NOTIFICATIONS/OPEN_NOTIFICATION_SETTINGS.js) | home | client callback |
| [`AA_DIALOG.js`](features/debug-menu/NOTIFICATIONS/AA_DIALOG.js) | home | client callback |
| [`FORCE_ACTIVE_NOTIFICATIONS.js`](features/debug-menu/NOTIFICATIONS/FORCE_ACTIVE_NOTIFICATIONS.js) | home | client callback |
| [`FORCE_ALL_NOTIFICATIONS.js`](features/debug-menu/NOTIFICATIONS/FORCE_ALL_NOTIFICATIONS.js) | home | client callback |
| [`RESET_FORCED_NOTIFICATIONS.js`](features/debug-menu/NOTIFICATIONS/RESET_FORCED_NOTIFICATIONS.js) | home | client callback |

### PRC_CHINA (2 buttons) — `features/debug-menu/PRC_CHINA/`

| Button | Visibility | Action |
|---|---|---|
| [`DEVICE_LINK_SCREEN.js`](features/debug-menu/PRC_CHINA/DEVICE_LINK_SCREEN.js) | home | client callback |
| [`OPEN_YOOZOO_UPDATE_URL.js`](features/debug-menu/PRC_CHINA/OPEN_YOOZOO_UPDATE_URL.js) | home | client callback |

### PREVIEW (18 buttons) — `features/debug-menu/PREVIEW/`

| Button | Visibility | Action |
|---|---|---|
| [`BADGE_PREVIEW.js`](features/debug-menu/PREVIEW/BADGE_PREVIEW.js) | always | client callback |
| [`EFFECT_PREVIEW.js`](features/debug-menu/PREVIEW/EFFECT_PREVIEW.js) | always | client callback |
| [`MAP_PREVIEW.js`](features/debug-menu/PREVIEW/MAP_PREVIEW.js) | always | client callback |
| [`SKIN_PREVIEW.js`](features/debug-menu/PREVIEW/SKIN_PREVIEW.js) | always | client callback |
| [`FAME_LEVEL_UP_PREVIEW.js`](features/debug-menu/PREVIEW/FAME_LEVEL_UP_PREVIEW.js) | home | client callback |
| [`ABOUT_SCREEN.js`](features/debug-menu/PREVIEW/ABOUT_SCREEN.js) | home | client callback |
| [`BRAWLER_UNLOCK_ANIM.js`](features/debug-menu/PREVIEW/BRAWLER_UNLOCK_ANIM.js) | home | client callback |
| [`FRIEND_REQUEST.js`](features/debug-menu/PREVIEW/FRIEND_REQUEST.js) | home | client callback |
| [`CHAT_OPTIONS.js`](features/debug-menu/PREVIEW/CHAT_OPTIONS.js) | home | client callback |
| [`ESPORTS.js`](features/debug-menu/PREVIEW/ESPORTS.js) | home | client callback |
| [`FIRST_GEAR_TUTORIAL.js`](features/debug-menu/PREVIEW/FIRST_GEAR_TUTORIAL.js) | home | client callback |
| [`INVITE_FRIEND_CODE.js`](features/debug-menu/PREVIEW/INVITE_FRIEND_CODE.js) | home | client callback |
| [`NOTIFICATION_SETTINGS.js`](features/debug-menu/PREVIEW/NOTIFICATION_SETTINGS.js) | home | client callback |
| [`NOT_ENOUGH_GEMS.js`](features/debug-menu/PREVIEW/NOT_ENOUGH_GEMS.js) | home | client callback |
| [`UNLOCK_ACCOUNT_SCREEN.js`](features/debug-menu/PREVIEW/UNLOCK_ACCOUNT_SCREEN.js) | home | client callback |
| [`GENERIC_INFO.js`](features/debug-menu/PREVIEW/GENERIC_INFO.js) | home | client callback |
| [`FAME_POPUP.js`](features/debug-menu/PREVIEW/FAME_POPUP.js) | home | client callback |
| [`MOVIE_PLAYER.js`](features/debug-menu/PREVIEW/MOVIE_PLAYER.js) | home | client callback |

### RANKED (1 buttons) — `features/debug-menu/RANKED/`

| Button | Visibility | Action |
|---|---|---|
| [`RANKED_SEASON_END_POPUP.js`](features/debug-menu/RANKED/RANKED_SEASON_END_POPUP.js) | home | client callback |

### REPLAY_SPECTATE (5 buttons) — `features/debug-menu/REPLAY_SPECTATE/`

| Button | Visibility | Action |
|---|---|---|
| [`COPY_REPLAY_CODE.js`](features/debug-menu/REPLAY_SPECTATE/COPY_REPLAY_CODE.js) | battle | client callback |
| [`LOAD_REPLAY.js`](features/debug-menu/REPLAY_SPECTATE/LOAD_REPLAY.js) | home | client callback |
| [`TOGGLE_FOLLOW_SPECTATE.js`](features/debug-menu/REPLAY_SPECTATE/TOGGLE_FOLLOW_SPECTATE.js) | battle | client callback ☑ |
| [`ADD_SPECTATORS.js`](features/debug-menu/REPLAY_SPECTATE/ADD_SPECTATORS.js) | battle | client callback |
| [`ADD_SPECTATORS_BRAWLTV.js`](features/debug-menu/REPLAY_SPECTATE/ADD_SPECTATORS_BRAWLTV.js) | battle | client callback |

### SC_ID (6 buttons) — `features/debug-menu/SC_ID/`

| Button | Visibility | Action |
|---|---|---|
| [`SCID_DEBUG_CLEAR_ALL.js`](features/debug-menu/SC_ID/SCID_DEBUG_CLEAR_ALL.js) | always | client callback |
| [`SCID_LOG_OUT.js`](features/debug-menu/SC_ID/SCID_LOG_OUT.js) | always | client callback |
| [`SCID_RELOAD_CONFIG.js`](features/debug-menu/SC_ID/SCID_RELOAD_CONFIG.js) | always | client callback |
| [`SCID_SWITCH_ENV.js`](features/debug-menu/SC_ID/SCID_SWITCH_ENV.js) | always | client callback |
| [`RESET_CURRENT_ACCOUNT.js`](features/debug-menu/SC_ID/RESET_CURRENT_ACCOUNT.js) | always | client callback |
| [`SCID_LOG_OUT_ALL_DEVICES.js`](features/debug-menu/SC_ID/SCID_LOG_OUT_ALL_DEVICES.js) | always | client callback |

### SOCIAL (3 buttons) — `features/debug-menu/SOCIAL/`

| Button | Visibility | Action |
|---|---|---|
| [`OPEN_CLAN_POPUP.js`](features/debug-menu/SOCIAL/OPEN_CLAN_POPUP.js) | home | client callback |
| [`OPEN_TEAMUP_POPUP.js`](features/debug-menu/SOCIAL/OPEN_TEAMUP_POPUP.js) | home | client callback |
| [`OPEN_DELETE_ACCOUNT.js`](features/debug-menu/SOCIAL/OPEN_DELETE_ACCOUNT.js) | home | client callback |

### TESTS (11 buttons) — `features/debug-menu/TESTS/`

| Button | Visibility | Action |
|---|---|---|
| [`LATENCY_TEST_START.js`](features/debug-menu/TESTS/LATENCY_TEST_START.js) | always | client callback |
| [`REQUEST_SEASON_REWARDS.js`](features/debug-menu/TESTS/REQUEST_SEASON_REWARDS.js) | always | client callback |
| [`START_TUTORIAL_FROM_CONVERSION.js`](features/debug-menu/TESTS/START_TUTORIAL_FROM_CONVERSION.js) | home | client callback |
| [`FAKE_MAINTENANCE_MODE.js`](features/debug-menu/TESTS/FAKE_MAINTENANCE_MODE.js) | home | client callback |
| [`FAKE_SHORT_MAINTENANCE_30S.js`](features/debug-menu/TESTS/FAKE_SHORT_MAINTENANCE_30S.js) | home | client callback |
| [`FAKE_2_TAB_MAINTENANCE.js`](features/debug-menu/TESTS/FAKE_2_TAB_MAINTENANCE.js) | home | client callback |
| [`FAKE_3_TAB_MAINTENANCE.js`](features/debug-menu/TESTS/FAKE_3_TAB_MAINTENANCE.js) | home | client callback |
| [`FAKE_NEWS_ESPORTS_MAINTENANCE.js`](features/debug-menu/TESTS/FAKE_NEWS_ESPORTS_MAINTENANCE.js) | home | client callback |
| [`TEST_CONTENT_UPDATE.js`](features/debug-menu/TESTS/TEST_CONTENT_UPDATE.js) | always | client callback ☑ |
| [`TEST_DEFERRED_DOWNLOAD.js`](features/debug-menu/TESTS/TEST_DEFERRED_DOWNLOAD.js) | always | client callback |
| [`TRIGGER_APP_REVIEW.js`](features/debug-menu/TESTS/TRIGGER_APP_REVIEW.js) | always | client callback |

### TIME (3 buttons) — `features/debug-menu/TIME/`

| Button | Visibility | Action |
|---|---|---|
| [`ADD_DAILY_STREAK.js`](features/debug-menu/TIME/ADD_DAILY_STREAK.js) | always | #288 |
| [`PLAYER_CONTEST_END.js`](features/debug-menu/TIME/PLAYER_CONTEST_END.js) | always | #268 |
| [`TROPHY_SEASON_END_NOTIF.js`](features/debug-menu/TIME/TROPHY_SEASON_END_NOTIF.js) | always | #245 |

### TOP-LEVEL (5 buttons) — `features/debug-menu/TOP-LEVEL/`

| Button | Visibility | Action |
|---|---|---|
| [`RESTART_GAME.js`](features/debug-menu/TOP-LEVEL/RESTART_GAME.js) | always | client callback |
| [`SHOW_BSD_API_RESPONSE.js`](features/debug-menu/TOP-LEVEL/SHOW_BSD_API_RESPONSE.js) | always | client callback ☑ |
| [`CLEAR_EVERY_LOCATION_THEME.js`](features/debug-menu/TOP-LEVEL/CLEAR_EVERY_LOCATION_THEME.js) | always | client callback |
| [`CRASH_GAME.js`](features/debug-menu/TOP-LEVEL/CRASH_GAME.js) | always | client callback |
| [`CLEAR_DOWNLOADED_ASSETS.js`](features/debug-menu/TOP-LEVEL/CLEAR_DOWNLOADED_ASSETS.js) | always | client callback |

### UTILS (16 buttons) — `features/debug-menu/UTILS/`

| Button | Visibility | Action |
|---|---|---|
| [`RESET_CUSTOM_BACKGROUND.js`](features/debug-menu/UTILS/RESET_CUSTOM_BACKGROUND.js) | home | client callback |
| [`OPEN_SHARE_DIALOG.js`](features/debug-menu/UTILS/OPEN_SHARE_DIALOG.js) | always | client callback |
| [`SCROLLABLE_DEBUG_LOG.js`](features/debug-menu/UTILS/SCROLLABLE_DEBUG_LOG.js) | dev only | client callback |
| [`SET_COUNTRY.js`](features/debug-menu/UTILS/SET_COUNTRY.js) | always | client callback |
| [`SLOW_MOTION_4X.js`](features/debug-menu/UTILS/SLOW_MOTION_4X.js) | always | client callback ☑ |
| [`TOGGLE_WATERMARK.js`](features/debug-menu/UTILS/TOGGLE_WATERMARK.js) | always | client callback ☑ |
| [`STOP_MUSIC.js`](features/debug-menu/UTILS/STOP_MUSIC.js) | always | client callback |
| [`CYCLE_LANGUAGE.js`](features/debug-menu/UTILS/CYCLE_LANGUAGE.js) | always | client callback |
| [`SHOW_TID_KEYS.js`](features/debug-menu/UTILS/SHOW_TID_KEYS.js) | always | client callback ☑ |
| [`COPY_ACCOUNT_ID.js`](features/debug-menu/UTILS/COPY_ACCOUNT_ID.js) | always | client callback |
| [`SOFT_RELOAD_GAME.js`](features/debug-menu/UTILS/SOFT_RELOAD_GAME.js) | always | client callback |
| [`BRAWL_TV.js`](features/debug-menu/UTILS/BRAWL_TV.js) | always | client callback |
| [`PREV_THEME.js`](features/debug-menu/UTILS/PREV_THEME.js) | always | client callback |
| [`NEXT_THEME.js`](features/debug-menu/UTILS/NEXT_THEME.js) | always | client callback |
| [`SET_CUSTOM_BACKGROUND.js`](features/debug-menu/UTILS/SET_CUSTOM_BACKGROUND.js) | home | client callback |
| [`STOP_ALL_SFX.js`](features/debug-menu/UTILS/STOP_ALL_SFX.js) | always | client callback |

