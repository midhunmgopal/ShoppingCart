import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type AuthPramsList = {
  Login: undefined;
};

export type AuthNavigationProps<T extends keyof AuthPramsList> = {
  navigation: NativeStackNavigationProp<AuthPramsList, T>;
  route: RouteProp<AuthPramsList, T>;
};

export type HomePramsList = {
  Home: undefined;
  ItemList: undefined;
};

export type HomeNavigationType = NativeStackNavigationProp<HomePramsList>

export type HomeNavigationProps<T extends keyof HomePramsList> = {
  navigation: NativeStackNavigationProp<HomePramsList, T>;
  route: RouteProp<HomePramsList, T>;
};
