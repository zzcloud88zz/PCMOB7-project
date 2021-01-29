import React, { useState, useEffect } from "react";
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
        <Stack.Screen
          component={AddScreen}
          name="Additem"
          options={{ 
            title: 'Add Stock',
            headerStyle: {
            backgroundColor: '#FF6900',
            },
          }} />
        <Stack.Screen
          component={DetailsScreen}
          name="Details"
          options={{
            title: 'Stock Details',
            headerStyle: {
              backgroundColor: 'darkseagreen',
              },
          }} />
        <Stack.Screen
          component={EditScreen}
          name="EditItem"
          options={{
            title: 'Edit item',
            headerStyle: {
            backgroundColor: 'skyblue',
            },
          }} />
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
