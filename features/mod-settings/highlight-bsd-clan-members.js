// ============================================================= //
// FEATURE: Highlight BSD-clan members
// Config key: ShowAllianceMembersInBattle (default false)
// TID prefix: ShowAllianceMembersInBattle
// Icon: ShowAllianceMembersInBattleCallback (menu/icons.js, module 2120)
// Wiring: StartLoadingMessage.applyPendingTitles
// (messages/game-protocol.js, module 3000) — injects the clan tag
// into battle names from the BSD+ users response
// ============================================================= //

Config.configStatic.ShowAllianceMembersInBattle = false;

LocalisationOverrides.overrides.en.ShowAllianceMembersInBattle_name = "Highlight BSD-clan members";
LocalisationOverrides.overrides.en.ShowAllianceMembersInBattle_descEnabled = "Adds [🛡️] to the battle names of players in your BSD-clan.";
LocalisationOverrides.overrides.ru.ShowAllianceMembersInBattle_name = "Выделять соклановцев BSD";
LocalisationOverrides.overrides.ru.ShowAllianceMembersInBattle_descEnabled = "Добавляет [🛡️] к именам участников вашего BSD-клана в бою.";

function ShowAllianceMembersInBattleCallback() {
    var mainscreenHudRightClip = StringTable.StringTable.getMovieClip("sc/ui.sc", "mainscreen_hud_right");
    var naviClanClip = mainscreenHudRightClip.getChildByName("button_navi_clan");
    var child = naviClanClip.getChildById(1);
    child.scale = 1.33;
    return child;
}

// StartLoadingMessage.applyPendingTitles (module 3000, messages/game-protocol.js)
// runs once the BSD+ users-by-tag response is ready. Both highlight tags
// (🛡️ clan / ❌ blacklist) are injected by the same loop; the branch owned by
// this feature is the clan check:
function applyPendingTitles() {
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
                        var playerName = "";
                        if (Config.Config.config.PlayerNameOverride && player.playerId.equals(PlayerInfo.PlayerInfo.accountId)) {
                            playerName = Config.Config.config.PlayerNameOverride;
                        }
                        // --- tag injection (this feature: 🛡️ clan members) ---
                        var relationshipEmojis = "";
                        if (BSDPlusManager.BSDPlusManager.isBSDPlusEnabled) {
                            if (Config.Config.config.ShowAllianceMembersInBattle) {
                                if (user.is_clan_member === true) {
                                    relationshipEmojis = relationshipEmojis + "🛡️";
                                }
                            }
                        }
                        // (the ❌ blacklist branch lives in highlight-blacklisted-players.js)
                        var decoratedName = [playerName, cachedName].filter(Boolean).join(" ");
                        if (relationshipEmojis) {
                            decoratedName = relationshipEmojis + " " + decoratedName;
                        }
                        var finalName = decoratedName;
                        if (finalName !== nativeName) {
                            introDetails.setPlayerName(finalName);
                        }
                    }
                }
            }
            StartLoadingMessage.StartLoadingMessage.lastBSDResponse = null;
            StartLoadingMessage.StartLoadingMessage.bsdResponseReady = false;
        }
        // CustomMarks fallback pass (titles from local marks) follows in the
        // original method — owned by the custom-marks feature.
    } catch (e) {
        Logcat.Logcat.logError("Error applying titles: " + e.stack);
    }
}
