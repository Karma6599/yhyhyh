//============================================================================//// POPUP FRAMEWORK// merged webpack modules: 8581 PopupBase, 6193 GenericPopup, 5027 GenericInfoPopup, 7770 QuestionPopup, 8261 ListContainerPopup//============================================================================//
// --------------------- MODULE 8581 — PopupBase ---------------------


// ============================================================ //
// webpack module 8581  —  PopupBase
// exports: PopupBase, PopupBase_dtor, backButtonPressedCallbackOffset, closeButtonCallbackOffset, homeButtonPressedCallbackOffset
// deps: 612 (MovieClip), 1588 (LogicMemory), 1978 (Libc), 3380 (Logcat), 4009 (Config), 4272 (EDebugger), 5039 (GameButton), 6139 (LogicDataTables), 7227 (StaticTheme), 7535 (StringObject), 9244 (ThemeSelector), 9407 (DropGUIContainer), 9878 (Libg)
// ============================================================ //

__webpack_modules__[8581] = function PopupBase_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, DropGUIContainer, StringObject, Config, StaticTheme, LogicMemory, GameButton, LogicDataTables, Libc, EDebugger, Logcat, MovieClip, ThemeSelector, PopupBase_ctor, PopupBase_getNaviHeight, PopupBase_update, allowClosingFromModalTapping, backgroundClipOffset, PopupBase, <class_fields_init>, PopupBase;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.PopupBase_dtor = undefined;
        undefined.closeButtonCallbackOffset = exports;
        exports.backButtonPressedCallbackOffset = undefined;
        undefined.homeButtonPressedCallbackOffset = exports;
        exports.PopupBase = undefined;
        Libg = __webpack_require__(9878);
        DropGUIContainer = __webpack_require__(9407);
        StringObject = __webpack_require__(7535);
        Config = __webpack_require__(4009);
        StaticTheme = __webpack_require__(7227);
        LogicMemory = __webpack_require__(1588);
        GameButton = __webpack_require__(5039);
        LogicDataTables = __webpack_require__(6139);
        Libc = __webpack_require__(1978);
        EDebugger = __webpack_require__(4272);
        Logcat = __webpack_require__(3380);
        MovieClip = __webpack_require__(612);
        ThemeSelector = __webpack_require__(9244);
        PopupBase_ctor = new NativeFunction(((Libg).Libg).offset(10420412, 0), "pointer", ["pointer", "pointer", "pointer", "bool", "bool", "pointer", "pointer", "pointer", "pointer"]);
        PopupBase_getNaviHeight = new NativeFunction(((Libg).Libg).offset(10425520, 0), "float", ["pointer"]);
        PopupBase_update = new NativeFunction(((Libg).Libg).offset(10422920, 0), "int", ["pointer", "float"]);
        exports.PopupBase_dtor = ((Libg).Libg).offset(10421320, 0);
        exports.closeButtonCallbackOffset = ((LogicMemory).LogicMemory).offset(464);
        exports.backButtonPressedCallbackOffset = ((LogicMemory).LogicMemory).offset(528);
        exports.homeButtonPressedCallbackOffset = ((LogicMemory).LogicMemory).offset(536);
        allowClosingFromModalTapping = ((LogicMemory).LogicMemory).offset(284);
        backgroundClipOffset = ((LogicMemory).LogicMemory).offset(336);
        static get backgroundClip () {
    var clipPtr;
        clipPtr = (((this).instance).add(backgroundClipOffset)).readPointer();
        if ((clipPtr).isNull()) {
            return null;
        } /* if 0x7a078 */
        return new (MovieClip).MovieClip(clipPtr);
};
        static getNaviHeight () {
        return PopupBase_getNaviHeight((this).instance);
};
        static fadeOut () {
        if (!(this).disposed) {
            if ((this).closing) {
                return;
            } /* if 0x7a0e2 */
        } /* if 0x7a0df */
        this.closing = true;
        (this).releaseInputField();
        return;
};
        static close () {
        return;
};
        static closeWithKeyboard () {
        return;
};
        static goBack () {
        if (!(this).disposed) {
            if ((this).closing) {
                return;
            } /* if 0x7a1b1 */
        } /* if 0x7a1ae */
        this.closing = true;
        (this).releaseInputField();
        return;
};
        static closeAllPopups () {
        if (!(this).disposed) {
            if ((this).closing) {
                return;
            } /* if 0x7a23a */
        } /* if 0x7a237 */
        this.closing = true;
        (this).releaseInputField();
        return;
};
        static adjustPopupHeaderButtons (buttonPrefix) {
    var backButton, homeButton;
        backButton = new (GameButton).GameButton((((this).instance).add(((PopupBase).fields).ButtonBack)).readPointer());
        (backButton).setCustomButtonListener(((this).backButtonPressed).bind(this), ("").concat(buttonPrefix, "_back_button"));
        homeButton = new (GameButton).GameButton((((this).instance).add(((PopupBase).fields).ButtonHome)).readPointer());
        return;
};
        static closeButtonPressed (self, button) {
        return;
};
        static backButtonPressed (self, button) {
        return;
};
        static homeButtonPressed (self, button) {
        return;
};
        static onDestructed () {
        return;
};
        static dispose () {
        if ((this).disposed) {
            return;
        } /* if 0x7a43c */
        this.disposed = true;
        (this).releaseInputField();
        return;
};
        static get isDisposed () {
        return (this).disposed;
};
        static releaseInputField () {
    var field;
        field = (this).ownedInputField;
        this.ownedInputField = undefined;
        if (((field) == null)) {
        } /* if 0x7a4b7 */
        /* jump -> 0x7a4bf */
        return;
};
        static update (deltaTime) {
        if (!(this).disposed) {
            if (!((this).instance).isNull()) {
                ((this).instance).isNull();
                if ((this).isDestructed()) {
                    return;
                } /* if 0x7a50c */
            } /* if 0x7a509 */
        } /* if 0x7a509 */
        return;
};
        static updateElements (deltaTime) {
        return;
};
        static setDisallowModalTap (state) {
        return;
};
        static setInputField (field) {
        if (((this).ownedInputField === field)) {
            return;
        } /* if 0x7a598 */
        (this).releaseInputField();
        this.ownedInputField = field;
        return;
};
        static getInputField () {
        return (this).ownedInputField;
};
        <class_fields_init> = undefined;
        PopupBase;
        class PopupBase extends <class_fields_init> = (DropGUIContainer).DropGUIContainer {
            constructor (instanceOrFileName, exportName, a4, a5) {
    var backgroundFileName, backgroundExportName, headerExportName, instanceOrFileName, exportName, a4, a5, backgroundFileName, backgroundExportName, headerExportName, inst, error, this.active_func, new.target;
        inst = /*special:2*/;
        error = /*special:3*/;
        backgroundFileName = instanceOrFileName;
        backgroundExportName = exportName;
        headerExportName = a4;
        instanceOrFileName = a5;
        if (((backgroundFileName) === undefined)) {
            exportName = backgroundFileName = "";
        } /* if 0x79e8f */
        if (((backgroundExportName) === undefined)) {
            a4 = backgroundExportName = "";
        } /* if 0x79e9d */
        if (((headerExportName) === undefined)) {
            a5 = headerExportName = "";
        } /* if 0x79eab */
        if ((typeof instanceOrFileName === "string")) {
        } /* if 0x79ecf */
        /* jump -> 0x79ed0 */
        backgroundFileName = instanceOrFileName;
        headerExportName = super(backgroundFileName);
        if (<class_fields_init>) {
        } /* if 0x79eee */
        headerExportName.disposed = false;
        headerExportName.closing = false;
        if ((typeof instanceOrFileName === "string")) {
            if ((!exportName)) {
                backgroundExportName = ("PopupBase::ctor: ").concat(exportName, " is not defined!");
                ((EDebugger).EDebugger).addMessage(((EDebugger).EDebugger).ERROR, backgroundExportName);
                ((Logcat).Logcat).logError(backgroundExportName);
                return headerExportName;
            } /* if 0x79f64 */
            if (((backgroundFileName) == null)) {
            } /* if 0x79f7c */
            if (((backgroundExportName) == null)) {
            } /* if 0x79f85 */
            if (((headerExportName) == null)) {
            } /* if 0x79f8e */
            ((StringObject).StringObject).withMany([instanceOrFileName, exportName, "", "", "", ""], function (arg0) {
    var fileNameSO, exportNameSO, backgroundFileNameSO, backgroundExportNameSO, headerExportNameSO, emptySO;
        fileNameSO = <null>;
        exportNameSO = <underflow>;
        backgroundFileNameSO = <underflow>;
        backgroundExportNameSO = <underflow>;
        headerExportNameSO = <underflow>;
        emptySO = <underflow>;
        return;
});
            return headerExportName;
        } /* if 0x79f9b (open) */
}
            patch () {
        return;
}
        }
        PopupBase = Libc = PopupBase;
        exports.PopupBase = PopupBase;
        PopupBase.fields = { ButtonsCallback: 128, ButtonClose: 224, ButtonBack: 232, ButtonHome: 240, ListContainer: 440 };
        return;
};

