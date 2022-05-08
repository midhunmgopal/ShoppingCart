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
const cards = [
  { backgroundColor: "powderblue" },
  { backgroundColor: "green" },
  { backgroundColor: "yellow" },
];

export interface CarouselItemProp {
  index: number;
}

const getCardColor = (index: number) => {
  return cards[index];
};

const CarouselItem = (props: CarouselItemProp) => {
  const { index } = props;
  return (
    <View style={[styles.container, getCardColor(index)]}>
      <Text>CarouselItem</Text>
    </View>
  );
};

export default CarouselItem;
