class LogicAreaEffectData {
}
LogicAreaEffectData.allocationSize = 576;
LogicAreaEffectData.fields = { PlaybackType: 424, RotationType: 428, Type: 320 };

class LogicColorGradientData extends LogicData {
    constructor(instance) {
        super(instance);
    }
}

var LogicCardData_getMetaType = new NativeFunction(Libg.offset(14596992, 0), "int", ["pointer"]);
var CARD_META_STAR_POWER = 4;
var CARD_META_GADGET = 5;

class LogicCardData extends LogicData {
    constructor(instance) {
        super(instance);
    }
    get metaType() {
        return LogicCardData_getMetaType(this.instance);
    }
}

var LogicCharacterData_useColorMod = new NativeFunction(Libg.offset(14615428, 0), "bool", ["pointer"]);
var LogicCharacterData_getRedAdd = new NativeFunction(Libg.offset(14615452, 0), "int", ["pointer"]);
var LogicCharacterData_sm_columnIndexDisabled = Libg.offset(19146488, 0);
var projectileStartZOffset = LogicMemory.offset(600);
var flyingHeightOffset = LogicMemory.offset(612);
var speedOffset = LogicMemory.offset(620);
var autoAttackRangeOffset = LogicMemory.offset(632);
var scaleOffset = LogicMemory.offset(636);
var shadowScaleXOffset = LogicMemory.offset(664);
var shadowScaleYOffset = LogicMemory.offset(668);
var collisionRadiusOffset = LogicMemory.offset(684);
var healthBarOffsetYOffset = LogicMemory.offset(696);
var typeOffset = LogicMemory.offset(772);
var weaponSkillOffset = LogicMemory.offset(808);
var ultimateSkillOffset = LogicMemory.offset(816);
var overchargedUltimateSkillOffset = LogicMemory.offset(824);
var defaultSkinOffset = LogicMemory.offset(328);
var HERO_CHARACTER_TYPE_DEFAULT = 0;
var HERO_CHARACTER_TYPE_ALT = 26;

class LogicCharacterData extends LogicData {
    constructor(instance) {
        super(instance);
    }
    isDisabled() {
        return this.getBooleanValueAt(LogicCharacterData_sm_columnIndexDisabled.readInt());
    }
    isHero() {
        var typeId = this.readS32(typeOffset);
        if (!(typeId === HERO_CHARACTER_TYPE_DEFAULT)) {
            return typeId === HERO_CHARACTER_TYPE_ALT;
        }
    }
    getCharacterType() {
        return this.readS32(typeOffset);
    }
    getProjectileStartZ() {
        return this.readS32(projectileStartZOffset);
    }
    getFlyingHeight() {
        return this.readS32(flyingHeightOffset);
    }
    getSpeed() {
        return this.readS32(speedOffset);
    }
    getAutoAttackRange() {
        return this.readS32(autoAttackRangeOffset);
    }
    getScale() {
        return this.readFloat(scaleOffset);
    }
    getShadowScaleX() {
        return this.readFloat(shadowScaleXOffset);
    }
    getShadowScaleY() {
        return this.readFloat(shadowScaleYOffset);
    }
    getCollisionRadius() {
        return this.readS32(collisionRadiusOffset);
    }
    getHealthBarOffsetY() {
        return this.readS32(healthBarOffsetYOffset);
    }
    getDefaultSkin() {
        return new LogicSkinData(this.readPointer(defaultSkinOffset));
    }
    get weaponSkill() {
        return this.readWrappedPointer(weaponSkillOffset, function (pointer) {
            return new LogicSkillData(pointer);
        });
    }
    get ultimateSkill() {
        return this.readWrappedPointer(ultimateSkillOffset, function (pointer) {
            return new LogicSkillData(pointer);
        });
    }
    get overchargedUltimateSkill() {
        return this.readWrappedPointer(overchargedUltimateSkillOffset, function (pointer) {
            return new LogicSkillData(pointer);
        });
    }
    static patch() {
        Interceptor.replace(LogicCharacterData_useColorMod, new NativeCallback(function (character) {
            var chara = new LogicCharacterData(character);
            var name = chara.getName();
            if (name === "NinjaFake") {
                if (Config.config.HighlightLeonClone) {
                    return 1;
                }
            }
            return LogicCharacterData_useColorMod(character);
        }, "bool", ["pointer"]));
    }
}

class LogicColor {
    static argbToIntString(argb) {
        var alphaHex = Math.round(argb[3] * 255 / 100).toString(16).padStart(2, "0");
        var redHex = Math.round(argb[0] * 255 / 100).toString(16).padStart(2, "0");
        var greenHex = Math.round(argb[1] * 255 / 100).toString(16).padStart(2, "0");
        var blueHex = Math.round(argb[2] * 255 / 100).toString(16).padStart(2, "0");
        return "".concat(alphaHex, redHex, greenHex, blueHex).toUpperCase();
    }
    static rgbToInt(rgb) {
        return (rgb[0] << 16) + (rgb[1] << 8) + rgb[2];
    }
    static intToRGB(number) {
        return [(number & 16711680) >> 16, (number & 65280) >> 8, number & 255];
    }
    static generateColorArray(colorStart, colorEnd, colorCount) {
        var start = LogicColor.intToRGB(colorStart);
        var end = LogicColor.intToRGB(colorEnd);
        var colorArray = [];
        var alpha = 0;
        var i = 0;
        while (i < colorCount) {
            var c = [];
            alpha = alpha + 1 / colorCount;
            c[0] = start[0] * alpha + (1 - alpha) * end[0];
            c[1] = start[1] * alpha + (1 - alpha) * end[1];
            c[2] = start[2] * alpha + (1 - alpha) * end[2];
            colorArray.push(LogicColor.rgbToInt(c));
            i++;
        }
        return colorArray;
    }
    static lerp(a, b, t) {
        return a + (b - a) * t;
    }
    static lerpColor(colorStart, colorEnd, t) {
        var [r1, g1, b1] = LogicColor.intToRGB(colorStart);
        var [r2, g2, b2] = LogicColor.intToRGB(colorEnd);
        var r = Math.round(LogicColor.lerp(r1, r2, t));
        var g = Math.round(LogicColor.lerp(g1, g2, t));
        var b = Math.round(LogicColor.lerp(b1, b2, t));
        return LogicColor.rgbToInt([r, g, b]);
    }
}

