import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export const useLoadFonts = () => {
  const [fontsLoaded, fontError] = useFonts({
    "PingFang-Bold": require("../assets/fonts/PingFang-Bold.ttf"),
    "PingFang-Light": require("../assets/fonts/PingFang-Light.ttf"),
    "PingFang-ExtraLight": require("../assets/fonts/PingFang-ExtraLight.ttf"),
    "PingFang-Regular": require("../assets/fonts/PingFang-Regular.ttf"),
    "PingFang-Heavy": require("../assets/fonts/PingFang-Heavy.ttf"),
    "PingFang-Medium": require("../assets/fonts/PingFang-Medium.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return onLayoutRootView;
};
