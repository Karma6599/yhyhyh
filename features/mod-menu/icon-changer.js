//============================================================================//
// MOD FEATURE: Icon Changer
// In-game name: "Icon Changer"  (TID: IconChangerButton)
// Menu: Mod Menu — Other tab(s) (menu/mod-menu.js#8203)
// App icon selector (iOS-style alternate icons) — disabled on darwin.
//============================================================================//

// --------------------- MODULE 194 — IconSelector ---------------------


// ============================================================ //
// webpack module 194  —  IconSelector
// exports: IconSelectorPopup
// deps: 699 (FileManager), 1027 (IconItem), 1978 (Libc), 4272 (EDebugger), 4934 (GUI), 5039 (GameButton), 5952 (SafeJNI), 7265 (Localisation), 8261 (ListContainerPopup), 9240 (AlternateIconManager), 9786 (FPSCounter)
// ============================================================ //

__webpack_modules__[194] = function IconSelector_factory(__unused_webpack_module, exports, __webpack_require__) {
    var ListContainerPopup, FileManager, Localisation, IconItem, GameButton, SafeJNI, GUI, EDebugger, FPSCounter, AlternateIconManager, Libc, IconSelectorPopup, <class_fields_init>, IconSelectorPopup;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.IconSelectorPopup = undefined;
        ListContainerPopup = __webpack_require__(8261);
        FileManager = __webpack_require__(699);
        Localisation = __webpack_require__(7265);
        IconItem = __webpack_require__(1027);
        GameButton = __webpack_require__(5039);
        SafeJNI = __webpack_require__(5952);
        GUI = __webpack_require__(4934);
        EDebugger = __webpack_require__(4272);
        FPSCounter = __webpack_require__(9786);
        AlternateIconManager = __webpack_require__(9240);
        Libc = __webpack_require__(1978);
        static refreshItems () {
    var iconValues, iconIndex, icon, iconItem, naviHeight;
        ((this).container).clearEntries();
        iconValues = (Object).values((this).iconList);
        iconIndex = 0;
        while ((iconIndex < iconValues.length)) {
            icon = iconValues[iconIndex];
            iconItem = new (IconItem).IconItem(icon);
            (iconItem).setCustomButtonListener(((this).buttonPressed).bind(this), ("").concat(iconIndex, "_icon_item_button"));
            iconItem.id = iconIndex;
            ((this).container).addEntry(iconItem);
            iconIndex = (++iconIndex);
        } /* while 0xc510b */
        naviHeight = (this).getNaviHeight();
        ((this).container).refreshEntryPositions(4, naviHeight, 2, 0, 0, 0, -1);
        return;
};
        static buttonPressed (self, button) {
    var iconButton, iconId, iconKeys, selectedKey, iconChangerClassId, staticObjectMethodResult, iconReferenceUtfStr, iconsKeysUtfStr;
        iconButton = new (GameButton).GameButton(button);
        iconId = (iconButton).id;
        iconKeys = (Object).keys((this).iconList);
        selectedKey = iconKeys[iconId];
        if (((Process).platform === "darwin")) {
            return;
        } /* if 0xc522e */
        iconChangerClassId = ((SafeJNI).SafeJNI).findClass("bsd/suitcase/addons/IconChanger");
        staticObjectMethodResult = ((SafeJNI).SafeJNI).callStaticObjectMethodV(iconChangerClassId, "changeIcon", "(Landroid/content/Context;Ljava/lang/String;Ljava/lang/String;)V");
        iconReferenceUtfStr = ((SafeJNI).SafeJNI).newStringUTF(("com.supercell.brawlstars.").concat(selectedKey));
        iconsKeysUtfStr = ((SafeJNI).SafeJNI).newStringUTF(((iconKeys).join(";")).replace("GameApp;", ""));
        ((SafeJNI).SafeJNI).callVoidMethod(iconChangerClassId, staticObjectMethodResult, iconsKeysUtfStr, iconReferenceUtfStr);
        ((GUI).GUI).showFloaterTextAtDefaultPosition(((Localisation).Localisation).getString("IconSetText"), 4290772736.0);
        ((FPSCounter).FPSCounter).toggle(false);
        ((EDebugger).EDebugger).clear();
        return;
};
        <class_fields_init> = undefined;
        IconSelectorPopup;
        class IconSelectorPopup extends <class_fields_init> = (ListContainerPopup).ListContainerPopup {
            constructor () {
    var rawList, this.active_func, new.target;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        this = super({ Title: ((Localisation).Localisation).getString("IconChangerTitle") });
        if (<class_fields_init>) {
        } /* if 0xc4fad */
        this.iconList = {};
        (this).adjustPopupHeaderButtons("icon_changer_menu");
        rawList = ((FileManager).FileManager).readAAsset("bsd/internal/icon_changer_preview/list.json", "r");
        if ((!rawList)) {
            return this;
        } /* if 0xc4fee */
        this.iconList = (JSON).parse(rawList);
        (this).refreshItems();
        return this;
}
            open () {
    var abiList, isEmulator, e;
        if (((Process).platform === "darwin")) {
            if ((!((AlternateIconManager).AlternateIconManager).isSupported())) {
                return;
            } /* if 0xc4e49 */
            return;
        } /* if 0xc4e64 */
        abiList = ((Libc).Libc).malloc(100);
        ((Libc).Libc).systemPropertyGet((Memory).allocUtf8String("ro.dalvik.vm.isa.arm"), abiList);
        isEmulator = false;
        /* CATCH -> 0xc4ec7 (try region) */
        isEmulator = ((abiList).readUtf8String()).includes("x86");
        ((GUI).GUI).showPopup(new IconSelectorPopup(), true, true, false);
        /* jump -> 0xc4ece */
        e = ((GUI).GUI).showFloaterTextAtDefaultPosition(((Localisation).Localisation).getString("IconChangerNotSupportediOSDevice"));
        /* CATCH -> 0xc4ed0 (try region) */
        abiList = isEmulator = <underflow>;
        /* jump -> 0xc4ece */
        throw <underflow>;
        ((Libc).Libc).free(abiList);
        if (isEmulator) {
            return;
        } /* if 0xc4f0d */
        return;
}
            applyIconIOS (selectedKey) {
    var targetIcon;
        if ((selectedKey === "CurrentUpdateIcon")) {
        } /* if 0xc538b */
        /* jump -> 0xc538c */
        targetIcon = selectedKey;
        return;
}
        }
        IconSelectorPopup = FPSCounter = IconSelectorPopup;
        exports.IconSelectorPopup = IconSelectorPopup;
        return;
};