var LogicEffectData_getShakeScreenOwn = new NativeFunction(Libg.offset(0, 0), "int", ["pointer"]);
var LogicEffectData_getShakeScreenOthers = new NativeFunction(Libg.offset(0, 0), "int", ["pointer"]);
var layerArrayOffset = LogicMemory.offset(88);
var typeArrayOffset = LogicMemory.offset(104);
var scaleArrayOffset = LogicMemory.offset(120);
var enemyVersionOffset = LogicMemory.offset(200);
var loopOffset = LogicMemory.offset(240);
var LogicEffectData_allocSize = 264;

class LogicEffectData extends LogicData {
    constructor(instance) {
        super(instance);
    }
    getTypeArray() {
        return new LogicArrayList(this.instance.add(typeArrayOffset));
    }
    setTypeArray(type) {
        return;
    }
    getLayerArray() {
        return new LogicArrayList(this.instance.add(layerArrayOffset));
    }
    setLayerArray(layers) {
        return;
    }
    getScaleArray() {
        return new LogicArrayList(this.instance.add(scaleArrayOffset));
    }
    setScaleArray(scales) {
        return;
    }
    get loop() {
        return this.readBoolByte(loopOffset);
    }
    set loop(value) {
        this.instance.add(loopOffset).writeU8(+value);
    }
    get enemyVersion() {
        return this.readWrappedPointer(enemyVersionOffset, function (pointer) {
            return new LogicEffectData(pointer);
        });
    }
    set enemyVersion(value) {
        this.instance.add(enemyVersionOffset).writePointer(value.instance);
    }
    clone() {
        var memory = Libc.malloc(LogicEffectData_allocSize);
        Memory.copy(memory, this.instance, LogicEffectData_allocSize);
        return new LogicEffectData(memory);
    }
    static patch() {
        var shakeAllowedCaller = null;
        var shakeOthersAllowed = null;
        if (Process.platform === "darwin") {
            Interceptor.replace(LogicEffectData_getShakeScreenOwn, new NativeCallback(function (instance) {
                if (shakeAllowedCaller) {
                    if (!shakeAllowedCaller.equals(this.returnAddress)) {
                        return LogicEffectData_getShakeScreenOwn(instance);
                    }
                }
                if (Config.config.DisableShake) {
                    return 0;
                }
                return LogicEffectData_getShakeScreenOwn(instance);
            }, "int", ["pointer"]));
            Interceptor.replace(LogicEffectData_getShakeScreenOthers, new NativeCallback(function (instance) {
                if (shakeOthersAllowed) {
                    if (!shakeOthersAllowed.equals(this.returnAddress)) {
                        return LogicEffectData_getShakeScreenOthers(instance);
                    }
                }
                if (Config.config.DisableShake) {
                    return 0;
                }
                return LogicEffectData_getShakeScreenOthers(instance);
            }, "int", ["pointer"]));
        }
    }
}

var LogicEmoteData_sm_columnIndexIconSWF = Libg.offset(19147860, 0);
var LogicEmoteData_sm_columnIndexIconExportName = Libg.offset(19147864, 0);

class LogicEmoteData extends LogicData {
    constructor(instance) {
        super(instance);
    }
    getRarity() {
        return this.getStringValueAt(10);
    }
    getIconSWF() {
        return this.getStringValueAt(LogicEmoteData_sm_columnIndexIconSWF.readInt());
    }
    getIconExportName() {
        return this.getStringValueAt(LogicEmoteData_sm_columnIndexIconExportName.readInt());
    }
}

var LogicFameTierData_getIconStarsExportName = new NativeFunction(Libg.offset(14843820, 0), "pointer", ["pointer"]);

class LogicFameTierData extends LogicData {
    constructor(instance) {
        super(instance);
    }
    get iconStarsExportName() {
        return StringObject.read(LogicFameTierData_getIconStarsExportName(this.instance));
    }
}

var variationOffset = LogicMemory.offset(84);
var isEnabledFlagOffset = LogicMemory.offset(88);
var hasBannerOverrideFirstFieldOffset = LogicMemory.offset(164);
var hasBannerOverrideSecondFieldOffset = LogicMemory.offset(180);
var itemClaimDelaySecondsOffset = LogicMemory.offset(720);
var isPlayedOnVeryLargeMapOffset = LogicMemory.offset(724);
var spectateAfterGameOverOffset = LogicMemory.offset(725);
var spectateAfterDeathOffset = LogicMemory.offset(726);
var isTypeOfBossFightOffset = LogicMemory.offset(839);

class LogicGameModeVariationData extends LogicData {
    constructor(instance) {
        super(instance);
    }
    getVariation() {
        return LogicGameModeVariationData.getVariation(this.instance);
    }
    get isEnabled() {
        return (this.readU8(isEnabledFlagOffset) & 1) === 0;
    }
    get hasBannerOverride() {
        if (this.readU32(hasBannerOverrideFirstFieldOffset) !== 0) {
            return this.readU32(hasBannerOverrideSecondFieldOffset) !== 0;
        }
    }
    get itemClaimDelaySeconds() {
        return this.readU32(itemClaimDelaySecondsOffset);
    }
    get isClaimStarsWithDelay() {
        return this.readS32(itemClaimDelaySecondsOffset) > 0;
    }
    get isPlayedOnVeryLargeMap() {
        return this.readBoolByte(isPlayedOnVeryLargeMapOffset);
    }
    get spectateAfterGameOver() {
        return this.readBoolByte(spectateAfterGameOverOffset);
    }
    get spectateAfterDeath() {
        return this.readBoolByte(spectateAfterDeathOffset);
    }
    get isTypeOfBossFight() {
        return this.readBoolByte(isTypeOfBossFightOffset);
    }
    static getVariation(gameModeVariation) {
        return gameModeVariation.add(variationOffset).readU32();
    }
}

class LogicItemData {
}
LogicItemData.allocationSize = 320;

