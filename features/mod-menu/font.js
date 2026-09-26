//============================================================================//
// MOD FEATURE: Font
// In-game name: "Font"  (TID: SelectFont)
// Menu: Mod Menu — Lobby + Battle tab(s) (menu/mod-menu.js#8203)
// Font manager + font selector (Config.Font); TTF loading and metrics.
//============================================================================//

// --------------------- MODULE 5637 — FontManager ---------------------


// ============================================================ //
// webpack module 5637  —  FontManager
// exports: FontManager
// deps: 1588 (LogicMemory), 3079 (Font), 3380 (Logcat), 5212 (ResourceManager), 5417 (LogicArrayList), 7535 (StringObject), 9878 (Libg)
// ============================================================ //

__webpack_modules__[5637] = function FontManager_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, LogicArrayList, Font, StringObject, LogicMemory, Logcat, ResourceManager, FontManager_instance, FontManager_setForcedFontName_android, GameMain_loadAssetWithOwner, ResourceListenerManager_instance, fontResourceOwnerOffset, countOffset, FontManager, <class_fields_init>, FontManager;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.FontManager = undefined;
        Libg = __webpack_require__(9878);
        LogicArrayList = __webpack_require__(5417);
        Font = __webpack_require__(3079);
        StringObject = __webpack_require__(7535);
        LogicMemory = __webpack_require__(1588);
        Logcat = __webpack_require__(3380);
        ResourceManager = __webpack_require__(5212);
        FontManager_instance = ((Libg).Libg).offset(19854976, 0);
        FontManager_setForcedFontName_android = new NativeFunction(((Libg).Libg).offset(6290944, 0), "void", ["pointer", "pointer"]);
        GameMain_loadAssetWithOwner = new NativeFunction(((Libg).Libg).offset(7722620, 0), "bool", ["pointer", "pointer", "int"]);
        ResourceListenerManager_instance = ((Libg).Libg).offset(19952040, 0);
        fontResourceOwnerOffset = ((LogicMemory).LogicMemory).offset(248);
        countOffset = 12;
        <class_fields_init> = undefined;
        FontManager;
        class FontManager {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x7d64e (open) */
}
            getInstance () {
        return (FontManager_instance).readPointer();
}
            getFontCount () {
        return (((this).getInstance()).add(countOffset)).readInt();
}
            getFontAt (index) {
    var fontArray, fontPtr;
        fontArray = new (LogicArrayList).LogicArrayList((FontManager).getInstance());
        fontPtr = (fontArray).getElement(index);
        if ((fontPtr).isNull()) {
            return null;
        } /* if 0x7d2d9 */
        return new (Font).Font(fontPtr);
}
            setForcedFontName (name) {
    var instance;
        instance = (this).getInstance();
        if ((instance).isNull()) {
            return;
        } /* if 0x7d332 */
        return;
}
            loadAndApplySelectedFont (index) {
    var font, resourceManager, owner, matches, count, i, nativeFont, nativeFont;
        font = (this).BSD_FONTS[index];
        if (((font) == null)) {
        } /* if 0x7d3f5 */
        /* jump -> 0x7d3fa */
        if (!(!(undefined).fileName)) {
            if (((this).getInstance()).isNull()) {
                return;
            } /* if 0x7d414 */
        } /* if 0x7d411 */
        if ((!((ResourceManager).ResourceManager).doesFileExist((font).fileName))) {
            return;
        } /* if 0x7d45a */
        resourceManager = (ResourceListenerManager_instance).readPointer();
        if ((resourceManager).isNull()) {
            return;
        } /* if 0x7d474 */
        owner = (resourceManager).add(fontResourceOwnerOffset);
        if (((owner).readPointer()).isNull()) {
            return;
        } /* if 0x7d499 */
        ((StringObject).StringObject).with((font).fileName, function (fileName) {
        return GameMain_loadAssetWithOwner(fileName, owner, 0);
});
        matches = [];
        count = (this).getFontCount();
        i = 0;
        while ((i < count)) {
            nativeFont = (this).getFontAt(i);
            if (((nativeFont) == null)) {
            } /* if 0x7d4f0 */
            /* jump -> 0x7d4f5 */
            if ((undefined).isNativeFont) {
                if (((nativeFont).getLookupName() === (font).name)) {
                    (matches).push(nativeFont);
                } /* if 0x7d51c */
            } /* if 0x7d51c */
            i = ((i) + 1);
            (i++);
        } /* while 0x7d526 */
        if (!(!(matches).some(function (candidate) {
        return (candidate).outline;
}))) {
            (!(matches).some(function (candidate) {
        return (candidate).outline;
}));
            if ((!(matches).some(function (candidate) {
        return (!(candidate).outline);
}))) {
                return;
            } /* if 0x7d573 */
        } /* if 0x7d546 */
        /* jump -> 0x7d590 */
        nativeFont = /*iter*/ matches;
        (nativeFont).setGlyphMargin(1, 1, 4, 1, 30);
        } while (!matches);
        nativeFont = ((Logcat).Logcat).logError(("Font unavailable: ").concat((font).fileName, "; keeping the game font"));
        return;
}
        }
        FontManager = FontManager_setForcedFontName_android = FontManager;
        exports.FontManager = FontManager;
        FontManager.BSD_FONTS = [{ name: "", localeName: "FontReset", fileName: "" }, { name: "Pusia Bold", localeName: "FontPusia", fileName: "font/Pusia-Bold.otf" }, { name: "Cocon-Regular", localeName: "FontCocon", fileName: "font/Cocon-Regular.otf" }, { name: "ljk_Downcome", localeName: "FontDowncome", fileName: "font/Downcome.otf" }, { name: "Impact", localeName: "FontImpact", fileName: "font/Impact.ttf" }, { name: "SDK_SC_Web Heavy", localeName: "FontHYWenHei", fileName: "font/HYWenHei-85W.ttf" }];
        return;
};

