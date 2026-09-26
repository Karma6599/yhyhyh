// =============================================================
// FEATURE: Themes & Backgrounds
// config keys: ThemeBackgroundID, ThemeMusicID, LegacyBackgrounds, SharedBackground, RandomThemeMask
// Theme selector, static themes, custom/random backgrounds, snowfall, clipboard theme import.
// merged webpack modules: 9244 ThemeSelector, 7119 ThemeItem, 7227 StaticTheme, 2562 CustomBackground, 3756 SnowFall, 5729 ClipboardThemeItem
// =============================================================

// --------------------- MODULE 9244 — ThemeSelector ---------------------

// ============================================================ //
// webpack module 9244  —  ThemeSelector
// exports: LegacyBackgroundManager, StrangerthingsFixer, ThemePreviewPopup, ThemeSelectorManager, ThemeSelectorPopup
// deps: 699 (FileManager), 884 (LogicRandom), 2562 (CustomBackground), 2757 (HomePage), 4009 (Config), 4272 (EDebugger), 4934 (GUI), 5039 (GameButton), 5729 (ClipboardThemeItem), 6139 (LogicDataTables), 6253 (LogicThemeData), 7037 (SoundManager), 7119 (ThemeItem), 7265 (Localisation), 8261 (ListContainerPopup), 8569 (HomeScreen), 8632 (Stage), 9250 (StringTable), 9760 (NoMusicItem)
// ============================================================ //

