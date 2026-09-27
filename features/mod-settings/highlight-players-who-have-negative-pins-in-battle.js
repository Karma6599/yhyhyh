Config.configStatic.ShamePlayersWithThumbsdownPin = false;

LocalisationOverrides.overrides.en.ShamePlayersWithThumbsdownPin_name = "Highlight players who have negative pins in battle";
LocalisationOverrides.overrides.en.ShamePlayersWithThumbsdownPin_descEnabled = "When enabled, players with negative pins will get a \"[🤡]\" prefix to their name in battle.";

function ShamePlayersWithThumbsdownPinCallback() {
    var thumbdownClip = StringTable.StringTable.getMovieClip("sc/emoji_1.sc", "emoji_thumbsdown");
    thumbdownClip.gotoAndStopFrameIndex(109);
    return thumbdownClip;
}

var THUMBDOWN_EMOTE = "emoji_thumbsdown";
var FIND_EMOTE_FUNC = function (e) {
    return e.getName() === THUMBDOWN_EMOTE;
};
var negativeEmotes = ["emoji_thumbsdown", "emoji_champie_thumbsdown", "emoji_clown", "emoji_stop"];

function buildBattleName(playerName) {
    var character = this;
    if (playerName === undefined) {
        playerName = "";
    }
    var relationshipEmojis = "";
    if (Config.Config.config.ShamePlayersWithThumbsdownPin) {
        var battleEmotes = character.getLogicHeroSetup().getLogicBattleEmotes();
        var emojis = battleEmotes ? battleEmotes.getEmotes() : null;
        if (emojis && emojis.some(function (emote) {
            return negativeEmotes.includes(emote.getName());
        })) {
            relationshipEmojis = relationshipEmojis + "🤡";
        }
    }
    playerName = playerName + relationshipEmojis;
    return playerName;
}
