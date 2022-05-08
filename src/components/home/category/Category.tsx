import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";
import CategoryItemCell from "./CategoryItemCell";
import { CategoryItem } from "./types";

const categtory: CategoryItem[] = [
  {
    id: 1,
    title: "Footwear",
    icon: "shoe-prints",
  },
  {
    id: 2,
    title: "Kitchenwears",
    icon: "amazon",
  },
  {
    id: 3,
    title: "Sports",
    icon: "baseball-ball",
  },
  {
    id: 4,
    title: "Jwellery",
    icon: "amilia",
  },
  {
    id: 5,
    title: "Electronics",
    icon: "tv",
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const keyExtractor = (_: unknown, index: number) => `${index}`;
const renderItem = ({ item }: { item: CategoryItem }) => (
  <CategoryItemCell data={item} />
);

const Category = () => {
  return (
    <View style={styles.container}>
      <FlatList
        style={{ flex: 1 }}
        data={categtory}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        numColumns={3}
      />
    </View>
  );
};

export default Category;
