// =============================================================
// MENU ICONS
// merged webpack modules: 2120 IconCallbacks, 194 IconSelector, 1027 IconItem, 68 UniItem
// =============================================================

// --------------------- MODULE 2120 — IconCallbacks ---------------------

// ============================================================ //
// webpack module 2120  —  IconCallbacks
// exports: AllyRespawnTimerCallback, AntiAfkKickCallback, AttackRangeIndicatorCallback, BSDProxyCallback, BackgroundMatchmakingCallback, BattleEndInstantExitCallback, BattleTextChatCallback, ColoredDamageCallback, DefaultEnvironmentsCallback, DisablePinAnimationCallback, DisableShakeCallback, DisableSkinsCallback, DoNotShowBattleHighlightCallback, EnemyTracerCallback, EnforceBattleChatButtonCallback, EnforceOldFriendsListCallback, ExtendedTrajectoryCallback, FriendListOptimizationCallback, HideBattleBlackBarsCallback, HideBattlingStatusFromOthersCallback, HideHomeScreenTextCallback, HideUltiAimingCallback, HighlightLeonCloneCallback, HitboxRendererCallback ...
// deps: 884 (LogicRandom), 3217 (Sprite), 7404 (MovieClipHelper), 8775 (GameMain), 9250 (StringTable)
// ============================================================ //

