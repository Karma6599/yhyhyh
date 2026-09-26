// =============================================================
// SCREENS
// merged webpack modules: 8569 HomeScreen, 7835 BattleScreen, 2478 GameScreen, 2757 HomePage, 3077 NewsPage, 6946 Shop, 819 BrawlerMenu, 1056 SimpleWebView, 356 LoadingScreen, 2031 AboutScreen, 8486 BillingPackages, 8883 BillingPackageItem, 9573 BrawlerItem
// =============================================================

// --------------------- MODULE 8569 — HomeScreen ---------------------

// ============================================================ //
// webpack module 8569  —  HomeScreen
// exports: EHomeDeeplinkPage, HomeScreen
// deps: 612 (MovieClip), 699 (FileManager), 783 (DownloadManager), 884 (LogicRandom), 1111 (GetBSDOnlineMessage), 1588 (LogicMemory), 1874 (GetBSDOwnHomeData), 1981 (LogicStarrDropRewards), 2141 (TSChaCha20), 2214 (ModProperties), 2556 (BSDPlusManager), 2562 (CustomBackground), 2757 (HomePage), 3217 (Sprite), 3341 (TeamStream), 3458 (BSDKeepAliveMessage), 4009 (Config), 4111 (SharedReplay), 4272 (EDebugger), 4330 (Player) ...
// ============================================================ //

__webpack_modules__[8569] = function HomeScreen_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, StringObject, ThemeSelector, CustomBackground, Config, FileManager, Player, LogicMemory, GameMain, Sprite, StringTable, SoundManager, HomePage, TeamStream, MovieClip, Validation, GUI, DeliveryUnit, LogicGatchaDrop, LogicArrayList, RewardOpeningPopup, LogicDataTables, LogicStarrDropRewards, LogicRandom, ModProperties, Utils, BSDMessageManager, BSDKeepAliveMessage, GetBSDOnlineMessage, GetBSDOwnHomeData, LoginOkMessage, EDebugger, TSChaCha20, CustomTextEncoder, BSDPlusManager, BattleServers, SharedReplay, DownloadManager, Breadcrumbs, DebugMenuButton, HomeScreen_ctor, HomeScreen_refreshTheme, HomeScreen_layoutBackground, HomeScreen_doOfflineGatcha, HomeScreen_joinClanFromDeeplink, HomeScreen_gotoPage, HomeScreen_isPlayerAgeGated, HomeScreen_TEMP_PATCH_NO_THEME_FOUND, HomeScreen_SKIP_GATCHA_ANIMATION, homeScreenSpriteOffset, themeOffset, themeBgMovieClipOffset, homePageOffset, EHomeDeeplinkPage, ELegacyThemeAction, HomeScreen, <class_fields_init>, HomeScreen;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.EHomeDeeplinkPage = undefined;
        undefined.HomeScreen = exports;
        Libg = __webpack_require__(9878);
        StringObject = __webpack_require__(7535);
        ThemeSelector = __webpack_require__(9244);
        CustomBackground = __webpack_require__(2562);
        Config = __webpack_require__(4009);
        FileManager = __webpack_require__(699);
        Player = __webpack_require__(4330);
        LogicMemory = __webpack_require__(1588);
        GameMain = __webpack_require__(8775);
        Sprite = __webpack_require__(3217);
        StringTable = __webpack_require__(9250);
        SoundManager = __webpack_require__(7037);
        HomePage = __webpack_require__(2757);
        TeamStream = __webpack_require__(3341);
        MovieClip = __webpack_require__(612);
        Validation = __webpack_require__(5667);
        GUI = __webpack_require__(4934);
        DeliveryUnit = __webpack_require__(6465);
        LogicGatchaDrop = __webpack_require__(6574);
        LogicArrayList = __webpack_require__(5417);
        RewardOpeningPopup = __webpack_require__(7135);
        LogicDataTables = __webpack_require__(6139);
        LogicStarrDropRewards = __webpack_require__(1981);
        LogicRandom = __webpack_require__(884);
        ModProperties = __webpack_require__(2214);
        Utils = __webpack_require__(8070);
        BSDMessageManager = __webpack_require__(5281);
        BSDKeepAliveMessage = __webpack_require__(3458);
        GetBSDOnlineMessage = __webpack_require__(1111);
        GetBSDOwnHomeData = __webpack_require__(1874);
        LoginOkMessage = __webpack_require__(5485);
        EDebugger = __webpack_require__(4272);
        TSChaCha20 = __webpack_require__(2141);
        CustomTextEncoder = __webpack_require__(9724);
        BSDPlusManager = __webpack_require__(2556);
        BattleServers = __webpack_require__(9698);
        SharedReplay = __webpack_require__(4111);
        DownloadManager = __webpack_require__(783);
        Breadcrumbs = __webpack_require__(4974);
        DebugMenuButton = __webpack_require__(8892);
        HomeScreen_ctor = ((Libg).Libg).offset(11872552, 0);
        HomeScreen_refreshTheme = new NativeFunction(((Libg).Libg).offset(11892688, 0), "void", ["pointer"]);
        HomeScreen_layoutBackground = new NativeFunction(((Libg).Libg).offset(11903412, 0), "void", ["pointer"]);
        HomeScreen_doOfflineGatcha = new NativeFunction(((Libg).Libg).offset(11929596, 0), "void", ["int", "pointer", "pointer"]);
        HomeScreen_joinClanFromDeeplink = new NativeFunction(((Libg).Libg).offset(11891816, 0), "pointer", ["pointer", "pointer", "pointer"]);
        HomeScreen_gotoPage = new NativeFunction(((Libg).Libg).offset(11890516, 0), "void", ["pointer", "int", "pointer"]);
        HomeScreen_isPlayerAgeGated = ((Libg).Libg).offset(11901148, 0);
        HomeScreen_TEMP_PATCH_NO_THEME_FOUND = ((Libg).Libg).offset(11893448);
        HomeScreen_SKIP_GATCHA_ANIMATION = ((Libg).Libg).offset(19947832, 0);
        homeScreenSpriteOffset = ((LogicMemory).LogicMemory).offset(104);
        themeOffset = ((LogicMemory).LogicMemory).offset(2472);
        themeBgMovieClipOffset = ((LogicMemory).LogicMemory).offset(2352);
        homePageOffset = ((LogicMemory).LogicMemory).offset(2376);
        if (!EHomeDeeplinkPage) {
            exports.EHomeDeeplinkPage = GameMain = {};
        } /* if 0x53c0d */
        GameMain = {}(exports);
        if (!ELegacyThemeAction) {
        } /* if 0x53c1a */
        function (ELegacyThemeAction) {
        ELegacyThemeAction["DISABLE_UNTIL"] = 0;
        ELegacyThemeAction[0] = "DISABLE_UNTIL";
        ELegacyThemeAction["DISABLE_FROM"] = 1;
        ELegacyThemeAction[1] = "DISABLE_FROM";
        ELegacyThemeAction["IGNORE"] = 2;
        ELegacyThemeAction[2] = "IGNORE";
        ELegacyThemeAction["DISABLE_ONLY"] = 3;
        ELegacyThemeAction[3] = "DISABLE_ONLY";
        return;
}(GameMain = {});
        <class_fields_init> = undefined;
        HomeScreen;
        class HomeScreen {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x550d5 (open) */
}
            getInstance () {
        return (this).instance;
}
            getSprite () {
        return new (Sprite).Sprite(((((GameMain).GameMain).getInstance()).add(homeScreenSpriteOffset)).readPointer());
}
            getHomePage () {
        return new (HomePage).HomePage((((this).getInstance()).add(homePageOffset)).readPointer());
}
            refreshTheme () {
        return;
}
            joinClanByTag (clanIdLogicLong, clanTagString) {
        return;
}
            gotoPage (pageId) {
    var instance;
        instance = (HomeScreen).getInstance();
        if ((instance).isNull()) {
            return;
        } /* if 0x5401c */
        return;
}
            refreshHeroesAndItems () {
        return;
}
            createLobbyInfo () {
        return;
}
            doOfflineGatcha (gatchaType, logicCharacterData, logicSkinData) {
        if (logicCharacterData) {
        } /* if 0x540bb */
        /* jump -> 0x540c0 */
        if (logicSkinData) {
        } /* if 0x540cb */
        /* jump -> 0x540d0 */
        return;
}
            isSkipGatchaAnimationEnabled () {
        return ((HomeScreen_SKIP_GATCHA_ANIMATION).readU8() !== 0);
}
            setSkipGatchaAnimation (enabled) {
        if (enabled) {
        } /* if 0x54120 */
        /* jump -> 0x54121 */
        return;
}
            executeTestGatcha () {
    var deliveryUnit, megaBoxDropArray, epicStarrDropArray, dataArray, rewardOpeningPopup;
        deliveryUnit = new (DeliveryUnit).DeliveryUnit(100);
        megaBoxDropArray = [new (LogicGatchaDrop).LogicGatchaDrop(((LogicGatchaDrop).EGatchaDropTypes).GOLD, 102), new (LogicGatchaDrop).LogicGatchaDrop(((LogicGatchaDrop).EGatchaDropTypes).GOLD, 14), new (LogicGatchaDrop).LogicGatchaDrop(((LogicGatchaDrop).EGatchaDropTypes).CHARACTER, 1, 15), new (LogicGatchaDrop).LogicGatchaDrop(((LogicGatchaDrop).EGatchaDropTypes).GOLD, 57), new (LogicGatchaDrop).LogicGatchaDrop(((LogicGatchaDrop).EGatchaDropTypes).GOLD, 1000), new (LogicGatchaDrop).LogicGatchaDrop(((LogicGatchaDrop).EGatchaDropTypes).GOLD, 18), new (LogicGatchaDrop).LogicGatchaDrop(((LogicGatchaDrop).EGatchaDropTypes).VANITY_ITEM, 1, 1488, (((LogicDataTables).LogicDataTables).table).Emotes), new (LogicGatchaDrop).LogicGatchaDrop(((LogicGatchaDrop).EGatchaDropTypes).VANITY_ITEM, 1, 228, (((LogicDataTables).LogicDataTables).table).Sprays), new (LogicGatchaDrop).LogicGatchaDrop(((LogicGatchaDrop).EGatchaDropTypes).GOLD, 16), new (LogicGatchaDrop).LogicGatchaDrop(((LogicGatchaDrop).EGatchaDropTypes).SKIN, 1, 143)];
        epicStarrDropArray = [new (LogicGatchaDrop).LogicGatchaDrop(((LogicGatchaDrop).EGatchaDropTypes).BLING, 1000), new (LogicGatchaDrop).LogicGatchaDrop(((LogicGatchaDrop).EGatchaDropTypes).POWER_POINTS, 324), new (LogicGatchaDrop).LogicGatchaDrop(1, 1, 15), new (LogicGatchaDrop).LogicGatchaDrop(1, 1, 15), new (LogicGatchaDrop).LogicGatchaDrop(1, 1, 15), new (LogicGatchaDrop).LogicGatchaDrop(1, 1, 15), new (LogicGatchaDrop).LogicGatchaDrop(1, 1, 15), new (LogicGatchaDrop).LogicGatchaDrop(1, 1, 15)];
        (epicStarrDropArray).forEach(function (e) {
        return (deliveryUnit).addDrop(e);
});
        dataArray = new (LogicArrayList).LogicArrayList();
        (dataArray).addElement((deliveryUnit).instance);
        rewardOpeningPopup = new (RewardOpeningPopup).RewardOpeningPopup(29, dataArray);
        return;
}
            openRareStarrDrop () {
    var drop, unit, delivery, rewardOpeningPopup;
        drop = ((LogicStarrDropRewards).LogicStarrDropRewards).getRandomDropByWeights("RARE");
        unit = (new (DeliveryUnit).DeliveryUnit(100)).addDrop(drop);
        delivery = (new (LogicArrayList).LogicArrayList(1)).addElement((unit).instance);
        rewardOpeningPopup = new (RewardOpeningPopup).RewardOpeningPopup(0, delivery);
        return;
}
            openSuperRareStarrDrop () {
    var drop, unit, delivery, rewardOpeningPopup;
        drop = ((((LogicStarrDropRewards).LogicStarrDropRewards).table).SUPER_RARE[((LogicRandom).LogicRandom).getRandomInRangeExcept(0, (((LogicStarrDropRewards).LogicStarrDropRewards).table).SUPER_RARE.length)]).getGatchaDrop();
        unit = (new (DeliveryUnit).DeliveryUnit(100)).addDrop(drop);
        delivery = (new (LogicArrayList).LogicArrayList(1)).addElement((unit).instance);
        rewardOpeningPopup = new (RewardOpeningPopup).RewardOpeningPopup(1, delivery);
        return;
}
            getThemeMovieClip () {
    var instance;
        instance = (HomeScreen).getInstance();
        return new (MovieClip).MovieClip(((instance).add(themeBgMovieClipOffset)).readPointer());
}
            relayoutBackground () {
    var instance;
        instance = (HomeScreen).getInstance();
        if ((instance).isNull()) {
            return;
        } /* if 0x5462f */
        return;
}
            updateTheme (themeItem) {
    var shouldReloadHomePage, themeItem, shouldReloadHomePage, instance, homeScreenSprite, themeFileName, themeBgMovieClipPtr, newThemeBgMovieClip, themeMusic;
        shouldReloadHomePage = themeItem;
        if (((shouldReloadHomePage) === undefined)) {
            themeItem = shouldReloadHomePage = true;
        } /* if 0x546bc */
        (ThemeSelector).ThemeSelectorManager.isCustomBgInUse = false;
        ((CustomBackground).CustomBackground).discard();
        shouldReloadHomePage = (HomeScreen).getInstance();
        instance = (HomeScreen).getSprite();
        homeScreenSprite = (themeItem).getFileName();
        themeFileName = (shouldReloadHomePage).add(themeBgMovieClipOffset);
        ((shouldReloadHomePage).add(themeOffset)).writePointer((themeItem).instance);
        (instance).removeChild((themeFileName).readPointer());
        ((GameMain).GameMain).loadAsset(homeScreenSprite);
        themeBgMovieClipPtr = ((StringTable).StringTable).getMovieClip(homeScreenSprite, (themeItem).getExportName());
        themeBgMovieClipPtr = ((ThemeSelector).StrangerthingsFixer).fix(themeBgMovieClipPtr);
        (themeFileName).writePointer((themeBgMovieClipPtr).instance);
        (instance).addChildAt(themeBgMovieClipPtr, 0);
        HomeScreen_layoutBackground(shouldReloadHomePage);
        newThemeBgMovieClip = (themeItem).getThemeMusic();
        if (((newThemeBgMovieClip).instance).isNull()) {
            ((SoundManager).SoundManager).stopMusic();
        } /* if 0x547fb */
        /* jump -> 0x5480f */
        ((SoundManager).SoundManager).playMusic(newThemeBgMovieClip);
        if (shouldReloadHomePage) {
            ((HomePage).HomePage).reload();
            return;
        } /* if 0x54823 (open) */
}
            patch () {
        (Interceptor).attach(HomeScreen_ctor, { onEnter (args) {
        HomeScreen.instance = args[0];
        ((Breadcrumbs).Breadcrumbs).push("HomeScreen::ctor");
        (StringTable).StringTable.aprilFoolsMapping = {};
        (StringTable).StringTable.aprilFoolsCleaned = {};
        return;
}, onLeave () {
        (ThemeSelector).ThemeSelectorManager.isCustomBgInUse = false;
        ((CustomBackground).CustomBackground).onHomeRebuilt();
        (Player).Player.ownIndex = -1;
        ((Player).Player).playingWith.length = 0;
        (HomeScreen).createLobbyInfo();
        if ((((Config).Config).config).ShowDebugMenuButton) {
            if ((!((BSDPlusManager).BSDPlusManager).isBSDPlusEnabled)) {
                ((Config).Config).config.ShowDebugMenuButton = false;
                ((FileManager).FileManager).updateConfigFile();
            } /* if 0x54ad3 */
        } /* if 0x54ad3 */
        if ((((Config).Config).config).ShowDebugMenuButton) {
            ((DebugMenuButton).DebugMenuButton).spawn();
        } /* if 0x54afa */
        /* jump -> 0x54b0b */
        ((DebugMenuButton).DebugMenuButton).destroy();
        if ((((ModProperties).ModProperties).environment === "beta")) {
            if ((!((Validation).Validation).isWhitelisted())) {
                ((GUI).GUI).showFloaterTextAtDefaultPosition("You are not whitelisted!");
            } /* if 0x54b49 */
        } /* if 0x54b49 */
        ((BattleServers).BattleServersManager).loadFromConfig();
        HomeScreen.isEntered = true;
        ((SharedReplay).SharedReplay).notifyHomeReady();
        (((BSDMessageManager).BSDMessageManager).sendMessage(new (BSDKeepAliveMessage).BSDKeepAliveMessage())).then(function (response) {
    var parsedResponseData, chaCha20, decryptedResponse, parsedResponse;
        if (!((response).statusCode !== 200)) {
            ((response).statusCode !== 200);
            if ((!(response).json)) {
                return;
            } /* if 0x54c6f */
        } /* if 0x54c6c */
        parsedResponseData = (response).json;
        chaCha20 = new (TSChaCha20).TSChaCha20(((TSChaCha20).TSChaCha20).key, ((TSChaCha20).TSChaCha20).nonce);
        decryptedResponse = ((CustomTextEncoder).CustomTextEncoder).decode((chaCha20).decrypt(new Uint8Array(((BSDMessageManager).BSDMessageManager).escapedStringToBytes((parsedResponseData).data))));
        parsedResponse = (JSON).parse(decryptedResponse);
        (GetBSDOnlineMessage).GetBSDOnlineMessage.lastOnline = (parsedResponse).online;
        return;
});
        (GameMain).GameMain.lastKeepAliveSentAt = ((Utils).Utils).getCurrentTime();
        if ((((LoginOkMessage).LoginOkMessage).getSecondsSinceLoginOk() < 5)) {
            return;
        } /* if 0x54bcd */
        return;
} });
        (Interceptor).attach(HomeScreen_refreshTheme, { onLeave () {
    var clip;
        clip = (HomeScreen).getThemeMovieClip();
        if ((((Config).Config).config).LegacyBackgrounds) {
            ((ThemeSelector).LegacyBackgroundManager).apply(clip, true);
        } /* if 0x54f3c */
        return;
} });
        (Interceptor).replace(HomeScreen_isPlayerAgeGated, new NativeCallback(function () {
    var chatButtonMovieClip;
        if ((!(((TeamStream).TeamStream).getInstance()).isNull())) {
            chatButtonMovieClip = new (MovieClip).MovieClip(((((TeamStream).TeamStream).getInstance()).add((TeamStream).chatButtonOffset)).readPointer());
            chatButtonMovieClip.visibility = true;
        } /* if 0x54fcc */
        return 0;
}, "int", []));
        if (((Process).platform !== "darwin")) {
            (Interceptor).attach(HomeScreen_TEMP_PATCH_NO_THEME_FOUND, function () {
    var ctx, currentTheme;
        ctx = (this).context;
        currentTheme = ((LogicDataTables).LogicDataTables).getDataById((((LogicDataTables).LogicDataTables).table).Themes, (((Config).Config).config).ThemeBackgroundID);
        if (currentTheme) {
            if (((DownloadManager).DownloadManager).isFileDownloaded((currentTheme).getFileName())) {
                ctx.x8 = ptr(1);
                return;
            } /* if 0x55074 (open) */
        } /* if 0x55074 (open) */
});
            return;
        } /* if 0x54954 (open) */
}
            update () {
        if ((this).lobbyInfo) {
            ((this).lobbyInfo).update();
            return;
        } /* if 0x550aa (open) */
}
        }
        HomeScreen = GameMain = HomeScreen;
        exports.HomeScreen = HomeScreen;
        HomeScreen.isEntered = false;
        return;
};

