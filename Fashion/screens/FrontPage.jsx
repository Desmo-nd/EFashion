import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";


const FrontPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/logo.png")}
        style={styles.logo}
      />
      <Text style={styles.title}>Fashion</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
    },
    logo: {
        width: 150,
        height: 150,
        marginBottom: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
    },
    button: {
        backgroundColor: "tomato",
        padding: 10,
        paddingHorizontal: 30,
        borderRadius: 5,
        marginTop: 20,
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
    },
    });

export default FrontPage;