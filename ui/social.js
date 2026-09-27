var AllianceEventStreamEntry_decode = Libg.offset(15965780, 0);
var playerNameOffset = LogicMemory.offset(24);
var eventType = LogicMemory.offset(72);

class AllianceEventStreamEntry {
    constructor() {
    }
    static patch() {
        return;
    }
}

var ChatStreamEntry_decode = Libg.offset(15959584, 0);
var authorIdPtrOffset = LogicMemory.offset(16);
var authorNameOffset = LogicMemory.offset(24);
var messageOffset = LogicMemory.offset(48);

class ChatStreamEntry {
    constructor() {
    }
    static patch() {
        return;
    }
}

var TeamStream_buttonClicked = new NativeFunction(Libg.offset(9274952, 0), "void", ["pointer", "pointer"]);
var TeamStream_instanceAddr = Libg.offset(19938352, 0);
var TeamStream_chatButtonOffset = LogicMemory.offset(40);
var textInputFieldOffset = LogicMemory.offset(88);

class TeamStream {
    constructor() {
    }
    static getInstance() {
        return TeamStream_instanceAddr.readPointer();
    }
    static buttonClicked(buttonOffset) {
        return;
    }
    static patch() {
        return;
    }
}

var StreamItem_refreshEntry = Libg.offset(9050804, 0);

class StreamItem {
    constructor() {
    }
    static patch() {
        return;
    }
    static patchAllTextFields(movieClip) {
        var childCount, childArray, i, childPtr, displayObject, textField;
        childCount = movieClip.getChildCount();
        if (childCount <= 0) {
            return;
        }
        childArray = movieClip.getChildArray();
        if (childArray.isNull()) {
            return;
        }
        i = 0;
        while (i < childCount) {
            childPtr = childArray.add(i * Process.pointerSize).readPointer();
            if (!childPtr.isNull()) {
                displayObject = new DisplayObject(childPtr);
                if (displayObject.isTextField()) {
                    textField = new TextField(childPtr);
                    textField.colorTag = true;
                    textField.setTextScaleIfNecessary(textField.text);
                }
            }
            i = i + 1;
        }
        return;
    }
}

var FriendItem_ctor = Libg.offset(10854264, 0);

class FriendItem {
    constructor() {
    }
    static patch() {
        return;
    }
}

var FriendRequestContainer_show = new NativeFunction(Libg.offset(11643604, 0), "void", ["pointer", "pointer"]);

class FriendRequestContainer {
    constructor() {
    }
    show(name, id) {
        return;
    }
    showForTag(tag) {
        return;
    }
}

var TeamMemberItem_setMember = Libg.offset(10896296, 0);

class TeamMemberItem {
    constructor() {
    }
    static patch() {
        return;
    }
}

var TeamMemberEntry_decode = new NativeFunction(Libg.offset(15949940, 0), "void", ["pointer", "pointer"]);
var TeamMemberEntry_skinOffset = LogicMemory.offset(24, 24);
var TeamMemberEntry_characterOffset = LogicMemory.offset(16, 16);
var TeamMemberEntry_playerIdOffset = LogicMemory.offset(8, 8);
var TeamMemberEntry_lowIdOffset = LogicMemory.offset(4, 4);

class TeamMemberEntry {
    constructor() {
    }
    static patch() {
        return;
    }
}

var TeamEntry_decode = Libg.offset(15929588, 0);
var TeamEntry_getMember = new NativeFunction(Libg.offset(15931764, 0), "pointer", ["pointer", "pointer"]);
var TeamEntry_unknownOffset = LogicMemory.offset(72);
var TeamEntry_membersArrayOffset = LogicMemory.offset(48);

class TeamEntry {
    constructor() {
    }
    static patch() {
        Interceptor.replace(TeamEntry_getMember, new NativeCallback(function (entry, long) {
            if (entry.add(TeamEntry_membersArrayOffset).readPointer().isNull()) {
                EDebugger.addMessage(EDebugger.WARNING, "TeamEntry::getMember:", "Members array is NULL! Why???");
                Breadcrumbs.push("TeamEntry::getMember(teamEntry, long); TeamEntry->m_membersArray = NULL!");
                return Libc.malloc(1);
            }
            return TeamEntry_getMember(entry, long);
        }, "pointer", ["pointer", "pointer"]));
        return;
    }
}

var AllianceFullEntry_membersArrayOffset = LogicMemory.offset(8);

class AllianceFullEntry {
    constructor(instance) {
        this.instance = instance;
    }
    get header() {
        return new AllianceHeaderEntry(this.instance.readPointer());
    }
    get members() {
        return new LogicArrayList(this.instance.add(AllianceFullEntry_membersArrayOffset).readPointer());
    }
}

class AllianceHeaderEntry {
    constructor(instance) {
        this.instance = instance;
    }
    get allianceId() {
        return new LogicLong(this.instance.readPointer());
    }
}

var PlayerEntry_decode = new NativeFunction(Libg.offset(15996220, 0), "void", ["pointer", "pointer"]);
var PlayerEntry_playerIdOffset = LogicMemory.offset(96);
var playersArrayOffset = LogicMemory.offset(8);
var PlayerEntry_skinOffset = LogicMemory.offset(24);
var playersCountOffset = LogicMemory.offset(20);
var playerDisplayDataOffset = LogicMemory.offset(104);
var killsOffset = LogicMemory.offset(136);
var deathsOffset = LogicMemory.offset(140);
var damageOffset = LogicMemory.offset(144);
var healOffset = LogicMemory.offset(148);

class PlayerEntry {
    constructor(instance) {
        this.instance = instance;
    }
    get playerId() {
        var long;
        long = this.instance.add(PlayerEntry_playerIdOffset).readPointer();
        if (long.isNull()) {
            return null;
        }
        return new LogicLong(long);
    }
    get displayData() {
        return new PlayerDisplayData(this.instance.add(playerDisplayDataOffset).readPointer());
    }
    get kills() {
        return this.instance.add(killsOffset).readInt();
    }
    get deaths() {
        return this.instance.add(deathsOffset).readInt();
    }
    get damage() {
        return this.instance.add(damageOffset).readInt();
    }
    get heal() {
        return this.instance.add(healOffset).readInt();
    }
    static patch() {
        return;
    }
}

class StatusItem extends GameButton {
    constructor(statusItemId) {
        var statusItemMovieClip, buttonTextField, statusItemName;
        super();
        this.instance.writePointer(countryPopupListItemVtableAddr);
        statusItemMovieClip = StringTable.getMovieClip("sc/ui.sc", "country_item");
        this.setMovieClip(statusItemMovieClip.instance, 1);
        buttonTextField = MovieClip.getTextFieldByName(statusItemMovieClip.instance, "Text");
        statusItemName = this.getStatusName(statusItemId);
        this.id = statusItemId;
        buttonTextField.colorTag = true;
        buttonTextField.setTextScaleIfNecessary(StringTable.getString(statusItemName));
        statusItemMovieClip.gotoAndStopFrameIndex(1);
    }
    getStatusName(statusItemId) {
        var statusItemName;
        statusItemName = undefined;
        if (statusItemId === -1) {
            statusItemName = "TID_EDIT_REVERT";
        } else if (statusItemId === 12) {
            statusItemName = "TID_TEAM_MEMBER_STATUS_NEW_".concat(statusItemId);
        } else {
            statusItemName = "TID_TEAM_MEMBER_STATUS_".concat(statusItemId);
        }
        return statusItemName;
    }
}