var LogicLocationData_createReferences = new NativeFunction(Libg.offset(14895260, 0), "void", ["pointer"]);
var LogicLocationData_sm_columnIndexMap = Libg.offset(19149116, 0);
var LogicLocationData_sm_columnIndexSupportingCampaignGround = Libg.offset(19149124, 0);
var LogicLocationData_sm_columnIndexBannerOverrideSWF = Libg.offset(19149128, 0);
var LogicLocationData_sm_columnIndexBannerOverrideExportName = Libg.offset(19149132, 0);
var LogicLocationData_sm_columnIndexDisabled = Libg.offset(19149136, 0);
var LogicLocationData_sm_columnIndexCommunityCredit = Libg.offset(19149140, 0);
var LogicLocationData_sm_columnIndexTrainingGroundsEnabled = Libg.offset(19149148, 0);
var locationThemeOffset = LogicMemory.offset(88);
var gameModeVariationOffset = LogicMemory.offset(96);

class LogicLocationData extends LogicData {
    constructor(instance) {
        super(instance);
    }
    get gameModeVariation() {
        return new LogicGameModeVariationData(this.readPointer(gameModeVariationOffset));
    }
    set gameModeVariation(variation) {
        this.instance.add(gameModeVariationOffset).writePointer(variation.instance);
    }
    get locationTheme() {
        return new LogicLocationThemeData(this.readPointer(locationThemeOffset));
    }
    set locationTheme(theme) {
        this.instance.add(locationThemeOffset).writePointer(theme.instance);
    }
    isDisabled() {
        return this.getBooleanValueAt(LogicLocationData_sm_columnIndexDisabled.readInt());
    }
    getMap() {
        return this.getStringValueAt(LogicLocationData_sm_columnIndexMap.readInt());
    }
    isSupportingCampaignGround() {
        return this.getBooleanValueAt(LogicLocationData_sm_columnIndexSupportingCampaignGround.readInt());
    }
    getBannerOverrideSWF() {
        return this.getStringValueAt(LogicLocationData_sm_columnIndexBannerOverrideSWF.readInt());
    }
    getBannerOverrideExportName() {
        return this.getStringValueAt(LogicLocationData_sm_columnIndexBannerOverrideExportName.readInt());
    }
    getCommunityCredit() {
        return this.getStringValueAt(LogicLocationData_sm_columnIndexCommunityCredit.readInt());
    }
    isTrainingGroundsEnabled() {
        return this.getBooleanValueAt(LogicLocationData_sm_columnIndexTrainingGroundsEnabled.readInt());
    }
    static applyDefaultEnvironments() {
        if (!Config.config.DefaultEnvironments) {
            return;
        }
        var locationTable = LogicDataTables.getTable(LogicDataTables.table.Locations);
        var context = { firstThemePerGroup: LogicLocationData.collectFirstThemePerSizeGroup(locationTable), hardcodedCache: new Map(), softCache: new Map() };
        var count = locationTable.getItemCount();
        var i = 0;
        while (i < count) {
            var location = locationTable.getItemAt(i);
            if (location) {
                LogicLocationData.applyDefaultThemeFor(location, context);
            }
            i++;
        }
    }
    static themeSizeGroupKey(variationId, width, height) {
        return "".concat(variationId, "_", width, "_", height);
    }
    static collectFirstThemePerSizeGroup(locationTable) {
        var result = new Map();
        var count = locationTable.getItemCount();
        var i = 0;
        while (i < count) {
            var location = locationTable.getItemAt(i);
            if (location) {
                var theme = location.locationTheme;
                if (theme && theme.isAvailableForOverride()) {
                    var key = LogicLocationData.themeSizeGroupKey(location.gameModeVariation.getVariation(), theme.getMapWidth(), theme.getMapHeight());
                    if (!result.has(key)) {
                        result.set(key, theme);
                    }
                }
            }
            i++;
        }
        return result;
    }
    static applyDefaultThemeFor(location, context) {
        var currentTheme = location.locationTheme;
        if (currentTheme.instance.isNull()) {
            return;
        }
        var chosen = LogicLocationData.chooseDefaultThemeFor(location, currentTheme, context);
        if (chosen && chosen.getGlobalID() !== currentTheme.getGlobalID()) {
            location.locationTheme = chosen;
        }
    }
    static chooseDefaultThemeFor(location, currentTheme, context) {
        var variationId = location.gameModeVariation.getVariation();
        var targetWidth = currentTheme.getMapWidth();
        var targetHeight = currentTheme.getMapHeight();
        var hardcoded = LogicLocationData.resolveHardcodedThemeForSize(variationId, targetWidth, targetHeight, context.hardcodedCache);
        if (hardcoded) {
            return hardcoded;
        }
        var soft = LogicLocationData.resolveSoftOverrideForVariation(variationId, context.softCache);
        if (soft) {
            return soft;
        }
        var fallbackKey = LogicLocationData.themeSizeGroupKey(variationId, targetWidth, targetHeight);
        if (context.firstThemePerGroup.get(fallbackKey) == null) {
            return null;
        }
        return context.firstThemePerGroup.get(fallbackKey);
    }
    static resolveHardcodedThemeForSize(variationId, targetWidth, targetHeight, cache) {
        var cacheKey = LogicLocationData.themeSizeGroupKey(variationId, targetWidth, targetHeight);
        var cached = cache.get(cacheKey);
        if (cached !== undefined) {
            return cached;
        }
        var rule = LogicLocationData.DEFAULT_THEME_RULES.find(function (r) {
            if (r.variation === variationId) {
                if (r.width === targetWidth) {
                    return r.height === targetHeight;
                }
            }
        });
        if (!rule) {
            return null;
        }
        var candidate = LogicDataTables.getLocationThemeByName(rule.theme);
        var resolved = LogicLocationData.candidateThemeMatchingSize(candidate, targetWidth, targetHeight);
        return resolved;
    }
    static candidateThemeMatchingSize(candidate, targetWidth, targetHeight) {
        if (!candidate || !candidate.isAvailableForOverride()) {
            return null;
        }
        if (candidate.getMapWidth() !== targetWidth || candidate.getMapHeight() !== targetHeight) {
            return null;
        }
        return candidate;
    }
    static resolveSoftOverrideForVariation(variationId, cache) {
        var cached = cache.get(variationId);
        if (cached !== undefined) {
            return cached;
        }
        var name = LogicLocationData.DEFAULT_THEME_BY_VARIATION_SOFT[variationId];
        if (!name) {
            return null;
        }
        var candidate = LogicDataTables.getLocationThemeByName(name);
        if (candidate == null || !candidate.isAvailableForOverride()) {
            return null;
        }
        return candidate;
    }
    static patch() {
        return;
    }
    static applyConfiguredEnvironments() {
        LogicLocationThemeData.clearAvailabilityCache();
        var locations = LogicDataTables.getTable(LogicDataTables.table.Locations);
        var removed = false;
        var index = 0;
        while (index < locations.getItemCount()) {
            var location = locations.getItemAt(index);
            if (location) {
                if (LogicLocationData.applyManualOverrideIfConfigured(location.instance)) {
                    removed = true;
                }
            }
            index++;
        }
        if (removed) {
            FileManager.updateConfigFile();
        }
    }
    static applyManualOverrideIfConfigured(logicLocationData) {
        var locationName = LogicData.getName(logicLocationData);
        if (!(locationName in Config.config.LocationThemeOverrides)) {
            return false;
        }
        var location = new LogicLocationData(logicLocationData);
        var themeName = Config.config.LocationThemeOverrides[locationName];
        var theme = LogicDataTables.getLocationThemeByName(themeName);
        var canApplyOverride = false;
        if (theme !== null && !location.locationTheme.instance.isNull()) {
            canApplyOverride = theme.isAvailableForOverride();
        }
        if (canApplyOverride) {
            location.locationTheme = theme;
            return false;
        }
        delete Config.config.LocationThemeOverrides[locationName];
        Breadcrumbs.push("Location override rejected: ".concat(locationName, " -> ", themeName));
        return true;
    }
}
LogicLocationData.DEFAULT_THEME_BY_VARIATION_SOFT = { 0: "Mine", 2: "Default", 3: "Default", 5: "Grassfield", 6: "DefaultShowdown", 7: "BBArena", 8: "Mortuary", 9: "DefaultShowdown", 10: "MadEvilManor", 17: "Arcade", 20: "Rooftop", 22: "BBArena", 23: "BBArena", 24: "Default", 25: "Default", 26: "ScrapyardShowdown", 31: "SBGrassfield", 32: "SBGrassfield", 33: "SBGrassfield", 35: "SBGrassfield", 37: "Hub", 38: "DefaultShowdown", 45: "AirHockey", 46: "Mine", 47: "ScrapyardShowdown", 48: "IslandShowdown", 49: "Grassfield", 50: "Rooftop", 52: "BBArena", 53: "AirHockey", 55: "BBArena", 56: "Mortuary", 57: "AirHockey", 58: "Pyramidquest", 60: "KatanaKingdom", 61: "MadEvilManor", 63: "Hub", 64: "BandStand", 65: "Mine", 66: "BBArena", 68: "Hub", 70: "Default", 72: "DefaultShowdown", 75: "DefaultShowdown", 76: "Grassfield", 77: "Pyramidquest", 78: "DefaultShowdown", 79: "AirHockey" };
LogicLocationData.DEFAULT_THEME_RULES = [{ variation: 48, width: 21, height: 33, theme: "IslandShowdown" }];
LogicLocationData.DEFAULT_THEME_RULES[32] = { variation: 48, width: 60, height: 60, theme: "DefaultShowdown" };
LogicLocationData.DEFAULT_THEME_RULES[33] = { variation: 49, width: 21, height: 33, theme: "Grassfield" };
LogicLocationData.DEFAULT_THEME_RULES[34] = { variation: 50, width: 21, height: 33, theme: "Rooftop" };
LogicLocationData.DEFAULT_THEME_RULES[35] = { variation: 52, width: 21, height: 33, theme: "BBArena" };
LogicLocationData.DEFAULT_THEME_RULES[36] = { variation: 53, width: 21, height: 33, theme: "AirHockey" };
LogicLocationData.DEFAULT_THEME_RULES[37] = { variation: 55, width: 21, height: 33, theme: "BBArena" };
LogicLocationData.DEFAULT_THEME_RULES[38] = { variation: 56, width: 21, height: 33, theme: "Mortuary" };
LogicLocationData.DEFAULT_THEME_RULES[39] = { variation: 57, width: 21, height: 33, theme: "AirHockey" };
LogicLocationData.DEFAULT_THEME_RULES[40] = { variation: 58, width: 21, height: 33, theme: "Pyramidquest" };
LogicLocationData.DEFAULT_THEME_RULES[41] = { variation: 59, width: 60, height: 60, theme: "DefaultShowdown" };
LogicLocationData.DEFAULT_THEME_RULES[42] = { variation: 60, width: 21, height: 33, theme: "KatanaKingdom" };
LogicLocationData.DEFAULT_THEME_RULES[43] = { variation: 60, width: 60, height: 60, theme: "DefaultShowdown" };
LogicLocationData.DEFAULT_THEME_RULES[44] = { variation: 61, width: 21, height: 33, theme: "MadEvilManor" };
LogicLocationData.DEFAULT_THEME_RULES[45] = { variation: 61, width: 60, height: 60, theme: "DefaultShowdown" };
LogicLocationData.DEFAULT_THEME_RULES[46] = { variation: 62, width: 60, height: 60, theme: "DefaultShowdown" };
LogicLocationData.DEFAULT_THEME_RULES[47] = { variation: 63, width: 21, height: 33, theme: "Hub" };
LogicLocationData.DEFAULT_THEME_RULES[48] = { variation: 64, width: 21, height: 33, theme: "BandStand" };
LogicLocationData.DEFAULT_THEME_RULES[49] = { variation: 64, width: 60, height: 60, theme: "DefaultShowdown" };
LogicLocationData.DEFAULT_THEME_RULES[50] = { variation: 65, width: 21, height: 33, theme: "Mine" };
LogicLocationData.DEFAULT_THEME_RULES[51] = { variation: 65, width: 60, height: 60, theme: "DefaultShowdown" };
LogicLocationData.DEFAULT_THEME_RULES[52] = { variation: 66, width: 21, height: 33, theme: "BBArena" };
LogicLocationData.DEFAULT_THEME_RULES[53] = { variation: 66, width: 60, height: 60, theme: "DefaultShowdown" };
LogicLocationData.DEFAULT_THEME_RULES[54] = { variation: 67, width: 60, height: 60, theme: "DefaultShowdown" };
LogicLocationData.DEFAULT_THEME_RULES[55] = { variation: 68, width: 21, height: 33, theme: "Hub" };
LogicLocationData.DEFAULT_THEME_RULES[56] = { variation: 69, width: 60, height: 60, theme: "DefaultShowdown" };
LogicLocationData.DEFAULT_THEME_RULES[57] = { variation: 70, width: 21, height: 33, theme: "Default" };
LogicLocationData.DEFAULT_THEME_RULES[58] = { variation: 71, width: 60, height: 60, theme: "DefaultShowdown" };
LogicLocationData.DEFAULT_THEME_RULES[59] = { variation: 72, width: 60, height: 60, theme: "DefaultShowdown" };
LogicLocationData.DEFAULT_THEME_RULES[60] = { variation: 73, width: 60, height: 60, theme: "DefaultShowdown" };
LogicLocationData.DEFAULT_THEME_RULES[61] = { variation: 74, width: 60, height: 60, theme: "DefaultShowdown" };
LogicLocationData.DEFAULT_THEME_RULES[62] = { variation: 75, width: 60, height: 60, theme: "DefaultShowdown" };
LogicLocationData.DEFAULT_THEME_RULES[63] = { variation: 76, width: 60, height: 60, theme: "DefaultShowdown" };
LogicLocationData.DEFAULT_THEME_RULES[64] = { variation: 77, width: 21, height: 33, theme: "Pyramidquest" };
LogicLocationData.DEFAULT_THEME_RULES[65] = { variation: 77, width: 60, height: 60, theme: "DefaultShowdown" };
LogicLocationData.DEFAULT_THEME_RULES[66] = { variation: 78, width: 60, height: 60, theme: "DefaultShowdown" };
LogicLocationData.DEFAULT_THEME_RULES[67] = { variation: 79, width: 21, height: 33, theme: "AirHockey" };

