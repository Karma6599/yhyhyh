var EVENT_MODIFIER_INDEX_RESPAWN = 34;
var FIVE_PLAYER_SHOWDOWN_MODE_INDEX = 69;
var ENGINE_DEATH_ANIM_GRACE_SECONDS = 1;
var RESPAWN_LABEL_PLACEHOLDER = "<num>";
var ENGINE_RESPAWN_TID = "TID_TEAM_MATE_RESPAWNING";
var FALLBACK_RESPAWN_TEMPLATE = "Respawn in <num>";
var TEXT_COLOR_SINGLE_TEAMMATE_DEAD = 4291611648.0;
var TEXT_COLOR_MULTIPLE_TEAMMATES_DEAD = 4293787648.0;
var REDIRECTABLE_GONE_TID_LIST = new Set(["TID_TEAM_MATE_GONE", "TID_ALL_TEAM_MATES_GONE", "TID_ALL_TEAM_MATES_GONE_5P", "TID_ALL_TEAM_MATES_GONE_2V2"]);

class AllyRespawnTimer {
    static patch() {
        if (this.patched) {
            return;
        }
        this.patched = true;
        CombatHUD.CombatHUD.addHintTextsListener(function (combatHud) {
            try {
                if (!Config.Config.config.AllyRespawnTimer) {
                    return;
                }
                AllyRespawnTimer.tick(combatHud);
            } catch (e) {
                return;
            }
        });
    }

    static tick(combatHud) {
        var battleMode = BattleMode.BattleMode.getInstance();
        if (battleMode.isNull()) {
            return;
        }
        var logicBattleModeClient = BattleMode.BattleMode.getLogicBattleModeClient();
        if (logicBattleModeClient.isNull()) {
            return;
        }
        var battleModeClient = new LogicBattleModeClient.LogicBattleModeClient(logicBattleModeClient);
        var modeIndex = battleModeClient.modeIndex;
        if (LogicGameModeUtil.LogicGameModeUtil.isDuoShowdown(modeIndex)) {
            return;
        }
        if (modeIndex === FIVE_PLAYER_SHOWDOWN_MODE_INDEX) {
            return;
        }
        var gameModeUtil = battleModeClient.getGameModeUtil();
        if (gameModeUtil.isNull()) {
            return;
        }
        if (!LogicGameModeUtil.LogicGameModeUtil.isShowdownLikeMode(gameModeUtil)) {
            return;
        }
        if (this.currentMatchModeIndex !== modeIndex) {
            this.currentMatchModeIndex = modeIndex;
            this.resetTrackingState();
        }
        var aliveTeammateCount = this.countAliveTeammates(logicBattleModeClient);
        this.applyAliveCountTransition(aliveTeammateCount);
        if (this.deathTimestampsMs.length === 0) {
            return;
        }
        var respawnSeconds = this.resolveRespawnSeconds(logicBattleModeClient, gameModeUtil);
        if (respawnSeconds <= 0) {
            return;
        }
        var displaySeconds = this.computeDisplaySeconds(respawnSeconds);
        var formattedText = "";
        if (displaySeconds > 0) {
            formattedText = this.getEngineRespawnTemplate().replace(RESPAWN_LABEL_PLACEHOLDER, displaySeconds);
        }
        this.updateTimerString(formattedText);
        this.applyTimerStringToTextField(combatHud);
    }

    static applyAliveCountTransition(aliveTeammateCount) {
        var now = Date.now();
        if (this.lastObservedAliveTeammateCount >= 0) {
            if (aliveTeammateCount < this.lastObservedAliveTeammateCount) {
                var newDeathCount = this.lastObservedAliveTeammateCount - aliveTeammateCount;
                for (var deathIndex = 0; deathIndex < newDeathCount; deathIndex++) {
                    this.deathTimestampsMs.push(now);
                }
            } else if (aliveTeammateCount > this.lastObservedAliveTeammateCount) {
                var respawnedCount = aliveTeammateCount - this.lastObservedAliveTeammateCount;
                for (var respawnIndex = 0; respawnIndex < respawnedCount; respawnIndex++) {
                    if (this.deathTimestampsMs.length > 0) {
                        this.deathTimestampsMs.shift();
                    }
                }
            }
            this.lastObservedAliveTeammateCount = aliveTeammateCount;
        }
    }

    static resolveRespawnSeconds(logicBattleModeClient, gameModeUtil) {
        var eventModifierFlag = LogicBattleModeClient.LogicBattleModeClient.hasEventModifier(logicBattleModeClient, EVENT_MODIFIER_INDEX_RESPAWN);
        return LogicGameModeUtil.LogicGameModeUtil.getRespawnSeconds(gameModeUtil, eventModifierFlag);
    }

