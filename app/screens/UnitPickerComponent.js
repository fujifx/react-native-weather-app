import React from "react";
import { View, StyleSheet, Platform } from "react-native";
import { Picker } from "@react-native-community/picker";

export default function UnitPickerComponent({ unitsSystem, setUnitsSystem }) {
  return (
    <View style={styles.unitsSystem}>
      <Picker
        selectedValue={unitsSystem}
        onValueChange={(item) => setUnitsSystem(item)}
        mode="dropdown"
        itemStyle={styles.pickerItemStyle}
      >
        {/* mode="dropdown" // this is only applicable for Android */}

        <Picker.Item label="Cº" value="metric" />
        <Picker.Item label="Fº" value="imperial" />
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  unitsSystem: {
    position: "absolute",

    // Set the top based on the OS
    ...Platform.select({
      ios: {
        top: -30,
      },
      android: {
        top: 30,
      },
    }),
    left: 10,
    height: 50,
    width: 100,
  },
  pickerItemStyle: {
    fontSize: 12,
  },
});