var LogicLocationThemeData_getBgFrameName = Libg.offset(14905624, 0);
var LogicLocationThemeData_getFogVFXExportName = Libg.offset(14905656, 0);
var LogicLocationThemeData_sm_columnIndexMapWidth = Libg.offset(19149544, 0);
var LogicLocationThemeData_sm_columnIndexMapHeight = Libg.offset(19149548, 0);
var LogicLocationThemeData_sm_columnIndexDisabled = Libg.offset(19149212, 0);
var LogicLocationThemeData_modelColumns = [Libg.offset(19149236, 0), Libg.offset(19149240, 0), Libg.offset(19149244, 0), Libg.offset(19149248, 0)];
var CSVRow_getArraySize = new NativeFunction(Libg.offset(5453960, 0), "int", ["pointer", "int"]);
var CSVRow_getArrayValue = new NativeFunction(Libg.offset(5453720, 0), "pointer", ["pointer", "int", "int"]);
var csvRowOffset = LogicMemory.offset(8);

class LogicLocationThemeData extends LogicData {
    constructor(instance) {
        super(instance);
    }
    isAvailableForOverride(recheck) {
        if (recheck === undefined) {
            recheck = false;
        }
        if (!this.instance.isNull() && LogicLocationThemeData_sm_columnIndexDisabled.readInt() >= 0 && this.isDisabled()) {
            return false;
        }
        var key = this.instance.toString();
        var cached = LogicLocationThemeData.availability.get(key);
        if (!recheck && cached !== undefined) {
            return cached;
        }
        var csvRow = this.instance.add(csvRowOffset).readPointer();
        for (var columnPtr of LogicLocationThemeData_modelColumns) {
            var columnAddress = columnPtr.readInt();
            if (columnAddress < 0) {
                continue;
            }
            var column = CSVRow_getArraySize(csvRow, columnAddress);
            var count = 0;
            while (count < column) {
                var row = CSVRow_getArrayValue(csvRow, columnAddress, count);
                if (row.isNull()) {
                    continue;
                }
                var value = StringObject.read(row);
                var paths = value.split("+").map(function (path) {
                    return path.trim();
                }).filter(function (path) {
                    return path.length > 0;
                });
                for (var path of paths) {
                    if (!ResourceManager.doesFileExist(path)) {
                        var message = "Location theme ".concat(this.getName(), ": missing model ", path);
                        Breadcrumbs.push(message);
                        Logcat.logError(message);
                        return;
                    }
                }
                count++;
            }
        }
        LogicLocationThemeData.availability.set(key, true);
        return true;
    }
    getMapWidth() {
        return this.getIntValueAt(LogicLocationThemeData_sm_columnIndexMapWidth.readInt());
    }
    getMapHeight() {
        return this.getIntValueAt(LogicLocationThemeData_sm_columnIndexMapHeight.readInt());
    }
    isDisabled() {
        return this.getBooleanValueAt(LogicLocationThemeData_sm_columnIndexDisabled.readInt());
    }
    static clearAvailabilityCache() {
        return;
    }
    static getCustomFog() {
        var name = Config.config.FogType;
        if (name === "") {
            return NULL;
        }
        var cached = LogicLocationThemeData.fogStrings.get(name);
        if (cached) {
            return cached;
        }
        if (!EffectRegistry.hasEffect(name)) {
            return NULL;
        }
        var namePointer = StringObject.create(name);
        LogicLocationThemeData.fogStrings.set(name, namePointer);
        return namePointer;
    }
    static patch() {
        Interceptor.attach(LogicLocationThemeData_getBgFrameName, { onLeave(retval) {
            if (LogicLocationThemeData.getCustomFog().isNull()) {
                return;
            }
            if (LogicLocationThemeData.fogFrameName.isNull()) {
                LogicLocationThemeData.fogFrameName = StringObject.create("1_lab");
            }
            retval.replace(LogicLocationThemeData.fogFrameName);
        } });
    }
}
LogicLocationThemeData.fogStrings = new Map();
LogicLocationThemeData.fogFrameName = NULL;
LogicLocationThemeData.availability = new Map();

