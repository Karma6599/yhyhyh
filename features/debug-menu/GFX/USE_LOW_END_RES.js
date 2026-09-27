var USE_LOW_END_RES_BUTTON = {
    label: "USE_LOW_END_RES",
    category: DebugMenuCategory.EDebugCategory.GFX,
    checkbox: {}
};

function USE_LOW_END_RES_callback() {
    GfxDebugKnobs.GfxDebugKnobs.toggleLowResAssets();
}

function USE_LOW_END_RES_getState() {
    return GfxDebugKnobs.GfxDebugKnobs.isLowResAssets();
}
