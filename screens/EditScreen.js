import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Keyboard, ImageBackground } from "react-native";
import axios from "axios";

const API = "https://zzcloud88zz.pythonanywhere.com";
const API_ALLITEMS = "/items";

export default function EditScreen({ route, navigation }) {
  const id = route.params.id;
  const [stock, setStock] = useState(route.params.stock);
  const [amount, setAmount] = useState(route.params.amount);
  const [expiry, setExpiry] = useState(route.params.expiry);
  const [category, setCategory] = useState(route.params.category);

  return (
    <View>
      <ImageBackground source={require("./images/editscreen.jpg")} style={styles.image}>
        <View style={styles.pgoverview}>
          <Text style={styles.label}>Item: {id}</Text>
            <TextInput
              style={styles.InputFields}
              value={stock}
              onChangeText={(newStock) => setStock(newStock)}
            ></TextInput>

          <Text style={styles.label}>Amount:</Text>
            <TextInput
              style={styles.InputFields}
              value={amount}
              onChangeText={(newAmount) => setAmount(newAmount)}
            ></TextInput>
          
          <Text style={styles.label}>Expiry:</Text>
            <TextInput
              style={styles.InputFields}
              value={expiry}
              onChangeText={(newExpiry) => setExpiry(newExpiry)}
            ></TextInput>

          <Text style={styles.label}>Category:</Text>
            <TextInput
              style={styles.InputFields}
              value={category}
              onChangeText={(newCategory) => setCategory(newCategory)}
            ></TextInput>
        </View>

        <View style={ styles.button }>
          <TouchableOpacity
            onPress={ EditItem }
            style={[styles.submitButton ]}
          >
            <Text style={{ fontSize: 20 }}>Edit~!</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );

  async function EditItem() {
    Keyboard.dismiss();
    try {
      const response = await axios.put(API + API_ALLITEMS + "/" + id, {
        stock,
        amount,
        expiry,
        category,
      })
      console.log("item edited!");
      console.log(response.data);
      navigation.navigate("Index", { id, stock, amount, expiry, category })
    } catch (error) {
      console.log(error.response);
    }
  }
}

const styles = StyleSheet.create({
  pgoverview: {
    alignItems: "center",
    marginTop: 15,
    marginLeft: 10,
  },
  label: {
    padding: 5,
    marginTop: 20,
    fontSize: 20,
    alignContent: "flex-start",
    backgroundColor: "grey",
  },
  InputFields: {
    backgroundColor: "whitesmoke",
    margin: 10,
    borderWidth: 1,
    width: "80%",
    padding: 10,
    borderColor: "#ccc",
    fontSize: 18,
  },
  submitButton: {
    marginTop: 20,
    padding: 20,
    margin: 10,
    alignItems: "center",
    width: "35%",
    backgroundColor: "orange",
  },
  button: {
    alignItems: "flex-end",
    marginTop: 30,
    marginRight: 20,
    marginBottom: 120,
  },
  image: {
    resizeMode: "cover",
    justifyContent: "center"
  },
});
