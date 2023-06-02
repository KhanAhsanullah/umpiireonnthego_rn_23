import * as React from "react"
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  G,
  Rect,
  Path,
  Circle
} from "react-native-svg"

export const ChevronDown = (props: any) => {

  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
    >
      <G data-name="Group 56907" transform="translate(-1827 -1487)">
        <Rect
          width={20}
          height={20}
          rx={10}
          transform="translate(1827 1487)"
          fill="#dc5de0"
        />
        <Path
          d="M1.5 4l2.717 2.717a.827.827 0 001.167 0L8.1 4"
          fill="none"
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          transform="translate(1832 1492)"
        />
      </G>
    </Svg>
  )
}

export default ChevronDown;
