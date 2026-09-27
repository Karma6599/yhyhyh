Config.configStatic.InstantStarrDropOpening = false;

LocalisationOverrides.overrides.en.InstantStarrDropOpening_name = "Instant reward opening";
LocalisationOverrides.overrides.en.InstantStarrDropOpening_descEnabled = "When enabled, you won't have to tap 4 times to open starrdrop.";

function InstantStarrDropOpeningCallback() {
    var clip = StringTable.StringTable.getMovieClip("sc/emoji_1.sc", "emoji_starr");
    var child = clip.getChildById(1);
    child.gotoAndStopFrameIndex(210);
    return clip;
}
