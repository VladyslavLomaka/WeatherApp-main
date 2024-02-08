import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { memo } from "react";
import { rem } from "../../utils/rn-units";
import { COLORS } from "../../constants/colors";

export const Fahrenheit = memo(
  ({ width = rem(26), height = rem(26) }: SvgProps) => (
    <Svg viewBox={`0 0 ${rem(32)} ${rem(32)}`} width={width} height={height}>
      <Path
        fill={COLORS.white}
        d="M26 11V9H15v18h2v-8h8v-2h-8v-6h9zM8 13a4 4 0 1 1 4-4 4.012 4.012 0 0 1-4 4Zm0-6a2 2 0 1 0 2 2 2.006 2.006 0 0 0-2-2Z"
      />
    </Svg>
  )
);
