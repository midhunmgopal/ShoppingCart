import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthNavigator from "./AuthNavigator";
import HomeNavigator from "./HomeNavigator";

const RootStack = createNativeStackNavigator();

export const authNavigtion = () => {
  const { Navigator, Screen } = RootStack;
  return (
    <Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
      <Screen name="Login" component={AuthNavigator} />
    </Navigator>
  );
};

export const homeNavigation = () => {
  const { Navigator, Screen } = RootStack;
  return (
    <Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={HomeNavigator} />
    </Navigator>
  );
};
export const RootNavigator = () => {
  authNavigtion();
};

export default RootNavigator;
