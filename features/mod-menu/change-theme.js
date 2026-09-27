class ThemeSelectorPopup extends ListContainerPopup.ListContainerPopup {
    constructor(isBackgroundSelected, backgroundID, customBackground) {
        if (isBackgroundSelected === undefined) {
            isBackgroundSelected = false;
        }
        if (backgroundID === undefined) {
            backgroundID = 0;
        }
        if (customBackground === undefined) {
            customBackground = false;
        }
        var themesTable = LogicDataTables.LogicDataTables.getTable(LogicDataTables.LogicDataTables.table.Themes);
        var themeFileName = "";
        var themeExportName = "";
        if (isBackgroundSelected) {
            var theme = themesTable.getItemAt(backgroundID);
            if (theme) {
                themeFileName = theme.getFileName();
                themeExportName = theme.getExportName();
            }
        }
        super({
            Title: Localisation.Localisation.getString(isBackgroundSelected ? "ThemesPopupSelectMusicTitle" : "ThemesPopupSelectBackgroundTitle"),
            PopupBackgroundFileName: themeFileName,
            PopupBackgroundExportName: themeExportName
        });
        var clip = this.backgroundClip;
        if (clip) {
            if (clip.exportName != null) {
                if (clip.exportName.startsWith("bgr_")) {
                    clip = StrangerthingsFixer.fix(clip);
                    if (Config.Config.config.LegacyBackgrounds) {
                        LegacyBackgroundManager.apply(clip, true);
                    }
                }
            }
        }
        this.isBackgroundSelected = isBackgroundSelected;
        this.backgroundID = backgroundID;
        this.customBackground = customBackground;
        this.musicId = 0;
        this.themeItemsCount = 0;
        this.bgFileName = "";
        this.bgExportName = "";
        this.themesTable = themesTable;
        if (this.isBackgroundSelected) {
            this.currentTheme = this.themesTable.getItemAt(backgroundID);
            this.bgFileName = this.currentTheme.getFileName();
            this.bgExportName = this.currentTheme.getExportName();
        }
        if (Config.Config.config.ThemeMusicID !== -1) {
            this.musicId = Config.Config.config.ThemeMusicID;
        }
        this.adjustPopupHeaderButtons("theme_selector");
        this.refreshItems();
    }

    refreshItems() {
        this.container.clearEntries();
        var themeItemsCount = this.themesTable.getItemCount();
        var customBgActive;
        if (!this.isBackgroundSelected) {
            customBgActive = Config.Config.config.CustomThemeName !== "";
        }
        var currentIndex = ThemeSelectorManager.themeID;
        var currentThemeItem = this.themesTable.getItemAt(currentIndex);
        if (!this.isBackgroundSelected) {
            var clipboardItem = new ClipboardThemeItem(Localisation.Localisation.getString("CustomBgFromClipboard"), customBgActive);
            clipboardItem.setCustomButtonListener(this.buttonPressed.bind(this));
            this.container.addEntry(clipboardItem);
        }
        if (this.isBackgroundSelected) {
            var noMusicItem = new NoMusicItem.NoMusicItem(LogicThemeData.NO_MUSIC_THEME_ID, Localisation.Localisation.getString("ThemeNoMusic"), Config.Config.config.ThemeMusicID === LogicThemeData.NO_MUSIC_THEME_ID);
            noMusicItem.setCustomButtonListener(this.buttonPressed.bind(this));
            this.container.addEntry(noMusicItem);
        }
        for (var themeItemIndex = 0; themeItemIndex < themeItemsCount; themeItemIndex++) {
            var theme = this.themesTable.getItemAt(themeItemIndex);
            if (!theme) {
                continue;
            }
            if (!theme.isDisabled()) {
                var themeItem = new ThemeItem(theme, currentThemeItem);
                themeItem.setCustomButtonListener(this.buttonPressed.bind(this));
                this.container.addEntry(themeItem);
            }
        }
        this.refresh();
        if (this.isBackgroundSelected) {
            var button = this.container.getEntry((object) => {
                if (!(object instanceof ThemeItem)) {
                    return false;
                }
                return object.themeId === this.backgroundID;
            });
            if (!button) {
                return false;
            }
            button.setHighlight(1, -1, 1, 0);
            this.container.scrollTo(button.y, 0);
        }
    }

    buttonPressed(self, button) {
        var themeButton = new GameButton.GameButton(button);
        var themeId = themeButton.id;
        if (themeId === CLIPBOARD_THEME_ITEM_ID) {
            if (!CustomBackground.CustomBackground.stageFromClipboard()) {
                return;
            }
            return;
        }
        if (this.isBackgroundSelected) {
            this.musicId = themeId;
            if (this.customBackground) {
                this.applyCustomBackgroundWithMusic(this.musicId);
                return;
            }
            GUI.GUI.showPopup(new ThemePreviewPopup(this.backgroundID, this.musicId), true, true, false);
            return;
        }
        GUI.GUI.showPopup(new ThemePreviewPopup(themeId, this.musicId), true, true, false);
    }

    applyCustomBackgroundWithMusic(musicId) {
        var musicTheme = null;
        if (musicId >= 0) {
            musicTheme = this.themesTable.getItemAt(musicId);
        }
        CustomBackground.CustomBackground.applyPending();
        Config.Config.config.ThemeMusicID = musicId;
        Config.Config.config.RandomThemeMask[2] = false;
        Config.Config.config.RandomThemeMask[1] = false;
        Config.Config.config.RandomThemeMask[0] = false;
        FileManager.FileManager.updateConfigFile();
        if (musicTheme) {
            SoundManager.SoundManager.playMusic(musicTheme.getThemeMusic());
        } else {
            SoundManager.SoundManager.stopMusic();
        }
    }
}

