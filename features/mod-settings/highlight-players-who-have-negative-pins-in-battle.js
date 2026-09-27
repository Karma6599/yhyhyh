// ============================================================= //
// FEATURE: Highlight players who have negative pins in battle
// Config key: ShamePlayersWithThumbsdownPin (default false)
// TID prefix: ShamePlayersWithThumbsdownPin
// Icon: ShamePlayersWithThumbsdownPinCallback (menu/icons.js, module 2120)
// Wiring: LogicPlayer.buildBattleName (game/players.js, module 6013) —
// players whose equipped pins include a negative one get a "🤡" prefix
// ============================================================= //

Config.configStatic.ShamePlayersWithThumbsdownPin = false;

// Strings ship in the game asset (bsd/internal/localization.json),
// not in the JS localisation overrides:
//   ShamePlayersWithThumbsdownPin_name        = "Highlight players who have negative pins in battle"
//   ShamePlayersWithThumbsdownPin_descEnabled = "When enabled, players with negative pins will get a "[🤡]" prefix to their name in battle."

function ShamePlayersWithThumbsdownPinCallback() {
    var thumbdownClip = StringTable.StringTable.getMovieClip("sc/emoji_1.sc", "emoji_thumbsdown");
    thumbdownClip.gotoAndStopFrameIndex(109);
    return thumbdownClip;
}

// LogicPlayer (module 6013, game/players.js) — battle-name builder.
// Both name decorations of this class are driven from here: the 🤡 shame
// prefix (this feature) and the "(Brawler)" suffix (show-brawlers-in-names.js).
function buildBattleName(playerName) {
    if (playerName === undefined) {
        playerName = "";
    }
    var character = this;
    var relationshipEmojis = "";
    if (Config.Config.config.ShamePlayersWithThumbsdownPin) {
        var battleEmotes = character.getLogicHeroSetup().getLogicBattleEmotes();
        if (battleEmotes) {
            var emojis = battleEmotes.getEmotes();
            if (emojis && emojis.some(function (emote) {
                return LogicPlayer.LogicPlayer.negativeEmotes.includes(emote.getName());
            })) {
                relationshipEmojis = relationshipEmojis + "🤡";
            }
        }
    }
    playerName = relationshipEmojis + playerName;
    var emotes = "";
    if (Config.Config.config.ShowCharactersInNames) {
        var characterName = character.getLogicHeroSetup().getLogicCharacterData();
        if (characterName) {
            emotes = "(".concat(StringTable.StringTable.getString(characterName.getTID()), ")");
        }
    }
    return [playerName, emotes].filter(Boolean).join(" ");
}

// LogicPlayer static (module 6013) — the pins considered "negative":
//   LogicPlayer.negativeEmotes = ["emoji_thumbsdown", "emoji_champie_thumbsdown", "emoji_clown", "emoji_stop"];
