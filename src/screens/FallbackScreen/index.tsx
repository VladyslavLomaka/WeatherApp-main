import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../../constants/colors";

export const FallbackScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Something went wrong!{"\n"}Please restart the app.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    color: COLORS.white,
  },
  container: {
    backgroundColor: COLORS.background,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
