import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import React from "react";
import { ScrollView } from "react-native-web";
import { useCart } from "../src/CartContext";

const Screen04 = ({ route }) => {
  const navigation = useNavigation();
  const dataParam = route.params;
  const [data, setData] = useState([]);
  const { cartItems, removeFromCart } = useCart();

  const handleRemoveItem = (item) => {
    removeFromCart(item);
  };

  return (
    //   <View>
    //     <Text>Screen02</Text>
    //     <Image source={{ uri: item.image }}></Image>
    //   </View>
    <View style={style.container}>
      <View style={{ height: 125 }}>
        <Image
          source={require("../assets/SingaKBD.png")}
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
            left: 120,
            flex: 1,
            color: "white",
            fontSize: "32px",
            top: 70,
          }}
        >
          _Keep for All
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
      <View style={{ alignItems: "center" }}>
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
      <ScrollView>
        <View style={{ flexDirection: "column", display: "flex", gap: 10 }}>
          <Image
            source={require("../assets/shopping-cart 2.png")}
            style={{
              height: 50,
              resizeMode: "contain",
            }}
          ></Image>
          {cartItems.map((item, index) => (
            <View
              key={index}
              style={{
                backgroundColor: "#181818",
                width: 410,
                left: 10,
                borderRadius: 5,
                height: 100,
                gap: 10,
              }}
            >
              <View style={{ height: 100 }}>
                <Image
                  source={{ uri: item.image }}
                  style={{
                    height: 100,
                    width: 100,
                    borderRadius: 5,
                  }}
                />
              </View>
              <Text
                style={{
                  color: "#FFF0BA",
                  fontSize: 32,
                  fontWeight: "bold",
                  left: 120,
                  bottom: 110,
                }}
              >
                {item.name}
              </Text>
              <Text
                style={{
                  color: "#7089FF",
                  fontSize: 28,
                  fontWeight: "normal",
                  left: 120,
                  bottom: 130,
                }}
              >
                {item.brand}
              </Text>
              <Text
                style={{
                  color: "white",
                  fontSize: 20,
                  left: 300,
                  bottom: 140,
                }}
              >
                {item.price}
              </Text>
              <Pressable
                onPress={() => handleRemoveItem(item)}
                style={{ bottom: 240, left: 380 }}
              >
                <Text style={{}}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                  >
                    <path
                      d="M3.21402 3L18 18"
                      stroke="white"
                      stroke-width="5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M3 18L17.786 3"
                      stroke="white"
                      stroke-width="5"
                      stroke-linecap="round"
                    />
                  </svg>
                </Text>
              </Pressable>
            </View>
          ))}
        </View>
      </ScrollView>
      <Pressable
        style={{
          position: "absolute",
          justifyContent: "center",
          alignItems: "center",
          width: 410,
          height: 80,
          bottom: 20,
          left: 10,
          backgroundColor: "#F5D0FF",
          borderRadius: 5,
          fontWeight: "bold",
        }}
      >
        <Text style={{ fontSize: 36, color: "#7089FF", fontWeight: "bold" }}>
          Checkout
        </Text>
      </Pressable>
    </View>
  );
};

export default Screen04;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    width: "100%",
    overflow: "hidden",
  },
});
