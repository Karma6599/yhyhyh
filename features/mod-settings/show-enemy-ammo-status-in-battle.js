Config.configStatic.ShowEnemyAmmoStatus = true;

LocalisationOverrides.overrides.en.ShowEnemyAmmoStatus_name = "Show enemy ammo status in battle";
LocalisationOverrides.overrides.en.ShowEnemyAmmoStatus_descEnabled = "When enabled, enemy ammo status (orange bars) will be displayed in battle.";

function ShowEnemyAmmoStatusCallback() {
    var iconSprite = new Sprite.Sprite(1);
    var enemyInfoBadgeClip = StringTable.StringTable.getMovieClip("sc/ui.sc", "enemy_info_badge");
    var reloadClip = enemyInfoBadgeClip.getChildByName("reload_own");
    var shellyClip = StringTable.StringTable.getMovieClip("sc/emoji_1.sc", "emoji_shelly_angry");
    shellyClip.y = 20;
    shellyClip.scale = 1.8;
    reloadClip.visibility = true;
    reloadClip.y = -40;
    reloadClip.scale = 1.1;
    for (var i = 1; i <= 3; i++) {
        var attackChild = reloadClip.getChildByName("attack_" + i);
        if (i === 1) {
            attackChild.gotoAndStopFrameIndex(38);
        } else {
            attackChild.gotoAndStopFrameIndex(0);
        }
        var child = attackChild.getChildById(1);
        child.visibility = false;
    }
    shellyClip.gotoAndStopFrameIndex(99);
    iconSprite.addChild(shellyClip);
    iconSprite.addChild(reloadClip);
    return iconSprite;
}
