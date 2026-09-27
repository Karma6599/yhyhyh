// ============================================================= //
// FEATURE: Random localization
// Config key: RandomLocalization (default false)
// TID prefix: RandomLocalization
// Icon: RandomLocalizationCallback (menu/icons.js, module 2120)
// Implementation: config key only in the JS layer — the string
// shuffling is applied through the localisation overrides table
// (module 6528); no per-string JS consumer in this build's source.
// ============================================================= //

Config.configStatic.RandomLocalization = false;

LocalisationOverrides.overrides.en.RandomLocalization_name = "Random localization";
LocalisationOverrides.overrides.en.RandomLocalization_descEnabled = "When enabled, all text in the game will be randomly shuffled.";
LocalisationOverrides.overrides.ru.RandomLocalization_name = "Рандомная локализация";
LocalisationOverrides.overrides.ru.RandomLocalization_descEnabled = "Когда включено: весь текст в игре будет случайным.";

function RandomLocalizationCallback() {
    var iconSprite = new Sprite.Sprite(1);
    var tfClip = StringTable.StringTable.getMovieClip("sc/ui.sc", "popover_text_left");
    var iconRandomParent = StringTable.StringTable.getMovieClip("sc/ui.sc", "event_icon_random");
    var iconRandom = iconRandomParent.getChildById(1);
    var textField = tfClip.getTextFieldByName("text");
    textField.color = 4294967295.0;
    textField.fontOutline = true;
    textField.text = "TID_";
    textField.fontSize = 24;
    textField.x = textField.x + -35;
    textField.y = textField.y + -15;
    iconRandom.x = iconRandom.x + 25;
    iconRandom.y = iconRandom.y + 0;
    iconRandom.scale = 0.3;
    iconSprite.addChild(textField);
    iconSprite.addChild(iconRandom);
    iconSprite.scale = 1.95;
    return iconSprite;
}

// The shuffle itself happens while the string table is being laid out —
// no dedicated JS hook exists for it in this build (the overrides table in
// module 6528, core/localisation.js, is the only localisation-side
// mechanism and does not branch on this key).
