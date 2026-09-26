//============================================================================//// DEBUGCALLBACKS — THE DEBUG MENU HANDLER REGISTRY (85 METHODS) + MISC TOOLING// merged webpack modules: 1390 DebugCallbacks, 313 Debugger, 4272 EDebugger, 118 DebugGameButton, 1019 DebugCommandButton, 6118 DebugRecents, 3256 DebugSearch, 2447 StageDebugText, 6045 CommandLogger//============================================================================//
// --------------------- MODULE 1390 — DebugCallbacks ---------------------


// ============================================================ //
// webpack module 1390  —  DebugCallbacks
// exports: DebugCallbacks
// deps: 303 (SettingsPrivacyScreen), 514 (LocalNotificationManager), 746 (EnvOverride), 1018 (HomeMode), 1248 (DeviceLinkWindow), 1357 (GameDownloadManager), 1588 (LogicMemory), 2476 (CombatHUD), 2757 (HomePage), 3401 (GameStateManager), 3747 (NotificationSettingsPopup), 3932 (Character), 4272 (EDebugger), 4934 (GUI), 5523 (LogicBattleModeClient), 5583 (LogicBattleModeServer), 5765 (MapEditorScreen), 6006 (LogicAvatarHelper), 6046 (Application), 6128 (BattleMode) ...
// ============================================================ //

