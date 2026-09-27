// ============================================================= //
// FEATURE: Hide "BATTLING" status from others
// Config key: HideBattlingStatusFromOthers (default false)
// TID prefix: HideBattlingStatusFromOthers
// Icon: HideBattlingStatusFromOthersCallback (menu/icons.js, module 2120)
// Implementation: config key only — the status update suppression
// is handled natively; no JS consumer in this build's source.
// ============================================================= //

Config.configStatic.HideBattlingStatusFromOthers = false;

// Strings ship in the game asset (bsd/internal/localization.json),
// not in the JS localisation overrides:
//   HideBattlingStatusFromOthers_name = "Hide "BATTLING" status from others"
//   HideBattlingStatusFromOthers_descEnabled = "When enabled, when you enter a battle, your status won't be updated to "BATTLING", making others unable to spectate you."

function HideBattlingStatusFromOthersCallback() {
    var iconSprite = new Sprite.Sprite(1);
    var battleClip = StringTable.StringTable.getMovieClip("sc/ui.sc", "icon_skins_outlaws");
    var deniedClip = StringTable.StringTable.getMovieClip("sc/sprays_1.sc", "spray_denied");
    var ingameHudTopClip = StringTable.StringTable.getMovieClip("sc/ui.sc", "ingame_hud_top");
    var spectateCountChild = ingameHudTopClip.getChildByName("spectate_count");
    var eyeballClip = spectateCountChild.getChildById(1);
    eyeballClip.scale = 0.5;
    eyeballClip.x = battleClip.width / 3;
    eyeballClip.y = battleClip.height / 3.4;
    deniedClip.visibility = true;
    deniedClip.setXY(0, 0);
    deniedClip.scale = 1.1;
    iconSprite.addChild(battleClip);
    iconSprite.addChild(eyeballClip);
    iconSprite.addChild(deniedClip);
    return iconSprite;
}