__webpack_modules__[9244] = function ThemeSelector_factory(__unused_webpack_module, exports, __webpack_require__) {
    var ListContainerPopup, Localisation, LogicThemeData, LogicDataTables, Config, GameButton, GUI, LogicRandom, FileManager, HomeScreen, StringTable, ThemeItem, ClipboardThemeItem, NoMusicItem, CustomBackground, SoundManager, HomePage, Stage, EDebugger, ThemeSelectorPopup, <class_fields_init>, ThemeSelectorPopup, ThemePreviewPopup, <class_fields_init>, ThemePreviewPopup, ThemeSelectorManager, <class_fields_init>, ThemeSelectorManager, LegacyBackgroundManager, <class_fields_init>, LegacyBackgroundManager, StrangerthingsFixer, <class_fields_init>, StrangerthingsFixer;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.ThemeSelectorPopup = undefined;
        undefined.ThemePreviewPopup = exports;
        exports.ThemeSelectorManager = undefined;
        undefined.LegacyBackgroundManager = exports;
        exports.StrangerthingsFixer = undefined;
        ListContainerPopup = __webpack_require__(8261);
        Localisation = __webpack_require__(7265);
        LogicThemeData = __webpack_require__(6253);
        LogicDataTables = __webpack_require__(6139);
        Config = __webpack_require__(4009);
        GameButton = __webpack_require__(5039);
        GUI = __webpack_require__(4934);
        LogicRandom = __webpack_require__(884);
        FileManager = __webpack_require__(699);
        HomeScreen = __webpack_require__(8569);
        StringTable = __webpack_require__(9250);
        ThemeItem = __webpack_require__(7119);
        ClipboardThemeItem = __webpack_require__(5729);
        NoMusicItem = __webpack_require__(9760);
        CustomBackground = __webpack_require__(2562);
        SoundManager = __webpack_require__(7037);
        HomePage = __webpack_require__(2757);
        Stage = __webpack_require__(8632);
        EDebugger = __webpack_require__(4272);
        static refreshItems () {
    var themeItemsCount, customBgActive, currentIndex, currentThemeItem, clipboardItem, noMusicItem, themeItemIndex, theme, themeItem, button;
        ((this).container).clearEntries();
        themeItemsCount = ((this).themesTable).getItemCount();
        if ((!(this).isBackgroundSelected)) {
            customBgActive = ((((Config).Config).config).CustomThemeName !== "");
        } /* if 0xd04d1 */
        if ((this).isBackgroundSelected) {
        } /* if 0xd04e4 */
        /* jump -> 0xd04ec */
        currentIndex = (ThemeSelectorManager).themeID;
        if (!customBgActive) {
            if ((currentIndex < 0)) {
            } /* if 0xd04fe */
        } /* if 0xd04f9 */
        /* jump -> 0xd0510 */
        currentThemeItem = ((this).themesTable).getItemAt(currentIndex);
        if ((!(this).isBackgroundSelected)) {
            clipboardItem = new (ClipboardThemeItem).ClipboardThemeItem(((Localisation).Localisation).getString("CustomBgFromClipboard"), customBgActive);
            (clipboardItem).setCustomButtonListener(((this).buttonPressed).bind(this));
            ((this).container).addEntry(clipboardItem);
        } /* if 0xd0574 */
        if ((this).isBackgroundSelected) {
            noMusicItem = new (NoMusicItem).NoMusicItem((LogicThemeData).NO_MUSIC_THEME_ID, ((Localisation).Localisation).getString("ThemeNoMusic"), ((((Config).Config).config).ThemeMusicID === (LogicThemeData).NO_MUSIC_THEME_ID));
            (noMusicItem).setCustomButtonListener(((this).buttonPressed).bind(this));
            ((this).container).addEntry(noMusicItem);
        } /* if 0xd05f6 */
        themeItemIndex = 0;
        while ((themeItemIndex < themeItemsCount)) {
            theme = ((this).themesTable).getItemAt(themeItemIndex);
            if (!(!theme)) {
                if (!(theme).isDisabled()) {
                    themeItem = new (ThemeItem).ThemeItem(theme, currentThemeItem);
                    (themeItem).setCustomButtonListener(((this).buttonPressed).bind(this));
                    ((this).container).addEntry(themeItem);
                } /* if 0xd0678 */
            } /* if 0xd0632 */
            themeItemIndex = ((themeItemIndex) + 1);
            (themeItemIndex++);
        } /* while 0xd0683 */
        (this).refresh();
        if ((this).isBackgroundSelected) {
            button = ((this).container).getEntry(function (object) {
        if ((!(object instanceof (ThemeItem).ThemeItem))) {
            return false;
        } /* if 0xd0731 */
        return ((object).themeId === (this).backgroundID);
});
            if ((!button)) {
                return false;
            } /* if 0xd06b5 */
            (button).setHighlight(1, -1, 1, 0);
            ((this).container).scrollTo((button).y, 0);
            return;
        } /* if 0xd06de (open) */
};
        static buttonPressed (self, button) {
    var themeButton, themeId;
        themeButton = new (GameButton).GameButton(button);
        themeId = (themeButton).id;
        if ((themeId === (ClipboardThemeItem).CLIPBOARD_THEME_ITEM_ID)) {
            if ((!((CustomBackground).CustomBackground).stageFromClipboard())) {
                return;
            } /* if 0xd07f8 */
            return;
        } /* if 0xd081d */
        if ((this).isBackgroundSelected) {
            this.musicId = themeId;
            if ((this).customBackground) {
                return;
            } /* if 0xd0843 */
            return;
        } /* if 0xd086a */
        return;
};
        static applyCustomBackgroundWithMusic (musicId) {
    var musicTheme;
        if ((musicId >= 0)) {
        } /* if 0xd08ec */
        /* jump -> 0xd08ed */
        musicTheme = null;
        ((CustomBackground).CustomBackground).applyPending();
        ((Config).Config).config.ThemeMusicID = musicId;
        (((Config).Config).config).RandomThemeMask[2] = false;
        (((Config).Config).config).RandomThemeMask[1] = false;
        (((Config).Config).config).RandomThemeMask[0] = false;
        ((FileManager).FileManager).updateConfigFile();
        if (musicTheme) {
            ((SoundManager).SoundManager).playMusic((musicTheme).getThemeMusic());
        } /* if 0xd0988 */
        /* jump -> 0xd0999 */
        ((SoundManager).SoundManager).stopMusic();
        return;
};
        <class_fields_init> = undefined;
        ThemeSelectorPopup;
        class ThemeSelectorPopup extends <class_fields_init> = (ListContainerPopup).ListContainerPopup {
            constructor () {
    var isBackgroundSelected, backgroundID, customBackground, isBackgroundSelected, backgroundID, customBackground, themesTable, themeFileName, themeExportName, theme, clip, this.active_func, new.target;
        themeExportName = /*special:2*/;
        theme = /*special:3*/;
        if (((isBackgroundSelected) === undefined)) {
            isBackgroundSelected = isBackgroundSelected = false;
        } /* if 0xd01bf */
        if (((backgroundID) === undefined)) {
            backgroundID = backgroundID = 0;
        } /* if 0xd01c8 */
        if (((customBackground) === undefined)) {
            customBackground = customBackground = false;
        } /* if 0xd01d1 */
        isBackgroundSelected = ((LogicDataTables).LogicDataTables).getTable((((LogicDataTables).LogicDataTables).table).Themes);
        backgroundID = "";
        customBackground = "";
        if (isBackgroundSelected) {
            themesTable = (isBackgroundSelected).getItemAt(backgroundID);
            if (themesTable) {
                backgroundID = (themesTable).getFileName();
                customBackground = (themesTable).getExportName();
            } /* if 0xd0240 */
        } /* if 0xd0240 */
        if (isBackgroundSelected) {
        } /* if 0xd025d */
        /* jump -> 0xd0262 */
        (Localisation).Localisation.Title = "ThemesPopupSelectMusicTitle"("ThemesPopupSelectBackgroundTitle");
        (Localisation).Localisation.PopupBackgroundFileName = backgroundID;
        (Localisation).Localisation.PopupBackgroundExportName = customBackground;
        clip = new theme((Localisation).Localisation);
        if (<class_fields_init>) {
        } /* if 0xd028e */
        themeFileName = (clip).backgroundClip;
        if (themeFileName) {
            if ((((themeFileName).exportName) == null)) {
            } /* if 0xd02af */
            /* jump -> 0xd02bc */
            if ((undefined).startsWith("bgr_")) {
                themeFileName = (StrangerthingsFixer).fix(themeFileName);
                if ((((Config).Config).config).LegacyBackgrounds) {
                    (LegacyBackgroundManager).apply(themeFileName, true);
                } /* if 0xd02f5 */
            } /* if 0xd02f5 */
        } /* if 0xd02f5 */
        clip.isBackgroundSelected = isBackgroundSelected;
        clip.backgroundID = backgroundID;
        clip.customBackground = customBackground;
        clip.musicId = 0;
        clip.themeItemsCount = 0;
        clip.bgFileName = "";
        clip.bgExportName = "";
        clip.themesTable = isBackgroundSelected;
        if ((clip).isBackgroundSelected) {
            clip.currentTheme = ((clip).themesTable).getItemAt(backgroundID);
            clip.bgFileName = ((clip).currentTheme).getFileName();
            clip.bgExportName = ((clip).currentTheme).getExportName();
        } /* if 0xd0392 */
        if (((((Config).Config).config).ThemeMusicID !== -1)) {
        } /* if 0xd03bf */
        /* jump -> 0xd03c7 */
        (((Config).Config).config).ThemeMusicID.musicId = (clip).musicId;
        (clip).adjustPopupHeaderButtons("theme_selector");
        (clip).refreshItems();
        return clip;
}
        }
        ThemeSelectorPopup = FileManager = ThemeSelectorPopup;
        exports.ThemeSelectorPopup = ThemeSelectorPopup;
        static refreshItems () {
    var confirmationButtonClip, lbTxt, matrixY;
        confirmationButtonClip = ((StringTable).StringTable).getMovieClip("sc/ui.sc", "player_name_color_entry");
        this.confirmationButton = new (GameButton).GameButton();
        ((this).confirmationButton).setMovieClip(confirmationButtonClip, 1);
        ((this).confirmationButton).setCustomButtonListener(((this).buttonPressed).bind(this), "theme_preview_confirm");
        lbTxt = (confirmationButtonClip).getTextFieldByName("label_txt");
        lbTxt.fontOutline = true;
        (lbTxt).setTextScaleIfNecessary(((Localisation).Localisation).getString("ChangeThemePromptConfirmButton"));
        (confirmationButtonClip).gotoAndStopFrameIndex(1);
        matrixY = ((Stage).Stage).getMatrixY();
        ((this).confirmationButton).setXY(0, (matrixY - (matrixY / 8)));
        return;
};
        static buttonPressed () {
        return;
};
        static applyTheme (themeData) {
        ((Config).Config).config.ThemeBackgroundID = (this).backgroundID;
        ((Config).Config).config.ThemeMusicID = (this).musicId;
        (((Config).Config).config).RandomThemeMask[2] = false;
        (((Config).Config).config).RandomThemeMask[1] = false;
        (((Config).Config).config).RandomThemeMask[0] = false;
        ((FileManager).FileManager).updateConfigFile();
        ThemeSelectorManager.themeID = (this).backgroundID;
        ((HomeScreen).HomeScreen).updateTheme(themeData);
        return;
};
        <class_fields_init> = undefined;
        ThemePreviewPopup;
        class ThemePreviewPopup extends <class_fields_init> = (ListContainerPopup).ListContainerPopup {
            constructor (themeID, musicID) {
    var selectedTheme, clip, this.active_func, new.target;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        selectedTheme = ((LogicDataTables).LogicDataTables).getDataById((((LogicDataTables).LogicDataTables).table).Themes, themeID);
        this = super({ Title: "", PopupBackgroundFileName: (selectedTheme).getFileName(), PopupBackgroundExportName: (selectedTheme).getExportName() });
        if (<class_fields_init>) {
        } /* if 0xd0a73 */
        clip = (this).backgroundClip;
        if (clip) {
            if ((((clip).exportName) == null)) {
            } /* if 0xd0a93 */
            /* jump -> 0xd0aa0 */
            if ((undefined).startsWith("bgr_")) {
                clip = (StrangerthingsFixer).fix(clip);
                if ((((Config).Config).config).LegacyBackgrounds) {
                    (LegacyBackgroundManager).apply(clip, true);
                } /* if 0xd0ad9 */
            } /* if 0xd0ad9 */
        } /* if 0xd0ad9 */
        this.selectedTheme = selectedTheme;
        this.backgroundID = themeID;
        this.musicId = musicID;
        (this).adjustPopupHeaderButtons("theme_preview");
        (this).refreshItems();
        return this;
}
        }
        ThemePreviewPopup = FileManager = ThemePreviewPopup;
        exports.ThemePreviewPopup = ThemePreviewPopup;
        <class_fields_init> = undefined;
        ThemeSelectorManager;
        class ThemeSelectorManager {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0xd1282 (open) */
}
            init () {
    var themesTable, themeItemCount, i, theme;
        themesTable = ((LogicDataTables).LogicDataTables).getTable((((LogicDataTables).LogicDataTables).table).Themes);
        themeItemCount = (themesTable).getItemCount();
        (ThemeSelectorManager).EXCEPTIONS.length = 0;
        i = 0;
        while ((i < themeItemCount)) {
            theme = (themesTable).getItemAt(i);
            if (!(!theme)) {
                if ((theme).isDisabled()) {
                    ((ThemeSelectorManager).EXCEPTIONS).push(i);
                } /* if 0xd0e3d */
            } /* if 0xd0e27 */
            i = ((i) + 1);
            (i++);
            return;
        } /* while 0xd0e47 (open) */
}
            hideCustomBackground () {
        return;
}
            isThemeValid (theme) {
    var themeClip;
        if ((theme).isDisabled()) {
            return false;
        } /* if 0xd0eab */
        themeClip = ((StringTable).StringTable).getMovieClip_safe((theme).getFileName(), (theme).getExportName());
        if ((!themeClip)) {
            return false;
        } /* if 0xd0ed6 */
        return true;
}
            cycleTheme (direction) {
    var themesTable, count, idx, i, theme;
        themesTable = ((LogicDataTables).LogicDataTables).getTable((((LogicDataTables).LogicDataTables).table).Themes);
        count = (themesTable).getItemCount();
        if ((count < 1)) {
            return;
        } /* if 0xd0f65 */
        idx = (ThemeSelectorManager).themeID;
        i = 0;
        while ((i < count)) {
            idx = (((idx + direction) + count) % count);
            theme = (themesTable).getItemAt(idx);
            if (theme) {
                if ((!(theme).isDisabled())) {
                    ThemeSelectorManager.themeID = idx;
                    ((Config).Config).config.ThemeBackgroundID = idx;
                    ((Config).Config).config.ThemeMusicID = idx;
                    (((Config).Config).config).RandomThemeMask[2] = false;
                    (((Config).Config).config).RandomThemeMask[1] = false;
                    (((Config).Config).config).RandomThemeMask[0] = false;
                    ((FileManager).FileManager).updateConfigFile();
                    return;
                } /* if 0xd105c */
            } /* if 0xd105c */
            i = ((i) + 1);
            (i++);
            return;
        } /* while 0xd1067 (open) */
}
            setRandomTheme () {
    var themesTable, themeItemCount, sharedRandomThemeResult;
        themesTable = ((LogicDataTables).LogicDataTables).getTable((((LogicDataTables).LogicDataTables).table).Themes);
        themeItemCount = (themesTable).getItemCount();
        if ((!(((Config).Config).config).RandomThemeMask[1])) {
            sharedRandomThemeResult = ((LogicRandom).LogicRandom).getRandomInRangeExcept(0, (themeItemCount - 1), (ThemeSelectorManager).EXCEPTIONS);
            ((Config).Config).config.ThemeBackgroundID = sharedRandomThemeResult;
            ((Config).Config).config.ThemeMusicID = sharedRandomThemeResult;
        } /* if 0xd1152 */
        /* jump -> 0xd11b2 */
        ((Config).Config).config.ThemeBackgroundID = ((LogicRandom).LogicRandom).getRandomInRangeExcept(0, (themeItemCount - 1), (ThemeSelectorManager).EXCEPTIONS);
        ((Config).Config).config.ThemeMusicID = ((LogicRandom).LogicRandom).getRandomInRangeExcept(0, (themeItemCount - 1), (ThemeSelectorManager).EXCEPTIONS);
        this.themeID = (((Config).Config).config).ThemeBackgroundID;
        return;
}
            patchRandomThemes (offset) {
        (((Config).Config).config).RandomThemeMask[offset] = (!(((Config).Config).config).RandomThemeMask[offset]);
        ((FileManager).FileManager).updateConfigFile();
        return;
}
        }
        ThemeSelectorManager = FileManager = ThemeSelectorManager;
        exports.ThemeSelectorManager = ThemeSelectorManager;
        ThemeSelectorManager.themeID = 0;
        ThemeSelectorManager.isCustomBgInUse = false;
        ThemeSelectorManager.EXCEPTIONS = [];
        <class_fields_init> = undefined;
        LegacyBackgroundManager;
        class LegacyBackgroundManager {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0xd177d (open) */
}
            disableRange (from, to) {
        return function (i) {
        if ((i >= from)) {
            (i >= from);
            return (i <= to);
        } /* if 0xd12cc (open) */
};
}
            indexFrom (from) {
        return function (i) {
        return (i >= from);
};
}
            indexTo (to) {
        return function (i) {
        return (i <= to);
};
}
            disableOnly (target) {
        return function (i) {
        return (i === target);
};
}
            nameIncludes (text) {
        return function (_, __, name) {
        return (name).includes(text);
};
}
            and () {
    var rules;
        rules = ...<underflow>;
        return function (i, child, name) {
        return (rules).every(function (rule) {
        return rule(i, child, name);
});
};
}
            or () {
    var rules;
        rules = ...<underflow>;
        return function (i, child, name) {
        return (rules).some(function (rule) {
        return rule(i, child, name);
});
};
}
            not (rule) {
        return function (i, child, name) {
        return (!rule(i, child, name));
};
}
            shouldSkipLayer (name) {
        if (!(name).startsWith("bg_colo")) {
            (name).startsWith("bg_colo");
            return (name).startsWith("bg_pattern");
        } /* if 0xd1536 (open) */
}
            defaultLegacyRule (child) {
    var childCount;
        childCount = (child).getChildCount();
        if ((childCount !== 1)) {
            (childCount !== 1);
            if ((childCount !== 432)) {
                (childCount !== 432);
                return (childCount !== 108);
            } /* if 0xd157c (open) */
        } /* if 0xd157c (open) */
}
            apply (themeClip, enabled) {
    var exportName, rules, childAmount, i, child, name, shouldHide, e;
        /* CATCH -> 0xd16d8 (try region) */
        exportName = (themeClip).exportName;
        if ((!exportName)) {
            return undefined;
        } /* if 0xd15f3 */
        themeClip = (StrangerthingsFixer).fix(themeClip);
        rules = (LegacyBackgroundManager).rules[exportName];
        childAmount = (themeClip).getChildCount();
        i = 1;
        while ((i < childAmount)) {
            child = (themeClip).getChildById(i);
            if (((child).type !== "MovieClip")) {
            } /* if 0xd165a */
            /* jump -> 0xd16c5 */
            name = (themeClip).getNameOfChild(child);
            if ((LegacyBackgroundManager).shouldSkipLayer(name)) {
            } /* if 0xd1680 */
            /* jump -> 0xd16c5 */
            if (((rules) == null)) {
            } /* if 0xd168b */
            /* jump -> 0xd1695 */
            if ((((undefined).some(function (rule) {
        return rule(i, child, name);
})) == null)) {
                (undefined).some(function (rule) {
        return rule(i, child, name);
});
                shouldHide = (LegacyBackgroundManager).defaultLegacyRule(child);
            } /* if 0xd16a8 */
            if (enabled) {
            } /* if 0xd16b6 */
            /* jump -> 0xd16b7 */
            (!shouldHide).visibility = true;
            i = ((i) + 1);
            (i++);
        } /* while 0xd16d3 */
        return;
        e = child;
        /* CATCH -> 0xd170e (try region) */
        ((EDebugger).EDebugger).addMessage(((EDebugger).EDebugger).ERROR, ("LegacyBackgroundManager: ").concat(e));
        child = name = shouldHide = i = exportName = rules = childAmount = <underflow>;
        return;
        throw <underflow>;
}
        }
        LegacyBackgroundManager = FileManager = LegacyBackgroundManager;
        exports.LegacyBackgroundManager = LegacyBackgroundManager;
        LegacyBackgroundManager.rules = { bgr_dark: [(LegacyBackgroundManager).indexFrom(435)], bgr_ghosttrain: [(LegacyBackgroundManager).indexFrom(435)], bgr_enchanted: [(LegacyBackgroundManager).indexFrom(433)], bgr_darkmas: [(LegacyBackgroundManager).disableOnly(9), (LegacyBackgroundManager).disableOnly(10)], bgr_ramadan2023: [(LegacyBackgroundManager).disableOnly(8), (LegacyBackgroundManager).disableOnly(9), (LegacyBackgroundManager).disableOnly(14), (LegacyBackgroundManager).disableOnly(15)], bgr_hub: [(LegacyBackgroundManager).disableOnly(8), (LegacyBackgroundManager).disableOnly(18), (LegacyBackgroundManager).disableOnly(19)], bgr_phoenix: [(LegacyBackgroundManager).disableRange(6, 7)], bgr_cursedpirates: [(LegacyBackgroundManager).disableRange(10, 29), (LegacyBackgroundManager).disableRange(39, 41)], bgr_sb: [(LegacyBackgroundManager).indexFrom(433)], bgr_samurai: [(LegacyBackgroundManager).disableRange(434, 449), (LegacyBackgroundManager).indexFrom(452)], bgr_zombie: [(LegacyBackgroundManager).indexFrom(434)], bgr_toons2: [(LegacyBackgroundManager).disableRange(6, 10), (LegacyBackgroundManager).disableOnly(13)], bgr_toystory: [(LegacyBackgroundManager).disableRange(435, 440), (LegacyBackgroundManager).indexFrom(442)], bgr_arcade: [(LegacyBackgroundManager).disableRange(6, 16), (LegacyBackgroundManager).disableRange(18, 20), (LegacyBackgroundManager).indexFrom(22)], bgr_ollie: [(LegacyBackgroundManager).disableRange(433, 436), (LegacyBackgroundManager).disableRange(443, 444), (LegacyBackgroundManager).indexFrom(445)], bgr_goodrandoms: [(LegacyBackgroundManager).disableRange(433, 440), (LegacyBackgroundManager).disableRange(445, 446), (LegacyBackgroundManager).disableRange(448, 453)], bgr_circus: [(LegacyBackgroundManager).disableRange(5, 11), (LegacyBackgroundManager).disableOnly(15), (LegacyBackgroundManager).disableRange(16, 21), (LegacyBackgroundManager).disableRange(22, 43), (LegacyBackgroundManager).disableOnly(54)], bgr_lny24: [(LegacyBackgroundManager).disableRange(23, 24)], bgr_cartoon: [(LegacyBackgroundManager).disableRange(433, 446), (LegacyBackgroundManager).disableOnly(450)], bgr_superbrawl: [(LegacyBackgroundManager).disableRange(433, 792), (LegacyBackgroundManager).disableOnly(795)], bgr_lumi: [(LegacyBackgroundManager).disableRange(436, 444), (LegacyBackgroundManager).indexFrom(447)], bgr_superheroes: [(LegacyBackgroundManager).disableOnly(7), (LegacyBackgroundManager).disableOnly(10)], bgr_jae: [(LegacyBackgroundManager).indexFrom(8)], bgr_feudaljapan_1: [(LegacyBackgroundManager).indexFrom(7)], bgr_feudaljapan_2: [(LegacyBackgroundManager).indexFrom(7)], bgr_feudaljapan_3: [(LegacyBackgroundManager).indexFrom(7)], bgr_feudaljapan_4: [(LegacyBackgroundManager).indexFrom(7)], bgr_kaze: [(LegacyBackgroundManager).indexFrom(9)], bgr_kaiju: [(LegacyBackgroundManager).indexFrom(8)], bgr_graffiti: [(LegacyBackgroundManager).disableOnly(9)], bgr_alli: [(LegacyBackgroundManager).indexFrom(8)], bgr_darkgreek: [(LegacyBackgroundManager).indexFrom(8)], bgr_trunk: [(LegacyBackgroundManager).indexFrom(8)], bgr_fantasy: [(LegacyBackgroundManager).indexFrom(8)], bgr_demon: [(LegacyBackgroundManager).disableRange(433, 438), (LegacyBackgroundManager).disableOnly(444)], bgr_brawloween25: [(LegacyBackgroundManager).indexFrom(8)], bgr_ziggy: [(LegacyBackgroundManager).indexFrom(8)], bgr_mina: [(LegacyBackgroundManager).indexFrom(8)], bgr_mechas2025: [(LegacyBackgroundManager).indexFrom(8)], bgr_gigi: [(LegacyBackgroundManager).disableOnly(9), (LegacyBackgroundManager).disableOnly(15)], bgr_gym: [(LegacyBackgroundManager).disableOnly(7)], bgr_steampunk: [(LegacyBackgroundManager).disableOnly(7)], bgr_glowbert: [(LegacyBackgroundManager).indexFrom(8)], bgr_lny25: [(LegacyBackgroundManager).indexFrom(8)], bgr_brawlentines25: [(LegacyBackgroundManager).indexFrom(8)], bgr_najia: [(LegacyBackgroundManager).indexFrom(7)], bgr_dragonsandfairies: [(LegacyBackgroundManager).indexFrom(9)], bgr_strangerthings: [(LegacyBackgroundManager).indexFrom(8)], bgr_newyork: [(LegacyBackgroundManager).indexFrom(8)], bgr_rio: [(LegacyBackgroundManager).indexFrom(8)], bgr_tokyo: [(LegacyBackgroundManager).indexFrom(8)], bgr_berlin: [(LegacyBackgroundManager).indexFrom(8)], bgr_carretabrawl: [(LegacyBackgroundManager).indexFrom(8)], bgr_mf25: [(LegacyBackgroundManager).indexFrom(8)], bgr_pierce: [(LegacyBackgroundManager).indexFrom(8)], atom47: [(LegacyBackgroundManager).disableOnly(4)], bgr_finnx: [], bgr_mecha: [], bgr_mecha_edgar: [] };
        <class_fields_init> = undefined;
        StrangerthingsFixer;
        class StrangerthingsFixer {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0xd1818 (open) */
}
            fix (clip) {
    var ST_THEME_INDEX, child;
        if (!(!(clip).exportName)) {
            if (((clip).exportName !== "bgr_strangerthings")) {
                return clip;
            } /* if 0xd17c1 */
        } /* if 0xd17bd */
        ST_THEME_INDEX = 0;
        (clip).gotoAndStopFrameIndex(ST_THEME_INDEX);
        child = (clip).getChildById(ST_THEME_INDEX);
        if (child) {
            clip = child;
        } /* if 0xd17e6 */
        return clip;
}
        }
        StrangerthingsFixer = FileManager = StrangerthingsFixer;
        exports.StrangerthingsFixer = StrangerthingsFixer;
        return;
};