__webpack_modules__[1390] = function DebugCallbacks_factory(__unused_webpack_module, exports, __webpack_require__) {
    var StringTable, HomeScreen, HomeMode, SoundManager, BattleScreen, BattleMode, DebugMenuButton, EDebugger, LogicClientHome, LogicMemory, Application, GUI, LogicDataTables, LogicCardData, LogicDailyData, GameStateManager, LogicAvatarHelper, LogicClientAvatar, MessageManager, GameSCIDManager, StringObject, EnvOverride, GameMain, LocalNotificationManager, Character, MaintenancePopupPreview, ServerConnection, GameDownloadManager, HomePage, MapEditorScreen, LatencyTestsPopup, FPSCounter, CombatHUD, LogicBattleModeServer, LogicBattleModeClient, NotificationSettingsPopup, DeviceLinkWindow, SettingsPrivacyScreen, PASSIVE_PREVIEW_CARD_NAME, NATIVE_DIALOG_TYPE_ANTI_ADDICTION, YOOZOO_UPDATE_URL, REVOKE_GEMS_TARGET, MAX_HERO_LEVEL_LVL9, keyPoolSizeOffset, keyPoolSecondsUntilNextBatchOffset, keyPoolSecondsUntilNextAdOffset, KEY_POOL_FILL_AMOUNT, SIMPLE_GATCHA_TYPES, DebugCallbacks, <class_fields_init>, DebugCallbacks;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.DebugCallbacks = undefined;
        StringTable = __webpack_require__(9250);
        HomeScreen = __webpack_require__(8569);
        HomeMode = __webpack_require__(1018);
        SoundManager = __webpack_require__(7037);
        BattleScreen = __webpack_require__(7835);
        BattleMode = __webpack_require__(6128);
        DebugMenuButton = __webpack_require__(8892);
        EDebugger = __webpack_require__(4272);
        LogicClientHome = __webpack_require__(6385);
        LogicMemory = __webpack_require__(1588);
        Application = __webpack_require__(6046);
        GUI = __webpack_require__(4934);
        LogicDataTables = __webpack_require__(6139);
        LogicCardData = __webpack_require__(6292);
        LogicDailyData = __webpack_require__(7089);
        GameStateManager = __webpack_require__(3401);
        LogicAvatarHelper = __webpack_require__(6006);
        LogicClientAvatar = __webpack_require__(6153);
        MessageManager = __webpack_require__(9168);
        GameSCIDManager = __webpack_require__(8545);
        StringObject = __webpack_require__(7535);
        EnvOverride = __webpack_require__(746);
        GameMain = __webpack_require__(8775);
        LocalNotificationManager = __webpack_require__(514);
        Character = __webpack_require__(3932);
        MaintenancePopupPreview = __webpack_require__(7300);
        ServerConnection = __webpack_require__(8129);
        GameDownloadManager = __webpack_require__(1357);
        HomePage = __webpack_require__(2757);
        MapEditorScreen = __webpack_require__(5765);
        LatencyTestsPopup = __webpack_require__(8335);
        FPSCounter = __webpack_require__(9786);
        CombatHUD = __webpack_require__(2476);
        LogicBattleModeServer = __webpack_require__(5583);
        LogicBattleModeClient = __webpack_require__(5523);
        NotificationSettingsPopup = __webpack_require__(3747);
        DeviceLinkWindow = __webpack_require__(1248);
        SettingsPrivacyScreen = __webpack_require__(303);
        PASSIVE_PREVIEW_CARD_NAME = "Gunslinger_unique";
        NATIVE_DIALOG_TYPE_ANTI_ADDICTION = 29;
        YOOZOO_UPDATE_URL = "https://brawl.yoozoo.com/";
        REVOKE_GEMS_TARGET = -100;
        MAX_HERO_LEVEL_LVL9 = 9;
        keyPoolSizeOffset = ((LogicMemory).LogicMemory).offset(328, 328);
        keyPoolSecondsUntilNextBatchOffset = ((LogicMemory).LogicMemory).offset(332, 332);
        keyPoolSecondsUntilNextAdOffset = ((LogicMemory).LogicMemory).offset(336, 336);
        KEY_POOL_FILL_AMOUNT = 99;
        SIMPLE_GATCHA_TYPES = [(((HomeMode).HomeMode).gatchaType).Coins, (((HomeMode).HomeMode).gatchaType).TokenDoublers, (((HomeMode).HomeMode).gatchaType).PlayerIcon, (((HomeMode).HomeMode).gatchaType).Box, (((HomeMode).HomeMode).gatchaType).PowerPoints, (((HomeMode).HomeMode).gatchaType).StarPoints, (((HomeMode).HomeMode).gatchaType).EmotePack];
        <class_fields_init> = undefined;
        DebugCallbacks;
        class DebugCallbacks {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0xd7874 (open) */
}
            cycleLanguage () {
    var count, code;
        count = ((StringTable).StringTable).getLanguageCount();
        if ((count < 2)) {
            return "";
        } /* if 0xd5fa8 */
        if (((DebugCallbacks).languageCycleIndex < 0)) {
            DebugCallbacks.languageCycleIndex = ((StringTable).StringTable).getCurrentLanguageIndex();
        } /* if 0xd5fcc */
        DebugCallbacks.languageCycleIndex = (((DebugCallbacks).languageCycleIndex + 1) % count);
        ((StringTable).StringTable).setLanguageIndex((DebugCallbacks).languageCycleIndex, true);
        code = ((StringTable).StringTable).getCurrentLanguageCode();
        (DebugCallbacks).rebuildHomeScreenText();
        return code;
}
            rebuildHomeScreenText () {
        if ((!((GameStateManager).GameStateManager).isInState(((GameStateManager).GameStateId).Home))) {
            return;
        } /* if 0xd6062 */
        return;
}
            cycleLanguageWithFloater () {
    var code;
        code = (DebugCallbacks).cycleLanguage();
        if (code) {
            ((GUI).GUI).showFloaterTextAtDefaultPosition(("Language: ").concat(code));
            return;
        } /* if 0xd60cc (open) */
}
            giveRandomReward () {
    var type;
        type = SIMPLE_GATCHA_TYPES[(Math).floor(((Math).random() * SIMPLE_GATCHA_TYPES.length))];
        return;
}
            skipTutorial () {
        if ((((BattleMode).BattleMode).getInstance()).isNull()) {
            return;
        } /* if 0xd6164 */
        return;
}
            startTutorial () {
    var avatar;
        avatar = ((GameStateManager).GameStateManager).getPlayerAvatar();
        if (((avatar).instance).isNull()) {
            return;
        } /* if 0xd61bf */
        return;
}
            stopMusic () {
        return;
}
            stopAllSfx () {
        return;
}
            toggleHud () {
    var hud;
        if ((((BattleMode).BattleMode).getInstance()).isNull()) {
            return;
        } /* if 0xd6275 */
        hud = ((BattleScreen).BattleScreen).getCombatHUD();
        if ((!(hud).isNull())) {
            if (((hud).scaleX === 0)) {
            } /* if 0xd62a6 */
            /* jump -> 0xd62a7 */
            1.scale = 0;
        } /* if 0xd62ac */
        ((DebugMenuButton).DebugMenuButton).toggleButtonVisibility();
        if (((EDebugger).EDebugger).isCreated()) {
            ((EDebugger).EDebugger).hideOrShow();
            return;
        } /* if 0xd62e0 (open) */
}
            isHudShown () {
    var hud;
        if ((((BattleMode).BattleMode).getInstance()).isNull()) {
            return true;
        } /* if 0xd6328 */
        hud = ((BattleScreen).BattleScreen).getCombatHUD();
        if ((hud).isNull()) {
            return true;
        } /* if 0xd6348 */
        return ((hud).scaleX !== 0);
}
            toggleHeroHud () {
        (Character).Character.heroHudHidden = (!((Character).Character).heroHudHidden);
        return;
}
            isHeroHudShown () {
        return (!((Character).Character).heroHudHidden);
}
            toggleSkipGachaAnimation () {
        return;
}
            scidLogOut () {
        return;
}
            scidLogOutFromAllDevices () {
        return;
}
            scidReloadConfig () {
        ((GameSCIDManager).GameSCIDManager).init();
        return;
}
            scidDebugClearAllData () {
        ((StringObject).StringObject).with("", function (dir) {
        return ((GameSCIDManager).GameSCIDManager).debugClearAllData(dir);
});
        return;
}
            scidSwitchEnv () {
    var goingToStage;
        goingToStage = (!((EnvOverride).EnvOverride).isStage());
        if (goingToStage) {
        } /* if 0xd6553 */
        /* jump -> 0xd655b */
        (EnvOverride).STAGE_ENV((EnvOverride).PROD_ENV);
        ((GameSCIDManager).GameSCIDManager).setForceProd((!goingToStage));
        return;
}
            showAntiAddictionDialog () {
        return;
}
            forceActiveNotifications () {
        return;
}
            forceAllNotifications () {
        return;
}
            resetForcedNotifications () {
        return;
}
            openYoozooUpdateUrl () {
        return;
}
            openNotificationSettings () {
        return;
}
            openDeviceLinkScreen () {
        return;
}
            toggleHideProfile () {
        return;
}
            isHideProfileEnabled () {
        return ((SettingsPrivacyScreen).SettingsPrivacyScreen).isHidePlayerProfileEnabled();
}
            showMaintenanceDefault () {
        return;
}
            showMaintenanceShort30s () {
        return;
}
            showMaintenance2Tab () {
        return;
}
            showMaintenance3Tab () {
        return;
}
            showMaintenanceNewsEsports () {
        return;
}
            enableTestContentUpdate () {
        ((ServerConnection).ServerConnection).setTestContentUpdate((!((ServerConnection).ServerConnection).isTestContentUpdateEnabled()));
        if (((ServerConnection).ServerConnection).isTestContentUpdateEnabled()) {
        } /* if 0xd6849 */
        /* jump -> 0xd684e */
        return;
}
            testDeferredDownload () {
        return;
}
            triggerAppReview () {
        return;
}
            openMapEditorPopup () {
        return;
}
            mapEditorToggleGrid () {
        return;
}
            mapEditorFillAll () {
        return;
}
            mapEditorEraseAll () {
        return;
}
            mapEditorToggleSaveValidationBypass () {
        return;
}
            isMapEditorSaveValidationBypassed () {
        return ((MapEditorScreen).MapEditorScreen).isSaveValidationBypassed();
}
            mapEditorTogglePlacementBypass () {
        return;
}
            isMapEditorPlacementBypassed () {
        return ((MapEditorScreen).MapEditorScreen).isPlacementRestrictionBypassed();
}
            mapEditorToggleFullPalette () {
        return;
}
            isMapEditorFullPaletteUnlocked () {
        return ((MapEditorScreen).MapEditorScreen).isFullPaletteUnlocked();
}
            mapEditorGoHome () {
        return;
}
            latencyTestStart () {
        return;
}
            requestSeasonRewards () {
        return;
}
            startTutorialFromConversion () {
        return;
}
            toggleFollowSpectate () {
        if ((((BattleMode).BattleMode).getInstance()).isNull()) {
            return;
        } /* if 0xd6b1a */
        return;
}
            isFollowSpectate () {
        if ((((BattleMode).BattleMode).getInstance()).isNull()) {
            return false;
        } /* if 0xd6b65 */
        return ((BattleScreen).BattleScreen).isFollowSpectate();
}
            toggleSlowMode () {
    var enabled;
        enabled = ((GameMain).GameMain).toggleSlowMode();
        if (enabled) {
        } /* if 0xd6bce */
        /* jump -> 0xd6bd3 */
        return;
}
            isSlowModeEnabled () {
        return ((GameMain).GameMain).isSlowMode();
}
            debugResetCurrentAccount () {
        return;
}
            logOutAllDevices () {
        return;
}
            toggleFpsCounter () {
        return;
}
            isFpsCounterShown () {
        return ((FPSCounter).FPSCounter).isEnabled();
}
            toggleShowTidKeys () {
    var enabled;
        enabled = ((StringTable).StringTable).toggleShowTidKeys();
        (DebugCallbacks).rebuildHomeScreenText();
        if (enabled) {
        } /* if 0xd6d09 */
        /* jump -> 0xd6d0e */
        return;
}
            isShowTidKeys () {
        return ((StringTable).StringTable).isShowTidKeys();
}
            copyAccountId () {
    var accountId, tag;
        accountId = ((GameMain).GameMain).getAccountId();
        tag = ("").concat((accountId).getHigh(), "-", (accountId).getLow());
        ((Application).Application).copyString(tag);
        return;
}
            softReloadGame () {
        return;
}
            toggleBossMusic () {
    var active;
        active = ((SoundManager).SoundManager).toggleBossMusic();
        if (active) {
        } /* if 0xd6e5d */
        /* jump -> 0xd6e62 */
        return;
}
            openClanPopup () {
        return;
}
            openTeamupPopup () {
        return;
}
            openDeleteAccount () {
        return;
}
            cycleMusicVolume () {
    var volume;
        volume = ((SoundManager).SoundManager).cycleMusicVolume();
        return;
}
            toggleMusicPaused () {
    var paused;
        paused = ((SoundManager).SoundManager).toggleMusicPaused();
        if (paused) {
        } /* if 0xd6fae */
        /* jump -> 0xd6fb3 */
        return;
}
            toggleChatBubbles () {
    var hud;
        if ((((BattleMode).BattleMode).getInstance()).isNull()) {
            return;
        } /* if 0xd6ffe */
        hud = ((BattleScreen).BattleScreen).getCombatHUD();
        if ((hud).isNull()) {
            return;
        } /* if 0xd701d */
        return;
}
            areChatBubblesVisible () {
        return ((CombatHUD).CombatHUD).areChatBubblesVisible();
}
            debugForceEndGameWin () {
        return;
}
            debugForceEndGameLoss () {
        return;
}
            cycleBotDifficulty () {
        DebugCallbacks.botDifficultyCycle = (((DebugCallbacks).botDifficultyCycle + 1) % 5);
        ((LogicBattleModeServer).LogicBattleModeServer).setBotDifficulty((DebugCallbacks).botDifficultyCycle);
        return;
}
            toggleScrollableDebugLog () {
        if ((!((EDebugger).EDebugger).isCreated())) {
            return;
        } /* if 0xd7193 */
        return;
}
            clearKeyPool () {
        return;
}
            fillKeyPool () {
        return;
}
            writeKeyPool (size) {
    var playerData;
        playerData = ((LogicClientHome).LogicClientHome).getPlayerData();
        if (!(!playerData)) {
            if ((playerData).isNull()) {
                return;
            } /* if 0xd7255 */
        } /* if 0xd7252 */
        ((playerData).add(keyPoolSizeOffset)).writeInt(size);
        ((playerData).add(keyPoolSecondsUntilNextBatchOffset)).writeInt(0);
        return;
}
            unlockAndMaxAllLvl9 () {
    var home, charactersTable, count, i, character;
        home = ((HomeMode).HomeMode).getInstance();
        if ((!home)) {
            return;
        } /* if 0xd7303 */
        charactersTable = ((LogicDataTables).LogicDataTables).getTable((((LogicDataTables).LogicDataTables).table).Characters);
        count = (charactersTable).getItemCount();
        i = 0;
        while ((i < count)) {
            character = (charactersTable).getItemAt(i);
            if (!(!character)) {
                /* CATCH -> 0xd737e (try region) */
                ((LogicAvatarHelper).LogicAvatarHelper).levelUpHeroToTargetLevel(home, character, MAX_HERO_LEVEL_LVL9);
                character = i = home = charactersTable = count = <underflow>;
            } /* if 0xd7385 */
            /* jump -> 0xd7385 */
            /* CATCH -> 0xd7387 (try region) */
            /* jump -> 0xd7385 */
            throw <underflow>;
            i = ((i) + 1);
            (i++);
            return;
        } /* while 0xd738f (open) */
}
            unlockOpenedGadgets () {
        return;
}
            unlockOpenedStarPowers () {
        return;
}
            revokeIapGemsToNegative () {
    var avatar;
        avatar = ((GameStateManager).GameStateManager).getPlayerAvatar();
        if (((avatar).instance).isNull()) {
            return;
        } /* if 0xd7448 */
        return;
}
            markAllAsNew () {
    var avatar, playerData, charactersTable, i, character, cardsTable, i, card;
        avatar = ((GameStateManager).GameStateManager).getPlayerAvatar();
        playerData = ((LogicClientHome).LogicClientHome).getPlayerData();
        if (!(!playerData)) {
            if (!(playerData).isNull()) {
                (playerData).isNull();
                if (((avatar).instance).isNull()) {
                    return;
                } /* if 0xd7504 */
            } /* if 0xd7501 */
        } /* if 0xd7501 */
        charactersTable = ((LogicDataTables).LogicDataTables).getTable((((LogicDataTables).LogicDataTables).table).Characters);
        i = 0;
        while ((i < (charactersTable).getItemCount())) {
            character = (charactersTable).getItemAt(i);
            if (!(!character)) {
                (avatar).setCommodityCount((((LogicClientAvatar).LogicClientAvatar).commodityType).HeroSeenState, (character).instance, 0, 0);
            } /* if 0xd757e */
            i = ((i) + 1);
            (i++);
        } /* while 0xd7588 */
        cardsTable = ((LogicDataTables).LogicDataTables).getTable((((LogicDataTables).LogicDataTables).table).Cards);
        i = 0;
        while ((i < (cardsTable).getItemCount())) {
            card = (cardsTable).getItemAt(i);
            if (!(!card)) {
                ((LogicDailyData).LogicDailyData).addNewItem(playerData, (card).instance);
            } /* if 0xd75f8 */
            i = ((i) + 1);
            (i++);
            return;
        } /* while 0xd7602 (open) */
}
            setAvatarPassive () {
        return;
}
            setAvatarPassiveRecruit () {
        return;
}
            unlockAllCardsOfMetaType (metaType) {
    var avatar, cardsTable, count, i, card;
        avatar = ((GameStateManager).GameStateManager).getPlayerAvatar();
        if (((avatar).instance).isNull()) {
            return;
        } /* if 0xd76f3 */
        cardsTable = ((LogicDataTables).LogicDataTables).getTable((((LogicDataTables).LogicDataTables).table).Cards);
        count = (cardsTable).getItemCount();
        i = 0;
        while ((i < count)) {
            card = (cardsTable).getItemAt(i);
            if (!(!card)) {
                if (!((card).metaType !== metaType)) {
                    (avatar).setItem(card);
                } /* if 0xd7766 */
            } /* if 0xd7755 */
            i = ((i) + 1);
            (i++);
            return;
        } /* while 0xd7770 (open) */
}
            applyAvatarPassivePreview (commodityType) {
    var avatar, cardsTable, card;
        avatar = ((GameStateManager).GameStateManager).getPlayerAvatar();
        if (((avatar).instance).isNull()) {
            return;
        } /* if 0xd77df */
        cardsTable = ((LogicDataTables).LogicDataTables).getTable((((LogicDataTables).LogicDataTables).table).Cards);
        card = (cardsTable).getItemByName(PASSIVE_PREVIEW_CARD_NAME);
        if (!(!card)) {
            if (((card).instance).isNull()) {
                return;
            } /* if 0xd782c */
        } /* if 0xd7829 */
        return;
}
        }
        DebugCallbacks = LogicClientHome = DebugCallbacks;
        exports.DebugCallbacks = DebugCallbacks;
        DebugCallbacks.languageCycleIndex = -1;
        DebugCallbacks.botDifficultyCycle = 0;
        return;
};

