// =============================================================
// DEBUG MENU
// merged webpack modules: 8667 DebugMenu, 566 DebugMenuBase, 8892 DebugMenuButton, 8048 DebugMenuCategory, 6670 DebugMenuState, 8139 ToggleDebugMenuButton, 6242 DebugButtonSpecs, 4595 CategoryManagementPopup
// =============================================================

// --------------------- MODULE 8667 — DebugMenu ---------------------

// ============================================================ //
// webpack module 8667  —  DebugMenu
// exports: DebugMenu
// deps: 118 (DebugGameButton), 566 (DebugMenuBase), 612 (MovieClip), 699 (FileManager), 783 (DownloadManager), 1019 (DebugCommandButton), 2214 (ModProperties), 3256 (DebugSearch), 3380 (Logcat), 4009 (Config), 4272 (EDebugger), 4419 (ExceptionWorker), 4934 (GUI), 4974 (Breadcrumbs), 6118 (DebugRecents), 6242 (DebugButtonSpecs), 7265 (Localisation), 8048 (DebugMenuCategory), 8087 (LogicDebugButtonMessage), 8139 (ToggleDebugMenuButton) ...
// ============================================================ //

__webpack_modules__[8667] = function DebugMenu_factory(__unused_webpack_module, exports, __webpack_require__) {
    var GameMain, DebugGameButton, DebugCommandButton, DebugMenuBase, DebugMenuCategory, MovieClip, ModProperties, GUI, Localisation, ToggleDebugMenuButton, StringTable, ExceptionWorker, Breadcrumbs, DownloadManager, EDebugger, LogicDebugButtonMessage, DebugButtonSpecs, Config, DebugRecents, DebugSearch, FileManager, Logcat, RECENT_BUTTON_PREFIX, DebugMenu, <class_fields_init>, DebugMenu;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.DebugMenu = undefined;
        GameMain = __webpack_require__(8775);
        DebugGameButton = __webpack_require__(118);
        DebugCommandButton = __webpack_require__(1019);
        DebugMenuBase = __webpack_require__(566);
        DebugMenuCategory = __webpack_require__(8048);
        MovieClip = __webpack_require__(612);
        ModProperties = __webpack_require__(2214);
        GUI = __webpack_require__(4934);
        Localisation = __webpack_require__(7265);
        ToggleDebugMenuButton = __webpack_require__(8139);
        StringTable = __webpack_require__(9250);
        ExceptionWorker = __webpack_require__(4419);
        Breadcrumbs = __webpack_require__(4974);
        DownloadManager = __webpack_require__(783);
        EDebugger = __webpack_require__(4272);
        LogicDebugButtonMessage = __webpack_require__(8087);
        DebugButtonSpecs = __webpack_require__(6242);
        Config = __webpack_require__(4009);
        DebugRecents = __webpack_require__(6118);
        DebugSearch = __webpack_require__(3256);
        FileManager = __webpack_require__(699);
        Logcat = __webpack_require__(3380);
        RECENT_BUTTON_PREFIX = "RECENT: ";
        static onBattleModeChange (isBattle) {
    var battleCat;
        battleCat = (this).getCategory(((DebugMenuCategory).EDebugCategory).BATTLE);
        if (battleCat) {
            (battleCat).setOpened(isBattle);
            return;
        } /* if 0xd86fa (open) */
};
        static onMapEditorChange (isMapEditor) {
    var mapEditorCat;
        mapEditorCat = (this).getCategory(((DebugMenuCategory).EDebugCategory).MAP_EDITOR);
        if (mapEditorCat) {
            (mapEditorCat).setOpened(isMapEditor);
            return;
        } /* if 0xd8754 (open) */
};
        static createTopLevelButtons () {
        (this).createDebugMenuButton("RESTART_GAME", -1, -1, 0);
        if ((!((Config).Config).useDebugLogging)) {
            return;
        } /* if 0xd87aa */
        (this).createDebugMenuButton("SHOW_BSD_API_RESPONSE", -1, -1, 0, undefined, ((((Config).Config).config).ShowBSDApiResponse === true), function (button) {
    var checkbox, message;
        ((Config).Config).config.ShowBSDApiResponse = (!(((Config).Config).config).ShowBSDApiResponse);
        ((FileManager).FileManager).updateConfigFile();
        checkbox = (new (DebugGameButton).DebugGameButton(button)).getCheckbox();
        if ((!(checkbox).isNull())) {
            if ((((Config).Config).config).ShowBSDApiResponse) {
            } /* if 0xd88f4 */
            /* jump -> 0xd88f5 */
        } /* if 0xd88f9 */
        if ((((Config).Config).config).ShowBSDApiResponse) {
        } /* if 0xd891e */
        /* jump -> 0xd8923 */
        message = "ON"("OFF");
        ((EDebugger).EDebugger).addMessage(((EDebugger).EDebugger).INFO, message);
        return;
}, false);
        (this).createDebugMenuButton("CLEAR_EVERY_LOCATION_THEME", -1, -1, 0);
        (this).createDebugMenuButton("CRASH_GAME", -1, -1, 0);
        (this).createDebugMenuButton("CLEAR_DOWNLOADED_ASSETS", -1, -1, 0);
        return;
};
        static createCategoryButtons () {
    var spec, mode, wrapCallback, baseCallback, getState;
        /* jump -> 0xd8b27 */
        spec = /*iter*/ (DebugButtonSpecs).ALL_BUTTONS;
        if ((spec).isDev) {
            if ((!((Config).Config).useDebugLogging)) {
            } /* if 0xd89ea */
        } /* if 0xd89ea */
        /* jump -> 0xd8b27 */
        if ((((spec).mode) == null)) {
            mode = "both";
        } /* if 0xd89fc */
        wrapCallback = mode = wrapCallback = (DebugButtonSpecs).ALL_BUTTONS;
        if ((spec).checkbox) {
            if ((spec).callback) {
                baseCallback = wrapCallback((spec).callback);
                getState = ((spec).checkbox).getState;
                (this).createDebugMenuButton((spec).label, -1, -1, 0, (spec).category, getState(), function (button) {
    var btn, checkbox;
        baseCallback();
        btn = new (DebugGameButton).DebugGameButton(button);
        checkbox = (btn).getCheckbox();
        if ((!(checkbox).isNull())) {
            if (getState()) {
            } /* if 0xd8c34 */
            /* jump -> 0xd8c35 */
            return;
        } /* if 0xd8c39 (open) */
}, false, mode);
            } /* if 0xd8a6c */
        } /* if 0xd8a6c */
        /* jump -> 0xd8b24 */
        if ((spec).callback) {
            (this).createDebugMenuButton((spec).label, -1, -1, 0, (spec).category, -1, wrapCallback((spec).callback), false, mode);
        } /* if 0xd8aa7 */
        /* jump -> 0xd8b23 */
        if ((spec).wip) {
            (this).createDebugMenuButton(((spec).label + " (WIP)"), -1, -1, 0, (spec).category, -1, undefined, false, mode);
        } /* if 0xd8ae1 */
        /* jump -> 0xd8b23 */
        if ((((spec).actionIdx) == null)) {
        } /* if 0xd8afe */
        if ((((spec).intParameter) == null)) {
        } /* if 0xd8b0c */
        (this).createDebugMenuButton((spec).label, -1, -1, 2, (spec).category, -1, undefined, true, mode);
        } while (!baseCallback = getState = spec = <underflow>);
        return;
};
        static wireSearchInput () {
    var filterInput, inputButton, clearButton, clearText;
        filterInput = ((this).movieClip).getTextFieldByName("filter_input");
        if ((!filterInput)) {
            return;
        } /* if 0xd8c9f */
        inputButton = (this).addGameButton("debug_menu_input_button", 2);
        (this).attachSearchInput(filterInput);
        (inputButton).setCustomButtonListener(function () {
        return (this).activateSearch();
});
        clearButton = (this).addGameButton("clear_button", 2);
        clearText = ((clearButton).getMovieClip()).getTextFieldByName("text");
        if (clearText) {
            clearText.text = "clear";
        } /* if 0xd8d08 */
        return;
};
        static rebuildRecentCategory () {
    var recents, category, label, source;
        recents = ((DebugRecents).DebugRecents).getAll();
        if ((((this).getCategory(((DebugMenuCategory).EDebugCategory).RECENT)) == null)) {
            (this).getCategory(((DebugMenuCategory).EDebugCategory).RECENT);
            category = (this).createCategory("Recent", ((DebugMenuCategory).EDebugCategory).RECENT);
        } /* if 0xd8ea6 */
        category.buttons = [];
        /* jump -> 0xd8f21 */
        label = /*iter*/ recents;
        source = ((DebugButtonSpecs).ALL_BUTTONS).find(function (s) {
        return ((s).label === label);
});
        if ((!source)) {
        } /* if 0xd8ee3 */
        /* jump -> 0xd8f21 */
        if ((((source).mode) == null)) {
        } /* if 0xd8f17 */
        (this).createDebugMenuButton((RECENT_BUTTON_PREFIX + label), -1, -1, 0, ((DebugMenuCategory).EDebugCategory).RECENT, -1, function () {
        if ((source).callback) {
            (source).callback();
            return;
        } /* if 0xd8f91 */
        if (((source).actionIdx !== undefined)) {
            if (((source).actionIdx !== -1)) {
                if ((!(source).wip)) {
                    if ((((source).intParameter) == null)) {
                    } /* if 0xd8fdb */
                    ((LogicDebugButtonMessage).LogicDebugButtonMessage).send((source).actionIdx, -1);
                    return;
                } /* if 0xd8fdf (open) */
            } /* if 0xd8fdf (open) */
        } /* if 0xd8fdf (open) */
}, false, "both");
        } while (!source = recents);
        label = category;
        return;
};
        static createTsResourceButtons () {
    var label, resource, amount, label, amount, type, label, actionIdx, amount, type;
        /* jump -> 0xd909a */
        label = (Object(/*iter*/ (DebugButtonSpecs).RESOURCE_BUTTONS)).label;
        resource = (Object(/*iter*/ (DebugButtonSpecs).RESOURCE_BUTTONS)).resource;
        amount = (Object(/*iter*/ (DebugButtonSpecs).RESOURCE_BUTTONS)).amount;
        Object(/*iter*/ (DebugButtonSpecs).RESOURCE_BUTTONS);
        (this).createDebugMenuButton(label, -1, amount, 2, ((DebugMenuCategory).EDebugCategory).ACCOUNT, -1, function () {
        return ((LogicDebugButtonMessage).LogicDebugButtonMessage).addResource(resource, amount);
}, false);
        } while (!(DebugButtonSpecs).RESOURCE_BUTTONS);
        label = resource = amount = <underflow>;
        /* jump -> 0xd9100 */
        label = (Object(/*iter*/ (DebugButtonSpecs).FX_BUTTONS)).label;
        amount = (Object(/*iter*/ (DebugButtonSpecs).FX_BUTTONS)).amount;
        type = (Object(/*iter*/ (DebugButtonSpecs).FX_BUTTONS)).type;
        Object(/*iter*/ (DebugButtonSpecs).FX_BUTTONS);
        (this).createDebugMenuButton(label, -1, amount, 2, ((DebugMenuCategory).EDebugCategory).ACCOUNT, -1, function () {
        return ((LogicDebugButtonMessage).LogicDebugButtonMessage).showFloater(amount, type);
}, false);
        } while (!(DebugButtonSpecs).FX_BUTTONS);
        label = amount = type = <underflow>;
        /* jump -> 0xd9177 */
        label = (Object(/*iter*/ (DebugButtonSpecs).NATIVE_FLOATER_OVERRIDE_BUTTONS)).label;
        actionIdx = (Object(/*iter*/ (DebugButtonSpecs).NATIVE_FLOATER_OVERRIDE_BUTTONS)).actionIdx;
        amount = (Object(/*iter*/ (DebugButtonSpecs).NATIVE_FLOATER_OVERRIDE_BUTTONS)).amount;
        type = (Object(/*iter*/ (DebugButtonSpecs).NATIVE_FLOATER_OVERRIDE_BUTTONS)).type;
        Object(/*iter*/ (DebugButtonSpecs).NATIVE_FLOATER_OVERRIDE_BUTTONS);
        (this).createDebugMenuButton(label, -1, amount, 2, ((DebugMenuCategory).EDebugCategory).ACCOUNT, -1, function () {
        return ((LogicDebugButtonMessage).LogicDebugButtonMessage).executeNativeWithFloater(actionIdx, amount, type);
}, false);
        } while (!(DebugButtonSpecs).NATIVE_FLOATER_OVERRIDE_BUTTONS);
        label = actionIdx = amount = type = <underflow>;
        return;
};
        static createTsUnlockButtons () {
        (this).createDebugMenuButton("UNLOCK_ALL_BRAWLERS", -1, -1, 2, ((DebugMenuCategory).EDebugCategory).GACHA_IAP, -1, function () {
        return ((LogicDebugButtonMessage).LogicDebugButtonMessage).unlockAllBrawlers();
}, false);
        (this).createDebugMenuButton("UPGRADE_ALL_BRAWLERS", -1, -1, 2, ((DebugMenuCategory).EDebugCategory).GACHA_IAP, -1, function () {
        return ((LogicDebugButtonMessage).LogicDebugButtonMessage).upgradeAllBrawlers();
}, false);
        return;
};
        static sortButtonsAndCategories () {
    var categories, buttons;
        categories = [];
        buttons = [];
        ((this).buttons).forEach(function (a) {
        if ((a instanceof (DebugMenuCategory).DebugMenuCategory)) {
            (categories).push(a);
            return;
        } /* if 0xd9401 */
        (buttons).push(a);
        return;
});
        (buttons).sort(function (a, b) {
    var aIsRemove, bIsRemove, nameA, nameB;
        aIsRemove = ((a).getOriginalName()).startsWith("REMOVE");
        bIsRemove = ((b).getOriginalName()).startsWith("REMOVE");
        if ((aIsRemove !== bIsRemove)) {
            if (aIsRemove) {
                return 1;
            } /* if 0xd9492 */
            return -1;
        } /* if 0xd9494 */
        nameA = (a).getTextFieldText();
        nameB = (b).getTextFieldText();
        if ((nameA < nameB)) {
            return -1;
        } /* if 0xd94b3 */
        if ((nameA > nameB)) {
            return 1;
        } /* if 0xd94be */
        return 0;
});
        (categories).sort(function (a, b) {
    var aRecent, bRecent;
        aRecent = ((a).enumeration === ((DebugMenuCategory).EDebugCategory).RECENT);
        bRecent = ((b).enumeration === ((DebugMenuCategory).EDebugCategory).RECENT);
        if ((aRecent !== bRecent)) {
            if (aRecent) {
                return -1;
            } /* if 0xd9538 */
            return 1;
        } /* if 0xd953a */
        if (((a).name < (b).name)) {
            return -1;
        } /* if 0xd954b */
        if (((a).name > (b).name)) {
            return 1;
        } /* if 0xd955c */
        return 0;
});
        this.buttons = (buttons).concat(categories);
        return;
};
        static isButtonAvailable (name) {
        if ((DebugMenu).isNotImplemented(name)) {
            ((GUI).GUI).showFloaterTextAtDefaultPosition(((Localisation).Localisation).getString("NOT_IMPLEMENTED_YET"));
            return false;
        } /* if 0xd95ef */
        return true;
};
        static buttonPressed (listener, button) {
    var gameButton, name;
        gameButton = new (DebugGameButton).DebugGameButton(button);
        name = (gameButton).getOriginalName();
        if ((!(this).isButtonAvailable(name))) {
            return;
        } /* if 0xd9675 */
        ((DebugRecents).DebugRecents).push(name);
        if ((name === "RESTART_GAME")) {
            ((GameMain).GameMain).reloadGame();
        } /* if 0xd96a9 */
        /* jump -> 0xd9776 */
        if ((name === "TEST_FEATURE")) {
            ((ExceptionWorker).ExceptionWorker).logException("TEST_MESSAGE", ((Breadcrumbs).Breadcrumbs).dump());
        } /* if 0xd96db */
        /* jump -> 0xd9776 */
        if (!(name === "SPAWN_SKINPREVIEW")) {
            if ((name === "CRASH_GAME")) {
                (((GameMain).GameMain).getInstance()).writePointer(NULL);
            } /* if 0xd9710 */
            /* jump -> 0xd9775 */
            if ((name === "CLEAR_DOWNLOADED_ASSETS")) {
                ((DownloadManager).DownloadManager).clear();
            } /* if 0xd972c */
            /* jump -> 0xd9775 */
            if ((name === "CLEAR_DEBUGGER")) {
                ((EDebugger).EDebugger).clear();
            } /* if 0xd9748 */
            /* jump -> 0xd9775 */
            if ((name === "CLEAR_EVERY_LOCATION_THEME")) {
                ((Config).Config).config.LocationThemeOverrides = {};
                ((GameMain).GameMain).reloadGame();
                return;
            } /* if 0xd9775 (open) */
        } /* if 0xd9778 (open) */
};
        static createDebugMenuButton (name) {
    var actionIdx, intParameter, btnType, category, state, callback, translate, mode, name, actionIdx, intParameter, btnType, category, state, callback, translate, mode, movieClip, checkBox, localizedName, anotherMovieClip, e, categoryName, debugCmdButton, button, formattedName;
        checkBox = this;
        actionIdx = name;
        if (((actionIdx) === undefined)) {
            intParameter = actionIdx = -1;
        } /* if 0xd9890 */
        if (((intParameter) === undefined)) {
            btnType = intParameter = -1;
        } /* if 0xd9899 */
        if (((btnType) === undefined)) {
            category = btnType = 0;
        } /* if 0xd98a2 */
        state = category;
        if (((state) === undefined)) {
            callback = state = -1;
        } /* if 0xd98b4 */
        translate = callback;
        if (((translate) === undefined)) {
            mode = translate = true;
        } /* if 0xd98c7 */
        if (((mode) === undefined)) {
            name = mode = "both";
        } /* if 0xd98d9 */
        actionIdx = ((StringTable).StringTable).getMovieClip("sc/debug.sc", "debug_menu_item");
        intParameter = null;
        if (translate) {
        } /* if 0xd9924 */
        /* jump -> 0xd9925 */
        btnType = name;
        if ((state != -1)) {
            /* CATCH -> 0xd999e (try region) */
            ((GameMain).GameMain).loadAsset("sc/debug_addons.sc");
            category = ((StringTable).StringTable).getMovieClip_safe("sc/debug_addons.sc", "debug_menu_checkbox");
            if (category) {
                intParameter = (category).getChildById(2);
                intParameter.visibility = state;
                (actionIdx).addChild(intParameter);
            } /* if 0xd9998 */
        } /* if 0xd99a6 */
        /* jump -> 0xd99a6 */
        state = category = ((Localisation).Localisation).getString(name);
        /* CATCH -> 0xd99a8 (try region) */
        actionIdx = intParameter = btnType = callback = mode = movieClip = actionIdx = intParameter = btnType = category = state = callback = translate = mode = name = <underflow>;
        /* jump -> 0xd99a6 */
        throw <underflow>;
        if ((category !== undefined)) {
        } /* if 0xd99bf */
        /* jump -> 0xd99c0 */
        callback = "";
        if ((actionIdx != -1)) {
            translate = new (DebugCommandButton).DebugCommandButton(actionIdx, intParameter, btnType);
            (translate).setMovieClip(actionIdx, true);
            (translate).setCategoryName(callback);
            (translate).setOriginalName(name);
            (translate).setTextFieldText(btnType);
            translate.mode = mode;
            (translate).setCustomButtonListener(function (l, b) {
        (debugCmdButton).callback(l, b);
        return;
});
            return;
        } /* if 0xd9a40 */
        mode = new (DebugGameButton).DebugGameButton();
        (mode).setMovieClip(actionIdx, true);
        mode.mode = mode;
        if (((DebugMenu).dangerousFunctions).includes(name)) {
        } /* if 0xd9a93 */
        /* jump -> 0xd9a96 */
        movieClip = btnType;
        (mode).setTextFieldText(movieClip);
        (mode).setIntParameter(intParameter);
        (mode).setCategoryName(callback);
        if (intParameter) {
            (mode).setCheckbox((intParameter).instance);
        } /* if 0xd9adc */
        (mode).setOriginalName(name);
        (checkBox).addButton(mode, category);
        if (callback) {
            if ((checkBox).isButtonAvailable(btnType)) {
                (mode).setCustomButtonListener(function (l, b) {
        return;
});
                return;
            } /* if 0xd9b1c (open) */
        } /* if 0xd9b1c (open) */
};
        <class_fields_init> = undefined;
        DebugMenu;
        class DebugMenu extends <class_fields_init> = (DebugMenuBase).DebugMenuBase {
            constructor () {
    var textField, closeBtn, this.active_func, new.target;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        this = super("sc/debug.sc", "debug_menu");
        if (<class_fields_init>) {
        } /* if 0xd840e */
        (this).setTitle("Debug Menu");
        textField = ((this).movieClip).getTextFieldByName("version");
        if (textField) {
            textField.text = ("BSD ").concat(((ModProperties).ModProperties).version);
            textField.color = 4278255375.0;
            ((this).movieClip).addChild(new (MovieClip).MovieClip((textField).instance));
        } /* if 0xd848d */
        this.toggleDebugMenuButton = new (ToggleDebugMenuButton).ToggleDebugMenuButton();
        closeBtn = ((this).movieClip).getChildByName("close_button");
        if (closeBtn) {
            ((this).toggleDebugMenuButton).setMovieClip(new (MovieClip).MovieClip((closeBtn).instance), true);
            ((this).movieClip).addChild((this).toggleDebugMenuButton);
        } /* if 0xd84fb */
        (this).createTopLevelButtons();
        (this).createCategoryButtons();
        (this).createTsResourceButtons();
        (this).createTsUnlockButtons();
        (this).rebuildRecentCategory();
        this.searchHelpField = ((this).movieClip).getTextFieldByName("search_help");
        if ((this).searchHelpField) {
            (this).searchHelpField.text = "BSD Brawl";
            (this).searchHelpField.visibility = (((DebugSearch).DebugSearch).getQuery().length === 0);
        } /* if 0xd8590 */
        (this).wireSearchInput();
        (this).sortButtonsAndCategories();
        ((DebugRecents).DebugRecents).onChange(function () {
        (this).rebuildRecentCategory();
        return;
});
        ((DebugSearch).DebugSearch).onChange(function () {
        if ((this).searchHelpField) {
            (this).searchHelpField.visibility = (((DebugSearch).DebugSearch).getQuery().length === 0);
        } /* if 0xd868e */
        return;
});
        (this).refreshFilters();
        this.shouldUpdateLayout = true;
        (this).update(0);
        return this;
}
            clearSearch () {
        return;
}
            setSearchQuery (q) {
        return;
}
            clearRecents () {
        return;
}
            isNotImplemented (name) {
        return ((DebugMenu).notImplementedFunctions).includes(name);
}
        }
        DebugMenu = Localisation = DebugMenu;
        exports.DebugMenu = DebugMenu;
        DebugMenu.notImplementedFunctions = [];
        DebugMenu.dangerousFunctions = [];
        return;
};