// --------------------- MODULE 7835 — BattleScreen ---------------------

// ============================================================ //
// webpack module 7835  —  BattleScreen
// exports: BattleScreen
// deps: 515 (BattleClearChatButton), 1588 (LogicMemory), 2255 (AttackRangeIndicator), 2476 (CombatHUD), 2542 (BattleCoordinates), 2556 (BSDPlusManager), 3187 (BattleLatency), 3217 (Sprite), 3537 (LogicSkillData), 3625 (BattleCameraButton), 3988 (BattleFastPlayAgainButton), 4009 (Config), 4188 (BattleCamera), 4551 (BattleChat), 4974 (Breadcrumbs), 5003 (TrajectoryExtender), 5420 (BattleAutoPlayAgainRadioButton), 5523 (LogicBattleModeClient), 6128 (BattleMode), 6579 (BattleSkipTutorialButton) ...
// ============================================================ //

__webpack_modules__[7835] = function BattleScreen_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, LogicMemory, Sprite, CombatHUD, Config, BattleCameraButton, BattleCoordinates, PlayerInfo, BattleChat, BattleChatButton, BattleClearChatButton, BattleCamera, ThemeSelector, BattleFastPlayAgainButton, BattleLatency, BattleAutoPlayAgainRadioButton, BattleSkipTutorialButton, BattleMode, AttackRangeIndicator, LogicBattleModeClient, Breadcrumbs, TrajectoryExtender, Character3D, BSDPlusManager, DamageTracker, GameObjectManager, LogicSkillData, BattleScreen_enter, BattleScreen_enter_tail, BattleScreen_exit, BattleScreen_isAFK, BattleScreen_sendGoHomeMessage, BattleScreen_shouldShowChatButton, BattleScreen_updateTrajectorySprite, BattleScreen_calculateProjectilePath, BattleScreen_updateSkill, BattleScreen_update, BattleScreen_swapFollowSpectate, PathSprite_updateShape, followSpectateOffset, combatHUDOffset, gameObjectManagerOffset, topOffset, bottomOffset, leftOffset, rightOffset, mainTrajectoryPathSpriteOffset, extTrajectoryPathSprite1Offset, extTrajectoryPathSprite2Offset, hasCarryableOffset, displayObjectVisibleOffset, tileMapWidthOffset, tileMapHeightOffset, TILE_SIZE, PATHSPRITE_COLOR1_R, PATHSPRITE_COLOR1_G, PATHSPRITE_COLOR1_B, PATHSPRITE_COLOR2_R, PATHSPRITE_COLOR2_G, PATHSPRITE_COLOR2_B, GOAL_DIST_TOP_BOT, GOAL_DIST_LEFT_RIGHT, GOAL_EXTENDED_MARGIN, PATH_BUF_DATA_OFFSET, PATH_BUF_END_OFFSET, PATH_POINT_SIZE, AIRDISC_CASTING_RANGE_TILES, AIRDISC_REAL_RANGE_UNITS, TILES_TO_UNITS, MIN_BOUNCE_POINTS, NO_BOUNCE_DISTANCE_ADD_WITH_BALL, BOUNCE_DISTANCE_ADD_DEFAULT, BattleScreen, <class_fields_init>, BattleScreen;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.BattleScreen = undefined;
        Libg = __webpack_require__(9878);
        LogicMemory = __webpack_require__(1588);
        Sprite = __webpack_require__(3217);
        CombatHUD = __webpack_require__(2476);
        Config = __webpack_require__(4009);
        BattleCameraButton = __webpack_require__(3625);
        BattleCoordinates = __webpack_require__(2542);
        PlayerInfo = __webpack_require__(9518);
        BattleChat = __webpack_require__(4551);
        BattleChatButton = __webpack_require__(7944);
        BattleClearChatButton = __webpack_require__(515);
        BattleCamera = __webpack_require__(4188);
        ThemeSelector = __webpack_require__(9244);
        BattleFastPlayAgainButton = __webpack_require__(3988);
        BattleLatency = __webpack_require__(3187);
        BattleAutoPlayAgainRadioButton = __webpack_require__(5420);
        BattleSkipTutorialButton = __webpack_require__(6579);
        BattleMode = __webpack_require__(6128);
        AttackRangeIndicator = __webpack_require__(2255);
        LogicBattleModeClient = __webpack_require__(5523);
        Breadcrumbs = __webpack_require__(4974);
        TrajectoryExtender = __webpack_require__(5003);
        Character3D = __webpack_require__(7518);
        BSDPlusManager = __webpack_require__(2556);
        DamageTracker = __webpack_require__(8138);
        GameObjectManager = __webpack_require__(9575);
        LogicSkillData = __webpack_require__(3537);
        BattleScreen_enter = new NativeFunction(((Libg).Libg).offset(11690984, 0), "void", ["pointer"]);
        BattleScreen_enter_tail = ((Libg).Libg).offset(11458712, 0);
        BattleScreen_exit = new NativeFunction(((Libg).Libg).offset(11703448, 0), "void", ["pointer"]);
        BattleScreen_isAFK = ((Libg).Libg).offset(11793008, 0);
        BattleScreen_sendGoHomeMessage = new NativeFunction(((Libg).Libg).offset(11780936, 0), "void", ["pointer", "bool", "bool", "bool", "bool"]);
        BattleScreen_shouldShowChatButton = ((Libg).Libg).offset(11791332, 0);
        BattleScreen_updateTrajectorySprite = ((Libg).Libg).offset(11793940, 0);
        BattleScreen_calculateProjectilePath = new NativeFunction(((Libg).Libg).offset(11809688, 0), "void", ["pointer", "pointer", "pointer", "int", "pointer", "float", "float", "float", "float", "float", "float"]);
        BattleScreen_updateSkill = ((Libg).Libg).offset(11755908, 0);
        BattleScreen_update = ((Libg).Libg).offset(11721180, 0);
        BattleScreen_swapFollowSpectate = new NativeFunction(((Libg).Libg).offset(11706068, 0), "void", ["pointer"]);
        PathSprite_updateShape = new NativeFunction(((Libg).Libg).offset(13939592, 0), "void", ["pointer", "pointer", "float", "double"]);
        followSpectateOffset = ((LogicMemory).LogicMemory).offset(4060, 4164);
        combatHUDOffset = ((LogicMemory).LogicMemory).offset(2568);
        gameObjectManagerOffset = ((LogicMemory).LogicMemory).offset(2592, 2728);
        topOffset = ((LogicMemory).LogicMemory).offset(288);
        bottomOffset = ((LogicMemory).LogicMemory).offset(296);
        leftOffset = ((LogicMemory).LogicMemory).offset(304);
        rightOffset = ((LogicMemory).LogicMemory).offset(312);
        mainTrajectoryPathSpriteOffset = ((LogicMemory).LogicMemory).offset(2832);
        extTrajectoryPathSprite1Offset = ((LogicMemory).LogicMemory).offset(2840);
        extTrajectoryPathSprite2Offset = ((LogicMemory).LogicMemory).offset(2848);
        hasCarryableOffset = ((LogicMemory).LogicMemory).offset(700);
        displayObjectVisibleOffset = ((LogicMemory).LogicMemory).offset(8);
        tileMapWidthOffset = ((LogicMemory).LogicMemory).offset(196);
        tileMapHeightOffset = ((LogicMemory).LogicMemory).offset(200);
        TILE_SIZE = 300;
        PATHSPRITE_COLOR1_R = 9;
        PATHSPRITE_COLOR1_G = 10;
        PATHSPRITE_COLOR1_B = 11;
        PATHSPRITE_COLOR2_R = 13;
        PATHSPRITE_COLOR2_G = 14;
        PATHSPRITE_COLOR2_B = 15;
        GOAL_DIST_TOP_BOT = 1050;
        GOAL_DIST_LEFT_RIGHT = 2100;
        GOAL_EXTENDED_MARGIN = 100;
        PATH_BUF_DATA_OFFSET = 0;
        PATH_BUF_END_OFFSET = 8;
        PATH_POINT_SIZE = 12;
        AIRDISC_CASTING_RANGE_TILES = 48;
        AIRDISC_REAL_RANGE_UNITS = 9600;
        TILES_TO_UNITS = 100;
        MIN_BOUNCE_POINTS = 4;
        NO_BOUNCE_DISTANCE_ADD_WITH_BALL = 0;
        BOUNCE_DISTANCE_ADD_DEFAULT = 1500;
        <class_fields_init> = undefined;
        BattleScreen;
        class BattleScreen {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x52c82 (open) */
}
            getInstance () {
        return (this).instance;
}
            getCombatHUD () {
        return new (Sprite).Sprite((((this).getInstance()).add(combatHUDOffset)).readPointer());
}
            getGameObjectManager () {
        return new (GameObjectManager).GameObjectManager((((this).getInstance()).add(gameObjectManagerOffset)).readPointer());
}
            addEnterListener (callback) {
        return;
}
            addExitListener (callback) {
        return;
}
            addUpdateListener (callback) {
        return;
}
            dispatchListeners (listeners) {
    var listener;
        /* jump -> 0x519f1 */
        listener = /*iter*/ listeners;
        /* CATCH -> 0x519ea (try region) */
        listener();
        /* jump -> 0x519f1 */
        listener = <underflow>;
        /* CATCH -> 0x519f3 (try region) */
        /* jump -> 0x519f1 */
        throw <underflow>;
        } while (!<underflow>);
        return;
}
            patch () {
    var lastBouncePoints, hasBounce, lastHasBall, lastTotalRange, isGoal;
        (Interceptor).attach(BattleScreen_enter, { onEnter () {
        BattleScreen.instance = ((this).context).x0;
        ((Breadcrumbs).Breadcrumbs).push("BattleScreen::enter");
        return;
} });
        (Interceptor).attach(BattleScreen_update, { onLeave () {
        return;
} });
        (Interceptor).attach(BattleScreen_enter_tail, { onEnter () {
    var combatHUD, sideFieldOffsets, fieldOffset, sidePtr, battleCameraButton, battleSkipTutorialButton, battleChat, battleChatButton, battleClearChatButton, battleFastPlayAgainButton, autoPlayAgainRadioButton;
        (BattleScreen).dispatchListeners((BattleScreen).enterListeners);
        combatHUD = (BattleScreen).getCombatHUD();
        if ((combatHUD).isNull()) {
            return;
        } /* if 0x51d47 */
        if (((CombatHUD).CombatHUD).battleChat) {
            (((CombatHUD).CombatHUD).battleChat).clear();
        } /* if 0x51d6c */
        if ((((Config).Config).config).HideBattleBlackBars) {
            sideFieldOffsets = [topOffset, bottomOffset, leftOffset, rightOffset];
            /* jump -> 0x51de1 */
            fieldOffset = /*iter*/ sideFieldOffsets;
            sidePtr = (((combatHUD).instance).add(fieldOffset)).readPointer();
            if (!(sidePtr).isNull()) {
                ((sidePtr).add(displayObjectVisibleOffset)).writeU8(0);
            } /* if 0x51de1 */
            } while (!sidePtr = sideFieldOffsets);
            fieldOffset = sideFieldOffsets = combatHUD = <underflow>;
        } /* if 0x51de7 */
        if ((((Config).Config).config).ShowBattleCameraButton) {
            battleCameraButton = new (BattleCameraButton).BattleCameraButton();
            (combatHUD).addChild(battleCameraButton);
        } /* if 0x51e1b */
        if (((BattleMode).BattleMode).isPlayingTutorial) {
            battleSkipTutorialButton = new (BattleSkipTutorialButton).BattleSkipTutorialButton();
            (combatHUD).addChild(battleSkipTutorialButton);
        } /* if 0x51e4a */
        if ((((Config).Config).config).ShowOwnPlayerCoordinates) {
            (CombatHUD).CombatHUD.coordinates = new (BattleCoordinates).BattleCoordinates();
            (combatHUD).addChild((((CombatHUD).CombatHUD).coordinates).textField);
        } /* if 0x51e95 */
        if ((((Config).Config).config).BattleTextChat) {
            if (((PlayerInfo).PlayerInfo).isInGameroom) {
                battleChat = new (BattleChat).BattleChat();
                (battleChat).create(combatHUD);
                battleChatButton = new (BattleChatButton).BattleChatButton();
                (combatHUD).addChild(battleChatButton);
                battleClearChatButton = new (BattleClearChatButton).BattleClearChatButton(battleChat);
                (combatHUD).addChild(battleClearChatButton);
            } /* if 0x51f1b */
        } /* if 0x51f1b */
        if ((((Config).Config).config).ShowBattleConnectionIndicator) {
            (CombatHUD).CombatHUD.latencyTextField = new (BattleLatency).BattleLatency();
            (combatHUD).addChild((((CombatHUD).CombatHUD).latencyTextField).textField);
        } /* if 0x51f66 */
        if ((((Config).Config).config).ShowDPS) {
            ((DamageTracker).DamageTracker).reset();
            (combatHUD).addChild(((DamageTracker).DamageTracker).createTextField());
        } /* if 0x51fa7 */
        if ((((Config).Config).config).ShowFastPlayAgainButton) {
            battleFastPlayAgainButton = new (BattleFastPlayAgainButton).BattleFastPlayAgainButton();
            (combatHUD).addChild(battleFastPlayAgainButton);
        } /* if 0x51fdb */
        if ((((Config).Config).config).ShowAutoPlayAgainRadioButton) {
            autoPlayAgainRadioButton = new (BattleAutoPlayAgainRadioButton).BattleAutoPlayAgainRadioButton();
            (combatHUD).addChild(autoPlayAgainRadioButton);
            (combatHUD).addChild((autoPlayAgainRadioButton).textField);
            return;
        } /* if 0x52023 (open) */
} });
        (Interceptor).replace(BattleScreen_exit, new NativeCallback(function (self) {
    var combatHUD;
        (BattleScreen).dispatchListeners((BattleScreen).exitListeners);
        combatHUD = (BattleScreen).getCombatHUD();
        if ((!(combatHUD).isNull())) {
            if (((CombatHUD).CombatHUD).coordinates) {
                (combatHUD).removeChild((((CombatHUD).CombatHUD).coordinates).textField);
                (CombatHUD).CombatHUD.coordinates = null;
            } /* if 0x52101 */
            if (((CombatHUD).CombatHUD).latencyTextField) {
                (combatHUD).removeChild((((CombatHUD).CombatHUD).latencyTextField).textField);
                (CombatHUD).CombatHUD.latencyTextField = null;
            } /* if 0x5213c */
            if (((CombatHUD).CombatHUD).battleChat) {
                (((CombatHUD).CombatHUD).battleChat).clear();
                (((CombatHUD).CombatHUD).battleChat).destroy();
                (CombatHUD).CombatHUD.battleChat = null;
            } /* if 0x52185 */
        } /* if 0x52188 */
        BattleScreen_exit(self);
        ((Breadcrumbs).Breadcrumbs).push("BattleScreen::exit");
        (CombatHUD).CombatHUD.fastPlayAgainButton = null;
        (CombatHUD).CombatHUD.muteButton = null;
        (BattleCamera).BattleCamera.mode = 0;
        ((AttackRangeIndicator).AttackRangeIndicator).reset();
        ((Character3D).Character3D).flushSkinLogs();
        if ((((Config).Config).config).RandomThemeMask[2]) {
            ((ThemeSelector).ThemeSelectorManager).setRandomTheme();
            return;
        } /* if 0x52214 (open) */
}, "void", ["pointer"]));
        (Interceptor).attach(BattleScreen_shouldShowChatButton, { onLeave (retval) {
        if ((((Config).Config).config).EnforceBattleChatButton) {
            (retval).replace(ptr(1));
            return;
        } /* if 0x5226b (open) */
} });
        lastBouncePoints = [];
        hasBounce = false;
        lastHasBall = false;
        lastTotalRange = 0;
        isGoal = false;
        (Interceptor).attach(BattleScreen_calculateProjectilePath, { onEnter () {
    var ctx;
        if ((!((BSDPlusManager).BSDPlusManager).isBSDPlusEnabled)) {
            return;
        } /* if 0x522a7 */
        ctx = (this).context;
        if ((((ctx).x3).toInt32() !== 0)) {
            return;
        } /* if 0x522c3 */
        this.outBuf = (ctx).x8;
        this.active = true;
        this.hasBall = ((((ctx).x1).add(hasCarryableOffset)).readU8() === 1);
        this.skillData = (ctx).x2;
        return;
}, onLeave () {
    var outBuf, dataPtr, endPtr, numPoints, lastPointOffset, trajectoryEndX, trajectoryEndY, i, pointOffset;
        if ((!((BSDPlusManager).BSDPlusManager).isBSDPlusEnabled)) {
            return;
        } /* if 0x523a7 */
        if ((!(this).active)) {
            return;
        } /* if 0x523b2 */
        outBuf = (this).outBuf;
        dataPtr = ((outBuf).add(PATH_BUF_DATA_OFFSET)).readPointer();
        endPtr = ((outBuf).add(PATH_BUF_END_OFFSET)).readPointer();
        if (!(dataPtr).isNull()) {
            (dataPtr).isNull();
            if ((endPtr).isNull()) {
                hasBounce = false;
                return;
            } /* if 0x5240a */
        } /* if 0x52402 */
        numPoints = (((endPtr).toUInt32() - (dataPtr).toUInt32()) / PATH_POINT_SIZE);
        if ((this).hasBall) {
            if ((numPoints >= 2)) {
                lastPointOffset = ((numPoints - 1) * PATH_POINT_SIZE);
                trajectoryEndX = ((dataPtr).add(lastPointOffset)).readFloat();
                trajectoryEndY = ((dataPtr).add((lastPointOffset + 4))).readFloat();
                isGoal = (BattleScreen).isPointInGoal(trajectoryEndX, trajectoryEndY);
            } /* if 0x52492 */
        } /* if 0x52492 */
        lastHasBall = (this).hasBall;
        lastTotalRange = (BattleScreen).computeTotalRangeUnits((this).skillData, lastHasBall);
        if ((!(((Config).Config).config).ExtendedTrajectory)) {
            return;
        } /* if 0x524ce */
        if ((!lastHasBall)) {
            hasBounce = false;
            return;
        } /* if 0x524da */
        if ((numPoints < MIN_BOUNCE_POINTS)) {
            hasBounce = false;
            return;
        } /* if 0x524e9 */
        lastBouncePoints = [];
        ([]);
        i = 0;
        while ((i < numPoints)) {
            pointOffset = (i * PATH_POINT_SIZE);
            (lastBouncePoints).push({ x: ((dataPtr).add(pointOffset)).readFloat(), y: ((dataPtr).add((pointOffset + 4))).readFloat(), z: ((dataPtr).add((pointOffset + 8))).readFloat() });
            i = ((i) + 1);
            (i++);
        } /* while 0x5257a */
        hasBounce = true;
        return;
} });
        return;
}
            writePathSpriteGreen (pathSprite) {
        ((pathSprite).add(PATHSPRITE_COLOR1_R)).writeU8(0);
        ((pathSprite).add(PATHSPRITE_COLOR1_G)).writeU8(255);
        ((pathSprite).add(PATHSPRITE_COLOR1_B)).writeU8(0);
        ((pathSprite).add(PATHSPRITE_COLOR2_R)).writeU8(0);
        ((pathSprite).add(PATHSPRITE_COLOR2_G)).writeU8(255);
        return;
}
            colorMainPathSpriteGreenIfVisible (requireVisible) {
    var mainPathSprite;
        mainPathSprite = (((BattleScreen).instance).add(mainTrajectoryPathSpriteOffset)).readPointer();
        if ((mainPathSprite).isNull()) {
            return;
        } /* if 0x52829 */
        if (requireVisible) {
            if ((((mainPathSprite).add(displayObjectVisibleOffset)).readU8() !== 1)) {
                return;
            } /* if 0x52847 */
        } /* if 0x52847 */
        return;
}
            colorPathSpriteGreenIfVisible (battleScreenOffset) {
    var pathSprite;
        pathSprite = (((BattleScreen).instance).add(battleScreenOffset)).readPointer();
        if (!(pathSprite).isNull()) {
            (pathSprite).isNull();
            if ((((pathSprite).add(displayObjectVisibleOffset)).readU8() !== 1)) {
                return;
            } /* if 0x528c7 */
        } /* if 0x528c4 */
        return;
}
            colorAllTrajectoryPathSpritesGreen () {
        (BattleScreen).colorPathSpriteGreenIfVisible(mainTrajectoryPathSpriteOffset);
        (BattleScreen).colorPathSpriteGreenIfVisible(extTrajectoryPathSprite1Offset);
        return;
}
            isPointInGoalExtended (x, y) {
    var tileMap, mapWidthUnits, mapHeightUnits, m, inGoalY, inGoalX;
        tileMap = ((LogicBattleModeClient).LogicBattleModeClient).getTileMap();
        if ((tileMap).isNull()) {
            return false;
        } /* if 0x529b5 */
        mapWidthUnits = (((tileMap).add(tileMapWidthOffset)).readS32() * TILE_SIZE);
        mapHeightUnits = (((tileMap).add(tileMapHeightOffset)).readS32() * TILE_SIZE);
        m = GOAL_EXTENDED_MARGIN;
        if (!(y <= (GOAL_DIST_TOP_BOT - m))) {
            (y <= (GOAL_DIST_TOP_BOT - m));
            inGoalY = (y >= ((mapHeightUnits - GOAL_DIST_TOP_BOT) + m));
        } /* if 0x52a09 */
        if ((x >= (GOAL_DIST_LEFT_RIGHT + m))) {
            (x >= (GOAL_DIST_LEFT_RIGHT + m));
            inGoalX = (x <= ((mapWidthUnits - GOAL_DIST_LEFT_RIGHT) - m));
        } /* if 0x52a25 */
        if (inGoalY) {
            return inGoalX;
        } /* if 0x52a31 (open) */
}
            isPointInGoal (x, y) {
    var tileMap, mapWidthUnits, mapHeightUnits, inGoalY, inGoalX;
        tileMap = ((LogicBattleModeClient).LogicBattleModeClient).getTileMap();
        if ((tileMap).isNull()) {
            return false;
        } /* if 0x52ab7 */
        mapWidthUnits = (((tileMap).add(tileMapWidthOffset)).readS32() * TILE_SIZE);
        mapHeightUnits = (((tileMap).add(tileMapHeightOffset)).readS32() * TILE_SIZE);
        if (!(y <= GOAL_DIST_TOP_BOT)) {
            (y <= GOAL_DIST_TOP_BOT);
            inGoalY = (y >= (mapHeightUnits - GOAL_DIST_TOP_BOT));
        } /* if 0x52aff */
        if ((x >= GOAL_DIST_LEFT_RIGHT)) {
            (x >= GOAL_DIST_LEFT_RIGHT);
            inGoalX = (x <= (mapWidthUnits - GOAL_DIST_LEFT_RIGHT));
        } /* if 0x52b12 */
        if (inGoalY) {
            return inGoalX;
        } /* if 0x52b1e (open) */
}
            computeTotalRangeUnits (skillData, hasBall) {
    var castingRangeTiles;
        castingRangeTiles = ((LogicSkillData).LogicSkillData).getCastingRangeTiles(skillData);
        if (hasBall) {
            if ((castingRangeTiles === AIRDISC_CASTING_RANGE_TILES)) {
                return AIRDISC_REAL_RANGE_UNITS;
            } /* if 0x52b7c */
        } /* if 0x52b7c */
        return (castingRangeTiles * TILES_TO_UNITS);
}
            sendGoHomeMessage () {
        return;
}
            toggleFollowSpectate () {
    var instance;
        instance = (this).getInstance();
        if ((instance).isNull()) {
            return;
        } /* if 0x52bf5 */
        return;
}
            isFollowSpectate () {
    var instance;
        instance = (this).getInstance();
        if ((instance).isNull()) {
            return false;
        } /* if 0x52c3e */
        return (((instance).add(followSpectateOffset)).readU8() === 1);
}
        }
        BattleScreen = BattleChat = BattleScreen;
        exports.BattleScreen = BattleScreen;
        BattleScreen.updateSkillAddress = BattleScreen_updateSkill;
        BattleScreen.enterListeners = [];
        BattleScreen.exitListeners = [];
        BattleScreen.updateListeners = [];
        return;
};

