// =============================================================
// MOD CONFIGURATION (SETTINGS POPUP)
// merged webpack modules: 6893 ModConfiguration, 7428 ModConfigurationItem, 2214 ModProperties
// =============================================================

// --------------------- MODULE 6893 — ModConfiguration ---------------------

// ============================================================ //
// webpack module 6893  —  ModConfiguration
// exports: ModConfigurationPopup
// deps: 33 (SettingsPopup), 699 (FileManager), 1128 (LogicNativeDialog), 1588 (LogicMemory), 2120 (IconCallbacks), 2214 (ModProperties), 4009 (Config), 4272 (EDebugger), 4934 (GUI), 5667 (Validation), 6193 (GenericPopup), 7265 (Localisation), 7394 (MapEditorModifierPopup), 7428 (ModConfigurationItem), 8569 (HomeScreen), 8775 (GameMain), 8892 (DebugMenuButton), 9016 (ScrollArea), 9244 (ThemeSelector), 9250 (StringTable) ...
// ============================================================ //

__webpack_modules__[6893] = function ModConfiguration_factory(__unused_webpack_module, exports, __webpack_require__) {
    var ModConfigurationItem, GenericPopup, Config, ScrollArea, LogicMemory, Localisation, StringTable, MapEditorModifierPopup, FileManager, ModProperties, GameMain, GUI, SettingsPopup, LogicNativeDialog, EDebugger, FPSCounter, ThemeSelector, Validation, PlayerInfo, HomeScreen, DebugMenuButton, IconCallbacks, closeButtonOffset, scrollAreaOffset, unknownOffset, scrollAreaParameter, scrollAreaXOffset, scrollAreaYOffset, ModConfigurationPopup, <class_fields_init>, ModConfigurationPopup;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.ModConfigurationPopup = undefined;
        ModConfigurationItem = __webpack_require__(7428);
        GenericPopup = __webpack_require__(6193);
        Config = __webpack_require__(4009);
        ScrollArea = __webpack_require__(9016);
        LogicMemory = __webpack_require__(1588);
        Localisation = __webpack_require__(7265);
        StringTable = __webpack_require__(9250);
        MapEditorModifierPopup = __webpack_require__(7394);
        FileManager = __webpack_require__(699);
        ModProperties = __webpack_require__(2214);
        GameMain = __webpack_require__(8775);
        GUI = __webpack_require__(4934);
        SettingsPopup = __webpack_require__(33);
        LogicNativeDialog = __webpack_require__(1128);
        EDebugger = __webpack_require__(4272);
        FPSCounter = __webpack_require__(9786);
        ThemeSelector = __webpack_require__(9244);
        Validation = __webpack_require__(5667);
        PlayerInfo = __webpack_require__(9518);
        HomeScreen = __webpack_require__(8569);
        DebugMenuButton = __webpack_require__(8892);
        IconCallbacks = __webpack_require__(2120);
        closeButtonOffset = ((LogicMemory).LogicMemory).offset(416);
        scrollAreaOffset = ((LogicMemory).LogicMemory).offset(448);
        unknownOffset = ((LogicMemory).LogicMemory).offset(520);
        scrollAreaParameter = ((LogicMemory).LogicMemory).offset(224);
        scrollAreaXOffset = ((LogicMemory).LogicMemory).offset(192);
        scrollAreaYOffset = ((LogicMemory).LogicMemory).offset(480);
        static addSubheading (text) {
    var margin, fontSize, text, margin, fontSize, popoverTextLeft, textField;
        popoverTextLeft = this;
        margin = text;
        if (((margin) === undefined)) {
            fontSize = margin = 0;
        } /* if 0xc081b */
        if (((fontSize) === undefined)) {
            text = fontSize = 30;
        } /* if 0xc0825 */
        margin = ((StringTable).StringTable).getMovieClip("sc/ui.sc", "popover_text_left");
        fontSize = (margin).getTextFieldByName("text");
        fontSize.color = 4294967295.0;
        fontSize.fontOutline = true;
        fontSize.fontSize = fontSize;
        fontSize.text = text;
        fontSize.align = 2;
        (fontSize).setXY((((((popoverTextLeft).scrollArea).instance).add(scrollAreaXOffset)).readFloat() / 3), ((((popoverTextLeft).instance).add(scrollAreaYOffset)).readFloat() + margin));
        (((popoverTextLeft).instance).add(scrollAreaYOffset)).writeFloat(((((fontSize).height + 15) + margin) + (((popoverTextLeft).instance).add(scrollAreaYOffset)).readFloat()));
        return;
};
        static addItem (configuration) {
    var item;
        if ((configuration).disabled) {
            return;
        } /* if 0xc0981 */
        item = new (ModConfigurationItem).ModConfigurationItem(configuration);
        (item).setXY(((((((this).scrollArea).instance).add(scrollAreaXOffset)).readFloat() - (item).width) / 2), (((this).instance).add(scrollAreaYOffset)).readFloat());
        (((this).instance).add(scrollAreaYOffset)).writeFloat((((item).height + 10) + (((this).instance).add(scrollAreaYOffset)).readFloat()));
        ((ModConfigurationPopup).buttonInstances).push(item);
        return;
};
        static createItems () {
    var category, margin, items;
        /* jump -> 0xc0b52 */
        category = /*iter*/ (Object).keys((this).ITEMS);
        if ((category === "ModConfigurationPopupSubheadingDebug")) {
            if ((!(((Config).Config).useDebugLoggingVersions).includes(((ModProperties).ModProperties).environment))) {
                if (!(!(((Validation).Validation).developersList).includes(((PlayerInfo).PlayerInfo).tag))) {
                    if ((((ModConfigurationPopup).HEADERS_MARGINS[category]) == null)) {
                        margin = 0;
                    } /* if 0xc0b17 */
                    (this).addSubheading(((Localisation).Localisation).getString(category), margin);
                    items = (this).ITEMS[category];
                    (items).forEach(function (item) {
        return (this).addItem(item);
});
                } /* if 0xc0b51 */
            } /* if 0xc0b05 */
        } /* if 0xc0b05 */
        } while (!margin = items = (Object).keys((this).ITEMS));
        category = <underflow>;
        return;
};
        static closeButtonPressed (self, button) {
    var modConfiguration, shouldReloadGame, showShowRestartRequiredDialog, shouldReopenSettingsPopup, shouldGoToHomeScreen, <home_object>;
        <home_object> = /*special:4*/;
        modConfiguration = (ModConfigurationPopup).instance;
        ((FileManager).FileManager).updateConfigFile();
        if (!((undefined) === undefined)) {
            shouldReloadGame = (Object(undefined)).shouldReloadGame;
            showShowRestartRequiredDialog = (Object(undefined)).showShowRestartRequiredDialog;
            shouldReopenSettingsPopup = (Object(undefined)).shouldReopenSettingsPopup;
            shouldGoToHomeScreen = (Object(undefined)).shouldGoToHomeScreen;
            Object(undefined);
        } /* if 0xc0c4b */
        /* jump -> 0xc0c51 */
        /* loop: jump back to 0xc0c2e */
        if (shouldReloadGame) {
            ((GameMain).GameMain).reloadGame();
        } /* if 0xc0c69 */
        /* jump -> 0xc0cb4 */
        if (showShowRestartRequiredDialog) {
            ((LogicNativeDialog).LogicNativeDialog).showRestartRequiredDialog();
        } /* if 0xc0c81 */
        /* jump -> 0xc0cb4 */
        if (!shouldReopenSettingsPopup) {
            if (shouldGoToHomeScreen) {
                ((GUI).GUI).closeAllPopups();
                if (shouldReopenSettingsPopup) {
                    ((SettingsPopup).SettingsPopup).show();
                } /* if 0xc0cb4 */
            } /* if 0xc0cb4 */
        } /* if 0xc0c8b */
        ModConfigurationPopup.shouldReloadGame = false;
        ModConfigurationPopup.shouldGoToHomeScreen = false;
        ModConfigurationPopup.shouldReopenSettingsPopup = false;
        ModConfigurationPopup.showShowRestartRequiredDialog = false;
        return;
};
        <class_fields_init> = undefined;
        ModConfigurationPopup;
        class ModConfigurationPopup extends <class_fields_init> = (GenericPopup).GenericPopup {
            constructor () {
    var closeButton, txtField, this.active_func, new.target;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        this = super("popup_editor_modifier", false, false, "", "", "");
        if (<class_fields_init>) {
        } /* if 0xbf08c */
        <underflow>.ModConfigurationPopupSubheadingCustomization = [<underflow>, closeButton = txtField = this = <underflow>, this.active_func, this, {}, { id: ((ModConfigurationItem).EModItem).CHROMATIC_NAME, infoPrefix: "VisualChromaticName", key: (((Config).Config).config).ChromaticName, configKey: "ChromaticName", shouldReloadGame: true, iconCallback: (IconCallbacks).VisualChromaticNamePinCallback }, { id: ((ModConfigurationItem).EModItem).PIN_ANIMATION, infoPrefix: "DisablePinAnimation", key: (((Config).Config).config).DisablePinAnimation, configKey: "DisablePinAnimation", iconCallback: (IconCallbacks).DisablePinAnimationCallback }, { id: ((ModConfigurationItem).EModItem).SHARED_BACKGROUND, infoPrefix: "UseThemeAllScreens", key: (((Config).Config).config).SharedBackground, configKey: "SharedBackground", shouldReopenSettingsPopup: true, iconCallback: (IconCallbacks).SharedBackgroundCallback }, { id: ((ModConfigurationItem).EModItem).MOD_OLD_RANK, disabled: true, infoPrefix: "OldRankMod", key: ((((Config).Config).config).CustomMods).includes(((ModProperties).CustomModNames).oldRankMod), shouldReloadGame: true, payload: ((ModProperties).CustomModNames).oldRankMod, configKey: "CustomMods", behaviour: ((ModConfigurationItem).EBehaviour).CUSTOM_MOD, callback: { id: ((ModConfigurationItem).EModItem).RANDOM_THEMES_S1, infoPrefix: "RandomThemes", key: (((Config).Config).config).RandomThemeMask[0] }, iconCallback: (IconCallbacks).RandomThemesCallback, callback: { id: ((ModConfigurationItem).EModItem).RANDOM_THEMES_S2, infoPrefix: "RandomThemesAfterBattle", key: (((Config).Config).config).RandomThemeMask[2] }, iconCallback: (IconCallbacks).RandomThemesAfterBattleCallback, callback: { id: ((ModConfigurationItem).EModItem).RANDOM_THEMES_S3, infoPrefix: "RandomThemesMusicIndependency", key: (((Config).Config).config).RandomThemeMask[1] }, iconCallback: (IconCallbacks).RandomThemesMusicIndependencyCallback, callback: { id: ((ModConfigurationItem).EModItem).FPS_COUNTER, infoPrefix: "ShowFPSCounter", key: (((Config).Config).config).ShowFPSCounter, configKey: "ShowFPSCounter" }, iconCallback: (IconCallbacks).ShowFPSCounterCallback }, { id: ((ModConfigurationItem).EModItem).ENFORCE_OLD_FRIENDS_LIST, infoPrefix: "EnforceOldFriendsList", key: (((Config).Config).config).EnforceOldFriendsList, configKey: "EnforceOldFriendsList", iconCallback: (IconCallbacks).EnforceOldFriendsListCallback }, { id: ((ModConfigurationItem).EModItem).HOMESCREEN_TEXT, infoPrefix: "HideLobbyInfo", key: (((Config).Config).config).HideHomeScreenText, configKey: "HideHomeScreenText", iconCallback: (IconCallbacks).HideHomeScreenTextCallback }, { id: ((ModConfigurationItem).EModItem).SHOW_SKIN_NAMES_IN_PROFILE, infoPrefix: "ShowSkinNamesInProfile", key: (((Config).Config).config).ShowSkinNamesInProfile, configKey: "ShowSkinNamesInProfile", iconCallback: (IconCallbacks).ShowSkinNamesInProfileCallback, callback: { id: ((ModConfigurationItem).EModItem).LEGACY_BACKGROUNDS, disabled: (!((ModProperties).ModProperties).isDev()), infoPrefix: "LegacyBackgrounds", key: (((Config).Config).config).LegacyBackgrounds, configKey: "LegacyBackgrounds" } }];
        <underflow>.iconCallback = { id: ((ModConfigurationItem).EModItem).HIGHLIGHT_DUO_QUIZ_ANSWERS, infoPrefix: "HighlightDuoQuizAnswers", key: (((Config).Config).config).HighlightDuoQuizAnswers, configKey: "HighlightDuoQuizAnswers" };
        ModConfigurationPopup.instance = this;
        ModConfigurationPopup.buttonInstances = [];
        ((LogicMemory).LogicMemory).fillWithZeroes(((this).instance).add(closeButtonOffset), 101);
        (((this).instance).add(unknownOffset)).writeInt(30);
        ((this).instance).writePointer((MapEditorModifierPopup).mapEditorModifierPopupVtableAddr);
        (this).setTitleTid(((Localisation).Localisation).getString("ModConfigurationPopupTitle"));
        closeButton = (this).addGameButton("button_close", 1);
        (((this).instance).add(closeButtonOffset)).writePointer((closeButton).instance);
        (closeButton).setCustomButtonListener(((this).closeButtonPressed).bind(this), "mod_configuration_close_button");
        txtField = ((this).getMovieClip()).getTextFieldByName("txt");
        this.scrollArea = new (ScrollArea).ScrollArea(txtField, 1);
        (((this).instance).add(scrollAreaOffset)).writePointer(((this).scrollArea).instance);
        ((((this).scrollArea).instance).add(scrollAreaParameter)).writeU8(1);
        ((this).scrollArea).enablePinching(false);
        ((this).scrollArea).enableHorizontalDrag(false);
        ((this).scrollArea).enableVerticalDrag(true);
        ((this).scrollArea).setAlignment(4);
        (this).createItems();
        (this).addChild(((this).scrollArea).instance);
        return this;
}
            getItemById (id) {
        return ((ModConfigurationPopup).buttonInstances).find(function (item) {
        return (((item).configuration).id === id);
});
}
        }
        ModConfigurationPopup = FileManager = ModConfigurationPopup;
        exports.ModConfigurationPopup = ModConfigurationPopup;
        ModConfigurationPopup.HEADERS_MARGINS = { ModConfigurationPopupSubheadingCustomization: 10, atom47: -30 };
        ModConfigurationPopup.buttonInstances = [];
        ModConfigurationPopup.shouldReloadGame = false;
        ModConfigurationPopup.shouldGoToHomeScreen = false;
        ModConfigurationPopup.shouldReopenSettingsPopup = false;
        ModConfigurationPopup.showShowRestartRequiredDialog = false;
        ModConfigurationPopup.pendingCallbacks = [];
        return;
};

