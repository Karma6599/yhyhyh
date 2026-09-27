Config.configStatic.HighlightLeonClone = false;

LocalisationOverrides.overrides.en.HighlightLeonClone_name = "Highlight Leon clone in battle";
LocalisationOverrides.overrides.en.HighlightLeonClone_descEnabled = "When enabled, Leon clone will be highlighted with red color.";

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

var LogicCharacterData_useColorMod = new NativeFunction(Libg.Libg.offset(14615428, 0), "bool", ["pointer"]);

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
