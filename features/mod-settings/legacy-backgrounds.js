Config.configStatic.LegacyBackgrounds = false;

LocalisationOverrides.overrides.en.LegacyBackgrounds_name = "Legacy backgrounds";
LocalisationOverrides.overrides.en.LegacyBackgrounds_descEnabled = "Replaces new detalized menu theme backgrounds with legacy style.";
LocalisationOverrides.overrides.ru.LegacyBackgrounds_name = "Старый стиль фонов";
LocalisationOverrides.overrides.ru.LegacyBackgrounds_descEnabled = "Возвращает старый стиль фоновых тем в меню.";

var HomeScreen_refreshTheme = new NativeFunction(Libg.Libg.offset(11892688, 0), "void", ["pointer"]);

function patchLegacyBackgrounds() {
    Interceptor.attach(HomeScreen_refreshTheme, { onLeave() {
        var clip = HomeScreen.HomeScreen.getThemeMovieClip();
        if (Config.Config.config.LegacyBackgrounds) {
            LegacyBackgroundManager.apply(clip, true);
        }
    } });
}

class LegacyBackgroundManager {
    static disableRange(from, to) {
        return function (i) {
            return i >= from && i <= to;
        };
    }

    static indexFrom(from) {
        return function (i) {
            return i >= from;
        };
    }

    static indexTo(to) {
        return function (i) {
            return i <= to;
        };
    }

    static disableOnly(target) {
        return function (i) {
            return i === target;
        };
    }

    static nameIncludes(text) {
        return function (_, __, name) {
            return name.includes(text);
        };
    }

    static and(...rules) {
        return function (i, child, name) {
            return rules.every(function (rule) {
                return rule(i, child, name);
            });
        };
    }

    static or(...rules) {
        return function (i, child, name) {
            return rules.some(function (rule) {
                return rule(i, child, name);
            });
        };
    }

    static not(rule) {
        return function (i, child, name) {
            return !rule(i, child, name);
        };
    }

    static shouldSkipLayer(name) {
        if (!name.startsWith("bg_colo")) {
            return name.startsWith("bg_pattern");
        }
        return true;
    }

    static defaultLegacyRule(child) {
        var childCount = child.getChildCount();
        return childCount !== 1 && childCount !== 432 && childCount !== 108;
    }

    static apply(themeClip, enabled) {
        try {
            var exportName = themeClip.exportName;
            if (!exportName) {
                return undefined;
            }
            themeClip = StrangerthingsFixer.fix(themeClip);
            var rules = LegacyBackgroundManager.rules[exportName];
            var childAmount = themeClip.getChildCount();
            for (var i = 1; i < childAmount; i++) {
                var child = themeClip.getChildById(i);
                if (child.type !== "MovieClip") {
                    continue;
                }
                var name = themeClip.getNameOfChild(child);
                if (LegacyBackgroundManager.shouldSkipLayer(name)) {
                    continue;
                }
                var shouldHide = null;
                if (rules != null) {
                    shouldHide = rules.some(function (rule) {
                        return rule(i, child, name);
                    });
                }
                if (shouldHide == null) {
                    shouldHide = LegacyBackgroundManager.defaultLegacyRule(child);
                }
                child.visibility = !(enabled && shouldHide);
            }
        } catch (e) {
            EDebugger.EDebugger.addMessage(EDebugger.EDebugger.ERROR, "LegacyBackgroundManager: ".concat(e));
        }
    }
}

