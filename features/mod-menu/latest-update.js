class LatestUpdate {
    static showLatestUpdateChangelog() {
        var patchNotes = Localisation.Localisation.getPatchNotesForCurrentVersion();
        GUI.GUI.showPopup(new GenericInfoPopup.GenericInfoPopup(Localisation.Localisation.getString("LatestUpdate"), patchNotes), true, true, false);
    }
}
