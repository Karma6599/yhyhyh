var closeButtonOffset = LogicMemory.offset(416);
var scrollAreaOffset = LogicMemory.offset(448);
var unknownOffset = LogicMemory.offset(520);
var scrollAreaParameter = LogicMemory.offset(224);
var scrollAreaXOffset = LogicMemory.offset(192);
var scrollAreaYOffset = LogicMemory.offset(480);

class ModConfigurationPopup extends GenericPopup {
    constructor() {
        super("popup_editor_modifier", false, false, "", "", "");
        ModConfigurationPopup.instance = this;
        ModConfigurationPopup.buttonInstances = [];
        LogicMemory.fillWithZeroes(this.instance.add(closeButtonOffset), 101);
        this.instance.add(unknownOffset).writeInt(30);
        this.instance.writePointer(MapEditorModifierPopup.mapEditorModifierPopupVtableAddr);
        this.setTitleTid(Localisation.getString("ModConfigurationPopupTitle"));
        var closeButton = this.addGameButton("button_close", 1);
        this.instance.add(closeButtonOffset).writePointer(closeButton.instance);
        closeButton.setCustomButtonListener(this.closeButtonPressed.bind(this), "mod_configuration_close_button");
        var txtField = this.getMovieClip().getTextFieldByName("txt");
        this.scrollArea = new ScrollArea(txtField, 1);
        this.instance.add(scrollAreaOffset).writePointer(this.scrollArea.instance);
        this.scrollArea.instance.add(scrollAreaParameter).writeU8(1);
        this.scrollArea.enablePinching(false);
        this.scrollArea.enableHorizontalDrag(false);
        this.scrollArea.enableVerticalDrag(true);
        this.scrollArea.setAlignment(4);
        this.createItems();
        this.addChild(this.scrollArea.instance);
    }
    static getItemById(id) {
        return ModConfigurationPopup.buttonInstances.find(function (item) {
            return item.configuration.id === id;
        });
    }
    addSubheading(text, margin, fontSize) {
        if (margin === undefined) {
            margin = 0;
        }
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
        textField.setXY(this.scrollArea.instance.add(scrollAreaXOffset).readFloat() / 3, this.instance.add(scrollAreaYOffset).readFloat() + margin);
        this.instance.add(scrollAreaYOffset).writeFloat(textField.height + 15 + margin + this.instance.add(scrollAreaYOffset).readFloat());
    }
    addItem(configuration) {
        if (configuration.disabled) {
            return;
        }
        var item = new ModConfigurationItem(configuration);
        item.setXY((this.scrollArea.instance.add(scrollAreaXOffset).readFloat() - item.width) / 2, this.instance.add(scrollAreaYOffset).readFloat());
        this.instance.add(scrollAreaYOffset).writeFloat(item.height + 10 + this.instance.add(scrollAreaYOffset).readFloat());
        ModConfigurationPopup.buttonInstances.push(item);
    }
    createItems() {
        for (var category of Object.keys(this.ITEMS)) {
            if (category === "ModConfigurationPopupSubheadingDebug") {
                if (!Config.useDebugLoggingVersions.includes(ModProperties.environment)) {
                    if (!Validation.developersList.includes(PlayerInfo.tag)) {
                        continue;
                    }
                }
            }
            var margin = ModConfigurationPopup.HEADERS_MARGINS[category];
            if (margin == null) {
                margin = 0;
            }
            this.addSubheading(Localisation.getString(category), margin);
            var items = this.ITEMS[category];
            items.forEach((item) => this.addItem(item));
        }
    }
    closeButtonPressed(self, button) {
        var modConfiguration = ModConfigurationPopup.instance;
        FileManager.updateConfigFile();
        var shouldReloadGame = ModConfigurationPopup.shouldReloadGame;
        var showShowRestartRequiredDialog = ModConfigurationPopup.showShowRestartRequiredDialog;
        var shouldReopenSettingsPopup = ModConfigurationPopup.shouldReopenSettingsPopup;
        var shouldGoToHomeScreen = ModConfigurationPopup.shouldGoToHomeScreen;
        if (shouldReloadGame) {
            GameMain.reloadGame();
        }
        if (showShowRestartRequiredDialog) {
            LogicNativeDialog.showRestartRequiredDialog();
        }
        if (!shouldReopenSettingsPopup) {
            if (shouldGoToHomeScreen) {
                GUI.closeAllPopups();
                if (shouldReopenSettingsPopup) {
                    SettingsPopup.show();
                }
            }
        }
        ModConfigurationPopup.shouldReloadGame = false;
        ModConfigurationPopup.shouldGoToHomeScreen = false;
        ModConfigurationPopup.shouldReopenSettingsPopup = false;
        ModConfigurationPopup.showShowRestartRequiredDialog = false;
    }
}
ModConfigurationPopup.ITEMS = {
    ModConfigurationPopupSubheadingCustomization: [
        { id: EModItem.CHROMATIC_NAME, infoPrefix: "VisualChromaticName", key: Config.config.ChromaticName, configKey: "ChromaticName", shouldReloadGame: true, iconCallback: IconCallbacks.VisualChromaticNamePinCallback },
        { id: EModItem.PIN_ANIMATION, infoPrefix: "DisablePinAnimation", key: Config.config.DisablePinAnimation, configKey: "DisablePinAnimation", iconCallback: IconCallbacks.DisablePinAnimationCallback },
        { id: EModItem.SHARED_BACKGROUND, infoPrefix: "UseThemeAllScreens", key: Config.config.SharedBackground, configKey: "SharedBackground", shouldReopenSettingsPopup: true, iconCallback: IconCallbacks.SharedBackgroundCallback },
        { id: EModItem.MOD_OLD_RANK, disabled: true, infoPrefix: "OldRankMod", key: Config.config.CustomMods.includes(CustomModNames.oldRankMod), shouldReloadGame: true, payload: CustomModNames.oldRankMod, configKey: "CustomMods", behaviour: EBehaviour.CUSTOM_MOD },
        { id: EModItem.RANDOM_THEMES_S1, infoPrefix: "RandomThemes", key: Config.config.RandomThemeMask[0], iconCallback: IconCallbacks.RandomThemesCallback },
        { id: EModItem.RANDOM_THEMES_S2, infoPrefix: "RandomThemesAfterBattle", key: Config.config.RandomThemeMask[2], iconCallback: IconCallbacks.RandomThemesAfterBattleCallback },
        { id: EModItem.RANDOM_THEMES_S3, infoPrefix: "RandomThemesMusicIndependency", key: Config.config.RandomThemeMask[1], iconCallback: IconCallbacks.RandomThemesMusicIndependencyCallback },
        { id: EModItem.FPS_COUNTER, infoPrefix: "ShowFPSCounter", key: Config.config.ShowFPSCounter, configKey: "ShowFPSCounter", iconCallback: IconCallbacks.ShowFPSCounterCallback },
        { id: EModItem.ENFORCE_OLD_FRIENDS_LIST, infoPrefix: "EnforceOldFriendsList", key: Config.config.EnforceOldFriendsList, configKey: "EnforceOldFriendsList", iconCallback: IconCallbacks.EnforceOldFriendsListCallback },
        { id: EModItem.HOMESCREEN_TEXT, infoPrefix: "HideLobbyInfo", key: Config.config.HideHomeScreenText, configKey: "HideHomeScreenText", iconCallback: IconCallbacks.HideHomeScreenTextCallback },
        { id: EModItem.SHOW_SKIN_NAMES_IN_PROFILE, infoPrefix: "ShowSkinNamesInProfile", key: Config.config.ShowSkinNamesInProfile, configKey: "ShowSkinNamesInProfile", iconCallback: IconCallbacks.ShowSkinNamesInProfileCallback },
        { id: EModItem.LEGACY_BACKGROUNDS, disabled: !ModProperties.isDev(), infoPrefix: "LegacyBackgrounds", key: Config.config.LegacyBackgrounds, configKey: "LegacyBackgrounds" }
    ],
    ModConfigurationPopupSubheadingOptimization: [
        { id: EModItem.HIGHLIGHT_DUO_QUIZ_ANSWERS, infoPrefix: "HighlightDuoQuizAnswers", key: Config.config.HighlightDuoQuizAnswers, configKey: "HighlightDuoQuizAnswers" }
    ],
    ModConfigurationPopupSubheadingDebug: []
};
ModConfigurationPopup.HEADERS_MARGINS = { ModConfigurationPopupSubheadingCustomization: 10, atom47: -30 };
ModConfigurationPopup.buttonInstances = [];
ModConfigurationPopup.shouldReloadGame = false;
ModConfigurationPopup.shouldGoToHomeScreen = false;
ModConfigurationPopup.shouldReopenSettingsPopup = false;
ModConfigurationPopup.showShowRestartRequiredDialog = false;
ModConfigurationPopup.pendingCallbacks = [];

