import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {StyleSheet,Text,View, Image, TextInput, Pressable} from "react-native";

  const screen1 = ({ route }) => {
    const navigation = useNavigation();
    const data = route.params;
    const onPress = () => useNavigation(Screen02);
}
export default function Screen01() {
return (
  <View style = {styles.container}>
    <View style = {styles.view1}>
    <Text style={styles.txt}>
        Choose your
      </Text>
    <Image
     source={require("../assets/Arrow 1.png")}
     style = {{ height: 30, resizeMode:'contain', marginLeft: 10}}
    >
     </Image>
     <Pressable
              role="button"
              onPress={() => {
                navigation.navigate("Screen02");
              }}
            >
     <Image
     source={require("../assets/KeyboardM.png")}
     style = {{height: 65, resizeMode:'contain', marginTop: 10}}
     >
     </Image>
     </Pressable>
     <Text style={styles.title}>
      _Keeb for all
     </Text>
    </View>
    <View style = {styles.view2}>
        <Image
        source={require("../assets/Group 16.png")}
        style = {{height: 130, resizeMode:'contain'}}
        >
        </Image>
    </View>
    <View style = {styles.view3}>
    <Text style = {styles.copyright}>
    2022 - 2023 DK copy-right
    </Text>
    </View>
  </View>
);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    width: '100%',
  },
  view1: {
    width: "100%",
    position: 'absolute',
    top: 100,
    alignContent:'center',
  },
  view2: {
    width: '100%',
    top: 350,
  },
  txt: {
    color: '#00000059',
    textAlign: 'center',
    fontFamily: 'Ubuntu',
    fontSize: 20,
    fontWeight: 400,
  },
  title: {
    color: '#181818',
    textAlign: 'center',
    fontFamily: 'Ubuntu',
    fontSize: 40,
    fontWeight: 400,
    marginRight: 35,
    marginTop: 15,
  },
  copyright: {
    position: 'absolute',
    width: 85,
    color: '#00000080',
    top: 400,
    left: 150,
    textAlign: 'center',
    fontFamily: 'Ubuntu',
    fontSize: 14,
    fontWeight: 300,
  },
});
