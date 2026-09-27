var MEM_QUALITY_CYCLE_BUTTON = {
    label: "MEM_QUALITY_CYCLE",
    category: DebugMenuCategory.EDebugCategory.GFX
};

function MEM_QUALITY_CYCLE_callback() {
    GfxDebugKnobs.GfxDebugKnobs.cycleMemCapability();
}
