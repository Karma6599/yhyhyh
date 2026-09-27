var RECENT_BUTTON_PREFIX = "RECENT: ";

class DebugMenu extends DebugMenuBase {
    constructor() {
        super("sc/debug.sc", "debug_menu");
        this.setTitle("Debug Menu");
        var textField = this.movieClip.getTextFieldByName("version");
        if (textField) {
            textField.text = "BSD ".concat(ModProperties.version);
            textField.color = 4278255375.0;
            this.movieClip.addChild(new MovieClip(textField.instance));
        }
        this.toggleDebugMenuButton = new ToggleDebugMenuButton();
        var closeBtn = this.movieClip.getChildByName("close_button");
        if (closeBtn) {
            this.toggleDebugMenuButton.setMovieClip(new MovieClip(closeBtn.instance), true);
            this.movieClip.addChild(this.toggleDebugMenuButton);
        }
        this.createTopLevelButtons();
        this.createCategoryButtons();
        this.createTsResourceButtons();
        this.createTsUnlockButtons();
        this.rebuildRecentCategory();
        this.searchHelpField = this.movieClip.getTextFieldByName("search_help");
        if (this.searchHelpField) {
            this.searchHelpField.text = "BSD Brawl";
            this.searchHelpField.visibility = DebugSearch.getQuery().length === 0;
        }
        this.wireSearchInput();
        this.sortButtonsAndCategories();
        DebugRecents.onChange(() => {
            this.rebuildRecentCategory();
        });
        DebugSearch.onChange(() => {
            if (this.searchHelpField) {
                this.searchHelpField.visibility = DebugSearch.getQuery().length === 0;
            }
        });
        this.refreshFilters();
        this.shouldUpdateLayout = true;
        this.update(0);
    }
    onBattleModeChange(isBattle) {
        var battleCat = this.getCategory(EDebugCategory.BATTLE);
        if (battleCat) {
            battleCat.setOpened(isBattle);
        }
    }
    onMapEditorChange(isMapEditor) {
        var mapEditorCat = this.getCategory(EDebugCategory.MAP_EDITOR);
        if (mapEditorCat) {
            mapEditorCat.setOpened(isMapEditor);
        }
    }
    createTopLevelButtons() {
        this.createDebugMenuButton("RESTART_GAME", -1, -1, 0);
        if (!Config.useDebugLogging) {
            return;
        }
        this.createDebugMenuButton("SHOW_BSD_API_RESPONSE", -1, -1, 0, undefined, Config.config.ShowBSDApiResponse === true, function (button) {
            Config.config.ShowBSDApiResponse = !Config.config.ShowBSDApiResponse;
            FileManager.updateConfigFile();
            var btn = new DebugGameButton(button);
            var checkbox = btn.getCheckbox();
            if (!checkbox.isNull()) {
                btn.switchCheckbox(Config.config.ShowBSDApiResponse);
            }
            var message = Config.config.ShowBSDApiResponse ? "ON" : "OFF";
            EDebugger.addMessage(EDebugger.INFO, message);
        }, false);
        this.createDebugMenuButton("CLEAR_EVERY_LOCATION_THEME", -1, -1, 0);
        this.createDebugMenuButton("CRASH_GAME", -1, -1, 0);
        this.createDebugMenuButton("CLEAR_DOWNLOADED_ASSETS", -1, -1, 0);
    }
    createCategoryButtons() {
        var wrapCallback = function (fn) {
            return function () {
                fn();
            };
        };
        for (var spec of DebugButtonSpecs.ALL_BUTTONS) {
            if (spec.isDev) {
                if (!Config.useDebugLogging) {
                    continue;
                }
            }
            var mode = spec.mode;
            if (mode == null) {
                mode = "both";
            }
            if (spec.checkbox) {
                if (spec.callback) {
                    var baseCallback = wrapCallback(spec.callback);
                    var getState = spec.checkbox.getState;
                    this.createDebugMenuButton(spec.label, -1, -1, 0, spec.category, getState(), function (button) {
                        baseCallback();
                        var btn = new DebugGameButton(button);
                        var checkbox = btn.getCheckbox();
                        if (!checkbox.isNull()) {
                            btn.switchCheckbox(getState());
                        }
                    }, false, mode);
                }
            } else if (spec.callback) {
                this.createDebugMenuButton(spec.label, -1, -1, 0, spec.category, -1, wrapCallback(spec.callback), false, mode);
            } else if (spec.wip) {
                this.createDebugMenuButton(spec.label + " (WIP)", -1, -1, 0, spec.category, -1, undefined, false, mode);
            } else {
                if (spec.actionIdx == null) {
                }
                if (spec.intParameter == null) {
                }
                this.createDebugMenuButton(spec.label, -1, -1, 2, spec.category, -1, undefined, true, mode);
            }
        }
    }
    wireSearchInput() {
        var filterInput = this.movieClip.getTextFieldByName("filter_input");
        if (!filterInput) {
            return;
        }
        var inputButton = this.addGameButton("debug_menu_input_button", 2);
        this.attachSearchInput(filterInput);
        inputButton.setCustomButtonListener(() => {
            return this.activateSearch();
        });
        var clearButton = this.addGameButton("clear_button", 2);
        var clearText = clearButton.getMovieClip().getTextFieldByName("text");
        if (clearText) {
            clearText.text = "clear";
        }
    }
    rebuildRecentCategory() {
        var recents = DebugRecents.getAll();
        var category = this.getCategory(EDebugCategory.RECENT);
        if (category == null) {
            category = this.createCategory("Recent", EDebugCategory.RECENT);
        }
        category.buttons = [];
        for (var label of recents) {
            var source = DebugButtonSpecs.ALL_BUTTONS.find(function (s) {
                return s.label === label;
            });
            if (!source) {
                continue;
            }
            this.createDebugMenuButton(RECENT_BUTTON_PREFIX + label, -1, -1, 0, EDebugCategory.RECENT, -1, function () {
                if (source.callback) {
                    source.callback();
                    return;
                }
                if (source.actionIdx !== undefined && source.actionIdx !== -1 && !source.wip) {
                    LogicDebugButtonMessage.send(source.actionIdx, source.intParameter == null ? -1 : source.intParameter);
                }
            }, false, source.mode == null ? "both" : source.mode);
        }
    }
    createTsResourceButtons() {
        for (var { label, resource, amount } of DebugButtonSpecs.RESOURCE_BUTTONS) {
            this.createDebugMenuButton(label, -1, amount, 2, EDebugCategory.ACCOUNT, -1, function () {
                return LogicDebugButtonMessage.addResource(resource, amount);
            }, false);
        }
        for (var { label, amount, type } of DebugButtonSpecs.FX_BUTTONS) {
            this.createDebugMenuButton(label, -1, amount, 2, EDebugCategory.ACCOUNT, -1, function () {
                return LogicDebugButtonMessage.showFloater(amount, type);
            }, false);
        }
        for (var { label, actionIdx, amount, type } of DebugButtonSpecs.NATIVE_FLOATER_OVERRIDE_BUTTONS) {
            this.createDebugMenuButton(label, -1, amount, 2, EDebugCategory.ACCOUNT, -1, function () {
                return LogicDebugButtonMessage.executeNativeWithFloater(actionIdx, amount, type);
            }, false);
        }
    }
    createTsUnlockButtons() {
        this.createDebugMenuButton("UNLOCK_ALL_BRAWLERS", -1, -1, 2, EDebugCategory.GACHA_IAP, -1, function () {
            return LogicDebugButtonMessage.unlockAllBrawlers();
        }, false);
        this.createDebugMenuButton("UPGRADE_ALL_BRAWLERS", -1, -1, 2, EDebugCategory.GACHA_IAP, -1, function () {
            return LogicDebugButtonMessage.upgradeAllBrawlers();
        }, false);
    }
    sortButtonsAndCategories() {
        var categories = [];
        var buttons = [];
        this.buttons.forEach(function (a) {
            if (a instanceof DebugMenuCategory) {
                categories.push(a);
                return;
            }
            buttons.push(a);
        });
        buttons.sort(function (a, b) {
            var aIsRemove = a.getOriginalName().startsWith("REMOVE");
            var bIsRemove = b.getOriginalName().startsWith("REMOVE");
            if (aIsRemove !== bIsRemove) {
                if (aIsRemove) {
                    return 1;
                }
                return -1;
            }
            var nameA = a.getTextFieldText();
            var nameB = b.getTextFieldText();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        });
        categories.sort(function (a, b) {
            var aRecent = a.enumeration === EDebugCategory.RECENT;
            var bRecent = b.enumeration === EDebugCategory.RECENT;
            if (aRecent !== bRecent) {
                if (aRecent) {
                    return -1;
                }
                return 1;
            }
            if (a.name < b.name) {
                return -1;
            }
            if (a.name > b.name) {
                return 1;
            }
            return 0;
        });
        this.buttons = buttons.concat(categories);
    }
    isButtonAvailable(name) {
        if (DebugMenu.isNotImplemented(name)) {
            GUI.showFloaterTextAtDefaultPosition(Localisation.getString("NOT_IMPLEMENTED_YET"));
            return false;
        }
        return true;
    }
    buttonPressed(listener, button) {
        var gameButton = new DebugGameButton(button);
        var name = gameButton.getOriginalName();
        if (!this.isButtonAvailable(name)) {
            return;
        }
        DebugRecents.push(name);
        if (name === "RESTART_GAME") {
            GameMain.reloadGame();
        } else if (name === "TEST_FEATURE") {
            ExceptionWorker.logException("TEST_MESSAGE", Breadcrumbs.dump());
        } else if (name !== "SPAWN_SKINPREVIEW") {
            if (name === "CRASH_GAME") {
                GameMain.getInstance().writePointer(NULL);
            } else if (name === "CLEAR_DOWNLOADED_ASSETS") {
                DownloadManager.clear();
            } else if (name === "CLEAR_DEBUGGER") {
                EDebugger.clear();
            } else if (name === "CLEAR_EVERY_LOCATION_THEME") {
                Config.config.LocationThemeOverrides = {};
                GameMain.reloadGame();
            }
        }
    }
    createDebugMenuButton(name, actionIdx, intParameter, btnType, category, state, callback, translate, mode) {
        if (actionIdx === undefined) {
            actionIdx = -1;
        }
        if (intParameter === undefined) {
            intParameter = -1;
        }
        if (btnType === undefined) {
            btnType = 0;
        }
        if (state === undefined) {
            state = -1;
        }
        if (translate === undefined) {
            translate = true;
        }
        if (mode === undefined) {
            mode = "both";
        }
        var movieClip = StringTable.getMovieClip("sc/debug.sc", "debug_menu_item");
        var checkBox = null;
        var localizedName = name;
        if (translate) {
            localizedName = Localisation.getString(name);
        }
        if (state != -1) {
            try {
                GameMain.loadAsset("sc/debug_addons.sc");
                var checkboxClip = StringTable.getMovieClip_safe("sc/debug_addons.sc", "debug_menu_checkbox");
                if (checkboxClip) {
                    checkBox = checkboxClip.getChildById(2);
                    checkBox.visibility = state;
                    movieClip.addChild(checkBox);
                }
            } catch (e) {
            }
        }
        var categoryTranslation = "";
        if (category !== undefined) {
            categoryTranslation = Localisation.getString(EDebugCategory[category]);
        }
        if (actionIdx != -1) {
            var debugCmdButton = new DebugCommandButton(actionIdx, intParameter, btnType);
            debugCmdButton.setMovieClip(movieClip, true);
            debugCmdButton.setCategoryName(categoryTranslation);
            debugCmdButton.setOriginalName(name);
            debugCmdButton.setTextFieldText(localizedName);
            debugCmdButton.mode = mode;
            debugCmdButton.setCustomButtonListener(function (l, b) {
                DebugCommandButton.callback(l, b);
            });
            return;
        }
        var button = new DebugGameButton();
        button.setMovieClip(movieClip, true);
        button.mode = mode;
        if (DebugMenu.dangerousFunctions.includes(name)) {
        }
        button.setTextFieldText(localizedName);
        button.setIntParameter(intParameter);
        button.setCategoryName(categoryTranslation);
        if (checkBox) {
            button.setCheckbox(checkBox.instance);
        }
        button.setOriginalName(name);
        this.addButton(button, category);
        if (callback) {
            if (this.isButtonAvailable(name)) {
                button.setCustomButtonListener(function (l, b) {
                    return;
                });
            }
        }
    }
    clearSearch() {
        return;
    }
    setSearchQuery(q) {
        return;
    }
    clearRecents() {
        return;
    }
    isNotImplemented(name) {
        return DebugMenu.notImplementedFunctions.includes(name);
    }
}
DebugMenu.notImplementedFunctions = [];
DebugMenu.dangerousFunctions = [];

