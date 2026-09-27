var PASSIVE_PREVIEW_CARD_NAME = "Gunslinger_unique";
var NATIVE_DIALOG_TYPE_ANTI_ADDICTION = 29;
var YOOZOO_UPDATE_URL = "https://brawl.yoozoo.com/";
var REVOKE_GEMS_TARGET = -100;
var MAX_HERO_LEVEL_LVL9 = 9;
var keyPoolSizeOffset = LogicMemory.offset(328, 328);
var keyPoolSecondsUntilNextBatchOffset = LogicMemory.offset(332, 332);
var keyPoolSecondsUntilNextAdOffset = LogicMemory.offset(336, 336);
var KEY_POOL_FILL_AMOUNT = 99;
var SIMPLE_GATCHA_TYPES = [HomeMode.gatchaType.Coins, HomeMode.gatchaType.TokenDoublers, HomeMode.gatchaType.PlayerIcon, HomeMode.gatchaType.Box, HomeMode.gatchaType.PowerPoints, HomeMode.gatchaType.StarPoints, HomeMode.gatchaType.EmotePack];

class DebugCallbacks {
    static cycleLanguage() {
        var count = StringTable.getLanguageCount();
        if (count < 2) {
            return "";
        }
        if (DebugCallbacks.languageCycleIndex < 0) {
            DebugCallbacks.languageCycleIndex = StringTable.getCurrentLanguageIndex();
        }
        DebugCallbacks.languageCycleIndex = (DebugCallbacks.languageCycleIndex + 1) % count;
        StringTable.setLanguageIndex(DebugCallbacks.languageCycleIndex, true);
        var code = StringTable.getCurrentLanguageCode();
        DebugCallbacks.rebuildHomeScreenText();
        return code;
    }
    static rebuildHomeScreenText() {
        if (!GameStateManager.isInState(GameStateManager.GameStateId.Home)) {
            return;
        }
    }
    static cycleLanguageWithFloater() {
        var code = DebugCallbacks.cycleLanguage();
        if (code) {
            GUI.showFloaterTextAtDefaultPosition("Language: ".concat(code));
        }
    }
    static giveRandomReward() {
        var type = SIMPLE_GATCHA_TYPES[Math.floor(Math.random() * SIMPLE_GATCHA_TYPES.length)];
    }
    static skipTutorial() {
        if (BattleMode.getInstance().isNull()) {
            return;
        }
    }
    static startTutorial() {
        var avatar = GameStateManager.getPlayerAvatar();
        if (avatar.instance.isNull()) {
            return;
        }
    }
    static stopMusic() {
        return;
    }
    static stopAllSfx() {
        return;
    }
    static toggleHud() {
        if (BattleMode.getInstance().isNull()) {
            return;
        }
        var hud = BattleScreen.getCombatHUD();
        if (!hud.isNull()) {
            if (hud.scaleX === 0) {
                hud.scale = 1;
            } else {
                hud.scale = 0;
            }
        }
        DebugMenuButton.toggleButtonVisibility();
        if (EDebugger.isCreated()) {
            EDebugger.hideOrShow();
        }
    }
    static isHudShown() {
        if (BattleMode.getInstance().isNull()) {
            return true;
        }
        var hud = BattleScreen.getCombatHUD();
        if (hud.isNull()) {
            return true;
        }
        return hud.scaleX !== 0;
    }
    static toggleHeroHud() {
        Character.heroHudHidden = !Character.heroHudHidden;
    }
    static isHeroHudShown() {
        return !Character.heroHudHidden;
    }
    static toggleSkipGachaAnimation() {
        return;
    }
    static scidLogOut() {
        return;
    }
    static scidLogOutFromAllDevices() {
        return;
    }
    static scidReloadConfig() {
        GameSCIDManager.init();
    }
    static scidDebugClearAllData() {
        StringObject.with("", function (dir) {
            return GameSCIDManager.debugClearAllData(dir);
        });
    }
    static scidSwitchEnv() {
        var goingToStage = !EnvOverride.isStage();
        EnvOverride.set(goingToStage ? EnvOverride.STAGE_ENV : EnvOverride.PROD_ENV);
        GameSCIDManager.setForceProd(!goingToStage);
    }
    static showAntiAddictionDialog() {
        return;
    }
    static forceActiveNotifications() {
        return;
    }
    static forceAllNotifications() {
        return;
    }
    static resetForcedNotifications() {
        return;
    }
    static openYoozooUpdateUrl() {
        return;
    }
    static openNotificationSettings() {
        return;
    }
    static openDeviceLinkScreen() {
        return;
    }
    static toggleHideProfile() {
        return;
    }
    static isHideProfileEnabled() {
        return SettingsPrivacyScreen.isHidePlayerProfileEnabled();
    }
    static showMaintenanceDefault() {
        return;
    }
    static showMaintenanceShort30s() {
        return;
    }
    static showMaintenance2Tab() {
        return;
    }
    static showMaintenance3Tab() {
        return;
    }
    static showMaintenanceNewsEsports() {
        return;
    }
    static enableTestContentUpdate() {
        ServerConnection.setTestContentUpdate(!ServerConnection.isTestContentUpdateEnabled());
        if (ServerConnection.isTestContentUpdateEnabled()) {
        }
    }
    static testDeferredDownload() {
        return;
    }
    static triggerAppReview() {
        return;
    }
    static openMapEditorPopup() {
        return;
    }
    static mapEditorToggleGrid() {
        return;
    }
    static mapEditorFillAll() {
        return;
    }
    static mapEditorEraseAll() {
        return;
    }
    static mapEditorToggleSaveValidationBypass() {
        return;
    }
    static isMapEditorSaveValidationBypassed() {
        return MapEditorScreen.isSaveValidationBypassed();
    }
    static mapEditorTogglePlacementBypass() {
        return;
    }
    static isMapEditorPlacementBypassed() {
        return MapEditorScreen.isPlacementRestrictionBypassed();
    }
    static mapEditorToggleFullPalette() {
        return;
    }
    static isMapEditorFullPaletteUnlocked() {
        return MapEditorScreen.isFullPaletteUnlocked();
    }
    static mapEditorGoHome() {
        return;
    }
    static latencyTestStart() {
        return;
    }
    static requestSeasonRewards() {
        return;
    }
    static startTutorialFromConversion() {
        return;
    }
    static toggleFollowSpectate() {
        if (BattleMode.getInstance().isNull()) {
            return;
        }
    }
    static isFollowSpectate() {
        if (BattleMode.getInstance().isNull()) {
            return false;
        }
        return BattleScreen.isFollowSpectate();
    }
    static toggleSlowMode() {
        var enabled = GameMain.toggleSlowMode();
        if (enabled) {
        }
    }
    static isSlowModeEnabled() {
        return GameMain.isSlowMode();
    }
    static debugResetCurrentAccount() {
        return;
    }
    static logOutAllDevices() {
        return;
    }
    static toggleFpsCounter() {
        return;
    }
    static isFpsCounterShown() {
        return FPSCounter.isEnabled();
    }
    static toggleShowTidKeys() {
        var enabled = StringTable.toggleShowTidKeys();
        DebugCallbacks.rebuildHomeScreenText();
        if (enabled) {
        }
    }
    static isShowTidKeys() {
        return StringTable.isShowTidKeys();
    }
    static copyAccountId() {
        var accountId = GameMain.getAccountId();
        var tag = "".concat(accountId.getHigh(), "-", accountId.getLow());
        Application.copyString(tag);
    }
    static softReloadGame() {
        return;
    }
    static toggleBossMusic() {
        var active = SoundManager.toggleBossMusic();
        if (active) {
        }
    }
    static openClanPopup() {
        return;
    }
    static openTeamupPopup() {
        return;
    }
    static openDeleteAccount() {
        return;
    }
    static cycleMusicVolume() {
        var volume = SoundManager.cycleMusicVolume();
    }
    static toggleMusicPaused() {
        var paused = SoundManager.toggleMusicPaused();
        if (paused) {
        }
    }
    static toggleChatBubbles() {
        if (BattleMode.getInstance().isNull()) {
            return;
        }
        var hud = BattleScreen.getCombatHUD();
        if (hud.isNull()) {
            return;
        }
    }
    static areChatBubblesVisible() {
        return CombatHUD.areChatBubblesVisible();
    }
    static debugForceEndGameWin() {
        return;
    }
    static debugForceEndGameLoss() {
        return;
    }
    static cycleBotDifficulty() {
        DebugCallbacks.botDifficultyCycle = (DebugCallbacks.botDifficultyCycle + 1) % 5;
        LogicBattleModeServer.setBotDifficulty(DebugCallbacks.botDifficultyCycle);
    }
    static toggleScrollableDebugLog() {
        if (!EDebugger.isCreated()) {
            return;
        }
    }
    static clearKeyPool() {
        return;
    }
    static fillKeyPool() {
        return;
    }
    static writeKeyPool(size) {
        var playerData = LogicClientHome.getPlayerData();
        if (playerData) {
            if (playerData.isNull()) {
                return;
            }
        }
        playerData.add(keyPoolSizeOffset).writeInt(size);
        playerData.add(keyPoolSecondsUntilNextBatchOffset).writeInt(0);
    }
    static unlockAndMaxAllLvl9() {
        var home = HomeMode.getInstance();
        if (!home) {
            return;
        }
        var charactersTable = LogicDataTables.getTable(LogicDataTables.table.Characters);
        var count = charactersTable.getItemCount();
        var i = 0;
        while (i < count) {
            var character = charactersTable.getItemAt(i);
            if (character) {
                try {
                    LogicAvatarHelper.levelUpHeroToTargetLevel(home, character, MAX_HERO_LEVEL_LVL9);
                } catch (e) {
                }
            }
            i++;
        }
    }
    static unlockOpenedGadgets() {
        return;
    }
    static unlockOpenedStarPowers() {
        return;
    }
    static revokeIapGemsToNegative() {
        var avatar = GameStateManager.getPlayerAvatar();
        if (avatar.instance.isNull()) {
            return;
        }
    }
    static markAllAsNew() {
        var avatar = GameStateManager.getPlayerAvatar();
        var playerData = LogicClientHome.getPlayerData();
        if (playerData && !playerData.isNull() && avatar.instance.isNull()) {
            return;
        }
        var charactersTable = LogicDataTables.getTable(LogicDataTables.table.Characters);
        var i = 0;
        while (i < charactersTable.getItemCount()) {
            var character = charactersTable.getItemAt(i);
            if (character) {
                avatar.setCommodityCount(LogicClientAvatar.commodityType.HeroSeenState, character.instance, 0, 0);
            }
            i++;
        }
        var cardsTable = LogicDataTables.getTable(LogicDataTables.table.Cards);
        i = 0;
        while (i < cardsTable.getItemCount()) {
            var card = cardsTable.getItemAt(i);
            if (card) {
                LogicDailyData.addNewItem(playerData, card.instance);
            }
            i++;
        }
    }
    static setAvatarPassive() {
        return;
    }
    static setAvatarPassiveRecruit() {
        return;
    }
    static unlockAllCardsOfMetaType(metaType) {
        var avatar = GameStateManager.getPlayerAvatar();
        if (avatar.instance.isNull()) {
            return;
        }
        var cardsTable = LogicDataTables.getTable(LogicDataTables.table.Cards);
        var count = cardsTable.getItemCount();
        var i = 0;
        while (i < count) {
            var card = cardsTable.getItemAt(i);
            if (card) {
                if (card.metaType === metaType) {
                    avatar.setItem(card);
                }
            }
            i++;
        }
    }
    static applyAvatarPassivePreview(commodityType) {
        var avatar = GameStateManager.getPlayerAvatar();
        if (avatar.instance.isNull()) {
            return;
        }
        var cardsTable = LogicDataTables.getTable(LogicDataTables.table.Cards);
        var card = cardsTable.getItemByName(PASSIVE_PREVIEW_CARD_NAME);
        if (card) {
            if (card.instance.isNull()) {
                return;
            }
        }
    }
}
DebugCallbacks.languageCycleIndex = -1;
DebugCallbacks.botDifficultyCycle = 0;