__webpack_modules__[2120] = function IconCallbacks_factory(__unused_webpack_module, exports, __webpack_require__) {
    var StringTable, MovieClipHelper, Sprite, LogicRandom, GameMain, EMOJIS, VisualChromaticNamePinCallback, DisablePinAnimationCallback, SharedBackgroundCallback, RandomThemesCallback, RandomThemesAfterBattleCallback, RandomThemesMusicIndependencyCallback, ShowFPSCounterCallback, HideHomeScreenTextCallback, EnforceOldFriendsListCallback, ShowSkinNamesInProfileCallback, BattleTextChatCallback, ShowEnemyAmmoStatusCallback, ShowTrophiesAboveHeadCallback, ShowCameraButtonCallback, getRandomStaticDevEmoji, HideUltiAimingCallback, ShowFastPlayAgainButtonCallback, ShowAutoPlayAgainRadioButtonCallback, HideBattleBlackBarsCallback, BattleEndInstantExitCallback, BackgroundMatchmakingCallback, AntiAfkKickCallback, ColoredDamageCallback, DoNotShowBattleHighlightCallback, ShowBattleConnectionIndicatorCallback, getTextField, ShowOwnPlayerCoordinatesCallback, ShowCharactersInNamesCallback, ShamePlayersWithThumbsdownPinCallback, ShowAllianceMembersInBattleCallback, ShowBlacklistedPlayersInBattleCallback, UseBattleProxyCallback, DisableShakeCallback, ExtendedTrajectoryCallback, getLineClip, HitboxRendererCallback, EnemyTracerCallback, AttackRangeIndicatorCallback, HighlightLeonCloneCallback, EnforceBattleChatButtonCallback, ShowDPSCallback, AllyRespawnTimerCallback, LowResGraphicsCallback, getStaticEmoji, DisableSkinsCallback, DefaultEnvironmentsCallback, FriendListOptimizationCallback, BSDProxyCallback, ShowFriendlyRoomOpponents_DISABLE_CHILDRENS, ShowFriendlyRoomOpponents_skillsChilds, ShowFriendlyRoomOpponentsCallback, HideBattlingStatusFromOthersCallback, InstantStarrDropOpeningCallback, LegacyNamesCallback, ShowDebugMenuButtonCallback, RandomLocalizationCallback, SlowModeCallback;
        VisualChromaticNamePinCallback = function VisualChromaticNamePinCallback() {
        return ((StringTable).StringTable).getMovieClip("sc/ui.sc", "icon_resource_chromatic_coin");
};
        DisablePinAnimationCallback = function DisablePinAnimationCallback() {
    var iconSprite, grinClip, stopClip;
        iconSprite = new (Sprite).Sprite(1);
        grinClip = ((StringTable).StringTable).getMovieClip("sc/emoji_1.sc", "emoji_grin");
        stopClip = ((StringTable).StringTable).getMovieClip("sc/emoji_1.sc", "emoji_stop");
        (stopClip).gotoAndStopFrameIndex(209);
        stopClip.scale = 0.65;
        stopClip.x = ((grinClip).width / 3);
        stopClip.y = ((grinClip).height / 3.3);
        (iconSprite).addChild(grinClip);
        (iconSprite).addChild(stopClip);
        return iconSprite;
};
        SharedBackgroundCallback = function SharedBackgroundCallback() {
        return ((StringTable).StringTable).getMovieClip("sc/ui.sc", "icon_skins_city");
};
        RandomThemesCallback = function RandomThemesCallback() {
    var iconSprite, iconBg, iconRandomParent, iconRandom;
        iconSprite = new (Sprite).Sprite(1);
        iconBg = SharedBackgroundCallback();
        iconRandomParent = ((StringTable).StringTable).getMovieClip("sc/ui.sc", "event_icon_random");
        iconRandom = (iconRandomParent).getChildById(1);
        iconRandom.x = ((iconBg).width / 3);
        iconRandom.y = ((iconBg).height / 3.5);
        iconRandom.scale = 0.7;
        (iconSprite).addChild(iconBg);
        (iconSprite).addChild(iconRandom);
        return iconSprite;
};
        RandomThemesAfterBattleCallback = function RandomThemesAfterBattleCallback() {
    var iconSprite, iconBg, iconRandomParent, iconRandom, battleClip;
        iconSprite = new (Sprite).Sprite(1);
        iconBg = SharedBackgroundCallback();
        iconRandomParent = ((StringTable).StringTable).getMovieClip("sc/ui.sc", "event_icon_random");
        iconRandom = (iconRandomParent).getChildById(1);
        battleClip = ((StringTable).StringTable).getMovieClip("sc/ui.sc", "icon_skins_outlaws");
        iconRandom.x = ((iconBg).width / 3);
        iconRandom.y = ((iconBg).height / 3.5);
        iconRandom.scale = 0.7;
        battleClip.x = (-(iconRandom).x);
        battleClip.y = (-(iconRandom).y);
        battleClip.scale = 0.7;
        (iconSprite).addChild(iconBg);
        (iconSprite).addChild(iconRandom);
        (iconSprite).addChild(battleClip);
        return iconSprite;
};
        RandomThemesMusicIndependencyCallback = function RandomThemesMusicIndependencyCallback() {
    var iconSprite, iconBg, iconRandomParent, iconRandom, battleClip;
        iconSprite = new (Sprite).Sprite(1);
        iconBg = SharedBackgroundCallback();
        iconRandomParent = ((StringTable).StringTable).getMovieClip("sc/ui.sc", "event_icon_random");
        iconRandom = (iconRandomParent).getChildById(1);
        battleClip = ((StringTable).StringTable).getMovieClip("sc/ui.sc", "icon_skins_music");
        iconRandom.x = ((iconBg).width / 3);
        iconRandom.y = ((iconBg).height / 3.5);
        iconRandom.scale = 0.7;
        battleClip.x = (-(iconRandom).x);
        battleClip.y = (-(iconRandom).y);
        battleClip.scale = 0.7;
        (iconSprite).addChild(iconBg);
        (iconSprite).addChild(iconRandom);
        (iconSprite).addChild(battleClip);
        return iconSprite;
};
        ShowFPSCounterCallback = function ShowFPSCounterCallback() {
    var iconSprite, textField;
        iconSprite = new (Sprite).Sprite(1);
        textField = getTextField();
        textField.fontSize = 12;
        textField.text = "FPS: 120";
        textField.x = (-18.5);
        textField.y = (-5.5);
        (iconSprite).addChild(textField);
        iconSprite.scale = 1.65;
        return iconSprite;
};
        HideHomeScreenTextCallback = function HideHomeScreenTextCallback() {
    var iconSprite, textField, offsetX, offsetY, deniedClip;
        iconSprite = new (Sprite).Sprite(1);
        textField = getTextField();
        if (!((undefined) === undefined)) {
            offsetX = undefined;
            iconSprite = textField = offsetX = offsetY = deniedClip = <underflow>;
            offsetY = <underflow>;
        } /* if 0xbb9aa */
        /* jump -> 0xbb9b4 */
        /* loop: jump back to 0xbb99e */
        textField.fontSize = 96;
        textField.text = "A";
        textField.x = offsetX;
        textField.y = offsetY;
        deniedClip = ((StringTable).StringTable).getMovieClip("sc/sprays_1.sc", "spray_denied");
        deniedClip.visibility = true;
        (deniedClip).setXY((((textField).textWidth / 2) + offsetX), (((textField).textHeight / 2) + offsetY));
        deniedClip.scale = 1.1;
        (iconSprite).addChild(textField);
        (iconSprite).addChild(deniedClip);
        iconSprite.scale = 1.2;
        return iconSprite;
};
        EnforceOldFriendsListCallback = function EnforceOldFriendsListCallback() {
    var mainscreenHudRight, naviFriends, friendIcon;
        mainscreenHudRight = ((StringTable).StringTable).getMovieClip("sc/ui.sc", "mainscreen_hud_right");
        naviFriends = (mainscreenHudRight).getChildByName("button_navi_friends");
        friendIcon = (naviFriends).getChildById(1);
        friendIcon.scale = 1.25;
        return friendIcon;
};
        ShowSkinNamesInProfileCallback = function ShowSkinNamesInProfileCallback() {
    var mainscreenCenter, playerArea, buttonSkinSelectorClip, icon;
        mainscreenCenter = ((StringTable).StringTable).getMovieClip("sc/ui.sc", "mainscreen_center");
        playerArea = (mainscreenCenter).getChildByName("player_1_area");
        buttonSkinSelectorClip = (playerArea).getChildByName("button_skin_selector");
        icon = (buttonSkinSelectorClip).getChildByName("icon_skin_selector");
        (icon).gotoAndStopFrameIndex(1);
        icon.scale = 1.25;
        return icon;
};
        BattleTextChatCallback = function BattleTextChatCallback() {
    var clip, chatButtonClip, battleClip;
        clip = ((StringTable).StringTable).getMovieClip("sc/ui.sc", "team_chat_footer");
        chatButtonClip = (clip).getChildByName("chat_button");
        battleClip = ((StringTable).StringTable).getMovieClip("sc/ui.sc", "icon_skins_outlaws");
        chatButtonClip.scale = 1;
        battleClip.x = ((chatButtonClip).width / 3);
        battleClip.y = ((chatButtonClip).height / 3.5);
        battleClip.scale = 0.37;
        (chatButtonClip).addChild(battleClip);
        return chatButtonClip;
};
        ShowEnemyAmmoStatusCallback = function ShowEnemyAmmoStatusCallback() {
    var iconSprite, enemyInfoBadgeClip, reloadClip, shellyClip, i, attackChild, child;
        iconSprite = new (Sprite).Sprite(1);
        enemyInfoBadgeClip = ((StringTable).StringTable).getMovieClip("sc/ui.sc", "enemy_info_badge");
        reloadClip = (enemyInfoBadgeClip).getChildByName("reload_own");
        shellyClip = ((StringTable).StringTable).getMovieClip("sc/emoji_1.sc", "emoji_shelly_angry");
        shellyClip.y = 20;
        shellyClip.scale = 1.8;
        reloadClip.visibility = true;
        reloadClip.y = -40;
        reloadClip.scale = 1.1;
        i = 1;
        while ((i <= 3)) {
            attackChild = (reloadClip).getChildByName(("attack_" + i));
            if ((i === 1)) {
                (attackChild).gotoAndStopFrameIndex(38);
            } /* if 0xbbdb5 */
            /* jump -> 0xbbddc */
            (attackChild).gotoAndStopFrameIndex(0);
            child = (attackChild).getChildById(1);
            child.visibility = false;
            i = ((i) + 1);
            (i++);
        } /* while 0xbbde6 */
        (shellyClip).gotoAndStopFrameIndex(99);
        (iconSprite).addChild(shellyClip);
        (iconSprite).addChild(reloadClip);
        return iconSprite;
};
        ShowTrophiesAboveHeadCallback = function ShowTrophiesAboveHeadCallback() {
    var iconSprite, trophy, trophyClip, emojiClip, trophyTf;
        iconSprite = new (Sprite).Sprite(1);
        trophy = ((StringTable).StringTable).getMovieClip("sc/ui.sc", "icon_trophy");
        trophyClip = ((StringTable).StringTable).getMovieClip("sc/ui.sc", "popover_text_left");
        emojiClip = getRandomStaticDevEmoji();
        trophyTf = (trophyClip).getTextFieldByName("text");
        trophyTf.color = 4294956800.0;
        trophyTf.fontOutline = true;
        trophyTf.text = "50000 | 1000";
        trophyTf.fontSize = 28;
        trophyTf.x = ((trophyTf).x + -55);
        trophyTf.y = -90;
        trophy.x = -90;
        trophy.y = -75;
        trophy.scale = 0.35;
        emojiClip.scale = 3;
        emojiClip.y = 25;
        (iconSprite).addChild(trophy);
        (iconSprite).addChild(emojiClip);
        (iconSprite).addChild(trophyTf);
        return iconSprite;
};
        ShowCameraButtonCallback = function ShowCameraButtonCallback() {
    var icon;
        icon = ((StringTable).StringTable).getMovieClip("sc/ui_achievements.sc", "icon_resource_records_point");
        icon.scale = 1.25;
        icon.x = ((icon).x - 15);
        return icon;
};
        getRandomStaticDevEmoji = function getRandomStaticDevEmoji() {
    var emojis, selectedEmojiIndex, emojiName, stopFrameIndex, clip, child;
        emojis = (Object).keys(EMOJIS);
        selectedEmojiIndex = ((LogicRandom).LogicRandom).random(0, (emojis.length - 1));
        emojiName = emojis[selectedEmojiIndex];
        stopFrameIndex = EMOJIS[emojiName];
        clip = ((StringTable).StringTable).getMovieClip("sc/emoji_1.sc", emojiName);
        (clip).gotoAndStopFrameIndex(stopFrameIndex);
        if (!(child = emojiName === "emoji_bibi")) {
            if ((child = emojiName === "emoji_crow")) {
                child = (clip).getChildById(1);
                (child).gotoAndStopFrameIndex(stopFrameIndex);
                child = emojiName;
            } /* if 0xbc0ff */
        } /* if 0xbc0e2 */
        return clip;
};
        HideUltiAimingCallback = function HideUltiAimingCallback() {
    var clip, child;
        clip = ((StringTable).StringTable).getMovieClip("sc/ui.sc", "ulti_stick");
        child = (clip).getChildById(1);
        (clip).gotoAndStopFrameIndex(0);
        (child).gotoAndStopFrameIndex(0);
        return clip;
};
        ShowFastPlayAgainButtonCallback = function ShowFastPlayAgainButtonCallback() {
        return ((StringTable).StringTable).getMovieClip("sc/ui.sc", "icon_quest_play_again");
};
        ShowAutoPlayAgainRadioButtonCallback = function ShowAutoPlayAgainRadioButtonCallback() {
    var showFastPlayAgainButtonClip, parentClip, clip, stateClip;
        showFastPlayAgainButtonClip = ShowFastPlayAgainButtonCallback();
        parentClip = ((StringTable).StringTable).getMovieClip("sc/ui.sc", "edit_controls_ui_screen_hud_top");
        clip = (parentClip).getChildByName("locked_movement_controls_button");
        if (clip) {
            clip.x = ((showFastPlayAgainButtonClip).width / 3);
            clip.y = ((showFastPlayAgainButtonClip).height / 3.5);
            stateClip = (clip).getChildByName("state");
            if (stateClip) {
                (stateClip).gotoAndStopFrameIndex(0);
            } /* if 0xbc273 */
            (showFastPlayAgainButtonClip).addChild(clip);
        } /* if 0xbc282 */
        return showFastPlayAgainButtonClip;
};
        HideBattleBlackBarsCallback = function HideBattleBlackBarsCallback() {
    var ingameHudTopClip, spectateCountChild, eyeballClip;
        ingameHudTopClip = ((StringTable).StringTable).getMovieClip("sc/ui.sc", "ingame_hud_top");
        spectateCountChild = (ingameHudTopClip).getChildByName("spectate_count");
        eyeballClip = (spectateCountChild).getChildById(1);
        eyeballClip.scale = 1;
        return eyeballClip;
};
        BattleEndInstantExitCallback = function BattleEndInstantExitCallback() {
    var iconSprite, screenHeaderClip, homeButtonClip, homeChild, iconGearSpeed, iconSpeedClip;
        iconSprite = new (Sprite).Sprite(1);
        screenHeaderClip = ((StringTable).StringTable).getMovieClip("sc/ui.sc", "screen_header");
        homeButtonClip = (screenHeaderClip).getChildByName("button_home");
        homeChild = (homeButtonClip).getChildById(1);
        homeChild.x = 0;
        homeChild.y = 0;
        homeChild.scale = 0.4;
        iconGearSpeed = ((StringTable).StringTable).getMovieClip("sc/ui.sc", "icon_gear_speed");
        iconSpeedClip = (iconGearSpeed).getChildById(2);
        (iconSpeedClip).colorTransform.c1r = 255;
        (iconSpeedClip).colorTransform.c2r = 255;
        (iconSpeedClip).colorTransform.c1g = 255;
        (iconSpeedClip).colorTransform.c2g = 255;
        iconSpeedClip.x = ((homeChild).width / 3);
        iconSpeedClip.y = ((homeChild).height / 3.3);
        iconSpeedClip.scale = 0.21;
        (iconSprite).addChild(homeChild);
        (iconSprite).addChild(iconSpeedClip);
        return iconSprite;
};
        BackgroundMatchmakingCallback = function BackgroundMatchmakingCallback() {
    var matchmakingPopup;
        matchmakingPopup = ((StringTable).StringTable).getMovieClip("sc/ui.sc", "matchmaking_popup");
        return (matchmakingPopup).getChildByName("loop");
};
        AntiAfkKickCallback = function AntiAfkKickCallback() {
    var iconSprite, sandyEmote, shieldGearIcon, shieldChild;
        iconSprite = new (Sprite).Sprite(1);
        sandyEmote = ((StringTable).StringTable).getMovieClip("sc/emoji_1.sc", "emoji_sandy");
        shieldGearIcon = ((StringTable).StringTable).getMovieClip("sc/ui.sc", "icon_gear_shield");
        shieldChild = (shieldGearIcon).getChildById(2);
        (sandyEmote).gotoAndStopFrameIndex(223);
        (shieldChild).colorTransform.c1g = 255;
        (shieldChild).colorTransform.alpha = 127;
        shieldChild.x = ((sandyEmote).width / 3);
        shieldChild.y = ((sandyEmote).height / 3.3);
        shieldChild.scale = 0.5;
        (iconSprite).addChild(sandyEmote);
        (iconSprite).addChild(shieldChild);
        return iconSprite;
};
        ColoredDamageCallback = function ColoredDamageCallback() {
        return ((StringTable).StringTable).getMovieClip("sc/ui.sc", "icon_club_quest_damage");
};
        DoNotShowBattleHighlightCallback = function DoNotShowBattleHighlightCallback() {
    var iconSprite, chatEntryReplayClip, watchButtonClip, tvChild, iconGearSpeed, iconSpeedClip;
        iconSprite = new (Sprite).Sprite(1);
        chatEntryReplayClip = ((StringTable).StringTable).getMovieClip("sc/ui.sc", "chat_entry_replay_others");
        watchButtonClip = (chatEntryReplayClip).getChildByName("watch_button");
        tvChild = (watchButtonClip).getChildById(1);
        tvChild.x = 0;
        tvChild.y = 0;
        iconGearSpeed = ((StringTable).StringTable).getMovieClip("sc/ui.sc", "icon_gear_speed");
        iconSpeedClip = (iconGearSpeed).getChildById(2);
        (iconSpeedClip).colorTransform.c1r = 255;
        (iconSpeedClip).colorTransform.c2r = 255;
        (iconSpeedClip).colorTransform.c1g = 255;
        (iconSpeedClip).colorTransform.c2g = 255;
        iconSpeedClip.x = ((tvChild).width / 3);
        iconSpeedClip.y = ((tvChild).height / 3.3);
        iconSpeedClip.scale = 0.33;
        (iconSprite).addChild(tvChild);
        (iconSprite).addChild(iconSpeedClip);
        return iconSprite;
};
        ShowBattleConnectionIndicatorCallback = function ShowBattleConnectionIndicatorCallback() {
    var iconSprite, ingameHudTopClip, indicatorClip;
        iconSprite = new (Sprite).Sprite(1);
        ingameHudTopClip = ((StringTable).StringTable).getMovieClip("sc/ui.sc", "ingame_hud_top");
        indicatorClip = (ingameHudTopClip).getChildByName("connection_indicator");
        if ((!indicatorClip)) {
            return iconSprite;
        } /* if 0xbc86f */
        (indicatorClip).gotoAndStopFrameIndex(5);
        indicatorClip.x = 0;
        indicatorClip.y = 0;
        (iconSprite).addChild(indicatorClip);
        iconSprite.scale = 1.85;
        return iconSprite;
};
        getTextField = function getTextField() {
    var textFieldClip, textField;
        textFieldClip = ((StringTable).StringTable).getMovieClip("sc/ui.sc", "popover_text_left");
        textField = (textFieldClip).getTextFieldByName("text");
        textField.color = 4294967295.0;
        textField.fontOutline = true;
        return textField;
};
        ShowOwnPlayerCoordinatesCallback = function ShowOwnPlayerCoordinatesCallback() {
    var iconSprite, xField, yField;
        iconSprite = new (Sprite).Sprite(1);
        xField = getTextField();
        xField.fontSize = 12;
        xField.text = "X: 10";
        yField = getTextField();
        yField.fontSize = 12;
        yField.text = "Y: 15";
        xField.x = -12;
        xField.y = -12;
        yField.x = -11;
        yField.y = 0;
        (iconSprite).addChild(xField);
        (iconSprite).addChild(yField);
        return iconSprite;
};
        ShowCharactersInNamesCallback = function ShowCharactersInNamesCallback() {
    var iconSprite, trophyClip, emojiClip, child, trophyTf;
        iconSprite = new (Sprite).Sprite(1);
        trophyClip = ((StringTable).StringTable).getMovieClip("sc/ui.sc", "popover_text_left");
        emojiClip = ((StringTable).StringTable).getMovieClip("sc/emoji_1.sc", "emoji_colt");
        child = (emojiClip).getChildById(1);
        (child).gotoAndStopFrameIndex(99);
        trophyTf = (trophyClip).getTextFieldByName("text");
        trophyTf.color = 4294967295.0;
        trophyTf.fontOutline = true;
        trophyTf.text = ("... (").concat(((StringTable).StringTable).getString("TID_GUNSLINGER"), ")");
        trophyTf.fontSize = 30;
        trophyTf.x = ((trophyTf).x + -55);
        trophyTf.y = -90;
        emojiClip.scale = 3;
        emojiClip.y = 25;
        (iconSprite).addChild(emojiClip);
        (iconSprite).addChild(trophyTf);
        return iconSprite;
};
        ShamePlayersWithThumbsdownPinCallback = function ShamePlayersWithThumbsdownPinCallback() {
    var thumbdownClip;
        thumbdownClip = ((StringTable).StringTable).getMovieClip("sc/emoji_1.sc", "emoji_thumbsdown");
        (thumbdownClip).gotoAndStopFrameIndex(109);
        return thumbdownClip;
};
        ShowAllianceMembersInBattleCallback = function ShowAllianceMembersInBattleCallback() {
    var mainscreenHudRightClip, naviClanClip, child;
        mainscreenHudRightClip = ((StringTable).StringTable).getMovieClip("sc/ui.sc", "mainscreen_hud_right");
        naviClanClip = (mainscreenHudRightClip).getChildByName("button_navi_clan");
        child = (naviClanClip).getChildById(1);
        child.scale = 1.33;
        return child;
};
        ShowBlacklistedPlayersInBattleCallback = function ShowBlacklistedPlayersInBattleCallback() {
        return ((StringTable).StringTable).getMovieClip("sc/sprays_1.sc", "spray_denied");
};
        UseBattleProxyCallback = function UseBattleProxyCallback() {
    var iconSprite, battleClip, badConectionIcon, deniedClip;
        iconSprite = new (Sprite).Sprite(1);
        battleClip = ((StringTable).StringTable).getMovieClip("sc/ui.sc", "icon_skins_outlaws");
        badConectionIcon = ((StringTable).StringTable).getMovieClip("sc/ui.sc", "bad_conection_icon");
        (badConectionIcon).gotoAndStopFrameIndex(0);
        deniedClip = ((StringTable).StringTable).getMovieClip("sc/sprays_1.sc", "spray_denied");
        deniedClip.visibility = true;
        (deniedClip).setXY(0, 0);
        deniedClip.scale = 1.1;
        battleClip.x = ((badConectionIcon).width / 3.6);
        battleClip.y = ((badConectionIcon).height / 3.3);
        battleClip.scale = 0.6;
        (iconSprite).addChild(badConectionIcon);
        (iconSprite).addChild(battleClip);
        (iconSprite).addChild(deniedClip);
        return iconSprite;
};
        DisableShakeCallback = function DisableShakeCallback() {
    var iconSprite, cartoonBallClip, child, deniedClip;
        iconSprite = new (Sprite).Sprite(1);
        cartoonBallClip = ((StringTable).StringTable).getMovieClip("sc/emoji_1.sc", "emoji_cartoon_ball");
        child = (cartoonBallClip).getChildById(1);
        (child).gotoAndStopFrameIndex(180);
        deniedClip = ((StringTable).StringTable).getMovieClip("sc/sprays_1.sc", "spray_denied");
        deniedClip.visibility = true;
        (deniedClip).setXY(0, 0);
        deniedClip.scale = 0.75;
        (iconSprite).addChild(child);
        (iconSprite).addChild(deniedClip);
        return iconSprite;
};
        ExtendedTrajectoryCallback = function ExtendedTrajectoryCallback() {
        return ((StringTable).StringTable).getMovieClip("sc/ui.sc", "event_icon_brawlball");
};
        getLineClip = function getLineClip(scaleX, scaleY) {
    var bg;
        bg = ((StringTable).StringTable).getMovieClip("sc/ui.sc", "map_editor_ui_darkening");
        bg.visibility = true;
        (bg).colorTransform.r = 66;
        (bg).colorTransform.g = 215;
        (bg).colorTransform.b = 115;
        bg.scaleX = scaleX;
        bg.scaleY = scaleY;
        return bg;
};
        HitboxRendererCallback = function HitboxRendererCallback() {
    var iconSprite, emojiSprite, scaleX, scaleY, top, bottom, left, right;
        iconSprite = new (Sprite).Sprite(1);
        emojiSprite = getRandomStaticDevEmoji();
        scaleX = ((emojiSprite).width / 100);
        scaleY = ((emojiSprite).height / 100);
        top = getLineClip(scaleX, 0.03);
        top.x = 0;
        top.y = ((-(emojiSprite).height) / 2);
        bottom = getLineClip(scaleX, 0.03);
        bottom.x = 0;
        bottom.y = ((emojiSprite).height / 2);
        left = getLineClip(0.03, scaleY);
        left.x = (((-(emojiSprite).width) / 2) + 1);
        left.y = 0;
        right = getLineClip(0.03, scaleY);
        right.x = (((emojiSprite).height / 2) - 1);
        right.y = 0;
        (iconSprite).addChild(top);
        (iconSprite).addChild(bottom);
        (iconSprite).addChild(left);
        (iconSprite).addChild(right);
        (iconSprite).addChild(emojiSprite);
        return iconSprite;
};
        EnemyTracerCallback = function EnemyTracerCallback() {
    var iconSprite, hankEmoji, glowbertEmoji, dx, dy, distance, line;
        iconSprite = new (Sprite).Sprite(1);
        hankEmoji = getStaticEmoji(((StringTable).StringTable).getMovieClip("sc/emoji_1.sc", "emoji_lilt"), 132);
        glowbertEmoji = getStaticEmoji(((StringTable).StringTable).getMovieClip("sc/emoji_65.sc", "emoji_glowbert"), 167);
        glowbertEmoji.x = ((glowbertEmoji).width / 2.5);
        glowbertEmoji.scale = 0.2;
        hankEmoji.x = (-((hankEmoji).width / 2.5));
        hankEmoji.scale = 0.2;
        dx = ((glowbertEmoji).x - (hankEmoji).x);
        dy = ((glowbertEmoji).y - (hankEmoji).y);
        distance = ((Math).sqrt(((dx * dx) + (dy * dy))) / 100);
        line = getLineClip(distance, 0.03);
        (line).colorTransform.r = 255;
        (line).colorTransform.g = 0;
        (line).colorTransform.b = 0;
        (iconSprite).addChild(line);
        (iconSprite).addChild(hankEmoji);
        (iconSprite).addChild(glowbertEmoji);
        iconSprite.scale = 1.8;
        return iconSprite;
};
        AttackRangeIndicatorCallback = function AttackRangeIndicatorCallback() {
    var iconSprite, playerCircleClip, circle, devEmoji;
        iconSprite = new (Sprite).Sprite(1);
        playerCircleClip = ((StringTable).StringTable).getMovieClip("sc/ui.sc", "player_info_badge_btm");
        circle = (playerCircleClip).getChildByName("player_circle");
        devEmoji = getRandomStaticDevEmoji();
        devEmoji.scale = 0.9;
        (iconSprite).addChild(circle);
        (iconSprite).addChild(devEmoji);
        return iconSprite;
};
        HighlightLeonCloneCallback = function HighlightLeonCloneCallback() {
    var iconSprite, clip, child, baseStick, gadget;
        iconSprite = new (Sprite).Sprite(1);
        clip = ((StringTable).StringTable).getMovieClip("sc/emoji_1.sc", "emoji_leon");
        child = (clip).getChildById(1);
        (child).gotoAndStopFrameIndex(99);
        child.scale = 1.5;
        (iconSprite).addChild(child);
        baseStick = ((StringTable).StringTable).getMovieClip("sc/ui.sc", "item_base_stick");
        gadget = (baseStick).getChildByName("button_ulti");
        (gadget).gotoAndStopFrameIndex(25);
        gadget.visibility = true;
        ((MovieClipHelper).MovieClipHelper).replaceChildWithMovieClip(gadget, "icon_ph", "sc/ui.sc", "icon_item_leon_1");
        gadget.x = ((child).width / 3);
        gadget.y = ((child).height / 3.2);
        gadget.scale = 1.4;
        (iconSprite).addChild(gadget);
        return iconSprite;
};
        EnforceBattleChatButtonCallback = function EnforceBattleChatButtonCallback() {
    var emoteButtonClip, cooldownChild;
        emoteButtonClip = ((StringTable).StringTable).getMovieClip("sc/ui.sc", "emote_button");
        cooldownChild = (emoteButtonClip).getChildByName("cooldown");
        (cooldownChild).gotoAndStopFrameIndex(99);
        return cooldownChild;
};
        ShowDPSCallback = function ShowDPSCallback() {
    var iconSprite, textField;
        iconSprite = new (Sprite).Sprite(1);
        textField = getTextField();
        textField.fontSize = 12;
        textField.text = "DPS: 1536";
        textField.x = (-22.5);
        textField.y = (-5.5);
        (iconSprite).addChild(textField);
        iconSprite.scale = 1.65;
        return iconSprite;
};
        AllyRespawnTimerCallback = function AllyRespawnTimerCallback() {
    var iconSprite, shockedClip, annoyedClip, clockClip, clip, i;
        iconSprite = new (Sprite).Sprite(1);
        shockedClip = ((StringTable).StringTable).getMovieClip("sc/emoji_1.sc", "emoji_shocked");
        (shockedClip).gotoAndStopFrameIndex(0);
        shockedClip.scale = 3.5;
        shockedClip.x = ((shockedClip).width / 3);
        shockedClip.y = ((shockedClip).y + 6);
        annoyedClip = ((StringTable).StringTable).getMovieClip("sc/emoji_1.sc", "emoji_annoyed");
        (annoyedClip).gotoAndStopFrameIndex(91);
        annoyedClip.scale = 3.5;
        annoyedClip.x = (-((annoyedClip).width / 3));
        clockClip = ((StringTable).StringTable).getMovieClip("sc/emoji_1.sc", "emoji_sandclock");
        clip = (clockClip).getChildById(1);
        i = 6;
        while ((i <= 8)) {
            (clip).getChildById(i).visibility = false;
            i = ((i) + 1);
            (i++);
        } /* while 0xbd7e5 */
        (clip).gotoAndStopFrameIndex(180);
        clip.scale = 0.6;
        clip.y = ((clip).height / 2);
        (iconSprite).addChild(shockedClip);
        (iconSprite).addChild(annoyedClip);
        (iconSprite).addChild(clip);
        return iconSprite;
};
        LowResGraphicsCallback = function LowResGraphicsCallback() {
    var mapEditorRemoveBtn, btn;
        mapEditorRemoveBtn = ((StringTable).StringTable).getMovieClip("sc/ui.sc", "map_editor_remove_button");
        btn = (mapEditorRemoveBtn).getChildByName("button");
        (btn).gotoAndStopFrameIndex(1);
        return (btn).getChildById(5);
};
        getStaticEmoji = function getStaticEmoji(clip, frameIndex) {
    var child;
        child = (clip).getChildById(1);
        if (((child).totalFramesAmount < 2)) {
            child = clip;
        } /* if 0xbd927 */
        (child).gotoAndStopFrameIndex(frameIndex);
        return child;
};
        DisableSkinsCallback = function DisableSkinsCallback() {
    var iconSprite, shellyBrawloweenEmoji, shellyEmoji, iconGearSpeed, iconSpeedClip;
        iconSprite = new (Sprite).Sprite(1);
        shellyBrawloweenEmoji = getStaticEmoji(((StringTable).StringTable).getMovieClip("sc/emoji_1.sc", "emoji_shelly_brawloween"), 160);
        shellyEmoji = getStaticEmoji(((StringTable).StringTable).getMovieClip("sc/emoji_1.sc", "emoji_shelly"), 61);
        iconGearSpeed = ((StringTable).StringTable).getMovieClip("sc/ui.sc", "icon_gear_speed");
        iconSpeedClip = (iconGearSpeed).getChildById(2);
        shellyEmoji.x = ((shellyEmoji).width / 2.5);
        shellyEmoji.y = (((shellyEmoji).height / 2.5) + 8.7);
        shellyBrawloweenEmoji.x = (-((shellyEmoji).width / 2.5));
        shellyBrawloweenEmoji.y = ((-((shellyEmoji).height / 2.5)) + 6.7);
        (iconSpeedClip).colorTransform.r = 255;
        (iconSpeedClip).colorTransform.g = 255;
        (iconSpeedClip).colorTransform.b = 255;
        iconSpeedClip.scale = 0.7;
        iconSpeedClip.y = ((iconSpeedClip).y + 2);
        (iconSprite).addChild(shellyBrawloweenEmoji);
        (iconSprite).addChild(shellyEmoji);
        (iconSprite).addChild(iconSpeedClip);
        iconSprite.y = ((iconSprite).y + 25);
        return iconSprite;
};
        DefaultEnvironmentsCallback = function DefaultEnvironmentsCallback() {
    var iconGearReload;
        iconGearReload = ((StringTable).StringTable).getMovieClip("sc/ui.sc", "icon_gear_reload");
        (iconGearReload).gotoAndStopFrameIndex(1);
        return iconGearReload;
};
        FriendListOptimizationCallback = function FriendListOptimizationCallback() {
    var iconSprite, mainscreenHudRight, naviFriends, friendIcon, iconGearSpeed, iconSpeedClip;
        iconSprite = new (Sprite).Sprite(1);
        mainscreenHudRight = ((StringTable).StringTable).getMovieClip("sc/ui.sc", "mainscreen_hud_right");
        naviFriends = (mainscreenHudRight).getChildByName("button_navi_friends");
        friendIcon = (naviFriends).getChildById(1);
        iconGearSpeed = ((StringTable).StringTable).getMovieClip("sc/ui.sc", "icon_gear_speed");
        iconSpeedClip = (iconGearSpeed).getChildById(2);
        friendIcon.scale = 1.25;
        iconSpeedClip.x = ((friendIcon).width / 3);
        iconSpeedClip.y = ((friendIcon).height / 4.1);
        iconSpeedClip.scale = 0.9;
        (iconSpeedClip).colorTransform.g = 255;
        (iconSprite).addChild(friendIcon);
        (iconSprite).addChild(iconSpeedClip);
        iconSprite.scale = 1.35;
        return iconSprite;
};
        BSDProxyCallback = function BSDProxyCallback() {
    var iconSprite, badConectionIcon, deniedClip;
        iconSprite = new (Sprite).Sprite(1);
        badConectionIcon = ((StringTable).StringTable).getMovieClip("sc/ui.sc", "bad_conection_icon");
        (badConectionIcon).gotoAndStopFrameIndex(0);
        deniedClip = ((StringTable).StringTable).getMovieClip("sc/sprays_1.sc", "spray_denied");
        deniedClip.visibility = true;
        (deniedClip).setXY(0, 0);
        deniedClip.scale = 1.1;
        (iconSprite).addChild(badConectionIcon);
        (iconSprite).addChild(deniedClip);
        return iconSprite;
};
        ShowFriendlyRoomOpponentsCallback = function ShowFriendlyRoomOpponentsCallback() {
    var iconSprite, clip, field, statusField;
        iconSprite = new (Sprite).Sprite(1);
        clip = ((StringTable).StringTable).getMovieClip("sc/ui.sc", "member_item_extrasmall");
        (ShowFriendlyRoomOpponents_DISABLE_CHILDRENS).forEach(function (e) {
        (clip).getChildByName(e).visibility = false;
        return (clip).getChildByName(e);
});
        ((MovieClipHelper).MovieClipHelper).replaceChildWithMovieClip(clip, "image_ph", "sc/hero_portraits.sc", "hero_icon_shelly_small");
        (ShowFriendlyRoomOpponents_skillsChilds).forEach(function (e) {
    var child, ph1, ph2, bg;
        child = (clip).getChildByName(e);
        (child).getChildByName("sp_ani").visibility = false;
        if ((ph1 = ph2 = e === "star_power_ph")) {
            ((MovieClipHelper).MovieClipHelper).replaceChildWithMovieClip(child, "icon_ph", "sc/ui.sc", "icon_sp_shelly_2");
        } /* if 0xbdffb */
        /* jump -> 0xbe106 */
        if ((ph1 = ph2 = e === "item_ph")) {
            ((MovieClipHelper).MovieClipHelper).replaceChildWithMovieClip(child, "icon_ph", "sc/ui.sc", "icon_item_shelly_2");
        } /* if 0xbe02a */
        /* jump -> 0xbe106 */
        if ((ph1 = ph2 = e === "gear1_ph")) {
            ((MovieClipHelper).MovieClipHelper).replaceChildWithMovieClip(child, "icon_ph", "sc/ui.sc", "icon_gear_damage");
            ph1 = (child).getChildByName("icon_ph");
            (ph1).gotoAndStopFrameIndex(1);
        } /* if 0xbe077 */
        /* jump -> 0xbe106 */
        if ((ph1 = ph2 = e === "gear2_ph")) {
            ((MovieClipHelper).MovieClipHelper).replaceChildWithMovieClip(child, "icon_ph", "sc/ui.sc", "icon_gear_shield");
            ph2 = (child).getChildByName("icon_ph");
            (ph2).gotoAndStopFrameIndex(1);
        } /* if 0xbe0c3 */
        /* jump -> 0xbe105 */
        if ((ph1 = ph2 = e === "overcharge_ph")) {
            ((MovieClipHelper).MovieClipHelper).replaceChildWithMovieClip(child, "icon_ph", "sc/ui.sc", "icon_overcharge_shelly_1");
            (child).getChildByName("notification").visibility = false;
            (child).getChildByName("notification");
        } /* if 0xbe105 */
        if ((e).includes("gear")) {
            bg = (child).getChildByName("bg_gear");
            (bg).gotoAndStopFrameIndex(1);
            return;
        } /* if 0xbe137 (open) */
});
        field = (clip).getTextFieldByName("name_txt");
        if (field) {
            (field).setTextScaleIfNecessary(((StringTable).StringTable).getString("TID_RANKED_ENEMY_P1"));
        } /* if 0xbdeb9 */
        statusField = (clip).getTextFieldByName("status_txt");
        if (statusField) {
            (statusField).setTextScaleIfNecessary(((StringTable).StringTable).getString("TID_TEAM_MEMBER_STATUS_READY"));
        } /* if 0xbdef0 */
        clip.scale = 1;
        clip.y = ((clip).y - 15);
        (iconSprite).addChild(clip);
        iconSprite.scale = 0.88;
        return iconSprite;
};
        HideBattlingStatusFromOthersCallback = function HideBattlingStatusFromOthersCallback() {
    var iconSprite, battleClip, deniedClip, ingameHudTopClip, spectateCountChild, eyeballClip;
        iconSprite = new (Sprite).Sprite(1);
        battleClip = ((StringTable).StringTable).getMovieClip("sc/ui.sc", "icon_skins_outlaws");
        deniedClip = ((StringTable).StringTable).getMovieClip("sc/sprays_1.sc", "spray_denied");
        ingameHudTopClip = ((StringTable).StringTable).getMovieClip("sc/ui.sc", "ingame_hud_top");
        spectateCountChild = (ingameHudTopClip).getChildByName("spectate_count");
        eyeballClip = (spectateCountChild).getChildById(1);
        eyeballClip.scale = 0.5;
        eyeballClip.x = ((battleClip).width / 3);
        eyeballClip.y = ((battleClip).height / 3.4);
        deniedClip.visibility = true;
        (deniedClip).setXY(0, 0);
        deniedClip.scale = 1.1;
        (iconSprite).addChild(battleClip);
        (iconSprite).addChild(eyeballClip);
        (iconSprite).addChild(deniedClip);
        return iconSprite;
};
        InstantStarrDropOpeningCallback = function InstantStarrDropOpeningCallback() {
    var clip, child;
        clip = ((StringTable).StringTable).getMovieClip("sc/emoji_1.sc", "emoji_starr");
        child = (clip).getChildById(1);
        (child).gotoAndStopFrameIndex(210);
        return clip;
};
        LegacyNamesCallback = function LegacyNamesCallback() {
    var clip, child;
        clip = ((StringTable).StringTable).getMovieClip("sc/emoji_1.sc", "emoji_rico_classic_old");
        child = (clip).getChildById(1);
        (child).gotoAndStopFrameIndex(160);
        return clip;
};
        ShowDebugMenuButtonCallback = function ShowDebugMenuButtonCallback() {
    var iconSprite, clip;
        ((GameMain).GameMain).loadAsset("sc/debug.sc");
        iconSprite = new (Sprite).Sprite(1);
        clip = ((StringTable).StringTable).getMovieClip("sc/debug.sc", "debug_button");
        (clip).setText("txt", "D");
        (clip).setXY(-30, 25);
        (iconSprite).addChild(clip);
        iconSprite.scale = 1.8;
        return iconSprite;
};
        RandomLocalizationCallback = function RandomLocalizationCallback() {
    var iconSprite, tfClip, iconRandomParent, iconRandom, textField;
        iconSprite = new (Sprite).Sprite(1);
        tfClip = ((StringTable).StringTable).getMovieClip("sc/ui.sc", "popover_text_left");
        iconRandomParent = ((StringTable).StringTable).getMovieClip("sc/ui.sc", "event_icon_random");
        iconRandom = (iconRandomParent).getChildById(1);
        textField = (tfClip).getTextFieldByName("text");
        textField.color = 4294967295.0;
        textField.fontOutline = true;
        textField.text = "TID_";
        textField.fontSize = 24;
        textField.x = ((textField).x + -35);
        textField.y = ((textField).y + -15);
        iconRandom.x = ((iconRandom).x + 25);
        iconRandom.y = ((iconRandom).y + 0);
        iconRandom.scale = 0.3;
        (iconSprite).addChild(textField);
        (iconSprite).addChild(iconRandom);
        iconSprite.scale = 1.95;
        return iconSprite;
};
        SlowModeCallback = function SlowModeCallback() {
    var iconSprite, skullClip, iconGearSpeed, iconSpeedClip;
        iconSprite = new (Sprite).Sprite(1);
        skullClip = ((StringTable).StringTable).getMovieClip("sc/ui.sc", "skull_atlasgenerator_texture_luminance_alpha");
        iconGearSpeed = ((StringTable).StringTable).getMovieClip("sc/ui.sc", "icon_gear_speed");
        iconSpeedClip = (iconGearSpeed).getChildById(2);
        (iconSpeedClip).colorTransform.c1r = 255;
        (iconSpeedClip).colorTransform.c2r = 255;
        (iconSpeedClip).colorTransform.c1g = 0;
        (iconSpeedClip).colorTransform.c2g = 0;
        (iconSpeedClip).colorTransform.c1b = 0;
        (iconSpeedClip).colorTransform.c2b = 0;
        iconSpeedClip.x = ((skullClip).width / 3);
        iconSpeedClip.y = ((skullClip).height / 3.3);
        iconSpeedClip.scale = 0.33;
        (iconSpeedClip).rotate(180);
        (iconSprite).addChild(skullClip);
        (iconSprite).addChild(iconSpeedClip);
        return iconSprite;
};
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.VisualChromaticNamePinCallback = VisualChromaticNamePinCallback;
        exports.DisablePinAnimationCallback = DisablePinAnimationCallback;
        exports.SharedBackgroundCallback = SharedBackgroundCallback;
        exports.RandomThemesCallback = RandomThemesCallback;
        exports.RandomThemesAfterBattleCallback = RandomThemesAfterBattleCallback;
        exports.RandomThemesMusicIndependencyCallback = RandomThemesMusicIndependencyCallback;
        exports.ShowFPSCounterCallback = ShowFPSCounterCallback;
        exports.HideHomeScreenTextCallback = HideHomeScreenTextCallback;
        exports.EnforceOldFriendsListCallback = EnforceOldFriendsListCallback;
        exports.ShowSkinNamesInProfileCallback = ShowSkinNamesInProfileCallback;
        exports.BattleTextChatCallback = BattleTextChatCallback;
        exports.ShowEnemyAmmoStatusCallback = ShowEnemyAmmoStatusCallback;
        exports.ShowTrophiesAboveHeadCallback = ShowTrophiesAboveHeadCallback;
        exports.ShowCameraButtonCallback = ShowCameraButtonCallback;
        exports.HideUltiAimingCallback = HideUltiAimingCallback;
        exports.ShowFastPlayAgainButtonCallback = ShowFastPlayAgainButtonCallback;
        exports.ShowAutoPlayAgainRadioButtonCallback = ShowAutoPlayAgainRadioButtonCallback;
        exports.HideBattleBlackBarsCallback = HideBattleBlackBarsCallback;
        exports.BattleEndInstantExitCallback = BattleEndInstantExitCallback;
        exports.BackgroundMatchmakingCallback = BackgroundMatchmakingCallback;
        exports.AntiAfkKickCallback = AntiAfkKickCallback;
        exports.ColoredDamageCallback = ColoredDamageCallback;
        exports.DoNotShowBattleHighlightCallback = DoNotShowBattleHighlightCallback;
        exports.ShowBattleConnectionIndicatorCallback = ShowBattleConnectionIndicatorCallback;
        exports.ShowOwnPlayerCoordinatesCallback = ShowOwnPlayerCoordinatesCallback;
        exports.ShowCharactersInNamesCallback = ShowCharactersInNamesCallback;
        exports.ShamePlayersWithThumbsdownPinCallback = ShamePlayersWithThumbsdownPinCallback;
        exports.ShowAllianceMembersInBattleCallback = ShowAllianceMembersInBattleCallback;
        exports.ShowBlacklistedPlayersInBattleCallback = ShowBlacklistedPlayersInBattleCallback;
        exports.UseBattleProxyCallback = UseBattleProxyCallback;
        exports.DisableShakeCallback = DisableShakeCallback;
        exports.ExtendedTrajectoryCallback = ExtendedTrajectoryCallback;
        exports.HitboxRendererCallback = HitboxRendererCallback;
        exports.EnemyTracerCallback = EnemyTracerCallback;
        exports.AttackRangeIndicatorCallback = AttackRangeIndicatorCallback;
        exports.HighlightLeonCloneCallback = HighlightLeonCloneCallback;
        exports.EnforceBattleChatButtonCallback = EnforceBattleChatButtonCallback;
        exports.ShowDPSCallback = ShowDPSCallback;
        exports.AllyRespawnTimerCallback = AllyRespawnTimerCallback;
        exports.LowResGraphicsCallback = LowResGraphicsCallback;
        exports.DisableSkinsCallback = DisableSkinsCallback;
        exports.DefaultEnvironmentsCallback = DefaultEnvironmentsCallback;
        exports.FriendListOptimizationCallback = FriendListOptimizationCallback;
        exports.BSDProxyCallback = BSDProxyCallback;
        exports.ShowFriendlyRoomOpponentsCallback = ShowFriendlyRoomOpponentsCallback;
        exports.HideBattlingStatusFromOthersCallback = HideBattlingStatusFromOthersCallback;
        exports.InstantStarrDropOpeningCallback = InstantStarrDropOpeningCallback;
        exports.LegacyNamesCallback = LegacyNamesCallback;
        exports.ShowDebugMenuButtonCallback = ShowDebugMenuButtonCallback;
        exports.RandomLocalizationCallback = RandomLocalizationCallback;
        exports.SlowModeCallback = SlowModeCallback;
        StringTable = __webpack_require__(9250);
        MovieClipHelper = __webpack_require__(7404);
        Sprite = __webpack_require__(3217);
        LogicRandom = __webpack_require__(884);
        GameMain = __webpack_require__(8775);
        EMOJIS = { emoji_colette: 159, emoji_piper: 72, emoji_bea: 109, emoji_bibi: 109, emoji_crow: 99 };
        ShowFriendlyRoomOpponents_DISABLE_CHILDRENS = ["hidden_hero", "icon_roomleader", "invite_player", "invite_pending", "player_dot", "swap_hilite", "slot_off_indicator", "button_slot_switch", "temp_brawler_mode"];
        ShowFriendlyRoomOpponents_skillsChilds = ["star_power_ph", "item_ph", "gear1_ph", "gear2_ph", "overcharge_ph"];
        return;
};

