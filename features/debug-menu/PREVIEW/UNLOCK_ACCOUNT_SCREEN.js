var UNLOCK_ACCOUNT_SCREEN_BUTTON = {
    label: "UNLOCK_ACCOUNT_SCREEN",
    category: DebugMenuCategory.EDebugCategory.PREVIEW,
    mode: "home"
};

var UnlockAccountMenu_ctor = new NativeFunction(Libg.Libg.offset(13671608, 0), "void", ["pointer"]);

class UnlockAccountMenu extends PopupBase.PopupBase {
    constructor() {
        var popupInstance;
        popupInstance = Libc.Libc.calloc(UnlockAccountMenu.allocationSize, 1);
        UnlockAccountMenu_ctor(popupInstance);
        super(popupInstance);
    }

    show() {
        var popup;
        popup = new UnlockAccountMenu();
        return;
    }
}
UnlockAccountMenu.allocationSize = 472;

function UNLOCK_ACCOUNT_SCREEN_callback() {
    UnlockAccountMenu.show();
}
