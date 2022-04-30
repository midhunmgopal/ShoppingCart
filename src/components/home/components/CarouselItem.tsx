import { View, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    width,
    height: 200,
    backgroundColor: "red",
  },
});

const CarouselItem = () => {
  return (
    <View style={styles.container}>
      <Text>CarouselItem</Text>
    </View>
  );
};

export default CarouselItem;
