// =============================================================
// MOD MENU
// merged webpack modules: 8203 ModMenu, 8016 ModMenuLegacy, 5565 ModMenuItem
// =============================================================

// --------------------- MODULE 8203 — ModMenu ---------------------

// ============================================================ //
// webpack module 8203  —  ModMenu
// exports: ModMenuPopup
// deps: 194 (IconSelector), 2214 (ModProperties), 3309 (OutlineColorPopup), 3902 (NativeDialog), 4009 (Config), 4233 (DebugBillingRequestMessage), 4272 (EDebugger), 4934 (GUI), 5039 (GameButton), 5240 (EnvironmentEditor), 5291 (ParticleStyle), 5565 (ModMenuItem), 5637 (FontManager), 6012 (InputPopup), 6193 (GenericPopup), 6265 (StatusSelector), 6270 (InputItemsPopup), 6988 (Gatcha), 7265 (Localisation), 7906 (BSDPlusManagementPopup) ...
// ============================================================ //

__webpack_modules__[8203] = function ModMenu_factory(__unused_webpack_module, exports, __webpack_require__) {
    var GenericPopup, Stage, StringTable, ScrollArea, GameButton, GUI, GameMain, ModMenuItem, ThemeSelector, Config, ModProperties, PlayerInfo, StatusSelector, Localisation, IconSelector, Gatcha, BattleServers, Latency, OutlineColorPopup, NativeDialog, EDebugger, DebugBillingRequestMessage, MessageManager, StatsTrackers, InputItemsPopup, BillingPackages, EnvironmentEditor, ParticleStyle, InputPopup, FontManager, FontSelector, index, BSDPlusManagementPopup, ETab, ModMenuPopup, <class_fields_init>, ModMenuPopup;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.ModMenuPopup = undefined;
        GenericPopup = __webpack_require__(6193);
        Stage = __webpack_require__(8632);
        StringTable = __webpack_require__(9250);
        ScrollArea = __webpack_require__(9016);
        GameButton = __webpack_require__(5039);
        GUI = __webpack_require__(4934);
        GameMain = __webpack_require__(8775);
        ModMenuItem = __webpack_require__(5565);
        ThemeSelector = __webpack_require__(9244);
        Config = __webpack_require__(4009);
        ModProperties = __webpack_require__(2214);
        PlayerInfo = __webpack_require__(9518);
        StatusSelector = __webpack_require__(6265);
        Localisation = __webpack_require__(7265);
        IconSelector = __webpack_require__(194);
        Gatcha = __webpack_require__(6988);
        BattleServers = __webpack_require__(9698);
        Latency = __webpack_require__(9322);
        OutlineColorPopup = __webpack_require__(3309);
        NativeDialog = __webpack_require__(3902);
        EDebugger = __webpack_require__(4272);
        DebugBillingRequestMessage = __webpack_require__(4233);
        MessageManager = __webpack_require__(9168);
        StatsTrackers = __webpack_require__(9634);
        InputItemsPopup = __webpack_require__(6270);
        BillingPackages = __webpack_require__(8486);
        EnvironmentEditor = __webpack_require__(5240);
        ParticleStyle = __webpack_require__(5291);
        InputPopup = __webpack_require__(6012);
        FontManager = __webpack_require__(5637);
        FontSelector = __webpack_require__(9354);
        index = __webpack_require__(8156);
        BSDPlusManagementPopup = __webpack_require__(7906);
        if (!ETab) {
        } /* if 0xc87b5 */
        function (ETab) {
        ETab["LOBBY"] = 0;
        ETab[0] = "LOBBY";
        ETab["BATTLE"] = 1;
        ETab[1] = "BATTLE";
        ETab["OTHER"] = 2;
        ETab[2] = "OTHER";
        ETab["CONFIG"] = 3;
        ETab[3] = "CONFIG";
        return;
}(ThemeSelector = {});
        static addBackButton () {
    var movieClip, backButton, backMovieClip;
        movieClip = (this).getMovieClip();
        backButton = new (GameButton).GameButton();
        backMovieClip = (movieClip).getMovieClipByName("back_button");
        (backButton).setMovieClip(backMovieClip, true);
        backButton.listener = ((this).onBackButtonPressed).bind(this);
        return;
};
        static addCloseButton () {
    var movieClip, clubLeaguePopup, closeButtonClip, rawPopupClip, backMovieClip, closeButton;
        movieClip = (this).getMovieClip();
        clubLeaguePopup = ((StringTable).StringTable).getMovieClip("sc/ui.sc", "club_league_registration_closed_popup");
        closeButtonClip = (clubLeaguePopup).getMovieClipByName("close_button");
        rawPopupClip = ((StringTable).StringTable).getMovieClip("sc/ui.sc", "popup_maintenance_tabs");
        backMovieClip = (rawPopupClip).getMovieClipByName("back_button");
        closeButtonClip.scale = 0.95;
        closeButtonClip.x = (((movieClip).width / 2) - ((closeButtonClip).width / 4.5));
        closeButtonClip.y = ((backMovieClip).y + 1);
        closeButton = new (GameButton).GameButton();
        (closeButton).setMovieClip(closeButtonClip, true);
        closeButton.listener = function () {
        return;
};
        return;
};
        static addArrows () {
    var movieClip, recruitRoadPopup, recruitRoadPopup1, arrowLeftClip, arrowRightClip, arrowHitboxLeftClip, arrowHitboxRightClip, arrowLeft, arrowRight, arrowHitboxLeft, arrowHitboxRight;
        movieClip = (this).getMovieClip();
        recruitRoadPopup = ((StringTable).StringTable).getMovieClip("sc/ui.sc", "recruit_road_future_purchase_popup");
        recruitRoadPopup1 = ((StringTable).StringTable).getMovieClip("sc/ui.sc", "recruit_road_future_purchase_popup");
        arrowLeftClip = (recruitRoadPopup).getMovieClipByName("arrow_left");
        (arrowLeftClip).gotoAndStopFrameIndex(0);
        arrowLeftClip.scale = 1.5;
        arrowLeftClip.x = ((arrowLeftClip).x + 16);
        arrowLeftClip.y = 313;
        arrowRightClip = (recruitRoadPopup).getMovieClipByName("arrow_right");
        (arrowRightClip).gotoAndStopFrameIndex(0);
        arrowRightClip.scaleX = (-1.5);
        arrowRightClip.scaleY = 1.5;
        arrowRightClip.x = 358;
        arrowRightClip.y = 313;
        arrowHitboxLeftClip = (recruitRoadPopup1).getMovieClipByName("arrow_left");
        (arrowHitboxLeftClip).gotoAndStopFrameIndex(0);
        arrowHitboxLeftClip.scale = 3;
        arrowHitboxLeftClip.x = ((arrowHitboxLeftClip).x + 16);
        arrowHitboxLeftClip.y = 313;
        arrowHitboxRightClip = (recruitRoadPopup1).getMovieClipByName("arrow_right");
        (arrowHitboxRightClip).gotoAndStopFrameIndex(0);
        arrowHitboxRightClip.scaleX = -3;
        arrowHitboxRightClip.scaleY = 3;
        arrowHitboxRightClip.x = 358;
        arrowHitboxRightClip.y = 313;
        arrowLeft = new (GameButton).GameButton();
        (arrowLeft).setMovieClip(arrowLeftClip, true);
        arrowLeft.listener = ((this).previousTab).bind(this);
        arrowRight = new (GameButton).GameButton();
        (arrowRight).setMovieClip(arrowRightClip, true);
        arrowRight.listener = ((this).nextTab).bind(this);
        arrowHitboxLeft = new (GameButton).GameButton();
        (arrowHitboxLeft).setMovieClip(arrowHitboxLeftClip, true);
        arrowHitboxLeft.listener = ((this).previousTab).bind(this);
        arrowHitboxLeft.alpha = 0;
        arrowHitboxRight = new (GameButton).GameButton();
        (arrowHitboxRight).setMovieClip(arrowHitboxRightClip, true);
        arrowHitboxRight.listener = ((this).nextTab).bind(this);
        arrowHitboxRight.alpha = 0;
        (movieClip).addChild(arrowLeft);
        (movieClip).addChild(arrowRight);
        (movieClip).addChild(arrowHitboxLeft);
        return;
};
        static previousTab () {
    var currentTabEnum, currentTabIndex, previousIndex;
        currentTabEnum = (this).currentTabEnum;
        currentTabIndex = ((ModMenuPopup).TAB_ITEMS).findIndex(function (t) {
        return ((t).id === currentTabEnum);
});
        previousIndex = (currentTabIndex - 1);
        if ((previousIndex < 0)) {
            previousIndex = ((ModMenuPopup).TAB_ITEMS.length - 1);
        } /* if 0xc9625 */
        return;
};
        static nextTab () {
    var currentTabEnum, currentTabIndex, nextIndex;
        currentTabEnum = (this).currentTabEnum;
        currentTabIndex = ((ModMenuPopup).TAB_ITEMS).findIndex(function (t) {
        return ((t).id === currentTabEnum);
});
        nextIndex = (currentTabIndex + 1);
        if ((nextIndex >= (ModMenuPopup).TAB_ITEMS.length)) {
            nextIndex = 0;
        } /* if 0xc96cc */
        return;
};
        static changeTab (nextIndex) {
    var newTabButton, nextItem, currentItem, currentTabIcon, previousTabIcon;
        newTabButton = ((this).tabMappings)["get"](nextIndex);
        if ((!newTabButton)) {
            return;
        } /* if 0xc976a */
        (((this).currentTab).getMovieClip()).gotoAndStopFrameIndex(1);
        ((newTabButton).getMovieClip()).gotoAndStopFrameIndex(0);
        nextItem = ((ModMenuPopup).TAB_ITEMS).find(function (t) {
        return ((t).id === nextIndex);
});
        currentItem = ((ModMenuPopup).TAB_ITEMS).find(function (t) {
        return ((t).id === (this).currentTabEnum);
});
        if (nextItem) {
            if (currentItem) {
                currentTabIcon = (nextItem).getIcon();
                previousTabIcon = (currentItem).getIcon();
                if (currentTabIcon) {
                    if (previousTabIcon) {
                        ((newTabButton).getMovieClip()).addChild(currentTabIcon);
                        (((this).currentTab).getMovieClip()).addChild(previousTabIcon);
                    } /* if 0xc9823 */
                } /* if 0xc9823 */
            } /* if 0xc9823 */
        } /* if 0xc9823 */
        this.currentTab = newTabButton;
        this.currentTabEnum = nextIndex;
        return;
};
        static createSubheadingTextfield (text) {
    var fontSize, text, fontSize, popoverTextLeft, textField;
        fontSize = text;
        if (((fontSize) === undefined)) {
            text = fontSize = 30;
        } /* if 0xc98e9 */
        fontSize = ((StringTable).StringTable).getMovieClip("sc/ui.sc", "popover_text_left");
        popoverTextLeft = (fontSize).getTextFieldByName("text");
        popoverTextLeft.color = 4294967295.0;
        popoverTextLeft.fontOutline = true;
        popoverTextLeft.fontSize = fontSize;
        popoverTextLeft.text = text;
        popoverTextLeft.align = 2;
        return popoverTextLeft;
};
        static createTabs () {
    var movieClip, TAB_X_OFFSET, tabIndex, item, tabItems, tabButton, rawPopupClip, tabClip, tabIcon;
        movieClip = (this).getMovieClip();
        TAB_X_OFFSET = 5;
        tabIndex = 0;
        /* jump -> 0xc9b46 */
        item = /*iter*/ (ModMenuPopup).TAB_ITEMS;
        tabItems = ((ModMenuPopup).MOD_ITEMS).filter(function (i) {
        if ((!(i).disabled)) {
            return ((i).tabs).includes((item).id);
        } /* if 0xc9bab (open) */
});
        if ((tabItems.length === 0)) {
        } /* if 0xc9a18 */
        /* jump -> 0xc9b46 */
        tabButton = new (GameButton).GameButton();
        rawPopupClip = ((StringTable).StringTable).getMovieClip("sc/ui.sc", "popup_maintenance_tabs");
        tabClip = (rawPopupClip).getMovieClipByName("tab");
        (tabClip).gotoAndStopFrameIndex((+(!((item).id === (this).currentTabEnum))));
        if (((this).currentTabEnum === (item).id)) {
            this.currentTab = tabButton;
        } /* if 0xc9a8e */
        tabIcon = (item).getIcon();
        if (tabIcon) {
            (tabClip).getChildByName("icon").visibility = false;
            (tabClip).getChildByName("icon_inactive").visibility = false;
            (tabClip).addChild(tabIcon);
        } /* if 0xc9adb */
        (tabButton).setMovieClip(tabClip, true);
        tabButton.listener = function () {
    var previousItem, currentTabIcon, previousTabIcon;
        if (((tabButton).instance).equals(((this).currentTab).instance)) {
            return;
        } /* if 0xc9c02 */
        (((this).currentTab).getMovieClip()).gotoAndStopFrameIndex(1);
        ((tabButton).getMovieClip()).gotoAndStopFrameIndex(0);
        previousItem = ((ModMenuPopup).TAB_ITEMS).find(function (e) {
        return ((e).id === (this).currentTabEnum);
});
        if (previousItem) {
            currentTabIcon = (item).getIcon();
            previousTabIcon = (previousItem).getIcon();
            if (currentTabIcon) {
                if (previousTabIcon) {
                    ((tabButton).getMovieClip()).addChild(currentTabIcon);
                    (((this).currentTab).getMovieClip()).addChild(previousTabIcon);
                } /* if 0xc9ca0 */
            } /* if 0xc9ca0 */
        } /* if 0xc9ca0 */
        this.currentTab = tabButton;
        this.currentTabEnum = (item).id;
        return;
};
        tabButton.x = (((tabClip).width * tabIndex) + TAB_X_OFFSET);
        (movieClip).addChild(tabButton);
        tabIndex = ((tabIndex) + 1);
        (tabIndex++);
        } while (!tabButton);
        return;
};
        static createScrollArea () {
    var movieClip, scrollAreaClip;
        movieClip = (this).getMovieClip();
        scrollAreaClip = (movieClip).getTextFieldByName("scroll_area");
        this.scrollArea = new (ScrollArea).ScrollArea(scrollAreaClip, 1);
        ((this).scrollArea).enablePinching(false);
        ((this).scrollArea).enableHorizontalDrag(false);
        ((this).scrollArea).enableVerticalDrag(false);
        ((this).scrollArea).setAlignment(4);
        ((this).scrollArea).setClipping(true);
        return;
};
        static loadContent (selectedTab) {
    var tab, items, currentButtonX, buttonsInOneRow, currentHeight, BUTTON_INTERVAL_X, BUTTON_INTERVAL_Y, movieClip, subheading, item, button;
        ((this).scrollArea).removeAllContent();
        tab = ((ModMenuPopup).TAB_ITEMS).find(function (t) {
        return ((t).id === selectedTab);
});
        items = (this).getItemsForTab(selectedTab);
        currentButtonX = 0;
        buttonsInOneRow = 3;
        currentHeight = 0;
        BUTTON_INTERVAL_X = 83.3;
        BUTTON_INTERVAL_Y = 10;
        if (tab) {
            movieClip = (this).getMovieClip();
            subheading = (this).createSubheadingTextfield(((Localisation).Localisation).getString((tab).name), 35);
            BUTTON_INTERVAL_Y = (BUTTON_INTERVAL_Y + 45);
            subheading.x = ((movieClip).width / 2.99);
            subheading.y = 10;
            ((this).scrollArea).addContent(subheading);
        } /* if 0xc9f02 */
        /* jump -> 0xc9fcc */
        item = /*iter*/ items;
        if (!(item).disabled) {
            button = new (ModMenuItem).ModMenuItem({ name: (item).name, callback: (item).callback });
            button.listener = (item).callback;
            (button).setXY((((currentButtonX * (button).width) + BUTTON_INTERVAL_X) + ((button).width / 3)), (((currentHeight * (button).height) + BUTTON_INTERVAL_Y) + ((button).height / 2)));
            currentButtonX = ((currentButtonX) + 1);
            (currentButtonX++);
            if ((currentButtonX >= buttonsInOneRow)) {
                currentHeight = ((currentHeight) + 1);
                (currentHeight++);
                currentButtonX = 0;
            } /* if 0xc9fb8 */
            ((this).scrollArea).addContent(button);
            } while (!button);
        } /* if 0xc9fce */
        button = items;
        return;
};
        static getItemsForTab (tab) {
        if ((tab !== undefined)) {
            return ((ModMenuPopup).MOD_ITEMS).filter(function (e) {
        return ((e).tabs).includes(tab);
});
        } /* if 0xca064 */
        return (ModMenuPopup).MOD_ITEMS;
};
        static selectTab (tabId) {
        return;
};
        static updateElements (deltaTime) {
        if ((this).scrollArea) {
            ((this).scrollArea).update(deltaTime);
            return;
        } /* if 0xca0f9 (open) */
};
        static onBackButtonPressed () {
        return;
};
        <class_fields_init> = undefined;
        ModMenuPopup;
        class ModMenuPopup extends <class_fields_init> = (GenericPopup).GenericPopup {
            constructor () {
    var movieClip, this.active_func, new.target;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        this = super("popup_maintenance_tabs", false, false);
        if (<class_fields_init>) {
        } /* if 0xc8f31 */
        this.tabMappings = new Map();
        this.currentTabEnum = (ETab).LOBBY;
        movieClip = (this).getMovieClip();
        (movieClip).getChildByName("maintenance_timer").visibility = false;
        (movieClip).getChildByName("retry_button").visibility = false;
        (movieClip).getChildByName("tab").visibility = false;
        (movieClip).getChildByName("tab_2").visibility = false;
        (movieClip).getChildByName("tab_3").visibility = false;
        (this).createTabs();
        (this).createScrollArea();
        (this).loadContent((this).currentTabEnum);
        movieClip.scale = 0.95;
        movieClip.y = ((-(((Stage).Stage).getMatrixY() / 2)) + 20);
        (this).addBackButton();
        (this).addCloseButton();
        (this).addArrows();
        return this;
}
            onReloadGamePressed () {
        return;
}
            openThemesPopup () {
        return;
}
            openStatusesPopup () {
        if (((PlayerInfo).PlayerInfo).isInGameroom) {
            ((GUI).GUI).showPopup(new (StatusSelector).StatusSelectorPopup(), true, true, false);
            return;
        } /* if 0xca1d9 */
        ((GUI).GUI).showFloaterTextAtDefaultPosition(((Localisation).Localisation).getString("StatusesPopupErrorNotInTeam"));
        return;
}
            openBSDPlusManagementPopup () {
        return;
}
            openIconChanger () {
        return;
}
            openGatchaPopup () {
        return;
}
            openBattleServersPopup () {
        return;
}
            updateLatency () {
        ((Latency).Latency).test();
        return;
}
            openOutlineColorPopup () {
        return;
}
            showLatestUpdateChangelog () {
        return;
}
            showResetConfigPrompt () {
        return;
}
            hideOrShowDebugger () {
        return;
}
            clearDebugger () {
        return;
}
            openFaqDialog () {
        return;
}
            doDebugBilling (prodId) {
    var debugBillingRequestMessage;
        debugBillingRequestMessage = new (DebugBillingRequestMessage).DebugBillingRequestMessage();
        debugBillingRequestMessage.tid = (("fake-txid-" + (Math).floor(((Math).random() * (689547301 + 1)))) + 0);
        debugBillingRequestMessage.prodId = prodId;
        debugBillingRequestMessage.receiptData = [80, 57, 96, 19, 0, 96, 0, 0, 12, 0, 0, 0];
        return;
}
            doTestCase () {
        return;
}
            doGatchaDrop () {
        return;
}
            openStatsTrackersPopup () {
        return;
}
            openInputItemsPopup () {
        return;
}
            openBillingPackagesPopup () {
        return;
}
            openEnvironmentPopup () {
        return;
}
            openVisualNameChange () {
        return;
}
            openPlayerProfile () {
        return;
}
            linkBSDPlus () {
        return;
}
            openParticleStylePopup () {
        return;
}
            openFontSelector () {
        return;
}
            openSetTitleDialog () {
        return;
}
        }
        ModMenuPopup = ThemeSelector = ModMenuPopup;
        exports.ModMenuPopup = ModMenuPopup;
        ModMenuPopup.MOD_ITEMS = [{ name: "SwitchTheme", tabs: [(ETab).LOBBY], callback: (ModMenuPopup).openThemesPopup }, { name: "ParticleStylePopupButton", disabled: true, callback: (ModMenuPopup).openParticleStylePopup, tabs: [(ETab).LOBBY] }, { name: "OutlineColorPopupButton", callback: (ModMenuPopup).openOutlineColorPopup, tabs: [(ETab).LOBBY] }, { name: "StatusesPopupButton", callback: (ModMenuPopup).openStatusesPopup, tabs: [(ETab).LOBBY] }, { name: "VisualNameChange", callback: (ModMenuPopup).openVisualNameChange, tabs: [(ETab).LOBBY] }, { name: "UpdateLatency", callback: (ModMenuPopup).updateLatency, tabs: [(ETab).LOBBY] }, { name: "SelectFont", callback: (ModMenuPopup).openFontSelector, tabs: [(ETab).LOBBY] }, { name: "EnvironmentPopupButton", callback: (ModMenuPopup).openEnvironmentPopup, tabs: [(ETab).BATTLE] }, { name: "OutlineColorPopupButton", callback: (ModMenuPopup).openOutlineColorPopup, tabs: [(ETab).BATTLE] }, { name: "BattleServersPopup", callback: (ModMenuPopup).openBattleServersPopup, tabs: [(ETab).BATTLE] }, { name: "VisualNameChange", callback: (ModMenuPopup).openVisualNameChange, tabs: [(ETab).BATTLE] }, { name: "UpdateLatency", callback: (ModMenuPopup).updateLatency, tabs: [(ETab).BATTLE] }, { name: "SelectFont", callback: (ModMenuPopup).openFontSelector, tabs: [(ETab).BATTLE] }, { name: "SetTitle", callback: (ModMenuPopup).openSetTitleDialog, tabs: [(ETab).BATTLE] }, { name: "OpenPlayerProfile", callback: (ModMenuPopup).openPlayerProfile, tabs: [(ETab).OTHER] }, { name: "IconChangerButton", disabled: ((Process).platform === "darwin"), callback: (ModMenuPopup).openIconChanger, tabs: [(ETab).OTHER] }, { name: "GatchaPopup", callback: (ModMenuPopup).openGatchaPopup, tabs: [(ETab).OTHER] }, { name: "StatsTrackersButton", callback: (ModMenuPopup).openStatsTrackersPopup, tabs: [(ETab).OTHER] }, { name: "ManageBSDPlus", disabled: false, callback: (ModMenuPopup).openBSDPlusManagementPopup, tabs: [(ETab).CONFIG] }, { name: "ReloadGame", callback: (ModMenuPopup).onReloadGamePressed, tabs: [(ETab).CONFIG] }, { name: "LatestUpdate", callback: (ModMenuPopup).showLatestUpdateChangelog, tabs: [(ETab).CONFIG] }, { name: "ResetConfig", callback: (ModMenuPopup).showResetConfigPrompt, tabs: [(ETab).CONFIG] }, { name: "FaqButton", callback: (ModMenuPopup).openFaqDialog, tabs: [(ETab).CONFIG] }];
        ModMenuPopup.getIcon = { id: (ETab).LOBBY, name: "LobbyTab" };
        ModMenuPopup.getIcon = { id: (ETab).BATTLE, name: "BattleTab" };
        ModMenuPopup.getIcon = { id: (ETab).OTHER, name: "OtherTab" };
        ModMenuPopup.getIcon = { id: (ETab).CONFIG, name: "ConfigTab" };
        GenericPopup = Stage = StringTable = ScrollArea = GameButton = GUI = GameMain = ModMenuItem = ThemeSelector = Config = ModProperties = PlayerInfo = StatusSelector = Localisation = IconSelector = Gatcha = BattleServers = Latency = OutlineColorPopup = NativeDialog = EDebugger = DebugBillingRequestMessage = MessageManager = StatsTrackers = InputItemsPopup = BillingPackages = EnvironmentEditor = ParticleStyle = InputPopup = FontManager = FontSelector = index = BSDPlusManagementPopup = ModMenuPopup = <underflow>.TAB_ITEMS = [ModMenuPopup = exports, exports, ModMenuPopup, ModMenuPopup];
        return;
};

