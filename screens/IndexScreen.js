import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import axios from "axios";
import { FlatList, ScrollView } from "react-native-gesture-handler";

const API = "https://zzcloud88zz.pythonanywhere.com";
const API_ALLITEMS = "/items";

export default function IndexScreen({ route, navigation }) {
  // Add button on header
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity style={{ paddingRight: 10 }}>
          <Entypo
            onPress={() => navigation.navigate("Additem")}
            name="new-message"
            size={40}
            color="black"
          />
        </TouchableOpacity>
      ),
    });
  });

  // Render items
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get(API + API_ALLITEMS)
    .then(response => {
      console.log(response)
      setItems(response.data)
    })
    .catch(error => {
      console.log(error)
    })
  }, [route.params?.stock, route.paramas?.amount, route.paramas?.expiry, route.paramas?.category])

  // Return screen
  return (
    <View>
      <ScrollView>
      {items.map(item => (
        <TouchableOpacity key={item.id} onPress={() => navigation.navigate("Details", item)} style={styles.container}>
          <Text style={{ fontSize: 28, fontWeight: "bold" }}>
            {item.id}. {item.stock}{"\n"}
            <Text style={{ fontSize: 20, fontWeight: "normal" }}>
              Amount: {item.amount}{"\n"}
              Expiry: {item.expiry}{"\n"}
              Category: {item.category}
            </Text>
          </Text>
          <TouchableOpacity onPress={() => deleteItem(item.id)}>
            <AntDesign name="delete" size={36} color="maroon" />
          </TouchableOpacity>
        </TouchableOpacity>
      ))}
      </ScrollView>
    </View>
  );

  function deleteItem(id) {
    Alert.alert(
      "Hold On!",
      "Are you sure you want to delete?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancelled"),
          style: "cancel"
        },
        { text: "OK", onPress: () => 
          axios.delete(API + API_ALLITEMS + "/" + id)
          .then(response => {
            console.log(response.data)
            const refresh = items.filter(item=>item.id !== id)
            setItems(refresh)
          })
      }],
      { cancelable: false }
    );
  }

}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingTop: 20,
    paddingBottom: 20,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