var SEARCH_INPUT_MAX_LENGTH = 64;

class DebugMenuBase extends DropGUIContainer {
    constructor(resourceFile, exportName) {
        super();
        this.lastReadSearchText = "";
        this.lastIsBattleMode = false;
        this.lastIsMapEditor = false;
        var movieClip = StringTable.getMovieClip(resourceFile, exportName);
        this.setMovieClip(movieClip);
        this.movieClip = GUIContainer._getMovieClip(this.instance);
        this.buttons = [];
        var matrixY = Stage.getMatrixY();
        var menuHeight = this.height;
        if (menuHeight > 0) {
            this.movieClip.scale = matrixY / menuHeight;
        }
        this.setPixelSnappedXY(Stage.getMatrixX(), 0);
        var itemArea = this.movieClip.getTextFieldByName("item_area");
        this.scrollArea = new ScrollArea(itemArea, 1);
        this.scrollArea.enablePinching(false);
        this.scrollArea.setAlignment(4);
        this.scrollArea.enableHorizontalDrag(false);
        this.scrollArea.enableVerticalDrag(true);
        this.scrollArea.setClipping(true);
        if (menuHeight > 0) {
            this.scrollArea.clipHeight = this.scrollArea.clipHeight - 20;
        }
        this.movieClip.addChild(this.scrollArea);
        var tabArea = this.movieClip.getTextFieldByName("tab_area");
        if (tabArea) {
            this.tabScrollArea = new ScrollArea(tabArea, 1);
            this.tabScrollArea.enablePinching(false);
            this.tabScrollArea.setAlignment(8);
            this.tabScrollArea.enableHorizontalDrag(true);
            this.tabScrollArea.enableVerticalDrag(false);
            this.tabScrollArea.setClipping(true);
            this.tabScrollArea.y = this.tabScrollArea.y + 20;
            this.movieClip.addChild(this.tabScrollArea);
        }
        this.createCategory(" ", EDebugCategory.MAIN);
        this.shouldUpdateLayout = false;
    }
    needToUpdateLayout() {
        this.shouldUpdateLayout = true;
    }
    buttonPressed(listener, button) {
        return;
    }
    createCategory(categoryName, enumeration) {
        var category = new DebugMenuCategory(categoryName, enumeration);
        category.onToggle = () => {
            this.needToUpdateLayout();
        };
        category.mini.setCustomButtonListener(() => {
            return this.onMiniTabPressed(category);
        });
        this.buttons.push(category);
        return category;
    }
    onMiniTabPressed(clicked) {
        var wasOpen = clicked.isCategoryOpened();
        var isMainTab = clicked.enumeration === EDebugCategory.MAIN;
        this.buttons.forEach(function (btn) {
            if (btn instanceof DebugMenuCategory) {
                btn.setOpened(false);
            }
        });
        if (!isMainTab) {
            if (!wasOpen) {
                clicked.setOpened(true);
            }
        }
        this.needToUpdateLayout();
    }
    getCategory(enumeration) {
        var category = null;
        this.buttons.forEach(function (btn) {
            if (btn instanceof DebugMenuCategory) {
                if (btn.enumeration == enumeration) {
                    category = btn;
                }
            }
        });
        return category;
    }
    removeCategory(enumeration) {
        this.buttons = this.buttons.filter(function (btn) {
            if (btn instanceof DebugMenuCategory) {
                return btn.enumeration != enumeration;
            }
            return true;
        });
    }
    addButton(button, categoryEnum) {
        if (!(button instanceof DebugCommandButton)) {
            button.setCustomButtonListener(this.buttonPressed.bind(this));
        }
        if (categoryEnum) {
            var category = this.getCategory(categoryEnum);
            if (!category) {
                var categoryTranslation = Localisation.getString(EDebugCategory[categoryEnum]);
                category = this.createCategory(categoryTranslation, categoryEnum);
            }
            category.buttons.push(button);
            return;
        }
        this.buttons.push(button);
    }
    setTitle(title) {
        if (this.movieClip.getTextFieldByName("title") == null) {
            return;
        }
    }
    refreshFilters(opts) {
        if (opts === undefined) {
            opts = {};
        }
        var query = DebugSearch.getQuery();
        var isBattle = !BattleMode.getInstance().isNull();
        var isMapEditor = GameStateManager.isInState(GameStateManager.GameStateId.MapEditor);
        var context = "home";
        if (isBattle) {
            context = "battle";
        }
        if (isMapEditor) {
            context = "mapeditor";
        }
        this.buttons.forEach(function (btn) {
            var anyVisible;
            var modeOk;
            var searchOk;
            if (btn instanceof DebugMenuCategory) {
                anyVisible = false;
                btn.buttons.forEach(function (child) {
                    var modeOk = child.mode === "both" || child.mode === context;
                    var searchOk = query.length === 0 || child.getTextFieldText().toLowerCase().includes(query);
                    child.isFilteredOut = !modeOk || !searchOk;
                    if (!child.isFilteredOut) {
                        anyVisible = true;
                    }
                });
                btn.isFilteredOut = !anyVisible;
                if (opts.syncCategoryOpenStateToSearch) {
                    if (query.length > 0) {
                        if (anyVisible) {
                            btn.setOpened(true);
                        }
                    }
                }
                if (query.length === 0) {
                    btn.setOpened(false);
                }
                return;
            }
            var btnModeOk = btn.mode === "both" || btn.mode === context;
            var btnSearchOk = query.length === 0 || btn.getTextFieldText().toLowerCase().includes(query);
            btn.isFilteredOut = !btnModeOk || !btnSearchOk;
        });
    }
    attachSearchInput(searchTextField, tapTarget) {
        this.searchInputTextField = searchTextField;
        this.searchInputField = this.buildSearchInputField();
        if (tapTarget) {
            tapTarget.setCustomButtonListener(() => {
                return this.searchInputField.activate(true);
            });
        }
    }
    buildSearchInputField() {
        var field = new GameInputField(this.searchInputTextField, this.instance);
        field.setMaxTextLength(SEARCH_INPUT_MAX_LENGTH);
        field.setScaleTextIfNeeded(true);
        return field;
    }
    pollSearchInput() {
        if (!this.searchInputField) {
            return;
        }
        var current = this.searchInputField.getInputText();
        if (current === this.lastReadSearchText) {
            return;
        }
        this.lastReadSearchText = current;
    }
    activateSearch() {
        return;
    }
    clearSearchInput() {
        if (this.searchInputField) {
            if (!this.searchInputTextField) {
                return;
            }
        }
        this.searchInputField.activate(false);
        this.searchInputTextField.text = "";
        this.searchInputField = this.buildSearchInputField();
        this.lastReadSearchText = "";
    }
    update(deltaTime) {
        this.pollBattleModeChange();
        this.pollMapEditorChange();
        if (this.shouldUpdateLayout) {
            this.updateLayout();
        }
        this.pollSearchInput();
        if (this.searchInputField) {
            this.searchInputField.update(deltaTime);
        }
        this.scrollArea.update(deltaTime);
        if (this.tabScrollArea) {
            this.tabScrollArea.update(deltaTime);
        }
    }
    pollBattleModeChange() {
        var isBattle = !BattleMode.getInstance().isNull();
        if (isBattle === this.lastIsBattleMode) {
            return;
        }
        this.lastIsBattleMode = isBattle;
        this.onBattleModeChange(isBattle);
    }
    onBattleModeChange(_isBattle) {
        return;
    }
    pollMapEditorChange() {
        var isMapEditor = GameStateManager.isInState(GameStateManager.GameStateId.MapEditor);
        if (isMapEditor === this.lastIsMapEditor) {
            return;
        }
        this.lastIsMapEditor = isMapEditor;
        this.onMapEditorChange(isMapEditor);
    }
    onMapEditorChange(_isMapEditor) {
        return;
    }
    updateLayout() {
        var self = this;
        if (this.tabScrollArea) {
            this.tabScrollArea.removeAllContent();
        }
        this.scrollArea.removeAllContent();
        if (this.tabScrollArea) {
            var i = 0;
            this.buttons.forEach(function (btn) {
                if (btn instanceof DebugMenuCategory) {
                    if (!btn.isFilteredOut) {
                        btn.mini.x = i * 45 + 20;
                        btn.mini.y = btn.mini.height * 0.5;
                        self.tabScrollArea.addContent(btn.mini);
                        i = i + 1;
                    }
                }
            });
        }
        var Y = 15;
        this.buttons.forEach(function (btn) {
            if (btn instanceof DebugMenuCategory) {
                if (btn.isFilteredOut) {
                    return;
                }
                var categoryButtons = btn.sortButtons().filter(function (b) {
                    return !b.isFilteredOut;
                });
                if (categoryButtons.length === 0) {
                    return;
                }
                var width = btn.width;
                var height = btn.height;
                btn.x = width * 0.5;
                btn.y = Y + height * 0.5;
                self.scrollArea.addContent(btn);
                Y = Y + (8 + height);
                var prefix = btn.isCategoryOpened() ? "- " : "+ ";
                btn.setText("text", prefix + btn.name);
                if (btn.isCategoryOpened()) {
                    categoryButtons.forEach(function (a) {
                        var w = a.width;
                        var h = a.height;
                        a.x = w * 0.5;
                        a.y = Y + h * 0.5;
                        self.scrollArea.addContent(a);
                        Y = Y + (8 + h);
                    });
                    return;
                }
            } else {
                if (btn.isFilteredOut) {
                    return;
                }
                var btnWidth = btn.width;
                var btnHeight = btn.height;
                btn.x = btnWidth * 0.5;
                btn.y = Y + btnHeight * 0.5;
                self.scrollArea.addContent(btn);
                Y = Y + (8 + btnHeight);
            }
        });
        this.shouldUpdateLayout = false;
    }
    updateElements(deltaTime) {
        if (this.visibility) {
            this.update(deltaTime);
            return;
        }
    }
    onDestructed() {
        return;
    }
    destruct() {
        DebugMenuState.isOpen = false;
        if (this.searchInputField) {
            this.searchInputField.activate(false);
        }
        this.scrollArea.removeAllContent();
        if (this.tabScrollArea) {
            this.tabScrollArea.removeAllContent();
        }
    }
    toggle() {
        if (this.visibility) {
            this.hide();
        } else {
            this.show();
        }
    }
    show() {
        DebugMenuState.isOpen = true;
        this.visibility = true;
    }
    hide() {
        DebugMenuState.isOpen = false;
        if (this.searchInputField) {
            this.searchInputField.activate(false);
        }
        this.visibility = false;
    }
}

