// ============================================================= //
// FEATURE: Slow mode
// Config key: SlowMode (default false)
// TID prefix: SlowMode
// Icon: SlowModeCallback (menu/icons.js, module 2120)
// Wiring: GameMain (core/bootstrap.js, module 8775) applies the
// time-scale at data init (LogicDataTables.initializeData,
// game/logic-core.js, module 6139); the debug menu exposes it through
// DebugCallbacks.toggleSlowMode / SLOW_MOTION_4X.
// ============================================================= //

Config.configStatic.SlowMode = false;

// Strings ship in the game asset (bsd/internal/localization.json),
// not in the JS localisation overrides:
//   SlowMode_name        = "Slow mode"
//   SlowMode_descEnabled = "When enabled, game will slow down (slow-mo effect)."

function SlowModeCallback() {
    var iconSprite = new Sprite.Sprite(1);
    var skullClip = StringTable.StringTable.getMovieClip("sc/ui.sc", "skull_atlasgenerator_texture_luminance_alpha");
    var iconGearSpeed = StringTable.StringTable.getMovieClip("sc/ui.sc", "icon_gear_speed");
    var iconSpeedClip = iconGearSpeed.getChildById(2);
    iconSpeedClip.colorTransform.c1r = 255;
    iconSpeedClip.colorTransform.c2r = 255;
    iconSpeedClip.colorTransform.c1g = 0;
    iconSpeedClip.colorTransform.c2g = 0;
    iconSpeedClip.colorTransform.c1b = 0;
    iconSpeedClip.colorTransform.c2b = 0;
    iconSpeedClip.x = skullClip.width / 3;
    iconSpeedClip.y = skullClip.height / 3.3;
    iconSpeedClip.scale = 0.33;
    iconSpeedClip.rotate(180);
    iconSprite.addChild(skullClip);
    iconSprite.addChild(iconSpeedClip);
    return iconSprite;
}

// GameMain (module 8775, core/bootstrap.js) — the time-scale switch:
var slowModeAddr = Libg.Libg.offset(19914776, 0);

function applySlowMode(state) {
    if (state) {
        slowModeAddr.writeU8(1);
    } else {
        slowModeAddr.writeU8(0);
    }
}

function isSlowMode() {
    return slowModeAddr.readU8() !== 0;
}

function toggleSlowMode() {
    Config.Config.config.SlowMode = !isSlowMode();
    applySlowMode(Config.Config.config.SlowMode);
    return Config.Config.config.SlowMode;
}

// Applied at data initialization (module 6139, game/logic-core.js):
//
//     var initializers = [
//         ["StringTable", function () { return StringTable.StringTable.onLanguageSet(); }],
//         ["ThemeSelector", function () { return ThemeSelector.ThemeSelectorManager.init(); }],
//         ["LocationData", function () { return LogicLocationData.LogicLocationData.applyConfiguredEnvironments(); }],
//         ["SlowMode", function () { return GameMain.GameMain.applySlowMode(Config.Config.config.SlowMode); }]
//     ];
//
// Debug menu (menu/debug-tools.js, SLOW_MOTION_4X button):
//
//     toggleSlowMode() {
//         var enabled = GameMain.GameMain.toggleSlowMode();
//         ...
//     }
//     isSlowModeEnabled() {
//         return GameMain.GameMain.isSlowMode();
//     }