// --------------------- MODULE 313 — Debugger ---------------------


// ============================================================ //
// webpack module 313  —  Debugger
// exports: Debugger
// deps: 2214 (ModProperties), 3380 (Logcat), 4009 (Config), 4272 (EDebugger), 4974 (Breadcrumbs), 7535 (StringObject), 9878 (Libg)
// ============================================================ //

__webpack_modules__[313] = function Debugger_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, StringObject, Config, ModProperties, Logcat, Breadcrumbs, EDebugger, Debugger_errorString, Debugger_errorCString, Debugger, <class_fields_init>, Debugger;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.Debugger = undefined;
        Libg = __webpack_require__(9878);
        StringObject = __webpack_require__(7535);
        Config = __webpack_require__(4009);
        ModProperties = __webpack_require__(2214);
        Logcat = __webpack_require__(3380);
        Breadcrumbs = __webpack_require__(4974);
        EDebugger = __webpack_require__(4272);
        Debugger_errorString = ((Libg).Libg).offset(5310880, 0);
        Debugger_errorCString = ((Libg).Libg).offset(5310944, 0);
        <class_fields_init> = undefined;
        Debugger;
        class Debugger {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x72a30 (open) */
}
            patch () {
        (Interceptor).attach(Debugger_errorString, { onEnter (args) {
    var logMessage;
        logMessage = ((StringObject).StringObject).read(args[0]);
        return;
} });
        return;
}
            recordError (message) {
    var logMessage;
        if ((message === "")) {
            return;
        } /* if 0x72985 */
        logMessage = (message).substring(0, 1024);
        ((Breadcrumbs).Breadcrumbs).push(logMessage);
        if ((((Config).Config).useDebugLoggingVersions).includes(((ModProperties).ModProperties).environment)) {
            ((EDebugger).EDebugger).addMessage(((EDebugger).EDebugger).ERROR, logMessage);
            ((Logcat).Logcat).logError(logMessage);
            return;
        } /* if 0x72a00 (open) */
}
        }
        Debugger = Debugger_errorCString = Debugger;
        exports.Debugger = Debugger;
        return;
};

