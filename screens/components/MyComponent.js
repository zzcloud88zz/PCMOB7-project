import * as React from 'react';
import { Checkbox } from 'react-native-paper';
import { StyleSheet, View } from "react-native";

const MyComponent = () => {
  const [checked, setChecked] = React.useState(false);

  return (
    <View style={ styles.Checkbox }>
    <Checkbox
      status={checked ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked(!checked);
      }}
    />
    </View>
  );
};

export default MyComponent;

const styles = StyleSheet.create({
  Checkbox: {
    backgroundColor: "#fff",
    borderWidth: 3,
  },
});