// Imports
import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function FeatureTile({
  title,
  icon,
}: {
  title: string;
  icon: string;
}) {
  return (
    <View style={styles.FeatureTilecontainer}>
      <Image source={icon} style={styles.featureIcon} />
      <Text style={styles.titleText}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  FeatureTilecontainer: {
    display: "flex",
    alignItems: "center",
    width: 170,
    height: 100,
    borderRadius: 20,
    margin: 6,
    backgroundColor: "rgb(60, 60, 60)",
  },
  featureIcon: {
    width: 70,
    height: 70,
  },
  titleText: {
    fontSize: 18,
    color: "white",
    fontWeight: "200",
  },
});