// --------------------- MODULE 4272 — EDebugger ---------------------


// ============================================================ //
// webpack module 4272  —  EDebugger
// exports: EDebugger
// deps: 612 (MovieClip), 2214 (ModProperties), 2635 (DeviceSpecifications), 3015 (TextField), 4009 (Config), 8632 (Stage), 9250 (StringTable)
// ============================================================ //

__webpack_modules__[4272] = function EDebugger_factory(__unused_webpack_module, exports, __webpack_require__) {
    var TextField, Config, MovieClip, StringTable, Stage, ModProperties, DeviceSpecifications, EDebugger, <class_fields_init>, EDebugger;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.EDebugger = undefined;
        TextField = __webpack_require__(3015);
        Config = __webpack_require__(4009);
        MovieClip = __webpack_require__(612);
        StringTable = __webpack_require__(9250);
        Stage = __webpack_require__(8632);
        ModProperties = __webpack_require__(2214);
        DeviceSpecifications = __webpack_require__(2635);
        <class_fields_init> = undefined;
        EDebugger;
        class EDebugger {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x970f5 (open) */
}
            configure (fontSize, maxMessages) {
        EDebugger.fontSize = fontSize;
        EDebugger.maxMessagesPerScreen = maxMessages;
        return;
}
            addMessage (level) {
    var args, raw, message;
        message = this;
        args = ...<underflow>;
        if ((!((Config).Config).useDebugLogging)) {
            return;
        } /* if 0x96bbc */
        args = ((args).map(function (arg) {
    var e, e;
        if ((typeof arg === "object")) {
            if ((arg !== null)) {
                /* CATCH -> 0x96d72 (try region) */
                return (JSON).stringify(arg);
                e = <underflow>;
                /* CATCH -> 0x96d81 (try region) */
                return String(arg);
                throw <underflow>;
                /* CATCH -> 0x96d92 (try region) */
            } /* if 0x96d7f */
        } /* if 0x96d7f */
        return (arg).toString();
        e = <underflow>;
        /* CATCH -> 0x96da1 (try region) */
        return String(args);
        throw <underflow>;
})).join(" ");
        if ((args === (message).lastRawMessage)) {
            if ((level === (message).lastLevel)) {
                return;
            } /* if 0x96bec */
        } /* if 0x96bec */
        message.lastRawMessage = args;
        message.lastLevel = level;
        raw = undefined;
        if ((level === (EDebugger).ERROR)) {
            raw = ("<cFF0000>[E] ").concat(args, "</c>\n");
        } /* if 0x96c28 */
        /* jump -> 0x96cea */
        if ((level === (EDebugger).WARNING)) {
            raw = ("<cFFFF00>[W] ").concat(args, "</c>\n");
        } /* if 0x96c51 */
        /* jump -> 0x96cea */
        if ((level === (EDebugger).INFO)) {
            raw = ("<c90EE90>[I] ").concat(args, "</c>\n");
        } /* if 0x96c79 */
        /* jump -> 0x96ce9 */
        if ((level === (EDebugger).LASER)) {
            raw = ("<cFDBDBA>[L] ").concat(args, "</c>\n");
        } /* if 0x96ca1 */
        /* jump -> 0x96ce9 */
        if ((level === (EDebugger).VERBOSE)) {
            raw = ("<cDDDDDD>[V] ").concat(args, "</c>\n");
        } /* if 0x96cc9 */
        /* jump -> 0x96ce9 */
        raw = ("<cBC8F8F>[U(").concat(level, ")] ", args, "</c>\n");
        ((message).messages).push(raw);
        return;
}
            clear () {
        this.messages = [];
        this.text = "";
        this.lastRawMessage = "";
        this.lastLevel = null;
        return;
}
            create () {
    var eDebuggerTextField;
        if (((Config).Config).useDebugLogging) {
            eDebuggerTextField = ((MovieClip).MovieClip).getTextFieldByName((((StringTable).StringTable).getMovieClip("sc/ui.sc", "popover_text_left")).instance, "text");
            eDebuggerTextField.x = 20;
            eDebuggerTextField.y = 10;
            eDebuggerTextField.color = 0;
            eDebuggerTextField.colorTag = true;
            eDebuggerTextField.fontOutline = true;
            eDebuggerTextField.fontSize = (this).fontSize;
            this.textfield = new (TextField).TextField((eDebuggerTextField).instance);
            this.renderedText = null;
            this.headerText = ("<c90EE90>[I] BSD Brawl (").concat(((ModProperties).ModProperties).environment, ") for ", ((DeviceSpecifications).DeviceSpecifications).platform, ", version ", ((ModProperties).ModProperties).version, "</c>\n");
            this.headerText = ((this).headerText + "<c90EE90>[I] You can disable debug log displaying in mod menu</c>\n");
            ((Stage).Stage).addChild(((this).textfield).instance);
            return;
        } /* if 0x96f42 (open) */
}
            destroy () {
        if ((this).textfield) {
            ((Stage).Stage).removeChild(((this).textfield).instance);
            this.textfield = null;
            this.renderedText = null;
            return;
        } /* if 0x96fa0 (open) */
}
            hideOrShow () {
        this.isHidden = (!(this).isHidden);
        (this).textfield.visibility = (+(!(this).isHidden));
        return;
}
            isCreated () {
        return (!(!(this).textfield));
}
            trimMessages () {
    var excess;
        excess = ((this).messages.length - (this).maxMessagesPerScreen);
        if ((excess > 0)) {
            ((this).messages).splice(0, excess);
        } /* if 0x9704d */
        this.text = ((this).messages).join("");
        return;
}
            update () {
    var text;
        if ((!(this).textfield)) {
            return;
        } /* if 0x97092 */
        text = ((this).headerText + (this).text);
        if ((text === (this).renderedText)) {
            return;
        } /* if 0x970ad */
        (this).textfield.text = text;
        this.renderedText = text;
        return;
}
        }
        EDebugger = <class_fields_init> = EDebugger;
        exports.EDebugger = EDebugger;
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
        return;
};