var titleTidOffset = LogicMemory.offset(88);
var gradientOffset = LogicMemory.offset(104);

class LogicPlayerTitleData extends LogicData {
    constructor(instance) {
        super(instance);
    }
    get titleTid() {
        return this.readString(titleTidOffset);
    }
    set titleTid(value) {
        this.instance.add(titleTidOffset).writePointer(StringObject.create(value));
    }
    get gradient() {
        return new LogicColorGradientData(this.readPointer(gradientOffset));
    }
    set gradient(gradient) {
        this.instance.add(gradientOffset).writePointer(gradient.instance);
    }
    clone() {
        var memory = Libc.malloc(LogicPlayerTitleData.allocSize);
        Memory.copy(memory, this.instance, LogicPlayerTitleData.allocSize);
        return new LogicPlayerTitleData(memory);
    }
}
LogicPlayerTitleData.allocSize = 120;

class LogicProjectileData {
}
LogicProjectileData.allocationSize = 752;
LogicProjectileData.fields = { IgnoreLevelBorder: 628, IsBouncing: 474, PreExplosionTimeMs: 296, GetRendering: 276, SpecialTrailEffect: 192, SpecialVisualState: 580, TravelType: 608, TriggerWithDelayMs: 312, UniqueProperty: 652 };

var multiDropCountOffset = LogicMemory.offset(96);
var visualTypeOffset = LogicMemory.offset(160, 152);
var groupTypeOffset = LogicMemory.offset(328, 320);
var collabIdOffset = LogicMemory.offset(336, 328);