class DebugMenuButton extends DebugGameButton {
    constructor() {
        super();
        DebugMenuButton.ensureAssetLoaded();
        this.setMovieClip(StringTable.getMovieClip("sc/debug.sc", "debug_button"), true);
        this.setTextFieldText("D");
        this.setXY(10, Stage.getMatrixY());
        this.setCustomButtonListener(this.callback.bind(this));
    }
    callback() {
        try {
            if (!DebugMenuButton.debugMenu) {
                DebugMenuButton.debugMenu = new DebugMenu();
                DebugMenuButton.debugMenu.hide();
                Stage.addChild(DebugMenuButton.debugMenu.instance);
                GUI.registerUpdateable(DebugMenuButton.debugMenu);
            }
            DebugMenuButton.debugMenu.toggle();
        } catch (e) {
        }
    }
    static ensureAssetLoaded() {
        if (!this.isAssetLoaded) {
            GameMain.loadAsset("sc/debug.sc");
            this.isAssetLoaded = true;
            Logcat.logInfo("DebugMenuButton: loaded sc/debug.sc");
        }
    }
    static destroy() {
        if (this.debugMenu) {
            GUI.unregisterUpdateable(this.debugMenu);
            Stage.removeChild(this.debugMenu.instance);
            this.debugMenu.destruct();
            this.debugMenu = undefined;
        }
        if (this.buttonInstance) {
            Stage.removeChild(this.buttonInstance.instance);
            this.buttonInstance = undefined;
        }
    }
    static spawn() {
        if (this.buttonInstance) {
            return this.buttonInstance;
        }
        try {
            var button = new DebugMenuButton();
            Stage.addChild(button.instance);
            this.buttonInstance = button;
            return button;
        } catch (e) {
            return null;
        }
    }
    static showFirstEnableWarning() {
        if (Config.config.DebugMenuButtonWarningShown) {
            return;
        }
        Config.config.DebugMenuButtonWarningShown = true;
        FileManager.updateConfigFile();
        var warning = new QuestionPopup(Localisation.getString("DebugMenuWarningTitle"), Localisation.getString("DebugMenuWarningText"), 4294967040.0);
    }
    static getDebugMenu() {
        return this.debugMenu;
    }
    static toggleButtonVisibility() {
        if (!this.buttonInstance) {
            return;
        }
        var color = this.buttonInstance.colorTransform;
        if (color.alpha === 0) {
            color.alpha = 255;
        } else {
            color.alpha = 0;
        }
    }
}
DebugMenuButton.isAssetLoaded = false;

