Config.configStatic.EnforceOldFriendsList = false;

LocalisationOverrides.overrides.en.EnforceOldFriendsList_name = "Old friends list";
LocalisationOverrides.overrides.en.EnforceOldFriendsList_descEnabled = "When enabled, game uses the classic friends list layout instead of the new one.";
LocalisationOverrides.overrides.ru.EnforceOldFriendsList_name = "Старый список друзей";
LocalisationOverrides.overrides.ru.EnforceOldFriendsList_descEnabled = "Когда включено: игра будет использовать классический список друзей вместо нового.";

function EnforceOldFriendsListCallback() {
    var mainscreenHudRight = StringTable.StringTable.getMovieClip("sc/ui.sc", "mainscreen_hud_right");
    var naviFriends = mainscreenHudRight.getChildByName("button_navi_friends");
    var friendIcon = naviFriends.getChildById(1);
    friendIcon.scale = 1.25;
    return friendIcon;
}