// --------------------- MODULE 566 — DebugMenuBase ---------------------

// ============================================================ //
// webpack module 566  —  DebugMenuBase
// exports: DebugMenuBase
// deps: 1019 (DebugCommandButton), 3210 (GUIContainer), 3256 (DebugSearch), 3401 (GameStateManager), 6128 (BattleMode), 6670 (DebugMenuState), 7265 (Localisation), 8048 (DebugMenuCategory), 8632 (Stage), 8674 (GameInputField), 9016 (ScrollArea), 9250 (StringTable), 9407 (DropGUIContainer)
// ============================================================ //

__webpack_modules__[566] = function DebugMenuBase_factory(__unused_webpack_module, exports, __webpack_require__) {
    var DropGUIContainer, ScrollArea, Stage, StringTable, DebugCommandButton, DebugMenuCategory, Localisation, GUIContainer, DebugSearch, BattleMode, GameStateManager, GameInputField, DebugMenuState, SEARCH_INPUT_MAX_LENGTH, DebugMenuBase, <class_fields_init>, DebugMenuBase;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.DebugMenuBase = undefined;
        DropGUIContainer = __webpack_require__(9407);
        ScrollArea = __webpack_require__(9016);
        Stage = __webpack_require__(8632);
        StringTable = __webpack_require__(9250);
        DebugCommandButton = __webpack_require__(1019);
        DebugMenuCategory = __webpack_require__(8048);
        Localisation = __webpack_require__(7265);
        GUIContainer = __webpack_require__(3210);
        DebugSearch = __webpack_require__(3256);
        BattleMode = __webpack_require__(6128);
        GameStateManager = __webpack_require__(3401);
        GameInputField = __webpack_require__(8674);
        DebugMenuState = __webpack_require__(6670);
        SEARCH_INPUT_MAX_LENGTH = 64;
        static needToUpdateLayout () {
        this.shouldUpdateLayout = true;
        return;
};
        static buttonPressed (listener, button) {
        return;
};
        static createCategory (categoryName, enumeration) {
    var category;
        category = new (DebugMenuCategory).DebugMenuCategory(categoryName, enumeration);
        category.onToggle = function () {
        (this).needToUpdateLayout();
        return;
};
        ((category).mini).setCustomButtonListener(function () {
        return (this).onMiniTabPressed(category);
});
        ((this).buttons).push(category);
        return category;
};
        static onMiniTabPressed (clicked) {
    var wasOpen, isMainTab;
        wasOpen = (clicked).isCategoryOpened();
        isMainTab = ((clicked).enumeration === ((DebugMenuCategory).EDebugCategory).MAIN);
        ((this).buttons).forEach(function (btn) {
        if ((btn instanceof (DebugMenuCategory).DebugMenuCategory)) {
            (btn).setOpened(false);
            return;
        } /* if 0xda34f (open) */
});
        if ((!isMainTab)) {
            if ((!wasOpen)) {
                (clicked).setOpened(true);
            } /* if 0xda2fe */
        } /* if 0xda2fe */
        (this).needToUpdateLayout();
        return;
};
        static getCategory (enumeration) {
    var category;
        category = null;
        ((this).buttons).forEach(function (btn) {
        if ((btn instanceof (DebugMenuCategory).DebugMenuCategory)) {
            if (((btn).enumeration == enumeration)) {
                category = btn;
                return;
                return;
            } /* if 0xda3dc (open) */
        } /* if 0xda3dc (open) */
});
        return category;
};
        static removeCategory (enumeration) {
        this.buttons = ((this).buttons).filter(function (btn) {
        if ((btn instanceof (DebugMenuCategory).DebugMenuCategory)) {
            return ((btn).enumeration != enumeration);
        } /* if 0xda461 */
        return true;
});
        return;
};
        static addButton (button, categoryEnum) {
    var category, categoryTranslation;
        if ((!(button instanceof (DebugCommandButton).DebugCommandButton))) {
            (button).setCustomButtonListener(((this).buttonPressed).bind(this));
        } /* if 0xda4ca */
        if (categoryEnum) {
            category = (this).getCategory(categoryEnum);
            if ((!category)) {
                categoryTranslation = ((Localisation).Localisation).getString((DebugMenuCategory).EDebugCategory[categoryEnum]);
                category = (this).createCategory(categoryTranslation, categoryEnum);
            } /* if 0xda511 */
            ((category).buttons).push(button);
            return;
        } /* if 0xda524 */
        ((this).buttons).push(button);
        return;
};
        static setTitle (title) {
        if (((((this).movieClip).getTextFieldByName("title")) == null)) {
            ((this).movieClip).getTextFieldByName("title");
        } /* if 0xda578 */
        /* jump -> 0xda581 */
        return;
};
        static refreshFilters () {
    var opts, opts, query, isBattle, isMapEditor, context;
        context = this;
        if (((opts) === undefined)) {
            opts = opts = {};
        } /* if 0xda5e2 */
        opts = ((DebugSearch).DebugSearch).getQuery();
        query = (!(((BattleMode).BattleMode).getInstance()).isNull());
        isBattle = ((GameStateManager).GameStateManager).isInState(((GameStateManager).GameStateId).MapEditor);
        if (isBattle) {
        } /* if 0xda644 */
        /* jump -> 0xda655 */
        if (query) {
        } /* if 0xda650 */
        /* jump -> 0xda655 */
        isMapEditor = "home";
        ((context).buttons).forEach(function (btn) {
    var anyVisible, modeOk, searchOk;
        if ((btn instanceof (DebugMenuCategory).DebugMenuCategory)) {
            anyVisible = false;
            ((btn).buttons).forEach(function (child) {
    var modeOk, searchOk;
        if (!((child).mode === "both")) {
            ((child).mode === "both");
            modeOk = ((child).mode === context);
        } /* if 0xda7de */
        if (!(query.length === 0)) {
            (query.length === 0);
            searchOk = (((child).getTextFieldText()).toLowerCase()).includes(query);
        } /* if 0xda805 */
        if (modeOk) {
        } /* if 0xda811 */
        child.isFilteredOut = (!searchOk);
        if ((!(child).isFilteredOut)) {
            anyVisible = true;
            return;
        } /* if 0xda826 (open) */
});
            btn.isFilteredOut = (!anyVisible);
            if ((opts).syncCategoryOpenStateToSearch) {
                if ((query.length > 0)) {
                    if (anyVisible) {
                        (btn).setOpened(true);
                    } /* if 0xda709 */
                } /* if 0xda709 */
            } /* if 0xda71c */
            /* jump -> 0xda71c */
            if ((query.length === 0)) {
                (btn).setOpened(false);
            } /* if 0xda71c */
            return;
        } /* if 0xda720 */
        if (!((btn).mode === "both")) {
            ((btn).mode === "both");
            modeOk = ((btn).mode === context);
        } /* if 0xda740 */
        if (!(query.length === 0)) {
            (query.length === 0);
            searchOk = (((btn).getTextFieldText()).toLowerCase()).includes(query);
        } /* if 0xda767 */
        if (modeOk) {
        } /* if 0xda773 */
        btn.isFilteredOut = (!searchOk);
        return;
});
        return;
};
        static attachSearchInput (searchTextField, tapTarget) {
        this.searchInputTextField = searchTextField;
        this.searchInputField = (this).buildSearchInputField();
        if (tapTarget) {
            (tapTarget).setCustomButtonListener(function () {
        return ((this).searchInputField).activate(true);
});
            return;
        } /* if 0xda876 (open) */
};
        static buildSearchInputField () {
    var field;
        field = new (GameInputField).GameInputField((this).searchInputTextField, (this).instance);
        (field).setMaxTextLength(SEARCH_INPUT_MAX_LENGTH);
        (field).setScaleTextIfNeeded(true);
        return field;
};
        static pollSearchInput () {
    var current;
        if ((!(this).searchInputField)) {
            return;
        } /* if 0xda936 */
        current = ((this).searchInputField).getInputText();
        if ((current === (this).lastReadSearchText)) {
            return;
        } /* if 0xda952 */
        this.lastReadSearchText = current;
        return;
};
        static activateSearch () {
        if ((((this).searchInputField) == null)) {
        } /* if 0xda99d */
        /* jump -> 0xda9a6 */
        return;
};
        static clearSearchInput () {
        if (!(!(this).searchInputField)) {
            if ((!(this).searchInputTextField)) {
                return;
            } /* if 0xda9d6 */
        } /* if 0xda9d3 */
        ((this).searchInputField).activate(false);
        (this).searchInputTextField.text = "";
        this.searchInputField = (this).buildSearchInputField();
        this.lastReadSearchText = "";
        return;
};
        static update (deltaTime) {
        (this).pollBattleModeChange();
        (this).pollMapEditorChange();
        if ((this).shouldUpdateLayout) {
            (this).updateLayout();
        } /* if 0xdaa53 */
        (this).pollSearchInput();
        if ((((this).searchInputField) == null)) {
        } /* if 0xdaa6b */
        /* jump -> 0xdaa74 */
        (undefined).update(deltaTime);
        ((this).scrollArea).update(deltaTime);
        if ((((this).tabScrollArea) == null)) {
        } /* if 0xdaa93 */
        /* jump -> 0xdaa9c */
        return;
};
        static pollBattleModeChange () {
    var isBattle;
        isBattle = (!(((BattleMode).BattleMode).getInstance()).isNull());
        if ((isBattle === (this).lastIsBattleMode)) {
            return;
        } /* if 0xdaaf2 */
        this.lastIsBattleMode = isBattle;
        (this).onBattleModeChange(isBattle);
        return;
};
        static onBattleModeChange (_isBattle) {
        return;
};
        static pollMapEditorChange () {
    var isMapEditor;
        isMapEditor = ((GameStateManager).GameStateManager).isInState(((GameStateManager).GameStateId).MapEditor);
        if ((isMapEditor === (this).lastIsMapEditor)) {
            return;
        } /* if 0xdab83 */
        this.lastIsMapEditor = isMapEditor;
        (this).onMapEditorChange(isMapEditor);
        return;
};
        static onMapEditorChange (_isMapEditor) {
        return;
};
        static updateLayout () {
    var self, i, Y;
        self = this;
        if ((((this).tabScrollArea) == null)) {
        } /* if 0xdac07 */
        /* jump -> 0xdac0f */
        (undefined).removeAllContent();
        ((this).scrollArea).removeAllContent();
        if ((this).tabScrollArea) {
            i = 0;
            ((this).buttons).forEach(function (btn) {
        if ((btn instanceof (DebugMenuCategory).DebugMenuCategory)) {
            if ((!(btn).isFilteredOut)) {
                (btn).mini.x = ((i * 45) + 20);
                (btn).mini.y = (((btn).mini).height * 0.5);
                ((self).tabScrollArea).addContent((btn).mini);
                i = (i + 1);
                return;
            } /* if 0xdacf3 (open) */
        } /* if 0xdacf3 (open) */
});
        } /* if 0xdac40 */
        Y = 15;
        ((this).buttons).forEach(function (btn) {
    var categoryButtons, width, height, prefix, width, height;
        if ((btn instanceof (DebugMenuCategory).DebugMenuCategory)) {
            if ((btn).isFilteredOut) {
                return;
            } /* if 0xdad6d */
            categoryButtons = ((btn).sortButtons()).filter(function (b) {
        return (!(b).isFilteredOut);
});
            if ((categoryButtons.length === 0)) {
                return;
            } /* if 0xdad8a */
            width = (btn).width;
            height = (btn).height;
            btn.x = (width * 0.5);
            btn.y = (Y + (height * 0.5));
            ((self).scrollArea).addContent(btn);
            Y = (Y + (8 + height));
            if ((btn).isCategoryOpened()) {
            } /* if 0xdade7 */
            /* jump -> 0xdadec */
            prefix = "+ ";
            (btn).setText("text", (prefix + (btn).name));
            if ((btn).isCategoryOpened()) {
                (categoryButtons).forEach(function (a) {
    var w, h;
        w = (a).width;
        h = (a).height;
        a.x = (w * 0.5);
        a.y = (Y + (h * 0.5));
        ((self).scrollArea).addContent(a);
        Y = (Y + (8 + h));
        return;
});
                return;
                if ((btn).isFilteredOut) {
                    return;
                } /* if 0xdae2f */
                width = (btn).width;
                height = (btn).height;
                btn.x = (width * 0.5);
                btn.y = (Y + (height * 0.5));
                ((self).scrollArea).addContent(btn);
                Y = (Y + (8 + height));
                return;
            } /* if 0xdae7c (open) */
        } /* if 0xdae23 (open) */
});
        this.shouldUpdateLayout = false;
        return;
};
        static updateElements (deltaTime) {
        if ((this).visibility) {
            (this).update(deltaTime);
            return;
        } /* if 0xdafa2 (open) */
};
        static onDestructed () {
        return;
};
        static destruct () {
        (DebugMenuState).DebugMenuState.isOpen = false;
        if ((((this).searchInputField) == null)) {
        } /* if 0xdaff2 */
        /* jump -> 0xdaffb */
        (undefined).activate(false);
        ((this).scrollArea).removeAllContent();
        if ((((this).tabScrollArea) == null)) {
        } /* if 0xdb019 */
        /* jump -> 0xdb021 */
        return;
};
        static toggle () {
        if ((this).visibility) {
        } /* if 0xdb052 */
        /* jump -> 0xdb05b */
        return;
};
        static show () {
        (DebugMenuState).DebugMenuState.isOpen = true;
        this.visibility = true;
        return;
};
        static hide () {
        (DebugMenuState).DebugMenuState.isOpen = false;
        if ((((this).searchInputField) == null)) {
        } /* if 0xdb0cd */
        /* jump -> 0xdb0d6 */
        (undefined).activate(false);
        this.visibility = false;
        return;
};
        <class_fields_init> = undefined;
        DebugMenuBase;
        class DebugMenuBase extends <class_fields_init> = (DropGUIContainer).DropGUIContainer {
            constructor (resourceFile, exportName) {
    var movieClip, matrixY, menuHeight, itemArea, tabArea, this.active_func, new.target;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        this = super();
        if (<class_fields_init>) {
        } /* if 0xd9ed3 */
        this.lastReadSearchText = "";
        this.lastIsBattleMode = false;
        this.lastIsMapEditor = false;
        movieClip = ((StringTable).StringTable).getMovieClip(resourceFile, exportName);
        (this).setMovieClip(movieClip);
        this.movieClip = ((GUIContainer).GUIContainer)._getMovieClip((this).instance);
        this.buttons = [];
        matrixY = ((Stage).Stage).getMatrixY();
        menuHeight = (this).height;
        if ((menuHeight > 0)) {
            (this).movieClip.scale = (matrixY / menuHeight);
        } /* if 0xd9f72 */
        (this).setPixelSnappedXY(((Stage).Stage).getMatrixX(), 0);
        itemArea = ((this).movieClip).getTextFieldByName("item_area");
        this.scrollArea = new (ScrollArea).ScrollArea(itemArea, 1);
        ((this).scrollArea).enablePinching(false);
        ((this).scrollArea).setAlignment(4);
        ((this).scrollArea).enableHorizontalDrag(false);
        ((this).scrollArea).enableVerticalDrag(true);
        ((this).scrollArea).setClipping(true);
        if ((menuHeight > 0)) {
        } /* if 0xda039 */
        /* jump -> 0xda049 */
        (menuHeight - ((this).scrollArea).y).clipHeight = (((this).scrollArea).clipHeight - 20);
        ((this).movieClip).addChild((this).scrollArea);
        tabArea = ((this).movieClip).getTextFieldByName("tab_area");
        if (tabArea) {
            this.tabScrollArea = new (ScrollArea).ScrollArea(tabArea, 1);
            ((this).tabScrollArea).enablePinching(false);
            ((this).tabScrollArea).setAlignment(8);
            ((this).tabScrollArea).enableHorizontalDrag(true);
            ((this).tabScrollArea).enableVerticalDrag(false);
            ((this).tabScrollArea).setClipping(true);
            (this).tabScrollArea.y = (((this).tabScrollArea).y + 20);
            ((this).movieClip).addChild((this).tabScrollArea);
        } /* if 0xda12a */
        (this).createCategory(" ", ((DebugMenuCategory).EDebugCategory).MAIN);
        this.shouldUpdateLayout = false;
        return this;
}
        }
        DebugMenuBase = DebugSearch = DebugMenuBase;
        exports.DebugMenuBase = DebugMenuBase;
        return;
};