// --------------------- MODULE 7428 — ModConfigurationItem ---------------------

// ============================================================ //
// webpack module 7428  —  ModConfigurationItem
// exports: EBehaviour, EModItem, ModConfigurationItem
// deps: 1588 (LogicMemory), 2556 (BSDPlusManager), 4009 (Config), 4272 (EDebugger), 6893 (ModConfiguration), 7265 (Localisation), 9250 (StringTable), 9407 (DropGUIContainer)
// ============================================================ //

__webpack_modules__[7428] = function ModConfigurationItem_factory(__unused_webpack_module, exports, __webpack_require__) {
    var DropGUIContainer, StringTable, Localisation, LogicMemory, BSDPlusManager, Config, ModConfiguration, EDebugger, toggleButtonOffset, idOffset, keyOffset, descriptionFieldOffset, EModItem, EBehaviour, ModConfigurationItem, <class_fields_init>, ModConfigurationItem;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.EModItem = undefined;
        undefined.EBehaviour = exports;
        exports.ModConfigurationItem = undefined;
        DropGUIContainer = __webpack_require__(9407);
        StringTable = __webpack_require__(9250);
        Localisation = __webpack_require__(7265);
        LogicMemory = __webpack_require__(1588);
        BSDPlusManager = __webpack_require__(2556);
        Config = __webpack_require__(4009);
        ModConfiguration = __webpack_require__(6893);
        EDebugger = __webpack_require__(4272);
        toggleButtonOffset = ((LogicMemory).LogicMemory).offset(224);
        idOffset = ((LogicMemory).LogicMemory).offset(240);
        keyOffset = ((LogicMemory).LogicMemory).offset(241);
        descriptionFieldOffset = ((LogicMemory).LogicMemory).offset(242);
        if (!EModItem) {
            exports.EModItem = toggleButtonOffset = {};
        } /* if 0xb3efd */
        toggleButtonOffset = {}(exports);
        if (!EBehaviour) {
            exports.EBehaviour = toggleButtonOffset = {};
        } /* if 0xb3f11 */
        toggleButtonOffset = {}(exports);
        static buttonPressed (self, button) {
    var itemId, item, currentButtonState, payload, createdPending;
        itemId = ((button).add(idOffset)).readU8();
        item = ((ModConfiguration).ModConfigurationPopup).getItemById(itemId);
        if ((!item)) {
            return;
        } /* if 0xb49e6 */
        if (((item).configuration).isBSDPlusOnly) {
            if ((!((BSDPlusManager).BSDPlusManager).isBSDPlusEnabled)) {
                return;
            } /* if 0xb4a16 */
        } /* if 0xb4a16 */
        currentButtonState = Boolean(((button).add(keyOffset)).readU8());
        if ((payload = ((item).configuration).behaviour === (EBehaviour).CUSTOM_MOD)) {
            payload = ((item).configuration).payload;
            if ((!payload)) {
                return;
            } /* if 0xb4a65 */
            if ((((Config).Config).config[((item).configuration).configKey]).includes(payload)) {
                ((Config).Config).config[((item).configuration).configKey] = (((Config).Config).config[((item).configuration).configKey]).filter(function (e) {
        return (e !== payload);
});
            } /* if 0xb4ad1 */
        } /* if 0xb4afd */
        /* jump -> 0xb4b66 */
        (((Config).Config).config[((item).configuration).configKey]).push(payload);
        /* jump -> 0xb4b65 */
        if ((payload = ((item).configuration).behaviour === (EBehaviour).SWITCH)) {
            if (((item).configuration).key) {
                if (((item).configuration).setState) {
                    ((item).configuration).setState((!((item).configuration).key));
                } /* if 0xb4b65 */
            } /* if 0xb4b65 */
        } /* if 0xb4b45 */
        /* jump -> 0xb4b65 */
        ((Config).Config).config[((item).configuration).configKey] = (!currentButtonState);
        payload = ((item).configuration).behaviour;
        ((button).add(keyOffset)).writeU8((+(!currentButtonState)));
        (((item).toggleButton).getMovieClip()).gotoAndStopFrameIndex((+currentButtonState));
        if (((item).configuration).shouldReloadGame) {
            (ModConfiguration).ModConfigurationPopup.shouldReloadGame = true;
        } /* if 0xb4bbd */
        if (((item).configuration).shouldGoToHomeScreen) {
            (ModConfiguration).ModConfigurationPopup.shouldGoToHomeScreen = true;
        } /* if 0xb4bda */
        if (((item).configuration).shouldReopenSettingsPopup) {
            (ModConfiguration).ModConfigurationPopup.shouldReopenSettingsPopup = true;
        } /* if 0xb4bf7 */
        if (((item).configuration).showShowRestartRequiredDialog) {
            (ModConfiguration).ModConfigurationPopup.showShowRestartRequiredDialog = true;
        } /* if 0xb4c14 */
        if ((!((item).configuration).callback)) {
            return;
        } /* if 0xb4c25 */
        createdPending = (((ModConfiguration).ModConfigurationPopup).pendingCallbacks).find(function (e) {
        return (((e).item).id === ((item).configuration).id);
});
        if (createdPending) {
            (ModConfiguration).ModConfigurationPopup.pendingCallbacks = (((ModConfiguration).ModConfigurationPopup).pendingCallbacks).filter(function (e) {
        return (((e).item).id !== ((item).configuration).id);
});
            return;
        } /* if 0xb4c68 */
        return;
};
        <class_fields_init> = undefined;
        ModConfigurationItem;
        class ModConfigurationItem extends <class_fields_init> = (DropGUIContainer).DropGUIContainer {
            constructor (configuration) {
    var modifierItemClip, toggleButton, toggleButtonClip, modTitleField, modDescriptionField, descText, bsdPlusSuffix, iconPlaceholderClip, placeholderHeight, iconClip, e, iconClipHeight, placeholderX, placeholderY, this.active_func, new.target;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        this = super(null, (ModConfigurationItem).allocationSize);
        if (<class_fields_init>) {
        } /* if 0xb4580 */
        this.configuration = configuration;
        modifierItemClip = ((StringTable).StringTable).getMovieClip("sc/ui.sc", "modifier_item");
        (this).setMovieClip(modifierItemClip);
        (modifierItemClip).setInteractiveRecursive(1);
        toggleButton = (this).addGameButton("mod_toggle", 1);
        toggleButtonClip = (toggleButton).getMovieClip();
        (((toggleButton).instance).add(idOffset)).writeU8((configuration).id);
        (((toggleButton).instance).add(keyOffset)).writeU8((+(configuration).key));
        this.toggleButton = toggleButton;
        (toggleButton).setCustomButtonListener((this).buttonPressed, (configuration).infoPrefix);
        (((this).instance).add(toggleButtonOffset)).writePointer((toggleButton).instance);
        (toggleButtonClip).setText("text_on", ((StringTable).StringTable).getString("TID_SETTINGS_ON"));
        (toggleButtonClip).setText("text_off", ((StringTable).StringTable).getString("TID_SETTINGS_OFF"));
        (toggleButtonClip).gotoAndStopFrameIndex((+(!(configuration).key)));
        modTitleField = (modifierItemClip).getTextFieldByName("mod_title");
        modDescriptionField = (modifierItemClip).getTextFieldByName("mod_desc");
        (((this).instance).add(descriptionFieldOffset)).writePointer((modDescriptionField).instance);
        (modTitleField).setTextScaleIfNecessary(((Localisation).Localisation).getString(((configuration).infoPrefix + "_name")));
        descText = ((Localisation).Localisation).getString(((configuration).infoPrefix + "_descEnabled"));
        if ((configuration).isBSDPlusOnly) {
            if ((!((BSDPlusManager).BSDPlusManager).isBSDPlusEnabled)) {
            } /* if 0xb479c */
        } /* if 0xb479c */
        /* jump -> 0xb479d */
        bsdPlusSuffix = "";
        modDescriptionField.colorTag = true;
        (modDescriptionField).setTextScaleIfNecessary((descText + bsdPlusSuffix));
        iconPlaceholderClip = (modifierItemClip).getMovieClipByName("icon_ph");
        iconPlaceholderClip.visibility = false;
        placeholderHeight = (iconPlaceholderClip).height;
        iconClip = null;
        /* CATCH -> 0xb480c (try region) */
        if ((configuration).iconCallback) {
            iconClip = (configuration).iconCallback();
        } /* if 0xb47fe */
        /* gosub 0xb4867 (finally) */
        /* jump -> 0xb488b */
        e = modDescriptionField;
        /* CATCH -> 0xb4861 (try region) */
        ((EDebugger).EDebugger).addMessage(((EDebugger).EDebugger).ERROR, ("Couldn't load icon for ").concat(((this).configuration).configKey, "\n", (e).stack));
        (" <cFFC040>").concat(((Localisation).Localisation).getString("BSDPlusOnly"), "</c>");
        /* gosub 0xb4867 (finally) */
        /* jump -> 0xb488a */
        /* gosub 0xb4867 (finally) */
        throw this;
        if ((!iconClip)) {
            iconClip = ((StringTable).StringTable).getMovieClip("sc/ui.sc", "questionmark_overlay");
            /* end finally */
        } /* if 0xb4889 */
        iconClipHeight = (iconClip).height;
        iconClip.scale = (placeholderHeight / iconClipHeight);
        if (!((undefined) === undefined)) {
            placeholderX = undefined;
            placeholderY = this;
        } /* if 0xb48b6 */
        /* jump -> 0xb48cc */
        /* loop: jump back to 0xb48a8 */
        (iconClip).setPixelSnappedXY(placeholderX, placeholderY);
        (modifierItemClip).addChild((iconClip).instance);
        return this;
}
        }
        ModConfigurationItem = toggleButtonOffset = ModConfigurationItem;
        exports.ModConfigurationItem = ModConfigurationItem;
        ModConfigurationItem.allocationSize = 264;
        return;
};

