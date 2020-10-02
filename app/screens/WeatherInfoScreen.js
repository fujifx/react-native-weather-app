import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import colors from "../config/colors";

const { PRIMARY_COLOR, SECONDARY_COLOR } = colors;

export default function WeatherInfoScreen({ currentWeather }) {
  const {
    main: { temp },
    weather: [details],
    name,
  } = currentWeather;
  const { icon, main, description } = details;

  const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`;

  return (
    <View style={styles.weatherInfo}>
      <Text>{name}</Text>
      <Image style={styles.weatherIcon} source={{ uri: iconUrl }} />
      <Text style={styles.textPrimary}>{temp}º</Text>
      <Text style={styles.weatherDesc}>{description}</Text>
      <Text style={styles.textSecondary}>{main}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  weatherInfo: {
    alignItems: "center",
  },
  weatherDesc: {
    textTransform: "capitalize",
  },
  weatherIcon: {
    height: 100,
    width: 100,
  },
  textPrimary: {
    color: PRIMARY_COLOR,
    fontSize: 40,
  },
  textSecondary: {
    color: SECONDARY_COLOR,
    fontSize: 20,
    fontWeight: "500",
    marginTop: 10,
  },
});
