import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import { commonStyles } from "../styles/commonStyles";
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import axios from "axios";
import { FlatList } from "react-native-gesture-handler";

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
  }, [route.params?.title, route.paramas?.content])

  // Return screen
  return (
    <View>
      {items.map(item => (
        <TouchableOpacity key={item.id} onPress={() => navigation.navigate("", item)} style={styles.container}>
          <Text>
            {item.id}. {item.stock}
          </Text>
          <TouchableOpacity onPress={""}>
            <AntDesign name="delete" size={30} color="maroon" />
          </TouchableOpacity>
        </TouchableOpacity>
      ))}
    </View>
  );

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