// --------------------- MODULE 7119 — ThemeItem ---------------------

// ============================================================ //
// webpack module 7119  —  ThemeItem
// exports: ThemeItem
// deps: 4272 (EDebugger), 5039 (GameButton), 8261 (ListContainerPopup), 9250 (StringTable)
// ============================================================ //

__webpack_modules__[7119] = function ThemeItem_factory(__unused_webpack_module, exports, __webpack_require__) {
    var GameButton, ListContainerPopup, StringTable, EDebugger, ThemeItem, <class_fields_init>, ThemeItem;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.ThemeItem = undefined;
        GameButton = __webpack_require__(5039);
        ListContainerPopup = __webpack_require__(8261);
        StringTable = __webpack_require__(9250);
        EDebugger = __webpack_require__(4272);
        <class_fields_init> = undefined;
        ThemeItem;
        class ThemeItem extends <class_fields_init> = (GameButton).GameButton {
            constructor (data, currentThemeItem) {
    var themeItemMovieClip, buttonTextField, this.active_func, new.target;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        this = super();
        if (<class_fields_init>) {
        } /* if 0xb5ddc */
        ((this).instance).writePointer((ListContainerPopup).countryPopupListItemVtableAddr);
        themeItemMovieClip = ((StringTable).StringTable).getMovieClip("sc/ui.sc", "country_item");
        (this).setMovieClip((themeItemMovieClip).instance, 1);
        this.themeId = (data).getInstanceID();
        this.id = (this).themeId;
        buttonTextField = (themeItemMovieClip).getTextFieldByName("Text");
        if ((!buttonTextField)) {
            ((EDebugger).EDebugger).addMessage(((EDebugger).EDebugger).ERROR, "Missing button TextField!");
        } /* if 0xb5e82 */
        buttonTextField.colorTag = true;
        (buttonTextField).setTextScaleIfNecessary((data).getName());
        if (currentThemeItem) {
            if ((!((currentThemeItem).instance).isNull())) {
                (themeItemMovieClip).gotoAndStopFrameIndex((+(!((currentThemeItem).instance).equals((data).instance))));
            } /* if 0xb5ed8 */
        } /* if 0xb5ed8 */
        /* jump -> 0xb5ee5 */
        (themeItemMovieClip).gotoAndStopFrameIndex(1);
        return this;
}
        }
        ThemeItem = v8 = ThemeItem;
        exports.ThemeItem = ThemeItem;
        return;
};