// --------------------- MODULE 118 — DebugGameButton ---------------------


// ============================================================ //
// webpack module 118  —  DebugGameButton
// exports: DebugGameButton
// deps: 1588 (LogicMemory), 5039 (GameButton), 7535 (StringObject)
// ============================================================ //

__webpack_modules__[118] = function DebugGameButton_factory(__unused_webpack_module, exports, __webpack_require__) {
    var GameButton, StringObject, LogicMemory, checkboxOffset, intParameterOffset, categoryOffset, originalNameOffset, setTextVtableOffset, DebugGameButton, <class_fields_init>, DebugGameButton;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.DebugGameButton = undefined;
        GameButton = __webpack_require__(5039);
        StringObject = __webpack_require__(7535);
        LogicMemory = __webpack_require__(1588);
        checkboxOffset = ((LogicMemory).LogicMemory).offset(608);
        intParameterOffset = ((LogicMemory).LogicMemory).offset(620);
        categoryOffset = ((LogicMemory).LogicMemory).offset(632);
        originalNameOffset = ((LogicMemory).LogicMemory).offset(648);
        setTextVtableOffset = (54 * (Process).pointerSize);
        static getTextFieldText () {
    var textField;
        textField = ((this).getMovieClip()).getTextFieldByName("Text");
        if ((!textField)) {
            return "";
        } /* if 0xd7d79 */
        return (textField).text;
};
        static setTextFieldText (txt) {
    var setTextFn, strPtr;
        setTextFn = (DebugGameButton).resolveSetTextFunction(((this).instance).readPointer());
        strPtr = ((StringObject).StringObject).create(txt);
        return;
};
        static getCheckbox () {
        return (((this).instance).add(checkboxOffset)).readPointer();
};
        static setCheckbox (instance) {
        return;
};
        static switchCheckbox (state) {
    var intState;
        if (((this).getCheckbox()).isNull()) {
            return;
        } /* if 0xd7eff */
        if (state) {
        } /* if 0xd7f05 */
        /* jump -> 0xd7f06 */
        intState = 1;
        return;
};
        static getOriginalName () {
        return ((StringObject).StringObject).read(((this).instance).add(originalNameOffset));
};
        static setOriginalName (name) {
        return;
};
        static getIntParameter () {
        return (((this).instance).add(intParameterOffset)).readInt();
};
        static setIntParameter (value) {
        return;
};
        static getCategoryName () {
        return ((StringObject).StringObject).read(((this).instance).add(categoryOffset));
};
        static setCategoryName (name) {
        return;
};
        <class_fields_init> = undefined;
        DebugGameButton;
        class DebugGameButton extends <class_fields_init> = (GameButton).GameButton {
            constructor (instance) {
    var this.active_func, new.target;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        this = super(instance);
        if (<class_fields_init>) {
        } /* if 0xd7ce6 */
        this.mode = "both";
        this.isFilteredOut = false;
        if (!(!instance)) {
            if ((instance).isNull()) {
                (((this).instance).add(checkboxOffset)).writePointer(NULL);
            } /* if 0xd7d30 */
        } /* if 0xd7d0d */
        return this;
}
            resolveSetTextFunction (vtable) {
        return new NativeFunction(((vtable).add(setTextVtableOffset)).readPointer(), "void", ["pointer", "pointer", "bool"]);
}
        }
        DebugGameButton = DebugGameButton = DebugGameButton;
        exports.DebugGameButton = DebugGameButton;
        return;
};

