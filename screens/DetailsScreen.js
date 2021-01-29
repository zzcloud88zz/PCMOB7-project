import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from "react-native";
import { AntDesign } from '@expo/vector-icons';

export default function DetailsScreen({ route, navigation }) {
  const id = route.params.id;
  const [stock, setStock] = useState(route.params.stock);
  const [amount, setAmount] = useState(route.params.amount);
  const [expiry, setExpiry] = useState(route.params.expiry);
  const [category, setCategory] = useState(route.params.category);

  // Create edit button on header
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity style={{ paddingRight: 10 }}>
          <AntDesign
            onPress={() => navigation.navigate("EditItem", {id, stock, amount, expiry, category})}
            name="edit"
            size={40}
            color="black"
          />
        </TouchableOpacity>
      ),
    });
  });

  return (
    <View>
      <ImageBackground source={require("./images/detailscreen.jpg")} style={styles.image}>
        <View style={styles.pgoverview}>
          <Text style={styles.header}>Item {id}</Text>
          <Text>{"\n"}</Text>

          <Text style={styles.label}>Stock:</Text>
          <Text style={styles.text}>{stock}</Text>

          <Text style={styles.label}>Amount:</Text>
          <Text style={styles.text}>{amount}</Text>

          <Text style={styles.label}>Expiry:</Text>
          <Text style={styles.text}>{expiry}</Text>

          <Text style={styles.label}>Category:</Text>
          <Text style={styles.text}>{category}</Text>
          <Text>{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  pgoverview: {
    marginTop: 20,
    alignItems: "center",
  },
  header: {
    marginTop: 10,
    fontWeight: "bold",
    fontSize: 28,
    textDecorationLine: "underline",
    backgroundColor: "tomato",
    color: "lightgrey",
    padding: 5,
    width: "55%",
    textAlign: "center",
  },
  label: {
    fontWeight: "bold",
    fontSize: 20,
    backgroundColor: "grey",
    padding: 5,
    width: "35%",
    textAlign: "center",
  },
  text: {
    margin: 20,
    marginBottom: 35,
    fontSize: 18,
    backgroundColor: "lightgrey",
    padding: 10,
    width: "80%",
    textAlign: "center",
  },
  image: {
    resizeMode: "cover",
    justifyContent: "center",
  },
});
