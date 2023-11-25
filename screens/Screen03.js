// Screen03.js
import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import React from "react";
import { ScrollView } from "react-native-web";
import { useCart } from "../src/CartContext";

const Screen03 = ({ route }) => {
  const { selectedItem } = route.params;
  const navigation = useNavigation();
  const { addToCart, cartItems } = useCart();

  const handleAddToCart = () => {
    console.log('Adding to cart:', selectedItem);
    addToCart(selectedItem);
    navigation.navigate("Screen04");
  };

  return (
    <View style={style.container}>
      <Image
        source={{ uri: selectedItem.image }}
        style={{ position: "absolute", width: "100%", height: 400 }}
      />
      <Pressable
        style={{ position: "absolute", bottom: 1020, left: 20 }}
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
      <View>
        <Text
          style={{
            color: "#7089FF",
            fontSize: 40,
            fontWeight: "bold",
            left: 10,
            top: 410,
          }}
        >
          {selectedItem.name}
        </Text>
      </View>
      <View>
        <Text
          style={{
            color: "#000000",
            fontSize: 30,
            fontWeight: "bold",
            left: 10,
            top: 410,
          }}
        >
          {selectedItem.brand}
        </Text>
      </View>
      <View>
        <Text
          style={{
            color: "#181818",
            fontSize: 32,
            left: 285,
            top: 325,
          }}
        >
          {selectedItem.price}
        </Text>
      </View>
      <View style={{ alignItems: "center", top: 350 }}>
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
      <View style={{ left: 10, top: 380 }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="27"
          height="125"
          viewBox="0 0 27 125"
          fill="none"
        >
          <path
            d="M5 125C2.23858 125 0 122.761 0 120L0 5.00001C0 2.23858 2.23858 0 5 0H22C24.7614 0 27 2.23858 27 5L27 120C27 122.761 24.7614 125 22 125H5Z"
            fill="#F5D0FF"
          />
        </svg>
      </View>
      <View>
        <Text
          style={{
            color: "#00000080",
            fontSize: 24,
            width: 215,
            left: 60,
            top: 250,
          }}
        >
          {selectedItem.spec}
        </Text>
      </View>
      <Pressable
        style={{
          position: "absolute",
          justifyContent: "center",
          alignItems: "center",
          width: 180,
          height: 80,
          top: 800,
          left: 10,
          backgroundColor: "#181818",
          borderRadius: 5,
          fontWeight: "bold",
        }}
        onPress={() => {
          navigation.navigate("Screen02");
        }}
      >
        <Text style={{ fontSize: 36, color: "white", fontWeight: "bold" }}>
          Cancel
        </Text>
      </Pressable>
      <Pressable
        style={{
          position: "absolute",
          justifyContent: "center",
          alignItems: "center",
          width: 180,
          height: 80,
          top: 800,
          left: 235,
          backgroundColor: "#FFF0BA",
          borderRadius: 5,
          fontWeight: "bold",
        }}
        onPress={handleAddToCart}
      >
        <Text style={{ fontSize: 36, color: "#7089FF", fontWeight: "bold" }}>
          Add
        </Text>
      </Pressable>
    </View>
  );
};

export default Screen03;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    width: "100%",
    overflow: "hidden",
  },
});
