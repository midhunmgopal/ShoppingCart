import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { CATEGORY_GRID_SIZE, CELL_PADDING } from "./constants";
import { getCategorySize } from "./utility";
import Icon from "react-native-vector-icons/FontAwesome5";
import { CategoryItem } from "./types";
import { useNavigation } from "@react-navigation/native";
import { HomeNavigationType } from "navigation/type";

export interface CategoryItemProp {
  size?: number;
  data: CategoryItem;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightblue",
    marginLeft: CELL_PADDING,
    marginBottom: CELL_PADDING,
    alignItems: "center",
    justifyContent: "center",
  },
});

const CategoryItemCell = (props: CategoryItemProp) => {
  const { size = CATEGORY_GRID_SIZE } = props;
  const { icon, title, id } = props.data;
  const navigation = useNavigation<HomeNavigationType>();

  const onPressItem = () => {
    navigation.navigate("ItemList");
  };

  return (
    <TouchableOpacity onPress={onPressItem}>
      <View style={[styles.container, getCategorySize(size)]}>
        <Icon name={icon} size={30} color="#900" />
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryItemCell;
