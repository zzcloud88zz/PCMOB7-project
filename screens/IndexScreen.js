import React, { useEffect } from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import { commonStyles } from "../styles/commonStyles";
import { Entypo } from '@expo/vector-icons';

export default function IndexScreen({ navigation }) {
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

  return (
    <View style={commonStyles.container}>
      <Text>Index Screen</Text>
    </View>
  );

}

const styles = StyleSheet.create({});