// --------------------- MODULE 8892 — DebugMenuButton ---------------------

// ============================================================ //
// webpack module 8892  —  DebugMenuButton
// exports: DebugMenuButton
// deps: 118 (DebugGameButton), 699 (FileManager), 3380 (Logcat), 4009 (Config), 4934 (GUI), 7265 (Localisation), 7770 (QuestionPopup), 8632 (Stage), 8667 (DebugMenu), 8775 (GameMain), 9250 (StringTable)
// ============================================================ //

__webpack_modules__[8892] = function DebugMenuButton_factory(__unused_webpack_module, exports, __webpack_require__) {
    var DebugGameButton, DebugMenu, GameMain, StringTable, Stage, Logcat, GUI, Config, FileManager, Localisation, QuestionPopup, DebugMenuButton, <class_fields_init>, DebugMenuButton;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.DebugMenuButton = undefined;
        DebugGameButton = __webpack_require__(118);
        DebugMenu = __webpack_require__(8667);
        GameMain = __webpack_require__(8775);
        StringTable = __webpack_require__(9250);
        Stage = __webpack_require__(8632);
        Logcat = __webpack_require__(3380);
        GUI = __webpack_require__(4934);
        Config = __webpack_require__(4009);
        FileManager = __webpack_require__(699);
        Localisation = __webpack_require__(7265);
        QuestionPopup = __webpack_require__(7770);
        static callback () {
    var e;
        /* CATCH -> 0xc2e9c (try region) */
        if ((!(DebugMenuButton).debugMenu)) {
            DebugMenuButton.debugMenu = new (DebugMenu).DebugMenu();
            ((DebugMenuButton).debugMenu).hide();
            ((Stage).Stage).addChild(((DebugMenuButton).debugMenu).instance);
            ((GUI).GUI).registerUpdateable((DebugMenuButton).debugMenu);
        } /* if 0xc2e86 */
        ((DebugMenuButton).debugMenu).toggle();
        return;
        e = <underflow>;
        /* CATCH -> 0xc2ea4 (try region) */
        return;
        throw <underflow>;
};
        <class_fields_init> = undefined;
        DebugMenuButton;
        class DebugMenuButton extends <class_fields_init> = (DebugGameButton).DebugGameButton {
            constructor () {
    var this.active_func, new.target;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        this = super();
        if (<class_fields_init>) {
        } /* if 0xc2d63 */
        (DebugMenuButton).ensureAssetLoaded();
        (this).setMovieClip(((StringTable).StringTable).getMovieClip("sc/debug.sc", "debug_button"), true);
        (this).setTextFieldText("D");
        (this).setXY(10, ((Stage).Stage).getMatrixY());
        (this).setCustomButtonListener(((this).callback).bind(this));
        return this;
}
            ensureAssetLoaded () {
        if ((!(this).isAssetLoaded)) {
            ((GameMain).GameMain).loadAsset("sc/debug.sc");
            this.isAssetLoaded = true;
            ((Logcat).Logcat).logInfo("DebugMenuButton: loaded sc/debug.sc");
            return;
        } /* if 0xc2d0b (open) */
}
            destroy () {
        if ((this).debugMenu) {
            ((GUI).GUI).unregisterUpdateable((this).debugMenu);
            ((Stage).Stage).removeChild(((this).debugMenu).instance);
            ((this).debugMenu).destruct();
            this.debugMenu = undefined;
        } /* if 0xc2f23 */
        if ((this).buttonInstance) {
            ((Stage).Stage).removeChild(((this).buttonInstance).instance);
            this.buttonInstance = undefined;
            return;
        } /* if 0xc2f52 (open) */
}
            spawn () {
    var button, e;
        if ((this).buttonInstance) {
            return (this).buttonInstance;
            /* CATCH -> 0xc2fcf (try region) */
        } /* if 0xc2f95 */
        button = new DebugMenuButton();
        ((Stage).Stage).addChild((button).instance);
        this.buttonInstance = button;
        return button;
        e = this;
        /* CATCH -> 0xc2fd8 (try region) */
        return null;
        throw button = <underflow>;
}
            showFirstEnableWarning () {
    var warning;
        if ((((Config).Config).config).DebugMenuButtonWarningShown) {
            return;
        } /* if 0xc3026 */
        ((Config).Config).config.DebugMenuButtonWarningShown = true;
        ((FileManager).FileManager).updateConfigFile();
        warning = new (QuestionPopup).QuestionPopup(((Localisation).Localisation).getString("DebugMenuWarningTitle"), ((Localisation).Localisation).getString("DebugMenuWarningText"), 4294967040.0);
        return;
}
            getDebugMenu () {
        return (this).debugMenu;
}
            toggleButtonVisibility () {
    var color;
        if ((!(this).buttonInstance)) {
            return;
        } /* if 0xc30f6 */
        color = ((this).buttonInstance).colorTransform;
        if (((color).alpha === 0)) {
        } /* if 0xc3116 */
        /* jump -> 0xc3117 */
        255.alpha = 0;
        return;
}
        }
        DebugMenuButton = FileManager = DebugMenuButton;
        exports.DebugMenuButton = DebugMenuButton;
        DebugMenuButton.isAssetLoaded = false;
        return;
};

