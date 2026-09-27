var EMOJIS = { emoji_colette: 159, emoji_piper: 72, emoji_bea: 109, emoji_bibi: 109, emoji_crow: 99 };
var ShowFriendlyRoomOpponents_DISABLE_CHILDRENS = ["hidden_hero", "icon_roomleader", "invite_player", "invite_pending", "player_dot", "swap_hilite", "slot_off_indicator", "button_slot_switch", "temp_brawler_mode"];
var ShowFriendlyRoomOpponents_skillsChilds = ["star_power_ph", "item_ph", "gear1_ph", "gear2_ph", "overcharge_ph"];

function VisualChromaticNamePinCallback() {
    return StringTable.getMovieClip("sc/ui.sc", "icon_resource_chromatic_coin");
}

function DisablePinAnimationCallback() {
    var iconSprite = new Sprite(1);
    var grinClip = StringTable.getMovieClip("sc/emoji_1.sc", "emoji_grin");
    var stopClip = StringTable.getMovieClip("sc/emoji_1.sc", "emoji_stop");
    stopClip.gotoAndStopFrameIndex(209);
    stopClip.scale = 0.65;
    stopClip.x = grinClip.width / 3;
    stopClip.y = grinClip.height / 3.3;
    iconSprite.addChild(grinClip);
    iconSprite.addChild(stopClip);
    return iconSprite;
}

function SharedBackgroundCallback() {
    return StringTable.getMovieClip("sc/ui.sc", "icon_skins_city");
}

function RandomThemesCallback() {
    var iconSprite = new Sprite(1);
    var iconBg = SharedBackgroundCallback();
    var iconRandomParent = StringTable.getMovieClip("sc/ui.sc", "event_icon_random");
    var iconRandom = iconRandomParent.getChildById(1);
    iconRandom.x = iconBg.width / 3;
    iconRandom.y = iconBg.height / 3.5;
    iconRandom.scale = 0.7;
    iconSprite.addChild(iconBg);
    iconSprite.addChild(iconRandom);
    return iconSprite;
}

function RandomThemesAfterBattleCallback() {
    var iconSprite = new Sprite(1);
    var iconBg = SharedBackgroundCallback();
    var iconRandomParent = StringTable.getMovieClip("sc/ui.sc", "event_icon_random");
    var iconRandom = iconRandomParent.getChildById(1);
    var battleClip = StringTable.getMovieClip("sc/ui.sc", "icon_skins_outlaws");
    iconRandom.x = iconBg.width / 3;
    iconRandom.y = iconBg.height / 3.5;
    iconRandom.scale = 0.7;
    battleClip.x = -iconRandom.x;
    battleClip.y = -iconRandom.y;
    battleClip.scale = 0.7;
    iconSprite.addChild(iconBg);
    iconSprite.addChild(iconRandom);
    iconSprite.addChild(battleClip);
    return iconSprite;
}

function RandomThemesMusicIndependencyCallback() {
    var iconSprite = new Sprite(1);
    var iconBg = SharedBackgroundCallback();
    var iconRandomParent = StringTable.getMovieClip("sc/ui.sc", "event_icon_random");
    var iconRandom = iconRandomParent.getChildById(1);
    var battleClip = StringTable.getMovieClip("sc/ui.sc", "icon_skins_music");
    iconRandom.x = iconBg.width / 3;
    iconRandom.y = iconBg.height / 3.5;
    iconRandom.scale = 0.7;
    battleClip.x = -iconRandom.x;
    battleClip.y = -iconRandom.y;
    battleClip.scale = 0.7;
    iconSprite.addChild(iconBg);
    iconSprite.addChild(iconRandom);
    iconSprite.addChild(battleClip);
    return iconSprite;
}

function ShowFPSCounterCallback() {
    var iconSprite = new Sprite(1);
    var textField = getTextField();
    textField.fontSize = 12;
    textField.text = "FPS: 120";
    textField.x = -18.5;
    textField.y = -5.5;
    iconSprite.addChild(textField);
    iconSprite.scale = 1.65;
    return iconSprite;
}

function HideHomeScreenTextCallback() {
    var iconSprite = new Sprite(1);
    var textField = getTextField();
    textField.fontSize = 96;
    textField.text = "A";
    var offsetX = -(textField.textWidth / 2);
    var offsetY = -(textField.textHeight / 2);
    textField.x = offsetX;
    textField.y = offsetY;
    var deniedClip = StringTable.getMovieClip("sc/sprays_1.sc", "spray_denied");
    deniedClip.visibility = true;
    deniedClip.setXY(textField.textWidth / 2 + offsetX, textField.textHeight / 2 + offsetY);
    deniedClip.scale = 1.1;
    iconSprite.addChild(textField);
    iconSprite.addChild(deniedClip);
    iconSprite.scale = 1.2;
    return iconSprite;
}

