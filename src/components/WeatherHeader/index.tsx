import React, { memo } from "react";
import { StyleSheet, Text, View } from "react-native";
import { rem } from "../../utils/rn-units";
import { font } from "../../utils/styles";
import { GoBack } from "../GoBack";

export const WeatherHeader = memo(() => {
  return (
    <View style={styles.header}>
      <GoBack />
      <Text style={styles.title}>Air Conditions</Text>
      <View style={styles.justifier} />
    </View>
  );
});

const styles = StyleSheet.create({
  title: {
    ...font(16, 22, "bold", "gray"),
  },
  header: {
    paddingTop: rem(8),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: rem(24),
  },
  justifier: {
    width: rem(14),
  },
});
