class SkinMenuPopup extends ListContainerPopup.ListContainerPopup {
    constructor(character, isForSkinChanger) {
        super({ Title: Localisation.Localisation.getString("SkinsOfSelectedCharacterPopupTitle").replace("{characterName}", StringTable.StringTable.getString(character.getTID())) });
        this.skinButtonMap = new Map();
        this.adjustPopupHeaderButtons("skin_menu");
        this.character = character;
        this.isForSkinChanger = isForSkinChanger;
        this.refreshItems();
    }

    refreshItems() {
        this.container.clearEntries();
        var skinsTable = LogicDataTables.LogicDataTables.getTable(LogicDataTables.LogicDataTables.table.Skins);
        var skinsAmount = skinsTable.getItemCount();
        for (var skinIndex = 0; skinIndex < skinsAmount; skinIndex++) {
            var skin = skinsTable.getItemAt(skinIndex);
            if (!skin) {
                continue;
            }
            if (skin.getTID() == "") {
                continue;
            }
            var skinConf = skin.getConf();
            if (!skinConf) {
                continue;
            }
            var character = skinConf.getCharacter();
            if (!character) {
                continue;
            }
            if (character.getName() !== this.character.getName()) {
                continue;
            }
            var isSelected = false;
            if (this.isForSkinChanger) {
                if (Config.Config.config.SkinOverrides.hasOwnProperty(character.getName())) {
                    if (Config.Config.config.SkinOverrides[character.getName()] === skin.getName()) {
                        isSelected = true;
                    }
                }
            }
            var skinItem = new SkinItem(skin, isSelected);
            var buttonKey = "skin_button_".concat(skinIndex.toString());
            this.skinButtonMap.set(buttonKey, skin);
            skinItem.setCustomButtonListener(this.buttonPressed.bind(this), buttonKey);
            this.container.addEntry(skinItem);
        }
        var naviHeight = this.getNaviHeight();
        this.container.refreshEntryPositions(4, naviHeight, 2, 0, 0, 0, -1);
    }

    buttonPressed(self, button) {
        var buttonName = [...this.skinButtonMap.keys()].find(function (k) {
            var customButton = CustomButton.CustomButton._buttonMap.get(k);
            if (customButton == null) {
                return undefined;
            }
            return customButton.instance.equals(button);
        });
        if (buttonName) {
            var skin = this.skinButtonMap.get(buttonName);
            if (!skin) {
                return;
            }
            var character = skin.getConf().getCharacter();
            if (!this.isForSkinChanger) {
                return;
            }
            GUI.GUI.showPopup(new SelectedSkinPreviewPopup(this, skin), true, true, false);
        }
    }
}

class SkinSelector {
    static isAvailable() {
        return true;
    }

    static patch() {
        if (!SkinSelector.isAvailable()) {
            return false;
        }
        LogicAreaEffectClient.LogicAreaEffectClient.patch();
        LogicItemClient.LogicItemClient.patch();
        LogicProjectileClient.LogicProjectileClient.patch();
        Character3D.Character3D.patch();
        LogicGameObjectManagerClient.LogicGameObjectManagerClient.patch();
        PlayerEntry.PlayerEntry.patch();
    }

    static isInUse() {
        if (!SkinSelector.isAvailable()) {
            return false;
        }
        return Object.keys(Config.Config.config.SkinOverrides).length > 0;
    }
}

SkinSelector.skinDataMap = {};

var SkinSelectorPopup_ctor = Libg.Libg.offset(13427412, 0);

class SkinSelectorPopup {
    static patch() {
        return;
    }

    static buttonPressed(self, button) {
        if (!SkinSelector.SkinSelector.isAvailable()) {
            return GUI.GUI.showFloaterTextAtDefaultPosition(Localisation.Localisation.getString("SkinChangerWIP"));
        }
        return;
    }
}

SkinSelectorPopup.skinSelectorButtonX = 460;
SkinSelectorPopup.skinSelectorButtonY = 42;

class SkinPreview {
    static show(gatchaType) {
        if (gatchaType === undefined) {
            gatchaType = HomeMode.HomeMode.gatchaType.Skin;
        }
        GUI.GUI.showPopup(new BrawlerMenu.BrawlerMenuPopup(gatchaType, true), true, true, false);
    }
}

var movieClipOffset = LogicMemory.LogicMemory.offset(416);

