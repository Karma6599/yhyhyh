var SCID_SWITCH_ENV_BUTTON = {
    label: "SCID_SWITCH_ENV",
    category: DebugMenuCategory.EDebugCategory.SC_ID
};

function scidSwitchEnv() {
    var goingToStage = !EnvOverride.EnvOverride.isStage();
    EnvOverride.EnvOverride.set(goingToStage ? EnvOverride.EnvOverride.STAGE_ENV : EnvOverride.EnvOverride.PROD_ENV);
    GameSCIDManager.GameSCIDManager.setForceProd(!goingToStage);
}

function SCID_SWITCH_ENV_callback() {
    scidSwitchEnv();
}