// --------------------- MODULE 6193 — GenericPopup ---------------------


// ============================================================ //
// webpack module 6193  —  GenericPopup
// exports: GenericPopup, GenericPopup_dtor
// deps: 1978 (Libc), 5039 (GameButton), 7535 (StringObject), 8581 (PopupBase), 9878 (Libg)
// ============================================================ //

__webpack_modules__[6193] = function GenericPopup_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, PopupBase, StringObject, GameButton, Libc, GenericPopup_ctor, GenericPopup_buttonClicked, GenericPopup_setTitleTid, GenericPopup_setUpScreenHeader, GenericPopup_addPopupButton, GenericPopup, <class_fields_init>, GenericPopup;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.GenericPopup_dtor = undefined;
        undefined.GenericPopup = exports;
        Libg = __webpack_require__(9878);
        PopupBase = __webpack_require__(8581);
        StringObject = __webpack_require__(7535);
        GameButton = __webpack_require__(5039);
        Libc = __webpack_require__(1978);
        GenericPopup_ctor = new NativeFunction(((Libg).Libg).offset(10195884, 0), "void", ["pointer", "pointer", "int", "int", "pointer", "pointer", "pointer", "pointer", "pointer"]);
        exports.GenericPopup_dtor = ((Libg).Libg).offset(10197344, 0);
        GenericPopup_buttonClicked = new NativeFunction(((Libg).Libg).offset(10199080, 0), "void", ["pointer", "pointer"]);
        GenericPopup_setTitleTid = new NativeFunction(((Libg).Libg).offset(10197092, 0), "void", ["pointer", "pointer"]);
        GenericPopup_setUpScreenHeader = new NativeFunction(((Libg).Libg).offset(10199976, 0), "void", ["pointer"]);
        GenericPopup_addPopupButton = new NativeFunction(((Libg).Libg).offset(10198728, 0), "pointer", ["pointer", "pointer", "int", "pointer"]);
        static buttonPressed (self, customButton) {
        return;
};
        static addPopupButton (exportName, type, text) {
        return ((StringObject).StringObject).withMany([exportName, text], function (arg0) {
    var exportNameStrObj, textStrObj;
        exportNameStrObj = <null>;
        textStrObj = <underflow>;
        return new (GameButton).GameButton(GenericPopup_addPopupButton((this).instance, exportNameStrObj, type, textStrObj));
});
};
        static setTitleTid (titleTid) {
        return;
};
        static setUpScreenHeader () {
        return;
};
        <class_fields_init> = undefined;
        GenericPopup;
        class GenericPopup extends <class_fields_init> = (PopupBase).PopupBase {
            constructor (instanceOrExportName, a3, a4) {
    var backgroundFileName, backgroundExportName, headerExportName, emptyStr, fileName, instanceOrExportName, a3, a4, backgroundFileName, backgroundExportName, headerExportName, emptyStr, fileName, instance, this.active_func, new.target;
        backgroundExportName = /*special:2*/;
        headerExportName = /*special:3*/;
        backgroundFileName = instanceOrExportName;
        backgroundExportName = a3;
        headerExportName = a4;
        if (((backgroundFileName) === undefined)) {
            emptyStr = backgroundFileName = "";
        } /* if 0x77dbd */
        if (((backgroundExportName) === undefined)) {
            fileName = backgroundExportName = "";
        } /* if 0x77dca */
        if (((headerExportName) === undefined)) {
            instanceOrExportName = headerExportName = "";
        } /* if 0x77dd8 */
        if (((emptyStr) === undefined)) {
            a3 = emptyStr = "";
        } /* if 0x77de6 */
        if (((fileName) === undefined)) {
            a4 = fileName = "sc/ui.sc";
        } /* if 0x77df8 */
        if ((instanceOrExportName instanceof NativePointer)) {
            emptyStr = super(instanceOrExportName);
            if (<class_fields_init>) {
            } /* if 0x77e20 */
            return emptyStr;
        } /* if 0x77e26 */
        backgroundFileName = ((Libc).Libc).malloc((GenericPopup).allocationSize);
        ((StringObject).StringObject).withMany([instanceOrExportName, backgroundFileName, backgroundExportName, headerExportName, emptyStr, fileName], function (arg0) {
    var exportNameSO, backgroundFileNameSO, backgroundExportNameSO, headerExportNameSO, emptySO, fileNameSO;
        exportNameSO = <null>;
        backgroundFileNameSO = <underflow>;
        backgroundExportNameSO = <underflow>;
        headerExportNameSO = <underflow>;
        emptySO = <underflow>;
        fileNameSO = <underflow>;
        return;
});
        emptyStr = super(backgroundFileName, instanceOrExportName, a3, a4, backgroundFileName, backgroundExportName, headerExportName);
        if (<class_fields_init>) {
        } /* if 0x77e8a */
        return emptyStr;
}
        }
        GenericPopup = GenericPopup_setUpScreenHeader = GenericPopup;
        exports.GenericPopup = GenericPopup;
        GenericPopup.allocationSize = 664;
        return;
};

