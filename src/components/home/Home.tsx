import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Carousel from "./components/Carousel";
import Category from "./category/Category";
import Spacer from "common/Spacer";
import { HomeNavigationProps } from "navigation/type";

/**
 * a carousel view
 * an offer scrolling section.
 * main categories
 */

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const Home: React.FC<HomeNavigationProps<"Home">> = () => {
  return (
    <View style={styles.container}>
      <Carousel />
      <Spacer />
      <Category />
    </View>
  );
};

export default Home;