// --------------------- MODULE 2478 — GameScreen ---------------------

// ============================================================ //
// webpack module 2478  —  GameScreen
// exports: GameScreen
// deps: 7835 (BattleScreen), 9878 (Libg)
// ============================================================ //

__webpack_modules__[2478] = function GameScreen_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, BattleScreen, GameScreen_getLogicBattle, GameScreen, <class_fields_init>, GameScreen;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.GameScreen = undefined;
        Libg = __webpack_require__(9878);
        BattleScreen = __webpack_require__(7835);
        GameScreen_getLogicBattle = new NativeFunction(((Libg).Libg).offset(11870964, 0), "pointer", ["pointer"]);
        <class_fields_init> = undefined;
        GameScreen;
        class GameScreen {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x50046 (open) */
}
            getLogicBattle () {
        return GameScreen_getLogicBattle(((BattleScreen).BattleScreen).getInstance());
}
        }
        GameScreen = GameScreen = GameScreen;
        exports.GameScreen = GameScreen;
        return;
};

// --------------------- MODULE 2757 — HomePage ---------------------

// ============================================================ //
// webpack module 2757  —  HomePage
// exports: HomePage
// deps: 612 (MovieClip), 1018 (HomeMode), 1030 (CancelMatchmakingMessage), 1588 (LogicMemory), 3210 (GUIContainer), 3380 (Logcat), 3401 (GameStateManager), 4009 (Config), 4150 (LogicItemSeenCommand), 4484 (LogicClaimDailyRewardCommand), 4974 (Breadcrumbs), 5119 (LogicHeroSeenCommand), 6139 (LogicDataTables), 6851 (CustomButton), 7404 (MovieClipHelper), 7535 (StringObject), 8156 (_), 8569 (HomeScreen), 9168 (MessageManager), 9250 (StringTable) ...
// ============================================================ //