var Debugger_errorString = Libg.offset(5310880, 0);
var Debugger_errorCString = Libg.offset(5310944, 0);

class Debugger {
    static patch() {
        Interceptor.attach(Debugger_errorString, {
            onEnter(args) {
                var logMessage = StringObject.read(args[0]);
                Debugger.recordError(logMessage);
            }
        });
    }
    static recordError(message) {
        if (message === "") {
            return;
        }
        var logMessage = message.substring(0, 1024);
        Breadcrumbs.push(logMessage);
        if (Config.useDebugLoggingVersions.includes(ModProperties.environment)) {
            EDebugger.addMessage(EDebugger.ERROR, logMessage);
            Logcat.logError(logMessage);
        }
    }
}

class EDebugger {
    static configure(fontSize, maxMessages) {
        EDebugger.fontSize = fontSize;
        EDebugger.maxMessagesPerScreen = maxMessages;
    }
    static addMessage(level, ...args) {
        if (!Config.useDebugLogging) {
            return;
        }
        try {
            args = args.map(function (arg) {
                if (typeof arg === "object" && arg !== null) {
                    try {
                        return JSON.stringify(arg);
                    } catch (e) {
                        return String(arg);
                    }
                }
                return arg.toString();
            }).join(" ");
        } catch (e) {
            args = String(args);
        }
        if (args === this.lastRawMessage) {
            if (level === this.lastLevel) {
                return;
            }
        }
        this.lastRawMessage = args;
        this.lastLevel = level;
        var raw;
        if (level === EDebugger.ERROR) {
            raw = "<cFF0000>[E] ".concat(args, "</c>\n");
        } else if (level === EDebugger.WARNING) {
            raw = "<cFFFF00>[W] ".concat(args, "</c>\n");
        } else if (level === EDebugger.INFO) {
            raw = "<c90EE90>[I] ".concat(args, "</c>\n");
        } else if (level === EDebugger.LASER) {
            raw = "<cFDBDBA>[L] ".concat(args, "</c>\n");
        } else if (level === EDebugger.VERBOSE) {
            raw = "<cDDDDDD>[V] ".concat(args, "</c>\n");
        } else {
            raw = "<cBC8F8F>[U(".concat(level, ")] ", args, "</c>\n");
        }
        this.messages.push(raw);
    }
    static clear() {
        this.messages = [];
        this.text = "";
        this.lastRawMessage = "";
        this.lastLevel = null;
    }
    static create() {
        if (Config.useDebugLogging) {
            var eDebuggerTextField = MovieClip.getTextFieldByName(StringTable.getMovieClip("sc/ui.sc", "popover_text_left").instance, "text");
            eDebuggerTextField.x = 20;
            eDebuggerTextField.y = 10;
            eDebuggerTextField.color = 0;
            eDebuggerTextField.colorTag = true;
            eDebuggerTextField.fontOutline = true;
            eDebuggerTextField.fontSize = this.fontSize;
            this.textfield = new TextField(eDebuggerTextField.instance);
            this.renderedText = null;
            this.headerText = "<c90EE90>[I] BSD Brawl (".concat(ModProperties.environment, ") for ", DeviceSpecifications.platform, ", version ", ModProperties.version, "</c>\n");
            this.headerText = this.headerText + "<c90EE90>[I] You can disable debug log displaying in mod menu</c>\n";
            Stage.addChild(this.textfield.instance);
        }
    }
    static destroy() {
        if (this.textfield) {
            Stage.removeChild(this.textfield.instance);
            this.textfield = null;
            this.renderedText = null;
        }
    }
    static hideOrShow() {
        this.isHidden = !this.isHidden;
        this.textfield.visibility = +!this.isHidden;
    }
    static isCreated() {
        return !!this.textfield;
    }
    static trimMessages() {
        var excess = this.messages.length - this.maxMessagesPerScreen;
        if (excess > 0) {
            this.messages.splice(0, excess);
        }
        this.text = this.messages.join("");
    }
    static update() {
        if (!this.textfield) {
            return;
        }
        var text = this.headerText + this.text;
        if (text === this.renderedText) {
            return;
        }
        this.textfield.text = text;
        this.renderedText = text;
    }
}
EDebugger.ERROR = 0;
EDebugger.WARNING = 1;
EDebugger.INFO = 2;
EDebugger.LASER = 3;
EDebugger.VERBOSE = 4;
EDebugger.logsObject = {};
EDebugger.fontSize = 12;
EDebugger.maxMessagesPerScreen = 40;
EDebugger.messages = [];
EDebugger.renderedText = null;
EDebugger.text = "";
EDebugger.lastRawMessage = "";
EDebugger.lastLevel = null;

