// ============================================================= //
// FEATURE: Use low resolution graphics
// Config key: UseLowResGraphics (default false)
// TID prefix: LowResGraphics
// Icon: LowResGraphicsCallback (menu/icons.js, module 2120)
// Wiring: GameMain.applyGraphicsConfig (core/bootstrap.js, module 8775)
// + GfxDebugKnobs (menu/debug-tools.js, module 2658); the debug menu
// also cycles quality via GFX_QUALITY_CYCLE
// ============================================================= //

Config.configStatic.UseLowResGraphics = false;

// Strings ship in the game asset (bsd/internal/localization.json),
// not in the JS localisation overrides:
//   LowResGraphics_name        = "Use low resolution graphics"
//   LowResGraphics_descEnabled = "When enabled, game will use low resolution textures when possible, which can help increase FPS."

function LowResGraphicsCallback() {
    var mapEditorRemoveBtn = StringTable.StringTable.getMovieClip("sc/ui.sc", "map_editor_remove_button");
    var btn = mapEditorRemoveBtn.getChildByName("button");
    btn.gotoAndStopFrameIndex(1);
    return btn.getChildById(5);
}

// GameMain (module 8775, core/bootstrap.js):
var useOnlyLowresAssetsAddr = Libg.Libg.offset(19854356, 0);
var gfxCapabilityOffset = LogicMemory.LogicMemory.offset(136);
var memoryCapabilityOffset = LogicMemory.LogicMemory.offset(140);

function applyGraphicsConfig() {
    var lowResForced = Config.Config.config.UseLowResGraphics;
    if (lowResForced) {
        useOnlyLowresAssetsAddr.writeU8(1);
    }
    var instance = GameMain.GameMain.getInstance();
    if (instance.isNull()) {
        return;
    }
    if (lowResForced) {
        instance.add(gfxCapabilityOffset).writeS32(0);
        instance.add(memoryCapabilityOffset).writeS32(0);
        return;
    }
    instance.add(gfxCapabilityOffset).writeS32(Config.Config.config.GfxQualityLevel);
    instance.add(memoryCapabilityOffset).writeS32(Config.Config.config.MemQualityLevel);
}

// GfxDebugKnobs (module 2658, menu/debug-tools.js) — the debug-side toggle:
//
//     isLowResAssets() {
//         return Config.Config.config.UseLowResGraphics;
//     }
//     toggleLowResAssets() {
//         Config.Config.config.UseLowResGraphics = !Config.Config.config.UseLowResGraphics;
//         this.persistAndApply();
//         ...
//     }
//
// The quality cycle knob (GFX_QUALITY_CYCLE debug button) walks
// GfxQualityLevel through QUALITY_LABELS = ["Low", "Mid", "High", "Highest"]
// on the same applyGraphicsConfig path.
