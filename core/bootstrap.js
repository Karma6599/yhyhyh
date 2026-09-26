// =============================================================
// BOOTSTRAP / ENTRY
// merged webpack modules: 8156 _, 8775 GameMain, 6842 GameApp, 6046 Application, 3888 InitState, 2436 InitializationGuard, 3401 GameStateManager, 4959 SessionStatics
// =============================================================

// --------------------- MODULE 8156 — _ ---------------------

// ============================================================ //
// webpack module 8156  —  _
// exports: LogInfo
// deps: 100 (TeamMemberEntry), 275 (FamePopup), 296 (EventDetailsPopup), 308 (AndroidArm64Compatibility), 313 (Debugger), 356 (LoadingScreen), 449 (PlayerStatusMessage), 710 (SkinSelectorPopup), 746 (EnvOverride), 944 (LogicLocationThemeData), 950 (BattleEndPopup), 1054 (HeroCollectionPopup), 1399 (TeamEntry), 1591 (NativeHTTPClientManager), 1724 (LogicDataTableResource), 1777 (LogicClientGlobals), 1866 (CallListener), 2035 (LaserBoxManager), 2053 (ProfileSkinNames), 2241 (BattleIntro) ...
// ============================================================ //

__webpack_modules__[8156] = function __factory(__unused_webpack_module, exports, __webpack_require__) {
    var NativeHTTPClientManager, InitializationGuard, FPSCounter, GameMain, LogicConfData, PlayerProfile, TeamManager, TeamPopup, StringTable, LogicLocationData, LoginOkMessage, ClientInputManager, PlayerInfo, EDebugger, Breadcrumbs, Logcat, LoadingScreen, Localisation, CombatHUD, HeroScreenPopup, FamePopup, BattleScreen, MapEditorScreen, MessageManager, SCIDConfig, LaserBoxManager, PopupBase, LogicDailyData, SettingsScreen, Config, LogicThemeData, InitState, HomeScreen, Debugger, TeamEntry, LogicSkillData, ServerHelloMessage, Messaging, PlayerStatusMessage, TeamStream, PlayerDisplayData, TeamChatMessage, Character, TeamMemberItem, CameraParameters, CallListener, AndroidArm64Compatibility, EmoteIcon, ChatStreamEntry, LoginMessage, Wendelstein, GameApp, BattleEndReplayScreen, DamageTracker, LogicPlayer, ReplayUuidLogger, ReplayStringIdLogger, GUI, SkinHelper, SkinSelectorPopup, SkinSelector, HashTagCodeGenerator, LogicDebugButtonMessage, TeamMemberEntry, LatencyTestResultMessage, AnalyticEvent, SoundManager, RewardOpeningPopup, LogicClientGlobals, LogicEffectData, LogicClientHome, FriendItem, AllianceEventStreamEntry, Attestation, EccDigest, ApkSignature, TamperStatus, LogicDataTableResource, LoginFailedMessage, LogicLocationThemeData, LogicSkinConfData, SnowFall, Shop, EventDetailsPopup, BattleEndPopup, MapPreview, StartLoadingMessage, DecoratedTextField, ServerConnection, TextField, LogicCharacterData, StreamItem, HomePage, UdpConnectionInfoMessage, IntegrityControl, GameSettings, ExceptionWorker, GLOverlay, HitboxRenderer, EnemyTracer, TileGridOverlay, SmoothHudGraph, AttackRangeIndicator, CommandLogger, SentryFilter, EnvOverride, ProfileSkinNames, AllyRespawnTimer, BattleIntro, UiInspector, SharedReplay, BattleLogShareButton, MoviePlayerPopup, LogicDataTables, Libg, HeroCollectionPopup, LaserPatch, ClientPatch, GameMainPatch, GamePatch, FriendsPatch, GameObjectPatch, NetworkPatch, MessagingPatch, GUIPatch, PopupPatch, Renderer3DPatch, ScreenPatch, StreamPatch, UtilsPatch, HomePatch, BattlePatch, StatePatch, TextPatch, LogicPatch, LogicBattlePatch, LogicDataPatch, TitanPatch, TitanClientPatch, CommonPatch, HTTPPatch, SrcPatch, SuitcaseInit, LogInfo, Init;
        LaserPatch = function LaserPatch() {
        ClientPatch();
        return;
};
        ClientPatch = function ClientPatch() {
        GamePatch();
        return;
};
        GameMainPatch = function GameMainPatch() {
        setInterval(function () {
        (FPSCounter).FPSCounter.bySecondTrigger = true;
        return;
}, 1000);
        ((EnvOverride).EnvOverride).patch();
        ((SentryFilter).SentryFilter).patch();
        ((AllyRespawnTimer).AllyRespawnTimer).patch();
        ((ReplayUuidLogger).ReplayUuidLogger).patch();
        ((ReplayStringIdLogger).ReplayStringIdLogger).patch();
        ((SharedReplay).SharedReplay).patch();
        ((BattleLogShareButton).BattleLogShareButton).patch();
        ((GUI).GUI).patch();
        return;
};
        GamePatch = function GamePatch() {
        FriendsPatch();
        GUIPatch();
        GameMainPatch();
        GameObjectPatch();
        NetworkPatch();
        Renderer3DPatch();
        ScreenPatch();
        StatePatch();
        StreamPatch();
        TextPatch();
        return;
};
        FriendsPatch = function FriendsPatch() {
        ((PlayerInfo).PlayerInfo).patch();
        ((ProfileSkinNames).ProfileSkinNames).patch();
        ((PlayerProfile).PlayerProfile).patch();
        ((PlayerDisplayData).PlayerDisplayData).patch();
        return;
};
        GameObjectPatch = function GameObjectPatch() {
        ((Character).Character).patch();
        return;
};
        NetworkPatch = function NetworkPatch() {
        ((MessageManager).MessageManager).patch();
        ((ServerConnection).ServerConnection).patch();
        ((SCIDConfig).SCIDConfig).patch();
        ((LaserBoxManager).LaserBoxManager).patch();
        return;
};
        MessagingPatch = function MessagingPatch() {
        ((Messaging).Messaging).patch();
        ((LoginMessage).LoginMessage).patch();
        ((LoginOkMessage).LoginOkMessage).patch();
        ((ServerHelloMessage).ServerHelloMessage).patch();
        ((PlayerStatusMessage).PlayerStatusMessage).patch();
        ((TeamChatMessage).TeamChatMessage).patch();
        ((LatencyTestResultMessage).LatencyTestResultMessage).patch();
        ((LoginFailedMessage).LoginFailedMessage).patch();
        ((StartLoadingMessage).StartLoadingMessage).patch();
        return;
};
        GUIPatch = function GUIPatch() {
        ((CombatHUD).CombatHUD).patch();
        ((EmoteIcon).EmoteIcon).patch();
        ((BattleIntro).BattleIntro).patch();
        ((UiInspector).UiInspector).patch();
        return;
};
        PopupPatch = function PopupPatch() {
        ((PopupBase).PopupBase).patch();
        ((EventDetailsPopup).EventDetailsPopup).patch();
        ((HeroScreenPopup).HeroScreenPopup).patch();
        ((SkinSelectorPopup).SkinSelectorPopup).patch();
        ((RewardOpeningPopup).RewardOpeningPopup).patch();
        ((BattleEndPopup).BattleEndPopup).patch();
        ((MapPreview).MapPreview).patch();
        ((FamePopup).FamePopup).patch();
        ((MoviePlayerPopup).MoviePlayerPopup).patch();
        return;
};
        Renderer3DPatch = function Renderer3DPatch() {
        ((CameraParameters).CameraParameters).patch();
        ((GLOverlay).GLOverlay).patch();
        ((HitboxRenderer).HitboxRenderer).patch();
        ((EnemyTracer).EnemyTracer).patch();
        ((AttackRangeIndicator).AttackRangeIndicator).patch();
        ((TileGridOverlay).TileGridOverlay).patch();
        return;
};
        ScreenPatch = function ScreenPatch() {
        HomePatch();
        BattlePatch();
        return;
};
        StreamPatch = function StreamPatch() {
        ((AllianceEventStreamEntry).AllianceEventStreamEntry).patch();
        ((ChatStreamEntry).ChatStreamEntry).patch();
        ((TeamStream).TeamStream).patch();
        return;
};
        UtilsPatch = function UtilsPatch() {
        ((SkinHelper).SkinHelper).patch();
        ((HashTagCodeGenerator).HashTagCodeGenerator).patch();
        if (((Process).platform !== "darwin")) {
            ((LogicDebugButtonMessage).LogicDebugButtonMessage).patch();
            return;
        } /* if 0x3853a (open) */
};
        HomePatch = function HomePatch() {
        ((TeamManager).TeamManager).patch();
        ((TeamPopup).TeamPopup).patch();
        ((SettingsScreen).SettingsScreen).patch();
        ((HomeScreen).HomeScreen).patch();
        ((Shop).Shop).patch();
        ((TeamEntry).TeamEntry).patch();
        ((TeamMemberItem).TeamMemberItem).patch();
        ((SnowFall).SnowFall).patch();
        ((HomePage).HomePage).patch();
        return;
};
        BattlePatch = function BattlePatch() {
        ((BattleScreen).BattleScreen).patch();
        ((ClientInputManager).ClientInputManager).patch();
        ((BattleEndReplayScreen).BattleEndReplayScreen).patch();
        ((TeamMemberEntry).TeamMemberEntry).patch();
        return;
};
        StatePatch = function StatePatch() {
        return;
};
        TextPatch = function TextPatch() {
        ((TextField).TextField).patch();
        ((DecoratedTextField).DecoratedTextField).patch();
        ((StringTable).StringTable).patch();
        return;
};
        LogicPatch = function LogicPatch() {
        LogicDataPatch();
        return;
};
        LogicBattlePatch = function LogicBattlePatch() {
        return;
};
        LogicDataPatch = function LogicDataPatch() {
        ((LogicCharacterData).LogicCharacterData).patch();
        ((LogicClientGlobals).LogicClientGlobals).patch();
        ((LogicClientHome).LogicClientHome).patch();
        ((LogicConfData).LogicConfData).patch();
        ((LogicDailyData).LogicDailyData).patch();
        ((LogicDataTables).LogicDataTables).patch();
        ((LogicEffectData).LogicEffectData).patch();
        ((LogicLocationData).LogicLocationData).patch();
        ((LogicLocationThemeData).LogicLocationThemeData).patch();
        ((LogicSkillData).LogicSkillData).patch();
        ((LogicSkinConfData).LogicSkinConfData).patch();
        return;
};
        TitanPatch = function TitanPatch() {
        return;
};
        TitanClientPatch = function TitanClientPatch() {
        CommonPatch();
        return;
};
        CommonPatch = function CommonPatch() {
        HTTPPatch();
        ((Debugger).Debugger).patch();
        ((AnalyticEvent).AnalyticEvent).patch();
        (((GameApp).Display).Mode).patch();
        ((GameApp).GameApp).patch();
        return;
};
        HTTPPatch = function HTTPPatch() {
        return;
};
        SrcPatch = function SrcPatch() {
        return;
};
        SuitcaseInit = function SuitcaseInit() {
        return;
};
        LogInfo = function LogInfo() {
    var args;
        args = ...<underflow>;
        return;
};
        Init = function Init() {
    var error;
        if ((!((InitializationGuard).InitializationGuard).tryBegin(((Libg).Libg).libgBeginOffset))) {
            /* return_async  */
        } /* if 0x38acd */
        ((Logcat).Logcat).logInfo("--- NEW SESSION ---");
        /* CATCH -> 0x38c08 (try region) */
        new (Logcat).Logcat();
        ((Config).Config).init();
        ((ExceptionWorker).ExceptionWorker).init();
        ((Attestation).Attestation).patch();
        ((EccDigest).EccDigest).patch();
        ((ApkSignature).ApkSignature).patch();
        ((TamperStatus).TamperStatus).patch();
        ((LoadingScreen).LoadingScreen).patch();
        ((Localisation).Localisation).init();
        ((LogicDataTableResource).LogicDataTableResource).patch();
        ((AndroidArm64Compatibility).AndroidArm64Compatibility).patch();
        ((CallListener).CallListener).patch();
        if (((Config).Config).useDebugLogging) {
            ((CommandLogger).CommandLogger).patch();
        } /* if 0x38bd0 */
        LaserPatch();
        SuitcaseInit();
        ((Breadcrumbs).Breadcrumbs).initCrashDebug();
        ((Logcat).Logcat).logInfo("Successfully initialized");
        /* jump -> 0x38c8b */
        error = <underflow>;
        /* CATCH -> 0x38c8c (try region) */
        ((Logcat).Logcat).logError("Error occurred while initializing");
        ((EDebugger).EDebugger).addMessage(((EDebugger).EDebugger).ERROR, "Error occurred while initializing");
        ((ExceptionWorker).ExceptionWorker).logException("INITERROR", (error).stack);
        if (((Config).Config).useDebugLogging) {
            ((Logcat).Logcat).logError((error).stack);
        } /* if 0x38c86 */
        /* jump -> 0x38c8a */
        throw <underflow>;
        /* return_async  */
};
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.LogInfo = LogInfo;
        NativeHTTPClientManager = __webpack_require__(1591);
        InitializationGuard = __webpack_require__(2436);
        FPSCounter = __webpack_require__(9786);
        GameMain = __webpack_require__(8775);
        LogicConfData = __webpack_require__(4812);
        PlayerProfile = __webpack_require__(3293);
        TeamManager = __webpack_require__(3644);
        TeamPopup = __webpack_require__(4401);
        StringTable = __webpack_require__(9250);
        LogicLocationData = __webpack_require__(4325);
        LoginOkMessage = __webpack_require__(5485);
        ClientInputManager = __webpack_require__(9405);
        PlayerInfo = __webpack_require__(9518);
        EDebugger = __webpack_require__(4272);
        Breadcrumbs = __webpack_require__(4974);
        Logcat = __webpack_require__(3380);
        LoadingScreen = __webpack_require__(356);
        Localisation = __webpack_require__(7265);
        CombatHUD = __webpack_require__(2476);
        HeroScreenPopup = __webpack_require__(3098);
        FamePopup = __webpack_require__(275);
        BattleScreen = __webpack_require__(7835);
        MapEditorScreen = __webpack_require__(5765);
        MessageManager = __webpack_require__(9168);
        SCIDConfig = __webpack_require__(6068);
        LaserBoxManager = __webpack_require__(2035);
        PopupBase = __webpack_require__(8581);
        LogicDailyData = __webpack_require__(7089);
        SettingsScreen = __webpack_require__(7591);
        Config = __webpack_require__(4009);
        LogicThemeData = __webpack_require__(6253);
        InitState = __webpack_require__(3888);
        HomeScreen = __webpack_require__(8569);
        Debugger = __webpack_require__(313);
        TeamEntry = __webpack_require__(1399);
        LogicSkillData = __webpack_require__(3537);
        ServerHelloMessage = __webpack_require__(7351);
        Messaging = __webpack_require__(7324);
        PlayerStatusMessage = __webpack_require__(449);
        TeamStream = __webpack_require__(3341);
        PlayerDisplayData = __webpack_require__(9778);
        TeamChatMessage = __webpack_require__(6041);
        Character = __webpack_require__(3932);
        TeamMemberItem = __webpack_require__(9526);
        CameraParameters = __webpack_require__(6247);
        CallListener = __webpack_require__(1866);
        AndroidArm64Compatibility = __webpack_require__(308);
        EmoteIcon = __webpack_require__(6156);
        ChatStreamEntry = __webpack_require__(7676);
        LoginMessage = __webpack_require__(4371);
        Wendelstein = __webpack_require__(3707);
        GameApp = __webpack_require__(6842);
        BattleEndReplayScreen = __webpack_require__(6980);
        DamageTracker = __webpack_require__(8138);
        LogicPlayer = __webpack_require__(6013);
        ReplayUuidLogger = __webpack_require__(8765);
        ReplayStringIdLogger = __webpack_require__(4610);
        GUI = __webpack_require__(4934);
        SkinHelper = __webpack_require__(9902);
        SkinSelectorPopup = __webpack_require__(710);
        SkinSelector = __webpack_require__(7669);
        HashTagCodeGenerator = __webpack_require__(4541);
        LogicDebugButtonMessage = __webpack_require__(8087);
        TeamMemberEntry = __webpack_require__(100);
        LatencyTestResultMessage = __webpack_require__(7638);
        AnalyticEvent = __webpack_require__(9493);
        SoundManager = __webpack_require__(7037);
        RewardOpeningPopup = __webpack_require__(7135);
        LogicClientGlobals = __webpack_require__(1777);
        LogicEffectData = __webpack_require__(2567);
        LogicClientHome = __webpack_require__(6385);
        FriendItem = __webpack_require__(8418);
        AllianceEventStreamEntry = __webpack_require__(2533);
        Attestation = __webpack_require__(6055);
        EccDigest = __webpack_require__(2324);
        ApkSignature = __webpack_require__(8669);
        TamperStatus = __webpack_require__(7726);
        LogicDataTableResource = __webpack_require__(1724);
        LoginFailedMessage = __webpack_require__(8516);
        LogicLocationThemeData = __webpack_require__(944);
        LogicSkinConfData = __webpack_require__(5257);
        SnowFall = __webpack_require__(3756);
        Shop = __webpack_require__(6946);
        EventDetailsPopup = __webpack_require__(296);
        BattleEndPopup = __webpack_require__(950);
        MapPreview = __webpack_require__(7895);
        StartLoadingMessage = __webpack_require__(3000);
        DecoratedTextField = __webpack_require__(8794);
        ServerConnection = __webpack_require__(8129);
        TextField = __webpack_require__(3015);
        LogicCharacterData = __webpack_require__(7171);
        StreamItem = __webpack_require__(8727);
        HomePage = __webpack_require__(2757);
        UdpConnectionInfoMessage = __webpack_require__(8777);
        IntegrityControl = __webpack_require__(4776);
        GameSettings = __webpack_require__(8489);
        ExceptionWorker = __webpack_require__(4419);
        GLOverlay = __webpack_require__(5508);
        HitboxRenderer = __webpack_require__(4076);
        EnemyTracer = __webpack_require__(6584);
        TileGridOverlay = __webpack_require__(8601);
        SmoothHudGraph = __webpack_require__(6364);
        AttackRangeIndicator = __webpack_require__(2255);
        CommandLogger = __webpack_require__(6045);
        SentryFilter = __webpack_require__(4844);
        EnvOverride = __webpack_require__(746);
        ProfileSkinNames = __webpack_require__(2053);
        AllyRespawnTimer = __webpack_require__(6858);
        BattleIntro = __webpack_require__(2241);
        UiInspector = __webpack_require__(7710);
        SharedReplay = __webpack_require__(4111);
        BattleLogShareButton = __webpack_require__(3982);
        MoviePlayerPopup = __webpack_require__(3615);
        LogicDataTables = __webpack_require__(6139);
        Libg = __webpack_require__(9878);
        HeroCollectionPopup = __webpack_require__(1054);
        return;
};

