//============================================================================//
// DEBUG MENU BUTTON: SET_CUSTOM_BACKGROUND
// In-game label: "SET_CUSTOM_BACKGROUND"
// Menu: Debug Menu → UTILS category
// Visibility: home screen only
// Action: client-side handler in DebugCallbacks (menu/debug-tools.js#1390)
// Custom background importer — module 2562; see also the theme engine features/mod-menu/change-theme.js.
// Spec source: menu/debug-menu.js (module 6242 DebugButtonSpecs)
//============================================================================//

// Button spec (verbatim from DebugButtonSpecs):
//   label: "SET_CUSTOM_BACKGROUND", category: ((DebugMenuCategory).EDebugCategory).UTILS }
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

