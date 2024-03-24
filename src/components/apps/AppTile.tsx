import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const AppTile = ({
  name,
  img,
  desc,
}: {
  name: string;
  img: string;
  desc: string;
}) => {
  return (
    <View style={styles.TileContainer}>
      <View style={styles.appPic}>
        <Image source={img} style={styles.appImg}></Image>
      </View>
      <View style={styles.appNameContainer}>
        <Text style={styles.appName}>{name}</Text>
        <Text style={styles.appDesc}>{desc}</Text>
      </View>
    </View>
  );
};

export default AppTile;

const styles = StyleSheet.create({
  TileContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    height: 100,
    margin: 10,
    borderRadius: 10,
    backgroundColor: "rgb(60, 60, 60)",
  },
  TileText: {
    textAlign: "center",
  },
  appPic: {
    height: 100,
    width: 100,
    borderRadius: 15,
  },
  appNameContainer: {
    width: "60%",
    marginLeft: 30,
  },
  appName: {
    fontSize: 22,
    color: "white",
  },
  appDesc: {
    fontSize: 15,
    color: "white",
  },
  appImg: {
    width: "100%",
    height: "100%",
  },
});