// --------------------- MODULE 8775 — GameMain ---------------------

// ============================================================ //
// webpack module 8775  —  GameMain
// exports: GameMain
// deps: 356 (LoadingScreen), 1111 (GetBSDOnlineMessage), 1588 (LogicMemory), 2141 (TSChaCha20), 2214 (ModProperties), 2476 (CombatHUD), 2556 (BSDPlusManager), 2743 (LogicLong), 3458 (BSDKeepAliveMessage), 3614 (BattleDebugOverlay), 3902 (NativeDialog), 4009 (Config), 4272 (EDebugger), 4595 (CategoryManagementPopup), 4921 (BattleNetStatsOverlay), 4934 (GUI), 5230 (SmoothHud), 5281 (BSDMessageManager), 6046 (Application), 6312 (BSDProxy) ...
// ============================================================ //

__webpack_modules__[8775] = function GameMain_factory(__unused_webpack_module, exports, __webpack_require__) {
    var _a, Libg, EDebugger, FPSCounter, NativeDialog, Localisation, StringTable, BSDProxy, BSDPlusManager, ModProperties, LogicMemory, StringObject, HomeScreen, GUI, INativeDialogListener, Application, CombatHUD, LogicLong, Utils, BSDMessageManager, BSDKeepAliveMessage, GetBSDOnlineMessage, TSChaCha20, CustomTextEncoder, Config, DebugMenuButton, LoadingScreen, BattleDebugOverlay, BattleNetStatsOverlay, UiInspector, Watermark, SmoothHud, CustomButton, CategoryManagementPopup, TempValueHolder, MessageManager, ConsentUtil_isUsercentricsEnabled, DestroyGame, GameMain_draw, GameMain_getRand, GameMain_initFontsBool, GameMain_instanceAddr, GameMain_isLowEndDevice, GameMain_loadAsset, GameMain_openAppRateDialog, GameMain_openAppRateDialogFn, GameMain_reloadGameInternal, GameMain_setAccountId, GameMain_setHibernate, GameMain_showIAPInfo, GameMain_showNativeDialog, GameMain_showMaintenanceDialog, GameMain_updateDeviceProfile, overlayContainerOffset, hibernateStateOffset, needReloadGameOffset, accountIdOffset, gfxCapabilityOffset, memoryCapabilityOffset, renderDeltaTimeOffset, useOnlyLowresAssetsAddr, slowModeAddr, GameMain_setSlowMode, GameMain, <class_fields_init>, GameMain;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.GameMain = undefined;
        Libg = __webpack_require__(9878);
        EDebugger = __webpack_require__(4272);
        FPSCounter = __webpack_require__(9786);
        NativeDialog = __webpack_require__(3902);
        Localisation = __webpack_require__(7265);
        StringTable = __webpack_require__(9250);
        BSDProxy = __webpack_require__(6312);
        BSDPlusManager = __webpack_require__(2556);
        ModProperties = __webpack_require__(2214);
        LogicMemory = __webpack_require__(1588);
        StringObject = __webpack_require__(7535);
        HomeScreen = __webpack_require__(8569);
        GUI = __webpack_require__(4934);
        INativeDialogListener = __webpack_require__(9025);
        Application = __webpack_require__(6046);
        CombatHUD = __webpack_require__(2476);
        LogicLong = __webpack_require__(2743);
        Utils = __webpack_require__(8070);
        BSDMessageManager = __webpack_require__(5281);
        BSDKeepAliveMessage = __webpack_require__(3458);
        GetBSDOnlineMessage = __webpack_require__(1111);
        TSChaCha20 = __webpack_require__(2141);
        CustomTextEncoder = __webpack_require__(9724);
        Config = __webpack_require__(4009);
        DebugMenuButton = __webpack_require__(8892);
        LoadingScreen = __webpack_require__(356);
        BattleDebugOverlay = __webpack_require__(3614);
        BattleNetStatsOverlay = __webpack_require__(4921);
        UiInspector = __webpack_require__(7710);
        Watermark = __webpack_require__(7703);
        SmoothHud = __webpack_require__(5230);
        CustomButton = __webpack_require__(6851);
        CategoryManagementPopup = __webpack_require__(4595);
        TempValueHolder = __webpack_require__(7556);
        MessageManager = __webpack_require__(9168);
        ConsentUtil_isUsercentricsEnabled = new NativeFunction(((Libg).Libg).offset(6775080, 0), "bool", []);
        DestroyGame = new NativeFunction(((Libg).Libg).offset(7455904, 0), "void", []);
        GameMain_draw = ((Libg).Libg).offset(7718808, 0);
        GameMain_getRand = new NativeFunction(((Libg).Libg).offset(7726596, 0), "int", ["int"]);
        GameMain_initFontsBool = ((Libg).Libg).offset(7714664, 0);
        GameMain_instanceAddr = ((Libg).Libg).offset(19914856, 0);
        GameMain_isLowEndDevice = ((Libg).Libg).offset(7695868, 0);
        GameMain_loadAsset = new NativeFunction(((Libg).Libg).offset(7722496, 0), "void", ["pointer", "int"]);
        GameMain_openAppRateDialog = ((Libg).Libg).offset(7724664, 0);
        GameMain_openAppRateDialogFn = new NativeFunction(GameMain_openAppRateDialog, "void", ["pointer"]);
        GameMain_reloadGameInternal = ((Libg).Libg).offset(7713392, 0);
        GameMain_setAccountId = ((Libg).Libg).offset(7725036, 0);
        GameMain_setHibernate = new NativeFunction(((Libg).Libg).offset(7719972, 0), "void", ["pointer", "bool"]);
        GameMain_showIAPInfo = ((Libg).Libg).offset(7722104, 0);
        GameMain_showNativeDialog = new NativeFunction(((Libg).Libg).offset(7714816, 0), "void", ["pointer", "int", "int", "pointer", "pointer", "pointer"]);
        GameMain_showMaintenanceDialog = new NativeFunction(((Libg).Libg).offset(7726612, 0), "void", ["pointer", "int", "pointer", "int"]);
        GameMain_updateDeviceProfile = ((Libg).Libg).offset(7694192, 0);
        overlayContainerOffset = ((LogicMemory).LogicMemory).offset(128);
        hibernateStateOffset = ((LogicMemory).LogicMemory).offset(232);
        needReloadGameOffset = ((LogicMemory).LogicMemory).offset(257);
        accountIdOffset = ((LogicMemory).LogicMemory).offset(448);
        gfxCapabilityOffset = ((LogicMemory).LogicMemory).offset(136);
        memoryCapabilityOffset = ((LogicMemory).LogicMemory).offset(140);
        renderDeltaTimeOffset = ((LogicMemory).LogicMemory).offset(152);
        useOnlyLowresAssetsAddr = ((Libg).Libg).offset(19854356, 0);
        slowModeAddr = ((Libg).Libg).offset(19914776, 0);
        GameMain_setSlowMode = ((Libg).Libg).offset(7725648, 0);
        <class_fields_init> = undefined;
        GameMain;
        class GameMain {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x3a55e (open) */
}
            get hibernateState () {
        return Boolean((((this).getInstance()).add(hibernateStateOffset)).readU8());
}
            getInstance () {
        return (GameMain_instanceAddr).readPointer();
}
            getOverlayContainer () {
    var instance;
        instance = (_a).getInstance();
        if ((instance).isNull()) {
            return NULL;
        } /* if 0x395ea */
        return ((instance).add(overlayContainerOffset)).readPointer();
}
            getAccountId () {
        return new (LogicLong).LogicLong((((this).getInstance()).add(accountIdOffset)).readPointer());
}
            loadAsset (assetName) {
        return;
}
            showNativeDialog (type) {
    var errorCode, title, message, button, type, errorCode, title, message, button;
        errorCode = this;
        errorCode = type;
        if (((errorCode) === undefined)) {
            title = errorCode = 0;
        } /* if 0x39710 */
        if (((title) === undefined)) {
            message = title = "";
        } /* if 0x39719 */
        if (((message) === undefined)) {
            button = message = "";
        } /* if 0x39722 */
        if (((button) === undefined)) {
            type = button = "";
        } /* if 0x3972f */
        return;
}
            showMaintenanceDialog (mode, message, secondsUntilEnd) {
        return;
}
            reloadGame () {
        return;
}
            triggerAppReview () {
        _a.reviewForceOnce = true;
        return;
}
            applyGraphicsConfig () {
    var lowResForced, instance;
        lowResForced = (((Config).Config).config).UseLowResGraphics;
        if (lowResForced) {
        } /* if 0x398e7 */
        /* jump -> 0x398e8 */
        instance = (this).getInstance();
        if ((instance).isNull()) {
            return;
        } /* if 0x39904 */
        if (lowResForced) {
            ((instance).add(gfxCapabilityOffset)).writeS32(0);
            ((instance).add(memoryCapabilityOffset)).writeS32(0);
            return;
        } /* if 0x3993a */
        ((instance).add(gfxCapabilityOffset)).writeS32((((Config).Config).config).GfxQualityLevel);
        ((instance).add(memoryCapabilityOffset)).writeS32((((Config).Config).config).MemQualityLevel);
        return;
}
            applySlowMode (state) {
        if (state) {
        } /* if 0x399c1 */
        /* jump -> 0x399c2 */
        return;
}
            isSlowMode () {
        return ((slowModeAddr).readU8() !== 0);
}
            toggleSlowMode () {
        ((Config).Config).config.SlowMode = (!(_a).isSlowMode());
        (_a).applySlowMode((((Config).Config).config).SlowMode);
        return (((Config).Config).config).SlowMode;
}
            setHibernate (state) {
        return;
}
            destroy (timeout) {
        return;
}
            getRand (range) {
        return GameMain_getRand(range);
}
            openModTelegram (self, index) {
        return;
}
            patch () {
        (Interceptor).attach(GameMain_reloadGameInternal, { onEnter (args) {
        ((EDebugger).EDebugger).destroy();
        ((FPSCounter).FPSCounter).toggle(false);
        ((DebugMenuButton).DebugMenuButton).destroy();
        (HomeScreen).HomeScreen.isEntered = false;
        return;
} });
        (Interceptor).attach(GameMain_draw, { onEnter (args) {
        this.deltaTime = ((args[0]).add(renderDeltaTimeOffset)).readFloat();
        if ((!(_a).isJniReady)) {
            _a.isJniReady = true;
        } /* if 0x39e4a */
        return;
}, onLeave (retval) {
    var character, popup;
        ((StringTable).StringTable).updateOverlays();
        ((MessageManager).MessageManager).updateMatchmakingButton();
        ((CustomButton).CustomButton).updateHoldListeners();
        ((EDebugger).EDebugger).update();
        if (((((CombatHUD).CombatHUD).battleChat) == null)) {
        } /* if 0x39f40 */
        /* jump -> 0x39f48 */
        if ((undefined).isCreated()) {
            if (((((CombatHUD).CombatHUD).battleChat) == null)) {
            } /* if 0x39f5f */
            /* jump -> 0x39f67 */
            (undefined).update();
        } /* if 0x39f68 */
        ((FPSCounter).FPSCounter).update();
        ((BattleDebugOverlay).BattleDebugOverlay).update();
        ((BattleNetStatsOverlay).BattleNetStatsOverlay).update();
        ((UiInspector).UiInspector).update();
        ((Watermark).Watermark).update();
        ((SmoothHud).SmoothHud).update();
        ((HomeScreen).HomeScreen).update();
        ((GUI).GUI).update((this).deltaTime);
        ((BSDPlusManager).BSDPlusManager).updateActivationTimer();
        if (((HomeScreen).HomeScreen).isEntered) {
            if ((((Utils).Utils).getCurrentTime() > ((_a).lastKeepAliveSentAt + (_a).KEEP_ALIVE_INTERVAL_SEC))) {
                _a.lastKeepAliveSentAt = ((Utils).Utils).getCurrentTime();
                (((BSDMessageManager).BSDMessageManager).sendMessage(new (BSDKeepAliveMessage).BSDKeepAliveMessage())).then(function (response) {
    var parsedResponseData, chaCha20, decryptedResponse, parsedResponse;
        if (!((response).statusCode !== 200)) {
            ((response).statusCode !== 200);
            if ((!(response).json)) {
                return;
            } /* if 0x3a170 */
        } /* if 0x3a16d */
        parsedResponseData = (response).json;
        chaCha20 = new (TSChaCha20).TSChaCha20(((TSChaCha20).TSChaCha20).key, ((TSChaCha20).TSChaCha20).nonce);
        decryptedResponse = ((CustomTextEncoder).CustomTextEncoder).decode((chaCha20).decrypt(new Uint8Array(((BSDMessageManager).BSDMessageManager).escapedStringToBytes((parsedResponseData).data))));
        parsedResponse = (JSON).parse(decryptedResponse);
        (GetBSDOnlineMessage).GetBSDOnlineMessage.lastOnline = (parsedResponse).online;
        return;
});
            } /* if 0x3a079 */
        } /* if 0x3a079 */
        if (((TempValueHolder).TempValueHolder).getAndForget("CALL_CMP")) {
            if (((ModProperties).ModProperties).isFeatureAvailableInThisBuild(((ModProperties).EExperimentalFeature).CATEGORIES)) {
                character = ((TempValueHolder).TempValueHolder).getAndForget("CMP_CHARACTER");
                popup = new (CategoryManagementPopup).CategoryManagementPopup(character);
                ((GUI).GUI).showPopup(popup, true, true, true);
                return;
            } /* if 0x3a0f2 (open) */
        } /* if 0x3a0f2 (open) */
} });
        (Interceptor).replace(GameMain_showNativeDialog, new NativeCallback(function (self, NativeDialogType, ErrorCode, PString1, PString2, PString3) {
        ((EDebugger).EDebugger).addMessage(((EDebugger).EDebugger).INFO, ("NativeDialog Type = ").concat((NativeDialogType).toString()));
        if ((NativeDialogType === 5)) {
            ((NativeDialog).NativeDialog).show(((Localisation).Localisation).getString("UpdateNativeDialogTitle"), ((Localisation).Localisation).getString("UpdateNativeDialogDesc"), ((Localisation).Localisation).getString("UpdateNativeDialogOurSocialButton"), "", "", ((_a).modUpdateNativeDialogListener).instance);
            return;
        } /* if 0x3a2ef */
        if ((NativeDialogType === 31)) {
            ((NativeDialog).NativeDialog).show(((StringTable).StringTable).getString("TID_ERROR_POP_UP_LOGIN_BLOCKED_TITLE"), ((StringTable).StringTable).getString("TID_LOGIN_RESTRICTED_BY_LOCATION"), "OK", "", ((Localisation).Localisation).getString("EnableProxy"), (((BSDProxy).BSDProxy).proxyNativeDialogListener).instance);
            return;
        } /* if 0x3a35e */
        GameMain_showNativeDialog(self, NativeDialogType, ErrorCode, PString1, PString2, PString3);
        return;
}, "void", ["pointer", "int", "int", "pointer", "pointer", "pointer"]));
        (Interceptor).replace(GameMain_showIAPInfo, new NativeCallback(function () {
        return 0;
}, "int", []));
        (Interceptor).replace(ConsentUtil_isUsercentricsEnabled, new NativeCallback(function () {
        if (((Process).platform === "darwin")) {
            return 0;
        } /* if 0x3a3b7 */
        return 3;
}, "bool", []));
        (Interceptor).replace(GameMain_openAppRateDialog, new NativeCallback(function (self) {
        if ((_a).reviewForceOnce) {
            _a.reviewForceOnce = false;
            GameMain_openAppRateDialogFn(self);
            return;
        } /* if 0x3a3ec (open) */
}, "void", ["pointer"]));
        (Interceptor).attach(GameMain_setAccountId, { onLeave () {
        if ((((ModProperties).ModProperties).environment === "plus")) {
            if ((!((BSDPlusManager).BSDPlusManager).isBSDPlusEnabled)) {
                if ((!((BSDPlusManager).BSDPlusManager).activationCaption)) {
                    ((BSDPlusManager).BSDPlusManager).showActivationCaption();
                    return;
                } /* if 0x3a450 (open) */
            } /* if 0x3a450 (open) */
        } /* if 0x3a450 (open) */
} });
        (Interceptor).attach(GameMain_initFontsBool, function () {
    var context;
        context = (this).context;
        context.x21 = ptr(1);
        return;
});
        (Interceptor).attach(GameMain_isLowEndDevice, { onLeave (retval) {
        return;
} });
        (Interceptor).attach(GameMain_updateDeviceProfile, { onLeave () {
        return;
} });
        return;
}
        }
        GameMain = BSDPlusManager = GameMain;
        exports.GameMain = GameMain;
        _a = GameMain;
        if ((((ModProperties).ModProperties).environment == "dev")) {
        } /* if 0x39479 */
        /* jump -> 0x3947b */
        10.KEEP_ALIVE_INTERVAL_SEC = 60;
        GameMain.lastKeepAliveSentAt = ((Utils).Utils).getCurrentTime();
        GameMain.isJniReady = false;
        GameMain.reviewForceOnce = false;
        GameMain.modUpdateNativeDialogListener = new (INativeDialogListener).INativeDialogListener((_a).openModTelegram);
        return;
};