class LogicRandomRewardContainerData extends LogicData {
    constructor(instance) {
        super(instance);
    }
    get multiDropCount() {
        return this.readS32(multiDropCountOffset);
    }
    get visualType() {
        return this.readS32(visualTypeOffset);
    }
    set visualType(value) {
        this.instance.add(visualTypeOffset).writeS32(value);
    }
    get groupType() {
        return this.readS32(groupTypeOffset);
    }
    get collabId() {
        return this.readS32(collabIdOffset);
    }
}

class LogicRandomRewardData extends LogicData {
    constructor(instance) {
        super(instance);
    }
}

class LogicResourceData extends LogicData {
    constructor(instance) {
        super(instance);
    }
}

var LogicSkillData_getCastingRangeTilesHookTarget = Libg.offset(15038984, 0);
var LogicSkillData_sm_columnIndexCastingRange = Libg.offset(19151960, 0);
var castingEffectOffset = LogicMemory.offset(304);
var attackEffectOffset = LogicMemory.offset(320);

class LogicSkillData extends LogicData {
    constructor(instance) {
        super(instance);
    }
    getAttackEffect() {
        return this.readWrappedPointer(attackEffectOffset, function (pointer) {
            return new LogicEffectData(pointer);
        });
    }
    getCastingEffect() {
        return this.readWrappedPointer(castingEffectOffset, function (pointer) {
            return new LogicEffectData(pointer);
        });
    }
    getCastingRangeTiles() {
        return this.getIntValueAt(LogicSkillData_sm_columnIndexCastingRange.readInt());
    }
    static getCastingRangeTiles(skillDataPointer) {
        return LogicData.getIntValueAt(skillDataPointer, LogicSkillData_sm_columnIndexCastingRange.readInt());
    }
    static patch() {
        return;
    }
}

var skinConfOffset = LogicMemory.offset(152);
var petSkinOffset = LogicMemory.offset(160);
var petSkin2Offset = LogicMemory.offset(168);
var LogicSkinData_allocSize = LogicMemory.offset(248);

class LogicSkinData extends LogicData {
    constructor(instance) {
        super(instance);
    }
    getCharacter() {
        if (this.getConf() == null) {
            return;
        }
        return this.getConf().getCharacter();
    }
    getConf() {
        return this.readWrappedPointer(skinConfOffset, function (pointer) {
            return new LogicSkinConfData(pointer);
        });
    }
    setConf(conf) {
        this.instance.add(skinConfOffset).writePointer(conf.instance);
    }
    getRarity() {
        return this.getStringValueAt(27);
    }
    getPetSkin() {
        return this.readWrappedPointer(petSkinOffset, function (pointer) {
            return new LogicSkinData(pointer);
        });
    }
    getPetSkin2() {
        return this.readWrappedPointer(petSkin2Offset, function (pointer) {
            return new LogicSkinData(pointer);
        });
    }
    clone() {
        var memory = Libc.malloc(LogicSkinData_allocSize);
        Memory.copy(memory, this.instance, LogicSkinData_allocSize);
        return new LogicSkinData(memory);
    }
}

var LogicSkinConfData_getKillEffect = Libg.offset(15090760, 0);
var LogicSkinConfData_characterOffset = LogicMemory.offset(88);

class LogicSkinConfData extends LogicData {
    constructor(instance) {
        super(instance);
    }
    getCharacter(index) {
        if (index === undefined) {
            index = 0;
        }
        var charactersArray = new LogicArrayList(this.instance.add(LogicSkinConfData_characterOffset));
        if (index < 0 || index >= charactersArray.getItemsCount()) {
            return null;
        }
        var charaPtr = charactersArray.getElement(index);
        if (charaPtr.isNull()) {
            return null;
        }
        return new LogicCharacterData(charaPtr);
    }
    static getKillEffectName(name) {
        var stringObject = LogicSkinConfData.killEffectNames.get(name);
        if (!stringObject) {
            stringObject = StringObject.create(name);
        }
        return stringObject;
    }
    static patch() {
        return;
    }
}
LogicSkinConfData.killEffectNames = new Map();

class LogicSprayData extends LogicData {
    constructor(instance) {
        super(instance);
    }
}