// --------------------- MODULE 5027 — GenericInfoPopup ---------------------


// ============================================================ //
// webpack module 5027  —  GenericInfoPopup
// exports: GenericInfoPopup
// deps: 1978 (Libc), 4934 (GUI), 6193 (GenericPopup), 7535 (StringObject), 9878 (Libg)
// ============================================================ //

__webpack_modules__[5027] = function GenericInfoPopup_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, Libc, GenericPopup, StringObject, GUI, GenericInfoPopup_ctor, GenericInfoPopup, <class_fields_init>, GenericInfoPopup;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.GenericInfoPopup = undefined;
        Libg = __webpack_require__(9878);
        Libc = __webpack_require__(1978);
        GenericPopup = __webpack_require__(6193);
        StringObject = __webpack_require__(7535);
        GUI = __webpack_require__(4934);
        GenericInfoPopup_ctor = new NativeFunction(((Libg).Libg).offset(10789328, 0), "void", ["pointer", "pointer", "pointer"]);
        <class_fields_init> = undefined;
        GenericInfoPopup;
        class GenericInfoPopup extends <class_fields_init> = (GenericPopup).GenericPopup {
            constructor (title, body) {
    var popupInstance, this.active_func, new.target;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        popupInstance = ((Libc).Libc).calloc((GenericInfoPopup).allocationSize, 1);
        ((StringObject).StringObject).withMany([title, body], function (arg0) {
    var titleString, bodyString;
        titleString = <null>;
        bodyString = <underflow>;
        return GenericInfoPopup_ctor(popupInstance, titleString, bodyString);
});
        this = super(popupInstance);
        if (<class_fields_init>) {
        } /* if 0x41d03 */
        return this;
}
            show (title, body) {
    var popup;
        popup = new GenericInfoPopup(title, body);
        return;
}
        }
        GenericInfoPopup = GenericInfoPopup = GenericInfoPopup;
        exports.GenericInfoPopup = GenericInfoPopup;
        GenericInfoPopup.allocationSize = 448;
        return;
};

