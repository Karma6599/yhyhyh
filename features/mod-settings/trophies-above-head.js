Config.configStatic.ShowTrophiesAboveHead = true;

LocalisationOverrides.overrides.en.ShowTrophiesAboveHead_name = "Trophies above head";
LocalisationOverrides.overrides.en.ShowTrophiesAboveHead_descEnabled = "Shows player trophies above their heads in battle.";
LocalisationOverrides.overrides.ru.ShowTrophiesAboveHead_name = "Кубки над головой";
LocalisationOverrides.overrides.ru.ShowTrophiesAboveHead_descEnabled = "Показывает кубки игроков над их головами в бою.";

function ShowTrophiesAboveHeadCallback() {
    var iconSprite = new Sprite.Sprite(1);
    var trophy = StringTable.StringTable.getMovieClip("sc/ui.sc", "icon_trophy");
    var trophyClip = StringTable.StringTable.getMovieClip("sc/ui.sc", "popover_text_left");
    var emojiClip = getRandomStaticDevEmoji();
    var trophyTf = trophyClip.getTextFieldByName("text");
    trophyTf.color = 0xffffd700;
    trophyTf.fontOutline = true;
    trophyTf.text = "50000 | 1000";
    trophyTf.fontSize = 28;
    trophyTf.x -= 55;
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

StartLoadingMessage.playerTrophies = new Map();
StartLoadingMessage.playerCharacterTrophies = new Map();

function applyTrophiesFromBSDResponse(client, playerCount, parsedResponse) {
    if (!parsedResponse || parsedResponse.status !== "ok" || !parsedResponse.bsd_users) {
        return;
    }
    for (var i = 0; i < playerCount; i++) {
        var player = client.getPlayer(i);
        if (!player || !player.playerId) {
            continue;
        }
        var tag = HashTagCodeGenerator.HashTagCodeGenerator.convertLongToPlayerTag(player.playerId);
        var user = parsedResponse.bsd_users["#" + tag] || parsedResponse.bsd_users[tag];
        if (!user) {
            continue;
        }
        var nativeName = player.getLogicPlayerBattleIntroDetails().getPlayerName();
        var cachedName = typeof user.name === "string" && user.name.length > 0 ? user.name : nativeName;
        if (user.trophies !== undefined && user.trophies !== -1) {
            StartLoadingMessage.playerTrophies.set(cachedName, user.trophies);
        }
        if (user.character !== undefined && user.character !== -1) {
            StartLoadingMessage.playerCharacterTrophies.set(cachedName, user.character);
        }
    }
}

var Character_ctor = Libg.Libg.offset(8449092, 0);
var Character_updateHealthBar = Libg.Libg.offset(8498752, 0);
var playerNameClipOffset = LogicMemory.LogicMemory.offset(1424);
var trophyOverlays = new Map();

function findTrophiesForName(playerName, characterTrophies) {
    var total = null;
    var onBrawler = null;
    for (var [name, trophies] of StartLoadingMessage.playerTrophies) {
        if (playerName.includes(name)) {
            total = trophies;
            break;
        }
    }
    for (var [name, trophies] of StartLoadingMessage.playerCharacterTrophies) {
        if (playerName.includes(name)) {
            onBrawler = trophies;
            break;
        }
    }
    return characterTrophies ? onBrawler : total;
}

function patchTrophiesAboveHead() {
    Interceptor.attach(Character_ctor, {
        onEnter(args) {
            this.character = args[0];
        },
        onLeave() {
            var clip = this.character.add(playerNameClipOffset).readPointer();
            if (clip.isNull()) {
                return;
            }
            try {
                var trophyClip = StringTable.StringTable.getMovieClip("sc/ui.sc", "popover_text_left");
                var trophyTf = trophyClip.getTextFieldByName("text");
                if (trophyTf) {
                    trophyTf.color = 0xffffd700;
                    trophyTf.fontOutline = true;
                    trophyTf.fontSize = 16;
                    trophyTf.align = 0;
                    trophyTf.visibility = false;
                    new Sprite.Sprite(clip).addChildAt(trophyTf, 0);
                    var trophyIcon = StringTable.StringTable.getMovieClip("sc/ui.sc", "icon_trophy");
                    trophyIcon.scale = 0.15;
                    trophyIcon.visibility = false;
                    new Sprite.Sprite(clip).addChildAt(trophyIcon, 0);
                    trophyOverlays.set(this.character.toString(), { textField: trophyTf.instance, icon: trophyIcon.instance });
                }
            } catch (e) {
            }
        }
    });
    Interceptor.attach(Character_updateHealthBar, {
        onEnter(args) {
            var overlay = trophyOverlays.get(args[0].toString());
            if (!overlay) {
                return;
            }
            var clip = args[0].add(playerNameClipOffset).readPointer();
            if (clip.isNull()) {
                return;
            }
            var nameField = new MovieClip.MovieClip(clip).getTextFieldByName("player_name");
            if (!nameField) {
                return;
            }
            var totalTrophies = findTrophiesForName(nameField.text);
            var characterTrophies = findTrophiesForName(nameField.text, true);
            var visible = Config.config.ShowTrophiesAboveHead === true && totalTrophies != null;
            new TextField.TextField(overlay.textField).visibility = visible;
            new DisplayObject.DisplayObject(overlay.icon).visibility = visible;
            if (visible) {
                new TextField.TextField(overlay.textField).text = characterTrophies != null ? totalTrophies + " | " + characterTrophies : String(totalTrophies);
            }
        }
    });
}