var LogicThemeData_getExportName = new NativeFunction(Libg.offset(15121752, 0), "pointer", ["pointer"]);
var LogicThemeData_getThemeMusic = new NativeFunction(Libg.offset(15121832, 0), "pointer", ["pointer"]);
var LogicThemeData_getParticleFileName = new NativeFunction(Libg.offset(15121768, 0), "pointer", ["pointer"]);
var LogicThemeData_getParticleExportName = new NativeFunction(Libg.offset(15121784, 0), "pointer", ["pointer"]);
var LogicThemeData_getParticleStyle = new NativeFunction(Libg.offset(15121800, 0), "pointer", ["pointer"]);
var LogicThemeData_getParticleVariations = new NativeFunction(Libg.offset(15121816, 0), "void", ["pointer"]);
var LogicThemeData_sm_columnIndexDisabled = Libg.offset(19153552, 0);
var LogicThemeData_sm_columnIndexFileName = Libg.offset(19153556, 0);
var LogicThemeData_sm_columnIndexLoadingJingle = Libg.offset(19153584, 0);
var LogicThemeData_sm_columnIndexLoadingScreen = Libg.offset(19153588, 0);
var LogicThemeData_sm_columnIndexCustomButtonName = Libg.offset(19153592, 0);
var NO_MUSIC_THEME_ID = -2;

class LogicThemeData extends LogicData {
    constructor(instance) {
        super(instance);
    }
    isDisabled() {
        return this.getBooleanValueAt(LogicThemeData_sm_columnIndexDisabled.readInt());
    }
    getExportName() {
        return StringObject.read(LogicThemeData_getExportName(this.instance));
    }
    getFileName() {
        return this.getStringValueAt(LogicThemeData_sm_columnIndexFileName.readInt());
    }
    getLoadingJingle() {
        return this.getStringValueAt(LogicThemeData_sm_columnIndexLoadingJingle.readInt());
    }
    getLoadingScreen() {
        return this.getStringValueAt(LogicThemeData_sm_columnIndexLoadingScreen.readInt());
    }
    getCustomButtonName() {
        return this.getStringValueAt(LogicThemeData_sm_columnIndexCustomButtonName.readInt());
    }
    getThemeMusic() {
        var musicInstance = LogicThemeData_getThemeMusic(this.instance);
        return new LogicMusicData(musicInstance);
    }
    static patch() {
        Interceptor.replace(LogicThemeData_getThemeMusic, new NativeCallback(function (theme) {
            if (Process.platform === "darwin") {
                if (this.returnAddress.sub(Libg.libgBeginOffset).toInt32() != 3681376) {
                    return LogicThemeData_getThemeMusic(theme);
                }
            }
            if (Config.config.ThemeMusicID === NO_MUSIC_THEME_ID) {
                return NULL;
            }
            if (Config.config.ThemeMusicID !== -1) {
                var themeData = LogicDataTables.getDataById(LogicDataTables.table.Themes, Config.config.ThemeMusicID);
                if (!themeData) {
                    return LogicThemeData_getThemeMusic(theme);
                }
                return LogicThemeData_getThemeMusic(themeData.instance);
            }
            return LogicThemeData_getThemeMusic(theme);
        }, "pointer", ["pointer"]));
        Interceptor.replace(LogicThemeData_getParticleFileName, new NativeCallback(function () {
            return StringObject.create("sc/ui.sc");
        }, "pointer", ["pointer"]));
        Interceptor.replace(LogicThemeData_getParticleExportName, new NativeCallback(function () {
            return StringObject.create(Config.config.ParticleExportName == -1 ? "" : Config.config.ParticleExportName);
        }, "pointer", ["pointer"]));
        Interceptor.replace(LogicThemeData_getParticleVariations, new NativeCallback(function () {
            return;
        }, "void", ["pointer"]));
        Interceptor.replace(LogicThemeData_getParticleStyle, new NativeCallback(function () {
            return StringObject.create(Config.config.ParticleStyle == -1 ? "Snow" : Config.config.ParticleStyle);
        }, "pointer", ["pointer"]));
    }
}

class LogicMusicData extends LogicData {
    constructor(instance) {
        super(instance);
    }
    static patch() {
        return;
    }
}

var MaintenanceModeInfo_allocationSize = 40;
var modeOffset = LogicMemory.offset(0);
var secondsUntilEndOffset = LogicMemory.offset(4);
var reservedQwordOffset = LogicMemory.offset(8);
var updateRequiredOffset = LogicMemory.offset(16);
var messageStringOffset = LogicMemory.offset(24);

class MaintenanceModeInfo {
    constructor(instance) {
        this.instance = instance;
    }
    alloc(mode, secondsUntilEnd, updateRequired, message) {
        var buffer = Libc.calloc(MaintenanceModeInfo_allocationSize, 1);
        buffer.add(modeOffset).writeInt(mode);
        buffer.add(secondsUntilEndOffset).writeInt(secondsUntilEnd);
        buffer.add(reservedQwordOffset).writePointer(NULL);
        buffer.add(updateRequiredOffset).writeU8(updateRequired ? 1 : 0);
        StringObject.create(message, buffer.add(messageStringOffset));
        return new MaintenanceModeInfo(buffer);
    }
}

var LocationInfo_getLocationThemeIndex = new NativeFunction(Libg.offset(10291924, 0), "int", ["pointer"]);

class LocationInfo {
    constructor(instance) {
        this._instance = instance;
    }
    get locationData() {
        return new LogicLocationData(this._instance.readPointer());
    }
    getLocationThemeData() {
        var themeIndex = LocationInfo_getLocationThemeIndex(this._instance);
        return LogicDataTables.getTable(LogicDataTables.table.LocationThemes).getItemAt(themeIndex);
    }
    static getLocationThemeData(locationData) {
        var themeIndex = LocationInfo_getLocationThemeIndex(locationData.instance);
        return LogicDataTables.getTable(LogicDataTables.table.LocationThemes).getItemAt(themeIndex);
    }
}

var LogicConfData_getIntValue = new NativeFunction(Libg.offset(16080256, 0), "int", ["pointer", "int", "int"]);
var eventArrayPointerOffset = LogicMemory.offset(16);
var eventArrayCountOffset = LogicMemory.offset(28);

