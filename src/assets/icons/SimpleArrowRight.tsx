import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
import { rem } from "../../utils/rn-units";
import { COLORS } from "../../constants/colors";

export const SimpleArrowRight = React.memo(
  ({ width = rem(9), height = rem(14), fill = COLORS.blue }: SvgProps) => (
    <Svg
      fill="none"
      width={width}
      height={height}
      viewBox={`0 0 ${rem(10)} ${rem(14)}`}
    >
      <Path
        fill={fill}
        d="M8.756 6.454 1.938.224A.873.873 0 0 0 1.346 0a.873.873 0 0 0-.593.224L.251.682a.721.721 0 0 0 0 1.083l5.725 5.232-5.731 5.238a.73.73 0 0 0-.245.541.73.73 0 0 0 .245.542l.502.458a.873.873 0 0 0 .592.224c.225 0 .435-.08.593-.224l6.824-6.235a.73.73 0 0 0 0-1.087Z"
      />
    </Svg>
  )
);
