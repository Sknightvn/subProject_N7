import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import React from "react";
import { ScrollView } from "react-native-web";

const Screen02 = ({ route }) => {
  const navigation = useNavigation();
  const dataParam = route.params;
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://65419dfcf0b8287df1fe8be4.mockapi.io/keyboard")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json);
      });
  }, []);

  return (
    //   <View>
    //     <Text>Screen02</Text>
    //     <Image source={{ uri: item.image }}></Image>
    //   </View>
    <View style={style.container}>
      <View style={{height: 200}}>
        <Text style= {{position: "absolute",  display: 'flex', width: '263px', height: "27px", flex: 1, fontSize: "32px"}}>_Keep for All</Text>
        <Image
          source={require("../assets/Nuxros.png")}
          style={{ width: '100%',height: '100%', objectFit: 'cover', position: 'relative'}
        }
        ></Image>
      </View>

      <View style={{ alignItems: "center", }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="450"
          height="50"
          viewBox="0 0 363 3"
          fill="none"
        >
          <path
            d="M0 1.5C0 0.671573 0.671573 0 1.5 0H361.5C362.328 0 363 0.671573 363 1.5V1.5C363 2.32843 362.328 3 361.5 3H1.49999C0.671566 3 0 2.32843 0 1.5V1.5Z"
            fill="black"
            fill-opacity="0.5"
          />
        </svg>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10}}>
        <Pressable
          // onPress={() => {
          //   navigation.navigate("Screen01");
          // }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "#7089FF",
              backgroundColor:'lightpink',
              borderRadius: 5,
              width:100,
              fontSize: 25,
            }}
          >
            All
          </Text>
        </Pressable>
        <Pressable
          // onPress={() => {
          //   navigation.navigate("Screen01");
          // }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "#7089FF",
              borderRadius: 5,
              fontSize: 25,
            }}
          >
            Nuxros
          </Text>
        </Pressable>
        <Pressable
          // onPress={() => {
          //   navigation.navigate("Screen01");
          // }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "#7089FF",
              borderRadius: 5,
              fontSize: 25,
            }}
          >
            SingaKBD
          </Text>
        </Pressable>
      </View>
      <ScrollView style={{ flexDirection: "column", display:'flex', gap: 10 }}>
        {data.map((item) => {
          return (
            <View >
                <View style={{height: 172,}}>

              <Image
                source={{ uri: item.image }}
                style={{
                    height: '100%',
                  width: 450,
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
                    bottom: 180,
                  }}
                >
                  {item.name}
                </Text>
                <Text
                  style={{
                    color: "#F5D0FF",
                    fontSize: 30,
                    left: 20,
                    bottom: 180,
                  }}
                >
                  {item.brand}
                </Text>
                <Text
                  style={{
                    textAlign: "right",
                    color: "white",
                    fontSize: 30,
                    right: 55,
                    bottom: 150,
                  }}
                >
                  {item.price}
                </Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
      <Pressable
        style={{ alignItems: "center" }}
        onPress={() => {
          navigation.navigate("Screen01");
        }}
      >
        <Text
          style={{
            backgroundColor: "white",
            borderWidth: 1,
            borderRadius: 5,
            width: 100,
          }}
        >
          Back
        </Text>
      </Pressable>
    </View>
  );
};
export default Screen02;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    width: "100%",
    overflow: 'hidden'
  },
});