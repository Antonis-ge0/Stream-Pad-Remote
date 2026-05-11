import { BackHandler, NativeModules, Platform } from "react-native";

type AppQuitNativeModule = {
  quit: () => Promise<void>;
};

const nativeModule = NativeModules.AppQuit as AppQuitNativeModule | undefined;

export async function quitApp() {
  if (Platform.OS === "android" && nativeModule) {
    await nativeModule.quit();
    return;
  }

  BackHandler.exitApp();
}
