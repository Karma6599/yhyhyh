// ============================================================= //
// FEATURE: Default environments
// Config key: DefaultEnvironments (default false)
// TID prefix: DefaultEnvironments
// Icon: DefaultEnvironmentsCallback (menu/icons.js, module 2120)
// Wiring: LogicLocationData (game/data-classes.js, module 4325) —
// rewrites every location's theme back to the original environment
// ============================================================= //

Config.configStatic.DefaultEnvironments = false;

LocalisationOverrides.overrides.en.DefaultEnvironments_name = "Default environments";
LocalisationOverrides.overrides.en.DefaultEnvironments_descEnabled = "Replaces all environments with older (original) ones.";
LocalisationOverrides.overrides.ru.DefaultEnvironments_name = "Стандартные окружения";
LocalisationOverrides.overrides.ru.DefaultEnvironments_descEnabled = "Заменяет все окружения на более старые (оригинальные).";

function DefaultEnvironmentsCallback() {
    var iconGearReload = StringTable.StringTable.getMovieClip("sc/ui.sc", "icon_gear_reload");
    iconGearReload.gotoAndStopFrameIndex(1);
    return iconGearReload;
}

// LogicLocationData (module 4325, game/data-classes.js) — the default-theme
// engine. Shared class helpers (getLocationThemeByName, getBooleanValueAt,
// the table API) are referenced, not redefined.

function applyDefaultEnvironments() {
    if (!Config.Config.config.DefaultEnvironments) {
        return;
    }
    var locationTable = LogicDataTables.LogicDataTables.getTable(LogicDataTables.LogicDataTables.table.Locations);
    var context = {
        firstThemePerGroup: collectFirstThemePerSizeGroup(locationTable),
        hardcodedCache: new Map(),
        softCache: new Map()
    };
    var count = locationTable.getItemCount();
    for (var i = 0; i < count; i++) {
        var location = locationTable.getItemAt(i);
        if (location) {
            applyDefaultThemeFor(location, context);
        }
    }
}

function themeSizeGroupKey(variationId, width, height) {
    return "".concat(variationId, "_", width, "_", height);
}

function collectFirstThemePerSizeGroup(locationTable) {
    var result = new Map();
    var count = locationTable.getItemCount();
    for (var i = 0; i < count; i++) {
        var location = locationTable.getItemAt(i);
        if (location) {
            var theme = location.locationTheme;
            if (theme && theme.isAvailableForOverride()) {
                var key = themeSizeGroupKey(location.gameModeVariation.getVariation(), theme.getMapWidth(), theme.getMapHeight());
                if (!result.has(key)) {
                    result.set(key, theme);
                }
            }
        }
    }
    return result;
}

function applyDefaultThemeFor(location, context) {
    var currentTheme = location.locationTheme;
    if (currentTheme.instance.isNull()) {
        return;
    }
    var chosen = chooseDefaultThemeFor(location, currentTheme, context);
    if (chosen && chosen.getGlobalID() === currentTheme.getGlobalID()) {
        return;
    }
    location.locationTheme = chosen;
}

function chooseDefaultThemeFor(location, currentTheme, context) {
    var variationId = location.gameModeVariation.getVariation();
    var targetWidth = currentTheme.getMapWidth();
    var targetHeight = currentTheme.getMapHeight();
    var hardcoded = resolveHardcodedThemeForSize(variationId, targetWidth, targetHeight, context.hardcodedCache);
    if (hardcoded) {
        return hardcoded;
    }
    var soft = resolveSoftOverrideForVariation(variationId, context.softCache);
    if (soft) {
        return soft;
    }
    var fallbackKey = themeSizeGroupKey(variationId, targetWidth, targetHeight);
    if (context.firstThemePerGroup.get(fallbackKey) == null) {
        return null;
    }
    return context.firstThemePerGroup.get(fallbackKey);
}

function resolveHardcodedThemeForSize(variationId, targetWidth, targetHeight, cache) {
    var cacheKey = themeSizeGroupKey(variationId, targetWidth, targetHeight);
    var cached = cache.get(cacheKey);
    if (cached !== undefined) {
        return cached;
    }
    var rule = DEFAULT_THEME_RULES.find(function (r) {
        return r.variation === variationId && r.width === targetWidth && r.height === targetHeight;
    });
    if (!rule) {
        return null;
    }
    var candidate = LogicDataTables.LogicDataTables.getLocationThemeByName(rule.theme);
    var resolved = candidateThemeMatchingSize(candidate, targetWidth, targetHeight);
    cache.set(cacheKey, resolved);
    return resolved;
}

function candidateThemeMatchingSize(candidate, targetWidth, targetHeight) {
    if (candidate && !candidate.isAvailableForOverride()) {
        return null;
    }
    if (candidate && (candidate.getMapWidth() !== targetWidth || candidate.getMapHeight() !== targetHeight)) {
        return null;
    }
    return candidate;
}

