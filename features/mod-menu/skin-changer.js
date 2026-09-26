//============================================================================//
// MOD FEATURE: Skin Changer
// In-game name: "Skin Changer"  (TID: SkinChanger)
// Menu: Mod Menu — brawler skin screen tab(s) (menu/mod-menu.js#8203)
// Skin override system (Config.SkinOverrides): skin menu, selector popup, skin preview and selected-skin preview popup.
//============================================================================//

// --------------------- MODULE 8394 — SkinMenu ---------------------


// ============================================================ //
// webpack module 8394  —  SkinMenu
// exports: SkinMenuPopup
// deps: 4009 (Config), 4934 (GUI), 6139 (LogicDataTables), 6236 (SelectedSkinPreviewPopup), 6851 (CustomButton), 7265 (Localisation), 7435 (SkinItem), 8261 (ListContainerPopup), 8569 (HomeScreen), 9250 (StringTable)
// ============================================================ //

__webpack_modules__[8394] = function SkinMenu_factory(__unused_webpack_module, exports, __webpack_require__) {
    var ListContainerPopup, Localisation, StringTable, LogicDataTables, SkinItem, CustomButton, HomeScreen, Config, GUI, SelectedSkinPreviewPopup, SkinMenuPopup, <class_fields_init>, SkinMenuPopup;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.SkinMenuPopup = undefined;
        ListContainerPopup = __webpack_require__(8261);
        Localisation = __webpack_require__(7265);
        StringTable = __webpack_require__(9250);
        LogicDataTables = __webpack_require__(6139);
        SkinItem = __webpack_require__(7435);
        CustomButton = __webpack_require__(6851);
        HomeScreen = __webpack_require__(8569);
        Config = __webpack_require__(4009);
        GUI = __webpack_require__(4934);
        SelectedSkinPreviewPopup = __webpack_require__(6236);
        static refreshItems () {
    var skinsTable, skinsAmount, skinIndex, skin, skinConf, character, isSelected, skinItem, buttonKey, naviHeight;
        ((this).container).clearEntries();
        skinsTable = ((LogicDataTables).LogicDataTables).getTable((((LogicDataTables).LogicDataTables).table).Skins);
        skinsAmount = (skinsTable).getItemCount();
        skinIndex = 0;
        while ((skinIndex < skinsAmount)) {
            skin = (skinsTable).getItemAt(skinIndex);
            if (!(!skin)) {
                if (!((skin).getTID() == "")) {
                    skinConf = (skin).getConf();
                    if (!(!skinConf)) {
                        character = (skinConf).getCharacter();
                        if (!(!character)) {
                            if (!((character).getName() !== ((this).character).getName())) {
                                isSelected = false;
                                if ((this).isForSkinChanger) {
                                    if (((((Config).Config).config).SkinOverrides).hasOwnProperty((character).getName())) {
                                        if (((((Config).Config).config).SkinOverrides[(character).getName()] === (skin).getName())) {
                                            isSelected = true;
                                        } /* if 0xdde7a */
                                    } /* if 0xdde7a */
                                } /* if 0xdde7a */
                                skinItem = new (SkinItem).SkinItem(skin, isSelected);
                                buttonKey = ("skin_button_").concat((skinIndex).toString());
                                (skinItem).setCustomButtonListener(((this).buttonPressed).bind(this), buttonKey);
                                ((this).container).addEntry(skinItem);
                            } /* if 0xddef4 */
                        } /* if 0xdde10 */
                    } /* if 0xddef4 */
                } /* if 0xddef4 */
            } /* if 0xddef4 */
            skinIndex = ((skinIndex) + 1);
            (skinIndex++);
        } /* while 0xddeff */
        naviHeight = (this).getNaviHeight();
        ((this).container).refreshEntryPositions(4, naviHeight, 2, 0, 0, 0, -1);
        return;
};
        static buttonPressed (self, button) {
    var buttonName, skin, character;
        /*append*/ ((this).skinButtonMap).keys();
        buttonName = (0).find(function (k) {
        if ((((((CustomButton).CustomButton)._buttonMap)["get"](k)) == null)) {
            return undefined;
        } /* if 0xde07d */
        return ((<underflow>).instance).equals(button);
});
        if (buttonName) {
        } /* if 0xddfd5 */
        /* jump -> 0xddfd6 */
        skin = null;
        if ((!skin)) {
            return;
        } /* if 0xddfde */
        character = ((skin).getConf()).getCharacter();
        if ((!(this).isForSkinChanger)) {
            return;
        } /* if 0xde013 */
        return;
};
        <class_fields_init> = undefined;
        SkinMenuPopup;
        class SkinMenuPopup extends <class_fields_init> = (ListContainerPopup).ListContainerPopup {
            constructor (character, isForSkinChanger) {
    var this.active_func, new.target;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        this = super({ Title: (((Localisation).Localisation).getString("SkinsOfSelectedCharacterPopupTitle")).replace("{characterName}", ((StringTable).StringTable).getString((character).getTID())) });
        if (<class_fields_init>) {
        } /* if 0xddc84 */
        this.skinButtonMap = new Map();
        (this).adjustPopupHeaderButtons("skin_menu");
        this.character = character;
        this.isForSkinChanger = isForSkinChanger;
        (this).refreshItems();
        return this;
}
        }
        SkinMenuPopup = GUI = SkinMenuPopup;
        exports.SkinMenuPopup = SkinMenuPopup;
        return;
};

