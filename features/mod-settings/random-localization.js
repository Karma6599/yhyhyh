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