function resolveSoftOverrideForVariation(variationId, cache) {
    var cached = cache.get(variationId);
    if (cached !== undefined) {
        return cached;
    }
    var name = DEFAULT_THEME_BY_VARIATION_SOFT[variationId];
    if (!name) {
        return null;
    }
    var candidate = LogicDataTables.LogicDataTables.getLocationThemeByName(name);
    var resolved = null;
    if (candidate && candidate.isAvailableForOverride()) {
        resolved = candidate;
    }
    cache.set(variationId, resolved);
    return resolved;
}

// Soft overrides — per game-mode-variation default theme names:
var DEFAULT_THEME_BY_VARIATION_SOFT = { 0: "Mine", 2: "Default", 3: "Default", 5: "Grassfield", 6: "DefaultShowdown", 7: "BBArena", 8: "Mortuary", 9: "DefaultShowdown", 10: "MadEvilManor", 17: "Arcade", 20: "Rooftop", 22: "BBArena", 23: "BBArena", 24: "Default", 25: "Default", 26: "ScrapyardShowdown", 31: "SBGrassfield", 32: "SBGrassfield", 33: "SBGrassfield", 35: "SBGrassfield", 37: "Hub", 38: "DefaultShowdown", 45: "AirHockey", 46: "Mine", 47: "ScrapyardShowdown", 48: "IslandShowdown", 49: "Grassfield", 50: "Rooftop", 52: "BBArena", 53: "AirHockey", 55: "BBArena", 56: "Mortuary", 57: "AirHockey", 58: "Pyramidquest", 60: "KatanaKingdom", 61: "MadEvilManor", 63: "Hub", 64: "BandStand", 65: "Mine", 66: "BBArena", 68: "Hub", 70: "Default", 72: "DefaultShowdown", 75: "DefaultShowdown", 76: "Grassfield", 77: "Pyramidquest", 78: "DefaultShowdown", 79: "AirHockey" };

// Hard overrides — exact (variation, mapWidth, mapHeight) rules.
// Note: entries [0]..[31] of this table were lost in the repo's own decompile;
// the surviving entries are reproduced verbatim:
var DEFAULT_THEME_RULES = [
    { variation: 48, width: 21, height: 33, theme: "IslandShowdown" },
    { variation: 48, width: 60, height: 60, theme: "DefaultShowdown" },
    { variation: 49, width: 21, height: 33, theme: "Grassfield" },
    { variation: 50, width: 21, height: 33, theme: "Rooftop" },
    { variation: 52, width: 21, height: 33, theme: "BBArena" },
    { variation: 53, width: 21, height: 33, theme: "AirHockey" },
    { variation: 55, width: 21, height: 33, theme: "BBArena" },
    { variation: 56, width: 21, height: 33, theme: "Mortuary" },
    { variation: 57, width: 21, height: 33, theme: "AirHockey" },
    { variation: 58, width: 21, height: 33, theme: "Pyramidquest" },
    { variation: 59, width: 60, height: 60, theme: "DefaultShowdown" },
    { variation: 60, width: 21, height: 33, theme: "KatanaKingdom" },
    { variation: 60, width: 60, height: 60, theme: "DefaultShowdown" },
    { variation: 61, width: 21, height: 33, theme: "MadEvilManor" },
    { variation: 61, width: 60, height: 60, theme: "DefaultShowdown" },
    { variation: 62, width: 60, height: 60, theme: "DefaultShowdown" },
    { variation: 63, width: 21, height: 33, theme: "Hub" },
    { variation: 64, width: 21, height: 33, theme: "BandStand" },
    { variation: 64, width: 60, height: 60, theme: "DefaultShowdown" },
    { variation: 65, width: 21, height: 33, theme: "Mine" },
    { variation: 65, width: 60, height: 60, theme: "DefaultShowdown" },
    { variation: 66, width: 21, height: 33, theme: "BBArena" },
    { variation: 66, width: 60, height: 60, theme: "DefaultShowdown" },
    { variation: 67, width: 60, height: 60, theme: "DefaultShowdown" },
    { variation: 68, width: 21, height: 33, theme: "Hub" },
    { variation: 69, width: 60, height: 60, theme: "DefaultShowdown" },
    { variation: 70, width: 21, height: 33, theme: "Default" },
    { variation: 71, width: 60, height: 60, theme: "DefaultShowdown" },
    { variation: 72, width: 60, height: 60, theme: "DefaultShowdown" },
    { variation: 73, width: 60, height: 60, theme: "DefaultShowdown" },
    { variation: 74, width: 60, height: 60, theme: "DefaultShowdown" },
    { variation: 75, width: 60, height: 60, theme: "DefaultShowdown" },
    { variation: 76, width: 21, height: 33, theme: "Grassfield" },
    { variation: 77, width: 21, height: 33, theme: "Pyramidquest" },
    { variation: 77, width: 60, height: 60, theme: "DefaultShowdown" },
    { variation: 78, width: 60, height: 60, theme: "DefaultShowdown" },
    { variation: 79, width: 21, height: 33, theme: "AirHockey" }
];
