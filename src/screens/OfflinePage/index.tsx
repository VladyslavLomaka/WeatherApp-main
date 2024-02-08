import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { ScreenWrapper } from "../../components/ScreenWrapper";
import {
  useNetInfo,
  useNetInfoInstance,
} from "@react-native-community/netinfo";
import { COLORS } from "../../constants/colors";
import { rem } from "../../utils/rn-units";
import { font } from "../../utils/styles";

export const OfflineScreen = () => {
  const { refresh } = useNetInfoInstance();
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <Text style={styles.title}>
          Ooops!{"\t\n"}Seems like you are currently offline:(
        </Text>
        <Image
          style={styles.img}
          source={require("../../assets/images/logo.png")}
        />
        <TouchableOpacity onPress={refresh}>
          <View style={styles.btn}>
            <Text style={styles.btn_text}>Refresh</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  img: {
    width: rem(280),
    height: rem(280),
    objectFit: "contain",
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
    padding: rem(24),
  },
  title: {
    ...font(36, 46, "heavy", "white"),
  },
  btn_text: {
    textAlign: "center",
    ...font(18, 20, "heavy", "white"),
  },
  btn: {
    alignItems: "center",
    justifyContent: "center",
    padding: rem(16),
    width: "100%",
    backgroundColor: COLORS.blue,
    borderRadius: rem(300),
  },
});
