class IconSelectorPopup extends ListContainerPopup.ListContainerPopup {
    constructor() {
        super({ Title: Localisation.Localisation.getString("IconChangerTitle") });
        this.iconList = {};
        this.adjustPopupHeaderButtons("icon_changer_menu");
        var rawList = FileManager.FileManager.readAAsset("bsd/internal/icon_changer_preview/list.json", "r");
        if (!rawList) {
            return this;
        }
        this.iconList = JSON.parse(rawList);
        this.refreshItems();
    }

    refreshItems() {
        this.container.clearEntries();
        var iconValues = Object.values(this.iconList);
        var iconIndex = 0;
        while (iconIndex < iconValues.length) {
            var icon = iconValues[iconIndex];
            var iconItem = new IconItem.IconItem(icon);
            iconItem.setCustomButtonListener(this.buttonPressed.bind(this), "" + iconIndex + "_icon_item_button");
            iconItem.id = iconIndex;
            this.container.addEntry(iconItem);
            iconIndex++;
        }
        var naviHeight = this.getNaviHeight();
        this.container.refreshEntryPositions(4, naviHeight, 2, 0, 0, 0, -1);
    }

    buttonPressed(self, button) {
        var iconButton = new GameButton.GameButton(button);
        var iconId = iconButton.id;
        var iconKeys = Object.keys(this.iconList);
        var selectedKey = iconKeys[iconId];
        if (Process.platform === "darwin") {
            return;
        }
        var iconChangerClassId = SafeJNI.SafeJNI.findClass("bsd/suitcase/addons/IconChanger");
        var staticObjectMethodResult = SafeJNI.SafeJNI.callStaticObjectMethodV(iconChangerClassId, "changeIcon", "(Landroid/content/Context;Ljava/lang/String;Ljava/lang/String;)V");
        var iconReferenceUtfStr = SafeJNI.SafeJNI.newStringUTF("com.supercell.brawlstars." + selectedKey);
        var iconsKeysUtfStr = SafeJNI.SafeJNI.newStringUTF(iconKeys.join(";").replace("GameApp;", ""));
        SafeJNI.SafeJNI.callVoidMethod(iconChangerClassId, staticObjectMethodResult, iconsKeysUtfStr, iconReferenceUtfStr);
        GUI.GUI.showFloaterTextAtDefaultPosition(Localisation.Localisation.getString("IconSetText"), 0xffbfff00);
        FPSCounter.FPSCounter.toggle(false);
        EDebugger.EDebugger.clear();
    }

    static open() {
        if (Process.platform === "darwin") {
            if (!AlternateIconManager.isSupported()) {
                GUI.GUI.showFloaterTextAtDefaultPosition(Localisation.Localisation.getString("IconChangerNotSupportediOSDevice"));
                return;
            }
            GUI.GUI.showPopup(new IconSelectorPopup(), true, true, false);
            return;
        }
        var abiList = Libc.Libc.malloc(100);
        Libc.Libc.systemPropertyGet(Memory.allocUtf8String("ro.dalvik.vm.isa.arm"), abiList);
        var isEmulator = false;
        try {
            isEmulator = abiList.readUtf8String().includes("x86");
        } catch (e) {
        }
        Libc.Libc.free(abiList);
        if (isEmulator) {
            return;
        }
        GUI.GUI.showPopup(new IconSelectorPopup(), true, true, false);
    }

    applyIconIOS(selectedKey) {
        var targetIcon = selectedKey;
        if (selectedKey === "CurrentUpdateIcon") {
            targetIcon = AlternateIconManager.getCurrent();
        }
        AlternateIconManager.setIcon(targetIcon);
    }
}

class AlternateIconManager {
    sharedApplication() {
        var UIApplication = ObjC.classes.UIApplication;
        if (!UIApplication) {
            return null;
        }
        var app = UIApplication.sharedApplication();
        if (!app) {
            if (app.isNull()) {
                return null;
            }
        }
        return app;
    }

    isSupported() {
        var app = this.sharedApplication();
        if (!app) {
            return false;
        }
        return Boolean(app.supportsAlternateIcons());
    }

    getCurrent() {
        var app = this.sharedApplication();
        if (!app) {
            return null;
        }
        var name = app.alternateIconName();
        if (!name) {
            if (name.isNull()) {
                return null;
            }
        }
        return name.toString();
    }

    setIcon(iconName, onComplete) {
        if (onComplete === undefined) {
            onComplete = NULL;
        }
        var app = this.sharedApplication();
        if (!app) {
            return;
        }
        app.setAlternateIconName(iconName, onComplete);
    }
}

class IconItem extends GameButton.GameButton {
    constructor(iconPath) {
        super();
        this.instance.writePointer(ListContainerPopup.countryPopupListItemVtableAddr);
        var iconClip = StringTable.StringTable.getMovieClip("sc/ui.sc", "country_item");
        this.setMovieClip(iconClip, 1);
        var ondemandDir = FileManager.FileManager.rootDirPath + "/cache/ondemand/";
        if (!FileManager.FileManager.isFilepath(ondemandDir)) {
            FileManager.FileManager.createDirectory(ondemandDir);
        }
        var iconOndemandPath = ondemandDir + iconPath;
        if (!FileManager.FileManager.isFilepath(iconOndemandPath)) {
            FileManager.FileManager.writeToFile(iconOndemandPath, "wb", FileManager.FileManager.readAAsset("bsd/internal/icon_changer_preview/" + iconPath, "rb"));
        }
        var downloadedImage = new DownloadedImage.DownloadedImage(iconPath, iconClip);
        downloadedImage.setSize(120, 120);
        this.addChild(downloadedImage);
    }
}

class UniItem extends GameButton.GameButton {
    constructor(buttonName, selectedCondition) {
        super();
        this.instance.writePointer(ListContainerPopup.countryPopupListItemVtableAddr);
        var uniMovieClip = StringTable.StringTable.getMovieClip("sc/ui.sc", "country_item");
        this.setMovieClip(uniMovieClip.instance, 1);
        var buttonTextField = uniMovieClip.getTextFieldByName("Text");
        buttonTextField.colorTag = true;
        buttonTextField.setTextScaleIfNecessary(Localisation.Localisation.getString(buttonName));
        if (selectedCondition) {
            uniMovieClip.gotoAndStopFrameIndex(+(!selectedCondition()));
        }
    }

    setText(text) {
        var clip = this.getMovieClip();
        var buttonTextField = clip.getTextFieldByName("Text");
        buttonTextField.setTextScaleIfNecessary(text);
    }
}
