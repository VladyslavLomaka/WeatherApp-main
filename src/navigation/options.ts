import { NativeStackNavigationOptions } from "@react-navigation/native-stack";

export const screenOptions: NativeStackNavigationOptions = {
  headerShown: false,
  navigationBarColor: "white",
  fullScreenGestureEnabled: true,
  animation: "none",
};

export const screenOptionsWithAnimation: NativeStackNavigationOptions = {
  headerShown: false,
  animation: "simple_push",
  navigationBarColor: "white",
};
