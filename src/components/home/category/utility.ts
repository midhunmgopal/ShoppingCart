import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");
export const getCategorySize = (size: number, padding: number = 4) => {
  const extraPadding = (size + 1) * padding;
  const _size = (width - extraPadding) / size;
  return { width: _size, height: _size };
};
