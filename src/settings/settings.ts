export class DiscordRPCSettings {
  // showVaultName: boolean = true;
  // showFolderName: boolean = true;
  showCurrentFileName: boolean = true;
  showConnectionTimer: boolean = false;
  showPopups: boolean = true;
  customVaultName: string = "";
  showFileExtension: boolean = false;
  useLoadedTime: boolean = false;
  connectOnStart: boolean = true;
  autoHideStatusBar: boolean = true;
  privacyMode: boolean = false;
  // useCustomString: boolean = false;
  customString: string = "Vault: %vault% %folder%";
}

export enum PluginState {
  connected,
  connecting,
  disconnected,
}
