import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import React from "react";
import { ScrollView } from "react-native-web";

const Screen02 = ({ route }) => {
  const navigation = useNavigation();
  const dataParam = route.params;
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("all");
  useEffect(() => {
    fetch("https://65419dfcf0b8287df1fe8be4.mockapi.io/keyboard")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json);
      });
  }, []);

  const handleItemPress = (item) => {
    navigation.navigate("Screen03", { selectedItem: item });
  };

  const handleFilterPress = (brand) => {
    setFilter(brand);
  };

  const filteredData =
    filter === "all" ? data : data.filter((item) => item.brand === filter);
  return (
    <View style={styles.container}>
      <View style={{ height: 125 }}>
        <Image
          source={require("../assets/Nuxros.png")}
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
        onPress={() => {
          navigation.navigate("Screen05");
        }}
        style={{ left: 180 }}
      >
        <Image
          source={require("../assets/Group 18 (1).png")}
          style={{
            height: 50,
            bottom: 120,
            resizeMode: "contain",
          }}
        ></Image>
      </Pressable>
      <Pressable
        onPress={() => {
          navigation.navigate("Screen04");
        }}
        style={{ left: 180 }}
      >
        <Image
          source={require("../assets/Group_26.png")}
          style={{
            height: 50,
            bottom: 115,
            resizeMode: "contain",
          }}
        ></Image>
      </Pressable>
      <Pressable
        style={{ position: "absolute", bottom: 820, left: 10 }}
        onPress={() => {
          navigation.navigate("Screen01");
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
      <View style={{ alignItems: "center", bottom: 110 }}>
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

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          left: 10,
          bottom: 120,
          width: 410,
        }}
      >
        <Pressable onPress={() => handleFilterPress("All")}>
          <Text style={filter === "All" ? styles.activeFilter : styles.filter}>
            All
          </Text>
        </Pressable>
        <Pressable onPress={() => handleFilterPress("Nuxros")}>
          <Text
            style={filter === "Nuxros" ? styles.activeFilter : styles.filter}
          >
            Nuxros
          </Text>
        </Pressable>
        <Pressable onPress={() => handleFilterPress("SingaKBD")}>
          <Text
            style={filter === "SingaKBD" ? styles.activeFilter : styles.filter}
          >
            SingaKBD
          </Text>
        </Pressable>
      </View>
      <ScrollView
        style={{ flexDirection: "column", display: "flex", bottom: 110 }}
      >
        {data.map((item, index) => (
          <Pressable key={index} onPress={() => handleItemPress(item)}>
            <View>
              <View style={{ height: 172 }}>
                <Image
                  source={{ uri: item.image }}
                  style={{
                    height: "100%",
                    width: 410,
                    margin: 10,
                    borderRadius: 5,
                  }}
                />
              </View>
              <View>
                <Text
                  style={{
                    color: "#FFF0BA",
                    fontSize: 40,
                    fontWeight: "bold",
                    left: 20,
                    bottom: 160,
                  }}
                >
                  {item.name}
                </Text>
                <Text
                  style={{
                    color: "#F5D0FF",
                    fontSize: 30,
                    left: 20,
                    bottom: 160,
                  }}
                >
                  {item.brand}
                </Text>
                <Text
                  style={{
                    textAlign: "right",
                    color: "white",
                    fontSize: 30,
                    right: 25,
                    bottom: 130,
                  }}
                >
                  {item.price}
                </Text>
              </View>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};
export default Screen02;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    width: "100%",
    overflow: "hidden",
  },
  filter: {
    textAlign: "center",
    color: "#7089FF",
    borderRadius: 5,
    width: 120,
    fontSize: 25,
    fontWeight:"normal",
  },
  activeFilter: {
    textAlign: "center",
    color: "white",
    backgroundColor: "#F5D0FF",
    borderRadius: 5,
    width: 120,
    fontSize: 25,
    fontWeight:"normal",
  },
});
