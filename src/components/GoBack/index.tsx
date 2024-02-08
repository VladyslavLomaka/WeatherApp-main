import { useNavigation } from "@react-navigation/native";
import React, { memo } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { SimpleArrowRight } from "../../assets/icons/SimpleArrowRight";
import { COLORS } from "../../constants/colors";
import { rem } from "../../utils/rn-units";

interface HomeGoBackProps {
  fill?: string;
}

export const GoBack = memo(({ fill = COLORS.white }: HomeGoBackProps) => {
  const { goBack, canGoBack } = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        canGoBack() && goBack();
      }}
    >
      <View style={styles.container}>
        <SimpleArrowRight width={"100%"} fill={fill} height={"100%"} />
      </View>
    </TouchableOpacity>
  );
});
const styles = StyleSheet.create({
  container: {
    width: rem(14),
    height: rem(20),
    transform: [{ rotate: "180deg" }],
  },
});
