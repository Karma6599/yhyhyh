// ============================================================= //
// FEATURE: Disable pin animation
// Config key: DisablePinAnimation (default false)
// TID prefix: DisablePinAnimation
// Icon: DisablePinAnimationCallback (menu/icons.js, module 2120)
// Wiring: popup item (menu/mod-configuration.js, module 6893)
// Implementation: config key only — pin rendering is handled
// natively; no JS consumer in this build's source.
// ============================================================= //

Config.configStatic.DisablePinAnimation = false;

// Strings ship in the game asset (bsd/internal/localization.json),
// not in the JS localisation overrides:
//   DisablePinAnimation_name        = "Disable pin animation"
//   DisablePinAnimation_descEnabled = "When enabled, every pin will become NOT animated."

function DisablePinAnimationCallback() {
    var iconSprite = new Sprite.Sprite(1);
    var grinClip = StringTable.StringTable.getMovieClip("sc/emoji_1.sc", "emoji_grin");
    var stopClip = StringTable.StringTable.getMovieClip("sc/emoji_1.sc", "emoji_stop");
    stopClip.gotoAndStopFrameIndex(209);
    stopClip.scale = 0.65;
    stopClip.x = grinClip.width / 3;
    stopClip.y = grinClip.height / 3.3;
    iconSprite.addChild(grinClip);
    iconSprite.addChild(stopClip);
    return iconSprite;
}