// --------------------- MODULE 7227 — StaticTheme ---------------------

// ============================================================ //
// webpack module 7227  —  StaticTheme
// exports: StaticTheme
// ============================================================ //

__webpack_modules__[7227] = function StaticTheme_factory(__unused_webpack_module, exports) {
    var StaticTheme, <class_fields_init>, StaticTheme;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.StaticTheme = undefined;
        <class_fields_init> = undefined;
        StaticTheme;
        class StaticTheme {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0xce996 (open) */
}
        }
        StaticTheme = StaticTheme = StaticTheme;
        exports.StaticTheme = StaticTheme;
        StaticTheme.restrictedPopupNames = ["seasonend_popup", "create_name_popup", "age_gate_dialog", "age_gate_number_pad_dialog"];
        return;
};

// --------------------- MODULE 2562 — CustomBackground ---------------------

// ============================================================ //
// webpack module 2562  —  CustomBackground
// exports: CustomBackground
// deps: 699 (FileManager), 758 (ClipboardImage), 4009 (Config), 4934 (GUI), 6224 (DownloadedImage), 7265 (Localisation), 8569 (HomeScreen), 8632 (Stage)
// ============================================================ //

__webpack_modules__[2562] = function CustomBackground_factory(__unused_webpack_module, exports, __webpack_require__) {
    var HomeScreen, DownloadedImage, Stage, Config, FileManager, GUI, ClipboardImage, Localisation, BACKGROUND_CHILD_INDEX, STAGED_FILE_BASENAME, CustomBackground, <class_fields_init>, CustomBackground;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.CustomBackground = undefined;
        HomeScreen = __webpack_require__(8569);
        DownloadedImage = __webpack_require__(6224);
        Stage = __webpack_require__(8632);
        Config = __webpack_require__(4009);
        FileManager = __webpack_require__(699);
        GUI = __webpack_require__(4934);
        ClipboardImage = __webpack_require__(758);
        Localisation = __webpack_require__(7265);
        BACKGROUND_CHILD_INDEX = 1;
        STAGED_FILE_BASENAME = "bsd_custom_bg";
        <class_fields_init> = undefined;
        CustomBackground;
        class CustomBackground {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x9d054 (open) */
}
            setFromFile (sourcePath) {
    var stagedPath;
        stagedPath = (this).stage(sourcePath);
        if ((!stagedPath)) {
            return false;
        } /* if 0x9c873 */
        if ((!(this).apply(stagedPath))) {
            return false;
        } /* if 0x9c884 */
        ((Config).Config).config.CustomThemeName = stagedPath;
        ((FileManager).FileManager).updateConfigFile();
        return true;
}
            setFromClipboard () {
        if ((!(this).stageFromClipboard())) {
            ((GUI).GUI).showFloaterTextAtDefaultPosition(((Localisation).Localisation).getString("CustomBgNoImage"));
            return false;
        } /* if 0x9c908 */
        if ((!(this).applyPending())) {
            return false;
        } /* if 0x9c916 */
        ((GUI).GUI).showFloaterTextAtDefaultPosition(((Localisation).Localisation).getString("CustomBgSet"));
        return true;
}
            stageFromClipboard () {
    var stagedPath;
        stagedPath = ("").concat(((FileManager).FileManager).saveDirPath, "/", STAGED_FILE_BASENAME, ".png");
        if (((ClipboardImage).ClipboardImage).readImageTo(stagedPath)) {
        } /* if 0x9c9b4 */
        /* jump -> 0x9c9b5 */
        stagedPath.pendingStagedPath = null;
        return ((this).pendingStagedPath !== null);
}
            applyPending () {
    var path;
        path = (this).pendingStagedPath;
        this.pendingStagedPath = null;
        if (!(!path)) {
            if ((!(this).apply(path))) {
                return false;
            } /* if 0x9ca15 */
        } /* if 0x9ca11 */
        ((Config).Config).config.CustomThemeName = path;
        ((FileManager).FileManager).updateConfigFile();
        return true;
}
            onHomeRebuilt () {
        this.current = null;
        return;
}
            hide () {
        return;
}
            reapply () {
        if ((((Config).Config).config).CustomThemeName) {
            (this).apply((((Config).Config).config).CustomThemeName);
            return;
        } /* if 0x9cad6 (open) */
}
            discard () {
        (this).removeCurrent();
        if ((((Config).Config).config).CustomThemeName) {
            ((Config).Config).config.CustomThemeName = "";
            ((FileManager).FileManager).updateConfigFile();
            return;
        } /* if 0x9cb3c (open) */
}
            clear () {
        if ((!(((Config).Config).config).CustomThemeName)) {
            return;
        } /* if 0x9cba5 */
        (this).discard();
        ((HomeScreen).HomeScreen).relayoutBackground();
        return;
}
            apply (path) {
    var homeSprite, themeClip, image;
        if ((!((FileManager).FileManager).isFilepath(path))) {
            return false;
        } /* if 0x9cc4e */
        homeSprite = ((HomeScreen).HomeScreen).getSprite();
        if ((homeSprite).isNull()) {
            return false;
        } /* if 0x9cc6e */
        themeClip = ((HomeScreen).HomeScreen).getThemeMovieClip();
        if (((themeClip).instance).isNull()) {
            return false;
        } /* if 0x9cc93 */
        (this).removeCurrent();
        image = ((DownloadedImage).DownloadedImage).fromLocalFile(path, (themeClip).instance, true);
        (this).coverScreen(image, themeClip);
        (homeSprite).addChildAt(image, BACKGROUND_CHILD_INDEX);
        this.current = image;
        return true;
}
            coverScreen (image, themeClip) {
    var naturalSize, coverWidth, coverHeight, coverScale;
        naturalSize = ((DownloadedImage).DownloadedImage).getNaturalSize((image).instance);
        coverWidth = ((Stage).Stage).getBackgroundCoverWidth();
        coverHeight = ((Stage).Stage).getBackgroundCoverHeight();
        if (!(!naturalSize)) {
            if (!(coverWidth <= 0)) {
                (coverWidth <= 0);
                if ((coverHeight <= 0)) {
                    return;
                } /* if 0x9cd91 */
            } /* if 0x9cd8e */
        } /* if 0x9cd8e */
        coverScale = (Math).max((coverWidth / (naturalSize).width), (coverHeight / (naturalSize).height));
        (image).setSize(((naturalSize).width * coverScale), ((naturalSize).height * coverScale));
        return;
}
            removeCurrent () {
        if ((!(this).current)) {
            return;
            /* CATCH -> 0x9ce4d (try region) */
        } /* if 0x9ce1e */
        (((HomeScreen).HomeScreen).getSprite()).removeChild(((this).current).instance);
        /* jump -> 0x9ce54 */
        /* CATCH -> 0x9ce56 (try region) */
        /* jump -> 0x9ce54 */
        throw <underflow>;
        this.current = null;
        return;
}
            stage (sourcePath) {
    var lower, extension, stagedPath, bytes;
        if ((!((FileManager).FileManager).isFilepath(sourcePath))) {
            ((GUI).GUI).showFloaterTextAtDefaultPosition(((Localisation).Localisation).getString("CustomBgError"));
            return null;
        } /* if 0x9ceea */
        if ((sourcePath).startsWith(((FileManager).FileManager).saveDirPath)) {
            return sourcePath;
        } /* if 0x9cf04 */
        lower = (sourcePath).toLowerCase();
        if (!(lower).endsWith(".jpg")) {
            (lower).endsWith(".jpg");
            if ((lower).endsWith(".jpeg")) {
            } /* if 0x9cf3b */
        } /* if 0x9cf32 */
        /* jump -> 0x9cf40 */
        extension = "png";
        stagedPath = ("").concat(((FileManager).FileManager).saveDirPath, "/", STAGED_FILE_BASENAME, ".", extension);
        /* CATCH -> 0x9cfe8 (try region) */
        bytes = ((FileManager).FileManager).readFile(sourcePath, "b");
        if (!(!bytes)) {
            if (((bytes).byteLength === 0)) {
                ((GUI).GUI).showFloaterTextAtDefaultPosition(((Localisation).Localisation).getString("CustomBgError"));
                return null;
            } /* if 0x9cfc4 */
        } /* if 0x9cf99 */
        ((FileManager).FileManager).writeToFile(stagedPath, "wb", bytes);
        return stagedPath;
        bytes = "jpg";
        /* CATCH -> 0x9d017 (try region) */
        ((GUI).GUI).showFloaterTextAtDefaultPosition(((Localisation).Localisation).getString("CustomBgError"));
        return null;
        throw lower = extension = stagedPath = <underflow>;
}
        }
        CustomBackground = BACKGROUND_CHILD_INDEX = CustomBackground;
        exports.CustomBackground = CustomBackground;
        CustomBackground.current = null;
        CustomBackground.pendingStagedPath = null;
        return;
};