// --------------------- MODULE 9240 — AlternateIconManager ---------------------


// ============================================================ //
// webpack module 9240  —  AlternateIconManager
// exports: AlternateIconManager
// ============================================================ //

__webpack_modules__[9240] = function AlternateIconManager_factory(__unused_webpack_module, exports) {
    var AlternateIconManager, <class_fields_init>, AlternateIconManager;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.AlternateIconManager = undefined;
        <class_fields_init> = undefined;
        AlternateIconManager;
        class AlternateIconManager {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0xc11ea (open) */
}
            sharedApplication () {
    var UIApplication, app;
        UIApplication = ((ObjC).classes).UIApplication;
        if ((!UIApplication)) {
            return null;
        } /* if 0xc0ee2 */
        app = (UIApplication).sharedApplication();
        if (!(!app)) {
            if ((app).isNull()) {
                return null;
            } /* if 0xc0f05 */
        } /* if 0xc0f01 */
        return app;
}
            isSupported () {
    var app;
        app = (this).sharedApplication();
        if ((!app)) {
            return false;
        } /* if 0xc0f43 */
        return Boolean((app).supportsAlternateIcons());
}
            getCurrent () {
    var app, name;
        app = (this).sharedApplication();
        if ((!app)) {
            return null;
        } /* if 0xc0f95 */
        name = (app).alternateIconName();
        if (!(!name)) {
            if ((name).isNull()) {
                return null;
            } /* if 0xc0fb8 */
        } /* if 0xc0fb4 */
        return (name).toString();
}
            setIcon (iconName) {
    var onComplete, iconName, onComplete, app;
        app = this;
        onComplete = iconName;
        if (((onComplete) === undefined)) {
            iconName = onComplete = onComplete = iconName = <underflow>;
        } /* if 0xc1018 */
        onComplete = (app).sharedApplication();
        if ((!onComplete)) {
            return;
        } /* if 0xc1034 */
        return;
}
        }
        AlternateIconManager = AlternateIconManager = AlternateIconManager;
        exports.AlternateIconManager = AlternateIconManager;
        return;
};

