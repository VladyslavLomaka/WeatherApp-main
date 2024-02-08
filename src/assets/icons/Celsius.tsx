import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { memo } from "react";
import { rem } from "../../utils/rn-units";
import { COLORS } from "../../constants/colors";

export const Celsius = memo(
  ({ width = rem(26), height = rem(26) }: SvgProps) => (
    <Svg viewBox={`0 0 ${rem(32)} ${rem(32)}`} width={width} height={height}>
      <Path
        fill={COLORS.white}
        d="M26 27h-9a2.002 2.002 0 0 1-2-2V11a2.002 2.002 0 0 1 2-2h9v2h-9v14h9ZM8 13a4 4 0 1 1 4-4 4.012 4.012 0 0 1-4 4Zm0-6a2 2 0 1 0 2 2 2.006 2.006 0 0 0-2-2Z"
      />
    </Svg>
  )
);
