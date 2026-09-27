// ============================================================= //
// FEATURE: Friend list optimization
// Config key: FriendListOptimization (default false)
// TID prefix: FriendListOptimization
// Icon: FriendListOptimizationCallback (menu/icons.js, module 2120)
// Implementation: config key only — friend icon rendering is
// handled natively; no JS consumer in this build's source.
// ============================================================= //

Config.configStatic.FriendListOptimization = false;

// Strings ship in the game asset (bsd/internal/localization.json),
// not in the JS localisation overrides:
//   FriendListOptimization_name        = "Friend list optimization"
//   FriendListOptimization_descEnabled = "When enabled, friend icons won't be rendered."

function FriendListOptimizationCallback() {
    var iconSprite = new Sprite.Sprite(1);
    var mainscreenHudRight = StringTable.StringTable.getMovieClip("sc/ui.sc", "mainscreen_hud_right");
    var naviFriends = mainscreenHudRight.getChildByName("button_navi_friends");
    var friendIcon = naviFriends.getChildById(1);
    var iconGearSpeed = StringTable.StringTable.getMovieClip("sc/ui.sc", "icon_gear_speed");
    var iconSpeedClip = iconGearSpeed.getChildById(2);
    friendIcon.scale = 1.25;
    iconSpeedClip.x = friendIcon.width / 3;
    iconSpeedClip.y = friendIcon.height / 4.1;
    iconSpeedClip.scale = 0.9;
    iconSpeedClip.colorTransform.g = 255;
    iconSprite.addChild(friendIcon);
    iconSprite.addChild(iconSpeedClip);
    iconSprite.scale = 1.35;
    return iconSprite;
}
