import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthNavigator from "./AuthNavigator";
import HomeNavigator from "./HomeNavigator";
import { useSelector } from "react-redux";
import { RootState } from "store";

const RootStack = createNativeStackNavigator();

export const RootNavigator = () => {
  const isLoggedIn = useSelector((state: RootState) => state.login.isLoggedIn);
  if (isLoggedIn) {
    return HomeNavigator();
  }
  return AuthNavigator();
};

export default RootNavigator;