var checkboxOffset = LogicMemory.offset(608);
var intParameterOffset = LogicMemory.offset(620);
var categoryOffset = LogicMemory.offset(632);
var originalNameOffset = LogicMemory.offset(648);
var setTextVtableOffset = 54 * Process.pointerSize;

class DebugGameButton extends GameButton {
    constructor(instance) {
        super(instance);
        this.mode = "both";
        this.isFilteredOut = false;
        if (instance) {
            if (instance.isNull()) {
                this.instance.add(checkboxOffset).writePointer(NULL);
            }
        }
    }
    getTextFieldText() {
        var textField = this.getMovieClip().getTextFieldByName("Text");
        if (!textField) {
            return "";
        }
        return textField.text;
    }
    setTextFieldText(txt) {
        var setTextFn = DebugGameButton.resolveSetTextFunction(this.instance.readPointer());
        var strPtr = StringObject.create(txt);
    }
    getCheckbox() {
        return this.instance.add(checkboxOffset).readPointer();
    }
    setCheckbox(instance) {
        return;
    }
    switchCheckbox(state) {
        if (this.getCheckbox().isNull()) {
            return;
        }
        var intState = state ? 1 : 0;
    }
    getOriginalName() {
        return StringObject.read(this.instance.add(originalNameOffset));
    }
    setOriginalName(name) {
        return;
    }
    getIntParameter() {
        return this.instance.add(intParameterOffset).readInt();
    }
    setIntParameter(value) {
        return;
    }
    getCategoryName() {
        return StringObject.read(this.instance.add(categoryOffset));
    }
    setCategoryName(name) {
        return;
    }
    static resolveSetTextFunction(vtable) {
        return new NativeFunction(vtable.add(setTextVtableOffset).readPointer(), "void", ["pointer", "pointer", "bool"]);
    }
}

