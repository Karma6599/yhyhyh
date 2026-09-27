var PopupBase_ctor = new NativeFunction(Libg.offset(10420412, 0), "pointer", ["pointer", "pointer", "pointer", "pointer", "bool", "bool", "pointer", "pointer", "pointer", "pointer"]);
var PopupBase_getNaviHeight = new NativeFunction(Libg.offset(10425520, 0), "float", ["pointer"]);
var PopupBase_update = new NativeFunction(Libg.offset(10422920, 0), "int", ["pointer", "float"]);
var PopupBase_dtor = Libg.offset(10421320, 0);
var closeButtonCallbackOffset = LogicMemory.offset(464);
var backButtonPressedCallbackOffset = LogicMemory.offset(528);
var homeButtonPressedCallbackOffset = LogicMemory.offset(536);
var allowClosingFromModalTapping = LogicMemory.offset(284);
var backgroundClipOffset = LogicMemory.offset(336);

class PopupBase extends DropGUIContainer {
    constructor(instanceOrFileName, exportName, a3, a4, backgroundFileName, backgroundExportName, headerExportName) {
        var error;
        if (exportName === undefined) {
            exportName = "";
        }
        if (backgroundFileName === undefined) {
            backgroundFileName = "";
        }
        if (backgroundExportName === undefined) {
            backgroundExportName = "";
        }
        if (headerExportName === undefined) {
            headerExportName = "";
        }
        super(instanceOrFileName);
        this.disposed = false;
        this.closing = false;
        if (typeof instanceOrFileName === "string") {
            if (!exportName) {
                error = "PopupBase::ctor: ".concat(exportName, " is not defined!");
                EDebugger.addMessage(EDebugger.ERROR, error);
                Logcat.logError(error);
                return;
            }
            StringObject.withMany([instanceOrFileName, exportName, backgroundFileName, backgroundExportName, headerExportName, ""], function (stringObjects) {
                var fileNameSO, exportNameSO, backgroundFileNameSO, backgroundExportNameSO, headerExportNameSO, emptySO;
                fileNameSO = stringObjects[0];
                exportNameSO = stringObjects[1];
                backgroundFileNameSO = stringObjects[2];
                backgroundExportNameSO = stringObjects[3];
                headerExportNameSO = stringObjects[4];
                emptySO = stringObjects[5];
                return;
            });
            return;
        }
    }
    static patch() {
        return;
    }
    get backgroundClip() {
        var clipPtr;
        clipPtr = this.instance.add(backgroundClipOffset).readPointer();
        if (clipPtr.isNull()) {
            return null;
        }
        return new MovieClip(clipPtr);
    }
    getNaviHeight() {
        return PopupBase_getNaviHeight(this.instance);
    }
    fadeOut() {
        if (!this.disposed) {
            if (this.closing) {
                return;
            }
        }
        this.closing = true;
        this.releaseInputField();
        return;
    }
    close() {
        return;
    }
    closeWithKeyboard() {
        return;
    }
    goBack() {
        if (!this.disposed) {
            if (this.closing) {
                return;
            }
        }
        this.closing = true;
        this.releaseInputField();
        return;
    }
    closeAllPopups() {
        if (!this.disposed) {
            if (this.closing) {
                return;
            }
        }
        this.closing = true;
        this.releaseInputField();
        return;
    }
    adjustPopupHeaderButtons(buttonPrefix) {
        var backButton, homeButton;
        backButton = new GameButton(this.instance.add(PopupBase.fields.ButtonBack).readPointer());
        backButton.setCustomButtonListener(this.backButtonPressed.bind(this), "".concat(buttonPrefix, "_back_button"));
        homeButton = new GameButton(this.instance.add(PopupBase.fields.ButtonHome).readPointer());
        homeButton.setCustomButtonListener(this.homeButtonPressed.bind(this), "".concat(buttonPrefix, "_home_button"));
        return;
    }
    closeButtonPressed(self, button) {
        return;
    }
    backButtonPressed(self, button) {
        return;
    }
    homeButtonPressed(self, button) {
        return;
    }
    onDestructed() {
        return;
    }
    dispose() {
        if (this.disposed) {
            return;
        }
        this.disposed = true;
        this.releaseInputField();
        return;
    }
    get isDisposed() {
        return this.disposed;
    }
    releaseInputField() {
        var field;
        field = this.ownedInputField;
        this.ownedInputField = undefined;
        if (field == null) {
            return;
        }
        field.destruct();
        return;
    }
    update(deltaTime) {
        if (!this.disposed) {
            if (!this.instance.isNull()) {
                if (this.isDestructed()) {
                    return;
                }
                return PopupBase_update(this.instance, deltaTime);
            }
        }
        return;
    }
    updateElements(deltaTime) {
        return;
    }
    setDisallowModalTap(state) {
        this.instance.add(allowClosingFromModalTapping).writeU8(state ? 0 : 1);
        return;
    }
    setInputField(field) {
        if (this.ownedInputField === field) {
            return;
        }
        this.releaseInputField();
        this.ownedInputField = field;
        return;
    }
    getInputField() {
        return this.ownedInputField;
    }
}
PopupBase.fields = { ButtonsCallback: 128, ButtonClose: 224, ButtonBack: 232, ButtonHome: 240, ListContainer: 440 };

