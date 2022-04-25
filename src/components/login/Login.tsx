import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { AuthNavigationProps } from "navigation/type";

const styles = StyleSheet.create({
  button: {
    padding: 4,
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: "red",
  },
  buttonTitle: {
    fontSize: 16,
    textAlign: "center",
  },
});

const Login: React.FC<AuthNavigationProps<"Login">> = ({ navigation }) => {
  const oPressLogin = () => {
    console.log("navigation");
  };

  return (
    <View style={{ flex: 1 }}>
      <Text>Login</Text>
      <TouchableOpacity
        onPress={oPressLogin}
        style={styles.button}
        activeOpacity={1}>
        <Text style={styles.buttonTitle}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