class ThemePreviewPopup extends ListContainerPopup.ListContainerPopup {
    constructor(themeID, musicID) {
        var selectedTheme = LogicDataTables.LogicDataTables.getDataById(LogicDataTables.LogicDataTables.table.Themes, themeID);
        super({ Title: "", PopupBackgroundFileName: selectedTheme.getFileName(), PopupBackgroundExportName: selectedTheme.getExportName() });
        var clip = this.backgroundClip;
        if (clip) {
            if (clip.exportName != null) {
                if (clip.exportName.startsWith("bgr_")) {
                    clip = StrangerthingsFixer.fix(clip);
                    if (Config.Config.config.LegacyBackgrounds) {
                        LegacyBackgroundManager.apply(clip, true);
                    }
                }
            }
        }
        this.selectedTheme = selectedTheme;
        this.backgroundID = themeID;
        this.musicId = musicID;
        this.adjustPopupHeaderButtons("theme_preview");
        this.refreshItems();
    }

    refreshItems() {
        var confirmationButtonClip = StringTable.StringTable.getMovieClip("sc/ui.sc", "player_name_color_entry");
        this.confirmationButton = new GameButton.GameButton();
        this.confirmationButton.setMovieClip(confirmationButtonClip, 1);
        this.confirmationButton.setCustomButtonListener(this.buttonPressed.bind(this), "theme_preview_confirm");
        var lbTxt = confirmationButtonClip.getTextFieldByName("label_txt");
        lbTxt.fontOutline = true;
        lbTxt.setTextScaleIfNecessary(Localisation.Localisation.getString("ChangeThemePromptConfirmButton"));
        confirmationButtonClip.gotoAndStopFrameIndex(1);
        var matrixY = Stage.Stage.getMatrixY();
        this.confirmationButton.setXY(0, matrixY - (matrixY / 8));
    }

    buttonPressed() {
        this.applyTheme(this.selectedTheme);
    }

    applyTheme(themeData) {
        Config.Config.config.ThemeBackgroundID = this.backgroundID;
        Config.Config.config.ThemeMusicID = this.musicId;
        Config.Config.config.RandomThemeMask[2] = false;
        Config.Config.config.RandomThemeMask[1] = false;
        Config.Config.config.RandomThemeMask[0] = false;
        FileManager.FileManager.updateConfigFile();
        ThemeSelectorManager.themeID = this.backgroundID;
        HomeScreen.HomeScreen.updateTheme(themeData);
    }
}

class ThemeSelectorManager {
    static init() {
        var themesTable = LogicDataTables.LogicDataTables.getTable(LogicDataTables.LogicDataTables.table.Themes);
        var themeItemCount = themesTable.getItemCount();
        ThemeSelectorManager.EXCEPTIONS.length = 0;
        for (var i = 0; i < themeItemCount; i++) {
            var theme = themesTable.getItemAt(i);
            if (!theme) {
                continue;
            }
            if (theme.isDisabled()) {
                ThemeSelectorManager.EXCEPTIONS.push(i);
            }
        }
    }

    static hideCustomBackground() {
        return;
    }

