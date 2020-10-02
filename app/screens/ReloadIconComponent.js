import React from "react";
import { View, Platform, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import colors from "../config/colors";

export default function ReloadIcon({ load }) {
  const reloadIconName = Platform.OS === "ios" ? "ios-refresh" : "md-refresh";
  return (
    <View style={styles.reloadIcon}>
      <Ionicons
        onPress={load}
        name={reloadIconName}
        size={24}
        color={colors.PRIMARY_COLOR}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  reloadIcon: {
    position: "absolute",
    top: 60,
    right: 20,
  },
});

// const style = StyleSheet.create({
//   reloadIcon: {
//     position: "absolute",
//     top: 10,
//     left: 40,
//   },
// });
// const styles = StyleSheet.create({
//   reloadIcon: {
//     position: "relative",
//     backgroundColor: "yellow",

//     // Set the top based on the OS
//     // ...Platform.select({
//     //   ios: {
//     //     top: -30,
//     //   },
//     //   android: {
//     //     top: 30,
//     //   },
//     // }),
//     // right: 10,
//     // height: 150,
//     // width: 500,
//   },
// });
