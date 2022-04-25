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
import { StatusBar, StyleSheet, useColorScheme, View } from "react-native";

const App = () => {
  const isDarkMode = useColorScheme() === "dark";

  return (
    <NavigationContainer>
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
      {/* <View style={{ flex: 1, backgroundColor: "green" }}>
      </View> */}
      <RootNavigator />
    </NavigationContainer>
  );
};

export default App;