// --------------------- MODULE 2214 — ModProperties ---------------------

// ============================================================ //
// webpack module 2214  —  ModProperties
// exports: CustomModNames, EExperimentalFeature, ModProperties
// ============================================================ //

__webpack_modules__[2214] = function ModProperties_factory(__unused_webpack_module, exports) {
    var EExperimentalFeature, ModProperties, <class_fields_init>, ModProperties, CustomModNames, <class_fields_init>, CustomModNames;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.EExperimentalFeature = undefined;
        undefined.ModProperties = exports;
        exports.CustomModNames = undefined;
        if (!EExperimentalFeature) {
            exports.EExperimentalFeature = EExperimentalFeature = {};
        } /* if 0x92e11 */
        EExperimentalFeature = {}(exports);
        <class_fields_init> = undefined;
        ModProperties;
        class ModProperties {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x93022 (open) */
}
            isRelease () {
        return ((ModProperties).environment === "release");
}
            isPlus () {
        return ((ModProperties).environment === "plus");
}
            isDev () {
        return ((ModProperties).environment === "dev");
}
            isFeatureAvailableInThisBuild (feature) {
        if (((this).AVAILABLE_EXP_FEATURES).includes(feature)) {
            ((this).AVAILABLE_EXP_FEATURES).includes(feature);
            return ([(this).isRelease(), (this).isPlus()]).every(function (e) {
        return (!e);
});
        } /* if 0x92fde (open) */
}
        }
        ModProperties = ModProperties = ModProperties;
        exports.ModProperties = ModProperties;
        ModProperties.AVAILABLE_EXP_FEATURES = [(EExperimentalFeature).CATEGORIES];
        if (!"plus") {
            ModProperties.environment = 0;
        } /* if 0x92e7c */
        ModProperties.version = "69.230-64";
        ModProperties.showPatchNotesFor = "69.230-0";
        ModProperties.isIntegration = false;
        <class_fields_init> = undefined;
        CustomModNames;
        class CustomModNames {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x9304b (open) */
}
        }
        CustomModNames = v8 = CustomModNames;
        exports.CustomModNames = CustomModNames;
        CustomModNames.oldRankMod = "OldRankMod";
        return;
};

