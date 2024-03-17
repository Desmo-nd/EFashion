import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SIZES } from "../constants";
import { StatusBar } from "expo-status-bar";


const FrontPage = ({ navigation }) => {
  return (
    <SafeAreaView>
      <StatusBar style="auto" backgroundColor="#ffadaf" barStyle="light-content" />
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../assets/images/stty.png")}
            style={styles.image}
          />
          <View style={styles.slant}></View>
        </View>
        <View style={styles.Textcontainer}>
          <View style={styles.titlecont}>
            <Text style={styles.title}>Find Your Best Outfit</Text>
            <Text style={styles.title}>And Look Great</Text>
          </View>
          <View style={styles.descriptionCont}>
            <Text style={styles.description}>
              Explore our latest collection of trendy outfits and accessories.
              Stay stylish and express yourself with confidence!
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Bottom Navigation")}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  
  imageContainer: {
       width: SIZES.width,
       height:SIZES.height*0.6,
    },
    image: {
      width: '100%',
      height: '100%',
      // borderBottomLeftRadius: 50,
      // borderBottomRightRadius: 50,
      // resizeMode: 'cover',
  },
  // slant: {
  //     width: SIZES.width,
  //     height: 50,
  //     backgroundColor: "tomato",
  //     position: "absolute",
  //     bottom: 0,
  //     borderBottomLeftRadius: 50,
  //     borderBottomRightRadius: 50,
  // },
  Textcontainer: {
    marginHorizontal: 20,
  },
  titlecont:{
    marginTop: SIZES.height*0.03,

  },
  title: {
      fontSize: 29,
      fontFamily: "bold",
      textAlign: "center",
  },
  descriptionCont: {
      marginTop: 20,
  },
  description: {
      fontSize: 16,
      fontFamily: "regular",
      textAlign: "center",
  },
  button: {
      width: "40%",
      alignSelf: "center",
      backgroundColor: "tomato",
      padding: 10,
      paddingHorizontal: 30,
      borderRadius: 5,
      marginTop: 20,
  },
  buttonText: {
      color: "#fff",
      fontSize: 16,
      fontFamily: "bold",
      textAlign: "center",
  },
  });

export default FrontPage;