// --------------------- MODULE 8016 — ModMenuLegacy ---------------------

// ============================================================ //
// webpack module 8016  —  ModMenuLegacy
// exports: ModMenuPopupLegacy
// deps: 194 (IconSelector), 2214 (ModProperties), 3309 (OutlineColorPopup), 3902 (NativeDialog), 4009 (Config), 4233 (DebugBillingRequestMessage), 4272 (EDebugger), 4934 (GUI), 5039 (GameButton), 5240 (EnvironmentEditor), 5291 (ParticleStyle), 5565 (ModMenuItem), 6265 (StatusSelector), 6270 (InputItemsPopup), 6988 (Gatcha), 7265 (Localisation), 8203 (ModMenu), 8261 (ListContainerPopup), 8486 (BillingPackages), 8775 (GameMain) ...
// ============================================================ //

__webpack_modules__[8016] = function ModMenuLegacy_factory(__unused_webpack_module, exports, __webpack_require__) {
    var ListContainerPopup, ModMenuItem, Localisation, Config, GameButton, EDebugger, PlayerInfo, GUI, NativeDialog, Latency, ModProperties, GameMain, ThemeSelector, StatusSelector, Gatcha, StatsTrackers, OutlineColorPopup, InputItemsPopup, BattleServers, DebugBillingRequestMessage, MessageManager, BillingPackages, EnvironmentEditor, ParticleStyle, IconSelector, ModMenu, ModMenuPopupLegacy, <class_fields_init>, ModMenuPopupLegacy;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.ModMenuPopupLegacy = undefined;
        ListContainerPopup = __webpack_require__(8261);
        ModMenuItem = __webpack_require__(5565);
        Localisation = __webpack_require__(7265);
        Config = __webpack_require__(4009);
        GameButton = __webpack_require__(5039);
        EDebugger = __webpack_require__(4272);
        PlayerInfo = __webpack_require__(9518);
        GUI = __webpack_require__(4934);
        NativeDialog = __webpack_require__(3902);
        Latency = __webpack_require__(9322);
        ModProperties = __webpack_require__(2214);
        GameMain = __webpack_require__(8775);
        ThemeSelector = __webpack_require__(9244);
        StatusSelector = __webpack_require__(6265);
        Gatcha = __webpack_require__(6988);
        StatsTrackers = __webpack_require__(9634);
        OutlineColorPopup = __webpack_require__(3309);
        InputItemsPopup = __webpack_require__(6270);
        BattleServers = __webpack_require__(9698);
        DebugBillingRequestMessage = __webpack_require__(4233);
        MessageManager = __webpack_require__(9168);
        BillingPackages = __webpack_require__(8486);
        EnvironmentEditor = __webpack_require__(5240);
        ParticleStyle = __webpack_require__(5291);
        IconSelector = __webpack_require__(194);
        ModMenu = __webpack_require__(8203);
        static refreshItems () {
    var index, item, button, naviHeight;
        ((this).container).clearEntries();
        /* jump -> 0xcb275 */
        /*iter*/ /*iter*/ ((ModMenuPopupLegacy).modMenuItemsArray).entries();
        index = /*iter*/ ((ModMenuPopupLegacy).modMenuItemsArray).entries();
        ((ModMenuPopupLegacy).modMenuItemsArray).entries();
        item = index = item = naviHeight = <underflow>;
        if (!(item).disabled) {
            button = new (ModMenuItem).ModMenuItem(item);
            (button).setCustomButtonListener((ModMenuPopupLegacy).buttonPressed, ("modmenu_").concat(((Localisation).Localisation).getString((item).name)));
            button.id = index;
            ((this).container).addEntry(button);
        } /* if 0xcb274 */
        } while (!button);
        button = <underflow>;
        naviHeight = (this).getNaviHeight();
        ((this).container).refreshEntryPositions(3, naviHeight, 8, 0, 0, 0, -1);
        return;
};
        <class_fields_init> = undefined;
        ModMenuPopupLegacy;
        class ModMenuPopupLegacy extends <class_fields_init> = (ListContainerPopup).ListContainerPopup {
            constructor () {
    var this.active_func, new.target;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        this = super({ Title: ((Localisation).Localisation).getString("ModMenuPopupTitle"), ExportName: "country_popup" });
        if (<class_fields_init>) {
        } /* if 0xcb157 */
        (this).adjustPopupHeaderButtons("mod_menu");
        (this).refreshItems();
        ModMenuPopupLegacy.instance = this;
        return this;
}
            buttonPressed (self, button) {
    var modMenuButton;
        modMenuButton = new (GameButton).GameButton(button);
        return;
}
            onReloadGamePressed () {
        return;
}
            openThemesPopup () {
        return;
}
            openStatusesPopup () {
        if (((PlayerInfo).PlayerInfo).isInGameroom) {
            ((GUI).GUI).showPopup(new (StatusSelector).StatusSelectorPopup(), true, true, false);
            return;
        } /* if 0xcb3d4 */
        ((GUI).GUI).showFloaterTextAtDefaultPosition(((Localisation).Localisation).getString("StatusesPopupErrorNotInTeam"));
        return;
}
            openIconChanger () {
        return;
}
            openGatchaPopup () {
        return;
}
            openBattleServersPopup () {
        return;
}
            updateLatency () {
        ((Latency).Latency).test();
        return;
}
            openOutlineColorPopup () {
        return;
}
            showLatestUpdateChangelog () {
        return;
}
            showResetConfigPrompt () {
        return;
}
            hideOrShowDebugger () {
        return;
}
            clearDebugger () {
        return;
}
            openFaqDialog () {
        return;
}
            doDebugBilling (prodId) {
    var debugBillingRequestMessage;
        debugBillingRequestMessage = new (DebugBillingRequestMessage).DebugBillingRequestMessage();
        debugBillingRequestMessage.tid = (("fake-txid-" + (Math).floor(((Math).random() * (689547301 + 1)))) + 0);
        debugBillingRequestMessage.prodId = prodId;
        debugBillingRequestMessage.receiptData = [80, 57, 96, 19, 0, 96, 0, 0, 12, 0, 0, 0];
        return;
}
            doTestCase () {
    var penis;
        penis = new (ModMenu).ModMenuPopup();
        return;
}
            doGatchaDrop () {
        return;
}
            openStatsTrackersPopup () {
        return;
}
            openInputItemsPopup () {
        return;
}
            openBillingPackagesPopup () {
        return;
}
            openEnvironmentPopup () {
        return;
}
            openParticleStylePopup () {
        return;
}
        }
        ModMenuPopupLegacy = NativeDialog = ModMenuPopupLegacy;
        exports.ModMenuPopupLegacy = ModMenuPopupLegacy;
        ModMenuPopupLegacy.modMenuItemsArray = [{ name: "ReloadGame", disabled: false, callback: (ModMenuPopupLegacy).onReloadGamePressed }, { name: "SwitchTheme", disabled: false, callback: (ModMenuPopupLegacy).openThemesPopup }, { name: "StatusesPopupButton", disabled: false, callback: (ModMenuPopupLegacy).openStatusesPopup }, { name: "IconChangerButton", disabled: ((Process).platform === "darwin"), callback: (ModMenuPopupLegacy).openIconChanger }, { name: "BattleServersPopup", disabled: false, callback: (ModMenuPopupLegacy).openBattleServersPopup }, { name: "GatchaPopup", disabled: false, callback: (ModMenuPopupLegacy).openGatchaPopup }, { name: "StatsTrackersButton", disabled: false, callback: (ModMenuPopupLegacy).openStatsTrackersPopup }, { name: "UpdateLatency", disabled: false, callback: (ModMenuPopupLegacy).updateLatency }, { name: "OutlineColorPopupButton", disabled: false, callback: (ModMenuPopupLegacy).openOutlineColorPopup }, { name: "InputItemsPopupButton", disabled: false, callback: (ModMenuPopupLegacy).openInputItemsPopup }, { name: "EnvironmentPopupButton", disabled: false, callback: (ModMenuPopupLegacy).openEnvironmentPopup }, { name: "ParticleStylePopupButton", disabled: false, callback: (ModMenuPopupLegacy).openParticleStylePopup }, { name: "LatestUpdate", disabled: false, callback: (ModMenuPopupLegacy).showLatestUpdateChangelog }, { name: "ResetConfig", disabled: false, callback: (ModMenuPopupLegacy).showResetConfigPrompt }, { name: "FaqButton", disabled: false, callback: (ModMenuPopupLegacy).openFaqDialog }, { name: "TestButton", disabled: (!(((Config).Config).useDebugLoggingVersions).includes(((ModProperties).ModProperties).environment)), callback: (ModMenuPopupLegacy).doTestCase }, { name: "Debug Billing", disabled: (!(((Config).Config).useDebugLoggingVersions).includes(((ModProperties).ModProperties).environment)), callback: (ModMenuPopupLegacy).openBillingPackagesPopup }, { name: "Hide/Show debug HUD", disabled: (!((Config).Config).useDebugLogging), callback: (ModMenuPopupLegacy).hideOrShowDebugger }, { name: "Clear debug Logs", disabled: (!((Config).Config).useDebugLogging), callback: (ModMenuPopupLegacy).clearDebugger }];
        return;
};

