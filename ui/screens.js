var HomeScreen_ctor = Libg.offset(11872552, 0);
var HomeScreen_refreshTheme = new NativeFunction(Libg.offset(11892688, 0), "void", ["pointer"]);
var HomeScreen_layoutBackground = new NativeFunction(Libg.offset(11903412, 0), "void", ["pointer"]);
var HomeScreen_doOfflineGatcha = new NativeFunction(Libg.offset(11929596, 0), "void", ["int", "pointer", "pointer"]);
var HomeScreen_joinClanFromDeeplink = new NativeFunction(Libg.offset(11891816, 0), "pointer", ["pointer", "pointer", "pointer"]);
var HomeScreen_gotoPage = new NativeFunction(Libg.offset(11890516, 0), "void", ["pointer", "int", "pointer"]);
var HomeScreen_isPlayerAgeGated = Libg.offset(11901148, 0);
var HomeScreen_TEMP_PATCH_NO_THEME_FOUND = Libg.offset(11893448);
var HomeScreen_SKIP_GATCHA_ANIMATION = Libg.offset(19947832, 0);
var homeScreenSpriteOffset = LogicMemory.offset(104);
var themeOffset = LogicMemory.offset(2472);
var themeBgMovieClipOffset = LogicMemory.offset(2352);
var homePageOffset = LogicMemory.offset(2376);
var EHomeDeeplinkPage = {};
var ELegacyThemeAction = { DISABLE_UNTIL: 0, DISABLE_FROM: 1, IGNORE: 2, DISABLE_ONLY: 3 };

class HomeScreen {
    constructor() {
    }
    static getInstance() {
        return HomeScreen.instance;
    }
    static getSprite() {
        return new Sprite(GameMain.getInstance().add(homeScreenSpriteOffset).readPointer());
    }
    static getHomePage() {
        return new HomePage(HomeScreen.getInstance().add(homePageOffset).readPointer());
    }
    static refreshTheme() {
        return;
    }
    static joinClanByTag(clanIdLogicLong, clanTagString) {
        return;
    }
    static gotoPage(pageId) {
        var instance;
        instance = HomeScreen.getInstance();
        if (instance.isNull()) {
            return;
        }
        HomeScreen_gotoPage(instance, pageId, NULL);
        return;
    }
    static refreshHeroesAndItems() {
        return;
    }
    static createLobbyInfo() {
        return;
    }
    static doOfflineGatcha(gatchaType, logicCharacterData, logicSkinData) {
        if (logicCharacterData) {
            if (logicSkinData) {
                HomeScreen_doOfflineGatcha(gatchaType, logicCharacterData, logicSkinData);
            }
        }
        return;
    }
    static isSkipGatchaAnimationEnabled() {
        return HomeScreen_SKIP_GATCHA_ANIMATION.readU8() !== 0;
    }
    static setSkipGatchaAnimation(enabled) {
        HomeScreen_SKIP_GATCHA_ANIMATION.writeU8(enabled ? 1 : 0);
        return;
    }
    static executeTestGatcha() {
        var deliveryUnit, megaBoxDropArray, epicStarrDropArray, dataArray, rewardOpeningPopup;
        deliveryUnit = new DeliveryUnit(100);
        megaBoxDropArray = [new LogicGatchaDrop(LogicGatchaDrop.EGatchaDropTypes.GOLD, 102), new LogicGatchaDrop(LogicGatchaDrop.EGatchaDropTypes.GOLD, 14), new LogicGatchaDrop(LogicGatchaDrop.EGatchaDropTypes.CHARACTER, 1, 15), new LogicGatchaDrop(LogicGatchaDrop.EGatchaDropTypes.GOLD, 57), new LogicGatchaDrop(LogicGatchaDrop.EGatchaDropTypes.GOLD, 1000), new LogicGatchaDrop(LogicGatchaDrop.EGatchaDropTypes.GOLD, 18), new LogicGatchaDrop(LogicGatchaDrop.EGatchaDropTypes.VANITY_ITEM, 1, 1488, LogicDataTables.table.Emotes), new LogicGatchaDrop(LogicGatchaDrop.EGatchaDropTypes.VANITY_ITEM, 1, 228, LogicDataTables.table.Sprays), new LogicGatchaDrop(LogicGatchaDrop.EGatchaDropTypes.GOLD, 16), new LogicGatchaDrop(LogicGatchaDrop.EGatchaDropTypes.SKIN, 1, 143)];
        epicStarrDropArray = [new LogicGatchaDrop(LogicGatchaDrop.EGatchaDropTypes.BLING, 1000), new LogicGatchaDrop(LogicGatchaDrop.EGatchaDropTypes.POWER_POINTS, 324), new LogicGatchaDrop(1, 1, 15), new LogicGatchaDrop(1, 1, 15), new LogicGatchaDrop(1, 1, 15), new LogicGatchaDrop(1, 1, 15), new LogicGatchaDrop(1, 1, 15), new LogicGatchaDrop(1, 1, 15)];
        epicStarrDropArray.forEach(function (e) {
            return deliveryUnit.addDrop(e);
        });
        dataArray = new LogicArrayList();
        dataArray.addElement(deliveryUnit.instance);
        rewardOpeningPopup = new RewardOpeningPopup(29, dataArray);
        return;
    }
    static openRareStarrDrop() {
        var drop, unit, delivery, rewardOpeningPopup;
        drop = LogicStarrDropRewards.getRandomDropByWeights("RARE");
        unit = new DeliveryUnit(100).addDrop(drop);
        delivery = new LogicArrayList(1).addElement(unit.instance);
        rewardOpeningPopup = new RewardOpeningPopup(0, delivery);
        return;
    }
    static openSuperRareStarrDrop() {
        var drop, unit, delivery, rewardOpeningPopup;
        drop = LogicStarrDropRewards.table.SUPER_RARE[LogicRandom.getRandomInRangeExcept(0, LogicStarrDropRewards.table.SUPER_RARE.length)].getGatchaDrop();
        unit = new DeliveryUnit(100).addDrop(drop);
        delivery = new LogicArrayList(1).addElement(unit.instance);
        rewardOpeningPopup = new RewardOpeningPopup(1, delivery);
        return;
    }
    static getThemeMovieClip() {
        var instance;
        instance = HomeScreen.getInstance();
        return new MovieClip(instance.add(themeBgMovieClipOffset).readPointer());
    }
    static relayoutBackground() {
        var instance;
        instance = HomeScreen.getInstance();
        if (instance.isNull()) {
            return;
        }
        HomeScreen_layoutBackground(instance);
        return;
    }
    static updateTheme(themeItem, shouldReloadHomePage) {
        var instance, homeScreenSprite, themeFileName, themeBgMovieClipPtr, newThemeBgMovieClip, themeMusic;
        if (shouldReloadHomePage === undefined) {
            shouldReloadHomePage = true;
        }
        ThemeSelectorManager.isCustomBgInUse = false;
        CustomBackground.discard();
        instance = HomeScreen.getInstance();
        homeScreenSprite = themeItem.getFileName();
        themeFileName = instance.add(themeBgMovieClipOffset);
        instance.add(themeOffset).writePointer(themeItem.instance);
        HomeScreen.getSprite().removeChild(themeFileName.readPointer());
        GameMain.loadAsset(homeScreenSprite);
        themeBgMovieClipPtr = StringTable.getMovieClip(homeScreenSprite, themeItem.getExportName());
        themeBgMovieClipPtr = StrangerthingsFixer.fix(themeBgMovieClipPtr);
        themeFileName.writePointer(themeBgMovieClipPtr.instance);
        HomeScreen.getSprite().addChildAt(themeBgMovieClipPtr, 0);
        HomeScreen_layoutBackground(instance);
        newThemeBgMovieClip = themeItem.getThemeMusic();
        if (newThemeBgMovieClip.instance.isNull()) {
            SoundManager.stopMusic();
        } else {
            SoundManager.playMusic(newThemeBgMovieClip);
        }
        if (shouldReloadHomePage) {
            HomePage.reload();
            return;
        }
    }
    static patch() {
        Interceptor.attach(HomeScreen_ctor, { onEnter(args) {
            HomeScreen.instance = args[0];
            Breadcrumbs.push("HomeScreen::ctor");
            StringTable.aprilFoolsMapping = {};
            StringTable.aprilFoolsCleaned = {};
            return;
        }, onLeave() {
            ThemeSelectorManager.isCustomBgInUse = false;
            CustomBackground.onHomeRebuilt();
            Player.ownIndex = -1;
            Player.playingWith.length = 0;
            HomeScreen.createLobbyInfo();
            if (Config.config.ShowDebugMenuButton) {
                if (!BSDPlusManager.isBSDPlusEnabled) {
                    Config.config.ShowDebugMenuButton = false;
                    FileManager.updateConfigFile();
                }
            }
            if (Config.config.ShowDebugMenuButton) {
                DebugMenuButton.spawn();
            } else {
                DebugMenuButton.destroy();
            }
            if (ModProperties.environment === "beta") {
                if (!Validation.isWhitelisted()) {
                    GUI.showFloaterTextAtDefaultPosition("You are not whitelisted!");
                }
            }
            BattleServersManager.loadFromConfig();
            HomeScreen.isEntered = true;
            SharedReplay.notifyHomeReady();
            BSDMessageManager.sendMessage(new BSDKeepAliveMessage()).then(function (response) {
                var parsedResponseData, chaCha20, decryptedResponse, parsedResponse;
                if (response.statusCode !== 200 || !response.json) {
                    return;
                }
                parsedResponseData = response.json;
                chaCha20 = new TSChaCha20(TSChaCha20.key, TSChaCha20.nonce);
                decryptedResponse = CustomTextEncoder.decode(chaCha20.decrypt(new Uint8Array(BSDMessageManager.escapedStringToBytes(parsedResponseData.data))));
                parsedResponse = JSON.parse(decryptedResponse);
                GetBSDOnlineMessage.lastOnline = parsedResponse.online;
                return;
            });
            GameMain.lastKeepAliveSentAt = Utils.getCurrentTime();
            if (LoginOkMessage.getSecondsSinceLoginOk() < 5) {
                return;
            }
            return;
        } });
        Interceptor.attach(HomeScreen_refreshTheme, { onLeave() {
            var clip;
            clip = HomeScreen.getThemeMovieClip();
            if (Config.config.LegacyBackgrounds) {
                LegacyBackgroundManager.apply(clip, true);
            }
            return;
        } });
        Interceptor.replace(HomeScreen_isPlayerAgeGated, new NativeCallback(function () {
            var chatButtonMovieClip;
            if (!TeamStream.getInstance().isNull()) {
                chatButtonMovieClip = new MovieClip(TeamStream.getInstance().add(TeamStream_chatButtonOffset).readPointer());
                chatButtonMovieClip.visibility = true;
            }
            return 0;
        }, "int", []));
        if (Process.platform !== "darwin") {
            Interceptor.attach(HomeScreen_TEMP_PATCH_NO_THEME_FOUND, function () {
                var ctx, currentTheme;
                ctx = this.context;
                currentTheme = LogicDataTables.getDataById(LogicDataTables.table.Themes, Config.config.ThemeBackgroundID);
                if (currentTheme) {
                    if (DownloadManager.isFileDownloaded(currentTheme.getFileName())) {
                        ctx.x8 = ptr(1);
                        return;
                    }
                }
            });
            return;
        }
    }
    static update() {
        if (HomeScreen.lobbyInfo) {
            HomeScreen.lobbyInfo.update();
            return;
        }
    }
}
HomeScreen.isEntered = false;