var actionIdxOffset = LogicMemory.offset(616);

class DebugCommandButton extends DebugGameButton {
    constructor(actionIdx, intParameter, btnType) {
        super();
        this.btnType = btnType;
        this.setActionIdx(actionIdx);
        this.setIntParameter(intParameter);
    }
    setActionIdx(actionIdx) {
        return;
    }
    static callback(_self, pressedButton) {
        var buttonView = new DebugGameButton(pressedButton);
    }
    static readActionIdx(button) {
        return button.add(actionIdxOffset).readInt();
    }
}

var RECENTS_CAPACITY = 8;

class DebugRecents {
    static push(label) {
        var idx = DebugRecents.labels.indexOf(label);
        if (idx >= 0) {
            DebugRecents.labels.splice(idx, 1);
        }
        DebugRecents.labels.unshift(label);
        if (DebugRecents.labels.length > RECENTS_CAPACITY) {
            DebugRecents.labels.length = RECENTS_CAPACITY;
        }
    }
    static getAll() {
        return DebugRecents.labels.slice();
    }
    static clear() {
        DebugRecents.labels.length = 0;
    }
    static onChange(fn) {
        return;
    }
}
DebugRecents.labels = [];
DebugRecents.listeners = [];

class DebugSearch {
    static getQuery() {
        return DebugSearch.query;
    }
    static setQuery(value) {
        var next = value.trim().toLowerCase();
        if (next === DebugSearch.query) {
            return;
        }
        DebugSearch.query = next;
    }
    static clear() {
        return;
    }
    static matches(label) {
        if (DebugSearch.query.length === 0) {
            return true;
        }
        return label.toLowerCase().includes(DebugSearch.query);
    }
    static onChange(fn) {
        return;
    }
}
DebugSearch.query = "";
DebugSearch.listeners = [];