// --------------------- MODULE 7669 — SkinSelector ---------------------


// ============================================================ //
// webpack module 7669  —  SkinSelector
// exports: SkinSelector
// deps: 569 (SinglePlayerMatchRequestMessage), 910 (PlayerEntry), 4009 (Config), 5460 (LogicProjectileClient), 5984 (LogicItemClient), 6859 (LogicAreaEffectClient), 7518 (Character3D), 8593 (LogicGameObjectManagerClient)
// ============================================================ //

__webpack_modules__[7669] = function SkinSelector_factory(__unused_webpack_module, exports, __webpack_require__) {
    var LogicGameObjectManagerClient, PlayerEntry, Config, LogicAreaEffectClient, LogicItemClient, LogicProjectileClient, Character3D, SinglePlayerMatchRequestMessage, SkinSelector, <class_fields_init>, SkinSelector;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.SkinSelector = undefined;
        LogicGameObjectManagerClient = __webpack_require__(8593);
        PlayerEntry = __webpack_require__(910);
        Config = __webpack_require__(4009);
        LogicAreaEffectClient = __webpack_require__(6859);
        LogicItemClient = __webpack_require__(5984);
        LogicProjectileClient = __webpack_require__(5460);
        Character3D = __webpack_require__(7518);
        SinglePlayerMatchRequestMessage = __webpack_require__(569);
        <class_fields_init> = undefined;
        SkinSelector;
        class SkinSelector {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0xa6f41 (open) */
}
            isAvailable () {
        return true;
}
            patch () {
        if ((!(SkinSelector).isAvailable())) {
            return false;
        } /* if 0xa6e48 */
        ((LogicAreaEffectClient).LogicAreaEffectClient).patch();
        ((LogicItemClient).LogicItemClient).patch();
        ((LogicProjectileClient).LogicProjectileClient).patch();
        ((Character3D).Character3D).patch();
        ((LogicGameObjectManagerClient).LogicGameObjectManagerClient).patch();
        ((PlayerEntry).PlayerEntry).patch();
        return;
}
            isInUse () {
        if ((!(SkinSelector).isAvailable())) {
            return false;
        } /* if 0xa6ef3 */
        return ((Object).keys((((Config).Config).config).SkinOverrides).length > 0);
}
        }
        SkinSelector = SkinSelector = SkinSelector;
        exports.SkinSelector = SkinSelector;
        SkinSelector.skinDataMap = {};
        return;
};

// --------------------- MODULE 710 — SkinSelectorPopup ---------------------


// ============================================================ //
// webpack module 710  —  SkinSelectorPopup
// exports: SkinSelectorPopup
// deps: 3210 (GUIContainer), 3380 (Logcat), 4009 (Config), 4934 (GUI), 5039 (GameButton), 7171 (LogicCharacterData), 7265 (Localisation), 7669 (SkinSelector), 8394 (SkinMenu), 8632 (Stage), 9250 (StringTable), 9878 (Libg)
// ============================================================ //