class LogicConfData {
    static getIntValue(confData, valueId, defaultValue) {
        return LogicConfData_getIntValue(confData, valueId, defaultValue);
    }
    static getActiveEventForSlot(confData, slotIndex) {
        if (confData.isNull()) {
            return null;
        }
        for (var slot of LogicConfData.iterateEventSlotPointers(confData)) {
            if (slot.slotIndex === slotIndex) {
                return slot;
            }
        }
        return null;
    }
    static getEventSlots(confData) {
        return Array.from(LogicConfData.iterateEventSlotPointers(confData));
    }
    static *iterateEventSlotPointers(confData) {
        if (confData.isNull()) {
            return;
        }
        var arrayPointer = confData.add(eventArrayPointerOffset).readPointer();
        var count = confData.add(eventArrayCountOffset).readInt();
        var i = 0;
        while (i < count) {
            var slotPointer = arrayPointer.add(i * Process.pointerSize).readPointer();
            if (!slotPointer.isNull()) {
                yield new EventSlot(slotPointer);
            }
            i++;
        }
    }
    static patch() {
        return;
    }
}

var LogicDailyData_decode = Libg.offset(16093332, 0);
var LogicDailyData_getSkin = new NativeFunction(Libg.offset(16100244, 0), "pointer", ["pointer", "pointer", "pointer"]);
var LogicDailyData_hasUnlockedSkin = Libg.offset(16101108, 0);
var HeroScreenPopup_refreshSkinUI_hasUnlockedSkinRetAddr = Libg.offset(12419940, 0);
var dayIndexOffset = LogicMemory.offset(0);
var secondsUntilDayChangeOffset = LogicMemory.offset(4);
var currentTrophiesOffset = LogicMemory.offset(8);
var heroScoreSumOffset = LogicMemory.offset(8);
var maxTrophiesOffset = LogicMemory.offset(12);
var highestHeroScoreSumOffset = LogicMemory.offset(12);
var heroScoreSumRewardClaimedUpToLevelOffset = LogicMemory.offset(20);
var trophyWorldClaimedUpToMilestoneIndexOffset = LogicMemory.offset(24);
var playerXpOffset = LogicMemory.offset(28);
var playerThumbnailOffset = LogicMemory.offset(40);
var seasonSecondsLeftOffset = LogicMemory.offset(196);
var regionOffset = LogicMemory.offset(172);
var unlockedSkinsArrayHeadOffset = LogicMemory.offset(120);
var newItemsArrayHeadOffset = LogicMemory.offset(152);
var skinOffsets = [Libg.offset(9063544, 0), Libg.offset(13061408, 0), Libg.offset(11920352, 0), Libg.offset(13031160, 0), Libg.offset(12403004, 0), Libg.offset(11204968, 0), Libg.offset(10610924, 0)];

class LogicDailyData {
    static getCurrentTrophies() {
        return LogicDailyData.currentTrophies;
    }
    static getMaxTrophies() {
        return LogicDailyData.maxTrophies;
    }
    static getSeasonSecondsLeft() {
        var playerData = HomeMode.getPlayerData();
        if (playerData.isNull()) {
            return -1;
        }
        return playerData.add(seasonSecondsLeftOffset).readInt();
    }
    static getDayIndex(playerData) {
        return playerData.add(dayIndexOffset).readU32();
    }
    static getSecondsUntilDayChange(playerData) {
        return playerData.add(secondsUntilDayChangeOffset).readU32();
    }
    static getHeroScoreSum(playerData) {
        return playerData.add(heroScoreSumOffset).readU32();
    }
    static getHighestHeroScoreSum(playerData) {
        return playerData.add(highestHeroScoreSumOffset).readU32();
    }
    static getHeroScoreSumRewardClaimedUpToLevel(playerData) {
        return playerData.add(heroScoreSumRewardClaimedUpToLevelOffset).readU32();
    }
    static getTrophyWorldClaimedUpToMilestoneIndex(playerData) {
        return playerData.add(trophyWorldClaimedUpToMilestoneIndexOffset).readU32();
    }
    static getPlayerXp(playerData) {
        return playerData.add(playerXpOffset).readU32();
    }
    static getRegion(playerData) {
        return playerData.add(regionOffset).readU32();
    }
    static getPlayerThumbnail(playerData) {
        return playerData.add(playerThumbnailOffset).readPointer();
    }
    static getSkin(playerData, playerAvatar, character) {
        return new LogicSkinData(LogicDailyData_getSkin(playerData, playerAvatar.instance, character.instance));
    }
    static addUnlockedSkin(playerData, skin) {
        if (playerData.isNull()) {
            return;
        }
        new LogicArrayList(playerData.add(unlockedSkinsArrayHeadOffset)).addElement(skin.instance);
    }
    static addNewItem(playerData, card) {
        if (!playerData.isNull() && !card.isNull()) {
            new LogicArrayList(playerData.add(newItemsArrayHeadOffset)).addElement(card);
        }
    }
    static getNewItems(playerData) {
        if (playerData.isNull()) {
            return [];
        }
        var newItemsArray = new LogicArrayList(playerData.add(newItemsArrayHeadOffset));
        var count = newItemsArray.getItemsCount();
        var items = [];
        var i = 0;
        while (i < count) {
            var cardDataPointer = newItemsArray.getElement(i);
            if (!cardDataPointer.isNull()) {
                items.push(cardDataPointer);
            }
            i++;
        }
        return items;
    }
    static patch() {
        Interceptor.attach(LogicDailyData_decode, { onEnter(args) {
            this.logicDailyData = args[0];
        }, onLeave() {
            LogicDailyData.currentTrophies = this.logicDailyData.add(currentTrophiesOffset).readInt();
            LogicDailyData.maxTrophies = this.logicDailyData.add(maxTrophiesOffset).readInt();
        } });
        Interceptor.attach(LogicDailyData_getSkin, { onEnter(args) {
            this.character = new LogicCharacterData(args[2]);
        }, onLeave(retval) {
            if (Config.config.DisableSkins) {
                var defaultSkin = this.character.getDefaultSkin();
                if (!defaultSkin.instance.isNull()) {
                    retval.replace(defaultSkin.instance);
                    return;
                }
            }
            if (!SkinSelector.isInUse()) {
                return;
            }
            if (skinOffsets.some((value) => {
                return this.returnAddress.equals(value);
            })) {
                var characterName = this.character.getName();
                if (Config.config.SkinOverrides.hasOwnProperty(characterName)) {
                    var replacedSkinName = Config.config.SkinOverrides[characterName];
                    retval.replace(LogicDataTables.getSkinByName(replacedSkinName).instance);
                    return;
                }
            }
        } });
    }
}