__webpack_modules__[2757] = function HomePage_factory(__unused_webpack_module, exports, __webpack_require__) {
    var LogicMemory, HomeScreen, PlayerInfo, Libg, MovieClip, GUIContainer, LobbyInfo, Breadcrumbs, CustomButton, HomeMode, LogicClaimDailyRewardCommand, LogicHeroSeenCommand, LogicItemSeenCommand, MovieClipHelper, StringObject, MessageManager, CancelMatchmakingMessage, Config, index, GameStateManager, LogicDataTables, StringTable, Logcat, HomePage_constructor, HomePage_destructor, HomePage_tryOpenMapEditorPopup, HomePage_tryOpenClanPopup, HomePage_openTeamupPopup, HomePage_startGame, MatchmakeRequestMessage_ctor, HomePage_openMatchMakingPopup, isInGameRoomMovieClipOffset, buttonVectorOffset, readyButtonOffset, setButtonTextVtableOffset, _buttonModeNameStringObject, buttonModeNameStringObject, _buttonNaviBrawlersNameStringObject, buttonNaviBrawlersNameStringObject, HOLD_THRESHOLD_MS, HomePage, <class_fields_init>, HomePage;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.HomePage = undefined;
        LogicMemory = __webpack_require__(1588);
        HomeScreen = __webpack_require__(8569);
        PlayerInfo = __webpack_require__(9518);
        Libg = __webpack_require__(9878);
        MovieClip = __webpack_require__(612);
        GUIContainer = __webpack_require__(3210);
        LobbyInfo = __webpack_require__(9875);
        Breadcrumbs = __webpack_require__(4974);
        CustomButton = __webpack_require__(6851);
        HomeMode = __webpack_require__(1018);
        LogicClaimDailyRewardCommand = __webpack_require__(4484);
        LogicHeroSeenCommand = __webpack_require__(5119);
        LogicItemSeenCommand = __webpack_require__(4150);
        MovieClipHelper = __webpack_require__(7404);
        StringObject = __webpack_require__(7535);
        MessageManager = __webpack_require__(9168);
        CancelMatchmakingMessage = __webpack_require__(1030);
        Config = __webpack_require__(4009);
        index = __webpack_require__(8156);
        GameStateManager = __webpack_require__(3401);
        LogicDataTables = __webpack_require__(6139);
        StringTable = __webpack_require__(9250);
        Logcat = __webpack_require__(3380);
        HomePage_constructor = new NativeFunction(((Libg).Libg).offset(13033040, 0), "void", ["pointer"]);
        HomePage_destructor = new NativeFunction(((Libg).Libg).offset(13067648, 0), "void", ["pointer"]);
        HomePage_tryOpenMapEditorPopup = new NativeFunction(((Libg).Libg).offset(13132428, 0), "int", ["pointer"]);
        HomePage_tryOpenClanPopup = new NativeFunction(((Libg).Libg).offset(13133200, 0), "pointer", ["int"]);
        HomePage_openTeamupPopup = new NativeFunction(((Libg).Libg).offset(13132328, 0), "pointer", ["int"]);
        HomePage_startGame = new NativeFunction(((Libg).Libg).offset(13082400, 0), "void", ["pointer", "pointer", "pointer", "int", "pointer", "pointer", "int", "pointer", "int"]);
        MatchmakeRequestMessage_ctor = new NativeFunction(((Libg).Libg).offset(16139764, 0), "void", ["pointer", "pointer", "pointer", "pointer", "pointer", "pointer"]);
        HomePage_openMatchMakingPopup = new NativeFunction(((Libg).Libg).offset(11911320, 0), "void", ["pointer", "bool", "uint"]);
        isInGameRoomMovieClipOffset = ((LogicMemory).LogicMemory).offset(1312);
        buttonVectorOffset = ((LogicMemory).LogicMemory).offset(320);
        readyButtonOffset = ((LogicMemory).LogicMemory).offset(840, 840);
        setButtonTextVtableOffset = ((LogicMemory).LogicMemory).offset(432);
        _buttonModeNameStringObject = null;
        buttonModeNameStringObject = exports;
        _buttonNaviBrawlersNameStringObject = null;
        buttonNaviBrawlersNameStringObject = LogicMemory = HomeScreen = PlayerInfo = Libg = MovieClip = GUIContainer = LobbyInfo = Breadcrumbs = CustomButton = HomeMode = LogicClaimDailyRewardCommand = LogicHeroSeenCommand = LogicItemSeenCommand = MovieClipHelper = StringObject = MessageManager = CancelMatchmakingMessage = Config = index = GameStateManager = LogicDataTables = StringTable = Logcat = HomePage_constructor = HomePage_destructor = HomePage_tryOpenMapEditorPopup = HomePage_tryOpenClanPopup = HomePage_openTeamupPopup = HomePage_startGame = MatchmakeRequestMessage_ctor = HomePage_openMatchMakingPopup = isInGameRoomMovieClipOffset = buttonVectorOffset = readyButtonOffset = setButtonTextVtableOffset = _buttonModeNameStringObject = buttonModeNameStringObject = _buttonNaviBrawlersNameStringObject = buttonNaviBrawlersNameStringObject = HOLD_THRESHOLD_MS = HomePage = <underflow>;
        HOLD_THRESHOLD_MS = 400;
        static getButtonByName (nameStringObject) {
    var buttonPointer;
        buttonPointer = ((MovieClipHelper).MovieClipHelper).findButtonByName(nameStringObject, ((this).instance).add(buttonVectorOffset));
        if ((buttonPointer).isNull()) {
            return null;
        } /* if 0x58011 */
        return new (CustomButton).CustomButton(buttonPointer);
};
        static getModeButton () {
        return (this).getButtonByName(buttonModeNameStringObject());
};
        static getNaviBrawlersButton () {
        return (this).getButtonByName(buttonNaviBrawlersNameStringObject());
};
        <class_fields_init> = undefined;
        HomePage;
        class HomePage extends <class_fields_init> = (GUIContainer).GUIContainer {
            constructor () {
    var this.active_func, new.target, arguments;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        arguments = /*special:0*/;
        this = [].apply(new.target, [0]);
        if (<class_fields_init>) {
        } /* if 0x58c33 */
        return this;
}
            isCreated () {
        return (!((HomePage).liveInstance).isNull());
}
            reload () {
    var homeScreenSprite, homePage, isInGameRoomMovieClip;
        homeScreenSprite = ((HomeScreen).HomeScreen).getSprite();
        homePage = ((HomeScreen).HomeScreen).getHomePage();
        (homeScreenSprite).removeChild((homePage).instance);
        HomePage_destructor((homePage).instance);
        HomePage_constructor((homePage).instance);
        (homeScreenSprite).addChildAt(homePage, 1);
        ((HomeScreen).HomeScreen).createLobbyInfo();
        if ((!((PlayerInfo).PlayerInfo).isInGameroom)) {
            isInGameRoomMovieClip = new (MovieClip).MovieClip((((homePage).instance).add(isInGameRoomMovieClipOffset)).readPointer());
            isInGameRoomMovieClip.visibility = false;
        } /* if 0x57f94 */
        (MessageManager).MessageManager.inMatchMaking = false;
        return;
}
            tryOpenMapEditorPopup () {
    var homePage;
        homePage = ((HomeScreen).HomeScreen).getHomePage();
        if (((homePage).instance).isNull()) {
            return;
        } /* if 0x580bc */
        return;
}
            tryOpenClanPopup () {
    var trophyHint, trophyHint;
        if (((trophyHint) === undefined)) {
            trophyHint = trophyHint = 0;
        } /* if 0x580fc */
        return;
}
            openTeamupPopup () {
        return;
}
            startGame (locationDataPointer, mode, ownCharacterPointer) {
    var homePage;
        homePage = ((HomeScreen).HomeScreen).getHomePage();
        if (((homePage).instance).isNull()) {
            return;
        } /* if 0x58176 */
        return;
}
            addStartGameListener (callback) {
        return;
}
            setBattleButtonText (text) {
    var button, setText;
        if ((!(HomePage).isCreated())) {
            return false;
        } /* if 0x58213 */
        button = (((HomePage).liveInstance).add(readyButtonOffset)).readPointer();
        if ((button).isNull()) {
            return false;
        } /* if 0x5823e */
        setText = new NativeFunction((((button).readPointer()).add(setButtonTextVtableOffset)).readPointer(), "void", ["pointer", "pointer", "int"]);
        ((StringObject).StringObject).with(text, function (textPointer) {
        return setText(button, textPointer, 1);
});
        return true;
}
            patch () {
        ((MessageManager).MessageManager).setMatchmakingButtonUpdater((HomePage).setBattleButtonText);
        (Interceptor).attach(HomePage_destructor, { onEnter (args) {
        if (((HomePage).liveInstance).equals(args[0])) {
            HomePage.liveInstance = NULL;
        } /* if 0x58460 */
        return;
} });
        (Interceptor).attach(HomePage_constructor, { onEnter (args) {
        this.homePage = args[0];
        HomePage.liveInstance = NULL;
        ((Breadcrumbs).Breadcrumbs).push("HomePage::ctor");
        return;
}, onLeave () {
    var page, container, btn, children, child, btnClip, prestigeClip, avatar, fameResourceData, fameAmount, fameTier, exportName, fameClip, e;
        page = new HomePage((this).homePage);
        HomePage.liveInstance = (page).instance;
        ((MessageManager).MessageManager).stopMatchMaking(false);
        (HomeScreen).HomeScreen.lobbyInfo = new (LobbyInfo).LobbyInfo(page);
        (((HomeScreen).HomeScreen).lobbyInfo).update();
        container = ((MovieClip).MovieClip).castInstanceToClass((((((page).instance).add(296)).readPointer()).add((7 * (Process).pointerSize))).readPointer());
        /* CATCH -> 0x5874f (try region) */
        btn = (container).getChildById(2);
        children = (btn).getChildAt(0);
        if (children) {
            child = ((MovieClip).MovieClip).castInstanceToClass(children);
            btnClip = (child).getChildById(0);
            prestigeClip = (btnClip).getChildByName("prestige");
            avatar = ((GameStateManager).GameStateManager).getPlayerAvatar();
            fameResourceData = ((LogicDataTables).LogicDataTables).getFameData();
            fameAmount = (avatar).getCommodityCount(0, fameResourceData);
            if ((fameAmount === 0)) {
                return undefined;
            } /* if 0x586c9 */
            fameTier = ((LogicDataTables).LogicDataTables).getFameTierByFame(fameAmount);
            if (fameTier) {
                exportName = (fameTier).iconStarsExportName;
                fameClip = ((StringTable).StringTable).getMovieClip("sc/ui.sc", exportName);
                fameClip.x = ((prestigeClip).x + 91);
                fameClip.y = (prestigeClip).y;
                fameClip.scale = 0.1;
                (btnClip).addChild(fameClip);
            } /* if 0x58749 */
        } /* if 0x5874c */
        /* jump -> 0x58768 */
        e = fameClip;
        /* CATCH -> 0x5876a (try region) */
        (index).LogInfo((e).stack);
        /* jump -> 0x58768 */
        throw exportName = fameClip = child = btnClip = prestigeClip = avatar = fameResourceData = fameAmount = fameTier = btn = children = (HomeScreen).HomeScreen;
        (HomePage).registerModeButtonHold(page);
        return;
} });
        (Interceptor).attach(HomePage_startGame, { onEnter (args) {
    var mode, listener;
        mode = (args[3]).toInt32();
        /* jump -> 0x5880e */
        listener = /*iter*/ (HomePage).startGameListeners;
        /* CATCH -> 0x58807 (try region) */
        listener(mode);
        /* jump -> 0x5880e */
        listener = mode = <underflow>;
        /* CATCH -> 0x58810 (try region) */
        /* jump -> 0x5880e */
        throw <underflow>;
        } while (!<underflow>);
        return;
} });
        (Interceptor).replace(HomePage_openMatchMakingPopup, new NativeCallback(function (homeScreen, a2, gameModeVariation) {
        if ((!(((Config).Config).config).BackgroundMatchmaking)) {
            HomePage_openMatchMakingPopup(homeScreen, a2, gameModeVariation);
            return;
        } /* if 0x58862 (open) */
}, "void", ["pointer", "bool", "uint"]));
        return;
}
            registerModeButtonHold (page) {
    var modeButton;
        modeButton = (page).getModeButton();
        /* is_null  */
        if (modeButton) {
            return;
        } /* if 0x58946 */
        return;
}
            registerNaviBrawlersButtonHold (page) {
    var naviBrawlersButton;
        naviBrawlersButton = (page).getNaviBrawlersButton();
        /* is_null  */
        if (naviBrawlersButton) {
            return;
        } /* if 0x58a30 */
        return;
}
        }
        HomePage = CustomButton = HomePage;
        exports.HomePage = HomePage;
        HomePage.liveInstance = NULL;
        HomePage.startGameListeners = [];
        return;
};