// --------------------- MODULE 9354 — FontSelector ---------------------


// ============================================================ //
// webpack module 9354  —  FontSelector
// exports: FontSelectorPopup
// deps: 699 (FileManager), 4009 (Config), 4823 (FontItem), 5039 (GameButton), 5637 (FontManager), 7265 (Localisation), 8261 (ListContainerPopup), 8775 (GameMain)
// ============================================================ //

__webpack_modules__[9354] = function FontSelector_factory(__unused_webpack_module, exports, __webpack_require__) {
    var ListContainerPopup, Localisation, GameButton, FontItem, Config, GameMain, FontManager, FileManager, FontSelectorPopup, <class_fields_init>, FontSelectorPopup;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.FontSelectorPopup = undefined;
        ListContainerPopup = __webpack_require__(8261);
        Localisation = __webpack_require__(7265);
        GameButton = __webpack_require__(5039);
        FontItem = __webpack_require__(4823);
        Config = __webpack_require__(4009);
        GameMain = __webpack_require__(8775);
        FontManager = __webpack_require__(5637);
        FileManager = __webpack_require__(699);
        static refreshItems () {
    var listContainer, index, font, fontItem, naviHeight;
        listContainer = (this).container;
        (listContainer).clearEntries();
        index = 0;
        /* jump -> 0xc4545 */
        font = /*iter*/ ((FontManager).FontManager).BSD_FONTS;
        fontItem = new (FontItem).FontItem(font);
        (fontItem).setCustomButtonListener(((this).buttonClicked).bind(this), ("font_").concat(index));
        fontItem.id = index;
        ((this).container).addEntry(fontItem);
        index = ((index) + 1);
        (index++);
        } while (!fontItem);
        fontItem = ((FontManager).FontManager).BSD_FONTS;
        naviHeight = (this).getNaviHeight();
        ((this).container).refreshEntryPositions(4, naviHeight, 8, 0, 0, 0, -1);
        return;
};
        static buttonClicked (self, button) {
    var fontButton, fontId;
        fontButton = new (GameButton).GameButton(button);
        fontId = (fontButton).id;
        if ((fontId === 0)) {
        } /* if 0xc45ff */
        /* jump -> 0xc4602 */
        -1.Font = fontId;
        if ((fontId === 0)) {
            ((Config).Config).config.Font = -1;
        } /* if 0xc4623 */
        /* jump -> 0xc4638 */
        ((Config).Config).config.Font = fontId;
        ((FileManager).FileManager).updateConfigFile();
        return;
};
        <class_fields_init> = undefined;
        FontSelectorPopup;
        class FontSelectorPopup extends <class_fields_init> = (ListContainerPopup).ListContainerPopup {
            constructor () {
    var this.active_func, new.target;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        this = super({ Title: ((Localisation).Localisation).getString("FontSelectorPopup") });
        if (<class_fields_init>) {
        } /* if 0xc4445 */
        (this).adjustPopupHeaderButtons("font_selector_popup");
        (this).refreshItems();
        return this;
}
        }
        FontSelectorPopup = FontSelectorPopup = FontSelectorPopup;
        exports.FontSelectorPopup = FontSelectorPopup;
        return;
};

// --------------------- MODULE 3079 — Font ---------------------


// ============================================================ //
// webpack module 3079  —  Font
// exports: Font
// deps: 1588 (LogicMemory), 7535 (StringObject), 9878 (Libg)
// ============================================================ //

