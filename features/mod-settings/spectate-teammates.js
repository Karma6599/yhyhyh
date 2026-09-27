Config.configStatic.ShowSpectateButton = false;

LocalisationOverrides.overrides.en.SpectateButton_name = "Spectate teammates";
LocalisationOverrides.overrides.en.SpectateButton_descEnabled = "Shows the game's own spectate button in any team mode, so you can move the camera to your teammates.";
LocalisationOverrides.overrides.ru.SpectateButton_name = "Камера на союзников";
LocalisationOverrides.overrides.ru.SpectateButton_descEnabled = "Показывает родную кнопку спектатора в любом командном режиме - камера переключается на союзников.";

var BattleScreen_swapFollowSpectate = new NativeFunction(Libg.Libg.offset(11706068, 0), "void", ["pointer"]);
var followSpectateOffset = LogicMemory.LogicMemory.offset(4060, 4164);

function isFollowSpectate() {
    var instance = BattleScreen.BattleScreen.getInstance();
    if (instance.isNull()) {
        return false;
    }
    return instance.add(followSpectateOffset).readU8() === 1;
}

function toggleFollowSpectate() {
    var instance = BattleScreen.BattleScreen.getInstance();
    if (instance.isNull()) {
        return;
    }
    BattleScreen_swapFollowSpectate(instance);
}

function toggleFollowSpectateDebug() {
    if (BattleMode.BattleMode.getInstance().isNull()) {
        return;
    }
    toggleFollowSpectate();
}

function isFollowSpectateDebug() {
    if (BattleMode.BattleMode.getInstance().isNull()) {
        return false;
    }
    return isFollowSpectate();
}