function EnforceOldFriendsListCallback() {
    var mainscreenHudRight = StringTable.getMovieClip("sc/ui.sc", "mainscreen_hud_right");
    var naviFriends = mainscreenHudRight.getChildByName("button_navi_friends");
    var friendIcon = naviFriends.getChildById(1);
    friendIcon.scale = 1.25;
    return friendIcon;
}

function ShowSkinNamesInProfileCallback() {
    var mainscreenCenter = StringTable.getMovieClip("sc/ui.sc", "mainscreen_center");
    var playerArea = mainscreenCenter.getChildByName("player_1_area");
    var buttonSkinSelectorClip = playerArea.getChildByName("button_skin_selector");
    var icon = buttonSkinSelectorClip.getChildByName("icon_skin_selector");
    icon.gotoAndStopFrameIndex(1);
    icon.scale = 1.25;
    return icon;
}

function BattleTextChatCallback() {
    var clip = StringTable.getMovieClip("sc/ui.sc", "team_chat_footer");
    var chatButtonClip = clip.getChildByName("chat_button");
    var battleClip = StringTable.getMovieClip("sc/ui.sc", "icon_skins_outlaws");
    chatButtonClip.scale = 1;
    battleClip.x = chatButtonClip.width / 3;
    battleClip.y = chatButtonClip.height / 3.5;
    battleClip.scale = 0.37;
    chatButtonClip.addChild(battleClip);
    return chatButtonClip;
}

function ShowEnemyAmmoStatusCallback() {
    var iconSprite = new Sprite(1);
    var enemyInfoBadgeClip = StringTable.getMovieClip("sc/ui.sc", "enemy_info_badge");
    var reloadClip = enemyInfoBadgeClip.getChildByName("reload_own");
    var shellyClip = StringTable.getMovieClip("sc/emoji_1.sc", "emoji_shelly_angry");
    shellyClip.y = 20;
    shellyClip.scale = 1.8;
    reloadClip.visibility = true;
    reloadClip.y = -40;
    reloadClip.scale = 1.1;
    var i = 1;
    while (i <= 3) {
        var attackChild = reloadClip.getChildByName("attack_" + i);
        if (i === 1) {
            attackChild.gotoAndStopFrameIndex(38);
        } else {
            attackChild.gotoAndStopFrameIndex(0);
        }
        var child = attackChild.getChildById(1);
        child.visibility = false;
        i++;
    }
    shellyClip.gotoAndStopFrameIndex(99);
    iconSprite.addChild(shellyClip);
    iconSprite.addChild(reloadClip);
    return iconSprite;
}

function ShowTrophiesAboveHeadCallback() {
    var iconSprite = new Sprite(1);
    var trophy = StringTable.getMovieClip("sc/ui.sc", "icon_trophy");
    var trophyClip = StringTable.getMovieClip("sc/ui.sc", "popover_text_left");
    var emojiClip = getRandomStaticDevEmoji();
    var trophyTf = trophyClip.getTextFieldByName("text");
    trophyTf.color = 4294956800.0;
    trophyTf.fontOutline = true;
    trophyTf.text = "50000 | 1000";
    trophyTf.fontSize = 28;
    trophyTf.x = trophyTf.x + -55;
    trophyTf.y = -90;
    trophy.x = -90;
    trophy.y = -75;
    trophy.scale = 0.35;
    emojiClip.scale = 3;
    emojiClip.y = 25;
    iconSprite.addChild(trophy);
    iconSprite.addChild(emojiClip);
    iconSprite.addChild(trophyTf);
    return iconSprite;
}

function ShowCameraButtonCallback() {
    var icon = StringTable.getMovieClip("sc/ui_achievements.sc", "icon_resource_records_point");
    icon.scale = 1.25;
    icon.x = icon.x - 15;
    return icon;
}

function getRandomStaticDevEmoji() {
    var emojis = Object.keys(EMOJIS);
    var selectedEmojiIndex = LogicRandom.random(0, emojis.length - 1);
    var emojiName = emojis[selectedEmojiIndex];
    var stopFrameIndex = EMOJIS[emojiName];
    var clip = StringTable.getMovieClip("sc/emoji_1.sc", emojiName);
    clip.gotoAndStopFrameIndex(stopFrameIndex);
    if (emojiName === "emoji_crow") {
        var child = clip.getChildById(1);
        child.gotoAndStopFrameIndex(stopFrameIndex);
    }
    return clip;
}

