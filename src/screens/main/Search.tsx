// Imports
import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";

const Search = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.searchBar} placeholder="Search Here"></TextInput>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(40, 40, 40)",
  },
  searchBar: {
    width: "95%",
    height: 50,
    backgroundColor: "white",
    borderRadius: 10,
    margin: 10,
    padding: 10,
    justifyContent: "center",
  },
});