// --------------------- MODULE 3756 — SnowFall ---------------------

// ============================================================ //
// webpack module 3756  —  SnowFall
// exports: SnowFall
// ============================================================ //

__webpack_modules__[3756] = function SnowFall_factory(__unused_webpack_module, exports) {
    var SnowFall, <class_fields_init>, SnowFall;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.SnowFall = undefined;
        <class_fields_init> = undefined;
        SnowFall;
        class SnowFall {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x56265 (open) */
}
            patch () {
        return;
}
        }
        SnowFall = SnowFall = SnowFall;
        exports.SnowFall = SnowFall;
        return;
};

// --------------------- MODULE 5729 — ClipboardThemeItem ---------------------

// ============================================================ //
// webpack module 5729  —  ClipboardThemeItem
// exports: CLIPBOARD_THEME_ITEM_ID, ClipboardThemeItem
// deps: 5039 (GameButton), 8261 (ListContainerPopup), 9250 (StringTable)
// ============================================================ //

__webpack_modules__[5729] = function ClipboardThemeItem_factory(__unused_webpack_module, exports, __webpack_require__) {
    var GameButton, ListContainerPopup, StringTable, ClipboardThemeItem, <class_fields_init>, ClipboardThemeItem;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.CLIPBOARD_THEME_ITEM_ID = undefined;
        undefined.ClipboardThemeItem = exports;
        GameButton = __webpack_require__(5039);
        ListContainerPopup = __webpack_require__(8261);
        StringTable = __webpack_require__(9250);
        exports.CLIPBOARD_THEME_ITEM_ID = -777;
        <class_fields_init> = undefined;
        ClipboardThemeItem;
        class ClipboardThemeItem extends <class_fields_init> = (GameButton).GameButton {
            constructor (label, selected) {
    var movieClip, buttonTextField, this.active_func, new.target;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        this = super();
        if (<class_fields_init>) {
        } /* if 0xb294a */
        ((this).instance).writePointer((ListContainerPopup).countryPopupListItemVtableAddr);
        movieClip = ((StringTable).StringTable).getMovieClip("sc/ui.sc", "country_item");
        (this).setMovieClip((movieClip).instance, 1);
        this.id = (exports).CLIPBOARD_THEME_ITEM_ID;
        buttonTextField = (movieClip).getTextFieldByName("Text");
        if (buttonTextField) {
            buttonTextField.colorTag = true;
            (buttonTextField).setTextScaleIfNecessary(label);
        } /* if 0xb29cf */
        if (selected) {
        } /* if 0xb29dd */
        /* jump -> 0xb29de */
        return this;
}
        }
        ClipboardThemeItem = ClipboardThemeItem = ClipboardThemeItem;
        exports.ClipboardThemeItem = ClipboardThemeItem;
        return;
};

