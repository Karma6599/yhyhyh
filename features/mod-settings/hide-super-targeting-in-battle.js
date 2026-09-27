// ============================================================= //
// FEATURE: Hide Super targeting in battle
// Config key: HideSuperAim (default true)
// TID prefix: HideUltiAiming
// Icon: HideUltiAimingCallback (menu/icons.js, module 2120)
// Implementation: config key only — the yellow aiming circle is
// hidden in the native layer; no JS consumer in this build's source.
// ============================================================= //

Config.configStatic.HideSuperAim = true;

// Strings ship in the game asset (bsd/internal/localization.json),
// not in the JS localisation overrides:
//   HideUltiAiming_name        = "Hide Super targeting in battle"
//   HideUltiAiming_descEnabled = "When enabled, other players will NOT be able to see the yellow circle under your brawler when you aim with Super in battle."

function HideUltiAimingCallback() {
    var clip = StringTable.StringTable.getMovieClip("sc/ui.sc", "ulti_stick");
    var child = clip.getChildById(1);
    clip.gotoAndStopFrameIndex(0);
    child.gotoAndStopFrameIndex(0);
    return clip;
}
