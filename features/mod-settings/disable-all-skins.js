// ============================================================= //
// FEATURE: Disable all skins
// Config key: DisableSkins (default false)
// TID prefix: DisableSkins
// Icon: DisableSkinsCallback (menu/icons.js, module 2120)
// Wiring: LogicDailyData.patch (game/data-classes.js, module 7089) —
// every resolved skin is swapped back to the character's default
// ============================================================= //

Config.configStatic.DisableSkins = false;

LocalisationOverrides.overrides.en.DisableSkins_name = "Disable all skins";
LocalisationOverrides.overrides.en.DisableSkins_descEnabled = "Removes all skins and their related effects.";
LocalisationOverrides.overrides.ru.DisableSkins_name = "Отключить все скины";
LocalisationOverrides.overrides.ru.DisableSkins_descEnabled = "Убирает все скины и соответствующие эффекты.";

function DisableSkinsCallback() {
    var iconSprite = new Sprite.Sprite(1);
    var shellyBrawloweenEmoji = getStaticEmoji(StringTable.StringTable.getMovieClip("sc/emoji_1.sc", "emoji_shelly_brawloween"), 160);
    var shellyEmoji = getStaticEmoji(StringTable.StringTable.getMovieClip("sc/emoji_1.sc", "emoji_shelly"), 61);
    var iconGearSpeed = StringTable.StringTable.getMovieClip("sc/ui.sc", "icon_gear_speed");
    var iconSpeedClip = iconGearSpeed.getChildById(2);
    shellyEmoji.x = shellyEmoji.width / 2.5;
    shellyEmoji.y = shellyEmoji.height / 2.5 + 8.7;
    shellyBrawloweenEmoji.x = -(shellyEmoji.width / 2.5);
    shellyBrawloweenEmoji.y = -(shellyEmoji.height / 2.5) + 6.7;
    iconSpeedClip.colorTransform.r = 255;
    iconSpeedClip.colorTransform.g = 255;
    iconSpeedClip.colorTransform.b = 255;
    iconSpeedClip.scale = 0.7;
    iconSpeedClip.y = iconSpeedClip.y + 2;
    iconSprite.addChild(shellyBrawloweenEmoji);
    iconSprite.addChild(shellyEmoji);
    iconSprite.addChild(iconSpeedClip);
    iconSprite.y = iconSprite.y + 25;
    return iconSprite;
}

// LogicDailyData native (module 7089, game/data-classes.js):
var LogicDailyData_getSkin = new NativeFunction(Libg.Libg.offset(16100244, 0), "pointer", ["pointer", "pointer", "pointer"]);

// Installed by LogicDailyData.patch() — the skin resolution hook.
// The SkinSelector part of the same hook belongs to the skin-changer feature
// (features/mod-menu/skin-changer.js); only the DisableSkins branch is ours:
//
//     Interceptor.attach(LogicDailyData_getSkin, {
//         onEnter(args) {
//             this.character = new LogicCharacterData.LogicCharacterData(args[2]);
//         },
//         onLeave(retval) {
//             if (Config.Config.config.DisableSkins) {
//                 var defaultSkin = this.character.getDefaultSkin();
//                 if (!defaultSkin.instance.isNull()) {
//                     retval.replace(defaultSkin.instance);
//                 }
//             }
//             ...
//         }
//     });
