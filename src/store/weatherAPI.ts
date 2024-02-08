import { action, makeObservable, observable, runInAction } from "mobx";
import { Alert } from "react-native";
import {
  Coordinates,
  Response,
  getWeatherByCoordinates,
} from "../api/getWeatherByCoordinates";

class WeatherAPIReducer {
  data: Response | null = null;
  constructor() {
    makeObservable(this, {
      getWeather: action,
      data: observable,
    });
  }

  async getWeather(coordinates: Coordinates) {
    try {
      const weatherResponse = await (
        await getWeatherByCoordinates(coordinates)
      ).json();

      runInAction(() => {
        this.data = weatherResponse;
      });
    } catch (error) {
      Alert.alert("Failed to get the data from API!");
    }
  }
}

export const WeatherAPI = new WeatherAPIReducer();
