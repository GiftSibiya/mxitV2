//-- Imports
import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function ContactTile({
  name,
  color,
  img,
}: {
  name: string;
  color: string;
  img: string;
}) {
  return (
    <View style={styles.container}>
      <View style={styles.timeContainer}>
        <View
          style={{
            borderRadius: 50,
            height: 20,
            width: 20,
            backgroundColor: `${color}`,
          }}
        ></View>
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.nameText}>{name}</Text>
      </View>
      <View style={styles.profileContainer}>
        <Image source={img} style={styles.profilePic} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    margin: 5,
    borderRadius: 10,
    height: 70,
  },

  timeContainer: {
    display: "flex",
    alignItems: "center",
  },

  profileContainer: {
    height: 60,
    width: 60,
    borderRadius: 10,
    borderWidth: 1,
    padding: 1,
    overflow: "hidden",
  },

  profilePic: {
    height: "100%",
    width: "100%",
  },

  nameContainer: {
    width: "60%",
    marginLeft: 30,
  },

  nameText: {
    fontSize: 20,
    fontWeight: "200",
    color: "white",
  },
});
