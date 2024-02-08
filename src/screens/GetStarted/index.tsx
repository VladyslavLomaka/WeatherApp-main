import { NavigationProp, useNavigation } from "@react-navigation/native";
import React, { useCallback } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { ArrowRight } from "../../assets/icons/ArrowRight";
import { ScreenWrapper } from "../../components/ScreenWrapper";
import { COLORS } from "../../constants/colors";
import { RootRouterParamList } from "../../navigation/Router";
import { rem } from "../../utils/rn-units";
import { font } from "../../utils/styles";

export const GetStarted = () => {
  const { navigate } = useNavigation<NavigationProp<RootRouterParamList>>();
  const scale = useSharedValue(1);

  const handlePress = useCallback(() => {
    scale.value = withSpring(0.8, { velocity: 1 }, () => {
      scale.value = withSpring(1, {}, () => {
        runOnJS<[string], void>(navigate)("SearchPage");
      });
    });
  }, []);

  const animatedClick = useAnimatedStyle(
    () => ({
      transform: [{ scale: scale.value }],
    }),
    [scale]
  );

  return (
    <ScreenWrapper>
      <View style={styles.wrapper}>
        <Image
          source={require("../../assets/images/logo.png")}
          style={styles.logo}
        />
        <View>
          <Text style={styles.title}>Breeze</Text>
          <Text style={styles.subtitle}>Weather App</Text>
        </View>
        <Pressable onPress={handlePress}>
          <Animated.View style={[styles.btn, animatedClick]}>
            <ArrowRight width={25} height={25} />
          </Animated.View>
        </Pressable>
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: "70%",
    height: "40%",
    objectFit: "contain",
  },
  wrapper: {
    flex: 1,
    alignItems: "center",
    paddingBottom: "28%",
    paddingTop: "18%",
    justifyContent: "space-around",
  },
  btn: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: rem(26),
    width: rem(52),
    height: rem(52),
    backgroundColor: COLORS.blue,
  },
  title: {
    textAlign: "center",
    ...font(54, 60, "heavy", "white"),
  },
  subtitle: {
    textAlign: "center",
    ...font(26, 26, "regular", "gray"),
  },
});
