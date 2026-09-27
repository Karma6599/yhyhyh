var SET_CUSTOM_BACKGROUND_BUTTON = {
    label: "SET_CUSTOM_BACKGROUND",
    category: DebugMenuCategory.EDebugCategory.UTILS,
    mode: "home"
};

var BACKGROUND_CHILD_INDEX = 1;
var STAGED_FILE_BASENAME = "bsd_custom_bg";

class CustomBackground {
    setFromFile(sourcePath) {
        var stagedPath = this.stage(sourcePath);
        if (!stagedPath) {
            return false;
        }
        if (!this.apply(stagedPath)) {
            return false;
        }
        Config.Config.config.CustomThemeName = stagedPath;
        FileManager.FileManager.updateConfigFile();
        return true;
    }

    setFromClipboard() {
        if (!this.stageFromClipboard()) {
            GUI.GUI.showFloaterTextAtDefaultPosition(Localisation.Localisation.getString("CustomBgNoImage"));
            return false;
        }
        if (!this.applyPending()) {
            return false;
        }
        GUI.GUI.showFloaterTextAtDefaultPosition(Localisation.Localisation.getString("CustomBgSet"));
        return true;
    }

    stageFromClipboard() {
        var stagedPath = "".concat(FileManager.FileManager.saveDirPath, "/", STAGED_FILE_BASENAME, ".png");
        this.pendingStagedPath = null;
        if (ClipboardImage.ClipboardImage.readImageTo(stagedPath)) {
            this.pendingStagedPath = stagedPath;
        }
        return this.pendingStagedPath !== null;
    }

    applyPending() {
        var path = this.pendingStagedPath;
        this.pendingStagedPath = null;
        if (path) {
            if (!this.apply(path)) {
                return false;
            }
        }
        Config.Config.config.CustomThemeName = path;
        FileManager.FileManager.updateConfigFile();
        return true;
    }

    onHomeRebuilt() {
        this.current = null;
        return;
    }

    hide() {
        return;
    }

    reapply() {
        if (Config.Config.config.CustomThemeName) {
            this.apply(Config.Config.config.CustomThemeName);
            return;
        }
    }

    discard() {
        this.removeCurrent();
        if (Config.Config.config.CustomThemeName) {
            Config.Config.config.CustomThemeName = "";
            FileManager.FileManager.updateConfigFile();
            return;
        }
    }

    clear() {
        if (!Config.Config.config.CustomThemeName) {
            return;
        }
        this.discard();
        HomeScreen.HomeScreen.relayoutBackground();
        return;
    }

    apply(path) {
        if (!FileManager.FileManager.isFilepath(path)) {
            return false;
        }
        var homeSprite = HomeScreen.HomeScreen.getSprite();
        if (homeSprite.isNull()) {
            return false;
        }
        var themeClip = HomeScreen.HomeScreen.getThemeMovieClip();
        if (themeClip.instance.isNull()) {
            return false;
        }
        this.removeCurrent();
        var image = DownloadedImage.DownloadedImage.fromLocalFile(path, themeClip.instance, true);
        this.coverScreen(image, themeClip);
        homeSprite.addChildAt(image, BACKGROUND_CHILD_INDEX);
        this.current = image;
        return true;
    }

    coverScreen(image, themeClip) {
        var naturalSize = DownloadedImage.DownloadedImage.getNaturalSize(image.instance);
        var coverWidth = Stage.Stage.getBackgroundCoverWidth();
        var coverHeight = Stage.Stage.getBackgroundCoverHeight();
        if (!naturalSize || coverWidth <= 0 || coverHeight <= 0) {
            return;
        }
        var coverScale = Math.max(coverWidth / naturalSize.width, coverHeight / naturalSize.height);
        image.setSize(naturalSize.width * coverScale, naturalSize.height * coverScale);
        return;
    }

    removeCurrent() {
        if (!this.current) {
            return;
        }
        try {
            HomeScreen.HomeScreen.getSprite().removeChild(this.current.instance);
        } catch (e) {
        }
        this.current = null;
        return;
    }

    stage(sourcePath) {
        if (!FileManager.FileManager.isFilepath(sourcePath)) {
            GUI.GUI.showFloaterTextAtDefaultPosition(Localisation.Localisation.getString("CustomBgError"));
            return null;
        }
        if (sourcePath.startsWith(FileManager.FileManager.saveDirPath)) {
            return sourcePath;
        }
        var lower = sourcePath.toLowerCase();
        var extension = "png";
        if (lower.endsWith(".jpg") || lower.endsWith(".jpeg")) {
            extension = "jpg";
        }
        var stagedPath = "".concat(FileManager.FileManager.saveDirPath, "/", STAGED_FILE_BASENAME, ".", extension);
        try {
            var bytes = FileManager.FileManager.readFile(sourcePath, "b");
            if (!bytes || bytes.byteLength === 0) {
                GUI.GUI.showFloaterTextAtDefaultPosition(Localisation.Localisation.getString("CustomBgError"));
                return null;
            }
            FileManager.FileManager.writeToFile(stagedPath, "wb", bytes);
            return stagedPath;
        } catch (e) {
            GUI.GUI.showFloaterTextAtDefaultPosition(Localisation.Localisation.getString("CustomBgError"));
            return null;
        }
    }
}
CustomBackground.current = null;
CustomBackground.pendingStagedPath = null;

function SET_CUSTOM_BACKGROUND_callback() {
    CustomBackground.setFromClipboard();
}