// --------------------- MODULE 7770 — QuestionPopup ---------------------


// ============================================================ //
// webpack module 7770  —  QuestionPopup
// exports: QuestionPopup
// deps: 6193 (GenericPopup)
// ============================================================ //

__webpack_modules__[7770] = function QuestionPopup_factory(__unused_webpack_module, exports, __webpack_require__) {
    var GenericPopup, QuestionPopup, <class_fields_init>, QuestionPopup;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.QuestionPopup = undefined;
        GenericPopup = __webpack_require__(6193);
        <class_fields_init> = undefined;
        QuestionPopup;
        class QuestionPopup extends <class_fields_init> = (GenericPopup).GenericPopup {
            constructor () {
    var title, text, textColor, title, text, textColor, movieClip, okButton, okLabel, closeButton, this.active_func, new.target;
        okButton = /*special:2*/;
        okLabel = /*special:3*/;
        if (((title) === undefined)) {
            title = title = "";
        } /* if 0xb20d8 */
        if (((text) === undefined)) {
            text = text = "";
        } /* if 0xb20e1 */
        textColor = textColor;
        closeButton = super("popup_generic");
        if (<class_fields_init>) {
        } /* if 0xb210e */
        title = (closeButton).getMovieClip();
        closeButton.movieClip = title;
        (title).getMovieClipByName("button_negative").visibility = false;
        (title).getMovieClipByName("button_no").visibility = false;
        (title).getMovieClipByName("button_yes").visibility = false;
        (closeButton).setTitleTid(title);
        closeButton.textTextField = (title).getTextFieldByName("txt");
        (closeButton).textTextField.text = text;
        if ((textColor !== undefined)) {
            (closeButton).textTextField.color = textColor;
        } /* if 0xb21b3 */
        text = (closeButton).addGameButton("button_ok", 1);
        textColor = ((text).getMovieClip()).getTextFieldByName("txt");
        if (textColor) {
            textColor.text = "OK";
        } /* if 0xb21f2 */
        (text).setCustomButtonListener(((closeButton).closeButtonPressed).bind(closeButton));
        movieClip = (closeButton).addGameButton("button_close", 1);
        closeButton.closeButton = movieClip;
        (movieClip).setCustomButtonListener(((closeButton).closeButtonPressed).bind(closeButton));
        return closeButton;
}
        }
        QuestionPopup = QuestionPopup = QuestionPopup;
        exports.QuestionPopup = QuestionPopup;
        return;
};