    static isThemeValid(theme) {
        if (theme.isDisabled()) {
            return false;
        }
        var themeClip = StringTable.StringTable.getMovieClip_safe(theme.getFileName(), theme.getExportName());
        if (!themeClip) {
            return false;
        }
        return true;
    }

    static cycleTheme(direction) {
        var themesTable = LogicDataTables.LogicDataTables.getTable(LogicDataTables.LogicDataTables.table.Themes);
        var count = themesTable.getItemCount();
        if (count < 1) {
            return;
        }
        var idx = ThemeSelectorManager.themeID;
        for (var i = 0; i < count; i++) {
            idx = (idx + direction + count) % count;
            var theme = themesTable.getItemAt(idx);
            if (theme) {
                if (!theme.isDisabled()) {
                    ThemeSelectorManager.themeID = idx;
                    Config.Config.config.ThemeBackgroundID = idx;
                    Config.Config.config.ThemeMusicID = idx;
                    Config.Config.config.RandomThemeMask[2] = false;
                    Config.Config.config.RandomThemeMask[1] = false;
                    Config.Config.config.RandomThemeMask[0] = false;
                    FileManager.FileManager.updateConfigFile();
                    return;
                }
            }
        }
    }

    static setRandomTheme() {
        var themesTable = LogicDataTables.LogicDataTables.getTable(LogicDataTables.LogicDataTables.table.Themes);
        var themeItemCount = themesTable.getItemCount();
        if (!Config.Config.config.RandomThemeMask[1]) {
            var sharedRandomThemeResult = LogicRandom.LogicRandom.getRandomInRangeExcept(0, themeItemCount - 1, ThemeSelectorManager.EXCEPTIONS);
            Config.Config.config.ThemeBackgroundID = sharedRandomThemeResult;
            Config.Config.config.ThemeMusicID = sharedRandomThemeResult;
        } else {
            Config.Config.config.ThemeBackgroundID = LogicRandom.LogicRandom.getRandomInRangeExcept(0, themeItemCount - 1, ThemeSelectorManager.EXCEPTIONS);
            Config.Config.config.ThemeMusicID = LogicRandom.LogicRandom.getRandomInRangeExcept(0, themeItemCount - 1, ThemeSelectorManager.EXCEPTIONS);
        }
        ThemeSelectorManager.themeID = Config.Config.config.ThemeBackgroundID;
    }

    static patchRandomThemes(offset) {
        Config.Config.config.RandomThemeMask[offset] = !Config.Config.config.RandomThemeMask[offset];
        FileManager.FileManager.updateConfigFile();
    }
}

ThemeSelectorManager.themeID = 0;
ThemeSelectorManager.isCustomBgInUse = false;
ThemeSelectorManager.EXCEPTIONS = [];

class LegacyBackgroundManager {
    static disableRange(from, to) {
        return function (i) {
            return i >= from && i <= to;
        };
    }

    static indexFrom(from) {
        return function (i) {
            return i >= from;
        };
    }

    static indexTo(to) {
        return function (i) {
            return i <= to;
        };
    }

    static disableOnly(target) {
        return function (i) {
            return i === target;
        };
    }

    static nameIncludes(text) {
        return function (_, __, name) {
            return name.includes(text);
        };
    }

    static and(...rules) {
        return function (i, child, name) {
            return rules.every(function (rule) {
                return rule(i, child, name);
            });
        };
    }

    static or(...rules) {
        return function (i, child, name) {
            return rules.some(function (rule) {
                return rule(i, child, name);
            });
        };
    }

    static not(rule) {
        return function (i, child, name) {
            return !rule(i, child, name);
        };
    }

    static shouldSkipLayer(name) {
        if (!name.startsWith("bg_colo")) {
            return name.startsWith("bg_pattern");
        }
        return true;
    }

    static defaultLegacyRule(child) {
        var childCount = child.getChildCount();
        return childCount !== 1 && childCount !== 432 && childCount !== 108;
    }

    static apply(themeClip, enabled) {
        try {
            var exportName = themeClip.exportName;
            if (!exportName) {
                return undefined;
            }
            themeClip = StrangerthingsFixer.fix(themeClip);
            var rules = LegacyBackgroundManager.rules[exportName];
            var childAmount = themeClip.getChildCount();
            for (var i = 1; i < childAmount; i++) {
                var child = themeClip.getChildById(i);
                if (child.type !== "MovieClip") {
                    continue;
                }
                var name = themeClip.getNameOfChild(child);
                if (LegacyBackgroundManager.shouldSkipLayer(name)) {
                    continue;
                }
                var shouldHide = null;
                if (rules != null) {
                    shouldHide = rules.some(function (rule) {
                        return rule(i, child, name);
                    });
                }
                if (shouldHide == null) {
                    shouldHide = LegacyBackgroundManager.defaultLegacyRule(child);
                }
                child.visibility = !(enabled && shouldHide);
            }
        } catch (e) {
            EDebugger.EDebugger.addMessage(EDebugger.EDebugger.ERROR, "LegacyBackgroundManager: ".concat(e));
        }
    }
}

