import React from "react";
import { StyleSheet, Text, View } from "react-native";
import IndexScreen from "./screens/IndexScreen";
import AddScreen from "./screens/AddScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator mode="modal">
        <Stack.Screen component={IndexScreen} name="Index" options={{ title: 'Inventory' }} />
        <Stack.Screen component={AddScreen} name="Additem" options={{ title: 'Add item' }} />
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
