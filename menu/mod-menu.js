var ETab = { LOBBY: 0, BATTLE: 1, OTHER: 2, CONFIG: 3 };

class ModMenuPopup extends GenericPopup {
    constructor() {
        super("popup_maintenance_tabs", false, false);
        this.tabMappings = new Map();
        this.currentTabEnum = ETab.LOBBY;
        var movieClip = this.getMovieClip();
        movieClip.getChildByName("maintenance_timer").visibility = false;
        movieClip.getChildByName("retry_button").visibility = false;
        movieClip.getChildByName("tab").visibility = false;
        movieClip.getChildByName("tab_2").visibility = false;
        movieClip.getChildByName("tab_3").visibility = false;
        this.createTabs();
        this.createScrollArea();
        this.loadContent(this.currentTabEnum);
        movieClip.scale = 0.95;
        movieClip.y = -(Stage.getMatrixY() / 2) + 20;
        this.addBackButton();
        this.addCloseButton();
        this.addArrows();
    }
    static onReloadGamePressed() {
        return;
    }
    static openThemesPopup() {
        return;
    }
    static openStatusesPopup() {
        if (PlayerInfo.isInGameroom) {
            GUI.showPopup(new StatusSelectorPopup(), true, true, false);
            return;
        }
        GUI.showFloaterTextAtDefaultPosition(Localisation.getString("StatusesPopupErrorNotInTeam"));
    }
    static openBSDPlusManagementPopup() {
        return;
    }
    static openIconChanger() {
        return;
    }
    static openGatchaPopup() {
        return;
    }
    static openBattleServersPopup() {
        return;
    }
    static updateLatency() {
        Latency.test();
    }
    static openOutlineColorPopup() {
        return;
    }
    static showLatestUpdateChangelog() {
        return;
    }
    static showResetConfigPrompt() {
        return;
    }
    static hideOrShowDebugger() {
        return;
    }
    static clearDebugger() {
        return;
    }
    static openFaqDialog() {
        return;
    }
    static doDebugBilling(prodId) {
        var debugBillingRequestMessage = new DebugBillingRequestMessage();
        debugBillingRequestMessage.tid = "fake-txid-" + Math.floor(Math.random() * (689547301 + 1)) + 0;
        debugBillingRequestMessage.prodId = prodId;
        debugBillingRequestMessage.receiptData = [80, 57, 96, 19, 0, 96, 0, 0, 12, 0, 0, 0];
    }
    static doTestCase() {
        return;
    }
    static doGatchaDrop() {
        return;
    }
    static openStatsTrackersPopup() {
        return;
    }
    static openInputItemsPopup() {
        return;
    }
    static openBillingPackagesPopup() {
        return;
    }
    static openEnvironmentPopup() {
        return;
    }
    static openVisualNameChange() {
        return;
    }
    static openPlayerProfile() {
        return;
    }
    static linkBSDPlus() {
        return;
    }
    static openParticleStylePopup() {
        return;
    }
    static openFontSelector() {
        return;
    }
    static openSetTitleDialog() {
        return;
    }
    addBackButton() {
        var movieClip = this.getMovieClip();
        var backButton = new GameButton();
        var backMovieClip = movieClip.getMovieClipByName("back_button");
        backButton.setMovieClip(backMovieClip, true);
        backButton.listener = this.onBackButtonPressed.bind(this);
    }
    addCloseButton() {
        var movieClip = this.getMovieClip();
        var clubLeaguePopup = StringTable.getMovieClip("sc/ui.sc", "club_league_registration_closed_popup");
        var closeButtonClip = clubLeaguePopup.getMovieClipByName("close_button");
        var rawPopupClip = StringTable.getMovieClip("sc/ui.sc", "popup_maintenance_tabs");
        var backMovieClip = rawPopupClip.getMovieClipByName("back_button");
        closeButtonClip.scale = 0.95;
        closeButtonClip.x = movieClip.width / 2 - closeButtonClip.width / 4.5;
        closeButtonClip.y = backMovieClip.y + 1;
        var closeButton = new GameButton();
        closeButton.setMovieClip(closeButtonClip, true);
        closeButton.listener = function () {
            return;
        };
    }
    addArrows() {
        var movieClip = this.getMovieClip();
        var recruitRoadPopup = StringTable.getMovieClip("sc/ui.sc", "recruit_road_future_purchase_popup");
        var recruitRoadPopup1 = StringTable.getMovieClip("sc/ui.sc", "recruit_road_future_purchase_popup");
        var arrowLeftClip = recruitRoadPopup.getMovieClipByName("arrow_left");
        arrowLeftClip.gotoAndStopFrameIndex(0);
        arrowLeftClip.scale = 1.5;
        arrowLeftClip.x = arrowLeftClip.x + 16;
        arrowLeftClip.y = 313;
        var arrowRightClip = recruitRoadPopup.getMovieClipByName("arrow_right");
        arrowRightClip.gotoAndStopFrameIndex(0);
        arrowRightClip.scaleX = -1.5;
        arrowRightClip.scaleY = 1.5;
        arrowRightClip.x = 358;
        arrowRightClip.y = 313;
        var arrowHitboxLeftClip = recruitRoadPopup1.getMovieClipByName("arrow_left");
        arrowHitboxLeftClip.gotoAndStopFrameIndex(0);
        arrowHitboxLeftClip.scale = 3;
        arrowHitboxLeftClip.x = arrowHitboxLeftClip.x + 16;
        arrowHitboxLeftClip.y = 313;
        var arrowHitboxRightClip = recruitRoadPopup1.getMovieClipByName("arrow_right");
        arrowHitboxRightClip.gotoAndStopFrameIndex(0);
        arrowHitboxRightClip.scaleX = -3;
        arrowHitboxRightClip.scaleY = 3;
        arrowHitboxRightClip.x = 358;
        arrowHitboxRightClip.y = 313;
        var arrowLeft = new GameButton();
        arrowLeft.setMovieClip(arrowLeftClip, true);
        arrowLeft.listener = this.previousTab.bind(this);
        var arrowRight = new GameButton();
        arrowRight.setMovieClip(arrowRightClip, true);
        arrowRight.listener = this.nextTab.bind(this);
        var arrowHitboxLeft = new GameButton();
        arrowHitboxLeft.setMovieClip(arrowHitboxLeftClip, true);
        arrowHitboxLeft.listener = this.previousTab.bind(this);
        arrowHitboxLeft.alpha = 0;
        var arrowHitboxRight = new GameButton();
        arrowHitboxRight.setMovieClip(arrowHitboxRightClip, true);
        arrowHitboxRight.listener = this.nextTab.bind(this);
        arrowHitboxRight.alpha = 0;
        movieClip.addChild(arrowLeft);
        movieClip.addChild(arrowRight);
        movieClip.addChild(arrowHitboxLeft);
    }
    previousTab() {
        var currentTabEnum = this.currentTabEnum;
        var currentTabIndex = ModMenuPopup.TAB_ITEMS.findIndex(function (t) {
            return t.id === currentTabEnum;
        });
        var previousIndex = currentTabIndex - 1;
        if (previousIndex < 0) {
            previousIndex = ModMenuPopup.TAB_ITEMS.length - 1;
        }
    }
    nextTab() {
        var currentTabEnum = this.currentTabEnum;
        var currentTabIndex = ModMenuPopup.TAB_ITEMS.findIndex(function (t) {
            return t.id === currentTabEnum;
        });
        var nextIndex = currentTabIndex + 1;
        if (nextIndex >= ModMenuPopup.TAB_ITEMS.length) {
            nextIndex = 0;
        }
    }
    changeTab(nextIndex) {
        var newTabButton = this.tabMappings.get(nextIndex);
        if (!newTabButton) {
            return;
        }
        this.currentTab.getMovieClip().gotoAndStopFrameIndex(1);
        newTabButton.getMovieClip().gotoAndStopFrameIndex(0);
        var nextItem = ModMenuPopup.TAB_ITEMS.find(function (t) {
            return t.id === nextIndex;
        });
        var currentItem = ModMenuPopup.TAB_ITEMS.find((t) => t.id === this.currentTabEnum);
        if (nextItem) {
            if (currentItem) {
                var currentTabIcon = nextItem.getIcon();
                var previousTabIcon = currentItem.getIcon();
                if (currentTabIcon) {
                    if (previousTabIcon) {
                        newTabButton.getMovieClip().addChild(currentTabIcon);
                        this.currentTab.getMovieClip().addChild(previousTabIcon);
                    }
                }
            }
        }
        this.currentTab = newTabButton;
        this.currentTabEnum = nextIndex;
    }
    createSubheadingTextfield(text, fontSize) {
        if (fontSize === undefined) {
            fontSize = 30;
        }
        var popoverTextLeft = StringTable.getMovieClip("sc/ui.sc", "popover_text_left");
        var textField = popoverTextLeft.getTextFieldByName("text");
        textField.color = 4294967295.0;
        textField.fontOutline = true;
        textField.fontSize = fontSize;
        textField.text = text;
        textField.align = 2;
        return textField;
    }
    createTabs() {
        var movieClip = this.getMovieClip();
        var TAB_X_OFFSET = 5;
        var tabIndex = 0;
        for (var item of ModMenuPopup.TAB_ITEMS) {
            var tabItems = ModMenuPopup.MOD_ITEMS.filter(function (i) {
                if (!i.disabled) {
                    return i.tabs.includes(item.id);
                }
            });
            if (tabItems.length === 0) {
                continue;
            }
            var tabButton = new GameButton();
            var rawPopupClip = StringTable.getMovieClip("sc/ui.sc", "popup_maintenance_tabs");
            var tabClip = rawPopupClip.getMovieClipByName("tab");
            tabClip.gotoAndStopFrameIndex(+!(item.id === this.currentTabEnum));
            if (this.currentTabEnum === item.id) {
                this.currentTab = tabButton;
            }
            var tabIcon = item.getIcon();
            if (tabIcon) {
                tabClip.getChildByName("icon").visibility = false;
                tabClip.getChildByName("icon_inactive").visibility = false;
                tabClip.addChild(tabIcon);
            }
            tabButton.setMovieClip(tabClip, true);
            tabButton.listener = () => {
                if (tabButton.instance.equals(this.currentTab.instance)) {
                    return;
                }
                this.currentTab.getMovieClip().gotoAndStopFrameIndex(1);
                tabButton.getMovieClip().gotoAndStopFrameIndex(0);
                var previousItem = ModMenuPopup.TAB_ITEMS.find((e) => e.id === this.currentTabEnum);
                if (previousItem) {
                    var currentTabIcon = item.getIcon();
                    var previousTabIcon = previousItem.getIcon();
                    if (currentTabIcon) {
                        if (previousTabIcon) {
                            tabButton.getMovieClip().addChild(currentTabIcon);
                            this.currentTab.getMovieClip().addChild(previousTabIcon);
                        }
                    }
                }
                this.currentTab = tabButton;
                this.currentTabEnum = item.id;
            };
            tabButton.x = tabClip.width * tabIndex + TAB_X_OFFSET;
            movieClip.addChild(tabButton);
            tabIndex++;
        }
    }
    createScrollArea() {
        var movieClip = this.getMovieClip();
        var scrollAreaClip = movieClip.getTextFieldByName("scroll_area");
        this.scrollArea = new ScrollArea(scrollAreaClip, 1);
        this.scrollArea.enablePinching(false);
        this.scrollArea.enableHorizontalDrag(false);
        this.scrollArea.enableVerticalDrag(false);
        this.scrollArea.setAlignment(4);
        this.scrollArea.setClipping(true);
    }
    loadContent(selectedTab) {
        this.scrollArea.removeAllContent();
        var tab = ModMenuPopup.TAB_ITEMS.find(function (t) {
            return t.id === selectedTab;
        });
        var items = this.getItemsForTab(selectedTab);
        var currentButtonX = 0;
        var buttonsInOneRow = 3;
        var currentHeight = 0;
        var BUTTON_INTERVAL_X = 83.3;
        var BUTTON_INTERVAL_Y = 10;
        if (tab) {
            var movieClip = this.getMovieClip();
            var subheading = this.createSubheadingTextfield(Localisation.getString(tab.name), 35);
            BUTTON_INTERVAL_Y = BUTTON_INTERVAL_Y + 45;
            subheading.x = movieClip.width / 2.99;
            subheading.y = 10;
            this.scrollArea.addContent(subheading);
        }
        for (var item of items) {
            if (!item.disabled) {
                var button = new ModMenuItem({ name: item.name, callback: item.callback });
                button.listener = item.callback;
                button.setXY(currentButtonX * button.width + BUTTON_INTERVAL_X + button.width / 3, currentHeight * button.height + BUTTON_INTERVAL_Y + button.height / 2);
                currentButtonX++;
                if (currentButtonX >= buttonsInOneRow) {
                    currentHeight++;
                    currentButtonX = 0;
                }
                this.scrollArea.addContent(button);
            }
        }
    }
    getItemsForTab(tab) {
        if (tab !== undefined) {
            return ModMenuPopup.MOD_ITEMS.filter(function (e) {
                return e.tabs.includes(tab);
            });
        }
        return ModMenuPopup.MOD_ITEMS;
    }
    selectTab(tabId) {
        return;
    }
    updateElements(deltaTime) {
        if (this.scrollArea) {
            this.scrollArea.update(deltaTime);
            return;
        }
    }
    onBackButtonPressed() {
        return;
    }
}
ModMenuPopup.MOD_ITEMS = [{ name: "SwitchTheme", tabs: [ETab.LOBBY], callback: ModMenuPopup.openThemesPopup }, { name: "ParticleStylePopupButton", disabled: true, callback: ModMenuPopup.openParticleStylePopup, tabs: [ETab.LOBBY] }, { name: "OutlineColorPopupButton", callback: ModMenuPopup.openOutlineColorPopup, tabs: [ETab.LOBBY] }, { name: "StatusesPopupButton", callback: ModMenuPopup.openStatusesPopup, tabs: [ETab.LOBBY] }, { name: "VisualNameChange", callback: ModMenuPopup.openVisualNameChange, tabs: [ETab.LOBBY] }, { name: "UpdateLatency", callback: ModMenuPopup.updateLatency, tabs: [ETab.LOBBY] }, { name: "SelectFont", callback: ModMenuPopup.openFontSelector, tabs: [ETab.LOBBY] }, { name: "EnvironmentPopupButton", callback: ModMenuPopup.openEnvironmentPopup, tabs: [ETab.BATTLE] }, { name: "OutlineColorPopupButton", callback: ModMenuPopup.openOutlineColorPopup, tabs: [ETab.BATTLE] }, { name: "BattleServersPopup", callback: ModMenuPopup.openBattleServersPopup, tabs: [ETab.BATTLE] }, { name: "VisualNameChange", callback: ModMenuPopup.openVisualNameChange, tabs: [ETab.BATTLE] }, { name: "UpdateLatency", callback: ModMenuPopup.updateLatency, tabs: [ETab.BATTLE] }, { name: "SelectFont", callback: ModMenuPopup.openFontSelector, tabs: [ETab.BATTLE] }, { name: "SetTitle", callback: ModMenuPopup.openSetTitleDialog, tabs: [ETab.BATTLE] }, { name: "OpenPlayerProfile", callback: ModMenuPopup.openPlayerProfile, tabs: [ETab.OTHER] }, { name: "IconChangerButton", disabled: Process.platform === "darwin", callback: ModMenuPopup.openIconChanger, tabs: [ETab.OTHER] }, { name: "GatchaPopup", callback: ModMenuPopup.openGatchaPopup, tabs: [ETab.OTHER] }, { name: "StatsTrackersButton", callback: ModMenuPopup.openStatsTrackersPopup, tabs: [ETab.OTHER] }, { name: "ManageBSDPlus", disabled: false, callback: ModMenuPopup.openBSDPlusManagementPopup, tabs: [ETab.CONFIG] }, { name: "ReloadGame", callback: ModMenuPopup.onReloadGamePressed, tabs: [ETab.CONFIG] }, { name: "LatestUpdate", callback: ModMenuPopup.showLatestUpdateChangelog, tabs: [ETab.CONFIG] }, { name: "ResetConfig", callback: ModMenuPopup.showResetConfigPrompt, tabs: [ETab.CONFIG] }, { name: "FaqButton", callback: ModMenuPopup.openFaqDialog, tabs: [ETab.CONFIG] }];
ModMenuPopup.TAB_ITEMS = [
    { id: ETab.LOBBY, name: "LobbyTab" },
    { id: ETab.BATTLE, name: "BattleTab" },
    { id: ETab.OTHER, name: "OtherTab" },
    { id: ETab.CONFIG, name: "ConfigTab" }
];

