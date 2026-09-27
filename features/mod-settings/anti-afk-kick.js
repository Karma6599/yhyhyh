// ============================================================= //
// FEATURE: Anti AFK kick
// Config key: AntiAfkKick (default false)
// TID prefix: AntiAfkKick
// Icon: AntiAfkKickCallback (menu/icons.js, module 2120)
// Implementation: config key only — the anti-idle behaviour itself
// is handled natively (no JS consumer in this build's source).
// ============================================================= //

Config.configStatic.AntiAfkKick = false;

LocalisationOverrides.overrides.en.AntiAfkKick_name = "Anti AFK kick";
LocalisationOverrides.overrides.en.AntiAfkKick_descEnabled = "When enabled, you won't be kicked because of being AFK.";
LocalisationOverrides.overrides.ru.AntiAfkKick_name = "Анти-кик за неактивность в бою";
LocalisationOverrides.overrides.ru.AntiAfkKick_descEnabled = "Когда включено: кик за неактивность в бою будет отключен.";

function AntiAfkKickCallback() {
    var iconSprite = new Sprite.Sprite(1);
    var sandyEmote = StringTable.StringTable.getMovieClip("sc/emoji_1.sc", "emoji_sandy");
    var shieldGearIcon = StringTable.StringTable.getMovieClip("sc/ui.sc", "icon_gear_shield");
    var shieldChild = shieldGearIcon.getChildById(2);
    sandyEmote.gotoAndStopFrameIndex(223);
    shieldChild.colorTransform.c1g = 255;
    shieldChild.colorTransform.alpha = 127;
    shieldChild.x = sandyEmote.width / 3;
    shieldChild.y = sandyEmote.height / 3.3;
    shieldChild.scale = 0.5;
    iconSprite.addChild(sandyEmote);
    iconSprite.addChild(shieldChild);
    return iconSprite;
}