__webpack_modules__[710] = function SkinSelectorPopup_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, StringTable, GameButton, LogicCharacterData, Config, Stage, Localisation, GUIContainer, GUI, SkinMenu, SkinSelector, Logcat, SkinSelectorPopup_ctor, SkinSelectorPopup, <class_fields_init>, SkinSelectorPopup;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.SkinSelectorPopup = undefined;
        Libg = __webpack_require__(9878);
        StringTable = __webpack_require__(9250);
        GameButton = __webpack_require__(5039);
        LogicCharacterData = __webpack_require__(7171);
        Config = __webpack_require__(4009);
        Stage = __webpack_require__(8632);
        Localisation = __webpack_require__(7265);
        GUIContainer = __webpack_require__(3210);
        GUI = __webpack_require__(4934);
        SkinMenu = __webpack_require__(8394);
        SkinSelector = __webpack_require__(7669);
        Logcat = __webpack_require__(3380);
        SkinSelectorPopup_ctor = ((Libg).Libg).offset(13427412, 0);
        <class_fields_init> = undefined;
        SkinSelectorPopup;
        class SkinSelectorPopup {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x45b0d (open) */
}
            patch () {
        return;
}
            buttonPressed (self, button) {
        if ((!((SkinSelector).SkinSelector).isAvailable())) {
            return ((GUI).GUI).showFloaterTextAtDefaultPosition(((Localisation).Localisation).getString("SkinChangerWIP"));
        } /* if 0x45ab9 */
        return;
}
        }
        SkinSelectorPopup = GUI = SkinSelectorPopup;
        exports.SkinSelectorPopup = SkinSelectorPopup;
        SkinSelectorPopup.skinSelectorButtonX = 460;
        SkinSelectorPopup.skinSelectorButtonY = 42;
        return;
};

// --------------------- MODULE 294 — SkinPreview ---------------------


// ============================================================ //
// webpack module 294  —  SkinPreview
// exports: SkinPreview
// deps: 819 (BrawlerMenu), 1018 (HomeMode), 4934 (GUI)
// ============================================================ //

__webpack_modules__[294] = function SkinPreview_factory(__unused_webpack_module, exports, __webpack_require__) {
    var GUI, BrawlerMenu, HomeMode, SkinPreview, <class_fields_init>, SkinPreview;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.SkinPreview = undefined;
        GUI = __webpack_require__(4934);
        BrawlerMenu = __webpack_require__(819);
        HomeMode = __webpack_require__(1018);
        <class_fields_init> = undefined;
        SkinPreview;
        class SkinPreview {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0xa6cb3 (open) */
}
            show () {
        return;
}
        }
        SkinPreview = SkinPreview = SkinPreview;
        exports.SkinPreview = SkinPreview;
        return;
};

// --------------------- MODULE 6236 — SelectedSkinPreviewPopup ---------------------


// ============================================================ //
// webpack module 6236  —  SelectedSkinPreviewPopup
// exports: SelectedSkinPreviewPopup
// deps: 699 (FileManager), 1018 (HomeMode), 1058 (PreviewBrawlerOrSkinRewardPopup), 1588 (LogicMemory), 2757 (HomePage), 3098 (HeroScreenPopup), 3210 (GUIContainer), 4009 (Config), 4801 (LogicHomeMode), 4934 (GUI), 5039 (GameButton), 7089 (LogicDailyData), 7265 (Localisation), 9250 (StringTable)
// ============================================================ //

