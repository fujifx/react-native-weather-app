import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  FontAwesome5,
  Entypo,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import colors from "../config/colors";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function WeatherDetailsComponent({
  currentWeather,
  unitsSystem,
}) {
  const {
    main: { feels_like, humidity, pressure },
    wind: { speed },
  } = currentWeather;

  const windSpeed =
    unitsSystem === "metric"
      ? `${Math.round(speed)} m/s`
      : `${Math.round(speed)} miles/h`;
  return (
    <View style={styles.weatherDetails}>
      <View style={styles.weatherDetailsRow}>
        <View
          style={{
            ...styles.weatherDetailsBox,
            borderRightWidth: 1,
            borderRightColor: colors.BORDER_COLOR,
          }}
        >
          <View style={styles.weatherDetailsRow}>
            <FontAwesome5
              name="temperature-low"
              size={25}
              color={colors.PRIMARY_COLOR}
            />
            <View style={styles.weatherDetailsItems}>
              <Text>Feels like:</Text>
              <Text style={styles.weatherDetailsItemsText}>{feels_like}º</Text>
            </View>
          </View>
        </View>
        <View style={styles.weatherDetailsBox}>
          <View style={styles.weatherDetailsRow}>
            <Entypo name="water" size={24} color={colors.PRIMARY_COLOR} />
            <View style={styles.weatherDetailsItems}>
              <Text>Humidity:</Text>
              <Text style={styles.weatherDetailsItemsText}>{humidity} %</Text>
            </View>
          </View>
        </View>
      </View>

      <View
        style={{
          ...styles.weatherDetailsRow,
          borderTopWidth: 1,
          borderTopColor: colors.BORDER_COLOR,
        }}
      >
        <View
          style={{
            ...styles.weatherDetailsBox,
            borderRightWidth: 1,
            borderRightColor: colors.BORDER_COLOR,
          }}
        >
          <View style={styles.weatherDetailsRow}>
            <MaterialCommunityIcons
              name="weather-windy"
              size={25}
              color={colors.PRIMARY_COLOR}
            />
            <View style={styles.weatherDetailsItems}>
              <Text>Wind Speed:</Text>
              <Text style={styles.weatherDetailsItemsText}>{windSpeed}</Text>
            </View>
          </View>
        </View>
        <View style={styles.weatherDetailsBox}>
          <View style={styles.weatherDetailsRow}>
            <MaterialCommunityIcons
              name="speedometer"
              size={24}
              color={colors.PRIMARY_COLOR}
            />
            <View style={styles.weatherDetailsItems}>
              <Text>Pressure:</Text>
              <Text style={styles.weatherDetailsItemsText}>{pressure} hPa</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  weatherDetails: {
    marginTop: "auto",
    margin: 15,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.BORDER_COLOR,
  },
  weatherDetailsRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  weatherDetailsBox: {
    flex: 1,
    padding: 20,
  },
  weatherDetailsItems: {
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  weatherDetailsItemsText: {
    fontSize: 15,
    color: colors.SUMMARY_COLOR,
    fontWeight: "700",
    margin: 7,
  },
});
