LocalisationOverrides.overrides.en.OldRankSystem_name = "Old level system";
LocalisationOverrides.overrides.en.OldRankSystem_descEnabled = "When enabled, levels will return to previous system (level 35 = max).";

class CustomModNames {}
CustomModNames.oldRankMod = "OldRankMod";

var LogicDataTableResource_getFileName = Libg.Libg.offset(14776164, 0);
var isIOS = Process.platform === "darwin";
var allowedReturnAddrs = null;

function patchLogicDataTableResource() {
    var bsdCsvPatchPath = "bsd/mods/BSDCsvPatches/";
    var csvFiles = new Set(["csv_logic/themes.csv", "csv_client/effects.csv", "csv_client/music.csv"]);
    var mods = [{ file: "csv_logic/milestones.csv", mod: CustomModNames.oldRankMod }];
}

function getReplacedStrings() {
    return {
        heroMaxTier: StringObject.StringObject.create("35"),
        emptyString: StringObject.StringObject.create("")
    };
}

function getRankNames() {
    return {
        ar: StringObject.StringObject.create("الترتيب"),
        cn: StringObject.StringObject.create("荣誉"),
        cnt: StringObject.StringObject.create("RANK"),
        de: StringObject.StringObject.create("RANG"),
        en: StringObject.StringObject.create("RANK"),
        es: StringObject.StringObject.create("RANGO"),
        fi: StringObject.StringObject.create("ARVO"),
        fr: StringObject.StringObject.create("RANG"),
        he: StringObject.StringObject.create("דירוג"),
        id: StringObject.StringObject.create("KELAS"),
        it: StringObject.StringObject.create("GRADO"),
        jp: StringObject.StringObject.create("ランク"),
        kr: StringObject.StringObject.create("RANK"),
        ms: StringObject.StringObject.create("PANGKAT"),
        nl: StringObject.StringObject.create("RANG"),
        pl: StringObject.StringObject.create("RANGA"),
        pt: StringObject.StringObject.create("CLASSE"),
        ru: StringObject.StringObject.create("РАНГ"),
        th: StringObject.StringObject.create("อันดับ"),
        tr: StringObject.StringObject.create("RÜTBE"),
        vi: StringObject.StringObject.create("HẠNG")
    };
}