class ModMenuPopupLegacy extends ListContainerPopup {
    constructor() {
        super({ Title: Localisation.getString("ModMenuPopupTitle"), ExportName: "country_popup" });
        this.adjustPopupHeaderButtons("mod_menu");
        this.refreshItems();
        ModMenuPopupLegacy.instance = this;
    }
    refreshItems() {
        this.container.clearEntries();
        for (var [index, item] of ModMenuPopupLegacy.modMenuItemsArray.entries()) {
            if (!item.disabled) {
                var button = new ModMenuItem(item);
                button.setCustomButtonListener(ModMenuPopupLegacy.buttonPressed, "modmenu_".concat(Localisation.getString(item.name)));
                button.id = index;
                this.container.addEntry(button);
            }
        }
        var naviHeight = this.getNaviHeight();
        this.container.refreshEntryPositions(3, naviHeight, 8, 0, 0, 0, -1);
    }
    static buttonPressed(self, button) {
        var modMenuButton = new GameButton(button);
    }
    static onReloadGamePressed() {
        return;
    }
    static openThemesPopup() {
        return;
    }
    static openStatusesPopup() {
        if (PlayerInfo.isInGameroom) {
            GUI.showPopup(new StatusSelectorPopup(), true, true, false);
            return;
        }
        GUI.showFloaterTextAtDefaultPosition(Localisation.getString("StatusesPopupErrorNotInTeam"));
    }
    static openIconChanger() {
        return;
    }
    static openGatchaPopup() {
        return;
    }
    static openBattleServersPopup() {
        return;
    }
    static updateLatency() {
        Latency.test();
    }
    static openOutlineColorPopup() {
        return;
    }
    static showLatestUpdateChangelog() {
        return;
    }
    static showResetConfigPrompt() {
        return;
    }
    static hideOrShowDebugger() {
        return;
    }
    static clearDebugger() {
        return;
    }
    static openFaqDialog() {
        return;
    }
    static doDebugBilling(prodId) {
        var debugBillingRequestMessage = new DebugBillingRequestMessage();
        debugBillingRequestMessage.tid = "fake-txid-" + Math.floor(Math.random() * (689547301 + 1)) + 0;
        debugBillingRequestMessage.prodId = prodId;
        debugBillingRequestMessage.receiptData = [80, 57, 96, 19, 0, 96, 0, 0, 12, 0, 0, 0];
    }
    static doTestCase() {
        var penis = new ModMenuPopup();
    }
    static doGatchaDrop() {
        return;
    }
    static openStatsTrackersPopup() {
        return;
    }
    static openInputItemsPopup() {
        return;
    }
    static openBillingPackagesPopup() {
        return;
    }
    static openEnvironmentPopup() {
        return;
    }
    static openParticleStylePopup() {
        return;
    }
}
ModMenuPopupLegacy.modMenuItemsArray = [{ name: "ReloadGame", disabled: false, callback: ModMenuPopupLegacy.onReloadGamePressed }, { name: "SwitchTheme", disabled: false, callback: ModMenuPopupLegacy.openThemesPopup }, { name: "StatusesPopupButton", disabled: false, callback: ModMenuPopupLegacy.openStatusesPopup }, { name: "IconChangerButton", disabled: Process.platform === "darwin", callback: ModMenuPopupLegacy.openIconChanger }, { name: "BattleServersPopup", disabled: false, callback: ModMenuPopupLegacy.openBattleServersPopup }, { name: "GatchaPopup", disabled: false, callback: ModMenuPopupLegacy.openGatchaPopup }, { name: "StatsTrackersButton", disabled: false, callback: ModMenuPopupLegacy.openStatsTrackersPopup }, { name: "UpdateLatency", disabled: false, callback: ModMenuPopupLegacy.updateLatency }, { name: "OutlineColorPopupButton", disabled: false, callback: ModMenuPopupLegacy.openOutlineColorPopup }, { name: "InputItemsPopupButton", disabled: false, callback: ModMenuPopupLegacy.openInputItemsPopup }, { name: "EnvironmentPopupButton", disabled: false, callback: ModMenuPopupLegacy.openEnvironmentPopup }, { name: "ParticleStylePopupButton", disabled: false, callback: ModMenuPopupLegacy.openParticleStylePopup }, { name: "LatestUpdate", disabled: false, callback: ModMenuPopupLegacy.showLatestUpdateChangelog }, { name: "ResetConfig", disabled: false, callback: ModMenuPopupLegacy.showResetConfigPrompt }, { name: "FaqButton", disabled: false, callback: ModMenuPopupLegacy.openFaqDialog }, { name: "TestButton", disabled: !Config.useDebugLoggingVersions.includes(ModProperties.environment), callback: ModMenuPopupLegacy.doTestCase }, { name: "Debug Billing", disabled: !Config.useDebugLoggingVersions.includes(ModProperties.environment), callback: ModMenuPopupLegacy.openBillingPackagesPopup }, { name: "Hide/Show debug HUD", disabled: !Config.useDebugLogging, callback: ModMenuPopupLegacy.hideOrShowDebugger }, { name: "Clear debug Logs", disabled: !Config.useDebugLogging, callback: ModMenuPopupLegacy.clearDebugger }];

class ModMenuItem extends GameButton {
    constructor(buttonConf) {
        super();
        this.name = "";
        this.disabled = false;
        this.instance.writePointer(ListContainerPopup.countryPopupListItemVtableAddr);
        var buttonMovieClip = StringTable.getMovieClip("sc/ui.sc", "country_item");
        this.setMovieClip(buttonMovieClip.instance, 1);
        var textField = buttonMovieClip.getTextFieldByName("Text");
        textField.colorTag = true;
        textField.setTextScaleIfNecessary(Localisation.getString(buttonConf.name));
        buttonMovieClip.gotoAndStopFrameIndex(1);
        if (buttonConf.name == null) {
            this.name = "";
        } else {
            this.name = buttonConf.name;
        }
        if (buttonConf.disabled == null) {
            this.disabled = false;
        } else {
            this.disabled = buttonConf.disabled;
        }
        this.callback = buttonConf.callback;
    }
}
