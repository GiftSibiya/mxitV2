import React from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export const Register = ({ navigation }: { navigation: any }) => {
  const handleLoginPage = () => {
    navigation.navigate("Login");
  };
  return (
    <View>
      <Text>Register</Text>
      <TouchableOpacity
        onPress={() => {
          handleLoginPage();
        }}
      >
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
};