// --------------------- MODULE 194 — IconSelector ---------------------

// ============================================================ //
// webpack module 194  —  IconSelector
// exports: IconSelectorPopup
// deps: 699 (FileManager), 1027 (IconItem), 1978 (Libc), 4272 (EDebugger), 4934 (GUI), 5039 (GameButton), 5952 (SafeJNI), 7265 (Localisation), 8261 (ListContainerPopup), 9240 (AlternateIconManager), 9786 (FPSCounter)
// ============================================================ //

__webpack_modules__[194] = function IconSelector_factory(__unused_webpack_module, exports, __webpack_require__) {
    var ListContainerPopup, FileManager, Localisation, IconItem, GameButton, SafeJNI, GUI, EDebugger, FPSCounter, AlternateIconManager, Libc, IconSelectorPopup, <class_fields_init>, IconSelectorPopup;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.IconSelectorPopup = undefined;
        ListContainerPopup = __webpack_require__(8261);
        FileManager = __webpack_require__(699);
        Localisation = __webpack_require__(7265);
        IconItem = __webpack_require__(1027);
        GameButton = __webpack_require__(5039);
        SafeJNI = __webpack_require__(5952);
        GUI = __webpack_require__(4934);
        EDebugger = __webpack_require__(4272);
        FPSCounter = __webpack_require__(9786);
        AlternateIconManager = __webpack_require__(9240);
        Libc = __webpack_require__(1978);
        static refreshItems () {
    var iconValues, iconIndex, icon, iconItem, naviHeight;
        ((this).container).clearEntries();
        iconValues = (Object).values((this).iconList);
        iconIndex = 0;
        while ((iconIndex < iconValues.length)) {
            icon = iconValues[iconIndex];
            iconItem = new (IconItem).IconItem(icon);
            (iconItem).setCustomButtonListener(((this).buttonPressed).bind(this), ("").concat(iconIndex, "_icon_item_button"));
            iconItem.id = iconIndex;
            ((this).container).addEntry(iconItem);
            iconIndex = (++iconIndex);
        } /* while 0xc510b */
        naviHeight = (this).getNaviHeight();
        ((this).container).refreshEntryPositions(4, naviHeight, 2, 0, 0, 0, -1);
        return;
};
        static buttonPressed (self, button) {
    var iconButton, iconId, iconKeys, selectedKey, iconChangerClassId, staticObjectMethodResult, iconReferenceUtfStr, iconsKeysUtfStr;
        iconButton = new (GameButton).GameButton(button);
        iconId = (iconButton).id;
        iconKeys = (Object).keys((this).iconList);
        selectedKey = iconKeys[iconId];
        if (((Process).platform === "darwin")) {
            return;
        } /* if 0xc522e */
        iconChangerClassId = ((SafeJNI).SafeJNI).findClass("bsd/suitcase/addons/IconChanger");
        staticObjectMethodResult = ((SafeJNI).SafeJNI).callStaticObjectMethodV(iconChangerClassId, "changeIcon", "(Landroid/content/Context;Ljava/lang/String;Ljava/lang/String;)V");
        iconReferenceUtfStr = ((SafeJNI).SafeJNI).newStringUTF(("com.supercell.brawlstars.").concat(selectedKey));
        iconsKeysUtfStr = ((SafeJNI).SafeJNI).newStringUTF(((iconKeys).join(";")).replace("GameApp;", ""));
        ((SafeJNI).SafeJNI).callVoidMethod(iconChangerClassId, staticObjectMethodResult, iconsKeysUtfStr, iconReferenceUtfStr);
        ((GUI).GUI).showFloaterTextAtDefaultPosition(((Localisation).Localisation).getString("IconSetText"), 4290772736.0);
        ((FPSCounter).FPSCounter).toggle(false);
        ((EDebugger).EDebugger).clear();
        return;
};
        <class_fields_init> = undefined;
        IconSelectorPopup;
        class IconSelectorPopup extends <class_fields_init> = (ListContainerPopup).ListContainerPopup {
            constructor () {
    var rawList, this.active_func, new.target;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        this = super({ Title: ((Localisation).Localisation).getString("IconChangerTitle") });
        if (<class_fields_init>) {
        } /* if 0xc4fad */
        this.iconList = {};
        (this).adjustPopupHeaderButtons("icon_changer_menu");
        rawList = ((FileManager).FileManager).readAAsset("bsd/internal/icon_changer_preview/list.json", "r");
        if ((!rawList)) {
            return this;
        } /* if 0xc4fee */
        this.iconList = (JSON).parse(rawList);
        (this).refreshItems();
        return this;
}
            open () {
    var abiList, isEmulator, e;
        if (((Process).platform === "darwin")) {
            if ((!((AlternateIconManager).AlternateIconManager).isSupported())) {
                return;
            } /* if 0xc4e49 */
            return;
        } /* if 0xc4e64 */
        abiList = ((Libc).Libc).malloc(100);
        ((Libc).Libc).systemPropertyGet((Memory).allocUtf8String("ro.dalvik.vm.isa.arm"), abiList);
        isEmulator = false;
        /* CATCH -> 0xc4ec7 (try region) */
        isEmulator = ((abiList).readUtf8String()).includes("x86");
        ((GUI).GUI).showPopup(new IconSelectorPopup(), true, true, false);
        /* jump -> 0xc4ece */
        e = ((GUI).GUI).showFloaterTextAtDefaultPosition(((Localisation).Localisation).getString("IconChangerNotSupportediOSDevice"));
        /* CATCH -> 0xc4ed0 (try region) */
        abiList = isEmulator = <underflow>;
        /* jump -> 0xc4ece */
        throw <underflow>;
        ((Libc).Libc).free(abiList);
        if (isEmulator) {
            return;
        } /* if 0xc4f0d */
        return;
}
            applyIconIOS (selectedKey) {
    var targetIcon;
        if ((selectedKey === "CurrentUpdateIcon")) {
        } /* if 0xc538b */
        /* jump -> 0xc538c */
        targetIcon = selectedKey;
        return;
}
        }
        IconSelectorPopup = FPSCounter = IconSelectorPopup;
        exports.IconSelectorPopup = IconSelectorPopup;
        return;
};

