//-- Imports
import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";

// Components
import AppTile from "../../components/apps/AppTile";

// Images
import infoPic from "../../../assets/icons/apps/icons8-info-40.png";
import kimPic from "../../../assets/icons/apps/icons8-woman-96.png";
import swords from "../../../assets/icons/apps/icons8-swords-98.png";
import chess from "../../../assets/icons/apps/icons8-chess-com-96.png";
import trophy from "../../../assets/icons/apps/icons8-trophy-96.png";
import chat from "../../../assets/icons/apps/icons8-chat-96.png";
const Apps = () => {
  return (
    <View style={styles.appsContainer}>
      <View style={styles.appHeaderTop}>
        <Text style={styles.appHeaderText}>General Apps</Text>
      </View>
      <ScrollView style={styles.appsHeader}>
        <AppTile name="info" img={infoPic} desc="Ask Something Here" />
        <AppTile
          name="Ask Kim"
          img={kimPic}
          desc="Have a coversation with Kim"
        />
        <AppTile name="Battle Trivia" img={swords} desc="Play Trivia" />
        <AppTile name="Chess" img={chess} desc="Play Chess" />
        <AppTile
          name="competitions"
          img={trophy}
          desc="Informations on Competitions"
        />
        <AppTile
          name="Random Chat"
          img={chat}
          desc="Have a conversation with a stranger"
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  appsContainer: {
    height: "100%",
    backgroundColor: "rgb(40, 40, 40)",
  },
  appHeaderTop: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    height: 50,
    borderRadius: 10,
    backgroundColor: "white",
  },
  appsHeader: {
    height: 800,
    backgroundColor: "rgb(40, 40, 40)",
  },
  appHeaderText: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
    color: "black",
  },
});

export default Apps;
