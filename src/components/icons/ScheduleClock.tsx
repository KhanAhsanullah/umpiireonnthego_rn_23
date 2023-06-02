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

export const ScheduleClock = (props: any) => {

  return (
    <Svg
      width={36}
      height={36}
      viewBox="0 0 36 36"
    >
      <Defs>
        <LinearGradient
          id="a"
          x1={-1.325}
          y1={-0.171}
          x2={1.256}
          y2={0.712}
          gradientUnits="objectBoundingBox"
        >
          <Stop offset={0} stopColor="#00b2dd" />
          <Stop offset={0.386} stopColor="#20c9f2" />
          <Stop offset={1} stopColor="#00b2dd" />
        </LinearGradient>
      </Defs>
      <G transform="translate(-31.09 -62.089)">
        <Rect
          data-name="Rectangle 1938"
          width={36}
          height={36}
          rx={18}
          transform="translate(31.09 62.089)"
          fill="url(#a)"
        />
        <G
          fill="none"
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          data-name="vuesax/linear/clock"
        >
          <Path
            d="M18.334 10A8.333 8.333 0 1110 1.667 8.336 8.336 0 0118.334 10z"
            transform="translate(-132.91 -117.911) translate(172 188)"
          />
          <Path
            data-name="Vector"
            d="M13.092 12.65l-2.583-1.542a1.846 1.846 0 01-.817-1.433V6.258"
            transform="translate(-132.91 -117.911) translate(172 188)"
          />
        </G>
      </G>
    </Svg>
  )
}

export default ScheduleClock;
