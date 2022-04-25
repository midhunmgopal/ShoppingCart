import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type AuthPramsList = {
  Login: undefined;
};

export type AuthNavigationProps<T extends keyof AuthPramsList> = {
  navigation: NativeStackNavigationProp<AuthPramsList, T>;
  route: RouteProp<AuthPramsList, T>;
};
