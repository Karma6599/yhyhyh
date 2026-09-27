Config.configStatic.ShowCharactersInNames = false;

LocalisationOverrides.overrides.en.ShowCharactersInNames_name = "Show brawlers in names";
LocalisationOverrides.overrides.en.ShowCharactersInNames_descEnabled = "When enabled, brawlers will be shown in players' names.";

function ShowCharactersInNamesCallback() {
    var iconSprite = new Sprite.Sprite(1);
    var trophyClip = StringTable.StringTable.getMovieClip("sc/ui.sc", "popover_text_left");
    var emojiClip = StringTable.StringTable.getMovieClip("sc/emoji_1.sc", "emoji_colt");
    var child = emojiClip.getChildById(1);
    child.gotoAndStopFrameIndex(99);
    var trophyTf = trophyClip.getTextFieldByName("text");
    trophyTf.color = 4294967295.0;
    trophyTf.fontOutline = true;
    trophyTf.text = "... (".concat(StringTable.StringTable.getString("TID_GUNSLINGER"), ")");
    trophyTf.fontSize = 30;
    trophyTf.x = trophyTf.x + -55;
    trophyTf.y = -90;
    emojiClip.scale = 3;
    emojiClip.y = 25;
    iconSprite.addChild(emojiClip);
    iconSprite.addChild(trophyTf);
    return iconSprite;
}

function buildBattleName(playerName) {
    var character = this;
    if (playerName === undefined) {
        playerName = "";
    }
    var emotes = "";
    if (Config.Config.config.ShowCharactersInNames) {
        var characterName = character.getLogicHeroSetup().getLogicCharacterData();
        if (characterName) {
            emotes = "(".concat(StringTable.StringTable.getString(characterName.getTID()), ")");
        }
    }
    return [playerName, emotes].filter(Boolean).join(" ");
}
