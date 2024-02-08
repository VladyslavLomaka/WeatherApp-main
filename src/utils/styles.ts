import { WithSafeAreaInsetsProps } from "react-native-safe-area-context";

import { rem } from "./rn-units";
import { COLORS } from "../constants/colors";
import { FONTS, FontFamily, FontWeight } from "../constants/fonts";

export const font = (
  fontSize: number,
  lineHeight?: number | null,
  fontWeight: FontWeight = "regular",
  color: keyof typeof COLORS = "white",
  fontFamily: FontFamily = "primary"
) => {
  return {
    fontSize: rem(fontSize),
    lineHeight: lineHeight != null ? rem(lineHeight) : undefined,
    fontFamily: FONTS[fontFamily][fontWeight],
    color: COLORS[color],
  };
};

export const makeSafeGap = ({
  top,
  bottom,
}: WithSafeAreaInsetsProps["insets"]) => ({
  paddingTop: rem(top),
  paddingBottom: rem(bottom),
});
