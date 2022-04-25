import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "components/login/Login";

const authStack = createNativeStackNavigator();

const AuthNavigation = () => {
  const { Navigator, Screen } = authStack;
  return (
    <Navigator initialRouteName="Login">
      <Screen name="Login" component={Login} />
    </Navigator>
  );
};
export default AuthNavigation;
