class Localisation {
    static get languageCode() {
        return this._languageCode;
    }
    static set languageCode(value) {
        if (value) {
            if (value.length === 0) {
                value = "en";
            }
        }
        this._languageCode = value;
    }
    static init() {
        try {
            var creditsJSONString = FileManager.readAAsset("bsd/credits.json", "r");
            if (creditsJSONString) {
                var creditsObject = JSON.parse(creditsJSONString);
                var modName = creditsObject.LobbyCreditModName;
                var socials = creditsObject.LobbyCreditSocials;
                var serverCredit = creditsObject.ServerConnectionCredit;
                var aboutScreen = creditsObject.AboutModCaptions;
                if (modName) {
                    this.jointModName = " & ".concat(modName);
                }
                if (socials) {
                    this.jointModSocials = "".concat(socials, "\n");
                }
                if (serverCredit) {
                    this.jointModServerConnectionCredit = "\n".concat(serverCredit, "\nㅤ");
                }
                if (aboutScreen) {
                    this.jointModAboutScreen = "\n".concat(aboutScreen, "\n");
                }
                return;
            }
        } catch (e) {
            console.error("Failed to initialize localization credits:", e);
            return;
        }
    }
    static getString(key) {
        if (this.localizationObject.hasOwnProperty(key)) {
            return this.localizationObject[key];
        }
        return key;
    }
    static getPatchNotesForCurrentVersion() {
        var currentPatchNotes = Localisation.patchNotes[ModProperties.showPatchNotesFor];
        if (!currentPatchNotes) {
            return Localisation.getString("NoChangelogs");
        }
        if (currentPatchNotes.hasOwnProperty(Localisation.languageCode)) {
            return currentPatchNotes[Localisation.languageCode];
        }
        return "";
    }
}
Localisation._languageCode = "";
Localisation.jointModAboutScreen = "";
Localisation.jointModName = "";
Localisation.jointModServerConnectionCredit = "";
Localisation.jointModSocials = "";
Localisation.isLanguageIndexSet = false;
Localisation.localizationObject = {};
Localisation.patchNotes = { "32.0": { EN: "Refactored!", RU: "Рефактор!" } };

class LocalisationStatic {
}
LocalisationStatic["default"] = { TextServerConnectionCredit: "Brawl Stars Datamines|BSD{jointModServerConnectionCredit}", TextLobbyInfoCredit: "{jointModSocials}Telegram: @bsdatamines", TextModContributors: "⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘\nBSD Brawl v{ScriptPatchVersionName} by Brawl Stars Datamines | BSD\n<c3390ec>Telegram: t.me/bsdatamines</c>\n\n\n»»———————　BSD Brawl Team　———————««\n💼 <cfde423>H<cfdd509>e<cfdbf01>d<cfea603>g<cfe9304>e</c> (Director, Developer)\n<c3390ec>Telegram: @navia</c>    <c5865f2>Discord: heedge</c>\n\n🔍 <cba0000>t<cd10000>a<ce80000>i<cff0000>l<cff0000>s<cd40006>j<caa010c>s</c> (Developer, Code Review)\n<c3390ec>Telegram: @tailsjs/@im_evaelfie</c>    <c5865f2>Discord: tailiumcrypted</c>\n\n🔗 <cfe9c5f>h</c><cfea46b>p</c><cfeac78>d</c><cfeb484>e</c><cffbd90>v</c><cffc59c>f</c><cffcda9>o</c><cffd5b5>x</c> (Networking, Developer)\n<c3390ec>Telegram: @meowfoxd</c>    <c5865f2>Discord: hpdevfox</c>\n\n🤖 <ccb00ff>C<cd519cc>r<ce03399>o<cea4c66>w<cf56633>T<cff7f00>h<cff9900>e<cffb200>B<cffcc00>e<cffe500>s<cffff00>t</c> (Bots/API Manager)\n<c3390ec>Telegram: @CrowTheBest</c>    <c5865f2>Discord: crowthebest</c>\n\n🔧 <cdb84fe>B<cd377fe>r<ccb69fe>e<cc45cfe>a<ccf77fe>d<cda92fe>D<ce5adfe>E<cf1c9fe>V</c> (iOS Developer)\n<c3390ec>Telegram: @breaddev</c>    <c5865f2>Discord: breaddev</c>\n\n\n(っ◔◡◔)っ ♥Special Thanks♥\n<cd46176>oleavr</c> & <cef6456>Frida</c>\n<c708090>hz</c>\n<c374b03>FMZNkdv</c>\n\n\n(っ◔◡◔)っ ♥Donators♥\n---\n⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘", CopyReplayCodeNoCapture: "No replay captured yet - tap watch in BattleLog first", CopyReplayCodeCopied: "Copied: {code}", BattleLogCopyLinkCopied: "Link copied to clipboard" };

