// =============================================================
// POPUP FRAMEWORK
// merged webpack modules: 8581 PopupBase, 6193 GenericPopup, 5027 GenericInfoPopup, 7770 QuestionPopup, 8261 ListContainerPopup, 6012 InputPopup, 6270 InputItemsPopup
// =============================================================

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

// --------------------- MODULE 6012 — InputPopup ---------------------

// ============================================================ //
// webpack module 6012  —  InputPopup
// exports: EInputPopupType, InputPopup
// deps: 211 (TextFieldHelper), 275 (FamePopup), 567 (GiveByGlobalId), 612 (MovieClip), 699 (FileManager), 1588 (LogicMemory), 2141 (TSChaCha20), 2556 (BSDPlusManager), 2598 (BSDSetTitleMessage), 3380 (Logcat), 4009 (Config), 4111 (SharedReplay), 4272 (EDebugger), 4541 (HashTagCodeGenerator), 4934 (GUI), 5039 (GameButton), 5200 (AllianceManager), 5281 (BSDMessageManager), 6193 (GenericPopup), 6761 (StartSCUtilsSpectateMessage) ...
// ============================================================ //

__webpack_modules__[6012] = function InputPopup_factory(__unused_webpack_module, exports, __webpack_require__) {
    var GenericPopup, GameInputField, Localisation, Config, FileManager, GameMain, HashTagCodeGenerator, GUI, PlayerInfo, AllianceManager, MovieClip, GameButton, LogicMemory, CustomTextEncoder, EDebugger, BSDMessageManager, LinkBSDPlusMessage, BSDApi, TSChaCha20, TextFieldHelper, BSDSetTitleMessage, index, GiveByGlobalId, StringObject, HomeScreen, FamePopup, SharedReplay, StartSCUtilsSpectateMessage, Logcat, BSDPlusManager, BSDPlusManagementPopup, popupMovieClipOffset_, popupMovieClipOffset, EInputPopupType, InputPopup, <class_fields_init>, InputPopup;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.EInputPopupType = undefined;
        undefined.InputPopup = exports;
        GenericPopup = __webpack_require__(6193);
        GameInputField = __webpack_require__(8674);
        Localisation = __webpack_require__(7265);
        Config = __webpack_require__(4009);
        FileManager = __webpack_require__(699);
        GameMain = __webpack_require__(8775);
        HashTagCodeGenerator = __webpack_require__(4541);
        GUI = __webpack_require__(4934);
        PlayerInfo = __webpack_require__(9518);
        AllianceManager = __webpack_require__(5200);
        MovieClip = __webpack_require__(612);
        GameButton = __webpack_require__(5039);
        LogicMemory = __webpack_require__(1588);
        CustomTextEncoder = __webpack_require__(9724);
        EDebugger = __webpack_require__(4272);
        BSDMessageManager = __webpack_require__(5281);
        LinkBSDPlusMessage = __webpack_require__(7508);
        BSDApi = __webpack_require__(7474);
        TSChaCha20 = __webpack_require__(2141);
        TextFieldHelper = __webpack_require__(211);
        BSDSetTitleMessage = __webpack_require__(2598);
        index = __webpack_require__(8156);
        GiveByGlobalId = __webpack_require__(567);
        StringObject = __webpack_require__(7535);
        HomeScreen = __webpack_require__(8569);
        FamePopup = __webpack_require__(275);
        SharedReplay = __webpack_require__(4111);
        StartSCUtilsSpectateMessage = __webpack_require__(6761);
        Logcat = __webpack_require__(3380);
        BSDPlusManager = __webpack_require__(2556);
        BSDPlusManagementPopup = __webpack_require__(7906);
        popupMovieClipOffset_ = ((LogicMemory).LogicMemory).offset(144);
        popupMovieClipOffset = ((LogicMemory).LogicMemory).offset(416);
        if (!EInputPopupType) {
            exports.EInputPopupType = PlayerInfo = {};
        } /* if 0xc5bf6 */
        PlayerInfo = {}(exports);
        static createInputField () {
    var textInputButton, movieClip, textField;
        textInputButton = (this).addPopupButton("team_code_input", 2, "");
        movieClip = (textInputButton).getMovieClip();
        textField = (movieClip).getTextFieldByName("text");
        this.inputField = new (GameInputField).GameInputField(textField, (this).instance);
        ((this).inputField).setScaleTextIfNeeded(true);
        if ((this).isAddSpectatorsPopup()) {
        } /* if 0xc63bf */
        /* jump -> 0xc63c1 */
        (textInputButton).setCustomButtonListener(((this).onInputFieldClicked).bind(this), "input_field_button");
        return;
};
        static onInputFieldClicked (self, button) {
        return;
};
        static buttonPressed (self, button) {
        if (((this).popupType === (EInputPopupType).CHANGE_NAME)) {
            (this).handleChangeNameType();
        } /* if 0xc6477 */
        /* jump -> 0xc6586 */
        if (((this).popupType === (EInputPopupType).OPEN_PROFILE)) {
            (this).handleOpenProfileType();
        } /* if 0xc648e */
        /* jump -> 0xc6586 */
        if (((this).popupType === (EInputPopupType).PLUS_LINK)) {
            (this).handleLinkBSDPlusType();
        } /* if 0xc64a5 */
        /* jump -> 0xc6586 */
        if (((this).popupType === (EInputPopupType).SET_TITLE)) {
            (this).handleSetTitleType();
        } /* if 0xc64bc */
        /* jump -> 0xc6586 */
        if (((this).popupType === (EInputPopupType).GIVE_BY_GLOBAL_ID)) {
            (this).handleGiveByGlobalIdType();
        } /* if 0xc64d3 */
        /* jump -> 0xc6586 */
        if (((this).popupType === (EInputPopupType).GIVE_FROM_CONTAINER_PICK_CONTAINER)) {
            (this).handleGiveFromContainerPickContainer();
        } /* if 0xc64ea */
        /* jump -> 0xc6586 */
        if (((this).popupType === (EInputPopupType).GIVE_FROM_CONTAINER_PICK_ITEM)) {
            (this).handleGiveFromContainerPickItem();
        } /* if 0xc6501 */
        /* jump -> 0xc6586 */
        if (((this).popupType === (EInputPopupType).SPECTATE_FRIEND_BY_TAG)) {
            (this).handleSpectateFriendByTagType();
        } /* if 0xc6517 */
        /* jump -> 0xc6585 */
        if (((this).popupType === (EInputPopupType).JOIN_CLAN_BY_TAG)) {
            (this).handleJoinClanByTagType();
        } /* if 0xc652d */
        /* jump -> 0xc6585 */
        if (((this).popupType === (EInputPopupType).SHOW_FAME)) {
            (this).handleShowFameType();
        } /* if 0xc6543 */
        /* jump -> 0xc6585 */
        if (((this).popupType === (EInputPopupType).WATCH_SHARED_REPLAY)) {
            (this).handleWatchSharedReplayType();
        } /* if 0xc6559 */
        /* jump -> 0xc6585 */
        if (((this).popupType === (EInputPopupType).ADD_SPECTATORS)) {
            (this).handleAddSpectatorsType(false);
        } /* if 0xc6570 */
        /* jump -> 0xc6585 */
        if (((this).popupType === (EInputPopupType).ADD_SPECTATORS_BRAWLTV)) {
            (this).handleAddSpectatorsType(true);
            return;
        } /* if 0xc6585 (open) */
};
        static handleSpectateFriendByTagType () {
    var tag, playerIdLogicLong;
        tag = ((((this).inputField).getInputText()).trim()).toUpperCase();
        if ((!tag)) {
            return;
        } /* if 0xc660f */
        if ((!(0).every(function (c) {
        return (1).includes(c);
}))) {
            return;
        } /* if 0xc664b */
        playerIdLogicLong = ((HashTagCodeGenerator).HashTagCodeGenerator).convertPlayerTagToLong(tag);
        ((this).inputField).activate(false);
        (this).fadeOut();
        return;
};
        static handleJoinClanByTagType () {
    var tag, clanIdLogicLong, tagStringNative;
        tag = ((((this).inputField).getInputText()).trim()).toUpperCase();
        if ((!tag)) {
            return;
        } /* if 0xc6745 */
        if ((!(0).every(function (c) {
        return (1).includes(c);
}))) {
            return;
        } /* if 0xc6781 */
        clanIdLogicLong = ((HashTagCodeGenerator).HashTagCodeGenerator).convertPlayerTagToLong(tag);
        tagStringNative = ((StringObject).StringObject).createNative(tag);
        ((this).inputField).activate(false);
        (this).fadeOut();
        return;
};
        static handleShowFameType () {
    var fame;
        fame = parseInt((((this).inputField).getInputText()).trim(), 10);
        if (!(!(Number).isFinite(fame))) {
            (!(Number).isFinite(fame));
            if ((fame < 0)) {
                return;
            } /* if 0xc6887 */
        } /* if 0xc6884 */
        ((this).inputField).activate(false);
        (this).fadeOut();
        return;
};
        static handleWatchSharedReplayType () {
    var code;
        code = (((this).inputField).getInputText()).trim();
        if ((!code)) {
            return;
        } /* if 0xc68fe */
        ((this).inputField).activate(false);
        (this).fadeOut();
        return;
};
        static handleAddSpectatorsType (isBrawlTV) {
    var count;
        count = parseInt((((this).inputField).getInputText()).trim(), 10);
        if (!(!(Number).isFinite(count))) {
            (!(Number).isFinite(count));
            if ((count <= 0)) {
                return;
            } /* if 0xc69af */
        } /* if 0xc69ac */
        if ((count > 5000)) {
            return;
        } /* if 0xc69de */
        ((this).inputField).activate(false);
        (this).fadeOut();
        return;
};
        static isAddSpectatorsPopup () {
        if (!((this).popupType === (EInputPopupType).ADD_SPECTATORS)) {
            ((this).popupType === (EInputPopupType).ADD_SPECTATORS);
            return ((this).popupType === (EInputPopupType).ADD_SPECTATORS_BRAWLTV);
        } /* if 0xc6c49 (open) */
};
        static handleChangeNameType () {
        ((Config).Config).config.PlayerNameOverride = ((this).inputField).getInputText();
        ((this).inputField).activate(false);
        ((FileManager).FileManager).updateConfigFile();
        return;
};
        static handleOpenProfileType () {
    var inputText, playerIdLogicLong, playerInfo;
        inputText = ((((this).inputField).getInputText()).trim()).toUpperCase();
        if ((!inputText)) {
            return;
        } /* if 0xc6d35 */
        if ((!(0).every(function (c) {
        return (1).includes(c);
}))) {
            return;
        } /* if 0xc6d71 */
        playerIdLogicLong = ((HashTagCodeGenerator).HashTagCodeGenerator).convertPlayerTagToLong(inputText);
        playerInfo = new (PlayerInfo).PlayerInfo(playerIdLogicLong);
        ((this).inputField).activate(false);
        (this).fadeOut();
        return;
};
        static handleLinkBSDPlusType () {
    var inputText;
        inputText = ((((this).inputField).getInputText()).toLowerCase()).replace(" ", "");
        if (!(!inputText)) {
            if (!(inputText.length < 4)) {
                if ((new RegExp("[^a-z0-9_@]", "\u0002\u0001\u0000#\u0000\u0000\u0000\b\u0006\u0000\u0000\u0000\u0004\u0007õÿÿÿ\u000b\u0000\u0015\u0004\u0000\u0000\u0000/\u0000:\u0000?\u0000[\u0000^\u0000`\u0000ÿÿ\f\u0000\n")).test(inputText)) {
                    /* return_async  */
                } /* if 0xc6ea7 */
            } /* if 0xc6ea3 */
        } /* if 0xc6ea3 */
        (((BSDMessageManager).BSDMessageManager).sendMessage(new (LinkBSDPlusMessage).LinkBSDPlusMessage(inputText))).then(function (response) {
    var parsedResponseData, chaCha20, decryptedResponse, parsedResponse, isValid, popup, locale;
        if (((response).statusCode !== 200)) {
            return;
        } /* if 0xc6fc6 */
        parsedResponseData = (response).json;
        chaCha20 = new (TSChaCha20).TSChaCha20(((TSChaCha20).TSChaCha20).key, ((TSChaCha20).TSChaCha20).nonce);
        decryptedResponse = ((CustomTextEncoder).CustomTextEncoder).decode((chaCha20).decrypt(new Uint8Array(((BSDMessageManager).BSDMessageManager).escapedStringToBytes((parsedResponseData).data))));
        parsedResponse = (JSON).parse(decryptedResponse);
        isValid = ((BSDMessageManager).BSDMessageManager).validateMessage(parsedResponse);
        if ((!isValid)) {
            return;
        } /* if 0xc705e */
        if (((parsedResponse).status === "ok")) {
            if (((parsedResponse).reason === "successfully_linked")) {
                (this).closeWithKeyboard();
                ((GUI).GUI).pushFloaterTextToQueue(((Localisation).Localisation).getString("BSDPlusSuccessfullyLinked"));
                if ((parsedResponse).telegram) {
                    (BSDPlusManager).BSDPlusManager.telegramData = (parsedResponse).telegram;
                    popup = ((GUI).GUI).getPopupByConstructpr((BSDPlusManagementPopup).BSDPlusManagementPopup);
                    if (popup) {
                        (popup).onAccountLinked();
                    } /* if 0xc7136 */
                } /* if 0xc7136 */
            } /* if 0xc710a */
            /* jump -> 0xc7136 */
            if (((BSDPlusManager).BSDPlusManager === "notify_has_been_sent")) {
                ((GUI).GUI).pushFloaterTextToQueue(((Localisation).Localisation).getString("BSDPlusSentLinkRequest"));
            } /* if 0xc7136 */
        } /* if 0xc713c */
        /* jump -> 0xc719b */
        if ((popup = (parsedResponse).reason === "error")) {
            if (((((BSDApi).BSDApi).RESPONSE_TO_LOCALE[(parsedResponse).reason]) == null)) {
                locale = "Unknown error";
            } /* if 0xc716d */
            if ((!locale)) {
                return;
            } /* if 0xc7176 */
            ((GUI).GUI).pushFloaterTextToQueue(((Localisation).Localisation).getString(locale));
            locale = (parsedResponse).reason;
            return;
        } /* if 0xc719b (open) */
});
        /* return_async  */
};
        static handleGiveByGlobalIdType () {
    var text, globalId;
        text = (((this).inputField).getInputText()).trim();
        globalId = parseInt(text, 10);
        if (!(!(Number).isFinite(globalId))) {
            (!(Number).isFinite(globalId));
            if ((globalId <= 0)) {
                return;
            } /* if 0xc722f */
        } /* if 0xc722c */
        ((this).inputField).activate(false);
        (this).fadeOut();
        return;
};
        static handleGiveFromContainerPickContainer () {
    var text, containerId;
        text = (((this).inputField).getInputText()).trim();
        containerId = parseInt(text, 10);
        if (!(!(Number).isFinite(containerId))) {
            (!(Number).isFinite(containerId));
            if ((containerId < 0)) {
                return;
            } /* if 0xc72e2 */
        } /* if 0xc72df */
        ((this).inputField).activate(false);
        (this).fadeOut();
        ((GiveByGlobalId).GiveByGlobalId).rememberContainerId(containerId);
        return;
};
        static handleGiveFromContainerPickItem () {
    var text, globalId;
        text = (((this).inputField).getInputText()).trim();
        globalId = parseInt(text, 10);
        if (!(!(Number).isFinite(globalId))) {
            (!(Number).isFinite(globalId));
            if ((globalId <= 0)) {
                return;
            } /* if 0xc73a7 */
        } /* if 0xc73a4 */
        ((this).inputField).activate(false);
        (this).fadeOut();
        return;
};
        static handleSetTitleType () {
    var title;
        title = ((this).inputField).getInputText();
        (((BSDMessageManager).BSDMessageManager).sendMessage(new (BSDSetTitleMessage).BSDSetTitleMessage(title))).then(function (response) {
    var parsedResponseData, chaCha20, decryptedResponse, parsedResponse, locale;
        if (((response).statusCode !== 200)) {
            return;
        } /* if 0xc7509 */
        parsedResponseData = (response).json;
        chaCha20 = new (TSChaCha20).TSChaCha20(((TSChaCha20).TSChaCha20).key, ((TSChaCha20).TSChaCha20).nonce);
        decryptedResponse = ((CustomTextEncoder).CustomTextEncoder).decode((chaCha20).decrypt(new Uint8Array(((BSDMessageManager).BSDMessageManager).escapedStringToBytes((parsedResponseData).data))));
        parsedResponse = (JSON).parse(decryptedResponse);
        (index).LogInfo((JSON).stringify(parsedResponse));
        if (((parsedResponse).status === "ok")) {
            ((GUI).GUI).pushFloaterTextToQueue(((Localisation).Localisation).getString("CustomTitleSuccessfullySet"));
        } /* if 0xc75d9 */
        /* jump -> 0xc76d4 */
        if (((parsedResponse).status === "error")) {
            if ((locale = (parsedResponse).reason === "too_long_title")) {
                ((GUI).GUI).pushFloaterTextToQueue(((Localisation).Localisation).getString("CustomTitleTooLongTitle"));
            } /* if 0xc7622 */
            /* jump -> 0xc76d3 */
            if ((locale = (parsedResponse).reason === "illegal_symbols")) {
                ((GUI).GUI).pushFloaterTextToQueue(((Localisation).Localisation).getString("CustomTitleIllegalSymbols"));
            } /* if 0xc7654 */
            /* jump -> 0xc76d3 */
            if ((locale = (parsedResponse).reason === "bad_request")) {
                ((GUI).GUI).pushFloaterTextToQueue(((Localisation).Localisation).getString("CustomTitleBadRequest"));
            } /* if 0xc7685 */
            /* jump -> 0xc76d2 */
            if (((((BSDApi).BSDApi).RESPONSE_TO_LOCALE[(parsedResponse).reason]) == null)) {
                locale = "Unknown error";
            } /* if 0xc76a5 */
            if ((!locale)) {
                return;
            } /* if 0xc76ae */
            ((GUI).GUI).pushFloaterTextToQueue(((Localisation).Localisation).getString(locale));
            locale = (parsedResponse).reason;
            return;
        } /* if 0xc76d6 (open) */
});
        return;
};
        static updateElements (deltaTime) {
        if ((!(((this).inputField).instance).isNull())) {
            ((this).inputField).update(deltaTime);
            return;
        } /* if 0xc7736 (open) */
};
        <class_fields_init> = undefined;
        InputPopup;
        class InputPopup extends <class_fields_init> = (GenericPopup).GenericPopup {
            constructor (type) {
    var button, popupMovieClip, closeButton, inputArea, hintTextField, inputArea, hintTextField, this.active_func, new.target;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        this = super("gameroom_joincode_popup", false, false, "", "", "");
        if (<class_fields_init>) {
        } /* if 0xc6056 */
        this.popupType = type;
        (this).setTitleTid(((Localisation).Localisation).getString((InputPopup).POPUP_NAMES[type]));
        button = (this).addPopupButton("join_button", 1, ((Localisation).Localisation).getString((InputPopup).CONFIRM_BUTTON_TEXTS[type]));
        (button).setCustomButtonListener(((this).buttonPressed).bind(this), "input_confirm_button");
        popupMovieClip = new (MovieClip).MovieClip((((((this).instance).add(popupMovieClipOffset)).readPointer()).add(popupMovieClipOffset_)).readPointer());
        closeButton = new (GameButton).GameButton(((popupMovieClip).getChildByName("close_button")).instance);
        (closeButton).setCustomButtonListener(((this).closeWithKeyboard).bind(this));
        (this).createInputField();
        if (((InputPopup).POPUP_NAMES[type] === "VisualNameChange")) {
            inputArea = ((this).getMovieClip()).getChildByName("team_code_input");
            hintTextField = ((TextFieldHelper).TextFieldHelper).createTextTextField();
            hintTextField.x = (((inputArea).x / 2) - 150);
            hintTextField.y = ((inputArea).y - 55);
            hintTextField.fontOutline = true;
            hintTextField.fontSize = 16;
            hintTextField.color = 4294967295.0;
            hintTextField.text = ((Localisation).Localisation).getString("VisualChangeNameResetHint");
            ((this).getMovieClip()).addChild(hintTextField);
        } /* if 0xc6222 */
        if (((InputPopup).POPUP_NAMES[type] === "SetTitle")) {
            inputArea = ((this).getMovieClip()).getChildByName("team_code_input");
            hintTextField = ((TextFieldHelper).TextFieldHelper).createTextTextField();
            hintTextField.x = (((inputArea).x / 2) - 150);
            hintTextField.y = ((inputArea).y - 55);
            hintTextField.fontOutline = true;
            hintTextField.fontSize = 16;
            hintTextField.color = 4294967295.0;
            hintTextField.text = ((Localisation).Localisation).getString("VisualChangeTitleResetHint");
            ((this).getMovieClip()).addChild(hintTextField);
            return this;
        } /* if 0xc62e3 (open) */
}
        }
        InputPopup = PlayerInfo = InputPopup;
        exports.InputPopup = InputPopup;
        InputPopup.allocationSize = 768;
        InputPopup.lastTimePressedActiveButton = 0;
        InputPopup.POPUP_NAMES = { 0: "VisualNameChange", 1: "OpenPlayerProfile", 2: "FollowPlayerByTag", 3: "LinkBSDPlusInputFieldTitle", 4: "GetBSDPlusState", 5: "SetTitle", 6: "GiveByGlobalIdInputTitle", 7: "GiveFromContainerPickContainerInputTitle", 8: "GiveFromContainerPickItemInputTitle", 9: "SpectateFriendByTagInputTitle", 10: "JoinClanByTagInputTitle", 11: "ShowFameInputTitle", 12: "WatchSharedReplayInputTitle", 13: "AddSpectatorsInputTitle", 14: "AddSpectatorsBrawlTvInputTitle" };
        InputPopup.CONFIRM_BUTTON_TEXTS = { 0: "VisualNameChangeButton", 1: "OpenPlayerProfileButton", 2: "FollowPlayerByTagButton", 3: "LinkBSDPlusButton", 4: "", 5: "SetTitleButton", 6: "GiveByGlobalIdButton", 7: "GiveFromContainerNextButton", 8: "GiveByGlobalIdButton", 9: "SpectateButton", 10: "JoinClanByTagButton", 11: "ShowFameButton", 12: "WatchSharedReplayButton", 13: "AddSpectatorsButton", 14: "AddSpectatorsButton" };
        return;
};