class SelectedSkinPreviewPopup extends PreviewBrawlerOrSkinRewardPopup.PreviewBrawlerOrSkinRewardPopup {
    constructor(skinMenuPopup, skin) {
        super(skin);
        this.isSkinAlreadySelected = false;
        this.skin = skin;
        this.skinMenuPopup = skinMenuPopup;
        GUIContainer.GUIContainer.getTextField(this.instance.add(movieClipOffset).readPointer(), "TID_SHOP_SPECIAL_OFFER", Localisation.Localisation.getString("SelectedSkinPreviewPopupTitle"));
        var popupClip = this.getMovieClip();
        popupClip.getMovieClipByName("purchase_info").visibility = false;
        popupClip.getMovieClipByName("unlock_info").visibility = false;
        var selectSkinButton = new GameButton.GameButton();
        var selectSkinButtonClip = StringTable.StringTable.getMovieClip("sc/ui.sc", "country_item");
        selectSkinButton.setMovieClip(selectSkinButtonClip, 1);
        selectSkinButton.setCustomButtonListener(this.buttonPressed.bind(this), "color_picker_preview_button");
        var currentSkinName = skin.getName();
        var currentCharacterName = skin.getConf().getCharacter().getName();
        var isSkinSelected = Config.Config.config.SkinOverrides[currentCharacterName] === currentSkinName;
        this.isSkinAlreadySelected = isSkinSelected;
        var previewPopupButtonText = Localisation.Localisation.getString(isSkinSelected ? "SkinChangerUnselectButton" : "SkinChangerSelectButton");
        var textField = selectSkinButtonClip.getTextFieldByName("Text");
        textField.colorTag = true;
        textField.setTextScaleIfNecessary(previewPopupButtonText);
        selectSkinButtonClip.gotoAndStopFrameIndex(1);
        selectSkinButton.setXY(285, 220);
        popupClip.addChild(selectSkinButton);
    }

    buttonPressed(self, button) {
        var skinTid = StringTable.StringTable.getString(this.skin.getTID());
        var skins = [this.skin, this.skin.getPetSkin(), this.skin.getPetSkin2()];
        for (var skin of skins) {
            if (!skin) {
                continue;
            }
            var skinConf = skin.getConf();
            var skinCharacter = skinConf.getCharacter();
            var characterName = skinCharacter.getName();
            if (this.isSkinAlreadySelected) {
                if (Config.Config.config.SkinOverrides[characterName]) {
                    delete Config.Config.config.SkinOverrides[characterName];
                }
            } else {
                Config.Config.config.SkinOverrides[characterName] = skin.getName();
            }
        }
        if (this.isSkinAlreadySelected) {
            var character = this.skin.getCharacter();
            if (character) {
                this.skin = LogicDailyData.LogicDailyData.getSkin(HomeMode.HomeMode.getPlayerData(), LogicHomeMode.LogicHomeMode.getPlayerAvatar(), character);
            }
        }
        GUI.GUI.showFloaterTextAtDefaultPosition(Localisation.Localisation.getString(this.isSkinAlreadySelected ? "SkinChangerSkinUnselected" : "SkinChangerSkinSelected").replace("{skinName}", skinTid));
        var heroPopup = HeroScreenPopup.HeroScreenPopup.getInstance();
        if (heroPopup) {
            heroPopup.skinChanged(this.skin);
        }
        HomePage.HomePage.reload();
        FileManager.FileManager.updateConfigFile();
        this.backButtonPressed(NULL, NULL);
    }
}

class SkinItem extends GameButton.GameButton {
    constructor(skin, isSelected) {
        if (isSelected === undefined) {
            isSelected = false;
        }
        super();
        this.instance.writePointer(ListContainerPopup.countryPopupListItemVtableAddr);
        var movieClip = StringTable.StringTable.getMovieClip("sc/ui.sc", "player_name_color_entry");
        this.setMovieClip(movieClip.instance, 1);
        var rarityColor = SkinItem.getRarityColor(skin.getRarity());
        var skinName = StringTable.StringTable.getString(skin.getTID());
        var lbTxt = movieClip.getTextFieldByName("label_txt");
        lbTxt.colorTag = true;
        lbTxt.setTextScaleIfNecessary(rarityColor + skinName.replace("\n", " ") + "</c>");
        movieClip.gotoAndStopFrameIndex(+(!isSelected));
    }

    static getRarityColor(rarity) {
        if (SkinItem.RARITY_COLOR_DEFINITIONS[rarity] == null) {
            return SkinItem.RARITY_COLOR_DEFINITIONS.DEFAULT;
        }
        return SkinItem.RARITY_COLOR_DEFINITIONS[rarity];
    }
}

SkinItem.RARITY_COLOR_DEFINITIONS = { RARE: "<c7aff6b>", SUPER_RARE: "<c8ccaff>", EPIC: "<ce297ff>", MYTHIC: "<cff9a9a>", LEGENDARY: "<cfdf01f>", HYPERCHARGE: "<cf800ff>", COLLECTORS: "<cf56c42>", DEFAULT: "<cffffff>" };

var SkinHelper_isSkinDisplayed = Libg.Libg.offset(13412676, 0);
var SkinHelper_isSkinDisplayed_call = Libg.Libg.offset(11889968, 0);

class SkinHelper {
    static patch() {
        return;
    }
}
