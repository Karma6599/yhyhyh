class ProfileSkinNames {
    static patch() {
        if (this.hookInstalled) {
            return;
        }
        this.hookInstalled = true;
    }

    static onProfileDecoded(brawlerEntries) {
        this.characterTIDStringToSkinTID.clear();
        if (!Config.Config.config.ShowSkinNamesInProfile) {
            return;
        }
        try {
            for (var entry of brawlerEntries) {
                if (!entry.skin) {
                    continue;
                }
                if (entry.character.instance.equals(entry.skin.instance)) {
                    continue;
                }
                var characterTIDPointer = LogicData.LogicData.getTIDPointer(entry.character.instance);
                var skinTIDPointer = LogicData.LogicData.getTIDPointer(entry.skin.instance);
                if (characterTIDPointer.isNull() || skinTIDPointer.isNull()) {
                    continue;
                }
                var characterTIDString = StringObject.StringObject.read(characterTIDPointer);
                if (!characterTIDString || characterTIDString.length === 0) {
                    continue;
                }
                var skinTIDString = StringObject.StringObject.read(skinTIDPointer);
                if (!skinTIDString || skinTIDString.length === 0) {
                    continue;
                }
                this.characterTIDStringToSkinTID.set(characterTIDString, skinTIDString);
            }
        } catch (e) {
        }
    }
}

ProfileSkinNames.characterTIDStringToSkinTID = new Map();
ProfileSkinNames.hookInstalled = false;
