Config.configStatic.ShowFriendlyRoomOpponents = true;

LocalisationOverrides.overrides.en.ShowFriendlyRoomOpponents_name = "Show opponent brawlers in friendly room";
LocalisationOverrides.overrides.en.ShowFriendlyRoomOpponents_descEnabled = "When enabled, you will be able to see all brawlers your opponents select in friendly room.";

var ShowFriendlyRoomOpponents_DISABLE_CHILDRENS = ["hidden_hero", "icon_roomleader", "invite_player", "invite_pending", "player_dot", "swap_hilite", "slot_off_indicator", "button_slot_switch", "temp_brawler_mode"];
var ShowFriendlyRoomOpponents_skillsChilds = ["star_power_ph", "item_ph", "gear1_ph", "gear2_ph", "overcharge_ph"];

function ShowFriendlyRoomOpponentsCallback() {
    var iconSprite = new Sprite.Sprite(1);
    var clip = StringTable.StringTable.getMovieClip("sc/ui.sc", "member_item_extrasmall");
    ShowFriendlyRoomOpponents_DISABLE_CHILDRENS.forEach(function (e) {
        clip.getChildByName(e).visibility = false;
    });
    MovieClipHelper.MovieClipHelper.replaceChildWithMovieClip(clip, "image_ph", "sc/hero_portraits.sc", "hero_icon_shelly_small");
    ShowFriendlyRoomOpponents_skillsChilds.forEach(function (e) {
        var child = clip.getChildByName(e);
        child.getChildByName("sp_ani").visibility = false;
        if (e === "star_power_ph") {
            MovieClipHelper.MovieClipHelper.replaceChildWithMovieClip(child, "icon_ph", "sc/ui.sc", "icon_sp_shelly_2");
        } else if (e === "item_ph") {
            MovieClipHelper.MovieClipHelper.replaceChildWithMovieClip(child, "icon_ph", "sc/ui.sc", "icon_item_shelly_2");
        } else if (e === "gear1_ph") {
            MovieClipHelper.MovieClipHelper.replaceChildWithMovieClip(child, "icon_ph", "sc/ui.sc", "icon_gear_damage");
            var ph1 = child.getChildByName("icon_ph");
            ph1.gotoAndStopFrameIndex(1);
        } else if (e === "gear2_ph") {
            MovieClipHelper.MovieClipHelper.replaceChildWithMovieClip(child, "icon_ph", "sc/ui.sc", "icon_gear_shield");
            var ph2 = child.getChildByName("icon_ph");
            ph2.gotoAndStopFrameIndex(1);
        } else if (e === "overcharge_ph") {
            MovieClipHelper.MovieClipHelper.replaceChildWithMovieClip(child, "icon_ph", "sc/ui.sc", "icon_overcharge_shelly_1");
            child.getChildByName("notification").visibility = false;
        }
        if (e.includes("gear")) {
            var bg = child.getChildByName("bg_gear");
            bg.gotoAndStopFrameIndex(1);
        }
    });
    var field = clip.getTextFieldByName("name_txt");
    if (field) {
        field.setTextScaleIfNecessary(StringTable.StringTable.getString("TID_RANKED_ENEMY_P1"));
    }
    var statusField = clip.getTextFieldByName("status_txt");
    if (statusField) {
        statusField.setTextScaleIfNecessary(StringTable.StringTable.getString("TID_TEAM_MEMBER_STATUS_READY"));
    }
    clip.scale = 1;
    clip.y = clip.y - 15;
    iconSprite.addChild(clip);
    iconSprite.scale = 0.88;
    return iconSprite;
}
