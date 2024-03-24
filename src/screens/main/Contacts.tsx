// Imports
import { Image, StyleSheet, Text, View, ScrollView } from "react-native";
import React, { Component } from "react";
import addIcon from "../../../assets/icons/contacts/icons8-add-94.png";
import downArrow from "../../../assets/icons/contacts/icons8-down-arrow-50.png";
import ContactTile from "../../components/contacts/ContactTile";
import GroupTile from "../../components/contacts/GroupTile";

// Images
import sista1 from "../../../assets/images/contacts/sista1.png";
import sista2 from "../../../assets/images/contacts/sista2.png";
import sista3 from "../../../assets/images/contacts/sista3.png";
import pfp1 from "../../../assets/images/contacts/pfp1.jpeg";
import pfp2 from "../../../assets/images/contacts/pfp2.jpeg";
import pfp3 from "../../../assets/images/contacts/pfp3.jpeg";

export class Contacts extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* Add Contact Container */}
        <View style={styles.addContactContainer}>
          <View style={styles.addContact}>
            <View style={styles.addText}>
              <Text style={styles.addText_1}>Add New Contact</Text>
              <Text>Or Invite A Friend</Text>
            </View>
            <View>
              <Image source={addIcon} style={styles.addIcon} />
            </View>
          </View>
        </View>
        {/* Contacts Container */}
        <View style={styles.contactsContainer}>
          <ScrollView>
            {/* Friends Header */}
            <View style={styles.FriendsHeader}>
              <Image source={downArrow} style={styles.arrow} />
              <Text style={styles.FriendsText}>Friends</Text>
              <Text style={styles.FriendsCounter}>(7)</Text>
            </View>
            {/* -- */}
            <View style={styles.FriendsListContainer}>
              <ScrollView contentContainerStyle={styles.FriendsList}>
                <ContactTile
                  name="😘JUCIE LIPS😘💕"
                  color="green"
                  img={sista1}
                />
                <ContactTile
                  name="ThE StIfMaIsEr😘"
                  color="green"
                  img={sista2}
                />
                <ContactTile
                  name="🍭🍬Candy Gal🤤"
                  color="orange"
                  img={sista3}
                />
                <ContactTile name="🤑Chick Magnet 🔥" color="red" img={pfp1} />
                <ContactTile name="juicy lips " color="red" img={pfp2} />
                <ContactTile name="juicy lips " color="red" img={sista1} />
                <ContactTile name="juicy lips " color="red" img={sista1} />
              </ScrollView>
            </View>
            {/* Friends Header */}
            <View style={styles.FriendsHeader}>
              <Image source={downArrow} style={styles.arrow} />
              <Text style={styles.FriendsText}>Groups</Text>
              <Text style={styles.FriendsCounter}>(2)</Text>
            </View>
            <View style={styles.FriendsListContainer}>
              <ScrollView contentContainerStyle={styles.FriendsList}>
                <GroupTile name="Crazy Galz🤩🤩 " pic={pfp3} />
                <GroupTile name="📚Grade 6R😜 " pic={pfp2} />
              </ScrollView>
            </View>
          </ScrollView>
          {/* -- */}
        </View>
      </View>
    );
  }
}

export default Contacts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(40, 40, 40)",
  },
  addContactContainer: {
    marginHorizontal: 10,
    width: "95%",
    backgroundColor: "rgb(60, 60, 60)",
    margin: 10,
    borderRadius: 10,
  },
  addContact: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 80,
    width: "100%",
  },
  addIcon: {
    height: 70,
    width: 70,
  },
  addText: {
    width: "80%",
    height: "100%",
    borderRadius: 10,
    margin: 5,
    color: "white",
  },
  addText_1: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
  },
  contactsContainer: {
    flex: 1,
    width: "95%",
    backgroundColor: "rgb(60, 60, 60)",
    margin: 10,
    borderRadius: 10,
  },
  FriendsHeader: {
    flexDirection: "row",
    width: "100%",
    height: 40,
    backgroundColor: "rgb(70, 70, 70)",
    borderRadius: 10,
    padding: 5,
  },
  arrow: {
    height: 30,
    width: 30,
    marginLeft: 10,
  },
  FriendsText: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
    color: "white",
  },
  FriendsListContainer: {
    height: 350,
  },
  FriendsCounter: {
    fontSize: 20,
    marginLeft: 10,
  },
  FriendsList: {
    padding: 10,
  },
});
