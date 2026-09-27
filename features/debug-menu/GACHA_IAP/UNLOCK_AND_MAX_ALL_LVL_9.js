var UNLOCK_AND_MAX_ALL_LVL_9_BUTTON = {
    label: "UNLOCK_AND_MAX_ALL_LVL_9",
    category: DebugMenuCategory.EDebugCategory.GACHA_IAP
};

var MAX_HERO_LEVEL_LVL9 = 9;

function unlockAndMaxAllLvl9() {
    var home = HomeMode.HomeMode.getInstance();
    if (!home) {
        return;
    }
    var charactersTable = LogicDataTables.LogicDataTables.getTable(LogicDataTables.LogicDataTables.table.Characters);
    var count = charactersTable.getItemCount();
    var i = 0;
    while (i < count) {
        var character = charactersTable.getItemAt(i);
        if (character) {
            try {
                LogicAvatarHelper.LogicAvatarHelper.levelUpHeroToTargetLevel(home, character, MAX_HERO_LEVEL_LVL9);
            } catch (e) {
            }
        }
        i++;
    }
}

function UNLOCK_AND_MAX_ALL_LVL_9_callback() {
    unlockAndMaxAllLvl9();
}
