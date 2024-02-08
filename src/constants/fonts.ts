export type FontWeight = keyof typeof FONT_WEIGHTS;

export const FONT_WEIGHTS = {
  heavy: "700",
  bold: "600",
  medium: "500",
  regular: "400",
  light: "300",
  extraLight: "200",
} as const;

export type FontFamily = "primary";

export const FONTS: {
  [font in FontFamily]: { [weight in FontWeight]: string };
} = {
  primary: {
    bold: "PingFang-Bold",
    light: "PingFang-Light",
    extraLight: "PingFang-ExtraLight",
    regular: "PingFang-Regular",
    heavy: "PingFang-Heavy",
    medium: "PingFang-Medium",
  },
};
