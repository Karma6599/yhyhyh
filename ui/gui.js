var GUI_instanceAddr = Libg.offset(19935152, 0);
var GUI_closeAllPopups = new NativeFunction(Libg.offset(8911124, 0), "void", ["pointer"]);
var GUI_showFloaterTextAtDefaultPosition = new NativeFunction(Libg.offset(8904776, 0), "void", ["pointer", "pointer", "int", "float"]);
var GUI_showPopup = new NativeFunction(Libg.offset(8908500, 0), "void", ["pointer", "pointer", "int", "int", "int"]);
var GUI_addDataGained = new NativeFunction(Libg.offset(8912184, 0), "pointer", ["pointer", "pointer", "uint", "int", "uchar", "pointer", "pointer", "float", "float", "float"]);
var popupArrayPtrOffset = LogicMemory.offset(216);
var popupCountOffset = LogicMemory.offset(228);
var popupIsHiddenVtableByteOffset = 472;
var popupIsDestroyingVtableByteOffset = 480;
var popupGetTypeVtableByteOffset = 440;
var popupCloseVtableByteOffset = 464;

class GUI {
    constructor() {
    }
    static getInstance() {
        return GUI_instanceAddr.readPointer();
    }
    static patch() {
        var destructor;
        for (const destructor of [GenericPopup_dtor, PopupBase_dtor]) {
            Interceptor.attach(destructor, {
                onEnter(args) {
                    return GUI.onPopupDestroyed(args[0]);
                }
            });
        }
        return;
    }
    static onPopupDestroyed(instance) {
        var destroyed, popup;
        if (GUI.popupStorage.length === 0) {
            return;
        }
        destroyed = GUI.popupStorage.filter(function (popup) {
            return popup.instance.equals(instance);
        });
        GUI.popupStorage = GUI.popupStorage.filter(function (popup) {
            return !popup.instance.equals(instance);
        });
        for (const popup of destroyed) {
            GUI.disposeTrackedPopup(popup);
        }
        return;
    }
    static closeAllPopups() {
        return GUI_closeAllPopups(GUI.getInstance());
    }
    static closePopup(type) {
        var popup;
        popup = GUI.getPopupByType(type);
        if (popup.isNull()) {
            return;
        }
        GUI.popupVcall(popup, popupCloseVtableByteOffset, "void", []);
        return;
    }
    static getPopupByType(type) {
        var gui, count, arrayBase, i, popup, popupType;
        gui = GUI.getInstance();
        if (gui.isNull()) {
            return NULL;
        }
        count = gui.add(popupCountOffset).readU32();
        if (count < 1) {
            return NULL;
        }
        arrayBase = gui.add(popupArrayPtrOffset).readPointer();
        i = 0;
        while (i < count) {
            popup = arrayBase.add(i * Process.pointerSize).readPointer();
            if (!GUI.popupVcall(popup, popupIsHiddenVtableByteOffset, "bool", [])) {
                if (!GUI.popupVcall(popup, popupIsDestroyingVtableByteOffset, "bool", [])) {
                    popupType = GUI.popupVcall(popup, popupGetTypeVtableByteOffset, "uint32", []);
                    if (popupType === type) {
                        return popup;
                    }
                }
            }
            i = i + 1;
        }
        return NULL;
    }
    static popupVcall(popup, vtableByteOffset, retType, argTypes) {
        var fn;
        fn = new NativeFunction(popup.readPointer().add(vtableByteOffset).readPointer(), retType, ["pointer"]);
        return fn(popup);
    }
    static showFloaterTextAtDefaultPosition(floaterText, RGBAColor, stop) {
        if (floaterText === undefined) {
            floaterText = "";
        }
        if (RGBAColor === undefined) {
            RGBAColor = -1;
        }
        if (stop === undefined) {
            stop = 0;
        }
        if (GUI.getInstance().isNull()) {
            return;
        }
        return StringObject.with(floaterText, function (floaterTextStringObject) {
            return GUI_showFloaterTextAtDefaultPosition(GUI.getInstance(), floaterTextStringObject, RGBAColor, stop);
        });
    }
    static removeAllPopups() {
        var popups, popup;
        popups = GUI.popupStorage;
        GUI.popupStorage = [];
        for (const popup of popups) {
            GUI.disposeTrackedPopup(popup);
        }
        return;
    }
    static disposeTrackedPopup(popup) {
        if (typeof popup.dispose === "function") {
            popup.dispose();
            return;
        }
        popup.onDestructed();
        return;
    }
    static update(deltaTime) {
        GUI.popupStorage.forEach((popup, idx) => {
            if (!GUI.popupStorage.includes(popup)) {
                return;
            }
            if (!popup.isDisposed) {
                if (popup.instance.isNull()) {
                    GUI.removePopup(popup);
                    return;
                }
            }
            return;
        });
        ++GUI.sinceLastFlush;
        if (GUI.sinceLastFlush >= GUI.FLUSH_TICKS) {
            GUI.floaters.forEach(function (fl) {
                return GUI.showFloaterTextAtDefaultPosition(fl);
            });
            GUI.floaters = [];
            GUI.sinceLastFlush = 0;
            return;
        }
    }
    static pushFloaterTextToQueue(text) {
        GUI.floaters.push(text);
        return;
    }
    static removePopup(popup) {
        GUI.popupStorage = GUI.popupStorage.filter(function (e) {
            return !e.instance.equals(popup.instance);
        });
        return;
    }
    static removePopupByConstructor(ctor) {
        GUI.popupStorage = GUI.popupStorage.filter(function (p) {
            return !(p instanceof ctor);
        });
        return;
    }
    static getPopupByConstructpr(ctor) {
        return GUI.popupStorage.find(function (p) {
            return p instanceof ctor;
        });
    }
    static registerUpdateable(element) {
        GUI.popupStorage.push(element);
        return;
    }
    static unregisterUpdateable(element) {
        GUI.popupStorage = GUI.popupStorage.filter(function (e) {
            return !e.instance.equals(element.instance);
        });
        return;
    }
    static addDataGained(anchorButton, dataGainedType, amount, hideFlag, logicData, offsetX, offsetY, offsetZ) {
        var instance;
        instance = GUI.getInstance();
        if (instance.isNull()) {
            return;
        }
        return;
    }
    static showPopup(popup, center, allowMultipleInstances, blur) {
        var popupPtr;
        if (GUI.getInstance().isNull()) {
            return;
        }
        if (!(popup instanceof NativePointer)) {
            GUI.popupStorage.push(popup);
        }
        popupPtr = Libc.malloc(Process.pointerSize);
        if (popup.instance == null) {
        } else {
            popup = popup.instance;
        }
        popupPtr.writePointer(popup);
        return GUI_showPopup(GUI.getInstance(), popupPtr, +center, +allowMultipleInstances, +blur);
    }
}
GUI.FLUSH_TICKS = 10;
GUI.popupStorage = [];
GUI.floaters = [];
GUI.callbacks = [];
GUI.sinceLastFlush = 0;