    static computeDisplaySeconds(respawnSeconds) {
        var earliestDeathMs = this.deathTimestampsMs[0];
        var elapsedSeconds = (Date.now() - earliestDeathMs) / 1000;
        var remainingSeconds = respawnSeconds - elapsedSeconds;
        return Math.ceil(remainingSeconds - ENGINE_DEATH_ANIM_GRACE_SECONDS);
    }

    static getEngineRespawnTemplate() {
        try {
            if (this.cachedEngineRespawnTemplate != null) {
                return this.cachedEngineRespawnTemplate;
            }
            var text = StringTable.StringTable.getString(ENGINE_RESPAWN_TID);
            if (text) {
                if (text.indexOf(RESPAWN_LABEL_PLACEHOLDER) !== -1) {
                    this.cachedEngineRespawnTemplate = text;
                    return text;
                }
            }
        } catch (e) {
        }
        return FALLBACK_RESPAWN_TEMPLATE;
    }

    static applyTimerStringToTextField(combatHud) {
        if (this.currentTimerStringObject.isNull()) {
            return;
        }
        var textFieldPointer = CombatHUD.CombatHUD.getPrimaryHintTextField(combatHud);
        if (textFieldPointer.isNull()) {
            return;
        }
        var textField = new TextField.TextField(textFieldPointer);
        textField.setStringObject(this.currentTimerStringObject);
        textField.setAllowColorCodes(true);
        textField.color = this.colorForDeadCount(this.deathTimestampsMs.length);
        CombatHUD.CombatHUD.setPrimaryHintActive(combatHud, true);
    }

    static colorForDeadCount(deadCount) {
        if (deadCount >= 2) {
            return TEXT_COLOR_MULTIPLE_TEAMMATES_DEAD;
        }
        return TEXT_COLOR_SINGLE_TEAMMATE_DEAD;
    }

    static updateTimerString(text) {
        if (text === this.lastFormattedText) {
            if (!this.currentTimerStringObject.isNull()) {
                return;
            }
        }
        this.clearTimerString();
        this.currentTimerStringObject = StringObject.StringObject.create(text);
        this.lastFormattedText = text;
    }

    static clearTimerString() {
        if (this.currentTimerStringObject.isNull()) {
            return;
        }
        StringObject.StringObject.clear(this.currentTimerStringObject);
        this.currentTimerStringObject = NULL;
        this.lastFormattedText = "";
    }

    static resetTrackingState() {
        this.deathTimestampsMs = [];
        this.lastObservedAliveTeammateCount = -1;
    }

    static isRedirectableTid(tidPointer) {
        if (tidPointer.isNull()) {
            return false;
        }
        var tidString = tidPointer.readCString();
        if (!tidString) {
            return false;
        }
        return REDIRECTABLE_GONE_TID_LIST.has(tidString);
    }

    static countAliveTeammates(logicBattleModeClient) {
        var battleModeClient = new LogicBattleModeClient.LogicBattleModeClient(logicBattleModeClient);
        var gameObjects = battleModeClient.getGameObjects();
        var objectArray = gameObjects.getArray();
        if (objectArray.isNull()) {
            return 0;
        }
        var objectCount = gameObjects.getItemsCount();
        var ownPlayerIndex = battleModeClient.ownPlayerIndex | 0;
        var ownPlayerTeam = battleModeClient.ownPlayerTeam | 0;
        var aliveCount = 0;
        for (var objectIndex = 0; objectIndex < objectCount; objectIndex++) {
            var gameObjectPtr = objectArray.add(objectIndex * Process.pointerSize).readPointer();
            if (!gameObjectPtr.isNull()) {
                var character = new LogicCharacterClient.LogicCharacterClient(gameObjectPtr);
                if (character.isCharacter()) {
                    if (character.playerIndex !== ownPlayerIndex) {
                        if (character.teamIndex === ownPlayerTeam) {
                            if (character.isAliveHero()) {
                                aliveCount++;
                            }
                        }
                    }
                }
            }
        }
        return aliveCount;
    }
}

AllyRespawnTimer.deathTimestampsMs = [];
AllyRespawnTimer.lastObservedAliveTeammateCount = -1;
AllyRespawnTimer.currentMatchModeIndex = -1;
AllyRespawnTimer.currentTimerStringObject = NULL;
AllyRespawnTimer.lastFormattedText = "";
AllyRespawnTimer.cachedEngineRespawnTemplate = null;
AllyRespawnTimer.patched = false;