LegacyBackgroundManager.rules = { bgr_dark: [LegacyBackgroundManager.indexFrom(435)], bgr_ghosttrain: [LegacyBackgroundManager.indexFrom(435)], bgr_enchanted: [LegacyBackgroundManager.indexFrom(433)], bgr_darkmas: [LegacyBackgroundManager.disableOnly(9), LegacyBackgroundManager.disableOnly(10)], bgr_ramadan2023: [LegacyBackgroundManager.disableOnly(8), LegacyBackgroundManager.disableOnly(9), LegacyBackgroundManager.disableOnly(14), LegacyBackgroundManager.disableOnly(15)], bgr_hub: [LegacyBackgroundManager.disableOnly(8), LegacyBackgroundManager.disableOnly(18), LegacyBackgroundManager.disableOnly(19)], bgr_phoenix: [LegacyBackgroundManager.disableRange(6, 7)], bgr_cursedpirates: [LegacyBackgroundManager.disableRange(10, 29), LegacyBackgroundManager.disableRange(39, 41)], bgr_sb: [LegacyBackgroundManager.indexFrom(433)], bgr_samurai: [LegacyBackgroundManager.disableRange(434, 449), LegacyBackgroundManager.indexFrom(452)], bgr_zombie: [LegacyBackgroundManager.indexFrom(434)], bgr_toons2: [LegacyBackgroundManager.disableRange(6, 10), LegacyBackgroundManager.disableOnly(13)], bgr_toystory: [LegacyBackgroundManager.disableRange(435, 440), LegacyBackgroundManager.indexFrom(442)], bgr_arcade: [LegacyBackgroundManager.disableRange(6, 16), LegacyBackgroundManager.disableRange(18, 20), LegacyBackgroundManager.indexFrom(22)], bgr_ollie: [LegacyBackgroundManager.disableRange(433, 436), LegacyBackgroundManager.disableRange(443, 444), LegacyBackgroundManager.indexFrom(445)], bgr_goodrandoms: [LegacyBackgroundManager.disableRange(433, 440), LegacyBackgroundManager.disableRange(445, 446), LegacyBackgroundManager.disableRange(448, 453)], bgr_circus: [LegacyBackgroundManager.disableRange(5, 11), LegacyBackgroundManager.disableOnly(15), LegacyBackgroundManager.disableRange(16, 21), LegacyBackgroundManager.disableRange(22, 43), LegacyBackgroundManager.disableOnly(54)], bgr_lny24: [LegacyBackgroundManager.disableRange(23, 24)], bgr_cartoon: [LegacyBackgroundManager.disableRange(433, 446), LegacyBackgroundManager.disableOnly(450)], bgr_superbrawl: [LegacyBackgroundManager.disableRange(433, 792), LegacyBackgroundManager.disableOnly(795)], bgr_lumi: [LegacyBackgroundManager.disableRange(436, 444), LegacyBackgroundManager.indexFrom(447)], bgr_superheroes: [LegacyBackgroundManager.disableOnly(7), LegacyBackgroundManager.disableOnly(10)], bgr_jae: [LegacyBackgroundManager.indexFrom(8)], bgr_feudaljapan_1: [LegacyBackgroundManager.indexFrom(7)], bgr_feudaljapan_2: [LegacyBackgroundManager.indexFrom(7)], bgr_feudaljapan_3: [LegacyBackgroundManager.indexFrom(7)], bgr_feudaljapan_4: [LegacyBackgroundManager.indexFrom(7)], bgr_kaze: [LegacyBackgroundManager.indexFrom(9)], bgr_kaiju: [LegacyBackgroundManager.indexFrom(8)], bgr_graffiti: [LegacyBackgroundManager.disableOnly(9)], bgr_alli: [LegacyBackgroundManager.indexFrom(8)], bgr_darkgreek: [LegacyBackgroundManager.indexFrom(8)], bgr_trunk: [LegacyBackgroundManager.indexFrom(8)], bgr_fantasy: [LegacyBackgroundManager.indexFrom(8)], bgr_demon: [LegacyBackgroundManager.disableRange(433, 438), LegacyBackgroundManager.disableOnly(444)], bgr_brawloween25: [LegacyBackgroundManager.indexFrom(8)], bgr_ziggy: [LegacyBackgroundManager.indexFrom(8)], bgr_mina: [LegacyBackgroundManager.indexFrom(8)], bgr_mechas2025: [LegacyBackgroundManager.indexFrom(8)], bgr_gigi: [LegacyBackgroundManager.disableOnly(9), LegacyBackgroundManager.disableOnly(15)], bgr_gym: [LegacyBackgroundManager.disableOnly(7)], bgr_steampunk: [LegacyBackgroundManager.disableOnly(7)], bgr_glowbert: [LegacyBackgroundManager.indexFrom(8)], bgr_lny25: [LegacyBackgroundManager.indexFrom(8)], bgr_brawlentines25: [LegacyBackgroundManager.indexFrom(8)], bgr_najia: [LegacyBackgroundManager.indexFrom(7)], bgr_dragonsandfairies: [LegacyBackgroundManager.indexFrom(9)], bgr_strangerthings: [LegacyBackgroundManager.indexFrom(8)], bgr_newyork: [LegacyBackgroundManager.indexFrom(8)], bgr_rio: [LegacyBackgroundManager.indexFrom(8)], bgr_tokyo: [LegacyBackgroundManager.indexFrom(8)], bgr_berlin: [LegacyBackgroundManager.indexFrom(8)], bgr_carretabrawl: [LegacyBackgroundManager.indexFrom(8)], bgr_mf25: [LegacyBackgroundManager.indexFrom(8)], bgr_pierce: [LegacyBackgroundManager.indexFrom(8)], atom47: [LegacyBackgroundManager.disableOnly(4)], bgr_finnx: [], bgr_mecha: [], bgr_mecha_edgar: [] };