// --------------------- MODULE 3077 — NewsPage ---------------------

// ============================================================ //
// webpack module 3077  —  NewsPage
// exports: NewsPage
// deps: 1588 (LogicMemory), 7535 (StringObject), 9878 (Libg)
// ============================================================ //

__webpack_modules__[3077] = function NewsPage_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, LogicMemory, StringObject, NewsPage_create, NewsPage_forceOpenLandingPage, retryButtonOffset, timerTextFieldOffset, NewsPage, <class_fields_init>, NewsPage;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.NewsPage = undefined;
        Libg = __webpack_require__(9878);
        LogicMemory = __webpack_require__(1588);
        StringObject = __webpack_require__(7535);
        NewsPage_create = new NativeFunction(((Libg).Libg).offset(12555840, 0), "pointer", ["pointer", "pointer", "int"]);
        NewsPage_forceOpenLandingPage = new NativeFunction(((Libg).Libg).offset(12560556, 0), "void", ["pointer"]);
        retryButtonOffset = ((LogicMemory).LogicMemory).offset(552);
        timerTextFieldOffset = ((LogicMemory).LogicMemory).offset(536);
        static forceOpenLandingPage () {
        if (((this).instance).isNull()) {
            return;
        } /* if 0x4017a */
        return;
};
        static getRetryButton () {
        if (((this).instance).isNull()) {
            return NULL;
        } /* if 0x401ba */
        return (((this).instance).add(retryButtonOffset)).readPointer();
};
        static getTimerTextField () {
        if (((this).instance).isNull()) {
            return NULL;
        } /* if 0x40207 */
        return (((this).instance).add(timerTextFieldOffset)).readPointer();
};
        <class_fields_init> = undefined;
        NewsPage;
        class NewsPage {
            constructor (instance) {
        if (<class_fields_init>) {
        } /* if 0x400a8 */
        this.instance = instance;
        return;
}
            create (maintenanceInfo, message, dialogType) {
    var maintenancePtr, pagePtr;
        if (maintenanceInfo) {
        } /* if 0x400f9 */
        /* jump -> 0x400fe */
        maintenancePtr = NULL;
        pagePtr = ((StringObject).StringObject).with(message, function (messageStringPtr) {
        return NewsPage_create(maintenancePtr, messageStringPtr, dialogType);
});
        return new NewsPage(pagePtr);
}
        }
        NewsPage = <class_fields_init> = NewsPage;
        exports.NewsPage = NewsPage;
        return;
};

// --------------------- MODULE 6946 — Shop ---------------------

// ============================================================ //
// webpack module 6946  —  Shop
// exports: Shop
// deps: 1588 (LogicMemory), 3117 (CollabDrop), 3555 (LogicSkinData), 4801 (LogicHomeMode), 4934 (GUI), 4974 (Breadcrumbs), 5039 (GameButton), 5287 (LogicPurchaseOfferCommand), 5417 (LogicArrayList), 5434 (LogicGemOffer), 6046 (Application), 6139 (LogicDataTables), 7171 (LogicCharacterData), 7265 (Localisation), 7535 (StringObject), 9250 (StringTable), 9878 (Libg)
// ============================================================ //