var EDebugCategory = {};
var categoryOpenedOffset = LogicMemory.offset(624);

class DebugMenuCategory extends DebugGameButton {
    constructor(name, enumeration) {
        super();
        this.isFilteredOut = false;
        this.setMovieClip(StringTable.getMovieClip("sc/debug.sc", "debug_menu_category"), true);
        this.mini = new DebugGameButton();
        this.mini.setMovieClip(StringTable.getMovieClip("sc/debug.sc", "debug_menu_category_mini"), true);
        this.mini.setText("text", name.substring(0, 3));
        this.name = name;
        this.enumeration = enumeration;
        this.buttons = [];
        this.instance.add(categoryOpenedOffset).writeU8(0);
        this.setCustomButtonListener(this.buttonPressed.bind(this));
        this.mini.setCustomButtonListener(this.buttonPressed.bind(this));
    }
    isCategoryOpened() {
        return Boolean(this.instance.add(categoryOpenedOffset).readU8());
    }
    setOpened(open) {
        this.instance.add(categoryOpenedOffset).writeU8(open ? 1 : 0);
    }
    buttonPressed() {
        this.setOpened(!this.isCategoryOpened());
        if (this.onToggle != null) {
            this.onToggle();
        }
    }
    sortButtons() {
        return this.buttons.slice();
    }
}

class DebugMenuState {
}
DebugMenuState.isOpen = false;

