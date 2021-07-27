import React from "react";
import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  StatusBar,
} from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const weatherOptions = {
  Haze: {
    iconName: "weather-fog",
    gradient: ["#e9d362", "#333333"],
    title: "Haze",
    subtitle: "Today weather is haze.",
  },
  Thunderstorm: {
    iconName: "weather-lightning-rainy",
    gradient: ["#2c3e50", "#bdc3c7"],
    title: "Thunderstorm",
    subtitle: "Today weather is thunderstorm.",
  },
  Drizzle: {
    iconName: "weather-rainy",
    gradient: ["#E4E5E6", "#00416A"],
    title: "Drizzle",
    subtitle: "Today weather is drizzle.",
  },
  Rain: {
    iconName: "weather-pouring",
    gradient: ["#2980b9", "#2c3e50"],
    title: "Rain",
    subtitle: "Today weather is rain.",
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#C4E0E5 ", "#4CA1AF"],
    title: "Snow",
    subtitle: "Today weather is snow.",
  },
  Atmosphere: {
    iconName: "weather-partly-cloudy",
    gradient: ["#2C5364", "#203A43", "#0F2027"],
    title: "Atmosphere",
    subtitle: "Today weather is atmosphere.",
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#ffe259", "#ffa751"],
    title: "Clear",
    subtitle: "Today weather is clear.",
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#D7D2CC", "#304352"],
    title: "Clouds",
    subtitle: "Today weather is clouds.",
  },
  Mist: {
    iconName: "weather-fog",
    gradient: ["#EFEFBB", "#D4D3DD"],
    title: "Mist",
    subtitle: "Today weather is mist.",
  },
  Dust: {
    iconName: "weather-windy-variant",
    gradient: ["#a2ab58", "#636363"],
    title: "Dust",
    subtitle: "Today weather is dust.",
  },
};

export default function Weather({ temp, condition, name }) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <Text style={styles.name}>{name}</Text>
        <MaterialCommunityIcons
          style={styles.icon}
          name={weatherOptions[condition].iconName}
          size={96}
          color="white"
        />
        <Text style={styles.temp}>{temp}°</Text>
      </View>
      <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>
          {weatherOptions[condition].subtitle}
        </Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
    "Haze",
    "Mist",
    "Dust",
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    fontSize: 35,
    color: "white",
  },
  temp: {
    fontSize: 42,
    color: "white",
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    padding: 10,
  },
  title: {
    color: "white",
    fontSize: 44,
    fontWeight: "300",
    marginBottom: 10,
  },
  subtitle: {
    color: "white",
    fontWeight: "600",
    fontSize: 24,
  },
  textContainer: {
    paddingHorizontal: 20,
    alignItems: "flex-start",
  },
});