class StrangerthingsFixer {
    static fix(clip) {
        if (clip.exportName) {
            if (clip.exportName !== "bgr_strangerthings") {
                return clip;
            }
        }
        var ST_THEME_INDEX = 0;
        clip.gotoAndStopFrameIndex(ST_THEME_INDEX);
        var child = clip.getChildById(ST_THEME_INDEX);
        if (child) {
            clip = child;
        }
        return clip;
    }
}

class ThemeItem extends GameButton.GameButton {
    constructor(data, currentThemeItem) {
        super();
        this.instance.writePointer(ListContainerPopup.countryPopupListItemVtableAddr);
        var themeItemMovieClip = StringTable.StringTable.getMovieClip("sc/ui.sc", "country_item");
        this.setMovieClip(themeItemMovieClip.instance, 1);
        this.themeId = data.getInstanceID();
        this.id = this.themeId;
        var buttonTextField = themeItemMovieClip.getTextFieldByName("Text");
        if (!buttonTextField) {
            EDebugger.EDebugger.addMessage(EDebugger.EDebugger.ERROR, "Missing button TextField!");
        }
        buttonTextField.colorTag = true;
        buttonTextField.setTextScaleIfNecessary(data.getName());
        if (currentThemeItem) {
            if (!currentThemeItem.instance.isNull()) {
                themeItemMovieClip.gotoAndStopFrameIndex(+(!(currentThemeItem.instance.equals(data.instance))));
            }
        } else {
            themeItemMovieClip.gotoAndStopFrameIndex(1);
        }
    }
}

class StaticTheme {
}

StaticTheme.restrictedPopupNames = ["seasonend_popup", "create_name_popup", "age_gate_dialog", "age_gate_number_pad_dialog"];

class SnowFall {
    static patch() {
        return;
    }
}

var CLIPBOARD_THEME_ITEM_ID = -777;

class ClipboardThemeItem extends GameButton.GameButton {
    constructor(label, selected) {
        super();
        this.instance.writePointer(ListContainerPopup.countryPopupListItemVtableAddr);
        var movieClip = StringTable.StringTable.getMovieClip("sc/ui.sc", "country_item");
        this.setMovieClip(movieClip.instance, 1);
        this.id = CLIPBOARD_THEME_ITEM_ID;
        var buttonTextField = movieClip.getTextFieldByName("Text");
        if (buttonTextField) {
            buttonTextField.colorTag = true;
            buttonTextField.setTextScaleIfNecessary(label);
        }
        if (selected) {
        }
        movieClip.gotoAndStopFrameIndex(+(!selected));
    }
}