var toggleButtonOffset = LogicMemory.offset(224);
var idOffset = LogicMemory.offset(240);
var keyOffset = LogicMemory.offset(241);
var descriptionFieldOffset = LogicMemory.offset(242);

var EModItem = {};
var EBehaviour = {};

class ModConfigurationItem extends DropGUIContainer {
    constructor(configuration) {
        super(null, ModConfigurationItem.allocationSize);
        this.configuration = configuration;
        var modifierItemClip = StringTable.getMovieClip("sc/ui.sc", "modifier_item");
        this.setMovieClip(modifierItemClip);
        modifierItemClip.setInteractiveRecursive(1);
        var toggleButton = this.addGameButton("mod_toggle", 1);
        var toggleButtonClip = toggleButton.getMovieClip();
        toggleButton.instance.add(idOffset).writeU8(configuration.id);
        toggleButton.instance.add(keyOffset).writeU8(+configuration.key);
        this.toggleButton = toggleButton;
        toggleButton.setCustomButtonListener(this.buttonPressed, configuration.infoPrefix);
        this.instance.add(toggleButtonOffset).writePointer(toggleButton.instance);
        toggleButtonClip.setText("text_on", StringTable.getString("TID_SETTINGS_ON"));
        toggleButtonClip.setText("text_off", StringTable.getString("TID_SETTINGS_OFF"));
        toggleButtonClip.gotoAndStopFrameIndex(+!configuration.key);
        var modTitleField = modifierItemClip.getTextFieldByName("mod_title");
        var modDescriptionField = modifierItemClip.getTextFieldByName("mod_desc");
        this.instance.add(descriptionFieldOffset).writePointer(modDescriptionField.instance);
        modTitleField.setTextScaleIfNecessary(Localisation.getString(configuration.infoPrefix + "_name"));
        var descText = Localisation.getString(configuration.infoPrefix + "_descEnabled");
        var bsdPlusSuffix = "";
        if (configuration.isBSDPlusOnly) {
            if (!BSDPlusManager.isBSDPlusEnabled) {
                bsdPlusSuffix = " <cFFC040>".concat(Localisation.getString("BSDPlusOnly"), "</c>");
            }
        }
        modDescriptionField.colorTag = true;
        modDescriptionField.setTextScaleIfNecessary(descText + bsdPlusSuffix);
        var iconPlaceholderClip = modifierItemClip.getMovieClipByName("icon_ph");
        iconPlaceholderClip.visibility = false;
        var placeholderHeight = iconPlaceholderClip.height;
        var iconClip = null;
        try {
            if (configuration.iconCallback) {
                iconClip = configuration.iconCallback();
            }
        } catch (e) {
            EDebugger.addMessage(EDebugger.ERROR, "Couldn't load icon for ".concat(this.configuration.configKey, "\n", e.stack));
        }
        if (!iconClip) {
            iconClip = StringTable.getMovieClip("sc/ui.sc", "questionmark_overlay");
        }
        var iconClipHeight = iconClip.height;
        iconClip.scale = placeholderHeight / iconClipHeight;
        var placeholderX;
        var placeholderY;
        iconClip.setPixelSnappedXY(placeholderX, placeholderY);
        modifierItemClip.addChild(iconClip.instance);
    }
    buttonPressed(self, button) {
        var itemId = button.add(idOffset).readU8();
        var item = ModConfigurationPopup.getItemById(itemId);
        if (!item) {
            return;
        }
        if (item.configuration.isBSDPlusOnly) {
            if (!BSDPlusManager.isBSDPlusEnabled) {
                return;
            }
        }
        var currentButtonState = Boolean(button.add(keyOffset).readU8());
        if (item.configuration.behaviour === EBehaviour.CUSTOM_MOD) {
            var payload = item.configuration.payload;
            if (!payload) {
                return;
            }
            if (Config.config[item.configuration.configKey].includes(payload)) {
                Config.config[item.configuration.configKey] = Config.config[item.configuration.configKey].filter(function (e) {
                    return e !== payload;
                });
            } else {
                Config.config[item.configuration.configKey].push(payload);
            }
        }
        if (item.configuration.behaviour === EBehaviour.SWITCH) {
            Config.config[item.configuration.configKey] = !currentButtonState;
            if (item.configuration.key) {
                if (item.configuration.setState) {
                    item.configuration.setState(!item.configuration.key);
                }
            }
        }
        button.add(keyOffset).writeU8(+!currentButtonState);
        item.toggleButton.getMovieClip().gotoAndStopFrameIndex(+currentButtonState);
        if (item.configuration.shouldReloadGame) {
            ModConfigurationPopup.shouldReloadGame = true;
        }
        if (item.configuration.shouldGoToHomeScreen) {
            ModConfigurationPopup.shouldGoToHomeScreen = true;
        }
        if (item.configuration.shouldReopenSettingsPopup) {
            ModConfigurationPopup.shouldReopenSettingsPopup = true;
        }
        if (item.configuration.showShowRestartRequiredDialog) {
            ModConfigurationPopup.showShowRestartRequiredDialog = true;
        }
        if (!item.configuration.callback) {
            return;
        }
        var createdPending = ModConfigurationPopup.pendingCallbacks.find(function (e) {
            return e.item.id === item.configuration.id;
        });
        if (createdPending) {
            ModConfigurationPopup.pendingCallbacks = ModConfigurationPopup.pendingCallbacks.filter(function (e) {
                return e.item.id !== item.configuration.id;
            });
            return;
        }
    }
}
ModConfigurationItem.allocationSize = 264;

var EExperimentalFeature = {};

class ModProperties {
    static isRelease() {
        return ModProperties.environment === "release";
    }
    static isPlus() {
        return ModProperties.environment === "plus";
    }
    static isDev() {
        return ModProperties.environment === "dev";
    }
    static isFeatureAvailableInThisBuild(feature) {
        if (this.AVAILABLE_EXP_FEATURES.includes(feature)) {
            return [this.isRelease(), this.isPlus()].every(function (e) {
                return !e;
            });
        }
    }
}
ModProperties.AVAILABLE_EXP_FEATURES = [EExperimentalFeature.CATEGORIES];
ModProperties.environment = "plus";
ModProperties.version = "69.230-64";
ModProperties.showPatchNotesFor = "69.230-0";
ModProperties.isIntegration = false;

class CustomModNames {
}
CustomModNames.oldRankMod = "OldRankMod";
