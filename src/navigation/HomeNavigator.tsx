import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "components/home/Home";

const HomeStack = createNativeStackNavigator();

const HomeNavigation = () => {
  const { Navigator, Screen } = HomeStack;
  return (
    <Navigator initialRouteName="Home">
      <Screen name="Home" component={Home} />
    </Navigator>
  );
};
export default HomeNavigation;
