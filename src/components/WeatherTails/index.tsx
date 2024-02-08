import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Response } from "../../api/getWeatherByCoordinates";
import { Tail } from "../Tail";
import { rem } from "../../utils/rn-units";

const dateFormatter = new Intl.DateTimeFormat("US", {
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
});

export const WeatherTails = ({
  data,
  currentIndex,
}: {
  data: Response;
  currentIndex: number;
}) => {
  return (
    <View style={styles.container}>
      <Tail
        title="wind"
        value={data?.list[currentIndex].wind.speed}
        measure="M/S"
      />
      <Tail
        title="visibility"
        value={((data?.list[currentIndex].visibility || 0) / 1000).toFixed(1)}
        measure="KM"
      />
      <Tail
        title="humidity"
        value={data?.list[currentIndex].main.humidity}
        measure="%"
      />
      <Tail
        title="clouds"
        value={data?.list[currentIndex].clouds.all}
        measure="%"
      />
      <Tail
        title="pressure"
        value={data?.list[currentIndex].main.pressure}
        measure="hPa"
      />
      <Tail
        title="part of day"
        value={data?.list[currentIndex].sys.pod === "n" ? "Night" : "Day"}
        measure=""
      />
      <Tail
        title="sunrise"
        value={data ? dateFormatter.format(data.city.sunrise) : "..."}
        measure=""
      />
      <Tail
        title="sunset"
        value={data ? dateFormatter.format(data.city.sunset) : "..."}
        measure=""
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: rem(20),
    flexDirection: "row",
    rowGap: rem(12),
    columnGap: rem(10),
    paddingHorizontal: rem(24),
    flexWrap: "wrap",
  },
});
