// ============================================================= //
// FEATURE: Show brawlers in names
// Config key: ShowCharactersInNames (default false)
// TID prefix: ShowCharactersInNames
// Icon: ShowCharactersInNamesCallback (menu/icons.js, module 2120)
// Wiring: LogicPlayer.buildBattleName (game/players.js, module 6013) —
// appends "(Brawler)" to battle names
// ============================================================= //

Config.configStatic.ShowCharactersInNames = false;

// Strings ship in the game asset (bsd/internal/localization.json),
// not in the JS localisation overrides:
//   ShowCharactersInNames_name        = "Show brawlers in names"
//   ShowCharactersInNames_descEnabled = "When enabled, brawlers will be shown in players' names."

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

// The branch owned by this feature — LogicPlayer.buildBattleName
// (module 6013, game/players.js). The brawler's display name is resolved
// through its TID and appended in parentheses:
//
//     var emotes = "";
//     if (Config.Config.config.ShowCharactersInNames) {
//         var characterName = character.getLogicHeroSetup().getLogicCharacterData();
//         if (characterName) {
//             emotes = "(".concat(StringTable.StringTable.getString(characterName.getTID()), ")");
//         }
//     }
//     return [playerName, emotes].filter(Boolean).join(" ");
//
// The full decoded buildBattleName (including the 🤡 shame prefix owned by
// highlight-players-who-have-negative-pins-in-battle.js) is reproduced in
// that sibling file — both decorations come from the same method.
