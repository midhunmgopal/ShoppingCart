import { View, Text, StyleSheet } from "react-native";
import React from "react";

export type SpaceSize = "small" | "medium" | "large";
export interface SpaceProps {
  size?: SpaceSize;
}

const styles = StyleSheet.create({
  small: {
    height: 4,
  },
  medium: {
    height: 8,
  },
  large: {
    height: 10,
  },
});

const Spacer = (props: SpaceProps) => {
  const { size = "small" } = props;
  return <View style={styles[size]} />;
};

export default Spacer;