// --------------------- MODULE 8261 — ListContainerPopup ---------------------


// ============================================================ //
// webpack module 8261  —  ListContainerPopup
// exports: ListContainerPopup, countryPopupListItemVtableAddr
// deps: 1588 (LogicMemory), 1978 (Libc), 2681 (ListContainer), 6193 (GenericPopup), 8581 (PopupBase), 8632 (Stage), 9878 (Libg)
// ============================================================ //

__webpack_modules__[8261] = function ListContainerPopup_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, GenericPopup, ListContainer, Stage, Libc, LogicMemory, PopupBase, countryPopupVtableAddr, themeCrashingOffset, ListContainerPopup, <class_fields_init>, ListContainerPopup;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.countryPopupListItemVtableAddr = undefined;
        undefined.ListContainerPopup = exports;
        Libg = __webpack_require__(9878);
        GenericPopup = __webpack_require__(6193);
        ListContainer = __webpack_require__(2681);
        Stage = __webpack_require__(8632);
        Libc = __webpack_require__(1978);
        LogicMemory = __webpack_require__(1588);
        PopupBase = __webpack_require__(8581);
        countryPopupVtableAddr = ((Libg).Libg).offset(18949880, 0);
        exports.countryPopupListItemVtableAddr = ((Libg).Libg).offset(18633776, 0);
        themeCrashingOffset = ((LogicMemory).LogicMemory).offset(304);
        static refresh () {
    var naviHeight;
        naviHeight = (this).getNaviHeight();
        ((this).container).refreshEntryPositions(4, naviHeight, 8, 0, 0, 0, -1);
        return;
};
        <class_fields_init> = undefined;
        ListContainerPopup;
        class ListContainerPopup extends <class_fields_init> = (GenericPopup).GenericPopup {
            constructor () {
    var popupConfig, popupConfig, exportName, title, emptyString, backgroundFileName, backgroundExportName, movieClip, i, this.active_func, new.target;
        i = /*special:2*/;
        this.active_func = /*special:3*/;
        if (((popupConfig) === undefined)) {
            popupConfig = popupConfig = { ExportName: "country_popup", Title: "POPUP NAME", PopupBackgroundFileName: "", PopupBackgroundExportName: "", CustomBaseAddress: null };
        } /* if 0xb1d2c */
        if ((((popupConfig).ExportName) == null)) {
            popupConfig = "country_popup";
        } /* if 0xb1d52 */
        if ((((popupConfig).Title) == null)) {
            exportName = "POPUP NAME";
        } /* if 0xb1d63 */
        title = "";
        if ((((popupConfig).PopupBackgroundFileName) == null)) {
            emptyString = "";
        } /* if 0xb1d72 */
        if ((((popupConfig).PopupBackgroundExportName) == null)) {
            backgroundFileName = "";
        } /* if 0xb1d80 */
        new.target = super(popupConfig, true, false, emptyString, backgroundFileName, title);
        if (<class_fields_init>) {
        } /* if 0xb1da9 */
        ((LogicMemory).LogicMemory).fillWithZeroes(((new.target).instance).add((((PopupBase).PopupBase).fields).ListContainer), 32);
        if ((((popupConfig).CustomBaseAddress) == null)) {
        } /* if 0xb1dfb */
        ((new.target).instance).writePointer(countryPopupVtableAddr);
        (((new.target).instance).add((((PopupBase).PopupBase).fields).ButtonsCallback)).writePointer(NULL);
        (new.target).setUpScreenHeader();
        backgroundExportName = (new.target).getMovieClip();
        backgroundExportName.y = (((Stage).Stage).getMatrixY() * (-0.5));
        movieClip = ((Libc).Libc).malloc((8 * (Process).pointerSize));
        ((LogicMemory).LogicMemory).fillWithZeroes(movieClip, (8 * (Process).pointerSize));
        new.target.container = new (ListContainer).ListContainer(backgroundExportName, 1, 3, 2, title, (movieClip).add(8));
        ((Libc).Libc).free(movieClip);
        (((new.target).instance).add((((PopupBase).PopupBase).fields).ListContainer)).writePointer(((new.target).container).instance);
        (new.target).setTitleTid(exportName);
        (((new.target).instance).add(themeCrashingOffset)).writeU8(0);
        return new.target;
}
        }
        ListContainerPopup = themeCrashingOffset = ListContainerPopup;
        exports.ListContainerPopup = ListContainerPopup;
        ListContainerPopup.allocationSize = 448;
        return;
};

