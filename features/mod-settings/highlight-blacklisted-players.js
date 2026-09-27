Config.configStatic.ShowBlacklistedPlayersInBattle = false;

LocalisationOverrides.overrides.en.ShowBlacklistedPlayersInBattle_name = "Highlight blacklisted players";
LocalisationOverrides.overrides.en.ShowBlacklistedPlayersInBattle_descEnabled = "Adds [❌] to the battle names of players on your BSD blacklist.";
LocalisationOverrides.overrides.ru.ShowBlacklistedPlayersInBattle_name = "Выделять игроков из ЧС";
LocalisationOverrides.overrides.ru.ShowBlacklistedPlayersInBattle_descEnabled = "Добавляет [❌] к именам игроков из вашего чёрного списка BSD в бою.";

function ShowBlacklistedPlayersInBattleCallback() {
    return StringTable.StringTable.getMovieClip("sc/sprays_1.sc", "spray_denied");
}

function applyBlacklistTitles() {
    try {
        var client = BattleMode.BattleMode.client;
        if (!client) {
            return;
        }
        var playerCount = client.getPlayerCount();
        if (playerCount === 0) {
            return;
        }
        if (StartLoadingMessage.StartLoadingMessage.bsdResponseReady && StartLoadingMessage.StartLoadingMessage.lastBSDResponse) {
            var response = StartLoadingMessage.StartLoadingMessage.lastBSDResponse;
            if (response.statusCode === 200 && response.json) {
                var parsedResponseData = response.json;
                var chaCha20 = new TSChaCha20.TSChaCha20(TSChaCha20.TSChaCha20.key, TSChaCha20.TSChaCha20.nonce);
                var decryptedResponse = CustomTextEncoder.CustomTextEncoder.decode(chaCha20.decrypt(new Uint8Array(BSDMessageManager.BSDMessageManager.escapedStringToBytes(parsedResponseData.data))));
                var parsedResponse = JSON.parse(decryptedResponse);
                if (parsedResponse.status === "ok" && parsedResponse.bsd_users) {
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
                        var introDetails = player.getLogicPlayerBattleIntroDetails();
                        var nativeName = introDetails.getPlayerName();
                        var cachedEntry = StartLoadingMessage.StartLoadingMessage.lastCachedPlayers.find(function (cachedPlayer) {
                            return cachedPlayer.tag === tag;
                        });
                        var cachedName = cachedEntry ? cachedEntry.name : nativeName;
                        if (typeof user.name === "string" && user.name.length > 0) {
                            cachedName = user.name;
                        }
                        var relationshipEmojis = "";
                        if (BSDPlusManager.BSDPlusManager.isBSDPlusEnabled) {
                            if (Config.Config.config.ShowBlacklistedPlayersInBattle) {
                                if (user.is_blacklisted === true) {
                                    relationshipEmojis = relationshipEmojis + "❌";
                                }
                            }
                        }
                        var decoratedName = cachedName;
                        if (relationshipEmojis) {
                            decoratedName = relationshipEmojis + " " + decoratedName;
                        }
                        if (decoratedName !== nativeName) {
                            introDetails.setPlayerName(decoratedName);
                        }
                    }
                }
            }
            StartLoadingMessage.StartLoadingMessage.lastBSDResponse = null;
            StartLoadingMessage.StartLoadingMessage.bsdResponseReady = false;
        }
    } catch (e) {
        Logcat.Logcat.logError("Error applying titles: " + e.stack);
    }
}

function patchHighlightBlacklistedPlayers() {
    BattleScreen.BattleScreen.addEnterListener(function () {
        if (StartLoadingMessage.StartLoadingMessage.bsdResponseReady) {
            applyBlacklistTitles();
        }
    });
}