// --------------------- MODULE 8048 — DebugMenuCategory ---------------------

// ============================================================ //
// webpack module 8048  —  DebugMenuCategory
// exports: DebugMenuCategory, EDebugCategory
// deps: 118 (DebugGameButton), 1588 (LogicMemory), 9250 (StringTable)
// ============================================================ //

__webpack_modules__[8048] = function DebugMenuCategory_factory(__unused_webpack_module, exports, __webpack_require__) {
    var StringTable, DebugGameButton, LogicMemory, EDebugCategory, categoryOpenedOffset, DebugMenuCategory, <class_fields_init>, DebugMenuCategory;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.EDebugCategory = undefined;
        undefined.DebugMenuCategory = exports;
        StringTable = __webpack_require__(9250);
        DebugGameButton = __webpack_require__(118);
        LogicMemory = __webpack_require__(1588);
        if (!EDebugCategory) {
            exports.EDebugCategory = EDebugCategory = {};
        } /* if 0xdb18b */
        EDebugCategory = {}(exports);
        categoryOpenedOffset = ((LogicMemory).LogicMemory).offset(624);
        static isCategoryOpened () {
        return Boolean((((this).instance).add(categoryOpenedOffset)).readU8());
};
        static setOpened (open) {
        if (open) {
        } /* if 0xdb5b5 */
        /* jump -> 0xdb5b6 */
        return;
};
        static buttonPressed () {
        (this).setOpened((!(this).isCategoryOpened()));
        if ((((this).onToggle) == null)) {
        } /* if 0xdb5f7 */
        /* jump -> 0xdb5fa */
        return;
};
        static sortButtons () {
        return ((this).buttons).slice();
};
        <class_fields_init> = undefined;
        DebugMenuCategory;
        class DebugMenuCategory extends <class_fields_init> = (DebugGameButton).DebugGameButton {
            constructor (name, enumeration) {
    var this.active_func, new.target;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        this = super();
        if (<class_fields_init>) {
        } /* if 0xdb417 */
        this.isFilteredOut = false;
        (this).setMovieClip(((StringTable).StringTable).getMovieClip("sc/debug.sc", "debug_menu_category"), true);
        this.mini = new (DebugGameButton).DebugGameButton();
        ((this).mini).setMovieClip(((StringTable).StringTable).getMovieClip("sc/debug.sc", "debug_menu_category_mini"), true);
        ((this).mini).setText("text", (name).substring(0, 3));
        this.name = name;
        this.enumeration = enumeration;
        this.buttons = [];
        (((this).instance).add(categoryOpenedOffset)).writeU8(0);
        (this).setCustomButtonListener(((this).buttonPressed).bind(this));
        ((this).mini).setCustomButtonListener(((this).buttonPressed).bind(this));
        return this;
}
        }
        DebugMenuCategory = v8 = DebugMenuCategory;
        exports.DebugMenuCategory = DebugMenuCategory;
        return;
};

// --------------------- MODULE 6670 — DebugMenuState ---------------------

// ============================================================ //
// webpack module 6670  —  DebugMenuState
// exports: DebugMenuState
// ============================================================ //

__webpack_modules__[6670] = function DebugMenuState_factory(__unused_webpack_module, exports) {
    var DebugMenuState, <class_fields_init>, DebugMenuState;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.DebugMenuState = undefined;
        <class_fields_init> = undefined;
        DebugMenuState;
        class DebugMenuState {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0xdb6d1 (open) */
}
        }
        DebugMenuState = DebugMenuState = DebugMenuState;
        exports.DebugMenuState = DebugMenuState;
        DebugMenuState.isOpen = false;
        return;
};

// --------------------- MODULE 8139 — ToggleDebugMenuButton ---------------------

// ============================================================ //
// webpack module 8139  —  ToggleDebugMenuButton
// exports: ToggleDebugMenuButton
// deps: 118 (DebugGameButton), 8892 (DebugMenuButton)
// ============================================================ //

__webpack_modules__[8139] = function ToggleDebugMenuButton_factory(__unused_webpack_module, exports, __webpack_require__) {
    var DebugGameButton, DebugMenuButton, ToggleDebugMenuButton, <class_fields_init>, ToggleDebugMenuButton;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.ToggleDebugMenuButton = undefined;
        DebugGameButton = __webpack_require__(118);
        DebugMenuButton = __webpack_require__(8892);
        static callback () {
        if (((((DebugMenuButton).DebugMenuButton).getDebugMenu()) == null)) {
            ((DebugMenuButton).DebugMenuButton).getDebugMenu();
        } /* if 0xdd23c */
        /* jump -> 0xdd244 */
        return;
};
        <class_fields_init> = undefined;
        ToggleDebugMenuButton;
        class ToggleDebugMenuButton extends <class_fields_init> = (DebugGameButton).DebugGameButton {
            constructor () {
    var this.active_func, new.target;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        this = super();
        if (<class_fields_init>) {
        } /* if 0xdd1e6 */
        (this).setCustomButtonListener(((this).callback).bind(this));
        return this;
}
        }
        ToggleDebugMenuButton = ToggleDebugMenuButton = ToggleDebugMenuButton;
        exports.ToggleDebugMenuButton = ToggleDebugMenuButton;
        return;
};

