import { View, Text } from "react-native";
import React from "react";
import Carousel from "./components/Carousel";

/**
 * a carousel view
 * an offer scrolling section.
 * main categories
 */

const Home = () => {
  return (
    <View>
      <Carousel />
      <Text>Home</Text>
    </View>
  );
};

export default Home;