LegacyBackgroundManager.rules = { bgr_dark: [LegacyBackgroundManager.indexFrom(435)], bgr_ghosttrain: [LegacyBackgroundManager.indexFrom(435)], bgr_enchanted: [LegacyBackgroundManager.indexFrom(433)], bgr_darkmas: [LegacyBackgroundManager.disableOnly(9), LegacyBackgroundManager.disableOnly(10)], bgr_ramadan2023: [LegacyBackgroundManager.disableOnly(8), LegacyBackgroundManager.disableOnly(9), LegacyBackgroundManager.disableOnly(14), LegacyBackgroundManager.disableOnly(15)], bgr_hub: [LegacyBackgroundManager.disableOnly(8), LegacyBackgroundManager.disableOnly(18), LegacyBackgroundManager.disableOnly(19)], bgr_phoenix: [LegacyBackgroundManager.disableRange(6, 7)], bgr_cursedpirates: [LegacyBackgroundManager.disableRange(10, 29), LegacyBackgroundManager.disableRange(39, 41)], bgr_sb: [LegacyBackgroundManager.indexFrom(433)], bgr_samurai: [LegacyBackgroundManager.disableRange(434, 449), LegacyBackgroundManager.indexFrom(452)], bgr_zombie: [LegacyBackgroundManager.indexFrom(434)], bgr_toons2: [LegacyBackgroundManager.disableRange(6, 10), LegacyBackgroundManager.disableOnly(13)], bgr_toystory: [LegacyBackgroundManager.disableRange(435, 440), LegacyBackgroundManager.indexFrom(442)], bgr_arcade: [LegacyBackgroundManager.disableRange(6, 16), LegacyBackgroundManager.disableRange(18, 20), LegacyBackgroundManager.indexFrom(22)], bgr_ollie: [LegacyBackgroundManager.disableRange(433, 436), LegacyBackgroundManager.disableRange(443, 444), LegacyBackgroundManager.indexFrom(445)], bgr_goodrandoms: [LegacyBackgroundManager.disableRange(433, 440), LegacyBackgroundManager.disableRange(445, 446), LegacyBackgroundManager.disableRange(448, 453)], bgr_circus: [LegacyBackgroundManager.disableRange(5, 11), LegacyBackgroundManager.disableOnly(15), LegacyBackgroundManager.disableRange(16, 21), LegacyBackgroundManager.disableRange(22, 43), LegacyBackgroundManager.disableOnly(54)], bgr_lny24: [LegacyBackgroundManager.disableRange(23, 24)], bgr_cartoon: [LegacyBackgroundManager.disableRange(433, 446), LegacyBackgroundManager.disableOnly(450)], bgr_superbrawl: [LegacyBackgroundManager.disableRange(433, 792), LegacyBackgroundManager.disableOnly(795)], bgr_lumi: [LegacyBackgroundManager.disableRange(436, 444), LegacyBackgroundManager.indexFrom(447)], bgr_superheroes: [LegacyBackgroundManager.disableOnly(7), LegacyBackgroundManager.disableOnly(10)], bgr_jae: [LegacyBackgroundManager.indexFrom(8)], bgr_feudaljapan_1: [LegacyBackgroundManager.indexFrom(7)], bgr_feudaljapan_2: [LegacyBackgroundManager.indexFrom(7)], bgr_feudaljapan_3: [LegacyBackgroundManager.indexFrom(7)], bgr_feudaljapan_4: [LegacyBackgroundManager.indexFrom(7)], bgr_kaze: [LegacyBackgroundManager.indexFrom(9)], bgr_kaiju: [LegacyBackgroundManager.indexFrom(8)], bgr_graffiti: [LegacyBackgroundManager.disableOnly(9)], bgr_alli: [LegacyBackgroundManager.indexFrom(8)], bgr_darkgreek: [LegacyBackgroundManager.indexFrom(8)], bgr_trunk: [LegacyBackgroundManager.indexFrom(8)], bgr_fantasy: [LegacyBackgroundManager.indexFrom(8)], bgr_demon: [LegacyBackgroundManager.disableRange(433, 438), LegacyBackgroundManager.disableOnly(444)], bgr_brawloween25: [LegacyBackgroundManager.indexFrom(8)], bgr_ziggy: [LegacyBackgroundManager.indexFrom(8)], bgr_mina: [LegacyBackgroundManager.indexFrom(8)], bgr_mechas2025: [LegacyBackgroundManager.indexFrom(8)], bgr_gigi: [LegacyBackgroundManager.disableOnly(9), LegacyBackgroundManager.disableOnly(15)], bgr_gym: [LegacyBackgroundManager.disableOnly(7)], bgr_steampunk: [LegacyBackgroundManager.disableOnly(7)], bgr_glowbert: [LegacyBackgroundManager.indexFrom(8)], bgr_lny25: [LegacyBackgroundManager.indexFrom(8)], bgr_brawlentines25: [LegacyBackgroundManager.indexFrom(8)], bgr_najia: [LegacyBackgroundManager.indexFrom(7)], bgr_dragonsandfairies: [LegacyBackgroundManager.indexFrom(9)], bgr_strangerthings: [LegacyBackgroundManager.indexFrom(8)], bgr_newyork: [LegacyBackgroundManager.indexFrom(8)], bgr_rio: [LegacyBackgroundManager.indexFrom(8)], bgr_tokyo: [LegacyBackgroundManager.indexFrom(8)], bgr_berlin: [LegacyBackgroundManager.indexFrom(8)], bgr_carretabrawl: [LegacyBackgroundManager.indexFrom(8)], bgr_mf25: [LegacyBackgroundManager.indexFrom(8)], bgr_pierce: [LegacyBackgroundManager.indexFrom(8)], atom47: [LegacyBackgroundManager.disableOnly(4)], bgr_finnx: [], bgr_mecha: [], bgr_mecha_edgar: [] };