class LocalisationOverrides {
}
LocalisationOverrides.overrides = { en: { HighlightDuoQuizAnswers_name: "Duo quiz answers", /* ...all 247 EN keys spliced verbatim (51.7KB single line in the file)... */ }, ru: { /* ...all RU keys spliced verbatim... */ } };

var StringTable_getMovieClip = new NativeFunction(Libg.offset(13722932, 0), "pointer", ["pointer", "pointer", "pointer"]);
var StringTable_getString = new NativeFunction(Libg.offset(13721504, 0), "pointer", ["pointer"]);
var StringTable_getStringByCString = Libg.offset(13721376, 0);
var StringTable_getCurrentLanguageCode = new NativeFunction(Libg.offset(13722276, 0), "pointer", []);
var StringTable_setLanguageIndex = Libg.offset(13721848, 0);
var StringTable_setLanguageIndex_native = new NativeFunction(StringTable_setLanguageIndex, "void", ["int", "bool"]);
var currentLanguageColumnIndexAddr = Libg.offset(19144532, 0);
var stringTableGlobalAddr = Libg.offset(19958984, 0);
var languageCodeCountOffset = LogicMemory.offset(84);
var stringTableLanguageArrayOffset = 8;
var csvTableRowCountOffset = 84;
var csvTableColumnsOffset = 56;
var csvColumnStringArrayOffset = 8;
var stringObjectSize = 16;