var BattleScreen_enter = new NativeFunction(Libg.offset(11690984, 0), "void", ["pointer"]);
var BattleScreen_enter_tail = Libg.offset(11458712, 0);
var BattleScreen_exit = new NativeFunction(Libg.offset(11703448, 0), "void", ["pointer"]);
var BattleScreen_isAFK = Libg.offset(11793008, 0);
var BattleScreen_sendGoHomeMessage = new NativeFunction(Libg.offset(11780936, 0), "void", ["pointer", "bool", "bool", "bool", "bool"]);
var BattleScreen_shouldShowChatButton = Libg.offset(11791332, 0);
var BattleScreen_updateTrajectorySprite = Libg.offset(11793940, 0);
var BattleScreen_calculateProjectilePath = new NativeFunction(Libg.offset(11809688, 0), "void", ["pointer", "pointer", "pointer", "int", "pointer", "float", "float", "float", "float", "float", "float"]);
var BattleScreen_updateSkill = Libg.offset(11755908, 0);
var BattleScreen_update = Libg.offset(11721180, 0);
var BattleScreen_swapFollowSpectate = new NativeFunction(Libg.offset(11706068, 0), "void", ["pointer"]);
var PathSprite_updateShape = new NativeFunction(Libg.offset(13939592, 0), "void", ["pointer", "pointer", "float", "double"]);
var followSpectateOffset = LogicMemory.offset(4060, 4164);
var combatHUDOffset = LogicMemory.offset(2568);
var gameObjectManagerOffset = LogicMemory.offset(2592, 2728);
var topOffset = LogicMemory.offset(288);
var bottomOffset = LogicMemory.offset(296);
var leftOffset = LogicMemory.offset(304);
var rightOffset = LogicMemory.offset(312);
var mainTrajectoryPathSpriteOffset = LogicMemory.offset(2832);
var extTrajectoryPathSprite1Offset = LogicMemory.offset(2840);
var extTrajectoryPathSprite2Offset = LogicMemory.offset(2848);
var hasCarryableOffset = LogicMemory.offset(700);
var BattleScreen_displayObjectVisibleOffset = LogicMemory.offset(8);
var BattleScreen_tileMapWidthOffset = LogicMemory.offset(196);
var BattleScreen_tileMapHeightOffset = LogicMemory.offset(200);
var TILE_SIZE = 300;
var PATHSPRITE_COLOR1_R = 9;
var PATHSPRITE_COLOR1_G = 10;
var PATHSPRITE_COLOR1_B = 11;
var PATHSPRITE_COLOR2_R = 13;
var PATHSPRITE_COLOR2_G = 14;
var PATHSPRITE_COLOR2_B = 15;
var GOAL_DIST_TOP_BOT = 1050;
var GOAL_DIST_LEFT_RIGHT = 2100;
var GOAL_EXTENDED_MARGIN = 100;
var PATH_BUF_DATA_OFFSET = 0;
var PATH_BUF_END_OFFSET = 8;
var PATH_POINT_SIZE = 12;
var AIRDISC_CASTING_RANGE_TILES = 48;
var AIRDISC_REAL_RANGE_UNITS = 9600;
var TILES_TO_UNITS = 100;
var MIN_BOUNCE_POINTS = 4;
var NO_BOUNCE_DISTANCE_ADD_WITH_BALL = 0;
var BOUNCE_DISTANCE_ADD_DEFAULT = 1500;