// --------------------- MODULE 6842 — GameApp ---------------------

// ============================================================ //
// webpack module 6842  —  GameApp
// exports: Display, GameApp
// deps: 1588 (LogicMemory), 2660 (FramerateManager), 3380 (Logcat), 4009 (Config), 9878 (Libg)
// ============================================================ //

__webpack_modules__[6842] = function GameApp_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, Config, Logcat, LogicMemory, FramerateManager, GameApp_getSupportedDisplayModes, GameApp_setDisplayMode, displayModesEndOffset, displayModeRefreshRateOffset, displayModeIdOffset, DISPLAY_MODE_SIZE, Display, GameApp, <class_fields_init>, GameApp;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.Display = undefined;
        undefined.GameApp = exports;
        Libg = __webpack_require__(9878);
        Config = __webpack_require__(4009);
        Logcat = __webpack_require__(3380);
        LogicMemory = __webpack_require__(1588);
        FramerateManager = __webpack_require__(2660);
        GameApp_getSupportedDisplayModes = ((Libg).Libg).offset(6781476, 0);
        GameApp_setDisplayMode = ((Libg).Libg).offset(7667792, 0);
        displayModesEndOffset = ((LogicMemory).LogicMemory).offset(8);
        displayModeRefreshRateOffset = ((LogicMemory).LogicMemory).offset(8);
        displayModeIdOffset = ((LogicMemory).LogicMemory).offset(12);
        DISPLAY_MODE_SIZE = 16;
        if (!Display) {
            exports.Display = displayModeRefreshRateOffset = {};
        } /* if 0x72b8b */
        displayModeRefreshRateOffset = {}(exports);
        <class_fields_init> = undefined;
        GameApp;
        class GameApp {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x73137 (open) */
}
            patch () {
        if (((Process).platform === "darwin")) {
            return;
        } /* if 0x73057 */
        return;
}
        }
        GameApp = displayModeRefreshRateOffset = GameApp;
        exports.GameApp = GameApp;
        return;
};

