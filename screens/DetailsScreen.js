import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
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
    <View style={styles.pgoverview}>
      <Text style={styles.header}>Item {id}{"\n"}</Text>

      <Text style={styles.label}>Stock:</Text>
      <Text style={styles.text}>{stock}</Text>

      <Text style={styles.label}>Amount:</Text>
      <Text style={styles.text}>{amount}</Text>

      <Text style={styles.label}>Expiry:</Text>
      <Text style={styles.text}>{expiry}</Text>

      <Text style={styles.label}>Category:</Text>
      <Text style={styles.text}>{category}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  pgoverview: {
    marginTop: 20,
    alignItems: "center",
  },
  header: {
    fontWeight: "bold",
    fontSize: 24,
    textDecorationLine: "underline",
  },
  label: {
    fontWeight: "bold",
    fontSize: 20,
  },
  text: {
    margin: 20,
    fontSize: 18,
  },
});