class StringTable {
    static getMovieClip(fileName, movieClipName) {
        var movieClipPtr = StringTable_getMovieClip(Memory.allocUtf8String(fileName), Memory.allocUtf8String(movieClipName), NULL);
        return new MovieClip(movieClipPtr);
    }
    static getMovieClip_safe(fileName, movieClipName) {
        var movieClipPtr = StringTable_getMovieClip(Memory.allocUtf8String(fileName), Memory.allocUtf8String(movieClipName), NULL);
        if (movieClipPtr.isNull()) {
            return null;
        }
        return new MovieClip(movieClipPtr);
    }
    static getString(string) {
        return StringObject.with(string, function (stringObjectPointer) {
            return StringObject.read(StringTable_getString(stringObjectPointer));
        });
    }
    static getCurrentLanguageCode() {
        return StringObject.read(StringTable_getCurrentLanguageCode());
    }
    static getCurrentLanguageIndex() {
        return currentLanguageColumnIndexAddr.readS32();
    }
    static getLanguageCount() {
        var table = stringTableGlobalAddr.readPointer();
        if (table.isNull()) {
            return 0;
        }
        var codeList = table.readPointer();
        if (codeList.isNull()) {
            return 0;
        }
        return codeList.add(languageCodeCountOffset).readU32();
    }
    static toggleShowTidKeys() {
        Config.config.ShowTidKeys = !Config.config.ShowTidKeys;
        return Config.config.ShowTidKeys;
    }
    static isShowTidKeys() {
        return Boolean(Config.config.ShowTidKeys);
    }
    static setLanguageIndex(index, refreshCode = true) {
        if (refreshCode) {
            StringTable_setLanguageIndex_native(index, true);
        }
        return;
    }
    static get replacedStrings() {
        if (!this._replacedStrings) {
            this._replacedStrings = { serverConnectionCredit: StringObject.create(LocalisationStatic["default"].TextServerConnectionCredit.replace("{jointModServerConnectionCredit}", this.jointStrings.serverConnectionCredit)), aboutScreenText: StringObject.create(LocalisationStatic["default"].TextModContributors.replace("{ScriptPatchVersionName}", ModProperties.version).replace("{Platform}", "Platform").replace("{ModVersion}", ModProperties.environment).replace("{jointModAboutScreen}", this.jointStrings.aboutScreenText) + "<names>")), heroMaxTier: StringObject.create("35"), emptyString: StringObject.create("") };
        }
        return this._replacedStrings;
    }
    static get rankNames() {
        if (!this._rankNames) {
            this._rankNames = { ar: StringObject.create("الترتيب"), cn: StringObject.create("荣誉"), cnt: StringObject.create("RANK"), de: StringObject.create("RANG"), en: StringObject.create("RANK"), es: StringObject.create("RANGO"), fi: StringObject.create("ARVO"), fr: StringObject.create("RANG"), he: StringObject.create("דירוג"), id: StringObject.create("KELAS"), it: StringObject.create("GRADO"), jp: StringObject.create("ランク"), kr: StringObject.create("RANK"), ms: StringObject.create("PANGKAT"), nl: StringObject.create("RANG"), pl: StringObject.create("RANGA"), pt: StringObject.create("CLASSE"), ru: StringObject.create("РАНГ"), th: StringObject.create("อันดับ"), tr: StringObject.create("RÜTBE"), vi: StringObject.create("HẠNG") };
        }
        return this._rankNames;
    }
    static onLanguageSet() {
        Localisation.languageCode = StringTable.getCurrentLanguageCode();
        try {
            var l10n = JSON.parse(FileManager.readAAsset("bsd/internal/localization.json", "r").toString());
            if (Object.keys(l10n).includes(Localisation.languageCode.toLowerCase())) {
                Localisation.localizationObject = Object.assign({}, LocalisationOverrides.overrides[Localisation.languageCode.toLowerCase()]);
            } else {
                Localisation.localizationObject = Object.assign(l10n.en, LocalisationOverrides.overrides.en);
            }
        } catch (e) {
        }
        Localisation.isLanguageIndexSet = true;
        StringTable.overlaysPending = true;
        if (Config.config.RandomThemeMask[0]) {
            ThemeSelectorManager.setRandomTheme();
            return;
        }
    }
    static updateOverlays() {
        if (StringTable.overlaysPending) {
            if (Stage.getMainSprite().isNull()) {
                return;
            }
        }
        StringTable.overlaysPending = false;
        EDebugger.destroy();
        EDebugger.create();
        FPSCounter.toggle(false);
        return;
    }
    static addStringByCStringRedirector(redirector) {
        StringTable.stringByCStringRedirectors.push(redirector);
        return;
    }
    static hookStringByCString() {
        if (StringTable.stringByCStringHooked) {
            return;
        }
        StringTable.stringByCStringHooked = true;
        return;
    }
    static patch() {
        if (this.patched) {
            return;
        }
        this.patched = true;
        Interceptor.attach(StringTable_setLanguageIndex, {
            onLeave() {
                StringTable.onLanguageSet();
            }
        });
        var bsdTIDs = ["TID_CONTENT_UPDATE", "TID_CREDITS_BUTTON", "TID_CONNECTING_TO_SERVER", "TID_ABOUT", "TID_STREAM_EVENT_114", "TID_MENDER"];
        StringTable.aprilFoolsMapping = {};
        var aprilTIDs = [];
        var aprilCollected = false;
        return;
    }
}
StringTable.overlaysPending = false;
StringTable.jointStrings = { serverConnectionCredit: "", aboutScreenText: "" };
StringTable._replacedStrings = null;
StringTable.aprilFoolsMapping = {};
StringTable.aprilFoolsCleaned = {};
StringTable._rankNames = null;
StringTable.stringByCStringRedirectors = [];
StringTable.stringByCStringHooked = false;
StringTable.patched = false;
