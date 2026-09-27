var MARK_ALL_AS_NEW_BUTTON = {
    label: "MARK_ALL_AS_NEW",
    category: DebugMenuCategory.EDebugCategory.GACHA_IAP
};

function markAllAsNew() {
    var avatar = GameStateManager.GameStateManager.getPlayerAvatar();
    var playerData = LogicClientHome.LogicClientHome.getPlayerData();
    if (playerData && !playerData.isNull() && avatar.instance.isNull()) {
        return;
    }
    var charactersTable = LogicDataTables.LogicDataTables.getTable(LogicDataTables.LogicDataTables.table.Characters);
    var i = 0;
    while (i < charactersTable.getItemCount()) {
        var character = charactersTable.getItemAt(i);
        if (character) {
            avatar.setCommodityCount(LogicClientAvatar.LogicClientAvatar.commodityType.HeroSeenState, character.instance, 0, 0);
        }
        i++;
    }
    var cardsTable = LogicDataTables.LogicDataTables.getTable(LogicDataTables.LogicDataTables.table.Cards);
    i = 0;
    while (i < cardsTable.getItemCount()) {
        var card = cardsTable.getItemAt(i);
        if (card) {
            LogicDailyData.LogicDailyData.addNewItem(playerData, card.instance);
        }
        i++;
    }
}

function MARK_ALL_AS_NEW_callback() {
    markAllAsNew();
}