// --------------------- MODULE 6270 — InputItemsPopup ---------------------

// ============================================================ //
// webpack module 6270  —  InputItemsPopup
// exports: InputItemsPopup
// deps: 1994 (LogicTime), 2556 (BSDPlusManager), 3902 (NativeDialog), 4934 (GUI), 5039 (GameButton), 6012 (InputPopup), 7265 (Localisation), 8261 (ListContainerPopup), 9298 (InputItem)
// ============================================================ //

__webpack_modules__[6270] = function InputItemsPopup_factory(__unused_webpack_module, exports, __webpack_require__) {
    var ListContainerPopup, Localisation, InputPopup, GameButton, InputItem, GUI, BSDPlusManager, NativeDialog, LogicTime, InputItemsPopup, <class_fields_init>, InputItemsPopup;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.InputItemsPopup = undefined;
        ListContainerPopup = __webpack_require__(8261);
        Localisation = __webpack_require__(7265);
        InputPopup = __webpack_require__(6012);
        GameButton = __webpack_require__(5039);
        InputItem = __webpack_require__(9298);
        GUI = __webpack_require__(4934);
        BSDPlusManager = __webpack_require__(2556);
        NativeDialog = __webpack_require__(3902);
        LogicTime = __webpack_require__(1994);
        static refreshItems () {
    var itemData, item, naviHeight;
        ((this).container).clearEntries();
        /* jump -> 0xc57bb */
        itemData = /*iter*/ (this).ITEMS;
        if (!(itemData).disabled) {
            item = new (InputItem).InputItem(itemData);
            (item).setCustomButtonListener(((this).buttonPressed).bind(this), ("").concat((itemData).id, "_input_button"));
            ((this).container).addEntry(item);
        } /* if 0xc57bb */
        } while (!item = (this).ITEMS);
        itemData = naviHeight = <underflow>;
        naviHeight = (this).getNaviHeight();
        ((this).container).refreshEntryPositions(1, (naviHeight * 1.75), 8, 0, 0, 0, -1);
        return;
};
        static buttonPressed (self, button) {
    var inputItem, inputItemId, itemConf;
        inputItem = new (GameButton).GameButton(button);
        inputItemId = (inputItem).id;
        itemConf = ((this).ITEMS).find(function (e) {
        return ((e).id === inputItemId);
});
        if ((itemConf).callback) {
            return;
        } /* if 0xc5896 */
        return;
};
        static getBSDPlusState () {
        if (((BSDPlusManager).BSDPlusManager).EXPIRES_TS) {
        } /* if 0xc5958 */
        /* jump -> 0xc595d */
        return;
};
        <class_fields_init> = undefined;
        InputItemsPopup;
        class InputItemsPopup extends <class_fields_init> = (ListContainerPopup).ListContainerPopup {
            constructor () {
    var this.active_func, new.target;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        this = super({ Title: ((Localisation).Localisation).getString("InputItemsPopup") });
        if (<class_fields_init>) {
        } /* if 0xc5627 */
        this.ITEMS = [{ name: "VisualNameChange", id: ((InputPopup).EInputPopupType).CHANGE_NAME }, { name: "OpenPlayerProfile", id: ((InputPopup).EInputPopupType).OPEN_PROFILE }, { name: "FollowPlayerByTag", id: ((InputPopup).EInputPopupType).FOLLOW_PLAYER, disabled: true }, { name: "LinkBSDPlus", id: ((InputPopup).EInputPopupType).PLUS_LINK }, { name: "BSDPlusState", disabled: true, callback: (this).getBSDPlusState, id: ((InputPopup).EInputPopupType).GET_BSD_PLUS_STATE }];
        (this).adjustPopupHeaderButtons("input");
        (this).refreshItems();
        return this;
}
        }
        InputItemsPopup = LogicTime = InputItemsPopup;
        exports.InputItemsPopup = InputItemsPopup;
        return;
};