// --------------------- MODULE 1019 — DebugCommandButton ---------------------


// ============================================================ //
// webpack module 1019  —  DebugCommandButton
// exports: DebugCommandButton
// deps: 118 (DebugGameButton), 1588 (LogicMemory), 8087 (LogicDebugButtonMessage)
// ============================================================ //

__webpack_modules__[1019] = function DebugCommandButton_factory(__unused_webpack_module, exports, __webpack_require__) {
    var DebugGameButton, LogicDebugButtonMessage, LogicMemory, actionIdxOffset, DebugCommandButton, <class_fields_init>, DebugCommandButton;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.DebugCommandButton = undefined;
        DebugGameButton = __webpack_require__(118);
        LogicDebugButtonMessage = __webpack_require__(8087);
        LogicMemory = __webpack_require__(1588);
        actionIdxOffset = ((LogicMemory).LogicMemory).offset(616);
        static setActionIdx (actionIdx) {
        return;
};
        static callback (_self, pressedButton) {
    var buttonView;
        buttonView = new (DebugGameButton).DebugGameButton(pressedButton);
        return;
};
        <class_fields_init> = undefined;
        DebugCommandButton;
        class DebugCommandButton extends <class_fields_init> = (DebugGameButton).DebugGameButton {
            constructor (actionIdx, intParameter, btnType) {
    var this.active_func, new.target;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        this = super();
        if (<class_fields_init>) {
        } /* if 0xd79c6 */
        this.btnType = btnType;
        (this).setActionIdx(actionIdx);
        (this).setIntParameter(intParameter);
        return this;
}
            readActionIdx (button) {
        return ((button).add(actionIdxOffset)).readInt();
}
        }
        DebugCommandButton = v8 = DebugCommandButton;
        exports.DebugCommandButton = DebugCommandButton;
        return;
};