__webpack_modules__[6946] = function Shop_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, Localisation, LogicArrayList, LogicGemOffer, StringObject, LogicDataTables, StringTable, CollabDrop, GUI, GameButton, LogicCharacterData, Application, LogicMemory, LogicHomeMode, LogicSkinData, LogicPurchaseOfferCommand, Breadcrumbs, Shop_createNonOfferCatalogPurchasePopup, skinPreviewMode, Shop_createListOfferBundleItemByBundleType, Shop_canBuyProduct, GemPackItem_ctor, GemPackItem_buttonClicked, BazaarTomlGemPackItem_buttonClicked, NightMarketShopPopup_ctor, infoCollabButtonOffset, Shop, <class_fields_init>, Shop;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.Shop = undefined;
        Libg = __webpack_require__(9878);
        Localisation = __webpack_require__(7265);
        LogicArrayList = __webpack_require__(5417);
        LogicGemOffer = __webpack_require__(5434);
        StringObject = __webpack_require__(7535);
        LogicDataTables = __webpack_require__(6139);
        StringTable = __webpack_require__(9250);
        CollabDrop = __webpack_require__(3117);
        GUI = __webpack_require__(4934);
        GameButton = __webpack_require__(5039);
        LogicCharacterData = __webpack_require__(7171);
        Application = __webpack_require__(6046);
        LogicMemory = __webpack_require__(1588);
        LogicHomeMode = __webpack_require__(4801);
        LogicSkinData = __webpack_require__(3555);
        LogicPurchaseOfferCommand = __webpack_require__(5287);
        Breadcrumbs = __webpack_require__(4974);
        Shop_createNonOfferCatalogPurchasePopup = ((Libg).Libg).offset(12680204, 0);
        skinPreviewMode = 2;
        Shop_createListOfferBundleItemByBundleType = ((Libg).Libg).offset(12661428, 0);
        Shop_canBuyProduct = ((Libg).Libg).offset(12671452, 0);
        GemPackItem_ctor = ((Libg).Libg).offset(12770412, 0);
        GemPackItem_buttonClicked = ((Libg).Libg).offset(12772332, 0);
        BazaarTomlGemPackItem_buttonClicked = ((Libg).Libg).offset(9843940, 0);
        NightMarketShopPopup_ctor = ((Libg).Libg).offset(13354936, 0);
        infoCollabButtonOffset = ((LogicMemory).LogicMemory).offset(712, 720);
        <class_fields_init> = undefined;
        Shop;
        class Shop {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x561a9 (open) */
}
            patch () {
        (Interceptor).attach(Shop_createNonOfferCatalogPurchasePopup, { onEnter (args) {
        return;
} });
        (Interceptor).attach(GemPackItem_ctor, { onEnter (args) {
        this.item = args[0];
        return;
}, onLeave () {
    var btn, clip, price, priceMoney, priceTextField;
        btn = new (GameButton).GameButton((this).item);
        clip = (btn).getMovieClip();
        price = (clip).getChildByName("price");
        if ((!price)) {
            return;
        } /* if 0x55613 */
        priceMoney = (price).getChildByName("price_free");
        if ((!priceMoney)) {
            return;
        } /* if 0x5562b */
        priceTextField = (priceMoney).getTextFieldByName("txt");
        if ((!priceTextField)) {
            return;
        } /* if 0x55644 */
        priceMoney.visibility = true;
        return;
} });
        (Interceptor).replace(GemPackItem_buttonClicked, new NativeCallback(function (button) {
        return;
}, "void", ["pointer"]));
        (Interceptor).replace(BazaarTomlGemPackItem_buttonClicked, new NativeCallback(function (button) {
        return;
}, "void", ["pointer"]));
        (Interceptor).attach(Shop_canBuyProduct, { onLeave (retval) {
        return;
} });
        (Interceptor).attach(Shop_createListOfferBundleItemByBundleType, { onEnter (args) {
    var arr, i, rawGemOffer, gemOffer, characterName, characterTID, skinId, skinData, count, character, characterName, iconName, sprayName, count, count;
        Shop.currentPack = (++(Shop).currentPack);
        if (((Shop).currentPack >= 4)) {
            Shop.currentPack = 1;
            Shop.firstPack = "";
            Shop.secondPack = "";
            Shop.thirdPack = "";
            Shop.fourthPack = "";
        } /* if 0x557d5 */
        if (((Shop).firstPack === "")) {
            Shop.firstPack = ("").concat(((Localisation).Localisation).getString("CollabPack"), " 1:\n");
            Shop.secondPack = ("").concat(((Localisation).Localisation).getString("CollabPack"), " 2:\n");
            Shop.thirdPack = ("").concat(((Localisation).Localisation).getString("CollabPack"), " 3:\n");
            Shop.fourthPack = ("").concat(((Localisation).Localisation).getString("CollabPack"), " 4:\n");
        } /* if 0x55893 */
        arr = new (LogicArrayList).LogicArrayList((args[0]).add(8));
        if (((Shop).currentPack === 1)) {
            Shop.firstPack = ("").concat(((Localisation).Localisation).getString("CollabPack"), " 1:\n");
            Shop.secondPack = ("").concat(((Localisation).Localisation).getString("CollabPack"), " 2:\n");
            Shop.thirdPack = ("").concat(((Localisation).Localisation).getString("CollabPack"), " 3:\n");
            Shop.fourthPack = ("").concat(((Localisation).Localisation).getString("CollabPack"), " 4:\n");
        } /* if 0x55968 */
        i = 0;
        while ((i < (arr).getItemsCount())) {
            rawGemOffer = (arr).getElement(i);
            if (!(rawGemOffer).isNull()) {
                gemOffer = new (LogicGemOffer).LogicGemOffer(rawGemOffer);
                if (((gemOffer).getType() === 5)) {
                    if ((((((LogicDataTables).LogicDataTables).getTable((((LogicDataTables).LogicDataTables).table).Cards)).getItemAt((gemOffer).getExtraData())) == null)) {
                        (((LogicDataTables).LogicDataTables).getTable((((LogicDataTables).LogicDataTables).table).Cards)).getItemAt((gemOffer).getExtraData());
                    } /* if 0x55a15 */
                    /* jump -> 0x55a1e */
                    characterName = ((StringObject).StringObject).read((undefined).getValueAt(4));
                    characterTID = (((LogicDataTables).LogicDataTables).getCharacterByName(characterName)).getTID();
                    (Shop).addToPack((Shop).currentPack, ("").concat(((Localisation).Localisation).getString("DeckFor"), " ", ((StringTable).StringTable).getString(characterTID), ", "));
                } /* if 0x55a92 */
                if (((gemOffer).getType() === 4)) {
                    skinId = (gemOffer).getExtraData();
                    skinData = ((LogicDataTables).LogicDataTables).getDataById((((LogicDataTables).LogicDataTables).table).Skins, skinId);
                    (Shop).addToPack((Shop).currentPack, ("").concat(((Localisation).Localisation).getString("SkinFor"), " ", ((StringTable).StringTable).getString((skinData).getTID()), ", "));
                } /* if 0x55b35 */
                if (((gemOffer).getType() === 1)) {
                    count = (gemOffer).getCount();
                    (Shop).addToPack((Shop).currentPack, ("").concat(((Localisation).Localisation).getString("Coins"), " (", count, "), "));
                } /* if 0x55b90 */
                if (((gemOffer).getType() === 3)) {
                    character = new (LogicCharacterData).LogicCharacterData((gemOffer).getData());
                    characterName = ((StringTable).StringTable).getString((character).getTID());
                    (Shop).addToPack((Shop).currentPack, ("").concat(characterName, ", "));
                } /* if 0x55c00 */
                if (((gemOffer).getType() === 25)) {
                    if ((((((LogicDataTables).LogicDataTables).getTable((((LogicDataTables).LogicDataTables).table).PlayerThumbnails)).getItemAt((gemOffer).getExtraData())) == null)) {
                        (((LogicDataTables).LogicDataTables).getTable((((LogicDataTables).LogicDataTables).table).PlayerThumbnails)).getItemAt((gemOffer).getExtraData());
                    } /* if 0x55c53 */
                    /* jump -> 0x55c5b */
                    iconName = (undefined).getName();
                    (Shop).addToPack((Shop).currentPack, ("").concat(((Localisation).Localisation).getString("ProfileIcon"), " (", iconName, "), "));
                } /* if 0x55c9f */
                if (((gemOffer).getType() === 35)) {
                    if ((((((LogicDataTables).LogicDataTables).getTable((((LogicDataTables).LogicDataTables).table).Sprays)).getItemAt((gemOffer).getExtraData())) == null)) {
                        (((LogicDataTables).LogicDataTables).getTable((((LogicDataTables).LogicDataTables).table).Sprays)).getItemAt((gemOffer).getExtraData());
                    } /* if 0x55cef */
                    /* jump -> 0x55cf7 */
                    sprayName = (undefined).getName();
                    (Shop).addToPack((Shop).currentPack, ("").concat(((Localisation).Localisation).getString("Spray"), " (", sprayName, "), "));
                } /* if 0x55d3b */
                if (((gemOffer).getType() === 41)) {
                    count = (gemOffer).getCount();
                    (Shop).addToPack((Shop).currentPack, ("").concat(((Localisation).Localisation).getString("PowerPoints"), " (", count, "), "));
                } /* if 0x55d97 */
                if (((gemOffer).getType() === 45)) {
                    count = (gemOffer).getCount();
                    (Shop).addToPack((Shop).currentPack, ("").concat(((Localisation).Localisation).getString("Bling"), " (", count, "), "));
                } /* if 0x55df6 */
            } /* if 0x55df9 */
            i = ((i) + 1);
            (i++);
            return;
        } /* while 0x55e04 (open) */
} });
        return;
}
            usePreviewForUnavailableSkin (args) {
    var skin, homeMode, character;
        if (!(args[0]).isNull()) {
            (args[0]).isNull();
            if (((args[1]).toInt32() === skinPreviewMode)) {
                return;
            } /* if 0x55f4b */
        } /* if 0x55f48 */
        skin = new (LogicSkinData).LogicSkinData(args[0]);
        if (((skin).getClassID() !== (((LogicDataTables).LogicDataTables).table).Skins)) {
            return;
        } /* if 0x55f7c */
        homeMode = ((LogicHomeMode).LogicHomeMode).getInstance();
        if (!(homeMode).isNull()) {
            (homeMode).isNull();
            if (((LogicPurchaseOfferCommand).LogicPurchaseOfferCommand).isSkinPurchasableFromCatalog(homeMode, (skin).instance)) {
                return;
            } /* if 0x55fba */
        } /* if 0x55fb7 */
        character = (skin).getCharacter();
        if (!(!character)) {
            if (((character).instance).isNull()) {
                return;
            } /* if 0x55fe1 */
        } /* if 0x55fde */
        args[1] = ptr(skinPreviewMode);
        return;
}
            addToPack (id, info) {
        if ((id === 1)) {
            this.firstPack = ((this).firstPack + info);
        } /* if 0x56049 */
        /* jump -> 0x56083 */
        if ((this === 2)) {
            this.secondPack = ((this).secondPack + info);
        } /* if 0x5605d */
        /* jump -> 0x56083 */
        if ((this === 3)) {
            this.thirdPack = ((this).thirdPack + info);
        } /* if 0x56071 */
        /* jump -> 0x56083 */
        if ((this === 4)) {
            this.fourthPack = ((this).fourthPack + info);
            return;
        } /* if 0x56083 (open) */
}
            showPopup () {
    var clean;
        clean = clean = <underflow>;
        return;
}
        }
        Shop = GUI = Shop;
        exports.Shop = Shop;
        Shop.firstPack = "";
        Shop.secondPack = "";
        Shop.thirdPack = "";
        Shop.fourthPack = "";
        Shop.currentPack = 0;
        return;
};

// --------------------- MODULE 819 — BrawlerMenu ---------------------

// ============================================================ //
// webpack module 819  —  BrawlerMenu
// exports: BrawlerMenuPopup
// deps: 366 (PrestigeSelectorPopup), 1018 (HomeMode), 4934 (GUI), 5039 (GameButton), 6139 (LogicDataTables), 6153 (LogicClientAvatar), 7265 (Localisation), 8156 (_), 8261 (ListContainerPopup), 8394 (SkinMenu), 8569 (HomeScreen), 9573 (BrawlerItem)
// ============================================================ //

__webpack_modules__[819] = function BrawlerMenu_factory(__unused_webpack_module, exports, __webpack_require__) {
    var ListContainerPopup, Localisation, LogicDataTables, BrawlerItem, GUI, GameButton, SkinMenu, HomeScreen, LogicClientAvatar, HomeMode, _, PrestigeSelectorPopup, BrawlerMenuPopup, <class_fields_init>, BrawlerMenuPopup;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.BrawlerMenuPopup = undefined;
        ListContainerPopup = __webpack_require__(8261);
        Localisation = __webpack_require__(7265);
        LogicDataTables = __webpack_require__(6139);
        BrawlerItem = __webpack_require__(9573);
        GUI = __webpack_require__(4934);
        GameButton = __webpack_require__(5039);
        SkinMenu = __webpack_require__(8394);
        HomeScreen = __webpack_require__(8569);
        LogicClientAvatar = __webpack_require__(6153);
        HomeMode = __webpack_require__(1018);
        _ = __webpack_require__(8156);
        PrestigeSelectorPopup = __webpack_require__(366);
        static refreshItems () {
    var charactersTable, brawlerItemIndex, characterItem, characterName, brawlerItem, naviHeight;
        ((this).container).clearEntries();
        charactersTable = ((LogicDataTables).LogicDataTables).getTable((((LogicDataTables).LogicDataTables).table).Characters);
        this.brawlerItemsCount = (charactersTable).getItemCount();
        brawlerItemIndex = 0;
        while ((brawlerItemIndex < (this).brawlerItemsCount)) {
            characterItem = (charactersTable).getItemAt(brawlerItemIndex);
            characterName = (characterItem).getName();
            if ((!(characterItem).isDisabled())) {
                if (((characterItem).getTID() !== "")) {
                    if (!(characterItem).isHero()) {
                        (characterItem).isHero();
                        if ((characterName === "Lightyear")) {
                            if ((!(["MechaDudeBig", "CannonGirlSmall", "Godzilla", "DiggerDrill", "GeishaTransformed"]).includes(characterName))) {
                                brawlerItem = new (BrawlerItem).BrawlerItem(characterItem);
                                (brawlerItem).setCustomButtonListener(((this).buttonPressed).bind(this));
                                ((this).container).addEntry(brawlerItem);
                            } /* if 0xdd75c */
                        } /* if 0xdd75c */
                    } /* if 0xdd6ec */
                } /* if 0xdd75f */
            } /* if 0xdd75f */
            brawlerItemIndex = ((brawlerItemIndex) + 1);
            (brawlerItemIndex++);
        } /* while 0xdd76a */
        naviHeight = (this).getNaviHeight();
        ((this).container).refreshEntryPositions(4, naviHeight, 2, 0, 0, 0, -1);
        return;
};
        static buttonPressed (self, button) {
    var brawlerButton, charactersTable, character, e, clientAvatar, characterPowerPoints, popup;
        brawlerButton = new (GameButton).GameButton(button);
        charactersTable = ((LogicDataTables).LogicDataTables).getTable((((LogicDataTables).LogicDataTables).table).Characters);
        character = (charactersTable).getItemAt((brawlerButton).id);
        if ((this).onPick) {
            return;
        } /* if 0xdd885 */
        if ((this).isForSkins) {
            /* CATCH -> 0xdd8c2 (try region) */
            ((GUI).GUI).showPopup(new (SkinMenu).SkinMenuPopup(character, (this).isForSkinChanger), true, true, false);
            (this).onPick(character);
            return;
            e = brawlerButton = charactersTable = character = <underflow>;
            /* CATCH -> 0xdd8da (try region) */
            (_).LogInfo((e).stack);
            return;
            throw <underflow>;
        } /* if 0xdd8d8 */
        if ((clientAvatar = characterPowerPoints = popup = (this).gatchaType === (((HomeMode).HomeMode).gatchaType).Character)) {
            ((HomeScreen).HomeScreen).doOfflineGatcha((((HomeMode).HomeMode).gatchaType).Character, character);
        } /* if 0xdd927 */
        /* jump -> 0xdda87 */
        if ((clientAvatar = characterPowerPoints = popup = (this).gatchaType === (((HomeMode).HomeMode).gatchaType).PowerPoints)) {
            clientAvatar = ((HomeMode).HomeMode).getPlayerAvatar();
            characterPowerPoints = (clientAvatar).getHeroPower(character);
            if ((characterPowerPoints !== ((LogicClientAvatar).LogicClientAvatar).maxHeroPowerPoints)) {
                ((HomeScreen).HomeScreen).doOfflineGatcha((((HomeMode).HomeMode).gatchaType).PowerPoints, character);
                /* jump -> 0xdda87 */
                if ((clientAvatar = characterPowerPoints = popup = (this).gatchaType === (((HomeMode).HomeMode).gatchaType).Gadget)) {
                    ((HomeScreen).HomeScreen).doOfflineGatcha((((HomeMode).HomeMode).gatchaType).Gadget, character);
                } /* if 0xdd9dd */
                /* jump -> 0xdda87 */
                if ((clientAvatar = characterPowerPoints = popup = (this).gatchaType === (((HomeMode).HomeMode).gatchaType).StarPower)) {
                    ((HomeScreen).HomeScreen).doOfflineGatcha((((HomeMode).HomeMode).gatchaType).StarPower, character);
                } /* if 0xdda1b */
                /* jump -> 0xdda86 */
                if ((clientAvatar = characterPowerPoints = popup = (this).gatchaType === (((HomeMode).HomeMode).gatchaType).Hypercharge)) {
                    ((HomeScreen).HomeScreen).doOfflineGatcha((((HomeMode).HomeMode).gatchaType).Hypercharge, character);
                } /* if 0xdda59 */
                /* jump -> 0xdda86 */
                if ((clientAvatar = characterPowerPoints = popup = (this).gatchaType === -1)) {
                    popup = new (PrestigeSelectorPopup).PrestigeSelectorPopup(character);
                    ((GUI).GUI).showPopup(popup, true, true, false);
                    clientAvatar = characterPowerPoints = popup = (this).gatchaType;
                } /* if 0xdda86 */
                return;
            } /* if 0xdda89 (open) */
        } /* if 0xdd99e (open) */
};
        <class_fields_init> = undefined;
        BrawlerMenuPopup;
        class BrawlerMenuPopup extends <class_fields_init> = (ListContainerPopup).ListContainerPopup {
            constructor () {
    var isForSkins, gatchaType, isForSkinChanger, onPick, isForSkins, gatchaType, isForSkinChanger, onPick, title, this.active_func, new.target;
        gatchaType = /*special:2*/;
        isForSkinChanger = /*special:3*/;
        if (((isForSkins) === undefined)) {
            isForSkins = isForSkins = false;
        } /* if 0xdd429 */
        gatchaType = gatchaType;
        if (((isForSkinChanger) === undefined)) {
            isForSkinChanger = isForSkinChanger = false;
        } /* if 0xdd434 */
        onPick = onPick;
        isForSkins = undefined;
        if ((gatchaType === (((HomeMode).HomeMode).gatchaType).Character)) {
            isForSkins = ((Localisation).Localisation).getString("BrawlerMenuPopupTitle");
        } /* if 0xdd471 */
        /* jump -> 0xdd55b */
        if ((gatchaType === (((HomeMode).HomeMode).gatchaType).PowerPoints)) {
            isForSkins = ((Localisation).Localisation).getString("PowerPointsMenuPopupTitle");
        } /* if 0xdd4a4 */
        /* jump -> 0xdd55b */
        if ((gatchaType === (((HomeMode).HomeMode).gatchaType).Gadget)) {
            isForSkins = ((Localisation).Localisation).getString("GadgetMenuPopupTitle");
        } /* if 0xdd4d7 */
        /* jump -> 0xdd55b */
        if ((gatchaType === (((HomeMode).HomeMode).gatchaType).StarPower)) {
            isForSkins = ((Localisation).Localisation).getString("StarPowerMenuPopupTitle");
        } /* if 0xdd509 */
        /* jump -> 0xdd55a */
        if ((gatchaType === (((HomeMode).HomeMode).gatchaType).Hypercharge)) {
            isForSkins = ((Localisation).Localisation).getString("HyperchargeMenuPopupTitle");
        } /* if 0xdd53b */
        /* jump -> 0xdd55a */
        if ((gatchaType === -1)) {
            isForSkins = ((Localisation).Localisation).getString("PrestigeMenuPopupTitle");
        } /* if 0xdd55a */
        onPick = super({ Title: isForSkins });
        if (<class_fields_init>) {
        } /* if 0xdd57d */
        (onPick).adjustPopupHeaderButtons("brawler_menu");
        (onPick).refreshItems();
        onPick.isForSkins = isForSkins;
        onPick.gatchaType = gatchaType;
        onPick.isForSkinChanger = isForSkinChanger;
        onPick.brawlerItemsCount = 0;
        onPick.onPick = onPick;
        return onPick;
}
        }
        BrawlerMenuPopup = LogicClientAvatar = BrawlerMenuPopup;
        exports.BrawlerMenuPopup = BrawlerMenuPopup;
        return;
};

