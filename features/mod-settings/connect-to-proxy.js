class BSDProxy {
    static enable(self, index) {
        if (index !== 2) {
            return;
        }
        Config.Config.config.BSDProxy = true;
        FileManager.FileManager.updateConfigFile();
    }
}

BSDProxy.showProxyDialog = true;
BSDProxy.proxyNativeDialogListener = new INativeDialogListener.INativeDialogListener(BSDProxy.enable);
