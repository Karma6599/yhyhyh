// ============================================================= //
// FEATURE: Highlight blacklisted players
// Config key: ShowBlacklistedPlayersInBattle (default false)
// TID prefix: ShowBlacklistedPlayersInBattle
// Icon: ShowBlacklistedPlayersInBattleCallback (menu/icons.js, module 2120)
// Wiring: StartLoadingMessage.applyPendingTitles
// (messages/game-protocol.js, module 3000) — injects the blacklist
// tag into battle names from the BSD+ users response
// ============================================================= //

Config.configStatic.ShowBlacklistedPlayersInBattle = false;

LocalisationOverrides.overrides.en.ShowBlacklistedPlayersInBattle_name = "Highlight blacklisted players";
LocalisationOverrides.overrides.en.ShowBlacklistedPlayersInBattle_descEnabled = "Adds [❌] to the battle names of players on your BSD blacklist.";
LocalisationOverrides.overrides.ru.ShowBlacklistedPlayersInBattle_name = "Выделять игроков из ЧС";
LocalisationOverrides.overrides.ru.ShowBlacklistedPlayersInBattle_descEnabled = "Добавляет [❌] к именам игроков из вашего чёрного списка BSD в бою.";

function ShowBlacklistedPlayersInBattleCallback() {
    return StringTable.StringTable.getMovieClip("sc/sprays_1.sc", "spray_denied");
}

// Same loop as the BSD-clan highlight (StartLoadingMessage.applyPendingTitles,
// module 3000) — the branch owned by this feature is the blacklist check:
//
//     var relationshipEmojis = "";
//     if (BSDPlusManager.BSDPlusManager.isBSDPlusEnabled) {
//         if (Config.Config.config.ShowBlacklistedPlayersInBattle) {
//             if (user.is_blacklisted === true) {
//                 relationshipEmojis = relationshipEmojis + "❌";
//             }
//         }
//     }
//     var decoratedName = [playerName, cachedName].filter(Boolean).join(" ");
//     if (relationshipEmojis) {
//         decoratedName = relationshipEmojis + " " + decoratedName;
//     }
//
// The full decoded applyPendingTitles lives in
// features/mod-settings/highlight-bsd-clan-members.js (same consumer method);
// the ❌ prefix lands in front of the resolved name exactly like the 🛡️ one,
// and both tags can stack on the same player.
