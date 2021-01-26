import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Keyboard } from "react-native";
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
    <View style={styles.pgoverview}>
      <Text style={styles.header}>Edit item {id}!{"\n"}</Text>
      <Text style={styles.label}>Edit stock:</Text>
        <TextInput
          style={styles.textInput}
          value={stock}
          onChangeText={(newStock) => setStock(newStock)}
        ></TextInput>

      <Text style={styles.label}>Edit amount:</Text>
        <TextInput
          style={styles.textInput}
          value={amount}
          onChangeText={(newAmount) => setAmount(newAmount)}
        ></TextInput>
      
      <Text style={styles.label}>Edit expiry:</Text>
        <TextInput
          style={styles.textInput}
          value={expiry}
          onChangeText={(newExpiry) => setExpiry(newExpiry)}
        ></TextInput>

      <Text style={styles.label}>Edit category:</Text>
        <TextInput
          style={styles.textInput}
          value={category}
          onChangeText={(newCategory) => setCategory(newCategory)}
        ></TextInput>

      <TouchableOpacity
        onPress={() => editItem()}
        style={[styles.button]}
      >
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );

  async function editItem() {
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
    marginTop: 20,
  },
  header: {
    fontWeight: "bold",
    fontSize: 24,
  },
  label: {
    fontSize: 20,
    alignContent: "flex-start",
  },
  textInput: {
    margin: 20,
    borderWidth: 1,
    width: "80%",
    padding: 10,
    borderColor: "#ccc",
    fontSize: 18,
  },
  button: {
    padding: 10,
    margin: 5,
    backgroundColor: "orange",
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
});