// --------------------- MODULE 6046 — Application ---------------------

// ============================================================ //
// webpack module 6046  —  Application
// exports: Application
// deps: 7535 (StringObject), 9878 (Libg)
// ============================================================ //

__webpack_modules__[6046] = function Application_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, StringObject, Application_openURL, CopyString, NativePostDialog, Application, <class_fields_init>, Application;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.Application = undefined;
        Libg = __webpack_require__(9878);
        StringObject = __webpack_require__(7535);
        Application_openURL = new NativeFunction(((Libg).Libg).offset(7613460, 0), "void", ["pointer"]);
        CopyString = new NativeFunction(((Libg).Libg).offset(7614888, 0), "void", ["pointer"]);
        NativePostDialog = new NativeFunction(((Libg).Libg).offset(7370884, 0), "void", ["pointer", "pointer", "pointer", "pointer"]);
        <class_fields_init> = undefined;
        Application;
        class Application {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x7270a (open) */
}
            copyString (str) {
        return;
}
            openUrl (url) {
        return;
}
            openShareDialog (text) {
    var title, text, title;
        title = text;
        if (((title) === undefined)) {
            text = title = "Share";
        } /* if 0x72688 */
        return;
}
        }
        Application = v8 = Application;
        exports.Application = Application;
        return;
};

