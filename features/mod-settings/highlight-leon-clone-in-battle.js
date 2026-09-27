// ============================================================= //
// FEATURE: Highlight Leon clone in battle
// Config key: HighlightLeonClone (default false)
// TID prefix: HighlightLeonClone
// Icon: HighlightLeonCloneCallback (menu/icons.js, module 2120)
// Wiring: LogicCharacterData.patch (game/data-classes.js, module 7171) —
// the color-mod getter reports 1 for the NinjaFake (Leon clone) character
// ============================================================= //

Config.configStatic.HighlightLeonClone = false;

// Strings ship in the game asset (bsd/internal/localization.json),
// not in the JS localisation overrides:
//   HighlightLeonClone_name        = "Highlight Leon clone in battle"
//   HighlightLeonClone_descEnabled = "When enabled, Leon clone will be highlighted with red color."

function HighlightLeonCloneCallback() {
    var iconSprite = new Sprite.Sprite(1);
    var clip = StringTable.StringTable.getMovieClip("sc/emoji_1.sc", "emoji_leon");
    var child = clip.getChildById(1);
    child.gotoAndStopFrameIndex(99);
    child.scale = 1.5;
    iconSprite.addChild(child);
    var baseStick = StringTable.StringTable.getMovieClip("sc/ui.sc", "item_base_stick");
    var gadget = baseStick.getChildByName("button_ulti");
    gadget.gotoAndStopFrameIndex(25);
    gadget.visibility = true;
    MovieClipHelper.MovieClipHelper.replaceChildWithMovieClip(gadget, "icon_ph", "sc/ui.sc", "icon_item_leon_1");
    gadget.x = child.width / 3;
    gadget.y = child.height / 3.2;
    gadget.scale = 1.4;
    iconSprite.addChild(gadget);
    return iconSprite;
}

// LogicCharacterData native (module 7171, game/data-classes.js):
var LogicCharacterData_useColorMod = new NativeFunction(Libg.Libg.offset(14615428, 0), "bool", ["pointer"]);

// Installed by LogicCharacterData.patch(): the game's internal name for
// Leon's clone is "NinjaFake" — returning 1 from useColorMod tints it red.
function patchHighlightLeonClone() {
    Interceptor.replace(LogicCharacterData_useColorMod, new NativeCallback(function (character) {
        var chara = new LogicCharacterData.LogicCharacterData(character);
        var name = chara.getName();
        if (name === "NinjaFake") {
            if (Config.Config.config.HighlightLeonClone) {
                return 1;
            }
        }
        return LogicCharacterData_useColorMod(character);
    }, "bool", ["pointer"]));
}
