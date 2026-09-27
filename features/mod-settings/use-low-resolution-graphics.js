Config.configStatic.UseLowResGraphics = false;
Config.configStatic.GfxQualityLevel = 3;
Config.configStatic.MemQualityLevel = 3;

LocalisationOverrides.overrides.en.LowResGraphics_name = "Use low resolution graphics";
LocalisationOverrides.overrides.en.LowResGraphics_descEnabled = "When enabled, game will use low resolution textures when possible, which can help increase FPS.";

function LowResGraphicsCallback() {
    var mapEditorRemoveBtn = StringTable.StringTable.getMovieClip("sc/ui.sc", "map_editor_remove_button");
    var btn = mapEditorRemoveBtn.getChildByName("button");
    btn.gotoAndStopFrameIndex(1);
    return btn.getChildById(5);
}

var useOnlyLowresAssetsAddr = Libg.Libg.offset(19854356, 0);
var gfxCapabilityOffset = LogicMemory.LogicMemory.offset(136);
var memoryCapabilityOffset = LogicMemory.LogicMemory.offset(140);

function applyGraphicsConfig() {
    var lowResForced = Config.Config.config.UseLowResGraphics;
    if (lowResForced) {
        useOnlyLowresAssetsAddr.writeU8(1);
    }
    var instance = GameMain.GameMain.getInstance();
    if (instance.isNull()) {
        return;
    }
    if (lowResForced) {
        instance.add(gfxCapabilityOffset).writeS32(0);
        instance.add(memoryCapabilityOffset).writeS32(0);
        return;
    }
    instance.add(gfxCapabilityOffset).writeS32(Config.Config.config.GfxQualityLevel);
    instance.add(memoryCapabilityOffset).writeS32(Config.Config.config.MemQualityLevel);
}

var QUALITY_LABELS = ["Low", "Mid", "High", "Highest"];

class GfxDebugKnobs {
    isLowResAssets() {
        return Config.Config.config.UseLowResGraphics;
    }

    toggleLowResAssets() {
        Config.Config.config.UseLowResGraphics = !Config.Config.config.UseLowResGraphics;
        this.persistAndApply();
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
