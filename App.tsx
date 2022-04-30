/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "navigation/Navigation";
import React from "react";
import { StatusBar, useColorScheme } from "react-native";
import { Provider } from "react-redux";
import { store } from "./src/store";

const App = () => {
  const isDarkMode = useColorScheme() === "dark";

  return (
    <NavigationContainer>
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    </NavigationContainer>
  );
};

export default App;
