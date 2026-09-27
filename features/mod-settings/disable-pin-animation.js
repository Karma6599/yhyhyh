Config.configStatic.DisablePinAnimation = false;

LocalisationOverrides.overrides.en.DisablePinAnimation_name = "Disable pin animation";
LocalisationOverrides.overrides.en.DisablePinAnimation_descEnabled = "When enabled, every pin will become NOT animated.";

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