class BattleScreen {
    constructor() {
    }
    static getInstance() {
        return BattleScreen.instance;
    }
    static getCombatHUD() {
        return new Sprite(BattleScreen.getInstance().add(combatHUDOffset).readPointer());
    }
    static getGameObjectManager() {
        return new GameObjectManager(BattleScreen.getInstance().add(gameObjectManagerOffset).readPointer());
    }
    static addEnterListener(callback) {
        BattleScreen.enterListeners.push(callback);
        return;
    }
    static addExitListener(callback) {
        BattleScreen.exitListeners.push(callback);
        return;
    }
    static addUpdateListener(callback) {
        BattleScreen.updateListeners.push(callback);
        return;
    }
    static dispatchListeners(listeners) {
        var listener;
        for (const listener of listeners) {
            try {
                listener();
            } catch (e) {
            }
        }
        return;
    }
    static patch() {
        var lastBouncePoints, hasBounce, lastHasBall, lastTotalRange, isGoal;
        Interceptor.attach(BattleScreen_enter, { onEnter() {
            BattleScreen.instance = this.context.x0;
            Breadcrumbs.push("BattleScreen::enter");
            return;
        } });
        Interceptor.attach(BattleScreen_update, { onLeave() {
            return;
        } });
        Interceptor.attach(BattleScreen_enter_tail, { onEnter() {
            var combatHUD, sideFieldOffsets, fieldOffset, sidePtr, battleCameraButton, battleSkipTutorialButton, battleChat, battleChatButton, battleClearChatButton, battleFastPlayAgainButton, autoPlayAgainRadioButton;
            BattleScreen.dispatchListeners(BattleScreen.enterListeners);
            combatHUD = BattleScreen.getCombatHUD();
            if (combatHUD.isNull()) {
                return;
            }
            if (CombatHUD.battleChat) {
                CombatHUD.battleChat.clear();
            }
            if (Config.config.HideBattleBlackBars) {
                sideFieldOffsets = [topOffset, bottomOffset, leftOffset, rightOffset];
                for (const fieldOffset of sideFieldOffsets) {
                    sidePtr = combatHUD.instance.add(fieldOffset).readPointer();
                    if (!sidePtr.isNull()) {
                        sidePtr.add(BattleScreen_displayObjectVisibleOffset).writeU8(0);
                    }
                }
            }
            if (Config.config.ShowBattleCameraButton) {
                battleCameraButton = new BattleCameraButton();
                combatHUD.addChild(battleCameraButton);
            }
            if (BattleMode.isPlayingTutorial) {
                battleSkipTutorialButton = new BattleSkipTutorialButton();
                combatHUD.addChild(battleSkipTutorialButton);
            }
            if (Config.config.ShowOwnPlayerCoordinates) {
                CombatHUD.coordinates = new BattleCoordinates();
                combatHUD.addChild(CombatHUD.coordinates.textField);
            }
            if (Config.config.BattleTextChat) {
                if (PlayerInfo.isInGameroom) {
                    battleChat = new BattleChat();
                    battleChat.create(combatHUD);
                    battleChatButton = new BattleChatButton();
                    combatHUD.addChild(battleChatButton);
                    battleClearChatButton = new BattleClearChatButton(battleChat);
                    combatHUD.addChild(battleClearChatButton);
                }
            }
            if (Config.config.ShowBattleConnectionIndicator) {
                CombatHUD.latencyTextField = new BattleLatency();
                combatHUD.addChild(CombatHUD.latencyTextField.textField);
            }
            if (Config.config.ShowDPS) {
                DamageTracker.reset();
                combatHUD.addChild(DamageTracker.createTextField());
            }
            if (Config.config.ShowFastPlayAgainButton) {
                battleFastPlayAgainButton = new BattleFastPlayAgainButton();
                combatHUD.addChild(battleFastPlayAgainButton);
            }
            if (Config.config.ShowAutoPlayAgainRadioButton) {
                autoPlayAgainRadioButton = new BattleAutoPlayAgainRadioButton();
                combatHUD.addChild(autoPlayAgainRadioButton);
                combatHUD.addChild(autoPlayAgainRadioButton.textField);
            }
            return;
        } });
        Interceptor.replace(BattleScreen_exit, new NativeCallback(function (self) {
            var combatHUD;
            BattleScreen.dispatchListeners(BattleScreen.exitListeners);
            combatHUD = BattleScreen.getCombatHUD();
            if (!combatHUD.isNull()) {
                if (CombatHUD.coordinates) {
                    combatHUD.removeChild(CombatHUD.coordinates.textField);
                    CombatHUD.coordinates = null;
                }
                if (CombatHUD.latencyTextField) {
                    combatHUD.removeChild(CombatHUD.latencyTextField.textField);
                    CombatHUD.latencyTextField = null;
                }
                if (CombatHUD.battleChat) {
                    CombatHUD.battleChat.clear();
                    CombatHUD.battleChat.destroy();
                    CombatHUD.battleChat = null;
                }
            }
            BattleScreen_exit(self);
            Breadcrumbs.push("BattleScreen::exit");
            CombatHUD.fastPlayAgainButton = null;
            CombatHUD.muteButton = null;
            BattleCamera.mode = 0;
            AttackRangeIndicator.reset();
            Character3D.flushSkinLogs();
            if (Config.config.RandomThemeMask[2]) {
                ThemeSelectorManager.setRandomTheme();
                return;
            }
        }, "void", ["pointer"]));
        Interceptor.attach(BattleScreen_shouldShowChatButton, { onLeave(retval) {
            if (Config.config.EnforceBattleChatButton) {
                retval.replace(ptr(1));
                return;
            }
        } });
        lastBouncePoints = [];
        hasBounce = false;
        lastHasBall = false;
        lastTotalRange = 0;
        isGoal = false;
        Interceptor.attach(BattleScreen_calculateProjectilePath, { onEnter() {
            var ctx;
            if (!BSDPlusManager.isBSDPlusEnabled) {
                return;
            }
            ctx = this.context;
            if (ctx.x3.toInt32() !== 0) {
                return;
            }
            this.outBuf = ctx.x8;
            this.active = true;
            this.hasBall = ctx.x1.add(hasCarryableOffset).readU8() === 1;
            this.skillData = ctx.x2;
            return;
        }, onLeave() {
            var outBuf, dataPtr, endPtr, numPoints, lastPointOffset, trajectoryEndX, trajectoryEndY, i, pointOffset;
            if (!BSDPlusManager.isBSDPlusEnabled) {
                return;
            }
            if (!this.active) {
                return;
            }
            outBuf = this.outBuf;
            dataPtr = outBuf.add(PATH_BUF_DATA_OFFSET).readPointer();
            endPtr = outBuf.add(PATH_BUF_END_OFFSET).readPointer();
            if (dataPtr.isNull() || endPtr.isNull()) {
                hasBounce = false;
                return;
            }
            numPoints = (endPtr.toUInt32() - dataPtr.toUInt32()) / PATH_POINT_SIZE;
            if (this.hasBall) {
                if (numPoints >= 2) {
                    lastPointOffset = (numPoints - 1) * PATH_POINT_SIZE;
                    trajectoryEndX = dataPtr.add(lastPointOffset).readFloat();
                    trajectoryEndY = dataPtr.add(lastPointOffset + 4).readFloat();
                    isGoal = BattleScreen.isPointInGoal(trajectoryEndX, trajectoryEndY);
                }
            }
            lastHasBall = this.hasBall;
            lastTotalRange = BattleScreen.computeTotalRangeUnits(this.skillData, lastHasBall);
            if (!Config.config.ExtendedTrajectory) {
                return;
            }
            if (!lastHasBall) {
                hasBounce = false;
                return;
            }
            if (numPoints < MIN_BOUNCE_POINTS) {
                hasBounce = false;
                return;
            }
            lastBouncePoints = [];
            i = 0;
            while (i < numPoints) {
                pointOffset = i * PATH_POINT_SIZE;
                lastBouncePoints.push({ x: dataPtr.add(pointOffset).readFloat(), y: dataPtr.add(pointOffset + 4).readFloat(), z: dataPtr.add(pointOffset + 8).readFloat() });
                i = i + 1;
            }
            hasBounce = true;
            return;
        } });
        return;
    }
    static writePathSpriteGreen(pathSprite) {
        pathSprite.add(PATHSPRITE_COLOR1_R).writeU8(0);
        pathSprite.add(PATHSPRITE_COLOR1_G).writeU8(255);
        pathSprite.add(PATHSPRITE_COLOR1_B).writeU8(0);
        pathSprite.add(PATHSPRITE_COLOR2_R).writeU8(0);
        pathSprite.add(PATHSPRITE_COLOR2_G).writeU8(255);
        pathSprite.add(PATHSPRITE_COLOR2_B).writeU8(0);
        return;
    }
    static colorMainPathSpriteGreenIfVisible(requireVisible) {
        var mainPathSprite;
        mainPathSprite = BattleScreen.instance.add(mainTrajectoryPathSpriteOffset).readPointer();
        if (mainPathSprite.isNull()) {
            return;
        }
        if (requireVisible) {
            if (mainPathSprite.add(BattleScreen_displayObjectVisibleOffset).readU8() !== 1) {
                return;
            }
        }
        BattleScreen.writePathSpriteGreen(mainPathSprite);
        return;
    }
    static colorPathSpriteGreenIfVisible(battleScreenOffset) {
        var pathSprite;
        pathSprite = BattleScreen.instance.add(battleScreenOffset).readPointer();
        if (pathSprite.isNull() || pathSprite.add(BattleScreen_displayObjectVisibleOffset).readU8() !== 1) {
            return;
        }
        BattleScreen.writePathSpriteGreen(pathSprite);
        return;
    }
    static colorAllTrajectoryPathSpritesGreen() {
        BattleScreen.colorPathSpriteGreenIfVisible(mainTrajectoryPathSpriteOffset);
        BattleScreen.colorPathSpriteGreenIfVisible(extTrajectoryPathSprite1Offset);
        BattleScreen.colorPathSpriteGreenIfVisible(extTrajectoryPathSprite2Offset);
        return;
    }
    static isPointInGoalExtended(x, y) {
        var tileMap, mapWidthUnits, mapHeightUnits, m, inGoalY, inGoalX;
        tileMap = LogicBattleModeClient.getTileMap();
        if (tileMap.isNull()) {
            return false;
        }
        mapWidthUnits = tileMap.add(BattleScreen_tileMapWidthOffset).readS32() * TILE_SIZE;
        mapHeightUnits = tileMap.add(BattleScreen_tileMapHeightOffset).readS32() * TILE_SIZE;
        m = GOAL_EXTENDED_MARGIN;
        inGoalY = y <= GOAL_DIST_TOP_BOT - m || y >= mapHeightUnits - GOAL_DIST_TOP_BOT + m;
        inGoalX = x >= GOAL_DIST_LEFT_RIGHT + m && x <= mapWidthUnits - GOAL_DIST_LEFT_RIGHT - m;
        if (inGoalY) {
            return inGoalX;
        }
        return false;
    }
    static isPointInGoal(x, y) {
        var tileMap, mapWidthUnits, mapHeightUnits, inGoalY, inGoalX;
        tileMap = LogicBattleModeClient.getTileMap();
        if (tileMap.isNull()) {
            return false;
        }
        mapWidthUnits = tileMap.add(BattleScreen_tileMapWidthOffset).readS32() * TILE_SIZE;
        mapHeightUnits = tileMap.add(BattleScreen_tileMapHeightOffset).readS32() * TILE_SIZE;
        inGoalY = y <= GOAL_DIST_TOP_BOT || y >= mapHeightUnits - GOAL_DIST_TOP_BOT;
        inGoalX = x >= GOAL_DIST_LEFT_RIGHT && x <= mapWidthUnits - GOAL_DIST_LEFT_RIGHT;
        if (inGoalY) {
            return inGoalX;
        }
        return false;
    }
    static computeTotalRangeUnits(skillData, hasBall) {
        var castingRangeTiles;
        castingRangeTiles = LogicSkillData.getCastingRangeTiles(skillData);
        if (hasBall) {
            if (castingRangeTiles === AIRDISC_CASTING_RANGE_TILES) {
                return AIRDISC_REAL_RANGE_UNITS;
            }
        }
        return castingRangeTiles * TILES_TO_UNITS;
    }
    static sendGoHomeMessage() {
        return;
    }
    static toggleFollowSpectate() {
        var instance;
        instance = BattleScreen.getInstance();
        if (instance.isNull()) {
            return;
        }
        BattleScreen_swapFollowSpectate(instance);
        return;
    }
    static isFollowSpectate() {
        var instance;
        instance = BattleScreen.getInstance();
        if (instance.isNull()) {
            return false;
        }
        return instance.add(followSpectateOffset).readU8() === 1;
    }
}
BattleScreen.updateSkillAddress = BattleScreen_updateSkill;
BattleScreen.enterListeners = [];
BattleScreen.exitListeners = [];
BattleScreen.updateListeners = [];

