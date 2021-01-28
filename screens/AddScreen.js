import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Keyboard } from "react-native";
import axios from "axios";

const API = "https://zzcloud88zz.pythonanywhere.com";
const API_ADD = "/add";

export default function AddScreen({ navigation }) {
  const [stock, setStock] = useState("");
  const [amount, setAmount] = useState("");
  const [expiry, setExpiry] = useState("");
  const [category, setCategory] = useState("");

  return (
      <View>
        <View style={styles.pgoverview}>
          <Text style={styles.label}>Item:</Text>
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
            onPress={ AddItem }
            style={ styles.submitButton }
          >
            <Text style={{ fontSize: 20 }}>Add~!</Text>
          </TouchableOpacity>
        </View>
      </View>
  );

  async function AddItem() {
    Keyboard.dismiss();
    try {
      const response = await axios.post(API + API_ADD, {
        stock,
        amount,
        expiry,
        category,
      });
      console.log("Item added!");
      console.log(response.data);
      navigation.navigate("Index", { stock, amount, expiry, category });
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
    fontSize: 20,
    alignContent: "flex-start",
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
    marginRight: 20,
  },
});
