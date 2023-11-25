import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
} from "react-native";

const Screen01 = ({ route }) => {
  const navigation = useNavigation();
  const data = route.params;
  const onPress = () => useNavigation(Screen02);

  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <Text style={styles.txt}>Choose your</Text>
        <Image
          source={require("../assets/Arrow 1.png")}
          style={{
            height: 30,
            top: 125,
            resizeMode: "contain",
            marginLeft: 10,
          }}
        ></Image>
        <Pressable
          role="button"
          onPress={() => {
            navigation.navigate("Screen02");
          }}
        >
          <Image
            source={require("../assets/KeyboardM.png")}
            style={{ height: 60, resizeMode: "contain", marginTop: 140 }}
          ></Image>
        </Pressable>
        <Text style={styles.title}>_Keeb for all</Text>
      </View>
      <View style={styles.view2}>
        <Image
          source={require("../assets/Group 16.png")}
          style={{ height: 130, top: 170, resizeMode: "contain" }}
        ></Image>
        <Text style={styles.copyright}>
          2022 - 2023
          <br />
          DK copy-right
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    width: "100%",
  },
  view1: {
    width: "100%",
    position: "absolute",
    top: 100,
    alignContent: "center",
  },
  view2: {
    width: "100%",
    top: 350,
  },
  txt: {
    color: "#00000059",
    textAlign: "center",
    fontSize: 20,
    fontWeight: 400,
    top: 120,
  },
  title: {
    color: "#181818",
    textAlign: "center",
    fontSize: 40,
    fontWeight: 400,
    marginRight: 35,
    marginTop: 20,
    left: 7,
  },
  copyright: {
    color: "#00000080",
    top: 300,
    textAlign: "center",
    fontSize: 14,
    fontWeight: 300,
  },
});
export default Screen01;