var DebugButtonSpecs = {};
DebugButtonSpecs.RESOURCE_BUTTONS = [{ label: "ADD_STAR_POINTS", resource: "LegendaryTrophies", amount: 100 }, { label: "ADD_POWER_POINTS", resource: "PowerPoints", amount: 1000 }, { label: "ADD_CREDITS", resource: "RecruitTokens", amount: 100 }, { label: "ADD_BLING_RESOURCE", resource: "Bling", amount: 1000 }, { label: "ADD_COLLAB_CURRENCY", resource: "CollabEventCurrency", amount: 100 }];
DebugButtonSpecs.FX_BUTTONS = [{ label: "ADD_GOLD_TICKETS", amount: 5, type: 33 }];
DebugButtonSpecs.NATIVE_FLOATER_OVERRIDE_BUTTONS = [{ label: "ADD_LEGENDARY_TROPHIES", actionIdx: LogicDebugButtonMessage.EDebugAction.ADD_SCORE, amount: 100, type: 28 }];
var ALL_BUTTONS = [];
ALL_BUTTONS[0] = { label: "BADGE_PREVIEW", category: EDebugCategory.PREVIEW };
ALL_BUTTONS[1] = { label: "EFFECT_PREVIEW", category: EDebugCategory.PREVIEW };
ALL_BUTTONS[2] = { label: "MAP_PREVIEW", category: EDebugCategory.PREVIEW };
ALL_BUTTONS[3] = { label: "SKIN_PREVIEW", category: EDebugCategory.PREVIEW };
ALL_BUTTONS[4] = { label: "FAME_LEVEL_UP_PREVIEW", category: EDebugCategory.PREVIEW, mode: "home" };
ALL_BUTTONS[5] = { label: "ABOUT_SCREEN", category: EDebugCategory.PREVIEW, mode: "home" };
ALL_BUTTONS[6] = { label: "BRAWLER_UNLOCK_ANIM", category: EDebugCategory.PREVIEW, mode: "home" };
ALL_BUTTONS[7] = { label: "FRIEND_REQUEST", category: EDebugCategory.PREVIEW, mode: "home" };
ALL_BUTTONS[8] = { label: "CHAT_OPTIONS", category: EDebugCategory.PREVIEW, mode: "home" };
ALL_BUTTONS[9] = { label: "ESPORTS", category: EDebugCategory.PREVIEW, mode: "home" };
ALL_BUTTONS[10] = { label: "FIRST_GEAR_TUTORIAL", category: EDebugCategory.PREVIEW, mode: "home" };
ALL_BUTTONS[11] = { label: "INVITE_FRIEND_CODE", category: EDebugCategory.PREVIEW, mode: "home" };
ALL_BUTTONS[12] = { label: "NOTIFICATION_SETTINGS", category: EDebugCategory.PREVIEW, mode: "home" };
ALL_BUTTONS[13] = { label: "NOT_ENOUGH_GEMS", category: EDebugCategory.PREVIEW, mode: "home" };
ALL_BUTTONS[14] = { label: "UNLOCK_ACCOUNT_SCREEN", category: EDebugCategory.PREVIEW, mode: "home" };
ALL_BUTTONS[15] = { label: "GENERIC_INFO", category: EDebugCategory.PREVIEW, mode: "home" };
ALL_BUTTONS[16] = { label: "FAME_POPUP", category: EDebugCategory.PREVIEW, mode: "home" };
ALL_BUTTONS[17] = { label: "MOVIE_PLAYER", category: EDebugCategory.PREVIEW, mode: "home" };
ALL_BUTTONS[18] = { label: "GOTO_CLAN", category: EDebugCategory.NAVIGATION, mode: "home" };
ALL_BUTTONS[19] = { label: "GOTO_BRAWL_PASS", category: EDebugCategory.NAVIGATION, mode: "home" };
ALL_BUTTONS[20] = { label: "GOTO_QUESTS", category: EDebugCategory.NAVIGATION, mode: "home" };
ALL_BUTTONS[21] = { label: "GOTO_CLUBS", category: EDebugCategory.NAVIGATION, mode: "home" };
ALL_BUTTONS[22] = { label: "GOTO_SCID_REWARDS", category: EDebugCategory.NAVIGATION, mode: "home" };
ALL_BUTTONS[23] = { label: "GOTO_PRO_PASS", category: EDebugCategory.NAVIGATION, mode: "home" };
ALL_BUTTONS[24] = { label: "GOTO_HOME", category: EDebugCategory.NAVIGATION, mode: "home" };
ALL_BUTTONS[25] = { label: "ACCOUNT_DELETION_DIALOG", category: EDebugCategory.ACCOUNT };
ALL_BUTTONS[26] = { label: "AUTOCOLLECT_OLDEST_SEASON", category: EDebugCategory.ACCOUNT };
ALL_BUTTONS[27] = { label: "ADD_ALL_RESOURCES", category: EDebugCategory.ACCOUNT, actionIdx: 249, intParameter: 1000 };
ALL_BUTTONS[28] = { label: "SHOW_PRESTIGE_INTRO", category: EDebugCategory.ACCOUNT };
ALL_BUTTONS[32] = { label: "ADD_RESOURCES", category: EDebugCategory.ACCOUNT, actionIdx: 1, intParameter: -1 };
ALL_BUTTONS[33] = { label: "RESET_ALL_RESOURCES", category: EDebugCategory.ACCOUNT, actionIdx: 250, intParameter: 1 };
ALL_BUTTONS[34] = { label: "ADD_FAME", category: EDebugCategory.ACCOUNT, actionIdx: 165, intParameter: 1000 };
ALL_BUTTONS[35] = { label: "SET_FAME", category: EDebugCategory.ACCOUNT, actionIdx: 166, intParameter: 5000 };
ALL_BUTTONS[36] = { label: "ADD_GEMS", category: EDebugCategory.ACCOUNT, actionIdx: 14, intParameter: 800 };
ALL_BUTTONS[37] = { label: "REMOVE_ALL_GEMS", category: EDebugCategory.ACCOUNT, actionIdx: 18, intParameter: -1 };
ALL_BUTTONS[38] = { label: "REMOVE_ALL_COINS", category: EDebugCategory.ACCOUNT, actionIdx: 19, intParameter: -1 };
ALL_BUTTONS[39] = { label: "ADD_SCORE", category: EDebugCategory.ACCOUNT, actionIdx: 25, intParameter: 125 };
ALL_BUTTONS[40] = { label: "DECREASE_SCORE", category: EDebugCategory.ACCOUNT, actionIdx: 26, intParameter: -125 };
ALL_BUTTONS[41] = { label: "RESET_ALL_HERO_SCORES", category: EDebugCategory.ACCOUNT, actionIdx: 172, intParameter: 1000 };
ALL_BUTTONS[42] = { label: "RESET_CLAN_CREATED", category: EDebugCategory.ACCOUNT, actionIdx: 203, intParameter: 1 };
ALL_BUTTONS[43] = { label: "SET_RANKED_SEEN", category: EDebugCategory.ACCOUNT, actionIdx: 217, intParameter: 1 };
ALL_BUTTONS[45] = { label: "CLAIM_TROPHY_ROAD", category: EDebugCategory.ACCOUNT, actionIdx: 129, intParameter: 1000 };
ALL_BUTTONS[46] = { label: "REMOVE_WINSTREAK", category: EDebugCategory.ACCOUNT, actionIdx: 211, intParameter: -1 };
ALL_BUTTONS[47] = { label: "ADD_100_WINSTREAK", category: EDebugCategory.ACCOUNT, actionIdx: 210, intParameter: 100 };
ALL_BUTTONS[48] = { label: "ADD_10_WINSTREAK", category: EDebugCategory.ACCOUNT, actionIdx: 210, intParameter: 10 };
ALL_BUTTONS[49] = { label: "ADD_1_WINSTREAK", category: EDebugCategory.ACCOUNT, actionIdx: 210, intParameter: 1 };
ALL_BUTTONS[50] = { label: "BRAWL_TV", category: EDebugCategory.UTILS };
ALL_BUTTONS[51] = { label: "PREV_THEME", category: EDebugCategory.UTILS };
ALL_BUTTONS[52] = { label: "NEXT_THEME", category: EDebugCategory.UTILS };
ALL_BUTTONS[53] = { label: "SET_CUSTOM_BACKGROUND", category: EDebugCategory.UTILS, mode: "home" };
ALL_BUTTONS[54] = { label: "RESET_CUSTOM_BACKGROUND", category: EDebugCategory.UTILS, mode: "home" };
ALL_BUTTONS[55] = { label: "OPEN_SHARE_DIALOG", category: EDebugCategory.UTILS };
ALL_BUTTONS[56] = { label: "SCROLLABLE_DEBUG_LOG", category: EDebugCategory.UTILS, isDev: true };
ALL_BUTTONS[57] = { label: "SET_COUNTRY", category: EDebugCategory.UTILS };
ALL_BUTTONS[58] = { label: "SLOW_MOTION_4X", category: EDebugCategory.UTILS, checkbox: {} };
ALL_BUTTONS[59] = { label: "TOGGLE_WATERMARK", category: EDebugCategory.UTILS, checkbox: {} };
ALL_BUTTONS[60] = { label: "STOP_ALL_SFX", category: EDebugCategory.UTILS };
ALL_BUTTONS[61] = { label: "STOP_MUSIC", category: EDebugCategory.UTILS };
ALL_BUTTONS[62] = { label: "CYCLE_LANGUAGE", category: EDebugCategory.UTILS };
ALL_BUTTONS[63] = { label: "SHOW_TID_KEYS", category: EDebugCategory.UTILS, checkbox: {} };
ALL_BUTTONS[64] = { label: "COPY_ACCOUNT_ID", category: EDebugCategory.UTILS };
ALL_BUTTONS[65] = { label: "SOFT_RELOAD_GAME", category: EDebugCategory.UTILS };
ALL_BUTTONS[66] = { label: "OPEN_NOTIFICATION_SETTINGS", category: EDebugCategory.NOTIFICATIONS, mode: "home" };
ALL_BUTTONS[67] = { label: "OPEN_DEVICE_LINK_FROM_SETTINGS", category: EDebugCategory.ACCOUNT, mode: "home" };
ALL_BUTTONS[68] = { label: "SCID_DEBUG_CLEAR_ALL", category: EDebugCategory.SC_ID };
ALL_BUTTONS[69] = { label: "SCID_LOG_OUT", category: EDebugCategory.SC_ID };
ALL_BUTTONS[70] = { label: "SCID_RELOAD_CONFIG", category: EDebugCategory.SC_ID };
ALL_BUTTONS[71] = { label: "SCID_SWITCH_ENV", category: EDebugCategory.SC_ID };
ALL_BUTTONS[72] = { label: "RESET_CURRENT_ACCOUNT", category: EDebugCategory.SC_ID };
ALL_BUTTONS[73] = { label: "SCID_LOG_OUT_ALL_DEVICES", category: EDebugCategory.SC_ID };
ALL_BUTTONS[74] = { label: "ADVANCE_PROG_SKINS_BY_1", category: EDebugCategory.GACHA_IAP, actionIdx: 283, intParameter: 1 };
ALL_BUTTONS[75] = { label: "UNLOCK_PROG_SKINS_TO_LVL_5", category: EDebugCategory.GACHA_IAP, actionIdx: 282, intParameter: 5 };
ALL_BUTTONS[76] = { label: "LOCK_ALL_SKINS", category: EDebugCategory.GACHA_IAP, actionIdx: 309, intParameter: 1 };
ALL_BUTTONS[77] = { label: "LEVEL_UP_HERO", category: EDebugCategory.GACHA_IAP, actionIdx: 127, intParameter: 1 };
ALL_BUTTONS[78] = { label: "DOWNGRADE_HERO_LEVEL", category: EDebugCategory.GACHA_IAP, actionIdx: 128, intParameter: -1 };
ALL_BUTTONS[79] = { label: "MAX_SELECTED_HERO", category: EDebugCategory.GACHA_IAP, actionIdx: 72, intParameter: 1 };
ALL_BUTTONS[80] = { label: "RESET_HERO_GEARS", category: EDebugCategory.GACHA_IAP, actionIdx: 118, intParameter: 1 };
ALL_BUTTONS[81] = { label: "MARK_ALL_AS_NEW", category: EDebugCategory.GACHA_IAP };
ALL_BUTTONS[82] = { label: "MARK_ALL_HEROES_AS_NEW", category: EDebugCategory.GACHA_IAP, actionIdx: 113, intParameter: 1 };
ALL_BUTTONS[83] = { label: "GIVE_BY_GLOBAL_ID", category: EDebugCategory.GACHA_IAP };
ALL_BUTTONS[84] = { label: "GIVE_FROM_CONTAINER_BY_ID", category: EDebugCategory.GACHA_IAP };
ALL_BUTTONS[85] = { label: "GIVE_RANDOM_REWARD", category: EDebugCategory.GACHA_IAP };
ALL_BUTTONS[86] = { label: "GIVE_RANDOM_REWARD_ALT", category: EDebugCategory.GACHA_IAP };
ALL_BUTTONS[87] = { label: "REVOKE_IAP_GEMS_TO_NEGATIVE", category: EDebugCategory.GACHA_IAP };
ALL_BUTTONS[88] = { label: "SET_AVATAR_PASSIVE", category: EDebugCategory.GACHA_IAP };
ALL_BUTTONS[89] = { label: "SET_AVATAR_PASSIVE_RECRUIT", category: EDebugCategory.GACHA_IAP };
ALL_BUTTONS[90] = { label: "SET_SPRAY_SLOTS_5", category: EDebugCategory.GACHA_IAP, actionIdx: 147, intParameter: 5 };
ALL_BUTTONS[91] = { label: "SKIP_GACHA_ANIM", category: EDebugCategory.GACHA_IAP, checkbox: {} };
ALL_BUTTONS[92] = { label: "UNLOCK_AND_MAX_ALL_LVL_7", category: EDebugCategory.GACHA_IAP, actionIdx: 23, intParameter: 1 };
ALL_BUTTONS[93] = { label: "UNLOCK_AND_MAX_ALL_LVL_9", category: EDebugCategory.GACHA_IAP };
ALL_BUTTONS[94] = { label: "UNLOCK_AND_MAX_ALL_NO_STAR_POWERS", category: EDebugCategory.GACHA_IAP, actionIdx: 117, intParameter: 1 };
ALL_BUTTONS[95] = { label: "UNLOCK_AND_MAX_ONE", category: EDebugCategory.GACHA_IAP, actionIdx: 154, intParameter: 1 };
ALL_BUTTONS[96] = { label: "UNLOCK_HYPER_BUDDIES_ALL", category: EDebugCategory.GACHA_IAP, actionIdx: 420, intParameter: 1 };
ALL_BUTTONS[97] = { label: "UNLOCK_STAR_BUDDIES_ALL", category: EDebugCategory.GACHA_IAP, actionIdx: 419, intParameter: 1 };
ALL_BUTTONS[98] = { label: "UNLOCK_OPENED_GADGETS", category: EDebugCategory.GACHA_IAP };
ALL_BUTTONS[99] = { label: "UNLOCK_OPENED_STAR_POWERS", category: EDebugCategory.GACHA_IAP };
ALL_BUTTONS[100] = { label: "OPEN_CLAN_POPUP", category: EDebugCategory.SOCIAL, mode: "home" };
ALL_BUTTONS[101] = { label: "OPEN_TEAMUP_POPUP", category: EDebugCategory.SOCIAL, mode: "home" };
ALL_BUTTONS[102] = { label: "OPEN_DELETE_ACCOUNT", category: EDebugCategory.SOCIAL, mode: "home" };
ALL_BUTTONS[103] = { label: "NEXT_CAMERA_MODE", category: EDebugCategory.BATTLE, mode: "battle" };
ALL_BUTTONS[104] = { label: "CAMERA_SETTINGS", category: EDebugCategory.BATTLE, mode: "battle" };
ALL_BUTTONS[105] = { label: "RESET_CAMERA_SETTINGS", category: EDebugCategory.BATTLE, mode: "battle" };
ALL_BUTTONS[106] = { label: "SHOW_CHARACTER_STATE", category: EDebugCategory.BATTLE, mode: "battle" };
ALL_BUTTONS[107] = { label: "SHOW_CONNECTION_INFO", category: EDebugCategory.BATTLE, mode: "battle" };
ALL_BUTTONS[108] = { label: "TOGGLE_TILE_GRID", category: EDebugCategory.BATTLE, mode: "battle", checkbox: {} };
ALL_BUTTONS[109] = { label: "SKIP_TUTORIAL", category: EDebugCategory.BATTLE, mode: "battle" };
ALL_BUTTONS[110] = { label: "START_TUTORIAL", category: EDebugCategory.BATTLE, mode: "home" };
ALL_BUTTONS[111] = { label: "START_TRAINING", category: EDebugCategory.BATTLE, mode: "home" };
ALL_BUTTONS[112] = { label: "TOGGLE_CHAT_BUBBLES", category: EDebugCategory.BATTLE, mode: "battle", checkbox: {} };
ALL_BUTTONS[113] = { label: "TOGGLE_HUD", category: EDebugCategory.BATTLE, mode: "battle", checkbox: {} };
ALL_BUTTONS[114] = { label: "TOGGLE_HERO_HUD", category: EDebugCategory.BATTLE, mode: "battle", checkbox: {} };
ALL_BUTTONS[115] = { label: "TOGGLE_ZOOM", category: EDebugCategory.BATTLE, mode: "battle", checkbox: {} };
ALL_BUTTONS[116] = { label: "COPY_REPLAY_CODE", category: EDebugCategory.REPLAY_SPECTATE, mode: "battle" };
ALL_BUTTONS[117] = { label: "LOAD_REPLAY", category: EDebugCategory.REPLAY_SPECTATE, mode: "home" };
ALL_BUTTONS[118] = { label: "TOGGLE_FOLLOW_SPECTATE", category: EDebugCategory.REPLAY_SPECTATE, mode: "battle", checkbox: {} };
ALL_BUTTONS[119] = { label: "ADD_SPECTATORS", category: EDebugCategory.REPLAY_SPECTATE, mode: "battle" };
ALL_BUTTONS[120] = { label: "ADD_SPECTATORS_BRAWLTV", category: EDebugCategory.REPLAY_SPECTATE, mode: "battle" };
ALL_BUTTONS[121] = { label: "OPEN_MAP_EDITOR_POPUP", category: EDebugCategory.MAP_EDITOR, mode: "home" };
ALL_BUTTONS[122] = { label: "MAP_EDITOR_TOGGLE_GRID", category: EDebugCategory.MAP_EDITOR, mode: "mapeditor" };
ALL_BUTTONS[123] = { label: "MAP_EDITOR_FILL_ALL", category: EDebugCategory.MAP_EDITOR, mode: "mapeditor" };
ALL_BUTTONS[124] = { label: "MAP_EDITOR_ERASE_ALL", category: EDebugCategory.MAP_EDITOR, mode: "mapeditor" };
ALL_BUTTONS[125] = { label: "MAP_EDITOR_BYPASS_SAVE_VALIDATION", category: EDebugCategory.MAP_EDITOR, mode: "mapeditor", checkbox: {} };
ALL_BUTTONS[126] = { label: "MAP_EDITOR_UNLOCK_FULL_PALETTE", category: EDebugCategory.MAP_EDITOR, mode: "mapeditor", checkbox: {} };
ALL_BUTTONS[127] = { label: "MAP_EDITOR_BYPASS_PLACEMENT_ZONES", category: EDebugCategory.MAP_EDITOR, mode: "mapeditor", checkbox: {} };
ALL_BUTTONS[128] = { label: "MAP_EDITOR_GO_HOME", category: EDebugCategory.MAP_EDITOR, mode: "mapeditor" };
ALL_BUTTONS[129] = { label: "PAUSE_MUSIC_TOGGLE", category: EDebugCategory.AUDIO };
ALL_BUTTONS[130] = { label: "MUSIC_VOLUME_CYCLE_0_50_100", category: EDebugCategory.AUDIO };
ALL_BUTTONS[131] = { label: "BOSS_MUSIC_TOGGLE", category: EDebugCategory.AUDIO };
ALL_BUTTONS[132] = { label: "ADD_BP_XP", category: EDebugCategory.BRAWL_PASS, actionIdx: 81, intParameter: 1000 };
ALL_BUTTONS[133] = { label: "BUY_BP_SEASON_1", category: EDebugCategory.BRAWL_PASS, actionIdx: 94, intParameter: 0 };
ALL_BUTTONS[134] = { label: "BUY_BP_SEASON_2", category: EDebugCategory.BRAWL_PASS, actionIdx: 94, intParameter: 1 };
ALL_BUTTONS[135] = { label: "BUY_BP_SEASON_3", category: EDebugCategory.BRAWL_PASS, actionIdx: 94, intParameter: 2 };
ALL_BUTTONS[136] = { label: "BP_DEBUG_RESET_PROGRESS", category: EDebugCategory.BRAWL_PASS, actionIdx: 171, intParameter: 1 };
ALL_BUTTONS[137] = { label: "COMP_PASS_NEW_SEASON", category: EDebugCategory.BRAWL_PASS, actionIdx: 284, intParameter: 1 };
ALL_BUTTONS[138] = { label: "COMP_PASS_PROGRESS", category: EDebugCategory.BRAWL_PASS, actionIdx: 285, intParameter: 1 };
ALL_BUTTONS[139] = { label: "COMP_PASS_DEBUG_RESET", category: EDebugCategory.BRAWL_PASS, actionIdx: 287, intParameter: 1 };
ALL_BUTTONS[140] = { label: "ADD_CHAMPIONSHIP_WIN", category: EDebugCategory.CHALLENGE, actionIdx: 84, intParameter: 1 };
ALL_BUTTONS[141] = { label: "ADD_CHAMPIONSHIP_LOSS", category: EDebugCategory.CHALLENGE, actionIdx: 95, intParameter: 1 };
ALL_BUTTONS[142] = { label: "ADD_PRO_LEAGUE_POINT", category: EDebugCategory.CHALLENGE, actionIdx: 91, intParameter: 1 };
ALL_BUTTONS[143] = { label: "SET_CC_ESPORTS_QUALIFIED", category: EDebugCategory.CHALLENGE, actionIdx: 102, intParameter: 1 };
ALL_BUTTONS[144] = { label: "REMOVE_CC_ESPORTS", category: EDebugCategory.CHALLENGE, actionIdx: 103, intParameter: 1 };
ALL_BUTTONS[145] = { label: "COLLAB_SIDE_SEEN", category: EDebugCategory.CHALLENGE, actionIdx: 266, intParameter: 1 };
ALL_BUTTONS[146] = { label: "ADD_DAILY_STREAK", category: EDebugCategory.TIME, actionIdx: 288, intParameter: 1 };
ALL_BUTTONS[147] = { label: "PLAYER_CONTEST_END", category: EDebugCategory.TIME, actionIdx: 268, intParameter: 1 };
ALL_BUTTONS[148] = { label: "TROPHY_SEASON_END_NOTIF", category: EDebugCategory.TIME, actionIdx: 245, intParameter: 1 };
ALL_BUTTONS[149] = { label: "AA_DIALOG", category: EDebugCategory.NOTIFICATIONS, mode: "home" };
ALL_BUTTONS[150] = { label: "FORCE_ACTIVE_NOTIFICATIONS", category: EDebugCategory.NOTIFICATIONS, mode: "home" };
ALL_BUTTONS[151] = { label: "FORCE_ALL_NOTIFICATIONS", category: EDebugCategory.NOTIFICATIONS, mode: "home" };
ALL_BUTTONS[152] = { label: "RESET_FORCED_NOTIFICATIONS", category: EDebugCategory.NOTIFICATIONS, mode: "home" };
ALL_BUTTONS[153] = { label: "DEVICE_LINK_SCREEN", category: EDebugCategory.PRC_CHINA, mode: "home" };
ALL_BUTTONS[154] = { label: "OPEN_YOOZOO_UPDATE_URL", category: EDebugCategory.PRC_CHINA, mode: "home" };
ALL_BUTTONS[155] = { label: "GFX_QUALITY_CYCLE", category: EDebugCategory.GFX };
ALL_BUTTONS[156] = { label: "MEM_QUALITY_CYCLE", category: EDebugCategory.GFX };
ALL_BUTTONS[157] = { label: "SMOOTH_HUD", category: EDebugCategory.GFX, checkbox: {} };
ALL_BUTTONS[158] = { label: "TOGGLE_FPS_COUNTER", category: EDebugCategory.GFX, checkbox: {} };
ALL_BUTTONS[159] = { label: "USE_LOW_END_RES", category: EDebugCategory.GFX, checkbox: {} };
ALL_BUTTONS[160] = { label: "GUI_UI_INSPECTOR", category: EDebugCategory.GUI, checkbox: {} };
ALL_BUTTONS[161] = { label: "GUI_CLOSE_ALL_POPUPS", category: EDebugCategory.GUI };
ALL_BUTTONS[162] = { label: "GUI_TEST_FLOATER", category: EDebugCategory.GUI };
ALL_BUTTONS[163] = { label: "LATENCY_TEST_START", category: EDebugCategory.TESTS };
ALL_BUTTONS[164] = { label: "REQUEST_SEASON_REWARDS", category: EDebugCategory.TESTS };
ALL_BUTTONS[165] = { label: "START_TUTORIAL_FROM_CONVERSION", category: EDebugCategory.TESTS, mode: "home" };
ALL_BUTTONS[166] = { label: "FAKE_MAINTENANCE_MODE", category: EDebugCategory.TESTS, mode: "home" };
ALL_BUTTONS[167] = { label: "FAKE_SHORT_MAINTENANCE_30S", category: EDebugCategory.TESTS, mode: "home" };
ALL_BUTTONS[168] = { label: "FAKE_2_TAB_MAINTENANCE", category: EDebugCategory.TESTS, mode: "home" };
ALL_BUTTONS[169] = { label: "FAKE_3_TAB_MAINTENANCE", category: EDebugCategory.TESTS, mode: "home" };
ALL_BUTTONS[170] = { label: "FAKE_NEWS_ESPORTS_MAINTENANCE", category: EDebugCategory.TESTS, mode: "home" };
ALL_BUTTONS[171] = { label: "TEST_CONTENT_UPDATE", category: EDebugCategory.TESTS, checkbox: {} };
ALL_BUTTONS[172] = { label: "TEST_DEFERRED_DOWNLOAD", category: EDebugCategory.TESTS };
ALL_BUTTONS[173] = { label: "TRIGGER_APP_REVIEW", category: EDebugCategory.TESTS };
ALL_BUTTONS[174] = { label: "RANKED_SEASON_END_POPUP", category: EDebugCategory.RANKED, mode: "home" };
DebugButtonSpecs.ALL_BUTTONS = ALL_BUTTONS;

