import * as React from "react";
import Svg, { SvgProps, Path, G } from "react-native-svg";
import { memo } from "react";
import { rem } from "../../utils/rn-units";

export const ArrowRight = memo(({ width = 18, height = 18 }: SvgProps) => (
  <Svg
    width={typeof width === "number" ? rem(width) : width}
    height={typeof height === "number" ? rem(height) : height}
    viewBox={`0 0 ${rem(24)} ${rem(24)}`}
  >
    <G
      fill="none"
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <Path d="m16.4 7 5.1 5-5.1 5" data-name="Right" />
      <Path d="M2.5 12h16.7" />
    </G>
  </Svg>
));