// --------------------- MODULE 1027 — IconItem ---------------------

// ============================================================ //
// webpack module 1027  —  IconItem
// exports: IconItem
// deps: 699 (FileManager), 5039 (GameButton), 6224 (DownloadedImage), 8261 (ListContainerPopup), 9250 (StringTable)
// ============================================================ //

__webpack_modules__[1027] = function IconItem_factory(__unused_webpack_module, exports, __webpack_require__) {
    var GameButton, ListContainerPopup, StringTable, FileManager, DownloadedImage, IconItem, <class_fields_init>, IconItem;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.IconItem = undefined;
        GameButton = __webpack_require__(5039);
        ListContainerPopup = __webpack_require__(8261);
        StringTable = __webpack_require__(9250);
        FileManager = __webpack_require__(699);
        DownloadedImage = __webpack_require__(6224);
        <class_fields_init> = undefined;
        IconItem;
        class IconItem extends <class_fields_init> = (GameButton).GameButton {
            constructor (iconPath) {
    var iconClip, ondemandDir, iconOndemandPath, downloadedImage, this.active_func, new.target;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        this = super();
        if (<class_fields_init>) {
        } /* if 0xb342b */
        ((this).instance).writePointer((ListContainerPopup).countryPopupListItemVtableAddr);
        iconClip = ((StringTable).StringTable).getMovieClip("sc/ui.sc", "country_item");
        (this).setMovieClip(iconClip, 1);
        ondemandDir = (((FileManager).FileManager).rootDirPath + "/cache/ondemand/");
        if ((!((FileManager).FileManager).isFilepath(ondemandDir))) {
            ((FileManager).FileManager).createDirectory(ondemandDir);
        } /* if 0xb34af */
        iconOndemandPath = (ondemandDir + iconPath);
        if ((!((FileManager).FileManager).isFilepath(iconOndemandPath))) {
            ((FileManager).FileManager).writeToFile(iconOndemandPath, "wb", ((FileManager).FileManager).readAAsset(("bsd/internal/icon_changer_preview/" + iconPath), "rb"));
        } /* if 0xb3500 */
        downloadedImage = new (DownloadedImage).DownloadedImage(iconPath, iconClip);
        (downloadedImage).setSize(120, 120);
        (this).addChild(downloadedImage);
        return this;
}
        }
        IconItem = v8 = IconItem;
        exports.IconItem = IconItem;
        return;
};