class StageDebugText {
    constructor(textfield) {
        this.textfield = textfield;
    }
    setText(text) {
        this.textfield.text = text;
    }
    rotate(rotationDegrees, scale) {
        return;
    }
    setAlpha(alpha) {
        this.textfield.alpha = alpha;
    }
    destroy() {
        return;
    }
    static create(opts) {
        var clip = StringTable.getMovieClip("sc/ui.sc", "popover_text_left");
        var tf = MovieClip.getTextFieldByName(clip.instance, "text");
        tf.x = opts.x;
        tf.y = opts.y;
        if (opts.color == null) {
            tf.color = 4294967295.0;
        } else {
            tf.color = opts.color;
        }
        if (opts.fontOutline == null) {
            tf.fontOutline = true;
        } else {
            tf.fontOutline = opts.fontOutline;
        }
        if (opts.fontSize == null) {
            tf.fontSize = 12;
        } else {
            tf.fontSize = opts.fontSize;
        }
        var textfield = new TextField(tf.instance);
        Stage.addChild(textfield.instance);
        return new StageDebugText(textfield);
    }
}

var commandNames = { 201: "ChangeAvatarName", 202: "DiamondsAdded", 203: "GiveDeliveryItems", 204: "DayChanged", 205: "Server", 206: "AddNotification", 207: "ChangeResources", 208: "TransactionsRevoked", 209: "KeyPoolChanged", 211: "OffersChanged", 212: "PlayerDataChanged", 213: "InviteBlockingChanged", 214: "GemNameChangeStateChanged", 215: "SetSupportedCreator", 216: "CooldownExpired", 218: "BrawlPassSeasonChanged", 219: "BrawlPassUnlocked", 220: "HeroWinQuestsChanged", 221: "TeamChatMuteStateChanged", 222: "RankedSeasonChanged", 223: "CooldownAdded", 224: "SetESportsHubNotification", 226: "LoginCalendarChanged", 227: "BrawlerRecruitRoadChanged", 228: "RandomRewardManagerChanged", 229: "JoinAlliance", 230: "ReputationChanged", 231: "ReportState", 232: "UpdateNotification", 233: "TrophySeasonDataChanged", 234: "TemporaryHeroTeardown", 235: "ResetCollabPoints", 236: "CompetitivePassSeasonChanged", 237: "SetEsportsButtonState", 238: "ResetStreakLost", 239: "SetPlayerMute", 240: "UpdateEventItems", 503: "ClaimDailyReward", 505: "SetPlayerThumbnail", 506: "SelectSkin", 508: "ChangeControlMode", 509: "PurchaseDoubleCoins", 511: "HelpOpened", 512: "ToggleInGameHints", 514: "DeleteNotification", 515: "ClearShopTickers", 517: "ClaimRankUpReward", 519: "PurchaseOffer", 520: "LevelUp", 521: "PurchaseHeroLvlUpMaterial", 522: "HeroSeen", 525: "SelectCharacter", 526: "UnlockFreeSkins", 527: "SetPlayerNameColor", 528: "ViewInboxNotification", 529: "SelectStarPower", 530: "SetPlayerAge", 531: "CancelPurchaseOffer", 532: "ItemSeen", 533: "QuestsSeen", 535: "ClaimTailReward", 536: "PurchaseBrawlPassProgress", 538: "SelectEmote", 539: "BrawlPassAutoCollectWarningSeen", 540: "PurchaseChallengeLives", 541: "ClearESportsHubNotification", 543: "SelectGearBoost", 544: "SetLookingForTeamState", 545: "NextRandomSkin", 547: "RandomSkinMode", 548: "SetSkinUISeen", 549: "AllianceLeagueOnboardingSeen", 550: "ClaimLoginCalendarReward", 551: "ClaimWCPPDrop", 552: "ChangeAvatarPrivacyPreferences", 553: "UpdateAdvisedPrivacyPreferences", 554: "RerollQuest", 555: "SelectSpray", 556: "SetLoginCalendarState", 557: "PurchaseGadgetOrStarPower", 558: "PurchaseGear", 559: "RecruitRoadSelectBrawler", 560: "PurchaseBrawler", 561: "RecruitRoadSwitchBrawler", 562: "RecruitRoadClaimBrawler", 563: "RecruitRoadProcessExtraRecruitTokens", 564: "RecruitRoadSelectNewBrawler", 565: "RecruitRoadAbandonNewBrawler", 566: "PurchaseFame", 567: "SetInfoPopupSeenFlags", 568: "SetBattleIntroData", 570: "SelectFavouriteHero", 571: "ClaimRandomReward", 572: "VideoAdStart", 573: "VideoAdFinish", 574: "VideoAdTracking", 575: "VideoAdNotFinished", 576: "RankedSeasonSeen", 577: "SetPlayerFrame", 578: "ClaimFameReward", 579: "UseSpecialEventTokens", 580: "SetCoverOffer", 581: "VideoAdAction", 582: "ClaimCollabPoints", 583: "SetDataSeenState", 584: "CollabSideSeen", 586: "ClaimContestRewards", 587: "JoinClubEventSeen", 588: "ContestClaimTickets", 589: "JoinMoreActiveClubAction", 590: "AlliancePiggyBankTicketsSeen", 591: "ClaimCompetitivePassReward", 592: "SetUnknownAge", 593: "PurchaseCompetitivePassProgress", 594: "ClaimCompetitivePassTail", 595: "KeepDailyStreak", 596: "ResetDailyStreak", 597: "SelectAvatarPassive", 598: "UnselectAvatarPassive", 599: "SelectBonusSkill", 961: "SetEventFeatureSeenState" };

class CommandLogger {
    static getName(type) {
        if (commandNames[type] == null) {
            return "Unknown_".concat(type);
        }
        return commandNames[type];
    }
    static patch() {
        return;
    }
}
