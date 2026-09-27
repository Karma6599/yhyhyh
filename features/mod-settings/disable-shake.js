Config.configStatic.DisableShake = false;

LocalisationOverrides.overrides.en.DisableShake_name = "Disable shake";
LocalisationOverrides.overrides.en.DisableShake_descEnabled = "When enabled, camera won't shake in a battle (example: using hypercharge).";

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

var LogicEffectData_getShakeScreenOwn = new NativeFunction(Libg.Libg.offset(0, 0), "int", ["pointer"]);
var LogicEffectData_getShakeScreenOthers = new NativeFunction(Libg.Libg.offset(0, 0), "int", ["pointer"]);
var shakeAllowedCaller = null;
var shakeOthersAllowed = null;

function patchDisableShake() {
    if (Process.platform === "darwin") {
        Interceptor.replace(LogicEffectData_getShakeScreenOwn, new NativeCallback(function (instance) {
            if (shakeAllowedCaller) {
                if (!shakeAllowedCaller.equals(this.returnAddress)) {
                    return LogicEffectData_getShakeScreenOwn(instance);
                }
            }
            if (Config.Config.config.DisableShake) {
                return 0;
            }
            return LogicEffectData_getShakeScreenOwn(instance);
        }, "int", ["pointer"]));
        Interceptor.replace(LogicEffectData_getShakeScreenOthers, new NativeCallback(function (instance) {
            if (shakeOthersAllowed) {
                if (!shakeOthersAllowed.equals(this.returnAddress)) {
                    return LogicEffectData_getShakeScreenOthers(instance);
                }
            }
            if (Config.Config.config.DisableShake) {
                return 0;
            }
            return LogicEffectData_getShakeScreenOthers(instance);
        }, "int", ["pointer"]));
    }
}
