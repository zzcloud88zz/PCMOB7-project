import React from "react";
import { StyleSheet, Text, View } from "react-native";
import IndexScreen from "./screens/IndexScreen";
import AddScreen from "./screens/AddScreen";
import DetailsScreen from "./screens/DetailsScreen";
import EditScreen from "./screens/EditScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator mode="modal">
        <Stack.Screen component={IndexScreen} name="Index" options={{ title: 'Inventory' }} />
        <Stack.Screen component={AddScreen} name="Additem" options={{ title: 'Add item' }} />
        <Stack.Screen component={DetailsScreen} name="Details" options={{ title: 'Stock Details' }} />
        <Stack.Screen component={EditScreen} name="EditItem" options={{ title: 'Edit item' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
