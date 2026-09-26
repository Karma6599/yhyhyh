// =============================================================
// FEATURE: Alternate App Icons
// config keys: -
// Alternate launcher icon manager.
// merged webpack modules: 9240 AlternateIconManager
// =============================================================

// --------------------- MODULE 9240 — AlternateIconManager ---------------------

// ============================================================ //
// webpack module 9240  —  AlternateIconManager
// exports: AlternateIconManager
// ============================================================ //

__webpack_modules__[9240] = function AlternateIconManager_factory(__unused_webpack_module, exports) {
    var AlternateIconManager, <class_fields_init>, AlternateIconManager;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.AlternateIconManager = undefined;
        <class_fields_init> = undefined;
        AlternateIconManager;
        class AlternateIconManager {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0xc11ea (open) */
}
            sharedApplication () {
    var UIApplication, app;
        UIApplication = ((ObjC).classes).UIApplication;
        if ((!UIApplication)) {
            return null;
        } /* if 0xc0ee2 */
        app = (UIApplication).sharedApplication();
        if (!(!app)) {
            if ((app).isNull()) {
                return null;
            } /* if 0xc0f05 */
        } /* if 0xc0f01 */
        return app;
}
            isSupported () {
    var app;
        app = (this).sharedApplication();
        if ((!app)) {
            return false;
        } /* if 0xc0f43 */
        return Boolean((app).supportsAlternateIcons());
}
            getCurrent () {
    var app, name;
        app = (this).sharedApplication();
        if ((!app)) {
            return null;
        } /* if 0xc0f95 */
        name = (app).alternateIconName();
        if (!(!name)) {
            if ((name).isNull()) {
                return null;
            } /* if 0xc0fb8 */
        } /* if 0xc0fb4 */
        return (name).toString();
}
            setIcon (iconName) {
    var onComplete, iconName, onComplete, app;
        app = this;
        onComplete = iconName;
        if (((onComplete) === undefined)) {
            iconName = onComplete = onComplete = iconName = <underflow>;
        } /* if 0xc1018 */
        onComplete = (app).sharedApplication();
        if ((!onComplete)) {
            return;
        } /* if 0xc1034 */
        return;
}
        }
        AlternateIconManager = AlternateIconManager = AlternateIconManager;
        exports.AlternateIconManager = AlternateIconManager;
        return;
};