// --------------------- MODULE 3888 — InitState ---------------------

// ============================================================ //
// webpack module 3888  —  InitState
// exports: InitState, InitState_initFonts
// deps: 356 (LoadingScreen), 4009 (Config), 5637 (FontManager), 7300 (MaintenancePopupPreview), 7535 (StringObject), 8775 (GameMain), 9878 (Libg)
// ============================================================ //

__webpack_modules__[3888] = function InitState_factory(__unused_webpack_module, exports, __webpack_require__) {
    var GameMain, Libg, FontManager, Config, StringObject, MaintenancePopupPreview, LoadingScreen, contentUpdateProgressOffset, InitState_showMaintenancePopup, InitState, <class_fields_init>, InitState;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.InitState_initFonts = undefined;
        undefined.InitState = exports;
        GameMain = __webpack_require__(8775);
        Libg = __webpack_require__(9878);
        FontManager = __webpack_require__(5637);
        Config = __webpack_require__(4009);
        StringObject = __webpack_require__(7535);
        MaintenancePopupPreview = __webpack_require__(7300);
        LoadingScreen = __webpack_require__(356);
        contentUpdateProgressOffset = ((Libg).Libg).offset(13651684, 0);
        exports.InitState_initFonts = ((Libg).Libg).offset(13655184, 0);
        InitState_showMaintenancePopup = new NativeFunction(((Libg).Libg).offset(13652776, 0), "void", ["pointer", "int", "pointer", "int"]);
        <class_fields_init> = undefined;
        InitState;
        class InitState {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x5a5a3 (open) */
}
            showMaintenancePopup (stateInstance, mode, message, secondsUntilEnd) {
        if ((stateInstance).isNull()) {
            return;
        } /* if 0x5a338 */
        return;
}
            patch () {
    var updateProgress, contentLoadingTimeout;
        updateProgress = -1;
        contentLoadingTimeout = undefined;
        (Interceptor).attach(contentUpdateProgressOffset, function () {
        updateProgress = (((this).context).x21).toInt32();
        if (contentLoadingTimeout) {
            return;
        } /* if 0x5a473 */
        contentLoadingTimeout = setTimeout(function () {
        if ((updateProgress < 5)) {
            ((GameMain).GameMain).reloadGame();
            InitState.useGameAssetsToHost = true;
            return;
        } /* if 0x5a4c9 (open) */
}, 3000);
        return;
});
        (Interceptor).attach((exports).InitState_initFonts, { onEnter () {
        return;
}, onLeave () {
        return;
} });
        return;
}
        }
        InitState = InitState_showMaintenancePopup = InitState;
        exports.InitState = InitState;
        InitState.useGameAssetsToHost = false;
        return;
};