function HideUltiAimingCallback() {
    var clip = StringTable.getMovieClip("sc/ui.sc", "ulti_stick");
    var child = clip.getChildById(1);
    clip.gotoAndStopFrameIndex(0);
    child.gotoAndStopFrameIndex(0);
    return clip;
}

function ShowFastPlayAgainButtonCallback() {
    return StringTable.getMovieClip("sc/ui.sc", "icon_quest_play_again");
}

function ShowAutoPlayAgainRadioButtonCallback() {
    var showFastPlayAgainButtonClip = ShowFastPlayAgainButtonCallback();
    var parentClip = StringTable.getMovieClip("sc/ui.sc", "edit_controls_ui_screen_hud_top");
    var clip = parentClip.getChildByName("locked_movement_controls_button");
    if (clip) {
        clip.x = showFastPlayAgainButtonClip.width / 3;
        clip.y = showFastPlayAgainButtonClip.height / 3.5;
        var stateClip = clip.getChildByName("state");
        if (stateClip) {
            stateClip.gotoAndStopFrameIndex(0);
        }
        showFastPlayAgainButtonClip.addChild(clip);
    }
    return showFastPlayAgainButtonClip;
}

function HideBattleBlackBarsCallback() {
    var ingameHudTopClip = StringTable.getMovieClip("sc/ui.sc", "ingame_hud_top");
    var spectateCountChild = ingameHudTopClip.getChildByName("spectate_count");
    var eyeballClip = spectateCountChild.getChildById(1);
    eyeballClip.scale = 1;
    return eyeballClip;
}

function BattleEndInstantExitCallback() {
    var iconSprite = new Sprite(1);
    var screenHeaderClip = StringTable.getMovieClip("sc/ui.sc", "screen_header");
    var homeButtonClip = screenHeaderClip.getChildByName("button_home");
    var homeChild = homeButtonClip.getChildById(1);
    homeChild.x = 0;
    homeChild.y = 0;
    homeChild.scale = 0.4;
    var iconGearSpeed = StringTable.getMovieClip("sc/ui.sc", "icon_gear_speed");
    var iconSpeedClip = iconGearSpeed.getChildById(2);
    iconSpeedClip.colorTransform.c1r = 255;
    iconSpeedClip.colorTransform.c2r = 255;
    iconSpeedClip.colorTransform.c1g = 255;
    iconSpeedClip.colorTransform.c2g = 255;
    iconSpeedClip.x = homeChild.width / 3;
    iconSpeedClip.y = homeChild.height / 3.3;
    iconSpeedClip.scale = 0.21;
    iconSprite.addChild(homeChild);
    iconSprite.addChild(iconSpeedClip);
    return iconSprite;
}

function BackgroundMatchmakingCallback() {
    var matchmakingPopup = StringTable.getMovieClip("sc/ui.sc", "matchmaking_popup");
    return matchmakingPopup.getChildByName("loop");
}