var GenericPopup_ctor = new NativeFunction(Libg.offset(10195884, 0), "void", ["pointer", "pointer", "int", "int", "pointer", "pointer", "pointer", "pointer", "pointer"]);
var GenericPopup_dtor = Libg.offset(10197344, 0);
var GenericPopup_buttonClicked = new NativeFunction(Libg.offset(10199080, 0), "void", ["pointer", "pointer"]);
var GenericPopup_setTitleTid = new NativeFunction(Libg.offset(10197092, 0), "void", ["pointer", "pointer"]);
var GenericPopup_setUpScreenHeader = new NativeFunction(Libg.offset(10199976, 0), "void", ["pointer"]);
var GenericPopup_addPopupButton = new NativeFunction(Libg.offset(10198728, 0), "pointer", ["pointer", "pointer", "int", "pointer"]);

class GenericPopup extends PopupBase {
    constructor(instanceOrExportName, a3, a4, backgroundFileName, backgroundExportName, headerExportName) {
        var inst, emptyStr, fileName;
        if (backgroundFileName === undefined) {
            backgroundFileName = "";
        }
        if (backgroundExportName === undefined) {
            backgroundExportName = "";
        }
        if (headerExportName === undefined) {
            headerExportName = "";
        }
        emptyStr = "";
        fileName = "sc/ui.sc";
        if (instanceOrExportName instanceof NativePointer) {
            super(instanceOrExportName);
            return;
        }
        inst = Libc.malloc(GenericPopup.allocationSize);
        StringObject.withMany([instanceOrExportName, backgroundFileName, backgroundExportName, headerExportName, emptyStr, fileName], (stringObjects) => {
            var exportNameSO, backgroundFileNameSO, backgroundExportNameSO, headerExportNameSO, emptySO, fileNameSO;
            exportNameSO = stringObjects[0];
            backgroundFileNameSO = stringObjects[1];
            backgroundExportNameSO = stringObjects[2];
            headerExportNameSO = stringObjects[3];
            emptySO = stringObjects[4];
            fileNameSO = stringObjects[5];
            return GenericPopup_ctor(inst, exportNameSO, +a3, +a4, backgroundFileNameSO, backgroundExportNameSO, headerExportNameSO, emptySO, fileNameSO);
        });
        super(inst, instanceOrExportName, a3, a4, backgroundFileName, backgroundExportName, headerExportName);
    }
    buttonPressed(self, customButton) {
        return;
    }
    addPopupButton(exportName, type, text) {
        return StringObject.withMany([exportName, text], (stringObjects) => {
            var exportNameStrObj, textStrObj;
            exportNameStrObj = stringObjects[0];
            textStrObj = stringObjects[1];
            return new GameButton(GenericPopup_addPopupButton(this.instance, exportNameStrObj, type, textStrObj));
        });
    }
    setTitleTid(titleTid) {
        return StringObject.with(titleTid, (stringObjectPointer) => {
            return GenericPopup_setTitleTid(this.instance, stringObjectPointer);
        });
    }
    setUpScreenHeader() {
        return GenericPopup_setUpScreenHeader(this.instance);
    }
}
GenericPopup.allocationSize = 664;

var GenericInfoPopup_ctor = new NativeFunction(Libg.offset(10789328, 0), "void", ["pointer", "pointer", "pointer"]);

