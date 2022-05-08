import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "components/home/Home";
import ItemsList from "components/home/itemsList/ItemsList";

const HomeStack = createNativeStackNavigator();

const HomeNavigation = () => {
  const { Navigator, Screen } = HomeStack;
  return (
    <Navigator initialRouteName="Home">
      <Screen name="Home" component={Home} />
      <Screen name="ItemList" component={ItemsList} />
    </Navigator>
  );
};
export default HomeNavigation;