function AntiAfkKickCallback() {
    var iconSprite = new Sprite(1);
    var sandyEmote = StringTable.getMovieClip("sc/emoji_1.sc", "emoji_sandy");
    var shieldGearIcon = StringTable.getMovieClip("sc/ui.sc", "icon_gear_shield");
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

function ColoredDamageCallback() {
    return StringTable.getMovieClip("sc/ui.sc", "icon_club_quest_damage");
}

function DoNotShowBattleHighlightCallback() {
    var iconSprite = new Sprite(1);
    var chatEntryReplayClip = StringTable.getMovieClip("sc/ui.sc", "chat_entry_replay_others");
    var watchButtonClip = chatEntryReplayClip.getChildByName("watch_button");
    var tvChild = watchButtonClip.getChildById(1);
    tvChild.x = 0;
    tvChild.y = 0;
    var iconGearSpeed = StringTable.getMovieClip("sc/ui.sc", "icon_gear_speed");
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

function ShowBattleConnectionIndicatorCallback() {
    var iconSprite = new Sprite(1);
    var ingameHudTopClip = StringTable.getMovieClip("sc/ui.sc", "ingame_hud_top");
    var indicatorClip = ingameHudTopClip.getChildByName("connection_indicator");
    if (!indicatorClip) {
        return iconSprite;
    }
    indicatorClip.gotoAndStopFrameIndex(5);
    indicatorClip.x = 0;
    indicatorClip.y = 0;
    iconSprite.addChild(indicatorClip);
    iconSprite.scale = 1.85;
    return iconSprite;
}

function getTextField() {
    var textFieldClip = StringTable.getMovieClip("sc/ui.sc", "popover_text_left");
    var textField = textFieldClip.getTextFieldByName("text");
    textField.color = 4294967295.0;
    textField.fontOutline = true;
    return textField;
}

function ShowOwnPlayerCoordinatesCallback() {
    var iconSprite = new Sprite(1);
    var xField = getTextField();
    xField.fontSize = 12;
    xField.text = "X: 10";
    var yField = getTextField();
    yField.fontSize = 12;
    yField.text = "Y: 15";
    xField.x = -12;
    xField.y = -12;
    yField.x = -11;
    yField.y = 0;
    iconSprite.addChild(xField);
    iconSprite.addChild(yField);
    return iconSprite;
}

function ShowCharactersInNamesCallback() {
    var iconSprite = new Sprite(1);
    var trophyClip = StringTable.getMovieClip("sc/ui.sc", "popover_text_left");
    var emojiClip = StringTable.getMovieClip("sc/emoji_1.sc", "emoji_colt");
    var child = emojiClip.getChildById(1);
    child.gotoAndStopFrameIndex(99);
    var trophyTf = trophyClip.getTextFieldByName("text");
    trophyTf.color = 4294967295.0;
    trophyTf.fontOutline = true;
    trophyTf.text = "... (".concat(StringTable.getString("TID_GUNSLINGER"), ")");
    trophyTf.fontSize = 30;
    trophyTf.x = trophyTf.x + -55;
    trophyTf.y = -90;
    emojiClip.scale = 3;
    emojiClip.y = 25;
    iconSprite.addChild(emojiClip);
    iconSprite.addChild(trophyTf);
    return iconSprite;
}

function ShamePlayersWithThumbsdownPinCallback() {
    var thumbdownClip = StringTable.getMovieClip("sc/emoji_1.sc", "emoji_thumbsdown");
    thumbdownClip.gotoAndStopFrameIndex(109);
    return thumbdownClip;
}

function ShowAllianceMembersInBattleCallback() {
    var mainscreenHudRightClip = StringTable.getMovieClip("sc/ui.sc", "mainscreen_hud_right");
    var naviClanClip = mainscreenHudRightClip.getChildByName("button_navi_clan");
    var child = naviClanClip.getChildById(1);
    child.scale = 1.33;
    return child;
}

function ShowBlacklistedPlayersInBattleCallback() {
    return StringTable.getMovieClip("sc/sprays_1.sc", "spray_denied");
}

function UseBattleProxyCallback() {
    var iconSprite = new Sprite(1);
    var battleClip = StringTable.getMovieClip("sc/ui.sc", "icon_skins_outlaws");
    var badConectionIcon = StringTable.getMovieClip("sc/ui.sc", "bad_conection_icon");
    badConectionIcon.gotoAndStopFrameIndex(0);
    var deniedClip = StringTable.getMovieClip("sc/sprays_1.sc", "spray_denied");
    deniedClip.visibility = true;
    deniedClip.setXY(0, 0);
    deniedClip.scale = 1.1;
    battleClip.x = badConectionIcon.width / 3.6;
    battleClip.y = badConectionIcon.height / 3.3;
    battleClip.scale = 0.6;
    iconSprite.addChild(badConectionIcon);
    iconSprite.addChild(battleClip);
    iconSprite.addChild(deniedClip);
    return iconSprite;
}

function DisableShakeCallback() {
    var iconSprite = new Sprite(1);
    var cartoonBallClip = StringTable.getMovieClip("sc/emoji_1.sc", "emoji_cartoon_ball");
    var child = cartoonBallClip.getChildById(1);
    child.gotoAndStopFrameIndex(180);
    var deniedClip = StringTable.getMovieClip("sc/sprays_1.sc", "spray_denied");
    deniedClip.visibility = true;
    deniedClip.setXY(0, 0);
    deniedClip.scale = 0.75;
    iconSprite.addChild(child);
    iconSprite.addChild(deniedClip);
    return iconSprite;
}

function ExtendedTrajectoryCallback() {
    return StringTable.getMovieClip("sc/ui.sc", "event_icon_brawlball");
}

function getLineClip(scaleX, scaleY) {
    var bg = StringTable.getMovieClip("sc/ui.sc", "map_editor_ui_darkening");
    bg.visibility = true;
    bg.colorTransform.r = 66;
    bg.colorTransform.g = 215;
    bg.colorTransform.b = 115;
    bg.scaleX = scaleX;
    bg.scaleY = scaleY;
    return bg;
}

function HitboxRendererCallback() {
    var iconSprite = new Sprite(1);
    var emojiSprite = getRandomStaticDevEmoji();
    var scaleX = emojiSprite.width / 100;
    var scaleY = emojiSprite.height / 100;
    var top = getLineClip(scaleX, 0.03);
    top.x = 0;
    top.y = -emojiSprite.height / 2;
    var bottom = getLineClip(scaleX, 0.03);
    bottom.x = 0;
    bottom.y = emojiSprite.height / 2;
    var left = getLineClip(0.03, scaleY);
    left.x = -emojiSprite.width / 2 + 1;
    left.y = 0;
    var right = getLineClip(0.03, scaleY);
    right.x = emojiSprite.height / 2 - 1;
    right.y = 0;
    iconSprite.addChild(top);
    iconSprite.addChild(bottom);
    iconSprite.addChild(left);
    iconSprite.addChild(right);
    iconSprite.addChild(emojiSprite);
    return iconSprite;
}

function EnemyTracerCallback() {
    var iconSprite = new Sprite(1);
    var hankEmoji = getStaticEmoji(StringTable.getMovieClip("sc/emoji_1.sc", "emoji_lilt"), 132);
    var glowbertEmoji = getStaticEmoji(StringTable.getMovieClip("sc/emoji_65.sc", "emoji_glowbert"), 167);
    glowbertEmoji.x = glowbertEmoji.width / 2.5;
    glowbertEmoji.scale = 0.2;
    hankEmoji.x = -(hankEmoji.width / 2.5);
    hankEmoji.scale = 0.2;
    var dx = glowbertEmoji.x - hankEmoji.x;
    var dy = glowbertEmoji.y - hankEmoji.y;
    var distance = Math.sqrt(dx * dx + dy * dy) / 100;
    var line = getLineClip(distance, 0.03);
    line.colorTransform.r = 255;
    line.colorTransform.g = 0;
    line.colorTransform.b = 0;
    iconSprite.addChild(line);
    iconSprite.addChild(hankEmoji);
    iconSprite.addChild(glowbertEmoji);
    iconSprite.scale = 1.8;
    return iconSprite;
}

function AttackRangeIndicatorCallback() {
    var iconSprite = new Sprite(1);
    var playerCircleClip = StringTable.getMovieClip("sc/ui.sc", "player_info_badge_btm");
    var circle = playerCircleClip.getChildByName("player_circle");
    var devEmoji = getRandomStaticDevEmoji();
    devEmoji.scale = 0.9;
    iconSprite.addChild(circle);
    iconSprite.addChild(devEmoji);
    return iconSprite;
}

function HighlightLeonCloneCallback() {
    var iconSprite = new Sprite(1);
    var clip = StringTable.getMovieClip("sc/emoji_1.sc", "emoji_leon");
    var child = clip.getChildById(1);
    child.gotoAndStopFrameIndex(99);
    child.scale = 1.5;
    iconSprite.addChild(child);
    var baseStick = StringTable.getMovieClip("sc/ui.sc", "item_base_stick");
    var gadget = baseStick.getChildByName("button_ulti");
    gadget.gotoAndStopFrameIndex(25);
    gadget.visibility = true;
    MovieClipHelper.replaceChildWithMovieClip(gadget, "icon_ph", "sc/ui.sc", "icon_item_leon_1");
    gadget.x = child.width / 3;
    gadget.y = child.height / 3.2;
    gadget.scale = 1.4;
    iconSprite.addChild(gadget);
    return iconSprite;
}

function EnforceBattleChatButtonCallback() {
    var emoteButtonClip = StringTable.getMovieClip("sc/ui.sc", "emote_button");
    var cooldownChild = emoteButtonClip.getChildByName("cooldown");
    cooldownChild.gotoAndStopFrameIndex(99);
    return cooldownChild;
}

function ShowDPSCallback() {
    var iconSprite = new Sprite(1);
    var textField = getTextField();
    textField.fontSize = 12;
    textField.text = "DPS: 1536";
    textField.x = -22.5;
    textField.y = -5.5;
    iconSprite.addChild(textField);
    iconSprite.scale = 1.65;
    return iconSprite;
}

function AllyRespawnTimerCallback() {
    var iconSprite = new Sprite(1);
    var shockedClip = StringTable.getMovieClip("sc/emoji_1.sc", "emoji_shocked");
    shockedClip.gotoAndStopFrameIndex(0);
    shockedClip.scale = 3.5;
    shockedClip.x = shockedClip.width / 3;
    shockedClip.y = shockedClip.y + 6;
    var annoyedClip = StringTable.getMovieClip("sc/emoji_1.sc", "emoji_annoyed");
    annoyedClip.gotoAndStopFrameIndex(91);
    annoyedClip.scale = 3.5;
    annoyedClip.x = -(annoyedClip.width / 3);
    var clockClip = StringTable.getMovieClip("sc/emoji_1.sc", "emoji_sandclock");
    var clip = clockClip.getChildById(1);
    var i = 6;
    while (i <= 8) {
        clip.getChildById(i).visibility = false;
        i++;
    }
    clip.gotoAndStopFrameIndex(180);
    clip.scale = 0.6;
    clip.y = clip.height / 2;
    iconSprite.addChild(shockedClip);
    iconSprite.addChild(annoyedClip);
    iconSprite.addChild(clip);
    return iconSprite;
}

function LowResGraphicsCallback() {
    var mapEditorRemoveBtn = StringTable.getMovieClip("sc/ui.sc", "map_editor_remove_button");
    var btn = mapEditorRemoveBtn.getChildByName("button");
    btn.gotoAndStopFrameIndex(1);
    return btn.getChildById(5);
}

function getStaticEmoji(clip, frameIndex) {
    var child = clip.getChildById(1);
    if (child.totalFramesAmount < 2) {
        child = clip;
    }
    child.gotoAndStopFrameIndex(frameIndex);
    return child;
}

function DisableSkinsCallback() {
    var iconSprite = new Sprite(1);
    var shellyBrawloweenEmoji = getStaticEmoji(StringTable.getMovieClip("sc/emoji_1.sc", "emoji_shelly_brawloween"), 160);
    var shellyEmoji = getStaticEmoji(StringTable.getMovieClip("sc/emoji_1.sc", "emoji_shelly"), 61);
    var iconGearSpeed = StringTable.getMovieClip("sc/ui.sc", "icon_gear_speed");
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

function DefaultEnvironmentsCallback() {
    var iconGearReload = StringTable.getMovieClip("sc/ui.sc", "icon_gear_reload");
    iconGearReload.gotoAndStopFrameIndex(1);
    return iconGearReload;
}

function FriendListOptimizationCallback() {
    var iconSprite = new Sprite(1);
    var mainscreenHudRight = StringTable.getMovieClip("sc/ui.sc", "mainscreen_hud_right");
    var naviFriends = mainscreenHudRight.getChildByName("button_navi_friends");
    var friendIcon = naviFriends.getChildById(1);
    var iconGearSpeed = StringTable.getMovieClip("sc/ui.sc", "icon_gear_speed");
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

function BSDProxyCallback() {
    var iconSprite = new Sprite(1);
    var badConectionIcon = StringTable.getMovieClip("sc/ui.sc", "bad_conection_icon");
    badConectionIcon.gotoAndStopFrameIndex(0);
    var deniedClip = StringTable.getMovieClip("sc/sprays_1.sc", "spray_denied");
    deniedClip.visibility = true;
    deniedClip.setXY(0, 0);
    deniedClip.scale = 1.1;
    iconSprite.addChild(badConectionIcon);
    iconSprite.addChild(deniedClip);
    return iconSprite;
}

function ShowFriendlyRoomOpponentsCallback() {
    var iconSprite = new Sprite(1);
    var clip = StringTable.getMovieClip("sc/ui.sc", "member_item_extrasmall");
    ShowFriendlyRoomOpponents_DISABLE_CHILDRENS.forEach(function (e) {
        clip.getChildByName(e).visibility = false;
        return clip.getChildByName(e);
    });
    MovieClipHelper.replaceChildWithMovieClip(clip, "image_ph", "sc/hero_portraits.sc", "hero_icon_shelly_small");
    ShowFriendlyRoomOpponents_skillsChilds.forEach(function (e) {
        var child = clip.getChildByName(e);
        child.getChildByName("sp_ani").visibility = false;
        if (e === "star_power_ph") {
            MovieClipHelper.replaceChildWithMovieClip(child, "icon_ph", "sc/ui.sc", "icon_sp_shelly_2");
        }
        if (e === "item_ph") {
            MovieClipHelper.replaceChildWithMovieClip(child, "icon_ph", "sc/ui.sc", "icon_item_shelly_2");
        }
        if (e === "gear1_ph") {
            MovieClipHelper.replaceChildWithMovieClip(child, "icon_ph", "sc/ui.sc", "icon_gear_damage");
            var ph1 = child.getChildByName("icon_ph");
            ph1.gotoAndStopFrameIndex(1);
        }
        if (e === "gear2_ph") {
            MovieClipHelper.replaceChildWithMovieClip(child, "icon_ph", "sc/ui.sc", "icon_gear_shield");
            var ph2 = child.getChildByName("icon_ph");
            ph2.gotoAndStopFrameIndex(1);
        }
        if (e === "overcharge_ph") {
            MovieClipHelper.replaceChildWithMovieClip(child, "icon_ph", "sc/ui.sc", "icon_overcharge_shelly_1");
            child.getChildByName("notification").visibility = false;
        }
        if (e.includes("gear")) {
            var bg = child.getChildByName("bg_gear");
            bg.gotoAndStopFrameIndex(1);
            return;
        }
    });
    var field = clip.getTextFieldByName("name_txt");
    if (field) {
        field.setTextScaleIfNecessary(StringTable.getString("TID_RANKED_ENEMY_P1"));
    }
    var statusField = clip.getTextFieldByName("status_txt");
    if (statusField) {
        statusField.setTextScaleIfNecessary(StringTable.getString("TID_TEAM_MEMBER_STATUS_READY"));
    }
    clip.scale = 1;
    clip.y = clip.y - 15;
    iconSprite.addChild(clip);
    iconSprite.scale = 0.88;
    return iconSprite;
}

function HideBattlingStatusFromOthersCallback() {
    var iconSprite = new Sprite(1);
    var battleClip = StringTable.getMovieClip("sc/ui.sc", "icon_skins_outlaws");
    var deniedClip = StringTable.getMovieClip("sc/sprays_1.sc", "spray_denied");
    var ingameHudTopClip = StringTable.getMovieClip("sc/ui.sc", "ingame_hud_top");
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

function InstantStarrDropOpeningCallback() {
    var clip = StringTable.getMovieClip("sc/emoji_1.sc", "emoji_starr");
    var child = clip.getChildById(1);
    child.gotoAndStopFrameIndex(210);
    return clip;
}

function LegacyNamesCallback() {
    var clip = StringTable.getMovieClip("sc/emoji_1.sc", "emoji_rico_classic_old");
    var child = clip.getChildById(1);
    child.gotoAndStopFrameIndex(160);
    return clip;
}

function ShowDebugMenuButtonCallback() {
    GameMain.loadAsset("sc/debug.sc");
    var iconSprite = new Sprite(1);
    var clip = StringTable.getMovieClip("sc/debug.sc", "debug_button");
    clip.setText("txt", "D");
    clip.setXY(-30, 25);
    iconSprite.addChild(clip);
    iconSprite.scale = 1.8;
    return iconSprite;
}

function RandomLocalizationCallback() {
    var iconSprite = new Sprite(1);
    var tfClip = StringTable.getMovieClip("sc/ui.sc", "popover_text_left");
    var iconRandomParent = StringTable.getMovieClip("sc/ui.sc", "event_icon_random");
    var iconRandom = iconRandomParent.getChildById(1);
    var textField = tfClip.getTextFieldByName("text");
    textField.color = 4294967295.0;
    textField.fontOutline = true;
    textField.text = "TID_";
    textField.fontSize = 24;
    textField.x = textField.x + -35;
    textField.y = textField.y + -15;
    iconRandom.x = iconRandom.x + 25;
    iconRandom.y = iconRandom.y + 0;
    iconRandom.scale = 0.3;
    iconSprite.addChild(textField);
    iconSprite.addChild(iconRandom);
    iconSprite.scale = 1.95;
    return iconSprite;
}

function SlowModeCallback() {
    var iconSprite = new Sprite(1);
    var skullClip = StringTable.getMovieClip("sc/ui.sc", "skull_atlasgenerator_texture_luminance_alpha");
    var iconGearSpeed = StringTable.getMovieClip("sc/ui.sc", "icon_gear_speed");
    var iconSpeedClip = iconGearSpeed.getChildById(2);
    iconSpeedClip.colorTransform.c1r = 255;
    iconSpeedClip.colorTransform.c2r = 255;
    iconSpeedClip.colorTransform.c1g = 0;
    iconSpeedClip.colorTransform.c2g = 0;
    iconSpeedClip.colorTransform.c1b = 0;
    iconSpeedClip.colorTransform.c2b = 0;
    iconSpeedClip.x = skullClip.width / 3;
    iconSpeedClip.y = skullClip.height / 3.3;
    iconSpeedClip.scale = 0.33;
    iconSpeedClip.rotate(180);
    iconSprite.addChild(skullClip);
    iconSprite.addChild(iconSpeedClip);
    return iconSprite;
}

var IconCallbacks = {
    VisualChromaticNamePinCallback: VisualChromaticNamePinCallback,
    DisablePinAnimationCallback: DisablePinAnimationCallback,
    SharedBackgroundCallback: SharedBackgroundCallback,
    RandomThemesCallback: RandomThemesCallback,
    RandomThemesAfterBattleCallback: RandomThemesAfterBattleCallback,
    RandomThemesMusicIndependencyCallback: RandomThemesMusicIndependencyCallback,
    ShowFPSCounterCallback: ShowFPSCounterCallback,
    HideHomeScreenTextCallback: HideHomeScreenTextCallback,
    EnforceOldFriendsListCallback: EnforceOldFriendsListCallback,
    ShowSkinNamesInProfileCallback: ShowSkinNamesInProfileCallback,
    BattleTextChatCallback: BattleTextChatCallback,
    ShowEnemyAmmoStatusCallback: ShowEnemyAmmoStatusCallback,
    ShowTrophiesAboveHeadCallback: ShowTrophiesAboveHeadCallback,
    ShowCameraButtonCallback: ShowCameraButtonCallback,
    HideUltiAimingCallback: HideUltiAimingCallback,
    ShowFastPlayAgainButtonCallback: ShowFastPlayAgainButtonCallback,
    ShowAutoPlayAgainRadioButtonCallback: ShowAutoPlayAgainRadioButtonCallback,
    HideBattleBlackBarsCallback: HideBattleBlackBarsCallback,
    BattleEndInstantExitCallback: BattleEndInstantExitCallback,
    BackgroundMatchmakingCallback: BackgroundMatchmakingCallback,
    AntiAfkKickCallback: AntiAfkKickCallback,
    ColoredDamageCallback: ColoredDamageCallback,
    DoNotShowBattleHighlightCallback: DoNotShowBattleHighlightCallback,
    ShowBattleConnectionIndicatorCallback: ShowBattleConnectionIndicatorCallback,
    ShowOwnPlayerCoordinatesCallback: ShowOwnPlayerCoordinatesCallback,
    ShowCharactersInNamesCallback: ShowCharactersInNamesCallback,
    ShamePlayersWithThumbsdownPinCallback: ShamePlayersWithThumbsdownPinCallback,
    ShowAllianceMembersInBattleCallback: ShowAllianceMembersInBattleCallback,
    ShowBlacklistedPlayersInBattleCallback: ShowBlacklistedPlayersInBattleCallback,
    UseBattleProxyCallback: UseBattleProxyCallback,
    DisableShakeCallback: DisableShakeCallback,
    ExtendedTrajectoryCallback: ExtendedTrajectoryCallback,
    HitboxRendererCallback: HitboxRendererCallback,
    EnemyTracerCallback: EnemyTracerCallback,
    AttackRangeIndicatorCallback: AttackRangeIndicatorCallback,
    HighlightLeonCloneCallback: HighlightLeonCloneCallback,
    EnforceBattleChatButtonCallback: EnforceBattleChatButtonCallback,
    ShowDPSCallback: ShowDPSCallback,
    AllyRespawnTimerCallback: AllyRespawnTimerCallback,
    LowResGraphicsCallback: LowResGraphicsCallback,
    DisableSkinsCallback: DisableSkinsCallback,
    DefaultEnvironmentsCallback: DefaultEnvironmentsCallback,
    FriendListOptimizationCallback: FriendListOptimizationCallback,
    BSDProxyCallback: BSDProxyCallback,
    ShowFriendlyRoomOpponentsCallback: ShowFriendlyRoomOpponentsCallback,
    HideBattlingStatusFromOthersCallback: HideBattlingStatusFromOthersCallback,
    InstantStarrDropOpeningCallback: InstantStarrDropOpeningCallback,
    LegacyNamesCallback: LegacyNamesCallback,
    ShowDebugMenuButtonCallback: ShowDebugMenuButtonCallback,
    RandomLocalizationCallback: RandomLocalizationCallback,
    SlowModeCallback: SlowModeCallback
};
