var GIVE_RANDOM_REWARD_BUTTON = {
    label: "GIVE_RANDOM_REWARD",
    category: DebugMenuCategory.EDebugCategory.GACHA_IAP
};

var SIMPLE_GATCHA_TYPES = [HomeMode.HomeMode.gatchaType.Coins, HomeMode.HomeMode.gatchaType.TokenDoublers, HomeMode.HomeMode.gatchaType.PlayerIcon, HomeMode.HomeMode.gatchaType.Box, HomeMode.HomeMode.gatchaType.PowerPoints, HomeMode.HomeMode.gatchaType.StarPoints, HomeMode.HomeMode.gatchaType.EmotePack];

function giveRandomReward() {
    var type = SIMPLE_GATCHA_TYPES[Math.floor(Math.random() * SIMPLE_GATCHA_TYPES.length)];
}

function GIVE_RANDOM_REWARD_callback() {
    giveRandomReward();
}
