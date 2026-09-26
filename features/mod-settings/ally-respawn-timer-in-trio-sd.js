//============================================================================//
// MOD FEATURE: Ally respawn timer in Trio SD
// In-game name: "Ally respawn timer in Trio SD"  (TID: AllyRespawnTimer_name)
// Description: "Shows the missing teammate respawn countdown in Trio Showdown."
// Menu: Mod Settings — BSD BRAWL SETTINGS popup (menu/mod-configuration.js)
// Config key: AllyRespawnTimer  (default true)
// Implementation below:
//============================================================================//

// --------------------- MODULE 6858 — AllyRespawnTimer ---------------------


// ============================================================ //
// webpack module 6858  —  AllyRespawnTimer
// exports: AllyRespawnTimer
// deps: 2476 (CombatHUD), 3015 (TextField), 4009 (Config), 5523 (LogicBattleModeClient), 6128 (BattleMode), 7535 (StringObject), 9250 (StringTable), 9515 (LogicGameModeUtil), 9754 (LogicCharacterClient)
// ============================================================ //

__webpack_modules__[6858] = function AllyRespawnTimer_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Config, StringObject, BattleMode, LogicBattleModeClient, LogicCharacterClient, LogicGameModeUtil, StringTable, TextField, CombatHUD, EVENT_MODIFIER_INDEX_RESPAWN, FIVE_PLAYER_SHOWDOWN_MODE_INDEX, ENGINE_DEATH_ANIM_GRACE_SECONDS, RESPAWN_LABEL_PLACEHOLDER, ENGINE_RESPAWN_TID, FALLBACK_RESPAWN_TEMPLATE, TEXT_COLOR_SINGLE_TEAMMATE_DEAD, TEXT_COLOR_MULTIPLE_TEAMMATES_DEAD, REDIRECTABLE_GONE_TID_LIST, AllyRespawnTimer, <class_fields_init>, AllyRespawnTimer;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.AllyRespawnTimer = undefined;
        Config = __webpack_require__(4009);
        StringObject = __webpack_require__(7535);
        BattleMode = __webpack_require__(6128);
        LogicBattleModeClient = __webpack_require__(5523);
        LogicCharacterClient = __webpack_require__(9754);
        LogicGameModeUtil = __webpack_require__(9515);
        StringTable = __webpack_require__(9250);
        TextField = __webpack_require__(3015);
        CombatHUD = __webpack_require__(2476);
        EVENT_MODIFIER_INDEX_RESPAWN = 34;
        FIVE_PLAYER_SHOWDOWN_MODE_INDEX = 69;
        ENGINE_DEATH_ANIM_GRACE_SECONDS = 1;
        RESPAWN_LABEL_PLACEHOLDER = "<num>";
        ENGINE_RESPAWN_TID = "TID_TEAM_MATE_RESPAWNING";
        FALLBACK_RESPAWN_TEMPLATE = "Respawn in <num>";
        TEXT_COLOR_SINGLE_TEAMMATE_DEAD = 4291611648.0;
        TEXT_COLOR_MULTIPLE_TEAMMATES_DEAD = 4293787648.0;
        REDIRECTABLE_GONE_TID_LIST = new Set(["TID_TEAM_MATE_GONE", "TID_ALL_TEAM_MATES_GONE", "TID_ALL_TEAM_MATES_GONE_5P", "TID_ALL_TEAM_MATES_GONE_2V2"]);
        <class_fields_init> = undefined;
        AllyRespawnTimer;
        class AllyRespawnTimer {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x99382 (open) */
}
            patch () {
        if ((this).patched) {
            return;
        } /* if 0x98998 */
        this.patched = true;
        ((CombatHUD).CombatHUD).addHintTextsListener(function (combatHud) {
        if ((!(((Config).Config).config).AllyRespawnTimer)) {
            return;
            /* CATCH -> 0x98a1d (try region) */
        } /* if 0x98a06 */
        (AllyRespawnTimer).tick(combatHud);
        return;
        /* CATCH -> 0x98a25 (try region) */
        return;
        throw <underflow>;
});
        return;
}
            tick (combatHud) {
    var battleMode, logicBattleModeClient, battleModeClient, modeIndex, gameModeUtil, aliveTeammateCount, respawnSeconds, displaySeconds, formattedText;
        battleMode = ((BattleMode).BattleMode).getInstance();
        if ((battleMode).isNull()) {
            return;
        } /* if 0x98b5a */
        logicBattleModeClient = ((BattleMode).BattleMode).getLogicBattleModeClient();
        if ((logicBattleModeClient).isNull()) {
            return;
        } /* if 0x98b83 */
        battleModeClient = new (LogicBattleModeClient).LogicBattleModeClient(logicBattleModeClient);
        modeIndex = (battleModeClient).modeIndex;
        if (((LogicGameModeUtil).LogicGameModeUtil).isDuoShowdown(modeIndex)) {
            return;
        } /* if 0x98bbc */
        if ((modeIndex === FIVE_PLAYER_SHOWDOWN_MODE_INDEX)) {
            return;
        } /* if 0x98bd0 */
        gameModeUtil = (battleModeClient).getGameModeUtil();
        if ((gameModeUtil).isNull()) {
            return;
        } /* if 0x98bf5 */
        if ((!((LogicGameModeUtil).LogicGameModeUtil).isShowdownLikeMode(gameModeUtil))) {
            return;
        } /* if 0x98c16 */
        if (((this).currentMatchModeIndex !== modeIndex)) {
            this.currentMatchModeIndex = modeIndex;
            (this).resetTrackingState();
        } /* if 0x98c38 */
        aliveTeammateCount = (this).countAliveTeammates(logicBattleModeClient);
        (this).applyAliveCountTransition(aliveTeammateCount);
        if (((this).deathTimestampsMs.length === 0)) {
            return;
        } /* if 0x98c6c */
        respawnSeconds = (this).resolveRespawnSeconds(logicBattleModeClient, gameModeUtil);
        if ((respawnSeconds <= 0)) {
            return;
        } /* if 0x98c90 */
        displaySeconds = (this).computeDisplaySeconds(respawnSeconds);
        if ((displaySeconds > 0)) {
        } /* if 0x98cc6 */
        /* jump -> 0x98cc7 */
        formattedText = "";
        (this).updateTimerString(formattedText);
        return;
}
            applyAliveCountTransition (aliveTeammateCount) {
    var now, newDeathCount, deathIndex, respawnedCount, respawnIndex;
        now = (Date).now();
        if (((this).lastObservedAliveTeammateCount >= 0)) {
            if ((aliveTeammateCount < (this).lastObservedAliveTeammateCount)) {
                newDeathCount = ((this).lastObservedAliveTeammateCount - aliveTeammateCount);
                deathIndex = 0;
                while ((deathIndex < newDeathCount)) {
                    ((this).deathTimestampsMs).push(now);
                    deathIndex = ((deathIndex) + 1);
                    (deathIndex++);
                    if ((aliveTeammateCount > (this).lastObservedAliveTeammateCount)) {
                        respawnedCount = (aliveTeammateCount - (this).lastObservedAliveTeammateCount);
                        respawnIndex = 0;
                        while ((respawnIndex < respawnedCount)) {
                            if (((this).deathTimestampsMs.length > 0)) {
                                ((this).deathTimestampsMs).shift();
                                respawnIndex = ((respawnIndex) + 1);
                                (respawnIndex++);
                            } /* if 0x98df4 */
                        } /* while 0x98df4 */
                    } /* if 0x98df4 */
                } /* while 0x98df4 */
            } /* if 0x98da7 */
            this.lastObservedAliveTeammateCount = aliveTeammateCount;
        } /* if 0x98df7 */
        return;
}
            resolveRespawnSeconds (logicBattleModeClient, gameModeUtil) {
    var eventModifierFlag;
        eventModifierFlag = ((LogicBattleModeClient).LogicBattleModeClient).hasEventModifier(logicBattleModeClient, EVENT_MODIFIER_INDEX_RESPAWN);
        return ((LogicGameModeUtil).LogicGameModeUtil).getRespawnSeconds(gameModeUtil, eventModifierFlag);
}
            computeDisplaySeconds (respawnSeconds) {
    var earliestDeathMs, elapsedSeconds, remainingSeconds;
        earliestDeathMs = (this).deathTimestampsMs[0];
        elapsedSeconds = (((Date).now() - earliestDeathMs) / 1000);
        remainingSeconds = (respawnSeconds - elapsedSeconds);
        return (Math).ceil((remainingSeconds - ENGINE_DEATH_ANIM_GRACE_SECONDS));
}
            getEngineRespawnTemplate () {
    var text;
        /* is_null  */
        if (!(this).cachedEngineRespawnTemplate) {
            return (this).cachedEngineRespawnTemplate;
            /* CATCH -> 0x98f60 (try region) */
        } /* if 0x98f19 */
        text = ((StringTable).StringTable).getString(ENGINE_RESPAWN_TID);
        if (text) {
            if (((text).indexOf(RESPAWN_LABEL_PLACEHOLDER) !== -1)) {
                this.cachedEngineRespawnTemplate = text;
                return text;
            } /* if 0x98f5a */
        } /* if 0x98f5a */
        /* jump -> 0x98f67 */
        text = <underflow>;
        /* CATCH -> 0x98f69 (try region) */
        /* jump -> 0x98f67 */
        throw <underflow>;
        return FALLBACK_RESPAWN_TEMPLATE;
}
            applyTimerStringToTextField (combatHud) {
    var textFieldPointer, textField;
        if (((this).currentTimerStringObject).isNull()) {
            return;
        } /* if 0x98fbd */
        textFieldPointer = ((CombatHUD).CombatHUD).getPrimaryHintTextField(combatHud);
        if ((textFieldPointer).isNull()) {
            return;
        } /* if 0x98fdd */
        textField = new (TextField).TextField(textFieldPointer);
        (textField).setStringObject((this).currentTimerStringObject);
        (textField).setAllowColorCodes(true);
        textField.color = (this).colorForDeadCount((this).deathTimestampsMs.length);
        ((CombatHUD).CombatHUD).setPrimaryHintActive(combatHud, true);
        return;
}
            colorForDeadCount (deadCount) {
        if ((deadCount >= 2)) {
            return TEXT_COLOR_MULTIPLE_TEAMMATES_DEAD;
        } /* if 0x9907e */
        return TEXT_COLOR_SINGLE_TEAMMATE_DEAD;
}
            updateTimerString (text) {
        if ((text === (this).lastFormattedText)) {
            if ((!((this).currentTimerStringObject).isNull())) {
                return;
            } /* if 0x990c0 */
        } /* if 0x990c0 */
        (this).clearTimerString();
        this.currentTimerStringObject = ((StringObject).StringObject).create(text);
        this.lastFormattedText = text;
        return;
}
            clearTimerString () {
        if (((this).currentTimerStringObject).isNull()) {
            return;
        } /* if 0x9911c */
        ((StringObject).StringObject).clear((this).currentTimerStringObject);
        this.currentTimerStringObject = NULL;
        this.lastFormattedText = "";
        return;
}
            resetTrackingState () {
        this.deathTimestampsMs = [];
        this.lastObservedAliveTeammateCount = -1;
        return;
}
            isRedirectableTid (tidPointer) {
    var tidString;
        if ((tidPointer).isNull()) {
            return false;
        } /* if 0x991b2 */
        tidString = (tidPointer).readCString();
        /* is_null  */
        if (tidString) {
            return false;
        } /* if 0x991c4 */
        return (REDIRECTABLE_GONE_TID_LIST).has(tidString);
}
            countAliveTeammates (logicBattleModeClient) {
    var battleModeClient, gameObjects, objectArray, objectCount, ownPlayerIndex, ownPlayerTeam, aliveCount, objectIndex, gameObjectPtr, character;
        battleModeClient = new (LogicBattleModeClient).LogicBattleModeClient(logicBattleModeClient);
        gameObjects = (battleModeClient).getGameObjects();
        objectArray = (gameObjects).getArray();
        if ((objectArray).isNull()) {
            return 0;
        } /* if 0x99274 */
        objectCount = (gameObjects).getItemsCount();
        ownPlayerIndex = ((battleModeClient).ownPlayerIndex | 0);
        ownPlayerTeam = ((battleModeClient).ownPlayerTeam | 0);
        aliveCount = 0;
        objectIndex = 0;
        while ((objectIndex < objectCount)) {
            gameObjectPtr = ((objectArray).add((objectIndex * (Process).pointerSize))).readPointer();
            if (!(gameObjectPtr).isNull()) {
                character = new (LogicCharacterClient).LogicCharacterClient(gameObjectPtr);
                if (!(!(character).isCharacter())) {
                    if (!((character).playerIndex === ownPlayerIndex)) {
                        if (!((character).teamIndex !== ownPlayerTeam)) {
                            if ((character).isAliveHero()) {
                                aliveCount = ((aliveCount) + 1);
                                (aliveCount++);
                            } /* if 0x99333 */
                        } /* if 0x99333 */
                    } /* if 0x99333 */
                    objectIndex = ((objectIndex) + 1);
                    (objectIndex++);
                } /* if 0x9933e */
            } /* if 0x99333 */
            return aliveCount;
        } /* while 0x99341 (open) */
}
        }
        AllyRespawnTimer = CombatHUD = AllyRespawnTimer;
        exports.AllyRespawnTimer = AllyRespawnTimer;
        AllyRespawnTimer.deathTimestampsMs = [];
        AllyRespawnTimer.lastObservedAliveTeammateCount = -1;
        AllyRespawnTimer.currentMatchModeIndex = -1;
        AllyRespawnTimer.currentTimerStringObject = NULL;
        AllyRespawnTimer.lastFormattedText = "";
        AllyRespawnTimer.cachedEngineRespawnTemplate = null;
        AllyRespawnTimer.patched = false;
        return;
};