// --------------------- MODULE 2436 — InitializationGuard ---------------------

// ============================================================ //
// webpack module 2436  —  InitializationGuard
// exports: InitializationGuard
// ============================================================ //

__webpack_modules__[2436] = function InitializationGuard_factory(__unused_webpack_module, exports) {
    var initializationRegistry, InitializationGuard, <class_fields_init>, InitializationGuard;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.InitializationGuard = undefined;
        initializationRegistry = (Symbol)["for"]("BSD.initializedEngineModules");
        <class_fields_init> = undefined;
        InitializationGuard;
        class InitializationGuard {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0xb8eb9 (open) */
}
            tryBegin (engineBase) {
    var runtime, initializedModules, key;
        runtime = globalThis;
        if (((runtime[initializationRegistry]) == null)) {
            runtime[initializationRegistry] = new Set();
        } /* if 0xb8e5a */
        /* jump -> 0xb8e5c */
        initializedModules = new Set();
        key = (engineBase).toString();
        if ((initializedModules).has(key)) {
            return false;
        } /* if 0xb8e79 */
        (initializedModules).add(key);
        return true;
}
        }
        InitializationGuard = InitializationGuard = InitializationGuard;
        exports.InitializationGuard = InitializationGuard;
        return;
};

// --------------------- MODULE 3401 — GameStateManager ---------------------

