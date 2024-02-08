import React from "react";
import { StyleSheet } from "react-native";
import ErrorBoundary from "react-native-error-boundary";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { FallbackScreen } from "./screens/FallbackScreen";
import { Router } from "./navigation/Router";
import { useLoadFonts } from "./hooks/useLoadFonts";
import { useNetInfo } from "@react-native-community/netinfo";
import { OfflineScreen } from "./screens/OfflinePage";

export default function App() {
  const { isConnected } = useNetInfo();
  const fontHandler = useLoadFonts();

  if (!fontHandler) {
    return null;
  }

  return (
    <SafeAreaProvider onLayout={fontHandler}>
      <ErrorBoundary FallbackComponent={FallbackScreen}>
        <GestureHandlerRootView style={styles.gesture}>
          {isConnected ? <Router /> : <OfflineScreen />}
        </GestureHandlerRootView>
      </ErrorBoundary>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  gesture: { flex: 1 },
});
