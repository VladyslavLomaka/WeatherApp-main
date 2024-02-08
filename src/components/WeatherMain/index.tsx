import React, { memo, useState } from "react";
import { Image, StyleSheet, Switch, Text, View } from "react-native";
import { Response } from "../../api/getWeatherByCoordinates";
import { Celsius } from "../../assets/icons/Celsius";
import { Fahrenheit } from "../../assets/icons/Fahrenheit";
import { COLORS } from "../../constants/colors";
import { rem } from "../../utils/rn-units";
import { font } from "../../utils/styles";

export const dateFormatter = new Intl.DateTimeFormat("US", {
  minute: "2-digit",
  hour: "2-digit",
  day: "2-digit",
  month: "2-digit",
  year: "2-digit",
  hour12: false,
});

export const WeatherMain = memo(
  ({ data, currentIndex }: { data: Response; currentIndex: number }) => {
    const celsius = data && data.list[currentIndex].main.temp - 273.5;
    const fahrenheit = celsius && (celsius * 9) / 5 + 32;

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

    return (
      <View style={styles.container}>
        <Text style={styles.city_name}>{data.city.name}</Text>
        <Text style={styles.clouds}>
          Chance of rain: {data.list[currentIndex].pop * 100}%
        </Text>
        <Image
          style={styles.image}
          width={rem(260)}
          height={rem(260)}
          source={{
            uri: `https://openweathermap.org/img/wn/${data.list[currentIndex].weather[0].icon}@4x.png`,
          }}
        />
        <Text style={styles.temp}>
          {(isEnabled ? fahrenheit : celsius).toFixed(1)} °
          {isEnabled ? "F" : "C"}
        </Text>
        <View style={styles.temp_container}>
          <Celsius />
          <Switch
            trackColor={{ false: COLORS.gray, true: COLORS.gray }}
            ios_backgroundColor={COLORS.gray}
            thumbColor={COLORS.white}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
          <Fahrenheit />
        </View>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  temp_container: {
    flexDirection: "row",
    alignItems: "center",
    textAlign: "center",
    gap: rem(8),
    paddingVertical: rem(10),
  },
  temp: {
    ...font(32, 40, "heavy", "white"),
  },
  container: {
    paddingVertical: rem(50),
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    objectFit: "contain",
  },
  clouds: {
    textAlign: "center",
    ...font(14, 16, "bold", "gray"),
  },
  city_name: {
    textAlign: "center",
    ...font(46, 50, "heavy", "white"),
  },
});