class GenericInfoPopup extends GenericPopup {
    constructor(title, body) {
        var popupInstance;
        popupInstance = Libc.calloc(GenericInfoPopup.allocationSize, 1);
        StringObject.withMany([title, body], function (stringObjects) {
            var titleString, bodyString;
            titleString = stringObjects[0];
            bodyString = stringObjects[1];
            return GenericInfoPopup_ctor(popupInstance, titleString, bodyString);
        });
        super(popupInstance);
    }
    show(title, body) {
        var popup;
        popup = new GenericInfoPopup(title, body);
        return;
    }
}
GenericInfoPopup.allocationSize = 448;

class QuestionPopup extends GenericPopup {
    constructor(title, text, textColor) {
        var movieClip, okButton, okLabel;
        if (title === undefined) {
            title = "";
        }
        if (text === undefined) {
            text = "";
        }
        super("popup_generic");
        movieClip = this.getMovieClip();
        this.movieClip = movieClip;
        movieClip.getMovieClipByName("button_negative").visibility = false;
        movieClip.getMovieClipByName("button_no").visibility = false;
        movieClip.getMovieClipByName("button_yes").visibility = false;
        this.setTitleTid(title);
        this.textTextField = movieClip.getTextFieldByName("txt");
        this.textTextField.text = text;
        if (textColor !== undefined) {
            this.textTextField.color = textColor;
        }
        okButton = this.addGameButton("button_ok", 1);
        okLabel = okButton.getMovieClip().getTextFieldByName("txt");
        if (okLabel) {
            okLabel.text = "OK";
        }
        okButton.setCustomButtonListener(this.closeButtonPressed.bind(this));
        movieClip = this.addGameButton("button_close", 1);
        this.closeButton = movieClip;
        movieClip.setCustomButtonListener(this.closeButtonPressed.bind(this));
    }
}

var countryPopupVtableAddr = Libg.offset(18949880, 0);
var countryPopupListItemVtableAddr = Libg.offset(18633776, 0);
var themeCrashingOffset = LogicMemory.offset(304);

class ListContainerPopup extends GenericPopup {
    constructor(popupConfig) {
        var exportName, title, backgroundFileName, backgroundExportName, clip, tempPtr;
        if (popupConfig === undefined) {
            popupConfig = { ExportName: "country_popup", Title: "POPUP NAME", PopupBackgroundFileName: "", PopupBackgroundExportName: "", CustomBaseAddress: null };
        }
        if (popupConfig.ExportName == null) {
            exportName = "country_popup";
        } else {
            exportName = popupConfig.ExportName;
        }
        if (popupConfig.Title == null) {
            title = "POPUP NAME";
        } else {
            title = popupConfig.Title;
        }
        if (popupConfig.PopupBackgroundFileName == null) {
            backgroundFileName = "";
        } else {
            backgroundFileName = popupConfig.PopupBackgroundFileName;
        }
        if (popupConfig.PopupBackgroundExportName == null) {
            backgroundExportName = "";
        } else {
            backgroundExportName = popupConfig.PopupBackgroundExportName;
        }
        super(exportName, true, false, backgroundFileName, backgroundExportName, "");
        LogicMemory.fillWithZeroes(this.instance.add(PopupBase.fields.ListContainer), 32);
        if (popupConfig.CustomBaseAddress == null) {
            this.instance.writePointer(countryPopupVtableAddr);
        } else {
            this.instance.writePointer(popupConfig.CustomBaseAddress);
        }
        this.instance.add(PopupBase.fields.ButtonsCallback).writePointer(NULL);
        this.setUpScreenHeader();
        clip = this.getMovieClip();
        clip.y = Stage.getMatrixY() * -0.5;
        tempPtr = Libc.malloc(8 * Process.pointerSize);
        LogicMemory.fillWithZeroes(tempPtr, 8 * Process.pointerSize);
        this.container = new ListContainer(clip, 1, 3, 2, "", tempPtr.add(8));
        Libc.free(tempPtr);
        this.instance.add(PopupBase.fields.ListContainer).writePointer(this.container.instance);
        this.setTitleTid(title);
        this.instance.add(themeCrashingOffset).writeU8(0);
    }
    refresh() {
        var naviHeight;
        naviHeight = this.getNaviHeight();
        this.container.refreshEntryPositions(4, naviHeight, 8, 0, 0, 0, -1);
        return;
    }
}
ListContainerPopup.allocationSize = 448;