// --------------------- MODULE 5565 — ModMenuItem ---------------------

// ============================================================ //
// webpack module 5565  —  ModMenuItem
// exports: ModMenuItem
// deps: 5039 (GameButton), 7265 (Localisation), 8261 (ListContainerPopup), 9250 (StringTable)
// ============================================================ //

__webpack_modules__[5565] = function ModMenuItem_factory(__unused_webpack_module, exports, __webpack_require__) {
    var GameButton, ListContainerPopup, StringTable, Localisation, ModMenuItem, <class_fields_init>, ModMenuItem;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.ModMenuItem = undefined;
        GameButton = __webpack_require__(5039);
        ListContainerPopup = __webpack_require__(8261);
        StringTable = __webpack_require__(9250);
        Localisation = __webpack_require__(7265);
        <class_fields_init> = undefined;
        ModMenuItem;
        class ModMenuItem extends <class_fields_init> = (GameButton).GameButton {
            constructor (buttonConf) {
    var buttonMovieClip, textField, this.active_func, new.target;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        this = super();
        if (<class_fields_init>) {
        } /* if 0xb4e7f */
        this.name = "";
        this.disabled = false;
        ((this).instance).writePointer((ListContainerPopup).countryPopupListItemVtableAddr);
        buttonMovieClip = ((StringTable).StringTable).getMovieClip("sc/ui.sc", "country_item");
        (this).setMovieClip((buttonMovieClip).instance, 1);
        textField = (buttonMovieClip).getTextFieldByName("Text");
        textField.colorTag = true;
        (textField).setTextScaleIfNecessary(((Localisation).Localisation).getString((buttonConf).name));
        (buttonMovieClip).gotoAndStopFrameIndex(1);
        if ((((buttonConf).name) == null)) {
            this.name = "";
        } /* if 0xb4f34 */
        if ((((buttonConf).disabled) == null)) {
            this.disabled = false;
        } /* if 0xb4f48 */
        this.callback = (buttonConf).callback;
        return this;
}
        }
        ModMenuItem = v8 = ModMenuItem;
        exports.ModMenuItem = ModMenuItem;
        return;
};