__webpack_modules__[6236] = function SelectedSkinPreviewPopup_factory(__unused_webpack_module, exports, __webpack_require__) {
    var PreviewBrawlerOrSkinRewardPopup, StringTable, GameButton, LogicMemory, Localisation, Config, GUIContainer, GUI, HomePage, FileManager, HeroScreenPopup, LogicDailyData, HomeMode, LogicHomeMode, movieClipOffset, SelectedSkinPreviewPopup, <class_fields_init>, SelectedSkinPreviewPopup;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.SelectedSkinPreviewPopup = undefined;
        PreviewBrawlerOrSkinRewardPopup = __webpack_require__(1058);
        StringTable = __webpack_require__(9250);
        GameButton = __webpack_require__(5039);
        LogicMemory = __webpack_require__(1588);
        Localisation = __webpack_require__(7265);
        Config = __webpack_require__(4009);
        GUIContainer = __webpack_require__(3210);
        GUI = __webpack_require__(4934);
        HomePage = __webpack_require__(2757);
        FileManager = __webpack_require__(699);
        HeroScreenPopup = __webpack_require__(3098);
        LogicDailyData = __webpack_require__(7089);
        HomeMode = __webpack_require__(1018);
        LogicHomeMode = __webpack_require__(4801);
        movieClipOffset = ((LogicMemory).LogicMemory).offset(416);
        static buttonPressed (self, button) {
    var skinTid, skins, skin, skinConf, skinCharacter, characterName, character, heroPopup;
        skinTid = ((StringTable).StringTable).getString(((this).skin).getTID());
        skins = [(this).skin, ((this).skin).getPetSkin(), ((this).skin).getPetSkin2()];
        /* jump -> 0xce78a */
        skin = /*iter*/ skins;
        if (!(!skin)) {
            skinConf = (skin).getConf();
            skinCharacter = (skinConf).getCharacter();
            characterName = (skinCharacter).getName();
            if ((this).isSkinAlreadySelected) {
                if ((((Config).Config).config).SkinOverrides[characterName]) {
                    /* delete  */
                } /* if 0xce789 */
            } /* if 0xce767 */
            /* jump -> 0xce789 */
            (((Config).Config).config).SkinOverrides[characterName] = (skin).getName();
            } while (!(((Config).Config).config).SkinOverrides);
        } /* if 0xce78c */
        skinConf = skinCharacter = characterName = skins;
        if ((this).isSkinAlreadySelected) {
            character = ((this).skin).getCharacter();
            if (character) {
                this.skin = ((LogicDailyData).LogicDailyData).getSkin(((HomeMode).HomeMode).getPlayerData(), ((LogicHomeMode).LogicHomeMode).getPlayerAvatar(), character);
            } /* if 0xce7ee */
        } /* if 0xce7ee */
        if ((this).isSkinAlreadySelected) {
        } /* if 0xce818 */
        /* jump -> 0xce81d */
        (Localisation).Localisation(("SkinChangerSkinUnselected"("SkinChangerSkinSelected")).replace("{skinName}", skinTid));
        heroPopup = ((HeroScreenPopup).HeroScreenPopup).getInstance();
        if (heroPopup) {
            (heroPopup).skinChanged((this).skin);
        } /* if 0xce85e */
        ((HomePage).HomePage).reload();
        ((FileManager).FileManager).updateConfigFile();
        (this).backButtonPressed(NULL, NULL);
        return;
};
        <class_fields_init> = undefined;
        SelectedSkinPreviewPopup;
        class SelectedSkinPreviewPopup extends <class_fields_init> = (PreviewBrawlerOrSkinRewardPopup).PreviewBrawlerOrSkinRewardPopup {
            constructor (skinMenuPopup, skin) {
    var popupClip, selectSkinButton, selectSkinButtonClip, currentSkinName, currentCharacterName, isSkinSelected, previewPopupButtonText, textField, this.active_func, new.target;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        this = super(skin);
        if (<class_fields_init>) {
        } /* if 0xce443 */
        this.isSkinAlreadySelected = false;
        this.skin = skin;
        this.skinMenuPopup = skinMenuPopup;
        ((GUIContainer).GUIContainer).getTextField((((this).instance).add(movieClipOffset)).readPointer(), "TID_SHOP_SPECIAL_OFFER", ((Localisation).Localisation).getString("SelectedSkinPreviewPopupTitle"));
        popupClip = (this).getMovieClip();
        (popupClip).getMovieClipByName("purchase_info").visibility = false;
        (popupClip).getMovieClipByName("unlock_info").visibility = false;
        selectSkinButton = new (GameButton).GameButton();
        selectSkinButtonClip = ((StringTable).StringTable).getMovieClip("sc/ui.sc", "country_item");
        (selectSkinButton).setMovieClip(selectSkinButtonClip, 1);
        (selectSkinButton).setCustomButtonListener(((this).buttonPressed).bind(this), "color_picker_preview_button");
        currentSkinName = (skin).getName();
        currentCharacterName = (((skin).getConf()).getCharacter()).getName();
        isSkinSelected = ((((Config).Config).config).SkinOverrides[currentCharacterName] === currentSkinName);
        this.isSkinAlreadySelected = isSkinSelected;
        if (isSkinSelected) {
        } /* if 0xce59f */
        /* jump -> 0xce5a4 */
        previewPopupButtonText = "SkinChangerUnselectButton"("SkinChangerSelectButton");
        textField = (selectSkinButtonClip).getTextFieldByName("Text");
        textField.colorTag = true;
        (textField).setTextScaleIfNecessary(previewPopupButtonText);
        (selectSkinButtonClip).gotoAndStopFrameIndex(1);
        (selectSkinButton).setXY(285, 220);
        (popupClip).addChild(selectSkinButton);
        return this;
}
        }
        SelectedSkinPreviewPopup = HomePage = SelectedSkinPreviewPopup;
        exports.SelectedSkinPreviewPopup = SelectedSkinPreviewPopup;
        return;
};