// ============================================================ //
// webpack module 3401  —  GameStateManager
// exports: GameStateId, GameStateManager, GameStateManager_changeToStateOffset
// deps: 1588 (LogicMemory), 6153 (LogicClientAvatar), 9878 (Libg)
// ============================================================ //

__webpack_modules__[3401] = function GameStateManager_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, LogicMemory, LogicClientAvatar, GameStateManager_getInstance, GameStateManager_changeToState, GameStateManager_clearGameData, currentStateOffset, currentStateTypeOffset, pendingStateTypeOffset, playerAvatarOffset, GameStateId, GameStateManager, <class_fields_init>, GameStateManager;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.GameStateManager_changeToStateOffset = undefined;
        undefined.GameStateId = exports;
        exports.GameStateManager = undefined;
        Libg = __webpack_require__(9878);
        LogicMemory = __webpack_require__(1588);
        LogicClientAvatar = __webpack_require__(6153);
        GameStateManager_getInstance = new NativeFunction(((Libg).Libg).offset(13622772, 0), "pointer", []);
        exports.GameStateManager_changeToStateOffset = ((Libg).Libg).offset(13625944, 0);
        GameStateManager_changeToState = new NativeFunction((exports).GameStateManager_changeToStateOffset, "void", ["pointer"]);
        GameStateManager_clearGameData = new NativeFunction(((Libg).Libg).offset(13623212, 0), "void", ["pointer"]);
        currentStateOffset = ((LogicMemory).LogicMemory).offset(72);
        currentStateTypeOffset = ((LogicMemory).LogicMemory).offset(80);
        pendingStateTypeOffset = ((LogicMemory).LogicMemory).offset(84);
        playerAvatarOffset = ((LogicMemory).LogicMemory).offset(96);
        if (!GameStateId) {
            exports.GameStateId = pendingStateTypeOffset = {};
        } /* if 0x59df3 */
        pendingStateTypeOffset = {}(exports);
        <class_fields_init> = undefined;
        GameStateManager;
        class GameStateManager {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x5a15d (open) */
}
            getInstance () {
        return GameStateManager_getInstance();
}
            changeState (stateId) {
    var instance;
        instance = (this).getInstance();
        if ((instance).isNull()) {
            return;
        } /* if 0x59f86 */
        return;
}
            changeToState () {
        return;
}
            clearGameData () {
    var instance;
        instance = (this).getInstance();
        if ((instance).isNull()) {
            return;
        } /* if 0x5a009 */
        return;
}
            getPlayerAvatar () {
        return new (LogicClientAvatar).LogicClientAvatar((((this).getInstance()).add(playerAvatarOffset)).readPointer());
}
            getCurrentState () {
    var instance;
        instance = (this).getInstance();
        if ((instance).isNull()) {
            return NULL;
        } /* if 0x5a09f */
        return ((instance).add(currentStateOffset)).readPointer();
}
            getCurrentStateId () {
    var instance;
        instance = (this).getInstance();
        if ((instance).isNull()) {
            return null;
        } /* if 0x5a0f4 */
        return ((instance).add(currentStateTypeOffset)).readS32();
}
            isInState (stateId) {
        return ((this).getCurrentStateId() === stateId);
}
        }
        GameStateManager = pendingStateTypeOffset = GameStateManager;
        exports.GameStateManager = GameStateManager;
        return;
};

// --------------------- MODULE 4959 — SessionStatics ---------------------

// ============================================================ //
// webpack module 4959  —  SessionStatics
// exports: SessionStatics
// deps: 9878 (Libg)
// ============================================================ //

__webpack_modules__[4959] = function SessionStatics_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, SessionStatics_setMatchContext, sessionStaticsGlobal, SessionStatics, <class_fields_init>, SessionStatics;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.SessionStatics = undefined;
        Libg = __webpack_require__(9878);
        SessionStatics_setMatchContext = new NativeFunction(((Libg).Libg).offset(14001616, 0), "void", ["pointer", "int", "pointer", "int", "int", "pointer", "pointer"]);
        sessionStaticsGlobal = ((Libg).Libg).offset(19952456, 0);
        <class_fields_init> = undefined;
        SessionStatics;
        class SessionStatics {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x59c36 (open) */
}
            getInstance () {
        return sessionStaticsGlobal;
}
            setMatchContext (context) {
        return;
}
        }
        SessionStatics = SessionStatics = SessionStatics;
        exports.SessionStatics = SessionStatics;
        return;
};