// --------------------- MODULE 6242 — DebugButtonSpecs ---------------------

// ============================================================ //
// webpack module 6242  —  DebugButtonSpecs
// exports: FX_BUTTONS, NATIVE_FLOATER_OVERRIDE_BUTTONS, RESOURCE_BUTTONS, callback, checkbox, getState, isDev, mode
// deps: 294 (SkinPreview), 819 (BrawlerMenu), 898 (InviteFriendWithCodePopup), 1018 (HomeMode), 1390 (DebugCallbacks), 1982 (FriendRequestContainer), 2015 (NotEnoughGemsPopup), 2031 (AboutScreen), 2562 (CustomBackground), 2658 (GfxDebugKnobs), 2695 (CelebrationPopupPreview), 2760 (BadgePreview), 3004 (CameraSettingsPopup), 3173 (FirstGearTutorialPopup), 3197 (RankedSeasonEndPopup), 3567 (EsportTournamentsPopup), 3572 (BrawlTvIntroPopupPreview), 3614 (BattleDebugOverlay), 3615 (MoviePlayerPopup), 3747 (NotificationSettingsPopup) ...
// ============================================================ //

__webpack_modules__[6242] = function DebugButtonSpecs_factory(__unused_webpack_module, exports, __webpack_require__) {
    var DebugMenuCategory, LogicDebugButtonMessage, GUI, ThemeSelector, DebugCallbacks, BattleCamera, BattleDebugOverlay, BattleNetStatsOverlay, TileGridOverlay, BadgePreview, SkinPreview, MapPreview, EffectPreview, AccountDeletionDialogPreview, PrestigeIntroPopupPreview, BrawlTvIntroPopupPreview, Application, DebugCountryPopupPreview, InputPopup, HomeScreen, BattleTraining, GfxDebugKnobs, ServerConnection, UiInspector, CustomBackground, Watermark, PassRewardPreview, CelebrationPopupPreview, AboutScreen, BrawlPassUnlockBrawlerPopup, ChatOptionsPopup, EsportTournamentsPopup, GenericInfoPopup, FriendRequestContainer, BrawlerMenu, HomeMode, FirstGearTutorialPopup, InviteFriendWithCodePopup, NotificationSettingsPopup, NotEnoughGemsPopup, UnlockAccountMenu, SmoothHud, SharedReplay, RankedSeasonEndPopup, CameraSettingsPopup, MoviePlayerPopup;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.RESOURCE_BUTTONS = undefined;
        undefined.FX_BUTTONS = exports;
        exports.NATIVE_FLOATER_OVERRIDE_BUTTONS = undefined;
        undefined.ALL_BUTTONS = exports;
        DebugMenuCategory = __webpack_require__(8048);
        LogicDebugButtonMessage = __webpack_require__(8087);
        GUI = __webpack_require__(4934);
        ThemeSelector = __webpack_require__(9244);
        DebugCallbacks = __webpack_require__(1390);
        BattleCamera = __webpack_require__(4188);
        BattleDebugOverlay = __webpack_require__(3614);
        BattleNetStatsOverlay = __webpack_require__(4921);
        TileGridOverlay = __webpack_require__(8601);
        BadgePreview = __webpack_require__(2760);
        SkinPreview = __webpack_require__(294);
        MapPreview = __webpack_require__(7895);
        EffectPreview = __webpack_require__(6030);
        AccountDeletionDialogPreview = __webpack_require__(4210);
        PrestigeIntroPopupPreview = __webpack_require__(6642);
        BrawlTvIntroPopupPreview = __webpack_require__(3572);
        Application = __webpack_require__(6046);
        DebugCountryPopupPreview = __webpack_require__(8548);
        InputPopup = __webpack_require__(6012);
        HomeScreen = __webpack_require__(8569);
        BattleTraining = __webpack_require__(9005);
        GfxDebugKnobs = __webpack_require__(2658);
        ServerConnection = __webpack_require__(8129);
        UiInspector = __webpack_require__(7710);
        CustomBackground = __webpack_require__(2562);
        Watermark = __webpack_require__(7703);
        PassRewardPreview = __webpack_require__(7311);
        CelebrationPopupPreview = __webpack_require__(2695);
        AboutScreen = __webpack_require__(2031);
        BrawlPassUnlockBrawlerPopup = __webpack_require__(9102);
        ChatOptionsPopup = __webpack_require__(7284);
        EsportTournamentsPopup = __webpack_require__(3567);
        GenericInfoPopup = __webpack_require__(5027);
        FriendRequestContainer = __webpack_require__(1982);
        BrawlerMenu = __webpack_require__(819);
        HomeMode = __webpack_require__(1018);
        FirstGearTutorialPopup = __webpack_require__(3173);
        InviteFriendWithCodePopup = __webpack_require__(898);
        NotificationSettingsPopup = __webpack_require__(3747);
        NotEnoughGemsPopup = __webpack_require__(2015);
        UnlockAccountMenu = __webpack_require__(9510);
        SmoothHud = __webpack_require__(5230);
        SharedReplay = __webpack_require__(4111);
        RankedSeasonEndPopup = __webpack_require__(3197);
        CameraSettingsPopup = __webpack_require__(3004);
        MoviePlayerPopup = __webpack_require__(3615);
        exports.RESOURCE_BUTTONS = [{ label: "ADD_STAR_POINTS", resource: "LegendaryTrophies", amount: 100 }, { label: "ADD_POWER_POINTS", resource: "PowerPoints", amount: 1000 }, { label: "ADD_CREDITS", resource: "RecruitTokens", amount: 100 }, { label: "ADD_BLING_RESOURCE", resource: "Bling", amount: 1000 }, { label: "ADD_COLLAB_CURRENCY", resource: "CollabEventCurrency", amount: 100 }];
        exports.FX_BUTTONS = [{ label: "ADD_GOLD_TICKETS", amount: 5, type: 33 }];
        exports.NATIVE_FLOATER_OVERRIDE_BUTTONS = [{ label: "ADD_LEGENDARY_TROPHIES", actionIdx: ((LogicDebugButtonMessage).EDebugAction).ADD_SCORE, amount: 100, type: 28 }];
        exports.callback = { label: "BADGE_PREVIEW", category: ((DebugMenuCategory).EDebugCategory).PREVIEW };
        exports.callback = { label: "EFFECT_PREVIEW", category: ((DebugMenuCategory).EDebugCategory).PREVIEW };
        exports.callback = { label: "MAP_PREVIEW", category: ((DebugMenuCategory).EDebugCategory).PREVIEW };
        exports.callback = { label: "SKIN_PREVIEW", category: ((DebugMenuCategory).EDebugCategory).PREVIEW };
        exports.callback = { label: "FAME_LEVEL_UP_PREVIEW", category: ((DebugMenuCategory).EDebugCategory).PREVIEW };
        exports.mode = "home";
        exports.callback = { label: "ABOUT_SCREEN", category: ((DebugMenuCategory).EDebugCategory).PREVIEW };
        exports.mode = "home";
        exports.callback = { label: "BRAWLER_UNLOCK_ANIM", category: ((DebugMenuCategory).EDebugCategory).PREVIEW };
        exports.mode = "home";
        exports.callback = { label: "FRIEND_REQUEST", category: ((DebugMenuCategory).EDebugCategory).PREVIEW };
        exports.mode = "home";
        exports.callback = { label: "CHAT_OPTIONS", category: ((DebugMenuCategory).EDebugCategory).PREVIEW };
        exports.mode = "home";
        exports.callback = { label: "ESPORTS", category: ((DebugMenuCategory).EDebugCategory).PREVIEW };
        exports.mode = "home";
        exports.callback = { label: "FIRST_GEAR_TUTORIAL", category: ((DebugMenuCategory).EDebugCategory).PREVIEW };
        exports.mode = "home";
        exports.callback = { label: "INVITE_FRIEND_CODE", category: ((DebugMenuCategory).EDebugCategory).PREVIEW };
        exports.mode = "home";
        exports.callback = { label: "NOTIFICATION_SETTINGS", category: ((DebugMenuCategory).EDebugCategory).PREVIEW };
        exports.mode = "home";
        exports.callback = { label: "NOT_ENOUGH_GEMS", category: ((DebugMenuCategory).EDebugCategory).PREVIEW };
        exports.mode = "home";
        exports.callback = { label: "UNLOCK_ACCOUNT_SCREEN", category: ((DebugMenuCategory).EDebugCategory).PREVIEW };
        exports.mode = "home";
        exports.callback = { label: "GENERIC_INFO", category: ((DebugMenuCategory).EDebugCategory).PREVIEW };
        exports.mode = "home";
        exports.callback = { label: "FAME_POPUP", category: ((DebugMenuCategory).EDebugCategory).PREVIEW };
        exports.mode = "home";
        exports.callback = { label: "MOVIE_PLAYER", category: ((DebugMenuCategory).EDebugCategory).PREVIEW };
        exports.mode = "home";
        exports.callback = { label: "GOTO_CLAN", category: ((DebugMenuCategory).EDebugCategory).NAVIGATION };
        exports.mode = "home";
        exports.callback = { label: "GOTO_BRAWL_PASS", category: ((DebugMenuCategory).EDebugCategory).NAVIGATION };
        exports.mode = "home";
        exports.callback = { label: "GOTO_QUESTS", category: ((DebugMenuCategory).EDebugCategory).NAVIGATION };
        exports.mode = "home";
        exports.callback = { label: "GOTO_CLUBS", category: ((DebugMenuCategory).EDebugCategory).NAVIGATION };
        exports.mode = "home";
        exports.callback = { label: "GOTO_SCID_REWARDS", category: ((DebugMenuCategory).EDebugCategory).NAVIGATION };
        exports.mode = "home";
        exports.callback = { label: "GOTO_PRO_PASS", category: ((DebugMenuCategory).EDebugCategory).NAVIGATION };
        exports.mode = "home";
        exports.callback = { label: "GOTO_HOME", category: ((DebugMenuCategory).EDebugCategory).NAVIGATION };
        exports.mode = "home";
        exports.callback = { label: "ACCOUNT_DELETION_DIALOG", category: ((DebugMenuCategory).EDebugCategory).ACCOUNT };
        exports.callback = { label: "AUTOCOLLECT_OLDEST_SEASON", category: ((DebugMenuCategory).EDebugCategory).ACCOUNT };
        [...{ label: "ADD_ALL_RESOURCES", category: ((DebugMenuCategory).EDebugCategory).ACCOUNT, actionIdx: 249, intParameter: 1000 }][32] = { label: "ADD_RESOURCES", category: ((DebugMenuCategory).EDebugCategory).ACCOUNT, actionIdx: 1, intParameter: -1 };
        [...{ label: "ADD_ALL_RESOURCES", category: ((DebugMenuCategory).EDebugCategory).ACCOUNT, actionIdx: 249, intParameter: 1000 }][33] = { label: "RESET_ALL_RESOURCES", category: ((DebugMenuCategory).EDebugCategory).ACCOUNT, actionIdx: 250, intParameter: 1 };
        [...{ label: "ADD_ALL_RESOURCES", category: ((DebugMenuCategory).EDebugCategory).ACCOUNT, actionIdx: 249, intParameter: 1000 }][34] = { label: "ADD_FAME", category: ((DebugMenuCategory).EDebugCategory).ACCOUNT, actionIdx: 165, intParameter: 1000 };
        [...{ label: "ADD_ALL_RESOURCES", category: ((DebugMenuCategory).EDebugCategory).ACCOUNT, actionIdx: 249, intParameter: 1000 }][35] = { label: "SET_FAME", category: ((DebugMenuCategory).EDebugCategory).ACCOUNT, actionIdx: 166, intParameter: 5000 };
        [...{ label: "ADD_ALL_RESOURCES", category: ((DebugMenuCategory).EDebugCategory).ACCOUNT, actionIdx: 249, intParameter: 1000 }][36] = { label: "ADD_GEMS", category: ((DebugMenuCategory).EDebugCategory).ACCOUNT, actionIdx: 14, intParameter: 800 };
        [...{ label: "ADD_ALL_RESOURCES", category: ((DebugMenuCategory).EDebugCategory).ACCOUNT, actionIdx: 249, intParameter: 1000 }][37] = { label: "REMOVE_ALL_GEMS", category: ((DebugMenuCategory).EDebugCategory).ACCOUNT, actionIdx: 18, intParameter: -1 };
        [...{ label: "ADD_ALL_RESOURCES", category: ((DebugMenuCategory).EDebugCategory).ACCOUNT, actionIdx: 249, intParameter: 1000 }][38] = { label: "REMOVE_ALL_COINS", category: ((DebugMenuCategory).EDebugCategory).ACCOUNT, actionIdx: 19, intParameter: -1 };
        [...{ label: "ADD_ALL_RESOURCES", category: ((DebugMenuCategory).EDebugCategory).ACCOUNT, actionIdx: 249, intParameter: 1000 }][39] = { label: "ADD_SCORE", category: ((DebugMenuCategory).EDebugCategory).ACCOUNT, actionIdx: 25, intParameter: 125 };
        [...{ label: "ADD_ALL_RESOURCES", category: ((DebugMenuCategory).EDebugCategory).ACCOUNT, actionIdx: 249, intParameter: 1000 }][40] = { label: "DECREASE_SCORE", category: ((DebugMenuCategory).EDebugCategory).ACCOUNT, actionIdx: 26, intParameter: -125 };
        [...{ label: "ADD_ALL_RESOURCES", category: ((DebugMenuCategory).EDebugCategory).ACCOUNT, actionIdx: 249, intParameter: 1000 }][41] = { label: "RESET_ALL_HERO_SCORES", category: ((DebugMenuCategory).EDebugCategory).ACCOUNT, actionIdx: 172, intParameter: 1000 };
        [...{ label: "ADD_ALL_RESOURCES", category: ((DebugMenuCategory).EDebugCategory).ACCOUNT, actionIdx: 249, intParameter: 1000 }][42] = { label: "RESET_CLAN_CREATED", category: ((DebugMenuCategory).EDebugCategory).ACCOUNT, actionIdx: 203, intParameter: 1 };
        [...{ label: "ADD_ALL_RESOURCES", category: ((DebugMenuCategory).EDebugCategory).ACCOUNT, actionIdx: 249, intParameter: 1000 }][43] = { label: "SET_RANKED_SEEN", category: ((DebugMenuCategory).EDebugCategory).ACCOUNT, actionIdx: 217, intParameter: 1 };
        [...{ label: "ADD_ALL_RESOURCES", category: ((DebugMenuCategory).EDebugCategory).ACCOUNT, actionIdx: 249, intParameter: 1000 }].callback = { label: "SHOW_PRESTIGE_INTRO", category: ((DebugMenuCategory).EDebugCategory).ACCOUNT };
        exports[49] = { label: "ADD_1_WINSTREAK", category: ((DebugMenuCategory).EDebugCategory).ACCOUNT, actionIdx: 210, intParameter: 1, 48: { label: "ADD_10_WINSTREAK", category: ((DebugMenuCategory).EDebugCategory).ACCOUNT, actionIdx: 210, intParameter: 10, 47: { label: "ADD_100_WINSTREAK", category: ((DebugMenuCategory).EDebugCategory).ACCOUNT, actionIdx: 210, intParameter: 100, 46: { label: "REMOVE_WINSTREAK", category: ((DebugMenuCategory).EDebugCategory).ACCOUNT, actionIdx: 211, intParameter: -1, 44: [...{ label: "ADD_ALL_RESOURCES", category: ((DebugMenuCategory).EDebugCategory).ACCOUNT, actionIdx: 249, intParameter: 1000 }], 45: { label: "CLAIM_TROPHY_ROAD", category: ((DebugMenuCategory).EDebugCategory).ACCOUNT, actionIdx: 129, intParameter: 1000 }, callback: { label: "BRAWL_TV", category: ((DebugMenuCategory).EDebugCategory).UTILS } }, callback: { label: "PREV_THEME", category: ((DebugMenuCategory).EDebugCategory).UTILS } }, callback: { label: "NEXT_THEME", category: ((DebugMenuCategory).EDebugCategory).UTILS } }, callback: { label: "SET_CUSTOM_BACKGROUND", category: ((DebugMenuCategory).EDebugCategory).UTILS }, mode: "home" };
        exports.callback = { label: "RESET_CUSTOM_BACKGROUND", category: ((DebugMenuCategory).EDebugCategory).UTILS };
        exports.mode = "home";
        exports[50] = exports;
        exports.callback = { label: "OPEN_SHARE_DIALOG", category: ((DebugMenuCategory).EDebugCategory).UTILS };
        exports[51] = exports;
        exports.callback = { label: "SCROLLABLE_DEBUG_LOG", category: ((DebugMenuCategory).EDebugCategory).UTILS };
        exports.isDev = true;
        exports[52] = exports;
        exports.callback = { label: "SET_COUNTRY", category: ((DebugMenuCategory).EDebugCategory).UTILS };
        undefined[53] = exports;
        undefined.callback = { label: "SLOW_MOTION_4X", category: ((DebugMenuCategory).EDebugCategory).UTILS };
        undefined.getState = {};
        exports.checkbox = undefined;
        exports[54] = exports;
        exports.callback = { label: "TOGGLE_WATERMARK", category: ((DebugMenuCategory).EDebugCategory).UTILS };
        exports.getState = {};
        exports.checkbox = exports;
        DebugMenuCategory = LogicDebugButtonMessage = GUI = ThemeSelector = DebugCallbacks = BattleCamera = BattleDebugOverlay = BattleNetStatsOverlay = TileGridOverlay = BadgePreview = SkinPreview = MapPreview = EffectPreview = AccountDeletionDialogPreview = PrestigeIntroPopupPreview = BrawlTvIntroPopupPreview = Application = DebugCountryPopupPreview = InputPopup = HomeScreen = BattleTraining = GfxDebugKnobs = ServerConnection = UiInspector = CustomBackground = Watermark = PassRewardPreview = CelebrationPopupPreview = AboutScreen = BrawlPassUnlockBrawlerPopup = ChatOptionsPopup = EsportTournamentsPopup = GenericInfoPopup = FriendRequestContainer = BrawlerMenu = HomeMode = FirstGearTutorialPopup = InviteFriendWithCodePopup = NotificationSettingsPopup = NotEnoughGemsPopup = UnlockAccountMenu = SmoothHud = SharedReplay = RankedSeasonEndPopup = CameraSettingsPopup = MoviePlayerPopup = <underflow>[55] = exports;
        DebugMenuCategory = LogicDebugButtonMessage = GUI = ThemeSelector = DebugCallbacks = BattleCamera = BattleDebugOverlay = BattleNetStatsOverlay = TileGridOverlay = BadgePreview = SkinPreview = MapPreview = EffectPreview = AccountDeletionDialogPreview = PrestigeIntroPopupPreview = BrawlTvIntroPopupPreview = Application = DebugCountryPopupPreview = InputPopup = HomeScreen = BattleTraining = GfxDebugKnobs = ServerConnection = UiInspector = CustomBackground = Watermark = PassRewardPreview = CelebrationPopupPreview = AboutScreen = BrawlPassUnlockBrawlerPopup = ChatOptionsPopup = EsportTournamentsPopup = GenericInfoPopup = FriendRequestContainer = BrawlerMenu = HomeMode = FirstGearTutorialPopup = InviteFriendWithCodePopup = NotificationSettingsPopup = NotEnoughGemsPopup = UnlockAccountMenu = SmoothHud = SharedReplay = RankedSeasonEndPopup = CameraSettingsPopup = MoviePlayerPopup = <underflow>.callback = { label: "STOP_ALL_SFX", category: ((DebugMenuCategory).EDebugCategory).UTILS };
        <underflow>[56] = DebugMenuCategory = LogicDebugButtonMessage = GUI = ThemeSelector = DebugCallbacks = BattleCamera = BattleDebugOverlay = BattleNetStatsOverlay = TileGridOverlay = BadgePreview = SkinPreview = MapPreview = EffectPreview = AccountDeletionDialogPreview = PrestigeIntroPopupPreview = BrawlTvIntroPopupPreview = Application = DebugCountryPopupPreview = InputPopup = HomeScreen = BattleTraining = GfxDebugKnobs = ServerConnection = UiInspector = CustomBackground = Watermark = PassRewardPreview = CelebrationPopupPreview = AboutScreen = BrawlPassUnlockBrawlerPopup = ChatOptionsPopup = EsportTournamentsPopup = GenericInfoPopup = FriendRequestContainer = BrawlerMenu = HomeMode = FirstGearTutorialPopup = InviteFriendWithCodePopup = NotificationSettingsPopup = NotEnoughGemsPopup = UnlockAccountMenu = SmoothHud = SharedReplay = RankedSeasonEndPopup = CameraSettingsPopup = MoviePlayerPopup = <underflow>;
        <underflow>.callback = { label: "STOP_MUSIC", category: ((DebugMenuCategory).EDebugCategory).UTILS };
        <underflow>[57] = <underflow>;
        <underflow>.callback = { label: "CYCLE_LANGUAGE", category: ((DebugMenuCategory).EDebugCategory).UTILS };
        <underflow>[58] = <underflow>;
        <underflow>.callback = { label: "SHOW_TID_KEYS", category: ((DebugMenuCategory).EDebugCategory).UTILS };
        <underflow>.getState = {};
        <underflow>.checkbox = <underflow>;
        <underflow>[59] = <underflow>;
        <underflow>.callback = { label: "COPY_ACCOUNT_ID", category: ((DebugMenuCategory).EDebugCategory).UTILS };
        <underflow>[60] = <underflow>;
        <underflow>.callback = { label: "SOFT_RELOAD_GAME", category: ((DebugMenuCategory).EDebugCategory).UTILS };
        <underflow>[61] = <underflow>;
        <underflow>.callback = { label: "OPEN_NOTIFICATION_SETTINGS", category: ((DebugMenuCategory).EDebugCategory).NOTIFICATIONS };
        <underflow>.mode = "home";
        <underflow>[62] = <underflow>;
        <underflow>.callback = { label: "OPEN_DEVICE_LINK_FROM_SETTINGS", category: ((DebugMenuCategory).EDebugCategory).ACCOUNT };
        <underflow>.mode = "home";
        <underflow>[63] = <underflow>;
        <underflow>.callback = { label: "SCID_DEBUG_CLEAR_ALL", category: ((DebugMenuCategory).EDebugCategory).SC_ID };
        <underflow>[64] = <underflow>;
        <underflow>.callback = { label: "SCID_LOG_OUT", category: ((DebugMenuCategory).EDebugCategory).SC_ID };
        <underflow>[65] = <underflow>;
        <underflow>.callback = { label: "SCID_RELOAD_CONFIG", category: ((DebugMenuCategory).EDebugCategory).SC_ID };
        <underflow>[66] = <underflow>;
        <underflow>.callback = { label: "SCID_SWITCH_ENV", category: ((DebugMenuCategory).EDebugCategory).SC_ID };
        <underflow>[67] = <underflow>;
        <underflow>.callback = { label: "RESET_CURRENT_ACCOUNT", category: ((DebugMenuCategory).EDebugCategory).SC_ID };
        <underflow>[68] = <underflow>;
        <underflow>.callback = { label: "SCID_LOG_OUT_ALL_DEVICES", category: ((DebugMenuCategory).EDebugCategory).SC_ID };
        <underflow>[69] = <underflow>;
        <underflow>[70] = { label: "ADVANCE_PROG_SKINS_BY_1", category: ((DebugMenuCategory).EDebugCategory).GACHA_IAP, actionIdx: 283, intParameter: 1 };
        <underflow>[71] = { label: "UNLOCK_PROG_SKINS_TO_LVL_5", category: ((DebugMenuCategory).EDebugCategory).GACHA_IAP, actionIdx: 282, intParameter: 5 };
        <underflow>[72] = { label: "LOCK_ALL_SKINS", category: ((DebugMenuCategory).EDebugCategory).GACHA_IAP, actionIdx: 309, intParameter: 1 };
        <underflow>[73] = { label: "LEVEL_UP_HERO", category: ((DebugMenuCategory).EDebugCategory).GACHA_IAP, actionIdx: 127, intParameter: 1 };
        <underflow>[74] = { label: "DOWNGRADE_HERO_LEVEL", category: ((DebugMenuCategory).EDebugCategory).GACHA_IAP, actionIdx: 128, intParameter: -1 };
        <underflow>[75] = { label: "MAX_SELECTED_HERO", category: ((DebugMenuCategory).EDebugCategory).GACHA_IAP, actionIdx: 72, intParameter: 1 };
        <underflow>[76] = { label: "RESET_HERO_GEARS", category: ((DebugMenuCategory).EDebugCategory).GACHA_IAP, actionIdx: 118, intParameter: 1 };
        <underflow>.callback = { label: "MARK_ALL_AS_NEW", category: ((DebugMenuCategory).EDebugCategory).GACHA_IAP };
        <underflow>[77] = <underflow>;
        <underflow>[78] = { label: "MARK_ALL_HEROES_AS_NEW", category: ((DebugMenuCategory).EDebugCategory).GACHA_IAP, actionIdx: 113, intParameter: 1 };
        <underflow>.callback = { label: "GIVE_BY_GLOBAL_ID", category: ((DebugMenuCategory).EDebugCategory).GACHA_IAP };
        <underflow>[79] = <underflow>;
        <underflow>.callback = { label: "GIVE_FROM_CONTAINER_BY_ID", category: ((DebugMenuCategory).EDebugCategory).GACHA_IAP };
        <underflow>[80] = <underflow>;
        <underflow>.callback = { label: "GIVE_RANDOM_REWARD", category: ((DebugMenuCategory).EDebugCategory).GACHA_IAP };
        <underflow>[81] = <underflow>;
        <underflow>.callback = { label: "GIVE_RANDOM_REWARD_ALT", category: ((DebugMenuCategory).EDebugCategory).GACHA_IAP };
        <underflow>[82] = <underflow>;
        <underflow>.callback = { label: "REVOKE_IAP_GEMS_TO_NEGATIVE", category: ((DebugMenuCategory).EDebugCategory).GACHA_IAP };
        <underflow>[83] = <underflow>;
        <underflow>.callback = { label: "SET_AVATAR_PASSIVE", category: ((DebugMenuCategory).EDebugCategory).GACHA_IAP };
        <underflow>[84] = <underflow>;
        <underflow>.callback = { label: "SET_AVATAR_PASSIVE_RECRUIT", category: ((DebugMenuCategory).EDebugCategory).GACHA_IAP };
        <underflow>[85] = <underflow>;
        <underflow>[86] = { label: "SET_SPRAY_SLOTS_5", category: ((DebugMenuCategory).EDebugCategory).GACHA_IAP, actionIdx: 147, intParameter: 5 };
        <underflow>.callback = { label: "SKIP_GACHA_ANIM", category: ((DebugMenuCategory).EDebugCategory).GACHA_IAP };
        <underflow>.getState = {};
        <underflow>.checkbox = <underflow>;
        <underflow>[87] = <underflow>;
        <underflow>[88] = { label: "UNLOCK_AND_MAX_ALL_LVL_7", category: ((DebugMenuCategory).EDebugCategory).GACHA_IAP, actionIdx: 23, intParameter: 1 };
        <underflow>.callback = { label: "UNLOCK_AND_MAX_ALL_LVL_9", category: ((DebugMenuCategory).EDebugCategory).GACHA_IAP };
        <underflow>[89] = <underflow>;
        <underflow>[90] = { label: "UNLOCK_AND_MAX_ALL_NO_STAR_POWERS", category: ((DebugMenuCategory).EDebugCategory).GACHA_IAP, actionIdx: 117, intParameter: 1 };
        <underflow>[91] = { label: "UNLOCK_AND_MAX_ONE", category: ((DebugMenuCategory).EDebugCategory).GACHA_IAP, actionIdx: 154, intParameter: 1 };
        <underflow>[92] = { label: "UNLOCK_HYPER_BUDDIES_ALL", category: ((DebugMenuCategory).EDebugCategory).GACHA_IAP, actionIdx: 420, intParameter: 1 };
        <underflow>[93] = { label: "UNLOCK_STAR_BUDDIES_ALL", category: ((DebugMenuCategory).EDebugCategory).GACHA_IAP, actionIdx: 419, intParameter: 1 };
        <underflow>.callback = { label: "UNLOCK_OPENED_GADGETS", category: ((DebugMenuCategory).EDebugCategory).GACHA_IAP };
        <underflow>[94] = <underflow>;
        <underflow>.callback = { label: "UNLOCK_OPENED_STAR_POWERS", category: ((DebugMenuCategory).EDebugCategory).GACHA_IAP };
        <underflow>[95] = <underflow>;
        <underflow>.callback = { label: "OPEN_CLAN_POPUP", category: ((DebugMenuCategory).EDebugCategory).SOCIAL };
        <underflow>.mode = "home";
        <underflow>[96] = <underflow>;
        <underflow>.callback = { label: "OPEN_TEAMUP_POPUP", category: ((DebugMenuCategory).EDebugCategory).SOCIAL };
        <underflow>.mode = "home";
        <underflow>[97] = <underflow>;
        <underflow>.callback = { label: "OPEN_DELETE_ACCOUNT", category: ((DebugMenuCategory).EDebugCategory).SOCIAL };
        <underflow>.mode = "home";
        <underflow>[98] = <underflow>;
        <underflow>.callback = { label: "NEXT_CAMERA_MODE", category: ((DebugMenuCategory).EDebugCategory).BATTLE };
        <underflow>.mode = "battle";
        <underflow>[99] = <underflow>;
        <underflow>.callback = { label: "CAMERA_SETTINGS", category: ((DebugMenuCategory).EDebugCategory).BATTLE };
        <underflow>.mode = "battle";
        <underflow>[100] = <underflow>;
        <underflow>.callback = { label: "RESET_CAMERA_SETTINGS", category: ((DebugMenuCategory).EDebugCategory).BATTLE };
        <underflow>.mode = "battle";
        <underflow>[101] = <underflow>;
        <underflow>.callback = { label: "SHOW_CHARACTER_STATE", category: ((DebugMenuCategory).EDebugCategory).BATTLE };
        <underflow>.mode = "battle";
        <underflow>[102] = <underflow>;
        <underflow>.callback = { label: "SHOW_CONNECTION_INFO", category: ((DebugMenuCategory).EDebugCategory).BATTLE };
        <underflow>.mode = "battle";
        <underflow>[103] = <underflow>;
        <underflow>.callback = { label: "TOGGLE_TILE_GRID", category: ((DebugMenuCategory).EDebugCategory).BATTLE };
        <underflow>.getState = {};
        <underflow>.checkbox = <underflow>;
        <underflow>.mode = "battle";
        <underflow>[104] = <underflow>;
        <underflow>.callback = { label: "SKIP_TUTORIAL", category: ((DebugMenuCategory).EDebugCategory).BATTLE };
        <underflow>.mode = "battle";
        <underflow>[105] = <underflow>;
        <underflow>.callback = { label: "START_TUTORIAL", category: ((DebugMenuCategory).EDebugCategory).BATTLE };
        <underflow>.mode = "home";
        <underflow>[106] = <underflow>;
        <underflow>.callback = { label: "START_TRAINING", category: ((DebugMenuCategory).EDebugCategory).BATTLE };
        <underflow>.mode = "home";
        <underflow>[107] = <underflow>;
        <underflow>.callback = { label: "TOGGLE_CHAT_BUBBLES", category: ((DebugMenuCategory).EDebugCategory).BATTLE };
        <underflow>.getState = {};
        <underflow>.checkbox = <underflow>;
        <underflow>.mode = "battle";
        <underflow>[108] = <underflow>;
        <underflow>.callback = { label: "TOGGLE_HUD", category: ((DebugMenuCategory).EDebugCategory).BATTLE };
        <underflow>.getState = {};
        <underflow>.checkbox = <underflow>;
        <underflow>.mode = "battle";
        <underflow>[109] = <underflow>;
        <underflow>.callback = { label: "TOGGLE_HERO_HUD", category: ((DebugMenuCategory).EDebugCategory).BATTLE };
        <underflow>.getState = {};
        <underflow>.checkbox = <underflow>;
        <underflow>.mode = "battle";
        <underflow>[110] = <underflow>;
        <underflow>.callback = { label: "TOGGLE_ZOOM", category: ((DebugMenuCategory).EDebugCategory).BATTLE };
        <underflow>.getState = {};
        <underflow>.checkbox = <underflow>;
        <underflow>.mode = "battle";
        <underflow>[111] = <underflow>;
        <underflow>.callback = { label: "COPY_REPLAY_CODE", category: ((DebugMenuCategory).EDebugCategory).REPLAY_SPECTATE };
        <underflow>.mode = "battle";
        <underflow>[112] = <underflow>;
        <underflow>.callback = { label: "LOAD_REPLAY", category: ((DebugMenuCategory).EDebugCategory).REPLAY_SPECTATE };
        <underflow>.mode = "home";
        <underflow>[113] = <underflow>;
        <underflow>.callback = { label: "TOGGLE_FOLLOW_SPECTATE", category: ((DebugMenuCategory).EDebugCategory).REPLAY_SPECTATE };
        <underflow>.getState = {};
        <underflow>.checkbox = <underflow>;
        <underflow>.mode = "battle";
        <underflow>[114] = <underflow>;
        <underflow>.callback = { label: "ADD_SPECTATORS", category: ((DebugMenuCategory).EDebugCategory).REPLAY_SPECTATE };
        <underflow>.mode = "battle";
        <underflow>[115] = <underflow>;
        <underflow>.callback = { label: "ADD_SPECTATORS_BRAWLTV", category: ((DebugMenuCategory).EDebugCategory).REPLAY_SPECTATE };
        <underflow>.mode = "battle";
        <underflow>[116] = <underflow>;
        <underflow>.callback = { label: "OPEN_MAP_EDITOR_POPUP", category: ((DebugMenuCategory).EDebugCategory).MAP_EDITOR };
        <underflow>.mode = "home";
        <underflow>[117] = <underflow>;
        <underflow>.callback = { label: "MAP_EDITOR_TOGGLE_GRID", category: ((DebugMenuCategory).EDebugCategory).MAP_EDITOR };
        <underflow>.mode = "mapeditor";
        <underflow>[118] = <underflow>;
        <underflow>.callback = { label: "MAP_EDITOR_FILL_ALL", category: ((DebugMenuCategory).EDebugCategory).MAP_EDITOR };
        <underflow>.mode = "mapeditor";
        <underflow>[119] = <underflow>;
        <underflow>.callback = { label: "MAP_EDITOR_ERASE_ALL", category: ((DebugMenuCategory).EDebugCategory).MAP_EDITOR };
        <underflow>.mode = "mapeditor";
        <underflow>[120] = <underflow>;
        <underflow>.callback = { label: "MAP_EDITOR_BYPASS_SAVE_VALIDATION", category: ((DebugMenuCategory).EDebugCategory).MAP_EDITOR };
        <underflow>.getState = {};
        <underflow>.checkbox = <underflow>;
        <underflow>.mode = "mapeditor";
        <underflow>[121] = <underflow>;
        <underflow>.callback = { label: "MAP_EDITOR_UNLOCK_FULL_PALETTE", category: ((DebugMenuCategory).EDebugCategory).MAP_EDITOR };
        <underflow>.getState = {};
        <underflow>.checkbox = <underflow>;
        <underflow>.mode = "mapeditor";
        <underflow>[122] = <underflow>;
        <underflow>.callback = { label: "MAP_EDITOR_BYPASS_PLACEMENT_ZONES", category: ((DebugMenuCategory).EDebugCategory).MAP_EDITOR };
        <underflow>.getState = {};
        <underflow>.checkbox = <underflow>;
        <underflow>.mode = "mapeditor";
        <underflow>[123] = <underflow>;
        <underflow>.callback = { label: "MAP_EDITOR_GO_HOME", category: ((DebugMenuCategory).EDebugCategory).MAP_EDITOR };
        <underflow>.mode = "mapeditor";
        <underflow>[124] = <underflow>;
        <underflow>.callback = { label: "PAUSE_MUSIC_TOGGLE", category: ((DebugMenuCategory).EDebugCategory).AUDIO };
        <underflow>[125] = <underflow>;
        <underflow>.callback = { label: "MUSIC_VOLUME_CYCLE_0_50_100", category: ((DebugMenuCategory).EDebugCategory).AUDIO };
        <underflow>[126] = <underflow>;
        <underflow>.callback = { label: "BOSS_MUSIC_TOGGLE", category: ((DebugMenuCategory).EDebugCategory).AUDIO };
        <underflow>[127] = <underflow>;
        <underflow>[128] = { label: "ADD_BP_XP", category: ((DebugMenuCategory).EDebugCategory).BRAWL_PASS, actionIdx: 81, intParameter: 1000 };
        <underflow>[129] = { label: "BUY_BP_SEASON_1", category: ((DebugMenuCategory).EDebugCategory).BRAWL_PASS, actionIdx: 94, intParameter: 0 };
        <underflow>[130] = { label: "BUY_BP_SEASON_2", category: ((DebugMenuCategory).EDebugCategory).BRAWL_PASS, actionIdx: 94, intParameter: 1 };
        <underflow>[131] = { label: "BUY_BP_SEASON_3", category: ((DebugMenuCategory).EDebugCategory).BRAWL_PASS, actionIdx: 94, intParameter: 2 };
        <underflow>[132] = { label: "BP_DEBUG_RESET_PROGRESS", category: ((DebugMenuCategory).EDebugCategory).BRAWL_PASS, actionIdx: 171, intParameter: 1 };
        <underflow>[133] = { label: "COMP_PASS_NEW_SEASON", category: ((DebugMenuCategory).EDebugCategory).BRAWL_PASS, actionIdx: 284, intParameter: 1 };
        <underflow>[134] = { label: "COMP_PASS_PROGRESS", category: ((DebugMenuCategory).EDebugCategory).BRAWL_PASS, actionIdx: 285, intParameter: 1 };
        <underflow>[135] = { label: "COMP_PASS_DEBUG_RESET", category: ((DebugMenuCategory).EDebugCategory).BRAWL_PASS, actionIdx: 287, intParameter: 1 };
        <underflow>[136] = { label: "ADD_CHAMPIONSHIP_WIN", category: ((DebugMenuCategory).EDebugCategory).CHALLENGE, actionIdx: 84, intParameter: 1 };
        <underflow>[137] = { label: "ADD_CHAMPIONSHIP_LOSS", category: ((DebugMenuCategory).EDebugCategory).CHALLENGE, actionIdx: 95, intParameter: 1 };
        <underflow>[138] = { label: "ADD_PRO_LEAGUE_POINT", category: ((DebugMenuCategory).EDebugCategory).CHALLENGE, actionIdx: 91, intParameter: 1 };
        <underflow>[139] = { label: "SET_CC_ESPORTS_QUALIFIED", category: ((DebugMenuCategory).EDebugCategory).CHALLENGE, actionIdx: 102, intParameter: 1 };
        <underflow>[140] = { label: "REMOVE_CC_ESPORTS", category: ((DebugMenuCategory).EDebugCategory).CHALLENGE, actionIdx: 103, intParameter: 1 };
        <underflow>[141] = { label: "COLLAB_SIDE_SEEN", category: ((DebugMenuCategory).EDebugCategory).CHALLENGE, actionIdx: 266, intParameter: 1 };
        <underflow>[142] = { label: "ADD_DAILY_STREAK", category: ((DebugMenuCategory).EDebugCategory).TIME, actionIdx: 288, intParameter: 1 };
        <underflow>[143] = { label: "PLAYER_CONTEST_END", category: ((DebugMenuCategory).EDebugCategory).TIME, actionIdx: 268, intParameter: 1 };
        <underflow>[144] = { label: "TROPHY_SEASON_END_NOTIF", category: ((DebugMenuCategory).EDebugCategory).TIME, actionIdx: 245, intParameter: 1 };
        <underflow>.callback = { label: "AA_DIALOG", category: ((DebugMenuCategory).EDebugCategory).NOTIFICATIONS };
        <underflow>.mode = "home";
        <underflow>[145] = <underflow>;
        <underflow>.callback = { label: "FORCE_ACTIVE_NOTIFICATIONS", category: ((DebugMenuCategory).EDebugCategory).NOTIFICATIONS };
        <underflow>.mode = "home";
        <underflow>[146] = <underflow>;
        <underflow>.callback = { label: "FORCE_ALL_NOTIFICATIONS", category: ((DebugMenuCategory).EDebugCategory).NOTIFICATIONS };
        <underflow>.mode = "home";
        <underflow>[147] = <underflow>;
        <underflow>.callback = { label: "RESET_FORCED_NOTIFICATIONS", category: ((DebugMenuCategory).EDebugCategory).NOTIFICATIONS };
        <underflow>.mode = "home";
        <underflow>[148] = <underflow>;
        <underflow>.callback = { label: "DEVICE_LINK_SCREEN", category: ((DebugMenuCategory).EDebugCategory).PRC_CHINA };
        <underflow>.mode = "home";
        <underflow>[149] = <underflow>;
        <underflow>.callback = { label: "OPEN_YOOZOO_UPDATE_URL", category: ((DebugMenuCategory).EDebugCategory).PRC_CHINA };
        <underflow>.mode = "home";
        <underflow>[150] = <underflow>;
        <underflow>.callback = { label: "GFX_QUALITY_CYCLE", category: ((DebugMenuCategory).EDebugCategory).GFX };
        <underflow>[151] = <underflow>;
        <underflow>.callback = { label: "MEM_QUALITY_CYCLE", category: ((DebugMenuCategory).EDebugCategory).GFX };
        <underflow>[152] = <underflow>;
        <underflow>.callback = { label: "SMOOTH_HUD", category: ((DebugMenuCategory).EDebugCategory).GFX };
        <underflow>.getState = {};
        <underflow>.checkbox = <underflow>;
        <underflow>[153] = <underflow>;
        <underflow>.callback = { label: "TOGGLE_FPS_COUNTER", category: ((DebugMenuCategory).EDebugCategory).GFX };
        <underflow>.getState = {};
        <underflow>.checkbox = <underflow>;
        <underflow>[154] = <underflow>;
        <underflow>.callback = { label: "USE_LOW_END_RES", category: ((DebugMenuCategory).EDebugCategory).GFX };
        <underflow>.getState = {};
        <underflow>.checkbox = <underflow>;
        <underflow>[155] = <underflow>;
        <underflow>.callback = { label: "GUI_UI_INSPECTOR", category: ((DebugMenuCategory).EDebugCategory).GUI };
        <underflow>.getState = {};
        <underflow>.checkbox = <underflow>;
        <underflow>[156] = <underflow>;
        <underflow>.callback = { label: "GUI_CLOSE_ALL_POPUPS", category: ((DebugMenuCategory).EDebugCategory).GUI };
        <underflow>[157] = <underflow>;
        <underflow>.callback = { label: "GUI_TEST_FLOATER", category: ((DebugMenuCategory).EDebugCategory).GUI };
        <underflow>[158] = <underflow>;
        <underflow>.callback = { label: "LATENCY_TEST_START", category: ((DebugMenuCategory).EDebugCategory).TESTS };
        <underflow>[159] = <underflow>;
        <underflow>.callback = { label: "REQUEST_SEASON_REWARDS", category: ((DebugMenuCategory).EDebugCategory).TESTS };
        <underflow>[160] = <underflow>;
        <underflow>.callback = { label: "START_TUTORIAL_FROM_CONVERSION", category: ((DebugMenuCategory).EDebugCategory).TESTS };
        <underflow>.mode = "home";
        <underflow>[161] = <underflow>;
        <underflow>.callback = { label: "FAKE_MAINTENANCE_MODE", category: ((DebugMenuCategory).EDebugCategory).TESTS };
        <underflow>.mode = "home";
        <underflow>[162] = <underflow>;
        <underflow>.callback = { label: "FAKE_SHORT_MAINTENANCE_30S", category: ((DebugMenuCategory).EDebugCategory).TESTS };
        <underflow>.mode = "home";
        <underflow>[163] = <underflow>;
        <underflow>.callback = { label: "FAKE_2_TAB_MAINTENANCE", category: ((DebugMenuCategory).EDebugCategory).TESTS };
        <underflow>.mode = "home";
        <underflow>[164] = <underflow>;
        <underflow>.callback = { label: "FAKE_3_TAB_MAINTENANCE", category: ((DebugMenuCategory).EDebugCategory).TESTS };
        <underflow>.mode = "home";
        <underflow>[165] = <underflow>;
        <underflow>.callback = { label: "FAKE_NEWS_ESPORTS_MAINTENANCE", category: ((DebugMenuCategory).EDebugCategory).TESTS };
        <underflow>.mode = "home";
        <underflow>[166] = <underflow>;
        <underflow>.callback = { label: "TEST_CONTENT_UPDATE", category: ((DebugMenuCategory).EDebugCategory).TESTS };
        <underflow>.getState = {};
        <underflow>.checkbox = <underflow>;
        <underflow>[167] = <underflow>;
        <underflow>.callback = { label: "TEST_DEFERRED_DOWNLOAD", category: ((DebugMenuCategory).EDebugCategory).TESTS };
        <underflow>[168] = <underflow>;
        <underflow>.callback = { label: "TRIGGER_APP_REVIEW", category: ((DebugMenuCategory).EDebugCategory).TESTS };
        <underflow>[169] = <underflow>;
        <underflow>.callback = { label: "RANKED_SEASON_END_POPUP", category: ((DebugMenuCategory).EDebugCategory).RANKED };
        <underflow>.mode = "home";
        <underflow>[170] = <underflow>;
        <underflow>.ALL_BUTTONS = <underflow>;
        return;
};