var GameScreen_getLogicBattle = new NativeFunction(Libg.offset(11870964, 0), "pointer", ["pointer"]);

class GameScreen {
    constructor() {
    }
    static getLogicBattle() {
        return GameScreen_getLogicBattle(BattleScreen.getInstance());
    }
}

var HomePage_constructor = new NativeFunction(Libg.offset(13033040, 0), "void", ["pointer"]);
var HomePage_destructor = new NativeFunction(Libg.offset(13067648, 0), "void", ["pointer"]);
var HomePage_tryOpenMapEditorPopup = new NativeFunction(Libg.offset(13132428, 0), "int", ["pointer"]);
var HomePage_tryOpenClanPopup = new NativeFunction(Libg.offset(13133200, 0), "pointer", ["int"]);
var HomePage_openTeamupPopup = new NativeFunction(Libg.offset(13132328, 0), "pointer", ["int"]);
var HomePage_startGame = new NativeFunction(Libg.offset(13082400, 0), "void", ["pointer", "pointer", "pointer", "int", "pointer", "pointer", "int", "pointer", "int"]);
var MatchmakeRequestMessage_ctor = new NativeFunction(Libg.offset(16139764, 0), "void", ["pointer", "pointer", "pointer", "pointer", "pointer", "pointer"]);
var HomePage_openMatchMakingPopup = new NativeFunction(Libg.offset(11911320, 0), "void", ["pointer", "bool", "uint"]);
var isInGameRoomMovieClipOffset = LogicMemory.offset(1312);
var buttonVectorOffset = LogicMemory.offset(320);
var readyButtonOffset = LogicMemory.offset(840, 840);
var setButtonTextVtableOffset = LogicMemory.offset(432);
var _buttonModeNameStringObject = null;
var _buttonNaviBrawlersNameStringObject = null;
var HOLD_THRESHOLD_MS = 400;