// --------------------- MODULE 7435 — SkinItem ---------------------


// ============================================================ //
// webpack module 7435  —  SkinItem
// exports: SkinItem
// deps: 5039 (GameButton), 8261 (ListContainerPopup), 9250 (StringTable)
// ============================================================ //

__webpack_modules__[7435] = function SkinItem_factory(__unused_webpack_module, exports, __webpack_require__) {
    var GameButton, StringTable, ListContainerPopup, SkinItem, <class_fields_init>, SkinItem;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.SkinItem = undefined;
        GameButton = __webpack_require__(5039);
        StringTable = __webpack_require__(9250);
        ListContainerPopup = __webpack_require__(8261);
        <class_fields_init> = undefined;
        SkinItem;
        class SkinItem extends <class_fields_init> = (GameButton).GameButton {
            constructor (skin) {
    var isSelected, skin, isSelected, movieClip, rarityColor, skinName, lbTxt, this.active_func, new.target;
        lbTxt = /*special:2*/;
        this.active_func = /*special:3*/;
        isSelected = skin;
        if (((isSelected) === undefined)) {
            skin = isSelected = false;
        } /* if 0xb5721 */
        new.target = super();
        if (<class_fields_init>) {
        } /* if 0xb5747 */
        ((new.target).instance).writePointer((ListContainerPopup).countryPopupListItemVtableAddr);
        isSelected = ((StringTable).StringTable).getMovieClip("sc/ui.sc", "player_name_color_entry");
        (new.target).setMovieClip((isSelected).instance, 1);
        movieClip = (SkinItem).getRarityColor((skin).getRarity());
        rarityColor = ((StringTable).StringTable).getString((skin).getTID());
        skinName = (isSelected).getTextFieldByName("label_txt");
        skinName.colorTag = true;
        (skinName).setTextScaleIfNecessary(((movieClip + (rarityColor).replace("\n", " ")) + "</c>"));
        (isSelected).gotoAndStopFrameIndex((+(!isSelected)));
        return new.target;
}
            getRarityColor (rarity) {
        if ((((SkinItem).RARITY_COLOR_DEFINITIONS[rarity]) == null)) {
            return ((SkinItem).RARITY_COLOR_DEFINITIONS).DEFAULT;
        } /* if 0xb585e (open) */
}
        }
        SkinItem = SkinItem = SkinItem;
        exports.SkinItem = SkinItem;
        SkinItem.RARITY_COLOR_DEFINITIONS = { RARE: "<c7aff6b>", SUPER_RARE: "<c8ccaff>", EPIC: "<ce297ff>", MYTHIC: "<cff9a9a>", LEGENDARY: "<cfdf01f>", HYPERCHARGE: "<cf800ff>", COLLECTORS: "<cf56c42>", DEFAULT: "<cffffff>" };
        return;
};

// --------------------- MODULE 9902 — SkinHelper ---------------------


// ============================================================ //
// webpack module 9902  —  SkinHelper
// exports: SkinHelper
// deps: 3555 (LogicSkinData), 4009 (Config), 6139 (LogicDataTables), 7669 (SkinSelector), 9878 (Libg)
// ============================================================ //

__webpack_modules__[9902] = function SkinHelper_factory(__unused_webpack_module, exports, __webpack_require__) {
    var SkinSelector, Config, LogicDataTables, Libg, LogicSkinData, SkinHelper_isSkinDisplayed, SkinHelper_isSkinDisplayed_call, SkinHelper, <class_fields_init>, SkinHelper;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.SkinHelper = undefined;
        SkinSelector = __webpack_require__(7669);
        Config = __webpack_require__(4009);
        LogicDataTables = __webpack_require__(6139);
        Libg = __webpack_require__(9878);
        LogicSkinData = __webpack_require__(3555);
        SkinHelper_isSkinDisplayed = ((Libg).Libg).offset(13412676, 0);
        SkinHelper_isSkinDisplayed_call = ((Libg).Libg).offset(11889968, 0);
        <class_fields_init> = undefined;
        SkinHelper;
        class SkinHelper {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x5fa2d (open) */
}
            patch () {
        return;
}
        }
        SkinHelper = <class_fields_init> = SkinHelper;
        exports.SkinHelper = SkinHelper;
        return;
};

