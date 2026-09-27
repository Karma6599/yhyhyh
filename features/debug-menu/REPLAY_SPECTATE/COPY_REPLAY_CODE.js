var COPY_REPLAY_CODE_BUTTON = {
    label: "COPY_REPLAY_CODE",
    category: DebugMenuCategory.EDebugCategory.REPLAY_SPECTATE,
    mode: "battle"
};

function COPY_REPLAY_CODE_callback() {
    SharedReplay.SharedReplay.copyShareCode();
}
