import React from "react";
import { KeyboardAvoidingView, SafeAreaView, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export const Login = ({ navigation }: { navigation: any }) => {
  // Functions
  const handleRegisterPage = () => {
    navigation.navigate("Register");
  };

  const handleLogin = () => {
    navigation.navigate("Home");
  };

  //-- Main Return
  return (
    <KeyboardAvoidingView>
      <SafeAreaView>
        <View>
          <Text>This is the Login</Text>
          <TouchableOpacity onPress={handleLogin}>
            <Text>login</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleRegisterPage}>
            <Text>Register</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};