// --------------------- MODULE 1056 — SimpleWebView ---------------------

// ============================================================ //
// webpack module 1056  —  SimpleWebView
// exports: SimpleWebView
// deps: 6193 (GenericPopup), 7535 (StringObject), 9878 (Libg)
// ============================================================ //

__webpack_modules__[1056] = function SimpleWebView_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, GenericPopup, StringObject, SimpleWebView_create, SimpleWebView_loadURL, SimpleWebView, <class_fields_init>, SimpleWebView;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.SimpleWebView = undefined;
        Libg = __webpack_require__(9878);
        GenericPopup = __webpack_require__(6193);
        StringObject = __webpack_require__(7535);
        SimpleWebView_create = new NativeFunction(((Libg).Libg).offset(12688096, 0), "pointer", []);
        SimpleWebView_loadURL = new NativeFunction(((Libg).Libg).offset(12689140, 0), "void", ["pointer", "pointer"]);
        static loadURL (url) {
        return;
};
        <class_fields_init> = undefined;
        SimpleWebView;
        class SimpleWebView extends <class_fields_init> = (GenericPopup).GenericPopup {
            constructor () {
    var this.active_func, new.target, arguments;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        arguments = /*special:0*/;
        this = [].apply(new.target, [0]);
        if (<class_fields_init>) {
        } /* if 0x3fc4c */
        return this;
}
            create () {
        return new SimpleWebView(SimpleWebView_create());
}
        }
        SimpleWebView = v8 = SimpleWebView;
        exports.SimpleWebView = SimpleWebView;
        return;
};

// --------------------- MODULE 356 — LoadingScreen ---------------------

// ============================================================ //
// webpack module 356  —  LoadingScreen
// exports: ContentUpdateScreen_update, LoadingScreen
// deps: 783 (DownloadManager), 1588 (LogicMemory), 1591 (NativeHTTPClientManager), 1978 (Libc), 3380 (Logcat), 3401 (GameStateManager), 4974 (Breadcrumbs), 5952 (SafeJNI), 8775 (GameMain), 9168 (MessageManager), 9878 (Libg)
// ============================================================ //

__webpack_modules__[356] = function LoadingScreen_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, LogicMemory, Libc, DownloadManager, MessageManager, NativeHTTPClientManager, SafeJNI, GameMain, Logcat, Breadcrumbs, GameStateManager, LoadingScreenManager_ptr, ContentUpdateStarted, ContentUpdateScreen_destructor, OFFSET_SCREEN_TYPE, OFFSET_GAME_STATE, OFFSET_PHASE, OFFSET_VEC_BEGIN, OFFSET_VEC_END, OFFSET_QUEUE, MGR_OFFSET_CURRENT_SCREEN, MGR_OFFSET_PENDING_STATE_TYPE, QUEUE_SLOTS_OFFSET, QUEUE_ERROR_INFO_OFFSET, ERROR_INFO_PAD_OFFSET, TYPE_CONTENT_UPDATE, TYPE_LOADING, PHASE_DOWNLOADING, TASK_SIZE, TASK_STATUS_OFFSET, TASK_STATUS_IN_PROGRESS, TASK_STATUS_COMPLETE, QUEUE_TOTAL, QUEUE_PENDING, LoadingScreen, <class_fields_init>, LoadingScreen;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.ContentUpdateScreen_update = undefined;
        undefined.LoadingScreen = exports;
        Libg = __webpack_require__(9878);
        LogicMemory = __webpack_require__(1588);
        Libc = __webpack_require__(1978);
        DownloadManager = __webpack_require__(783);
        MessageManager = __webpack_require__(9168);
        NativeHTTPClientManager = __webpack_require__(1591);
        SafeJNI = __webpack_require__(5952);
        GameMain = __webpack_require__(8775);
        Logcat = __webpack_require__(3380);
        Breadcrumbs = __webpack_require__(4974);
        GameStateManager = __webpack_require__(3401);
        LoadingScreenManager_ptr = ((Libg).Libg).offset(19951184, 0);
        ContentUpdateStarted = ((Libg).Libg).offset(13647136, 0);
        exports.ContentUpdateScreen_update = ((Libg).Libg).offset(13643444, 0);
        ContentUpdateScreen_destructor = ((Libg).Libg).offset(13642008, 0);
        OFFSET_SCREEN_TYPE = 8;
        OFFSET_GAME_STATE = 72;
        OFFSET_PHASE = 76;
        OFFSET_VEC_BEGIN = 80;
        OFFSET_VEC_END = 88;
        OFFSET_QUEUE = ((LogicMemory).LogicMemory).offset(128);
        MGR_OFFSET_CURRENT_SCREEN = 72;
        MGR_OFFSET_PENDING_STATE_TYPE = 84;
        QUEUE_SLOTS_OFFSET = 40;
        QUEUE_ERROR_INFO_OFFSET = 56;
        ERROR_INFO_PAD_OFFSET = 8;
        TYPE_CONTENT_UPDATE = 2;
        TYPE_LOADING = 4;
        PHASE_DOWNLOADING = 2;
        TASK_SIZE = 16;
        TASK_STATUS_OFFSET = 4;
        TASK_STATUS_IN_PROGRESS = 1;
        TASK_STATUS_COMPLETE = 0;
        QUEUE_TOTAL = 32;
        QUEUE_PENDING = 36;
        <class_fields_init> = undefined;
        LoadingScreen;
        class LoadingScreen {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x5c787 (open) */
}
            patch () {
    var i, origContentUpdateStarted;
        ((DownloadManager).DownloadManager).init();
        this.needsDownload = (!((DownloadManager).DownloadManager).downloadingFinished);
        ((Logcat).Logcat).logDebug(("LoadingScreen: ").concat(((DownloadManager).DownloadManager).downloadedAssets, "/", ((DownloadManager).DownloadManager).DOWNLOAD_ASSETS.length, " cached, needsDownload=", (this).needsDownload));
        if ((!(this).needsDownload)) {
            return;
        } /* if 0x5b901 */
        this.noopCallback = new NativeCallback(function () {
        return;
}, "void", ["pointer"]);
        this.fakeVtable = ((Libc).Libc).malloc(64);
        i = 0;
        while ((i < 8)) {
            (((this).fakeVtable).add((i * 8))).writePointer((this).noopCallback);
            i = ((i) + 1);
            (i++);
        } /* while 0x5b971 */
        (Interceptor).attach((GameStateManager).GameStateManager_changeToStateOffset, { onEnter (args) {
    var mgr;
        if ((LoadingScreen).needsDownload) {
            mgr = args[0];
            if ((((mgr).add(MGR_OFFSET_PENDING_STATE_TYPE)).readS32() === TYPE_LOADING)) {
                ((Logcat).Logcat).logDebug("LoadingScreen: forcing ContentUpdateScreen via manager pending-state field");
                ((mgr).add(MGR_OFFSET_PENDING_STATE_TYPE)).writeS32(TYPE_CONTENT_UPDATE);
                return;
            } /* if 0x5bb06 (open) */
        } /* if 0x5bb06 (open) */
} });
        origContentUpdateStarted = new NativeFunction(ContentUpdateStarted, "void", ["pointer", "pointer"]);
        (Interceptor).replace(ContentUpdateStarted, new NativeCallback(function (screen, a2) {
        if ((LoadingScreen).needsDownload) {
            ((screen).add(OFFSET_PHASE)).writeS32(PHASE_DOWNLOADING);
            return;
        } /* if 0x5bb74 */
        return;
}, "void", ["pointer", "pointer"]));
        (Interceptor).attach((exports).ContentUpdateScreen_update, { onEnter (args) {
    var self, gameState;
        this.needsRestore = false;
        if ((LoadingScreen).needsDownload) {
            self = args[0];
            gameState = ((self).add(OFFSET_GAME_STATE)).readS32();
            if ((gameState >= 4)) {
                ((self).add(OFFSET_PHASE)).writeS32(PHASE_DOWNLOADING);
                this.savedQueue = ((self).add(OFFSET_QUEUE)).readPointer();
                ((self).add(OFFSET_QUEUE)).writePointer(NULL);
                this.self = self;
                this.needsRestore = true;
                return;
            } /* if 0x5bc5a (open) */
        } /* if 0x5bc5d (open) */
}, onLeave () {
        if ((this).needsRestore) {
            (((this).self).add(OFFSET_QUEUE)).writePointer((this).savedQueue);
            return;
        } /* if 0x5bca9 (open) */
} });
        (Interceptor).attach(ContentUpdateScreen_destructor, { onEnter (args) {
    var screen, queue;
        screen = args[0];
        queue = ((screen).add(OFFSET_QUEUE)).readPointer();
        if ((LoadingScreen).fakeQueue) {
            if ((!(queue).isNull())) {
                if ((queue).equals((LoadingScreen).fakeQueue)) {
                    ((screen).add(OFFSET_QUEUE)).writePointer(NULL);
                    ((screen).add(OFFSET_VEC_BEGIN)).writePointer(NULL);
                    ((screen).add(OFFSET_VEC_END)).writePointer(NULL);
                    return;
                } /* if 0x5bd80 (open) */
            } /* if 0x5bd80 (open) */
        } /* if 0x5bd80 (open) */
} });
        return;
}
            onLoginResponse (messageType) {
        if ((messageType === 20103)) {
            ((Logcat).Logcat).logDebug("LoadingScreen: 20103 — letting game update, skipping mod downloads");
            (this).nullFakeQueueOnScreen();
            this.needsDownload = false;
            this.modPhaseActive = false;
            this.loginOk = false;
            this.downloadsStarted = false;
            return;
        } /* if 0x5bf08 */
        if ((messageType === 20104)) {
            if (((DownloadManager).DownloadManager).downloadingFinished) {
                return;
            } /* if 0x5bf1f */
            ((Logcat).Logcat).logDebug("LoadingScreen: 20104 — enabling downloads");
            this.needsDownload = true;
            this.loginOk = true;
            this.downloadsStarted = false;
            return;
        } /* if 0x5bf4a (open) */
}
            update () {
    var screen, gameState, total, downloaded, i;
        if ((!(this).needsDownload)) {
            return;
        } /* if 0x5bfce */
        if (((DownloadManager).DownloadManager).downloadingFinished) {
            this.needsDownload = false;
            this.modPhaseActive = false;
            ((Logcat).Logcat).logDebug("LoadingScreen: downloads complete, reloading");
            return;
        } /* if 0x5c014 */
        screen = (this).getCurrentScreen();
        if ((!screen)) {
            return;
        } /* if 0x5c026 */
        if ((!(this).modPhaseActive)) {
            this.modPhaseActive = true;
            ((Breadcrumbs).Breadcrumbs).push("LoadingScreen: holding for mod downloads");
        } /* if 0x5c04e */
        gameState = ((screen).add(OFFSET_GAME_STATE)).readS32();
        if ((gameState < 4)) {
            return;
        } /* if 0x5c06d */
        ((screen).add(OFFSET_PHASE)).writeS32(PHASE_DOWNLOADING);
        (this).ensureFakeQueue(screen);
        if ((this).fakeQueue) {
            if ((this).fakeTasks) {
                total = ((DownloadManager).DownloadManager).DOWNLOAD_ASSETS.length;
                downloaded = ((DownloadManager).DownloadManager).downloadedAssets;
                (((this).fakeQueue).add(QUEUE_PENDING)).writeS32((total - downloaded));
                i = 0;
                while ((i < total)) {
                    if ((i < downloaded)) {
                    } /* if 0x5c12e */
                    /* jump -> 0x5c131 */
                    TASK_STATUS_COMPLETE(TASK_STATUS_IN_PROGRESS);
                    i = ((i) + 1);
                    (i++);
                    return;
                } /* while 0x5c13f (open) */
            } /* if 0x5c142 (open) */
        } /* if 0x5c142 (open) */
}
            getCurrentScreen () {
    var mgr, screen;
        mgr = (LoadingScreenManager_ptr).readPointer();
        if ((mgr).isNull()) {
            return null;
        } /* if 0x5c1a8 */
        screen = ((mgr).add(MGR_OFFSET_CURRENT_SCREEN)).readPointer();
        if ((screen).isNull()) {
            return null;
        } /* if 0x5c1ce */
        if ((((screen).add(OFFSET_SCREEN_TYPE)).readS32() !== TYPE_CONTENT_UPDATE)) {
            return null;
        } /* if 0x5c1ec */
        return screen;
}
            ensureFakeQueue (screen) {
    var total, tasks, i, i, slots, i, errorInfo, queue, i, vecSize, vecBase, i;
        total = ((DownloadManager).DownloadManager).DOWNLOAD_ASSETS.length;
        if ((this).fakeQueue) {
            ((screen).add(OFFSET_QUEUE)).writePointer((this).fakeQueue);
            ((screen).add(OFFSET_VEC_BEGIN)).writePointer((this).fakeVectorBase);
            return;
        } /* if 0x5c316 */
        tasks = ((Libc).Libc).malloc((TASK_SIZE * total));
        i = 0;
        while ((i < (TASK_SIZE * total))) {
            ((tasks).add(i)).writeU64(0);
            i = (i + 8);
        } /* while 0x5c365 */
        i = 0;
        while ((i < total)) {
            ((tasks).add(((i * TASK_SIZE) + TASK_STATUS_OFFSET))).writeS32(TASK_STATUS_IN_PROGRESS);
            i = ((i) + 1);
            (i++);
        } /* while 0x5c39f */
        this.fakeTasks = tasks;
        slots = ((Libc).Libc).malloc((16 * total));
        i = 0;
        while ((i < total)) {
            ((slots).add((i * 16))).writeU64(0);
            ((slots).add(((i * 16) + 8))).writePointer((tasks).add((i * TASK_SIZE)));
            i = ((i) + 1);
            (i++);
        } /* while 0x5c424 */
        errorInfo = ((Libc).Libc).malloc(16);
        (errorInfo).writeU64(0);
        ((errorInfo).add(ERROR_INFO_PAD_OFFSET)).writeU64(0);
        queue = ((Libc).Libc).malloc(128);
        i = 0;
        while ((i < 128)) {
            ((queue).add(i)).writeU64(0);
            i = (i + 8);
        } /* while 0x5c4a6 */
        (queue).writePointer((this).fakeVtable);
        ((queue).add(QUEUE_TOTAL)).writeS32(total);
        ((queue).add(QUEUE_PENDING)).writeS32(total);
        ((queue).add(QUEUE_SLOTS_OFFSET)).writePointer(slots);
        ((queue).add(QUEUE_ERROR_INFO_OFFSET)).writePointer(errorInfo);
        this.fakeQueue = queue;
        ((screen).add(OFFSET_QUEUE)).writePointer(queue);
        vecSize = (total * 16);
        vecBase = ((Libc).Libc).malloc(vecSize);
        i = 0;
        while ((i < vecSize)) {
            ((vecBase).add(i)).writeU64(0);
            i = (i + 8);
        } /* while 0x5c594 */
        this.fakeVectorBase = vecBase;
        ((screen).add(OFFSET_VEC_BEGIN)).writePointer(vecBase);
        return;
}
            nullFakeQueueOnScreen () {
    var screen, queue;
        screen = (this).getCurrentScreen();
        if (!(!screen)) {
            if ((!(this).fakeQueue)) {
                return;
            } /* if 0x5c650 */
        } /* if 0x5c64d */
        queue = ((screen).add(OFFSET_QUEUE)).readPointer();
        if ((!(queue).isNull())) {
            if ((queue).equals((this).fakeQueue)) {
                ((screen).add(OFFSET_QUEUE)).writePointer(NULL);
                ((screen).add(OFFSET_VEC_BEGIN)).writePointer(NULL);
                ((screen).add(OFFSET_VEC_END)).writePointer(NULL);
                return;
            } /* if 0x5c6dc (open) */
        } /* if 0x5c6dc (open) */
}
            get isActive () {
        return (this).modPhaseActive;
}
            get progress () {
    var total;
        total = ((DownloadManager).DownloadManager).DOWNLOAD_ASSETS.length;
        if ((total === 0)) {
            return 100;
        } /* if 0x5c73b */
        return (Math).floor(((((DownloadManager).DownloadManager).downloadedAssets / total) * 100));
}
        }
        LoadingScreen = Logcat = LoadingScreen;
        exports.LoadingScreen = LoadingScreen;
        LoadingScreen.needsDownload = false;
        LoadingScreen.downloadsStarted = false;
        LoadingScreen.loginOk = false;
        LoadingScreen.modPhaseActive = false;
        LoadingScreen.fakeQueue = null;
        LoadingScreen.fakeTasks = null;
        LoadingScreen.fakeVectorBase = null;
        LoadingScreen.noopCallback = null;
        LoadingScreen.fakeVtable = null;
        return;
};

