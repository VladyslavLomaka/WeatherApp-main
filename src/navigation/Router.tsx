import {
  NavigationContainer,
  createNavigationContainerRef,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Coordinates } from "../api/getWeatherByCoordinates";
import { GetStarted } from "../screens/GetStarted";
import { SearchPage } from "../screens/SearchPage";
import { WeatherPage } from "../screens/WeatherPage";
import { screenOptionsWithAnimation } from "./options";

export type RootRouterParamList = {
  GetStarted: undefined;
  SearchPage: undefined;
  WeatherPage: { coordinates: Coordinates };
};

export const navigationRef =
  createNavigationContainerRef<RootRouterParamList>();

const RootRouterStack = createNativeStackNavigator<RootRouterParamList>();

export const Router = () => {
  return (
    <NavigationContainer>
      <RootRouterStack.Navigator screenOptions={screenOptionsWithAnimation}>
        <RootRouterStack.Screen name="GetStarted" component={GetStarted} />
        <RootRouterStack.Screen name="SearchPage" component={SearchPage} />
        <RootRouterStack.Screen name="WeatherPage" component={WeatherPage} />
      </RootRouterStack.Navigator>
    </NavigationContainer>
  );
};
