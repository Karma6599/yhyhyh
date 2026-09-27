var EFFECT_PREVIEW_BUTTON = {
    label: "EFFECT_PREVIEW",
    category: DebugMenuCategory.EDebugCategory.PREVIEW
};

var tileSizeInGameUnits = 300;
var effectSpawnTileOffset = -3;

class EffectPreview {
    show() {
        var reason = EffectPreview.tryShow();
        if (reason) {
            GUI.GUI.showFloaterTextAtDefaultPosition("EFFECT_PREVIEW: ".concat(reason));
            Logcat.Logcat.logDebug("EffectPreview aborted: ".concat(reason));
            return;
        }
    }

    tryShow() {
        if (BattleMode.BattleMode.getInstance().isNull()) {
            return "enter a battle first";
        }
        var battleScreen = BattleScreen.BattleScreen.getInstance();
        if (battleScreen === undefined || battleScreen.isNull()) {
            return "BattleScreen not captured";
        }
        var gameObjectManager = BattleScreen.BattleScreen.getGameObjectManager();
        if (gameObjectManager.isNull()) {
            return "GameObjectManager null";
        }
        var effectsTable = LogicDataTables.LogicDataTables.getTable(LogicDataTables.LogicDataTables.table.Effects);
        var count = effectsTable.getItemCount();
        if (count < 1) {
            return "effects table empty";
        }
        var ownCharacter = LogicBattleModeClient.LogicBattleModeClient.getOwnCharacter();
        if (ownCharacter.instance.isNull()) {
            return "own character not spawned";
        }
        var index = EffectPreview.cursor % count;
        EffectPreview.cursor = (EffectPreview.cursor + 1) % count;
        var effect = effectsTable.getItemAt(index);
        if (!effect || effect.instance.isNull()) {
            return "effect #".concat(index, " null");
        }
        var spawnX = ownCharacter.x;
        var spawnY = ownCharacter.y - effectSpawnTileOffset * tileSizeInGameUnits;
        gameObjectManager.playEffect(effect, spawnX, spawnY);
        var effectName = effect.getName();
        GUI.GUI.showFloaterTextAtDefaultPosition("[".concat(index + 1, "/", count, "] ", effectName));
        Logcat.Logcat.logDebug("EffectPreview spawned effect #".concat(index, " \"", effectName, "\" at (", spawnX, ", ", spawnY, ")"));
        return null;
    }
}
EffectPreview.cursor = 0;

function EFFECT_PREVIEW_callback() {
    EffectPreview.show();
}