// --------------------- MODULE 2031 — AboutScreen ---------------------

// ============================================================ //
// webpack module 2031  —  AboutScreen
// exports: AboutScreen
// deps: 9878 (Libg)
// ============================================================ //

__webpack_modules__[2031] = function AboutScreen_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, AboutScreen_show, AboutScreen, <class_fields_init>, AboutScreen;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.AboutScreen = undefined;
        Libg = __webpack_require__(9878);
        AboutScreen_show = new NativeFunction(((Libg).Libg).offset(13520208, 0), "void", []);
        <class_fields_init> = undefined;
        AboutScreen;
        class AboutScreen {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x4ff0f (open) */
}
            show () {
        return;
}
        }
        AboutScreen = AboutScreen = AboutScreen;
        exports.AboutScreen = AboutScreen;
        return;
};

// --------------------- MODULE 8486 — BillingPackages ---------------------

// ============================================================ //
// webpack module 8486  —  BillingPackages
// exports: BillingPackagesPopup
// deps: 5039 (GameButton), 6139 (LogicDataTables), 8016 (ModMenuLegacy), 8261 (ListContainerPopup), 8883 (BillingPackageItem)
// ============================================================ //

__webpack_modules__[8486] = function BillingPackages_factory(__unused_webpack_module, exports, __webpack_require__) {
    var ListContainerPopup, GameButton, ModMenuLegacy, LogicDataTables, BillingPackageItem, BillingPackagesPopup, <class_fields_init>, BillingPackagesPopup;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.BillingPackagesPopup = undefined;
        ListContainerPopup = __webpack_require__(8261);
        GameButton = __webpack_require__(5039);
        ModMenuLegacy = __webpack_require__(8016);
        LogicDataTables = __webpack_require__(6139);
        BillingPackageItem = __webpack_require__(8883);
        static refreshItems () {
    var billingTable, index, battleServerItem;
        ((this).container).clearEntries();
        billingTable = ((LogicDataTables).LogicDataTables).getTable((((LogicDataTables).LogicDataTables).table).BillingPackages);
        index = 0;
        while ((index < (billingTable).getItemCount())) {
            battleServerItem = new (BillingPackageItem).BillingPackageItem(((billingTable).getItemAt(index)).getName());
            battleServerItem.id = index;
            (battleServerItem).setCustomButtonListener(((this).buttonPressed).bind(this));
            ((this).container).addEntry(battleServerItem);
            index = ((index) + 1);
            (index++);
        } /* while 0xc1c0c */
        return;
};
        static buttonPressed (self, button) {
    var battleServerButton, buttonId, billingTable;
        battleServerButton = new (GameButton).GameButton(button);
        buttonId = (battleServerButton).id;
        if ((buttonId >= 0)) {
            billingTable = ((LogicDataTables).LogicDataTables).getTable((((LogicDataTables).LogicDataTables).table).BillingPackages);
            ((ModMenuLegacy).ModMenuPopupLegacy).doDebugBilling(((billingTable).getItemAt(buttonId)).getName());
            return;
        } /* if 0xc1ccc (open) */
};
        <class_fields_init> = undefined;
        BillingPackagesPopup;
        class BillingPackagesPopup extends <class_fields_init> = (ListContainerPopup).ListContainerPopup {
            constructor () {
    var this.active_func, new.target;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        this = super({ Title: "Billing Packages" });
        if (<class_fields_init>) {
        } /* if 0xc1afd */
        (this).adjustPopupHeaderButtons("billing_packages");
        (this).refreshItems();
        return this;
}
        }
        BillingPackagesPopup = v8 = BillingPackagesPopup;
        exports.BillingPackagesPopup = BillingPackagesPopup;
        return;
};

// --------------------- MODULE 8883 — BillingPackageItem ---------------------

// ============================================================ //
// webpack module 8883  —  BillingPackageItem
// exports: BillingPackageItem
// deps: 5039 (GameButton), 8261 (ListContainerPopup), 9250 (StringTable)
// ============================================================ //

__webpack_modules__[8883] = function BillingPackageItem_factory(__unused_webpack_module, exports, __webpack_require__) {
    var GameButton, ListContainerPopup, StringTable, BillingPackageItem, <class_fields_init>, BillingPackageItem;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.BillingPackageItem = undefined;
        GameButton = __webpack_require__(5039);
        ListContainerPopup = __webpack_require__(8261);
        StringTable = __webpack_require__(9250);
        <class_fields_init> = undefined;
        BillingPackageItem;
        class BillingPackageItem extends <class_fields_init> = (GameButton).GameButton {
            constructor (name) {
    var buttonMovieClip, textField, this.active_func, new.target;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        this = super();
        if (<class_fields_init>) {
        } /* if 0xb2595 */
        ((this).instance).writePointer((ListContainerPopup).countryPopupListItemVtableAddr);
        buttonMovieClip = ((StringTable).StringTable).getMovieClip("sc/ui.sc", "country_item");
        (this).setMovieClip((buttonMovieClip).instance, 1);
        textField = (buttonMovieClip).getTextFieldByName("Text");
        textField.colorTag = true;
        (textField).setTextScaleIfNecessary(name);
        (buttonMovieClip).gotoAndStopFrameIndex(1);
        return this;
}
        }
        BillingPackageItem = BillingPackageItem = BillingPackageItem;
        exports.BillingPackageItem = BillingPackageItem;
        return;
};

// --------------------- MODULE 9573 — BrawlerItem ---------------------

// ============================================================ //
// webpack module 9573  —  BrawlerItem
// exports: BrawlerItem
// deps: 612 (MovieClip), 5039 (GameButton), 8261 (ListContainerPopup), 9250 (StringTable)
// ============================================================ //

__webpack_modules__[9573] = function BrawlerItem_factory(__unused_webpack_module, exports, __webpack_require__) {
    var GameButton, ListContainerPopup, StringTable, MovieClip, BrawlerItem, <class_fields_init>, BrawlerItem;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.BrawlerItem = undefined;
        GameButton = __webpack_require__(5039);
        ListContainerPopup = __webpack_require__(8261);
        StringTable = __webpack_require__(9250);
        MovieClip = __webpack_require__(612);
        <class_fields_init> = undefined;
        BrawlerItem;
        class BrawlerItem extends <class_fields_init> = (GameButton).GameButton {
            constructor (character) {
    var brawlerMenuItemMovieClip, buttonTextField, this.active_func, new.target;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        this = super();
        if (<class_fields_init>) {
        } /* if 0xb2751 */
        ((this).instance).writePointer((ListContainerPopup).countryPopupListItemVtableAddr);
        brawlerMenuItemMovieClip = ((StringTable).StringTable).getMovieClip("sc/ui.sc", "player_name_color_entry");
        (this).setMovieClip((brawlerMenuItemMovieClip).instance, 1);
        buttonTextField = ((MovieClip).MovieClip).getTextFieldByName((brawlerMenuItemMovieClip).instance, "label_txt");
        buttonTextField.colorTag = true;
        (buttonTextField).setTextScaleIfNecessary(((StringTable).StringTable).getString((character).getTID()));
        this.id = (character).getInstanceID();
        (brawlerMenuItemMovieClip).gotoAndStopFrameIndex(1);
        return this;
}
        }
        BrawlerItem = v8 = BrawlerItem;
        exports.BrawlerItem = BrawlerItem;
        return;
};

