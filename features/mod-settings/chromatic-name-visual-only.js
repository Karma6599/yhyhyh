Config.configStatic.ChromaticName = false;

LocalisationOverrides.overrides.en.VisualChromaticName_name = "Chromatic name (visual-only)";
LocalisationOverrides.overrides.en.VisualChromaticName_descEnabled = "When enabled, your name color will become chromatic as with purchased Brawl Pass.";

function VisualChromaticNamePinCallback() {
    return StringTable.StringTable.getMovieClip("sc/ui.sc", "icon_resource_chromatic_coin");
}

var PlayerDisplayData_ctor = Libg.Libg.offset(15975344, 0);
var LogicClientHome_createOwnDisplayData = Libg.Libg.offset(15821244, 0);
var ownDisplayDataInProgress = false;

function patchChromaticName() {
    Interceptor.attach(LogicClientHome_createOwnDisplayData, {
        onEnter() {
            ownDisplayDataInProgress = true;
        },
        onLeave() {
            ownDisplayDataInProgress = false;
        }
    });
    Interceptor.attach(PlayerDisplayData_ctor, {
        onEnter(args) {
            if (!ownDisplayDataInProgress) {
                return;
            }
            var name = StringObject.StringObject.read(args[1]);
            if (!name) {
                return;
            }
            Player.Player.ownName = name;
            if (Config.Config.config.ChromaticName) {
                args[5] = ptr(-2);
            }
        }
    });
}