// --------------------- MODULE 6118 — DebugRecents ---------------------


// ============================================================ //
// webpack module 6118  —  DebugRecents
// exports: DebugRecents
// ============================================================ //

__webpack_modules__[6118] = function DebugRecents_factory(__unused_webpack_module, exports) {
    var RECENTS_CAPACITY, DebugRecents, <class_fields_init>, DebugRecents;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.DebugRecents = undefined;
        RECENTS_CAPACITY = 8;
        <class_fields_init> = undefined;
        DebugRecents;
        class DebugRecents {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0xdb93b (open) */
}
            push (label) {
    var idx;
        idx = ((DebugRecents).labels).indexOf(label);
        if ((idx >= 0)) {
            ((DebugRecents).labels).splice(idx, 1);
        } /* if 0xdb7fe */
        ((DebugRecents).labels).unshift(label);
        if (((DebugRecents).labels.length > RECENTS_CAPACITY)) {
            (DebugRecents).labels.length = RECENTS_CAPACITY;
        } /* if 0xdb82f */
        return;
}
            getAll () {
        return ((DebugRecents).labels).slice();
}
            clear () {
        (DebugRecents).labels.length = 0;
        return;
}
            onChange (fn) {
        return;
}
        }
        DebugRecents = DebugRecents = DebugRecents;
        exports.DebugRecents = DebugRecents;
        DebugRecents.labels = [];
        DebugRecents.listeners = [];
        return;
};

// --------------------- MODULE 3256 — DebugSearch ---------------------


// ============================================================ //
// webpack module 3256  —  DebugSearch
// exports: DebugSearch
// ============================================================ //

__webpack_modules__[3256] = function DebugSearch_factory(__unused_webpack_module, exports) {
    var DebugSearch, <class_fields_init>, DebugSearch;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.DebugSearch = undefined;
        <class_fields_init> = undefined;
        DebugSearch;
        class DebugSearch {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0xdbb7a (open) */
}
            getQuery () {
        return (DebugSearch).query;
}
            setQuery (value) {
    var next;
        next = ((value).trim()).toLowerCase();
        if ((next === (DebugSearch).query)) {
            return;
        } /* if 0xdba76 */
        DebugSearch.query = next;
        return;
}
            clear () {
        return;
}
            matches (label) {
        if (((DebugSearch).query.length === 0)) {
            return true;
        } /* if 0xdbb06 */
        return ((label).toLowerCase()).includes((DebugSearch).query);
}
            onChange (fn) {
        return;
}
        }
        DebugSearch = DebugSearch = DebugSearch;
        exports.DebugSearch = DebugSearch;
        DebugSearch.query = "";
        DebugSearch.listeners = [];
        return;
};

// --------------------- MODULE 2447 — StageDebugText ---------------------


// ============================================================ //
// webpack module 2447  —  StageDebugText
// exports: StageDebugText
// deps: 612 (MovieClip), 3015 (TextField), 8632 (Stage), 9250 (StringTable)
// ============================================================ //

__webpack_modules__[2447] = function StageDebugText_factory(__unused_webpack_module, exports, __webpack_require__) {
    var MovieClip, Stage, StringTable, TextField, StageDebugText, <class_fields_init>, StageDebugText;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.StageDebugText = undefined;
        MovieClip = __webpack_require__(612);
        Stage = __webpack_require__(8632);
        StringTable = __webpack_require__(9250);
        TextField = __webpack_require__(3015);
        static setText (text) {
        (this).textfield.text = text;
        return;
};
        static rotate (rotationDegrees, scale) {
        return;
};
        static setAlpha (alpha) {
        (this).textfield.alpha = alpha;
        return;
};
        static destroy () {
        return;
};
        <class_fields_init> = undefined;
        StageDebugText;
        class StageDebugText {
            constructor (textfield) {
        if (<class_fields_init>) {
        } /* if 0xa8afa */
        this.textfield = textfield;
        return;
}
            create (opts) {
    var clip, tf, textfield;
        clip = ((StringTable).StringTable).getMovieClip("sc/ui.sc", "popover_text_left");
        tf = ((MovieClip).MovieClip).getTextFieldByName((clip).instance, "text");
        tf.x = (opts).x;
        tf.y = (opts).y;
        if ((((opts).color) == null)) {
            tf.color = 4294967295.0;
        } /* if 0xa8baf */
        if ((((opts).fontOutline) == null)) {
            tf.fontOutline = true;
        } /* if 0xa8bc3 */
        if ((((opts).fontSize) == null)) {
            tf.fontSize = 12;
        } /* if 0xa8bd8 */
        textfield = new (TextField).TextField((tf).instance);
        ((Stage).Stage).addChild((textfield).instance);
        return new StageDebugText(textfield);
}
        }
        StageDebugText = v8 = StageDebugText;
        exports.StageDebugText = StageDebugText;
        return;
};

