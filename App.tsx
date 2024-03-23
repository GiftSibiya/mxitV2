// Imports
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

// Files
import { Login } from "./src/screens/auth/Login";
import { Register } from "./src/screens/auth/Register";
import { HomePage } from "./src/screens/main/HomePage";
import Contacts from "./src/screens/main/Contacts";
import Search from "./src/screens/main/Search";
import Apps from "./src/screens/main/Apps";

// Images
import MxitIcon from "./assets/icons/header/mxit-03.png";
import ContactIcon from "./assets/icons/header/contacts.png";
import AppsIcon from "./assets/icons/header/apps_games.png";
import SearchIcon from "./assets/icons/header/search.png";

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

const AuthStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Register" component={Register} />
  </Stack.Navigator>
);

const MxitIconComp = () => (
  <Image
    source={MxitIcon}
    style={{ width: 50, height: 50, marginTop: -15, marginLeft: -15 }}
  />
);
const ContactIconComp = () => (
  <Image
    source={ContactIcon}
    style={{ width: 50, height: 50, marginTop: -15, marginLeft: -15 }}
  />
);
const AppsIconComp = () => (
  <Image
    source={AppsIcon}
    style={{ width: 50, height: 50, marginTop: -15, marginLeft: -15 }}
  />
);
const SearchIconComp = () => (
  <Image
    source={SearchIcon}
    style={{ width: 30, height: 30, marginTop: -5, marginLeft: -5 }}
  />
);

const MainStack = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarStyle: styles.tabBar,
      tabBarIndicatorStyle: { backgroundColor: "white" },
      tabBarLabelStyle: { color: "white" },
    }}
  >
    <Tab.Screen
      name="Home"
      component={HomePage}
      options={{ tabBarIcon: MxitIconComp }}
    />
    <Tab.Screen
      name="Contacts"
      component={Contacts}
      options={{ tabBarIcon: ContactIconComp }}
    />
    <Tab.Screen
      name="Search"
      component={Search}
      options={{ tabBarIcon: AppsIconComp }}
    />
    <Tab.Screen
      name="Apps"
      component={Apps}
      options={{ tabBarIcon: SearchIconComp }}
    />
  </Tab.Navigator>
);

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="AuthStack"
            component={AuthStack}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MainStack"
            component={MainStack}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    paddingTop: 30,
    backgroundColor: "rgb(20, 20, 20)",
  },
});
