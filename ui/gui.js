// =============================================================
// GUI MANAGER
// merged webpack modules: 4934 GUI
// =============================================================

// --------------------- MODULE 4934 — GUI ---------------------

// ============================================================ //
// webpack module 4934  —  GUI
// exports: GUI
// deps: 1588 (LogicMemory), 1978 (Libc), 6193 (GenericPopup), 7535 (StringObject), 8581 (PopupBase), 9878 (Libg)
// ============================================================ //

__webpack_modules__[4934] = function GUI_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, StringObject, PopupBase, Libc, LogicMemory, GenericPopup, GUI_instanceAddr, GUI_closeAllPopups, GUI_showFloaterTextAtDefaultPosition, GUI_showPopup, GUI_addDataGained, popupArrayPtrOffset, popupCountOffset, popupIsHiddenVtableByteOffset, popupIsDestroyingVtableByteOffset, popupGetTypeVtableByteOffset, popupCloseVtableByteOffset, GUI, <class_fields_init>, GUI;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.GUI = undefined;
        Libg = __webpack_require__(9878);
        StringObject = __webpack_require__(7535);
        PopupBase = __webpack_require__(8581);
        Libc = __webpack_require__(1978);
        LogicMemory = __webpack_require__(1588);
        GenericPopup = __webpack_require__(6193);
        GUI_instanceAddr = ((Libg).Libg).offset(19935152, 0);
        GUI_closeAllPopups = new NativeFunction(((Libg).Libg).offset(8911124, 0), "void", ["pointer"]);
        GUI_showFloaterTextAtDefaultPosition = new NativeFunction(((Libg).Libg).offset(8904776, 0), "void", ["pointer", "pointer", "int", "float"]);
        GUI_showPopup = new NativeFunction(((Libg).Libg).offset(8908500, 0), "void", ["pointer", "pointer", "int", "int", "int"]);
        GUI_addDataGained = new NativeFunction(((Libg).Libg).offset(8912184, 0), "pointer", ["pointer", "pointer", "uint", "int", "uchar", "pointer", "pointer", "float", "float", "float"]);
        popupArrayPtrOffset = ((LogicMemory).LogicMemory).offset(216);
        popupCountOffset = ((LogicMemory).LogicMemory).offset(228);
        popupIsHiddenVtableByteOffset = 472;
        popupIsDestroyingVtableByteOffset = 480;
        popupGetTypeVtableByteOffset = 440;
        popupCloseVtableByteOffset = 464;
        <class_fields_init> = undefined;
        GUI;
        class GUI {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x3f46a (open) */
}
            getInstance () {
        return (GUI_instanceAddr).readPointer();
}
            patch () {
    var destructor;
        /* jump -> 0x3eb33 */
        destructor = /*iter*/ [(GenericPopup).GenericPopup_dtor, (PopupBase).PopupBase_dtor];
        (Interceptor).attach(destructor, { onEnter (args) {
        return;
} });
        } while (![(GenericPopup).GenericPopup_dtor, (PopupBase).PopupBase_dtor]);
        destructor = <underflow>;
        return;
}
            onPopupDestroyed (instance) {
    var destroyed, popup;
        if (((this).popupStorage.length === 0)) {
            return;
        } /* if 0x3eba0 */
        destroyed = ((this).popupStorage).filter(function (popup) {
        return ((popup).instance).equals(instance);
});
        this.popupStorage = ((this).popupStorage).filter(function (popup) {
        return (!((popup).instance).equals(instance));
});
        /* jump -> 0x3ebde */
        popup = /*iter*/ destroyed;
        (this).disposeTrackedPopup(popup);
        } while (!destroyed);
        popup = this;
        return;
}
            closeAllPopups () {
        return GUI_closeAllPopups((this).getInstance());
}
            closePopup (type) {
    var popup;
        popup = (this).getPopupByType(type);
        if ((popup).isNull()) {
            return;
        } /* if 0x3ecac */
        return;
}
            getPopupByType (type) {
    var gui, count, arrayBase, i, popup, popupType;
        gui = (this).getInstance();
        if ((gui).isNull()) {
            return NULL;
        } /* if 0x3ed40 */
        count = ((gui).add(popupCountOffset)).readU32();
        if ((count < 1)) {
            return NULL;
        } /* if 0x3ed64 */
        arrayBase = ((gui).add(popupArrayPtrOffset)).readPointer();
        i = 0;
        while ((i < count)) {
            popup = ((arrayBase).add((i * (Process).pointerSize))).readPointer();
            if (!(this).popupVcall(popup, popupIsHiddenVtableByteOffset, "bool", [])) {
                if (!(this).popupVcall(popup, popupIsDestroyingVtableByteOffset, "bool", [])) {
                    popupType = (this).popupVcall(popup, popupGetTypeVtableByteOffset, "uint32", []);
                    if ((popupType === type)) {
                        return popup;
                    } /* if 0x3ee0e */
                } /* if 0x3ee0e */
            } /* if 0x3ee0e */
            i = ((i) + 1);
            (i++);
        } /* while 0x3ee1c */
        return NULL;
}
            popupVcall (popup, vtableByteOffset, retType, argTypes) {
    var args, fnPtr, fn;
        args = ...<underflow>;
        args = (((popup).readPointer()).add(vtableByteOffset)).readPointer();
        fnPtr = new NativeFunction(retType, ["pointer"], 1);
        return 1.apply(undefined, []);
}
            showFloaterTextAtDefaultPosition () {
    var floaterText, RGBAColor, stop, floaterText, RGBAColor, stop;
        floaterText = this;
        if (((floaterText) === undefined)) {
            floaterText = floaterText = "";
        } /* if 0x3ef0e */
        if (((RGBAColor) === undefined)) {
            RGBAColor = RGBAColor = -1;
        } /* if 0x3ef17 */
        if (((stop) === undefined)) {
            stop = stop = 0;
        } /* if 0x3ef20 */
        if (((floaterText).getInstance()).isNull()) {
            return;
        } /* if 0x3ef35 */
        return;
}
            removeAllPopups () {
    var popups, popup;
        popups = (this).popupStorage;
        this.popupStorage = [];
        /* jump -> 0x3efcf */
        popup = /*iter*/ popups;
        (this).disposeTrackedPopup(popup);
        } while (!popups);
        popup = this;
        return;
}
            disposeTrackedPopup (popup) {
        /* typeof_is_function  */
        if ((popup).dispose) {
            (popup).dispose();
            return;
        } /* if 0x3f005 */
        (popup).onDestructed();
        return;
}
            update (deltaTime) {
        ((this).popupStorage).forEach(function (popup, idx) {
        if ((!((this).popupStorage).includes(popup))) {
            return;
        } /* if 0x3f0d1 */
        if (!(popup).isDisposed) {
            if (((popup).instance).isNull()) {
                (GUI).removePopup(popup);
                return;
            } /* if 0x3f103 */
        } /* if 0x3f0e9 */
        return;
});
        GUI.sinceLastFlush = (++(GUI).sinceLastFlush);
        if (((GUI).sinceLastFlush >= (GUI).FLUSH_TICKS)) {
            ((GUI).floaters).forEach(function (fl) {
        return (GUI).showFloaterTextAtDefaultPosition(fl);
});
            GUI.floaters = [];
            GUI.sinceLastFlush = 0;
            return;
        } /* if 0x3f08d (open) */
}
            pushFloaterTextToQueue (text) {
        return;
}
            removePopup (popup) {
        this.popupStorage = ((this).popupStorage).filter(function (e) {
        return (!((e).instance).equals((popup).instance));
});
        return;
}
            removePopupByConstructor (ctor) {
        this.popupStorage = ((this).popupStorage).filter(function (p) {
        return (!(p instanceof ctor));
});
        return;
}
            getPopupByConstructpr (ctor) {
        return ((this).popupStorage).find(function (p) {
        return (p instanceof ctor);
});
}
            registerUpdateable (element) {
        return;
}
            unregisterUpdateable (element) {
        this.popupStorage = ((this).popupStorage).filter(function (e) {
        return (!((e).instance).equals((element).instance));
});
        return;
}
            addDataGained (anchorButton, dataGainedType, amount, hideFlag, logicData, offsetX, offsetY, offsetZ) {
    var instance;
        instance = (this).getInstance();
        if ((instance).isNull()) {
            return;
        } /* if 0x3f364 */
        return;
}
            showPopup (popup, center, allowMultipleInstances, blur) {
    var popupPtr;
        if (((this).getInstance()).isNull()) {
            return;
        } /* if 0x3f3d7 */
        if ((!(popup instanceof NativePointer))) {
            ((this).popupStorage).push(popup);
        } /* if 0x3f3f1 */
        popupPtr = ((Libc).Libc).malloc((Process).pointerSize);
        if ((((popup).instance) == null)) {
        } /* if 0x3f420 */
        (popupPtr).writePointer(popup);
        return GUI_showPopup((this).getInstance(), popupPtr, (+center), (+allowMultipleInstances), (+blur));
}
        }
        GUI = GUI_showFloaterTextAtDefaultPosition = GUI;
        exports.GUI = GUI;
        GUI.FLUSH_TICKS = 10;
        GUI.popupStorage = [];
        GUI.floaters = [];
        GUI.callbacks = [];
        GUI.sinceLastFlush = 0;
        return;
};

