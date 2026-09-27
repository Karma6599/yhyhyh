var GFX_QUALITY_CYCLE_BUTTON = {
    label: "GFX_QUALITY_CYCLE",
    category: DebugMenuCategory.EDebugCategory.GFX
};

var QUALITY_LABELS = ["Low", "Mid", "High", "Highest"];

class GfxDebugKnobs {
    isLowResAssets() {
        return Config.Config.config.UseLowResGraphics;
    }

    toggleLowResAssets() {
        Config.Config.config.UseLowResGraphics = !Config.Config.config.UseLowResGraphics;
        this.persistAndApply();
        if (Config.Config.config.UseLowResGraphics) {
        }
    }

    getGfxQualityLevel() {
        return Config.Config.config.GfxQualityLevel;
    }

    cycleGfxCapability() {
        Config.Config.config.GfxQualityLevel = this.nextQualityLevel(Config.Config.config.GfxQualityLevel);
        this.persistAndApply();
    }

    getMemQualityLevel() {
        return Config.Config.config.MemQualityLevel;
    }

    cycleMemCapability() {
        Config.Config.config.MemQualityLevel = this.nextQualityLevel(Config.Config.config.MemQualityLevel);
        this.persistAndApply();
    }

    nextQualityLevel(current) {
        return (current + 1) % QUALITY_LABELS.length;
    }

    persistAndApply() {
        FileManager.FileManager.updateConfigFile();
    }
}

function GFX_QUALITY_CYCLE_callback() {
    GfxDebugKnobs.cycleGfxCapability();
}