__webpack_modules__[3079] = function Font_factory(__unused_webpack_module, exports, __webpack_require__) {
    var StringObject, LogicMemory, Libg, NativeFont_vtable, fullNameOffset, lookupNameOffset, outlineOffset, topGlyphOffset, leftGlyphOffset, bottomGlyphOffset, rightGlyphOffset, glyphWidthOffset, Font, <class_fields_init>, Font;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.Font = undefined;
        StringObject = __webpack_require__(7535);
        LogicMemory = __webpack_require__(1588);
        Libg = __webpack_require__(9878);
        NativeFont_vtable = ((Libg).Libg).offset(18524128, 0);
        fullNameOffset = ((LogicMemory).LogicMemory).offset(24);
        lookupNameOffset = ((LogicMemory).LogicMemory).offset(40);
        outlineOffset = ((LogicMemory).LogicMemory).offset(72);
        topGlyphOffset = ((LogicMemory).LogicMemory).offset(76);
        leftGlyphOffset = ((LogicMemory).LogicMemory).offset(80);
        bottomGlyphOffset = ((LogicMemory).LogicMemory).offset(84);
        rightGlyphOffset = ((LogicMemory).LogicMemory).offset(88);
        glyphWidthOffset = ((LogicMemory).LogicMemory).offset(92);
        static getFullName () {
        return ((StringObject).StringObject).read(((this).instance).add(fullNameOffset));
};
        static get isNativeFont () {
        return (((this).instance).readPointer()).equals(NativeFont_vtable);
};
        static getLookupName () {
        return ((StringObject).StringObject).read(((this).instance).add(lookupNameOffset));
};
        static set outline (value) {
        return;
};
        static get outline () {
        return Boolean((((this).instance).add(outlineOffset)).readU8());
};
        static setGlyphMargin (topGlyph, leftGlyph, bottomGlyph, rightGlyph, glyphWidth) {
        (((this).instance).add(topGlyphOffset)).writeInt(topGlyph);
        (((this).instance).add(leftGlyphOffset)).writeInt(leftGlyph);
        (((this).instance).add(bottomGlyphOffset)).writeInt(bottomGlyph);
        (((this).instance).add(rightGlyphOffset)).writeInt(rightGlyph);
        return;
};
        static get glyphWidth () {
        return (((this).instance).add(glyphWidthOffset)).readInt();
};
        <class_fields_init> = undefined;
        Font;
        class Font {
            constructor (instance) {
        if (<class_fields_init>) {
        } /* if 0x7ccf0 */
        this.instance = instance;
        return;
}
        }
        Font = leftGlyphOffset = Font;
        exports.Font = Font;
        return;
};

// --------------------- MODULE 4823 — FontItem ---------------------


// ============================================================ //
// webpack module 4823  —  FontItem
// exports: FontItem
// deps: 4009 (Config), 5039 (GameButton), 5637 (FontManager), 7265 (Localisation), 8261 (ListContainerPopup), 9250 (StringTable)
// ============================================================ //

__webpack_modules__[4823] = function FontItem_factory(__unused_webpack_module, exports, __webpack_require__) {
    var GameButton, ListContainerPopup, StringTable, Localisation, Config, FontManager, FontItem, <class_fields_init>, FontItem;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.FontItem = undefined;
        GameButton = __webpack_require__(5039);
        ListContainerPopup = __webpack_require__(8261);
        StringTable = __webpack_require__(9250);
        Localisation = __webpack_require__(7265);
        Config = __webpack_require__(4009);
        FontManager = __webpack_require__(5637);
        <class_fields_init> = undefined;
        FontItem;
        class FontItem extends <class_fields_init> = (GameButton).GameButton {
            constructor (buttonConf) {
    var buttonMovieClip, textField, isSelected, this.active_func, new.target;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        this = super();
        if (<class_fields_init>) {
        } /* if 0xb2f8c */
        this.name = "";
        this.disabled = false;
        ((this).instance).writePointer((ListContainerPopup).countryPopupListItemVtableAddr);
        buttonMovieClip = ((StringTable).StringTable).getMovieClip("sc/ui.sc", "country_item");
        (this).setMovieClip((buttonMovieClip).instance, 1);
        textField = (buttonMovieClip).getTextFieldByName("Text");
        textField.colorTag = true;
        (textField).setTextScaleIfNecessary(((Localisation).Localisation).getString((buttonConf).localeName));
        if ((((buttonConf).name) == null)) {
            this.name = "";
        } /* if 0xb3034 */
        isSelected = ((((Config).Config).config).Font !== -1);
        if (isSelected) {
            isSelected = ((buttonConf).name === (((FontManager).FontManager).BSD_FONTS[(((Config).Config).config).Font]).name);
        } /* if 0xb3084 */
        (buttonMovieClip).gotoAndStopFrameIndex((+(!isSelected)));
        return this;
}
        }
        FontItem = FontItem = FontItem;
        exports.FontItem = FontItem;
        return;
};

