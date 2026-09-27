var NativeFont_vtable = Libg.Libg.offset(18524128, 0);
var fullNameOffset = LogicMemory.LogicMemory.offset(24);
var lookupNameOffset = LogicMemory.LogicMemory.offset(40);
var outlineOffset = LogicMemory.LogicMemory.offset(72);
var topGlyphOffset = LogicMemory.LogicMemory.offset(76);
var leftGlyphOffset = LogicMemory.LogicMemory.offset(80);
var bottomGlyphOffset = LogicMemory.LogicMemory.offset(84);
var rightGlyphOffset = LogicMemory.LogicMemory.offset(88);
var glyphWidthOffset = LogicMemory.LogicMemory.offset(92);

class Font {
    constructor(instance) {
        this.instance = instance;
    }

    getFullName() {
        return StringObject.StringObject.read(this.instance.add(fullNameOffset));
    }

    get isNativeFont() {
        return this.instance.readPointer().equals(NativeFont_vtable);
    }

    getLookupName() {
        return StringObject.StringObject.read(this.instance.add(lookupNameOffset));
    }

    set outline(value) {
        return;
    }

    get outline() {
        return Boolean(this.instance.add(outlineOffset).readU8());
    }

    setGlyphMargin(topGlyph, leftGlyph, bottomGlyph, rightGlyph, glyphWidth) {
        this.instance.add(topGlyphOffset).writeInt(topGlyph);
        this.instance.add(leftGlyphOffset).writeInt(leftGlyph);
        this.instance.add(bottomGlyphOffset).writeInt(bottomGlyph);
        this.instance.add(rightGlyphOffset).writeInt(rightGlyph);
    }

    get glyphWidth() {
        return this.instance.add(glyphWidthOffset).readInt();
    }
}

var FontManager_instance = Libg.Libg.offset(19854976, 0);
var FontManager_setForcedFontName_android = new NativeFunction(Libg.Libg.offset(6290944, 0), "void", ["pointer", "pointer"]);
var GameMain_loadAssetWithOwner = new NativeFunction(Libg.Libg.offset(7722620, 0), "bool", ["pointer", "pointer", "int"]);
var ResourceListenerManager_instance = Libg.Libg.offset(19952040, 0);
var fontResourceOwnerOffset = LogicMemory.LogicMemory.offset(248);
var countOffset = 12;

class FontManager {
    static getInstance() {
        return FontManager_instance.readPointer();
    }

    static getFontCount() {
        return FontManager.getInstance().add(countOffset).readInt();
    }

    static getFontAt(index) {
        var fontArray = new LogicArrayList.LogicArrayList(FontManager.getInstance());
        var fontPtr = fontArray.getElement(index);
        if (fontPtr.isNull()) {
            return null;
        }
        return new Font(fontPtr);
    }

    static setForcedFontName(name) {
        var instance = FontManager.getInstance();
        if (instance.isNull()) {
            return;
        }
        StringObject.StringObject.with(name, function (namePointer) {
            return FontManager_setForcedFontName_android(instance, namePointer);
        });
    }

    static loadAndApplySelectedFont(index) {
        var font = FontManager.BSD_FONTS[index];
        if (font == null) {
            return;
        }
        if (font.fileName) {
            if (FontManager.getInstance().isNull()) {
                return;
            }
        }
        if (!ResourceManager.ResourceManager.doesFileExist(font.fileName)) {
            return;
        }
        var resourceManager = ResourceListenerManager_instance.readPointer();
        if (resourceManager.isNull()) {
            return;
        }
        var owner = resourceManager.add(fontResourceOwnerOffset);
        if (owner.readPointer().isNull()) {
            return;
        }
        StringObject.StringObject.with(font.fileName, function (fileName) {
            return GameMain_loadAssetWithOwner(fileName, owner, 0);
        });
        var matches = [];
        var count = FontManager.getFontCount();
        for (var i = 0; i < count; i++) {
            var nativeFont = FontManager.getFontAt(i);
            if (nativeFont == null) {
                continue;
            }
            if (nativeFont.isNativeFont) {
                if (nativeFont.getLookupName() === font.name) {
                    matches.push(nativeFont);
                }
            }
        }
        if (matches.length === 0) {
            Logcat.Logcat.logError("Font unavailable: " + font.fileName + "; keeping the game font");
            return;
        }
        if (matches.some(function (candidate) {
            return candidate.outline;
        })) {
            if (!matches.some(function (candidate) {
                return !candidate.outline;
            })) {
                return;
            }
        }
        for (var nativeFont of matches) {
            nativeFont.setGlyphMargin(1, 1, 4, 1, 30);
        }
    }
}

FontManager.BSD_FONTS = [
    { name: "", localeName: "FontReset", fileName: "" },
    { name: "Pusia Bold", localeName: "FontPusia", fileName: "font/Pusia-Bold.otf" },
    { name: "Cocon-Regular", localeName: "FontCocon", fileName: "font/Cocon-Regular.otf" },
    { name: "ljk_Downcome", localeName: "FontDowncome", fileName: "font/Downcome.otf" },
    { name: "Impact", localeName: "FontImpact", fileName: "font/Impact.ttf" },
    { name: "SDK_SC_Web Heavy", localeName: "FontHYWenHei", fileName: "font/HYWenHei-85W.ttf" }
];

class FontItem extends GameButton.GameButton {
    constructor(buttonConf) {
        super();
        this.name = "";
        this.disabled = false;
        this.instance.writePointer(ListContainerPopup.countryPopupListItemVtableAddr);
        var buttonMovieClip = StringTable.StringTable.getMovieClip("sc/ui.sc", "country_item");
        this.setMovieClip(buttonMovieClip.instance, 1);
        var textField = buttonMovieClip.getTextFieldByName("Text");
        textField.colorTag = true;
        textField.setTextScaleIfNecessary(Localisation.Localisation.getString(buttonConf.localeName));
        if (buttonConf.name == null) {
            this.name = "";
        }
        var isSelected = Config.Config.config.Font !== -1;
        if (isSelected) {
            isSelected = buttonConf.name === FontManager.BSD_FONTS[Config.Config.config.Font].name;
        }
        buttonMovieClip.gotoAndStopFrameIndex(+(!isSelected));
    }
}

class FontSelectorPopup extends ListContainerPopup.ListContainerPopup {
    constructor() {
        super({ Title: Localisation.Localisation.getString("FontSelectorPopup") });
        this.adjustPopupHeaderButtons("font_selector_popup");
        this.refreshItems();
    }

    refreshItems() {
        var listContainer = this.container;
        listContainer.clearEntries();
        var index = 0;
        for (var font of FontManager.BSD_FONTS) {
            var fontItem = new FontItem(font);
            fontItem.setCustomButtonListener(this.buttonClicked.bind(this), "font_" + index);
            fontItem.id = index;
            this.container.addEntry(fontItem);
            index++;
        }
        var naviHeight = this.getNaviHeight();
        this.container.refreshEntryPositions(4, naviHeight, 8, 0, 0, 0, -1);
    }

    buttonClicked(self, button) {
        var fontButton = new GameButton.GameButton(button);
        var fontId = fontButton.id;
        if (fontId === 0) {
            Config.Config.config.Font = -1;
        } else {
            Config.Config.config.Font = fontId;
        }
        FileManager.FileManager.updateConfigFile();
    }
}
