Config.configStatic.SlowMode = false;

LocalisationOverrides.overrides.en.SlowMode_name = "Slow mode";
LocalisationOverrides.overrides.en.SlowMode_descEnabled = "When enabled, game will slow down (slow-mo effect).";

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

var slowModeAddr = Libg.Libg.offset(19914776, 0);
var GameMain_setSlowMode = Libg.Libg.offset(7725648, 0);

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

function initializeData() {
    var initializers = [
        ["StringTable", function () {
            return StringTable.StringTable.onLanguageSet();
        }],
        ["ThemeSelector", function () {
            return ThemeSelector.ThemeSelectorManager.init();
        }],
        ["LocationData", function () {
            return LogicLocationData.LogicLocationData.applyConfiguredEnvironments();
        }],
        ["SlowMode", function () {
            return applySlowMode(Config.Config.config.SlowMode);
        }]
    ];
    for (var [name, initialize] of initializers) {
        try {
            initialize();
        } catch (error) {
            Logcat.Logcat.logError("Data initialization failed (".concat(name, "): ", error));
        }
    }
}