function buttonModeNameStringObject() {
    return _buttonModeNameStringObject;
}

function buttonNaviBrawlersNameObject() {
    return _buttonNaviBrawlersNameStringObject;
}

class HomePage extends GUIContainer {
    constructor(instance) {
        super(instance);
    }
    getButtonByName(nameStringObject) {
        var buttonPointer;
        buttonPointer = MovieClipHelper.findButtonByName(nameStringObject, this.instance.add(buttonVectorOffset));
        if (buttonPointer.isNull()) {
            return null;
        }
        return new CustomButton(buttonPointer);
    }
    getModeButton() {
        return this.getButtonByName(buttonModeNameStringObject());
    }
    getNaviBrawlersButton() {
        return this.getButtonByName(buttonNaviBrawlersNameObject());
    }
    static isCreated() {
        return !HomePage.liveInstance.isNull();
    }
    static reload() {
        var homeScreenSprite, homePage, isInGameRoomMovieClip;
        homeScreenSprite = HomeScreen.getSprite();
        homePage = HomeScreen.getHomePage();
        homeScreenSprite.removeChild(homePage.instance);
        HomePage_destructor(homePage.instance);
        HomePage_constructor(homePage.instance);
        homeScreenSprite.addChildAt(homePage, 1);
        HomeScreen.createLobbyInfo();
        if (!PlayerInfo.isInGameroom) {
            isInGameRoomMovieClip = new MovieClip(homePage.instance.add(isInGameRoomMovieClipOffset).readPointer());
            isInGameRoomMovieClip.visibility = false;
        }
        MessageManager.inMatchMaking = false;
        return;
    }
    static tryOpenMapEditorPopup() {
        var homePage;
        homePage = HomeScreen.getHomePage();
        if (homePage.instance.isNull()) {
            return;
        }
        return;
    }
    static tryOpenClanPopup(trophyHint) {
        if (trophyHint === undefined) {
            trophyHint = 0;
        }
        return;
    }
    static openTeamupPopup() {
        return;
    }
    static startGame(locationDataPointer, mode, ownCharacterPointer) {
        var homePage;
        homePage = HomeScreen.getHomePage();
        if (homePage.instance.isNull()) {
            return;
        }
        return;
    }
    static addStartGameListener(callback) {
        HomePage.startGameListeners.push(callback);
        return;
    }
    static setBattleButtonText(text) {
        var button, setText;
        if (!HomePage.isCreated()) {
            return false;
        }
        button = HomePage.liveInstance.add(readyButtonOffset).readPointer();
        if (button.isNull()) {
            return false;
        }
        setText = new NativeFunction(button.readPointer().add(setButtonTextVtableOffset).readPointer(), "void", ["pointer", "pointer", "int"]);
        StringObject.with(text, function (textPointer) {
            return setText(button, textPointer, 1);
        });
        return true;
    }
    static patch() {
        MessageManager.setMatchmakingButtonUpdater(HomePage.setBattleButtonText);
        Interceptor.attach(HomePage_destructor, { onEnter(args) {
            if (HomePage.liveInstance.equals(args[0])) {
                HomePage.liveInstance = NULL;
            }
            return;
        } });
        Interceptor.attach(HomePage_constructor, { onEnter(args) {
            this.homePage = args[0];
            HomePage.liveInstance = NULL;
            Breadcrumbs.push("HomePage::ctor");
            return;
        }, onLeave() {
            var page, container, btn, children, child, btnClip, prestigeClip, avatar, fameResourceData, fameAmount, fameTier, exportName, fameClip, e;
            page = new HomePage(this.homePage);
            HomePage.liveInstance = page.instance;
            MessageManager.stopMatchMaking(false);
            HomeScreen.lobbyInfo = new LobbyInfo(page);
            HomeScreen.lobbyInfo.update();
            container = MovieClip.castInstanceToClass(page.instance.add(296).readPointer().add(7 * Process.pointerSize).readPointer());
            try {
                btn = container.getChildById(2);
                children = btn.getChildAt(0);
                if (children) {
                    child = MovieClip.castInstanceToClass(children);
                    btnClip = child.getChildById(0);
                    prestigeClip = btnClip.getChildByName("prestige");
                    avatar = GameStateManager.getPlayerAvatar();
                    fameResourceData = LogicDataTables.getFameData();
                    fameAmount = avatar.getCommodityCount(0, fameResourceData);
                    if (fameAmount === 0) {
                        return undefined;
                    }
                    fameTier = LogicDataTables.getFameTierByFame(fameAmount);
                    if (fameTier) {
                        exportName = fameTier.iconStarsExportName;
                        fameClip = StringTable.getMovieClip("sc/ui.sc", exportName);
                        fameClip.x = prestigeClip.x + 91;
                        fameClip.y = prestigeClip.y;
                        fameClip.scale = 0.1;
                        btnClip.addChild(fameClip);
                    }
                }
            } catch (e) {
                _.LogInfo(e.stack);
            }
            HomePage.registerModeButtonHold(page);
            return;
        } });
        Interceptor.attach(HomePage_startGame, { onEnter(args) {
            var mode, listener;
            mode = args[3].toInt32();
            for (const listener of HomePage.startGameListeners) {
                try {
                    listener(mode);
                } catch (e) {
                }
            }
            return;
        } });
        Interceptor.replace(HomePage_openMatchMakingPopup, new NativeCallback(function (homeScreen, a2, gameModeVariation) {
            if (!Config.config.BackgroundMatchmaking) {
                HomePage_openMatchMakingPopup(homeScreen, a2, gameModeVariation);
                return;
            }
        }, "void", ["pointer", "bool", "uint"]));
        return;
    }
    static registerModeButtonHold(page) {
        var modeButton;
        modeButton = page.getModeButton();
        if (!modeButton) {
            return;
        }
        return;
    }
    static registerNaviBrawlersButtonHold(page) {
        var naviBrawlersButton;
        naviBrawlersButton = page.getNaviBrawlersButton();
        if (!naviBrawlersButton) {
            return;
        }
        return;
    }
}
HomePage.liveInstance = NULL;
HomePage.startGameListeners = [];

var NewsPage_create = new NativeFunction(Libg.offset(12555840, 0), "pointer", ["pointer", "pointer", "int"]);
var NewsPage_forceOpenLandingPage = new NativeFunction(Libg.offset(12560556, 0), "void", ["pointer"]);
var retryButtonOffset = LogicMemory.offset(552);
var timerTextFieldOffset = LogicMemory.offset(536);

class NewsPage {
    constructor(instance) {
        this.instance = instance;
    }
    forceOpenLandingPage() {
        if (this.instance.isNull()) {
            return;
        }
        NewsPage_forceOpenLandingPage(this.instance);
        return;
    }
    getRetryButton() {
        if (this.instance.isNull()) {
            return NULL;
        }
        return this.instance.add(retryButtonOffset).readPointer();
    }
    getTimerTextField() {
        if (this.instance.isNull()) {
            return NULL;
        }
        return this.instance.add(timerTextFieldOffset).readPointer();
    }
    static create(maintenanceInfo, message, dialogType) {
        var maintenancePtr, pagePtr;
        if (maintenanceInfo) {
            maintenancePtr = maintenanceInfo.instance;
        } else {
            maintenancePtr = NULL;
        }
        pagePtr = StringObject.with(message, function (messageStringPtr) {
            return NewsPage_create(maintenancePtr, messageStringPtr, dialogType);
        });
        return new NewsPage(pagePtr);
    }
}

