Config.configStatic.HideSuperAim = true;

LocalisationOverrides.overrides.en.HideUltiAiming_name = "Hide Super targeting in battle";
LocalisationOverrides.overrides.en.HideUltiAiming_descEnabled = "When enabled, other players will NOT be able to see the yellow circle under your brawler when you aim with Super in battle.";

function HideUltiAimingCallback() {
    var clip = StringTable.StringTable.getMovieClip("sc/ui.sc", "ulti_stick");
    var child = clip.getChildById(1);
    clip.gotoAndStopFrameIndex(0);
    child.gotoAndStopFrameIndex(0);
    return clip;
}
