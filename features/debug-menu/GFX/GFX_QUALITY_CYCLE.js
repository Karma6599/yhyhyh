//============================================================================//
// DEBUG MENU BUTTON: GFX_QUALITY_CYCLE
// In-game label: "GFX_QUALITY_CYCLE"
// Menu: Debug Menu → GFX category
// Visibility: always visible
// Action: client-side handler in DebugCallbacks (menu/debug-tools.js#1390)
// Cycles GfxQualityLevel through GfxDebugKnobs (module 2658); see also MEM_QUALITY_CYCLE and the 'Use low resolution graphics' toggle.
// Spec source: menu/debug-menu.js (module 6242 DebugButtonSpecs)
//============================================================================//

// Button spec (verbatim from DebugButtonSpecs):
//   { label: "GFX_QUALITY_CYCLE", category: ((DebugMenuCategory).EDebugCategory).GFX }
// --------------------- MODULE 2658 — GfxDebugKnobs ---------------------


// ============================================================ //
// webpack module 2658  —  GfxDebugKnobs
// exports: GfxDebugKnobs
// deps: 699 (FileManager), 4009 (Config), 4934 (GUI), 8775 (GameMain)
// ============================================================ //

__webpack_modules__[2658] = function GfxDebugKnobs_factory(__unused_webpack_module, exports, __webpack_require__) {
    var GameMain, GUI, Config, FileManager, QUALITY_LABELS, GfxDebugKnobs, <class_fields_init>, GfxDebugKnobs;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.GfxDebugKnobs = undefined;
        GameMain = __webpack_require__(8775);
        GUI = __webpack_require__(4934);
        Config = __webpack_require__(4009);
        FileManager = __webpack_require__(699);
        QUALITY_LABELS = ["Low", "Mid", "High", "Highest"];
        <class_fields_init> = undefined;
        GfxDebugKnobs;
        class GfxDebugKnobs {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0xa0619 (open) */
}
            isLowResAssets () {
        return (((Config).Config).config).UseLowResGraphics;
}
            toggleLowResAssets () {
        ((Config).Config).config.UseLowResGraphics = (!(((Config).Config).config).UseLowResGraphics);
        (this).persistAndApply();
        if ((((Config).Config).config).UseLowResGraphics) {
        } /* if 0xa03fa */
        /* jump -> 0xa03ff */
        return;
}
            getGfxQualityLevel () {
        return (((Config).Config).config).GfxQualityLevel;
}
            cycleGfxCapability () {
        ((Config).Config).config.GfxQualityLevel = (this).nextQualityLevel((((Config).Config).config).GfxQualityLevel);
        (this).persistAndApply();
        return;
}
            getMemQualityLevel () {
        return (((Config).Config).config).MemQualityLevel;
}
            cycleMemCapability () {
        ((Config).Config).config.MemQualityLevel = (this).nextQualityLevel((((Config).Config).config).MemQualityLevel);
        (this).persistAndApply();
        return;
}
            nextQualityLevel (current) {
        return ((current + 1) % QUALITY_LABELS.length);
}
            persistAndApply () {
        ((FileManager).FileManager).updateConfigFile();
        return;
}
        }
        GfxDebugKnobs = v8 = GfxDebugKnobs;
        exports.GfxDebugKnobs = GfxDebugKnobs;
        return;
};