var Shop_createNonOfferCatalogPurchasePopup = Libg.offset(12680204, 0);
var skinPreviewMode = 2;
var Shop_createListOfferBundleItemByBundleType = Libg.offset(12661428, 0);
var Shop_canBuyProduct = Libg.offset(12671452, 0);
var GemPackItem_ctor = Libg.offset(12770412, 0);
var GemPackItem_buttonClicked = Libg.offset(12772332, 0);
var BazaarTomlGemPackItem_buttonClicked = Libg.offset(9843940, 0);
var NightMarketShopPopup_ctor = Libg.offset(13354936, 0);
var infoCollabButtonOffset = LogicMemory.offset(712, 720);

class Shop {
    constructor() {
    }
    static patch() {
        Interceptor.attach(Shop_createNonOfferCatalogPurchasePopup, { onEnter(args) {
            return;
        } });
        Interceptor.attach(GemPackItem_ctor, { onEnter(args) {
            this.item = args[0];
            return;
        }, onLeave() {
            var btn, clip, price, priceMoney, priceTextField;
            btn = new GameButton(this.item);
            clip = btn.getMovieClip();
            price = clip.getChildByName("price");
            if (!price) {
                return;
            }
            priceMoney = price.getChildByName("price_free");
            if (!priceMoney) {
                return;
            }
            priceTextField = priceMoney.getTextFieldByName("txt");
            if (!priceTextField) {
                return;
            }
            priceMoney.visibility = true;
            return;
        } });
        Interceptor.replace(GemPackItem_buttonClicked, new NativeCallback(function (button) {
            return;
        }, "void", ["pointer"]));
        Interceptor.replace(BazaarTomlGemPackItem_buttonClicked, new NativeCallback(function (button) {
            return;
        }, "void", ["pointer"]));
        Interceptor.attach(Shop_canBuyProduct, { onLeave(retval) {
            return;
        } });
        Interceptor.attach(Shop_createListOfferBundleItemByBundleType, { onEnter(args) {
            var arr, i, rawGemOffer, gemOffer, characterName, characterTID, skinId, skinData, count, character, iconName, sprayName, cardData;
            Shop.currentPack = ++Shop.currentPack;
            if (Shop.currentPack >= 4) {
                Shop.currentPack = 1;
                Shop.firstPack = "";
                Shop.secondPack = "";
                Shop.thirdPack = "";
                Shop.fourthPack = "";
            }
            if (Shop.firstPack === "") {
                Shop.firstPack = "".concat(Localisation.getString("CollabPack"), " 1:\n");
                Shop.secondPack = "".concat(Localisation.getString("CollabPack"), " 2:\n");
                Shop.thirdPack = "".concat(Localisation.getString("CollabPack"), " 3:\n");
                Shop.fourthPack = "".concat(Localisation.getString("CollabPack"), " 4:\n");
            }
            arr = new LogicArrayList(args[0].add(8));
            if (Shop.currentPack === 1) {
                Shop.firstPack = "".concat(Localisation.getString("CollabPack"), " 1:\n");
                Shop.secondPack = "".concat(Localisation.getString("CollabPack"), " 2:\n");
                Shop.thirdPack = "".concat(Localisation.getString("CollabPack"), " 3:\n");
                Shop.fourthPack = "".concat(Localisation.getString("CollabPack"), " 4:\n");
            }
            i = 0;
            while (i < arr.getItemsCount()) {
                rawGemOffer = arr.getElement(i);
                if (!rawGemOffer.isNull()) {
                    gemOffer = new LogicGemOffer(rawGemOffer);
                    if (gemOffer.getType() === 5) {
                        cardData = LogicDataTables.getTable(LogicDataTables.table.Cards).getItemAt(gemOffer.getExtraData());
                        if (cardData == null) {
                            continue;
                        }
                        characterName = StringObject.read(cardData.getValueAt(4));
                        characterTID = LogicDataTables.getCharacterByName(characterName).getTID();
                        Shop.addToPack(Shop.currentPack, "".concat(Localisation.getString("DeckFor"), " ", StringTable.getString(characterTID), ", "));
                    }
                    if (gemOffer.getType() === 4) {
                        skinId = gemOffer.getExtraData();
                        skinData = LogicDataTables.getDataById(LogicDataTables.table.Skins, skinId);
                        Shop.addToPack(Shop.currentPack, "".concat(Localisation.getString("SkinFor"), " ", StringTable.getString(skinData.getTID()), ", "));
                    }
                    if (gemOffer.getType() === 1) {
                        count = gemOffer.getCount();
                        Shop.addToPack(Shop.currentPack, "".concat(Localisation.getString("Coins"), " (", count, "), "));
                    }
                    if (gemOffer.getType() === 3) {
                        character = new LogicCharacterData(gemOffer.getData());
                        characterName = StringTable.getString(character.getTID());
                        Shop.addToPack(Shop.currentPack, "".concat(characterName, ", "));
                    }
                    if (gemOffer.getType() === 25) {
                        cardData = LogicDataTables.getTable(LogicDataTables.table.PlayerThumbnails).getItemAt(gemOffer.getExtraData());
                        if (cardData == null) {
                            continue;
                        }
                        iconName = cardData.getName();
                        Shop.addToPack(Shop.currentPack, "".concat(Localisation.getString("ProfileIcon"), " (", iconName, "), "));
                    }
                    if (gemOffer.getType() === 35) {
                        cardData = LogicDataTables.getTable(LogicDataTables.table.Sprays).getItemAt(gemOffer.getExtraData());
                        if (cardData == null) {
                            continue;
                        }
                        sprayName = cardData.getName();
                        Shop.addToPack(Shop.currentPack, "".concat(Localisation.getString("Spray"), " (", sprayName, "), "));
                    }
                    if (gemOffer.getType() === 41) {
                        count = gemOffer.getCount();
                        Shop.addToPack(Shop.currentPack, "".concat(Localisation.getString("PowerPoints"), " (", count, "), "));
                    }
                    if (gemOffer.getType() === 45) {
                        count = gemOffer.getCount();
                        Shop.addToPack(Shop.currentPack, "".concat(Localisation.getString("Bling"), " (", count, "), "));
                    }
                }
                i = i + 1;
            }
            return;
        } });
        return;
    }
    static usePreviewForUnavailableSkin(args) {
        var skin, homeMode, character;
        if (!args[0].isNull() && args[1].toInt32() === skinPreviewMode) {
            return;
        }
        skin = new LogicSkinData(args[0]);
        if (skin.getClassID() !== LogicDataTables.table.Skins) {
            return;
        }
        homeMode = LogicHomeMode.getInstance();
        if (!homeMode.isNull() && LogicPurchaseOfferCommand.isSkinPurchasableFromCatalog(homeMode, skin.instance)) {
            return;
        }
        character = skin.getCharacter();
        if (character && character.instance.isNull()) {
            return;
        }
        args[1] = ptr(skinPreviewMode);
        return;
    }
    static addToPack(id, info) {
        if (id === 1) {
            Shop.firstPack = Shop.firstPack + info;
        } else if (id === 2) {
            Shop.secondPack = Shop.secondPack + info;
        } else if (id === 3) {
            Shop.thirdPack = Shop.thirdPack + info;
        } else if (id === 4) {
            Shop.fourthPack = Shop.fourthPack + info;
        }
        return;
    }
    static showPopup() {
        var clean;
        return;
    }
}
Shop.firstPack = "";
Shop.secondPack = "";
Shop.thirdPack = "";
Shop.fourthPack = "";
Shop.currentPack = 0;

