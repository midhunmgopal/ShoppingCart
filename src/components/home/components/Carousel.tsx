import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";
import CarouselItem from "./CarouselItem";

const keyExtractor = (_: unknown, index: number) => `${index}`;
const renderItem = ({ item, index }: { item: any; index: number }) => (
  <CarouselItem index={index} />
);

const Carousel = () => {
  return (
    <View>
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