var DISABLE_CHILDRENS = [3, 6, 7, 8, 9, 10, 11, 12, 13, 14];

class CategoryManagementPopup extends GenericPopup {
    constructor(character) {
        super("popup_notification_settings");
        this.character = character;
        var movieClip = this.getMovieClip();
        DISABLE_CHILDRENS.forEach(function (e) {
            movieClip.getChildById(e).visibility = false;
            return movieClip.getChildById(e);
        });
        this.bg = movieClip.getChildById(2);
        var characterTid = character.getTID();
        this.setTitleTid(Localisation.getString("ManageCategories_Title").replace("{characterName}", StringTable.getString(characterTid)));
        this.createItems();
        var closeButton = this.addGameButton("close_button", 1);
        this.closeButton = closeButton;
        closeButton.setCustomButtonListener(this.closeButtonPressed.bind(this));
    }
    createItems() {
        this.createScrollArea();
    }
    createScrollArea() {
        var area = new ScrollArea(1000, 270, 100);
        area.x = -370.88;
        area.y = -160;
        area.enablePinching(false);
        area.enableHorizontalDrag(false);
        area.enableVerticalDrag(true);
        area.setAlignment(4);
        area.setClipping(true);
        this.addChild(area);
        this.scrollArea = area;
    }
    createTestContent() {
        var i = 0;
        while (i < 7) {
            var popupClip = StringTable.getMovieClip("sc/ui.sc", "popup_notification_settings");
            var child = popupClip.getChildById(2);
            if (child) {
                child.setHeight(80);
                child.setWidth(1470);
                child.x = 0;
                child.y = i * 90;
                child.colorTransform.r = 255;
                child.colorTransform.g = 0;
                child.colorTransform.b = 0;
                _.LogInfo("hey nigga", i);
                this.scrollArea.addContent(child, true);
            }
            i++;
        }
    }
    updateElements(deltaTime) {
        if (this.scrollArea) {
            this.scrollArea.update(deltaTime);
            return;
        }
    }
}
