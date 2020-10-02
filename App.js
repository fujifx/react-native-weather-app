import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import * as Location from "expo-location";

import colors from "./app/config/colors";

import WeatherInfoScreen from "./app/screens/WeatherInfoScreen";
import UnitPickerComponent from "./app/screens/UnitPickerComponent";
import ReloadIconComponent from "./app/screens/ReloadIconComponent";
import WeatherDetailsComponent from "./app/screens/WeatherDetailsComponent";

import { API_KEY } from "react-native-dotenv";

const BASE_WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather?";

export default function App() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [unitsSystem, setUnitsSystem] = useState("metric");

  useEffect(() => {
    load();
  }, [unitsSystem]);
  async function load() {
    setErrorMessage(null);
    setCurrentWeather(null);

    try {
      let { status } = await Location.requestPermissionsAsync();

      if (status != "granted") {
        setErrorMessage("Access to location is needed to run the app!");
        return;
      }

      const location = await Location.getCurrentPositionAsync();

      const { latitude, longitude } = location.coords;
      // alert(`Lat : ${latitude}, Long : ${longitude}`);

      const weatherUrl = `${BASE_WEATHER_URL}lat=${latitude}&lon=${longitude}&units=${unitsSystem}&appid=${API_KEY}`;
      // alert(weatherUrl);
      const response = await fetch(weatherUrl);
      // alert(response.ok);

      const result = await response.json();

      if (response.ok) {
        setCurrentWeather(result);
      } else {
        setErrorMessage(result.message);
      }
    } catch (error) {
      setErrorMessage(error.message);
    }
  }
  if (currentWeather) {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.main}>
          <UnitPickerComponent
            unitsSystem={unitsSystem}
            setUnitsSystem={setUnitsSystem}
          />
          <ReloadIconComponent load={load} />
          <WeatherInfoScreen currentWeather={currentWeather} />
        </View>
        <WeatherDetailsComponent
          currentWeather={currentWeather}
          unitsSystem={unitsSystem}
        ></WeatherDetailsComponent>
      </View>
    );
  } else if (errorMessage) {
    return (
      <View style={styles.container}>
        <ReloadIconComponent load={load} />
        <Text style={styles.errorInfo}>{errorMessage}</Text>
        <StatusBar style="auto" />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={colors.PRIMARY_COLOR} />
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  main: {
    justifyContent: "center",
    flex: 1,
  },
  errorInfo: {
    textAlign: "center",
  },
});
