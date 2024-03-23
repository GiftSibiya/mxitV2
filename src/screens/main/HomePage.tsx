//-- Imports
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

// Files
import FeatureTile from "../../components/HomeScreen/FeatureTile";

// Images
import cartIcon from "../../../assets/icons/features/icons8-cart-94.png";
import settingIcon from "../../../assets/icons/features/icons8-tools-94.png";
import chatIcon from "../../../assets/icons/features/icons8-comments-94.png";
import walletIcon from "../../../assets/icons/features/icons8-wallet-94.png";
import GalleryIcon from "../../../assets/icons/features/icons8-paint-palette-94.png";

export const HomePage = () => {
  return (
    <View style={styles.Container}>
      {/* Header Section */}
      <View style={styles.Header}>
        <View style={styles.profilePic}></View>
        <View style={styles.profileInfo}>
          <Text>Name Here</Text>
          <Text>Mxit Moola</Text>
          <Text>Mood: </Text>
          <Button title="Edit profile"></Button>
        </View>
      </View>
      {/* -- */}
      <View style={styles.features}>
        <FeatureTile title="Tradepost" icon={cartIcon} />
        <FeatureTile title="Chat Zones" icon={chatIcon} />
        <FeatureTile title="Wallet" icon={walletIcon} />
        <FeatureTile title="Gallery" icon={GalleryIcon} />
        <FeatureTile title="Games" icon={cartIcon} />
        <FeatureTile title="Settings" icon={settingIcon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    backgroundColor: "rgb(40, 40, 40)",
  },
  Header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
    height: 120,
    borderRadius: 30,
    width: "95%",
    backgroundColor: "rgb(60, 60, 60)",
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 20,
    marginLeft: 10,
    backgroundColor: "rgb(40, 40, 40)",
  },
  profileInfo: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: 220,
    height: 100,
    marginRight: 10,
    backgroundColor: "rgb(40, 40, 40)",
  },
  features: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    width: "95%",
    height: 350,
    borderRadius: 30,
    marginTop: 10,
  },

  featureTile: {
    width: 170,
    height: 100,
    borderRadius: 20,
    margin: 6,
    backgroundColor: "white",
  },
});