// --------------------- MODULE 1027 — IconItem ---------------------


// ============================================================ //
// webpack module 1027  —  IconItem
// exports: IconItem
// deps: 699 (FileManager), 5039 (GameButton), 6224 (DownloadedImage), 8261 (ListContainerPopup), 9250 (StringTable)
// ============================================================ //

__webpack_modules__[1027] = function IconItem_factory(__unused_webpack_module, exports, __webpack_require__) {
    var GameButton, ListContainerPopup, StringTable, FileManager, DownloadedImage, IconItem, <class_fields_init>, IconItem;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.IconItem = undefined;
        GameButton = __webpack_require__(5039);
        ListContainerPopup = __webpack_require__(8261);
        StringTable = __webpack_require__(9250);
        FileManager = __webpack_require__(699);
        DownloadedImage = __webpack_require__(6224);
        <class_fields_init> = undefined;
        IconItem;
        class IconItem extends <class_fields_init> = (GameButton).GameButton {
            constructor (iconPath) {
    var iconClip, ondemandDir, iconOndemandPath, downloadedImage, this.active_func, new.target;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        this = super();
        if (<class_fields_init>) {
        } /* if 0xb342b */
        ((this).instance).writePointer((ListContainerPopup).countryPopupListItemVtableAddr);
        iconClip = ((StringTable).StringTable).getMovieClip("sc/ui.sc", "country_item");
        (this).setMovieClip(iconClip, 1);
        ondemandDir = (((FileManager).FileManager).rootDirPath + "/cache/ondemand/");
        if ((!((FileManager).FileManager).isFilepath(ondemandDir))) {
            ((FileManager).FileManager).createDirectory(ondemandDir);
        } /* if 0xb34af */
        iconOndemandPath = (ondemandDir + iconPath);
        if ((!((FileManager).FileManager).isFilepath(iconOndemandPath))) {
            ((FileManager).FileManager).writeToFile(iconOndemandPath, "wb", ((FileManager).FileManager).readAAsset(("bsd/internal/icon_changer_preview/" + iconPath), "rb"));
        } /* if 0xb3500 */
        downloadedImage = new (DownloadedImage).DownloadedImage(iconPath, iconClip);
        (downloadedImage).setSize(120, 120);
        (this).addChild(downloadedImage);
        return this;
}
        }
        IconItem = v8 = IconItem;
        exports.IconItem = IconItem;
        return;
};

// --------------------- MODULE 68 — UniItem ---------------------


// ============================================================ //
// webpack module 68  —  UniItem
// exports: UniItem
// deps: 5039 (GameButton), 7265 (Localisation), 8261 (ListContainerPopup), 9250 (StringTable)
// ============================================================ //

__webpack_modules__[68] = function UniItem_factory(__unused_webpack_module, exports, __webpack_require__) {
    var GameButton, StringTable, Localisation, ListContainerPopup, UniItem, <class_fields_init>, UniItem;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.UniItem = undefined;
        GameButton = __webpack_require__(5039);
        StringTable = __webpack_require__(9250);
        Localisation = __webpack_require__(7265);
        ListContainerPopup = __webpack_require__(8261);
        static setText (text) {
    var clip, buttonTextField;
        clip = (this).getMovieClip();
        buttonTextField = (clip).getTextFieldByName("Text");
        return;
};
        <class_fields_init> = undefined;
        UniItem;
        class UniItem extends <class_fields_init> = (GameButton).GameButton {
            constructor (buttonName, selectedCondition) {
    var uniMovieClip, buttonTextField, this.active_func, new.target;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        this = super();
        if (<class_fields_init>) {
        } /* if 0xb6037 */
        ((this).instance).writePointer((ListContainerPopup).countryPopupListItemVtableAddr);
        uniMovieClip = ((StringTable).StringTable).getMovieClip("sc/ui.sc", "country_item");
        (this).setMovieClip((uniMovieClip).instance, 1);
        buttonTextField = (uniMovieClip).getTextFieldByName("Text");
        buttonTextField.colorTag = true;
        (buttonTextField).setTextScaleIfNecessary(((Localisation).Localisation).getString(buttonName));
        if (selectedCondition) {
        } /* if 0xb60ca */
        /* jump -> 0xb60cb */
        (+(!selectedCondition()))(1);
        return this;
}
        }
        UniItem = v8 = UniItem;
        exports.UniItem = UniItem;
        return;
};