var SimpleWebView_create = new NativeFunction(Libg.offset(12688096, 0), "pointer", []);
var SimpleWebView_loadURL = new NativeFunction(Libg.offset(12689140, 0), "void", ["pointer", "pointer"]);

class SimpleWebView extends GenericPopup {
    constructor(instance) {
        super(instance);
    }
    static create() {
        return new SimpleWebView(SimpleWebView_create());
    }
    loadURL(url) {
        return StringObject.with(url, (urlStringObject) => {
            return SimpleWebView_loadURL(this.instance, urlStringObject);
        });
    }
}

var LoadingScreenManager_ptr = Libg.offset(19951184, 0);
var ContentUpdateStarted = Libg.offset(13647136, 0);
var ContentUpdateScreen_update = Libg.offset(13643444, 0);
var ContentUpdateScreen_destructor = Libg.offset(13642008, 0);
var OFFSET_SCREEN_TYPE = 8;
var OFFSET_GAME_STATE = 72;
var OFFSET_PHASE = 76;
var OFFSET_VEC_BEGIN = 80;
var OFFSET_VEC_END = 88;
var OFFSET_QUEUE = LogicMemory.offset(128);
var MGR_OFFSET_CURRENT_SCREEN = 72;
var MGR_OFFSET_PENDING_STATE_TYPE = 84;
var QUEUE_SLOTS_OFFSET = 40;
var QUEUE_ERROR_INFO_OFFSET = 56;
var ERROR_INFO_PAD_OFFSET = 8;
var TYPE_CONTENT_UPDATE = 2;
var TYPE_LOADING = 4;
var PHASE_DOWNLOADING = 2;
var TASK_SIZE = 16;
var TASK_STATUS_OFFSET = 4;
var TASK_STATUS_IN_PROGRESS = 1;
var TASK_STATUS_COMPLETE = 0;
var QUEUE_TOTAL = 32;
var QUEUE_PENDING = 36;

class LoadingScreen {
    constructor() {
    }
    static patch() {
        var i, origContentUpdateStarted;
        DownloadManager.init();
        LoadingScreen.needsDownload = !DownloadManager.downloadingFinished;
        Logcat.logDebug("LoadingScreen: ".concat(DownloadManager.downloadedAssets, "/", DownloadManager.DOWNLOAD_ASSETS.length, " cached, needsDownload=", LoadingScreen.needsDownload));
        if (!LoadingScreen.needsDownload) {
            return;
        }
        LoadingScreen.noopCallback = new NativeCallback(function () {
            return;
        }, "void", ["pointer"]);
        LoadingScreen.fakeVtable = Libc.malloc(64);
        i = 0;
        while (i < 8) {
            LoadingScreen.fakeVtable.add(i * 8).writePointer(LoadingScreen.noopCallback);
            i = i + 1;
        }
        Interceptor.attach(GameStateManager_changeToStateOffset, { onEnter(args) {
            var mgr;
            if (LoadingScreen.needsDownload) {
                mgr = args[0];
                if (mgr.add(MGR_OFFSET_PENDING_STATE_TYPE).readS32() === TYPE_LOADING) {
                    Logcat.logDebug("LoadingScreen: forcing ContentUpdateScreen via manager pending-state field");
                    mgr.add(MGR_OFFSET_PENDING_STATE_TYPE).writeS32(TYPE_CONTENT_UPDATE);
                    return;
                }
            }
        } });
        origContentUpdateStarted = new NativeFunction(ContentUpdateStarted, "void", ["pointer", "pointer"]);
        Interceptor.replace(ContentUpdateStarted, new NativeCallback(function (screen, a2) {
            if (LoadingScreen.needsDownload) {
                screen.add(OFFSET_PHASE).writeS32(PHASE_DOWNLOADING);
                return;
            }
            return origContentUpdateStarted(screen, a2);
        }, "void", ["pointer", "pointer"]));
        Interceptor.attach(ContentUpdateScreen_update, { onEnter(args) {
            var self, gameState;
            this.needsRestore = false;
            if (LoadingScreen.needsDownload) {
                self = args[0];
                gameState = self.add(OFFSET_GAME_STATE).readS32();
                if (gameState >= 4) {
                    self.add(OFFSET_PHASE).writeS32(PHASE_DOWNLOADING);
                    this.savedQueue = self.add(OFFSET_QUEUE).readPointer();
                    self.add(OFFSET_QUEUE).writePointer(NULL);
                    this.self = self;
                    this.needsRestore = true;
                    return;
                }
            }
        }, onLeave() {
            if (this.needsRestore) {
                this.self.add(OFFSET_QUEUE).writePointer(this.savedQueue);
                return;
            }
        } });
        Interceptor.attach(ContentUpdateScreen_destructor, { onEnter(args) {
            var screen, queue;
            screen = args[0];
            queue = screen.add(OFFSET_QUEUE).readPointer();
            if (LoadingScreen.fakeQueue) {
                if (!queue.isNull()) {
                    if (queue.equals(LoadingScreen.fakeQueue)) {
                        screen.add(OFFSET_QUEUE).writePointer(NULL);
                        screen.add(OFFSET_VEC_BEGIN).writePointer(NULL);
                        screen.add(OFFSET_VEC_END).writePointer(NULL);
                        return;
                    }
                }
            }
        } });
        return;
    }
    static onLoginResponse(messageType) {
        if (messageType === 20103) {
            Logcat.logDebug("LoadingScreen: 20103 — letting game update, skipping mod downloads");
            LoadingScreen.nullFakeQueueOnScreen();
            LoadingScreen.needsDownload = false;
            LoadingScreen.modPhaseActive = false;
            LoadingScreen.loginOk = false;
            LoadingScreen.downloadsStarted = false;
            return;
        }
        if (messageType === 20104) {
            if (DownloadManager.downloadingFinished) {
                return;
            }
            Logcat.logDebug("LoadingScreen: 20104 — enabling downloads");
            LoadingScreen.needsDownload = true;
            LoadingScreen.loginOk = true;
            LoadingScreen.downloadsStarted = false;
            return;
        }
    }
    static update() {
        var screen, gameState, total, downloaded, i;
        if (!LoadingScreen.needsDownload) {
            return;
        }
        if (DownloadManager.downloadingFinished) {
            LoadingScreen.needsDownload = false;
            LoadingScreen.modPhaseActive = false;
            Logcat.logDebug("LoadingScreen: downloads complete, reloading");
            return;
        }
        screen = LoadingScreen.getCurrentScreen();
        if (!screen) {
            return;
        }
        if (!LoadingScreen.modPhaseActive) {
            LoadingScreen.modPhaseActive = true;
            Breadcrumbs.push("LoadingScreen: holding for mod downloads");
        }
        gameState = screen.add(OFFSET_GAME_STATE).readS32();
        if (gameState < 4) {
            return;
        }
        screen.add(OFFSET_PHASE).writeS32(PHASE_DOWNLOADING);
        LoadingScreen.ensureFakeQueue(screen);
        if (LoadingScreen.fakeQueue) {
            if (LoadingScreen.fakeTasks) {
                total = DownloadManager.DOWNLOAD_ASSETS.length;
                downloaded = DownloadManager.downloadedAssets;
                LoadingScreen.fakeQueue.add(QUEUE_PENDING).writeS32(total - downloaded);
                i = 0;
                while (i < total) {
                    LoadingScreen.fakeTasks.add(i * TASK_SIZE + TASK_STATUS_OFFSET).writeS32(i < downloaded ? TASK_STATUS_COMPLETE : TASK_STATUS_IN_PROGRESS);
                    i = i + 1;
                }
            }
        }
        return;
    }
    static getCurrentScreen() {
        var mgr, screen;
        mgr = LoadingScreenManager_ptr.readPointer();
        if (mgr.isNull()) {
            return null;
        }
        screen = mgr.add(MGR_OFFSET_CURRENT_SCREEN).readPointer();
        if (screen.isNull()) {
            return null;
        }
        if (screen.add(OFFSET_SCREEN_TYPE).readS32() !== TYPE_CONTENT_UPDATE) {
            return null;
        }
        return screen;
    }
    static ensureFakeQueue(screen) {
        var total, tasks, i, slots, errorInfo, queue, vecSize, vecBase;
        total = DownloadManager.DOWNLOAD_ASSETS.length;
        if (LoadingScreen.fakeQueue) {
            screen.add(OFFSET_QUEUE).writePointer(LoadingScreen.fakeQueue);
            screen.add(OFFSET_VEC_BEGIN).writePointer(LoadingScreen.fakeVectorBase);
            return;
        }
        tasks = Libc.malloc(TASK_SIZE * total);
        i = 0;
        while (i < TASK_SIZE * total) {
            tasks.add(i).writeU64(0);
            i = i + 8;
        }
        i = 0;
        while (i < total) {
            tasks.add(i * TASK_SIZE + TASK_STATUS_OFFSET).writeS32(TASK_STATUS_IN_PROGRESS);
            i = i + 1;
        }
        LoadingScreen.fakeTasks = tasks;
        slots = Libc.malloc(16 * total);
        i = 0;
        while (i < total) {
            slots.add(i * 16).writeU64(0);
            slots.add(i * 16 + 8).writePointer(tasks.add(i * TASK_SIZE));
            i = i + 1;
        }
        errorInfo = Libc.malloc(16);
        errorInfo.writeU64(0);
        errorInfo.add(ERROR_INFO_PAD_OFFSET).writeU64(0);
        queue = Libc.malloc(128);
        i = 0;
        while (i < 128) {
            queue.add(i).writeU64(0);
            i = i + 8;
        }
        queue.writePointer(LoadingScreen.fakeVtable);
        queue.add(QUEUE_TOTAL).writeS32(total);
        queue.add(QUEUE_PENDING).writeS32(total);
        queue.add(QUEUE_SLOTS_OFFSET).writePointer(slots);
        queue.add(QUEUE_ERROR_INFO_OFFSET).writePointer(errorInfo);
        LoadingScreen.fakeQueue = queue;
        screen.add(OFFSET_QUEUE).writePointer(queue);
        vecSize = total * 16;
        vecBase = Libc.malloc(vecSize);
        i = 0;
        while (i < vecSize) {
            vecBase.add(i).writeU64(0);
            i = i + 8;
        }
        LoadingScreen.fakeVectorBase = vecBase;
        screen.add(OFFSET_VEC_BEGIN).writePointer(vecBase);
        return;
    }
    static nullFakeQueueOnScreen() {
        var screen, queue;
        screen = LoadingScreen.getCurrentScreen();
        if (!screen || !LoadingScreen.fakeQueue) {
            return;
        }
        queue = screen.add(OFFSET_QUEUE).readPointer();
        if (!queue.isNull()) {
            if (queue.equals(LoadingScreen.fakeQueue)) {
                screen.add(OFFSET_QUEUE).writePointer(NULL);
                screen.add(OFFSET_VEC_BEGIN).writePointer(NULL);
                screen.add(OFFSET_VEC_END).writePointer(NULL);
                return;
            }
        }
    }
    static get isActive() {
        return LoadingScreen.modPhaseActive;
    }
    static get progress() {
        var total;
        total = DownloadManager.DOWNLOAD_ASSETS.length;
        if (total === 0) {
            return 100;
        }
        return Math.floor(DownloadManager.downloadedAssets / total * 100);
    }
}
LoadingScreen.needsDownload = false;
LoadingScreen.downloadsStarted = false;
LoadingScreen.loginOk = false;
LoadingScreen.modPhaseActive = false;
LoadingScreen.fakeQueue = null;
LoadingScreen.fakeTasks = null;
LoadingScreen.fakeVectorBase = null;
LoadingScreen.noopCallback = null;
LoadingScreen.fakeVtable = null;