// --------------------- MODULE 4595 — CategoryManagementPopup ---------------------

// ============================================================ //
// webpack module 4595  —  CategoryManagementPopup
// exports: CategoryManagementPopup
// deps: 6193 (GenericPopup), 7265 (Localisation), 8156 (_), 9016 (ScrollArea), 9250 (StringTable)
// ============================================================ //

__webpack_modules__[4595] = function CategoryManagementPopup_factory(__unused_webpack_module, exports, __webpack_require__) {
    var _, StringTable, GenericPopup, ScrollArea, Localisation, DISABLE_CHILDRENS, CategoryManagementPopup, <class_fields_init>, CategoryManagementPopup;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.CategoryManagementPopup = undefined;
        _ = __webpack_require__(8156);
        StringTable = __webpack_require__(9250);
        GenericPopup = __webpack_require__(6193);
        ScrollArea = __webpack_require__(9016);
        Localisation = __webpack_require__(7265);
        DISABLE_CHILDRENS = [3, 6, 7, 8, 9, 10, 11, 12, 13, 14];
        static createItems () {
        (this).createScrollArea();
        return;
};
        static createScrollArea () {
    var area;
        area = new (ScrollArea).ScrollArea(1000, 270, 100);
        area.x = (-370.88);
        area.y = -160;
        (area).enablePinching(false);
        (area).enableHorizontalDrag(false);
        (area).enableVerticalDrag(true);
        (area).setAlignment(4);
        (area).setClipping(true);
        (this).addChild(area);
        this.scrollArea = area;
        return;
};
        static createTestContent () {
    var i, popupClip, child;
        i = 0;
        while ((i < 7)) {
            popupClip = ((StringTable).StringTable).getMovieClip("sc/ui.sc", "popup_notification_settings");
            child = (popupClip).getChildById(2);
            if (!(!child)) {
                (child).setHeight(80);
                (child).setWidth(1470);
                child.x = 0;
                child.y = (i * 90);
                (child).colorTransform.r = 255;
                (child).colorTransform.g = 0;
                (child).colorTransform.b = 0;
                (_).LogInfo("hey nigga", i);
                ((this).scrollArea).addContent(child, true);
            } /* if 0xb1a76 */
            i = ((i) + 1);
            (i++);
        } /* while 0xb1a81 */
        return;
};
        static updateElements (deltaTime) {
        if ((this).scrollArea) {
            ((this).scrollArea).update(deltaTime);
            return;
        } /* if 0xb1b03 (open) */
};
        <class_fields_init> = undefined;
        CategoryManagementPopup;
        class CategoryManagementPopup extends <class_fields_init> = (GenericPopup).GenericPopup {
            constructor (character) {
    var movieClip, characterTid, closeButton, this.active_func, new.target;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        this = super("popup_notification_settings");
        if (<class_fields_init>) {
        } /* if 0xb177d */
        this.character = character;
        movieClip = (this).getMovieClip();
        (DISABLE_CHILDRENS).forEach(function (e) {
        (movieClip).getChildById(e).visibility = false;
        return (movieClip).getChildById(e);
});
        this.bg = (movieClip).getChildById(2);
        characterTid = (character).getTID();
        (this).setTitleTid((((Localisation).Localisation).getString("ManageCategories_Title")).replace("{characterName}", ((StringTable).StringTable).getString(characterTid)));
        (this).createItems();
        closeButton = (this).addGameButton("close_button", 1);
        this.closeButton = closeButton;
        (closeButton).setCustomButtonListener(((this).closeButtonPressed).bind(this));
        return this;
}
        }
        CategoryManagementPopup = CategoryManagementPopup = CategoryManagementPopup;
        exports.CategoryManagementPopup = CategoryManagementPopup;
        return;
};