// --------------------- MODULE 68 — UniItem ---------------------

// ============================================================ //
// webpack module 68  —  UniItem
// exports: UniItem
// deps: 5039 (GameButton), 7265 (Localisation), 8261 (ListContainerPopup), 9250 (StringTable)
// ============================================================ //

__webpack_modules__[68] = function UniItem_factory(__unused_webpack_module, exports, __webpack_require__) {
    var GameButton, StringTable, Localisation, ListContainerPopup, UniItem, <class_fields_init>, UniItem;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.UniItem = undefined;
        GameButton = __webpack_require__(5039);
        StringTable = __webpack_require__(9250);
        Localisation = __webpack_require__(7265);
        ListContainerPopup = __webpack_require__(8261);
        static setText (text) {
    var clip, buttonTextField;
        clip = (this).getMovieClip();
        buttonTextField = (clip).getTextFieldByName("Text");
        return;
};
        <class_fields_init> = undefined;
        UniItem;
        class UniItem extends <class_fields_init> = (GameButton).GameButton {
            constructor (buttonName, selectedCondition) {
    var uniMovieClip, buttonTextField, this.active_func, new.target;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        this = super();
        if (<class_fields_init>) {
        } /* if 0xb6037 */
        ((this).instance).writePointer((ListContainerPopup).countryPopupListItemVtableAddr);
        uniMovieClip = ((StringTable).StringTable).getMovieClip("sc/ui.sc", "country_item");
        (this).setMovieClip((uniMovieClip).instance, 1);
        buttonTextField = (uniMovieClip).getTextFieldByName("Text");
        buttonTextField.colorTag = true;
        (buttonTextField).setTextScaleIfNecessary(((Localisation).Localisation).getString(buttonName));
        if (selectedCondition) {
        } /* if 0xb60ca */
        /* jump -> 0xb60cb */
        (+(!selectedCondition()))(1);
        return this;
}
        }
        UniItem = v8 = UniItem;
        exports.UniItem = UniItem;
        return;
};