var AboutScreen_show = new NativeFunction(Libg.offset(13520208, 0), "void", []);

class AboutScreen {
    constructor() {
    }
    static show() {
        return AboutScreen_show();
    }
}

class BillingPackagesPopup extends ListContainerPopup {
    constructor() {
        super({ Title: "Billing Packages" });
        this.adjustPopupHeaderButtons("billing_packages");
        this.refreshItems();
    }
    refreshItems() {
        var billingTable, index, battleServerItem;
        this.container.clearEntries();
        billingTable = LogicDataTables.getTable(LogicDataTables.table.BillingPackages);
        index = 0;
        while (index < billingTable.getItemCount()) {
            battleServerItem = new BillingPackageItem(billingTable.getItemAt(index).getName());
            battleServerItem.id = index;
            battleServerItem.setCustomButtonListener(this.buttonPressed.bind(this));
            this.container.addEntry(battleServerItem);
            index = index + 1;
        }
        return;
    }
    buttonPressed(self, button) {
        var battleServerButton, buttonId, billingTable;
        battleServerButton = new GameButton(button);
        buttonId = battleServerButton.id;
        if (buttonId >= 0) {
            billingTable = LogicDataTables.getTable(LogicDataTables.table.BillingPackages);
            ModMenuPopupLegacy.doDebugBilling(billingTable.getItemAt(buttonId).getName());
            return;
        }
    }
}

class BillingPackageItem extends GameButton {
    constructor(name) {
        var buttonMovieClip, textField;
        super();
        this.instance.writePointer(countryPopupListItemVtableAddr);
        buttonMovieClip = StringTable.getMovieClip("sc/ui.sc", "country_item");
        this.setMovieClip(buttonMovieClip.instance, 1);
        textField = buttonMovieClip.getTextFieldByName("Text");
        textField.colorTag = true;
        textField.setTextScaleIfNecessary(name);
        buttonMovieClip.gotoAndStopFrameIndex(1);
    }
}

class BrawlerItem extends GameButton {
    constructor(character) {
        var brawlerMenuItemMovieClip, buttonTextField;
        super();
        this.instance.writePointer(countryPopupListItemVtableAddr);
        brawlerMenuItemMovieClip = StringTable.getMovieClip("sc/ui.sc", "player_name_color_entry");
        this.setMovieClip(brawlerMenuItemMovieClip.instance, 1);
        buttonTextField = MovieClip.getTextFieldByName(brawlerMenuItemMovieClip.instance, "label_txt");
        buttonTextField.colorTag = true;
        buttonTextField.setTextScaleIfNecessary(StringTable.getString(character.getTID()));
        this.id = character.getInstanceID();
        brawlerMenuItemMovieClip.gotoAndStopFrameIndex(1);
    }
}
