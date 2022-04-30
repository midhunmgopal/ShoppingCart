import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";
import CarouselItem from "./CarouselItem";

const keyExtractor = (_: unknown, index: number) => `${index}`;
const renderItem = ({ item }) => <CarouselItem />;

const Carousel = () => {
  return (
    <View>
      <Text>Carousel</Text>
      <FlatList
        data={[1, 2, 3, 4]}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Carousel;
