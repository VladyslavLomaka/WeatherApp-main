import { StatusBar } from "expo-status-bar";
import React, { memo } from "react";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { COLORS } from "../../constants/colors";
import { makeSafeGap } from "../../utils/styles";

interface ScreenWrapperProps {
  children: React.ReactNode;
}

export const ScreenWrapper = memo(({ children }: ScreenWrapperProps) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, makeSafeGap(insets)]}>
      <StatusBar style="light" />
      {children}
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
});
