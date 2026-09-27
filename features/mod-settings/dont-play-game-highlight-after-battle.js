Config.configStatic.DoNotShowBattleHighlight = false;

LocalisationOverrides.overrides.en.DoNotShowBattleHighlight_name = "Don't play «Game Highlight» after battle";
LocalisationOverrides.overrides.en.DoNotShowBattleHighlight_descEnabled = "When enabled, the «Game Highlight» will never be played at the end of battle.";

function DoNotShowBattleHighlightCallback() {
    var iconSprite = new Sprite.Sprite(1);
    var chatEntryReplayClip = StringTable.StringTable.getMovieClip("sc/ui.sc", "chat_entry_replay_others");
    var watchButtonClip = chatEntryReplayClip.getChildByName("watch_button");
    var tvChild = watchButtonClip.getChildById(1);
    tvChild.x = 0;
    tvChild.y = 0;
    var iconGearSpeed = StringTable.StringTable.getMovieClip("sc/ui.sc", "icon_gear_speed");
    var iconSpeedClip = iconGearSpeed.getChildById(2);
    iconSpeedClip.colorTransform.c1r = 255;
    iconSpeedClip.colorTransform.c2r = 255;
    iconSpeedClip.colorTransform.c1g = 255;
    iconSpeedClip.colorTransform.c2g = 255;
    iconSpeedClip.x = tvChild.width / 3;
    iconSpeedClip.y = tvChild.height / 3.3;
    iconSpeedClip.scale = 0.33;
    iconSprite.addChild(tvChild);
    iconSprite.addChild(iconSpeedClip);
    return iconSprite;
}
