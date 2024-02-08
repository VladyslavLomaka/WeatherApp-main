import React, { memo } from "react";
import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../../constants/colors";
import { rem } from "../../utils/rn-units";
import { font } from "../../utils/styles";

interface TailProps {
  title: string;
  value: string | number | undefined;
  measure: string;
}

export const Tail = memo(({ title, value, measure }: TailProps) => (
  <View style={styles.wrapper}>
    <Text style={styles.header}>{title}</Text>
    <Text style={styles.info}>
      {value}
      <Text style={styles.measure}> {measure}</Text>
    </Text>
  </View>
));

const styles = StyleSheet.create({
  measure: {
    ...font(14, 16, "heavy", "white"),
  },
  wrapper: {
    flexGrow: 1,
    width: "45%",
    justifyContent: "center",
    padding: rem(15),
    gap: rem(5),
    backgroundColor: COLORS.cardBackground,
    borderRadius: rem(10),
  },
  header: {
    textTransform: "uppercase",
    ...font(14, 16, "heavy", "gray"),
  },
  info: {
    height: rem(28),
    textAlignVertical: "bottom",
    ...font(24, 28, "heavy", "white"),
  },
});