// --------------------- MODULE 6045 — CommandLogger ---------------------


// ============================================================ //
// webpack module 6045  —  CommandLogger
// exports: CommandLogger
// deps: 1018 (HomeMode), 3380 (Logcat), 7656 (LogicCommand), 9878 (Libg)
// ============================================================ //

__webpack_modules__[6045] = function CommandLogger_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, Logcat, LogicCommand, HomeMode, commandNames, CommandLogger, <class_fields_init>, CommandLogger;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.CommandLogger = undefined;
        Libg = __webpack_require__(9878);
        Logcat = __webpack_require__(3380);
        LogicCommand = __webpack_require__(7656);
        HomeMode = __webpack_require__(1018);
        commandNames = { 201: "ChangeAvatarName", 202: "DiamondsAdded", 203: "GiveDeliveryItems", 204: "DayChanged", 205: "Server", 206: "AddNotification", 207: "ChangeResources", 208: "TransactionsRevoked", 209: "KeyPoolChanged", 211: "OffersChanged", 212: "PlayerDataChanged", 213: "InviteBlockingChanged", 214: "GemNameChangeStateChanged", 215: "SetSupportedCreator", 216: "CooldownExpired", 218: "BrawlPassSeasonChanged", 219: "BrawlPassUnlocked", 220: "HeroWinQuestsChanged", 221: "TeamChatMuteStateChanged", 222: "RankedSeasonChanged", 223: "CooldownAdded", 224: "SetESportsHubNotification", 226: "LoginCalendarChanged", 227: "BrawlerRecruitRoadChanged", 228: "RandomRewardManagerChanged", 229: "JoinAlliance", 230: "ReputationChanged", 231: "ReportState", 232: "UpdateNotification", 233: "TrophySeasonDataChanged", 234: "TemporaryHeroTeardown", 235: "ResetCollabPoints", 236: "CompetitivePassSeasonChanged", 237: "SetEsportsButtonState", 238: "ResetStreakLost", 239: "SetPlayerMute", 240: "UpdateEventItems", 503: "ClaimDailyReward", 505: "SetPlayerThumbnail", 506: "SelectSkin", 508: "ChangeControlMode", 509: "PurchaseDoubleCoins", 511: "HelpOpened", 512: "ToggleInGameHints", 514: "DeleteNotification", 515: "ClearShopTickers", 517: "ClaimRankUpReward", 519: "PurchaseOffer", 520: "LevelUp", 521: "PurchaseHeroLvlUpMaterial", 522: "HeroSeen", 525: "SelectCharacter", 526: "UnlockFreeSkins", 527: "SetPlayerNameColor", 528: "ViewInboxNotification", 529: "SelectStarPower", 530: "SetPlayerAge", 531: "CancelPurchaseOffer", 532: "ItemSeen", 533: "QuestsSeen", 535: "ClaimTailReward", 536: "PurchaseBrawlPassProgress", 538: "SelectEmote", 539: "BrawlPassAutoCollectWarningSeen", 540: "PurchaseChallengeLives", 541: "ClearESportsHubNotification", 543: "SelectGearBoost", 544: "SetLookingForTeamState", 545: "NextRandomSkin", 547: "RandomSkinMode", 548: "SetSkinUISeen", 549: "AllianceLeagueOnboardingSeen", 550: "ClaimLoginCalendarReward", 551: "ClaimWCPPDrop", 552: "ChangeAvatarPrivacyPreferences", 553: "UpdateAdvisedPrivacyPreferences", 554: "RerollQuest", 555: "SelectSpray", 556: "SetLoginCalendarState", 557: "PurchaseGadgetOrStarPower", 558: "PurchaseGear", 559: "RecruitRoadSelectBrawler", 560: "PurchaseBrawler", 561: "RecruitRoadSwitchBrawler", 562: "RecruitRoadClaimBrawler", 563: "RecruitRoadProcessExtraRecruitTokens", 564: "RecruitRoadSelectNewBrawler", 565: "RecruitRoadAbandonNewBrawler", 566: "PurchaseFame", 567: "SetInfoPopupSeenFlags", 568: "SetBattleIntroData", 570: "SelectFavouriteHero", 571: "ClaimRandomReward", 572: "VideoAdStart", 573: "VideoAdFinish", 574: "VideoAdTracking", 575: "VideoAdNotFinished", 576: "RankedSeasonSeen", 577: "SetPlayerFrame", 578: "ClaimFameReward", 579: "UseSpecialEventTokens", 580: "SetCoverOffer", 581: "VideoAdAction", 582: "ClaimCollabPoints", 583: "SetDataSeenState", 584: "CollabSideSeen", 586: "ClaimContestRewards", 587: "JoinClubEventSeen", 588: "ContestClaimTickets", 589: "JoinMoreActiveClubAction", 590: "AlliancePiggyBankTicketsSeen", 591: "ClaimCompetitivePassReward", 592: "SetUnknownAge", 593: "PurchaseCompetitivePassProgress", 594: "ClaimCompetitivePassTail", 595: "KeepDailyStreak", 596: "ResetDailyStreak", 597: "SelectAvatarPassive", 598: "UnselectAvatarPassive", 599: "SelectBonusSkill", 961: "SetEventFeatureSeenState" };
        <class_fields_init> = undefined;
        CommandLogger;
        class CommandLogger {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x9693a (open) */
}
            getName (type) {
        if (((commandNames[type]) == null)) {
            return ("Unknown_").concat(type);
        } /* if 0x96782 (open) */
}
            patch () {
        return;
}
        }
        CommandLogger = v8 = CommandLogger;
        exports.CommandLogger = CommandLogger;
        return;
};

