import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import React from "react";
import { ScrollView } from "react-native-web";

const Screen05 = ({ route }) => {
  const navigation = useNavigation();
  const dataParam = route.params;
  const [data, setData] = useState([]);

  return (
    <View style={styles.container}>
      <View style={{ height: 125 }}>
        <Image
          source={require("../assets/Singa.png")}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "relative",
          }}
        ></Image>
        <Text
          style={{
            position: "absolute",
            left: 150,
            flex: 1,
            color: "white",
            fontSize: "32px",
            top: 70,
          }}
        >
          About us
        </Text>
      </View>
      <Pressable
        style={{ position: "absolute", bottom: 820, left: 10 }}
        onPress={() => {
          navigation.navigate("Screen02");
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="106"
          viewBox="0 0 36 106"
          fill="none"
        >
          <path
            d="M18 106C8.05888 106 0 97.9411 0 88L0 18C0 8.05887 8.05888 -7.62939e-06 18 -7.62939e-06C27.9411 -7.62939e-06 36 8.05887 36 18L36 88C36 97.9411 27.9411 106 18 106Z"
            fill="white"
          />
          <rect
            x="8"
            y="43"
            width="20.5674"
            height="20.0077"
            rx="10.0038"
            fill="#7089FF"
          />
          <rect
            x="13"
            y="68"
            width="10.2837"
            height="9.80769"
            rx="4.90385"
            fill="#F5D0FF"
          />
          <path
            d="M16.9574 38.1231L33 24L4 32.0423L16.9574 38.1231Z"
            fill="#FFF0BA"
          />
        </svg>
      </Pressable>
      <View style={{ alignItems: "center", bottom: 10 }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="410"
          height="50"
          viewBox="0 0 363 3"
          fill="none"
        >
          <path
            d="M0 1.5C0 0.671573 0.671573 0 1.5 0H361.5C362.328 0 363 0.671573 363 1.5V1.5C363 2.32843 362.328 3 361.5 3H1.49999C0.671566 3 0 2.32843 0 1.5V1.5Z"
            fill="black"
            fill0opacity="0.5"
          />
        </svg>
      </View>
      <View style={{ left: 160, top: 50 }}>
        <svg
          width="109"
          height="200"
          viewBox="0 0 109 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Group 18">
            <rect
              id="Cirle2"
              x="20"
              y="69"
              width="76.9231"
              height="78.4615"
              rx="38.4615"
              fill="#7089FF"
            />
            <rect
              id="Cirle1"
              x="35.3846"
              y="161.538"
              width="38.4615"
              height="38.4615"
              rx="19.2308"
              fill="#F5D0FF"
            />
            <path
              id="Polygon 1"
              d="M48.4615 55.3846L108.462 0L0 31.5385L48.4615 55.3846Z"
              fill="#FFF0BA"
            />
          </g>
        </svg>
      </View>
      <Text style={{ top: 150, fontSize: 24, left: 70 }}>
        TranDinhKhanh - 20114291
      </Text>
      <Text style={{ top: 200, fontSize: 24, left: 60 }}>
        LuuTranBaoKhanh - 20120781
      </Text>
      <Text style={styles.copyright}>
        2022 - 2023
        <br />
        DK copy-right
      </Text>
    </View>
  );
};
export default Screen05;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    width: "100%",
    overflow: "hidden",
  },
  copyright: {
    color: "#00000080",
    top: 300,
    textAlign: "center",
    fontSize: 14,
    fontWeight: 300,
  },
});
