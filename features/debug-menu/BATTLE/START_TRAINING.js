var START_TRAINING_BUTTON = {
    label: "START_TRAINING",
    category: DebugMenuCategory.EDebugCategory.BATTLE,
    mode: "home"
};

function START_TRAINING_callback() {
    BattleTraining.BattleTraining.start();
}
