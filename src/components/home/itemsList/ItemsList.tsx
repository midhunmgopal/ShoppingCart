import { View, Text, FlatList } from "react-native";
import React from "react";
import { HomeNavigationProps } from "navigation/type";

const keyExtractor = (_: unknown, index: number) => `${index}`;
const renderItem = ({ item }: { item: any }) => null;

const ItemsList: React.FC<HomeNavigationProps<"ItemList">> = () => {
  return (
    <View>
      <Text>ItemsList</Text>
      <FlatList
        style={{ flex: 1 }}
        data={[1, 2, 3]}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
};

export default ItemsList;
