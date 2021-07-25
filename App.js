import { StatusBar } from "expo-status-bar";
import React from "react";
// import { StyleSheet, Text, View } from "react-native";
import Loading from "./loading";
import { Alert } from "react-native";
import * as Location from "expo-location";
import axios from "axios";
import Weather from "./weather";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const API_KEY = "04817fb45fec0904f1f4b3d441bf7359";

export default class extends React.Component {
  state = {
    isLoading: true,
  };

  getWeather = async (latitude, longitude) => {
    const {
      data: {
        main: { temp },
        weather,
      },
    } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );

    this.setState({
      isLoading: false,
      condition: weather[0].main,
      temp,
    });
  };

  getLocation = async () => {
    try {
      Location.requestForegroundPermissionsAsync();
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();

      this.getWeather(latitude, longitude);
      //  함수 호출
    } catch (error) {
      Alert.alert("Can't find you.", "So Sad");
    }
  };

  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading, temp, condition } = this.state;
    return isLoading ? (
      <Loading />
    ) : (
      <Weather temp={temp} condition={condition} />
    );
  }
}
