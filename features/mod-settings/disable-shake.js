// ============================================================= //
// FEATURE: Disable shake
// Config key: DisableShake (default false)
// TID prefix: DisableShake
// Icon: DisableShakeCallback (menu/icons.js, module 2120)
// Wiring: LogicEffectData.patch (game/data-classes.js, module 2567) —
// screen-shake getters return 0 while enabled
// ============================================================= //

Config.configStatic.DisableShake = false;

// Strings ship in the game asset (bsd/internal/localization.json),
// not in the JS localisation overrides:
//   DisableShake_name        = "Disable shake"
//   DisableShake_descEnabled = "When enabled, camera won't shake in a battle (example: using hypercharge)."

function DisableShakeCallback() {
    var iconSprite = new Sprite.Sprite(1);
    var cartoonBallClip = StringTable.StringTable.getMovieClip("sc/emoji_1.sc", "emoji_cartoon_ball");
    var child = cartoonBallClip.getChildById(1);
    child.gotoAndStopFrameIndex(180);
    var deniedClip = StringTable.StringTable.getMovieClip("sc/sprays_1.sc", "spray_denied");
    deniedClip.visibility = true;
    deniedClip.setXY(0, 0);
    deniedClip.scale = 0.75;
    iconSprite.addChild(child);
    iconSprite.addChild(deniedClip);
    return iconSprite;
}

// LogicEffectData natives (module 2567, game/data-classes.js).
// NOTE: the offsets are zeroed in the source repo's own decompile
// (offset(0, 0)) — kept faithful, not invented:
var LogicEffectData_getShakeScreenOwn = new NativeFunction(Libg.Libg.offset(0, 0), "int", ["pointer"]);
var LogicEffectData_getShakeScreenOthers = new NativeFunction(Libg.Libg.offset(0, 0), "int", ["pointer"]);

// Installed by LogicEffectData.patch() — both shake getters are replaced so
// they report "no shake" while the toggle is on. The shakeAllowedCaller /
// shakeOthersAllowed return-address exemptions let whitelisted call sites
// (set by other features) still receive the real values:
var shakeAllowedCaller = null;
var shakeOthersAllowed = null;

function patchDisableShake() {
    Interceptor.replace(LogicEffectData_getShakeScreenOwn, new NativeCallback(function (instance) {
        if (shakeAllowedCaller && !shakeAllowedCaller.equals(this.returnAddress)) {
            return LogicEffectData_getShakeScreenOwn(instance);
        }
        if (Config.Config.config.DisableShake) {
            return 0;
        }
        return LogicEffectData_getShakeScreenOwn(instance);
    }, "int", ["pointer"]));

    Interceptor.replace(LogicEffectData_getShakeScreenOthers, new NativeCallback(function (instance) {
        if (shakeOthersAllowed && !shakeOthersAllowed.equals(this.returnAddress)) {
            return LogicEffectData_getShakeScreenOthers(instance);
        }
        if (Config.Config.config.DisableShake) {
            return 0;
        }
        return LogicEffectData_getShakeScreenOthers(instance);
    }, "int", ["pointer"]));
}
