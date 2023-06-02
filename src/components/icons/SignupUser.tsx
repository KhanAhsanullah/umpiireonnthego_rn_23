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

export const SignupUser = (props: any) => {

  return (
    <Svg
      width={38}
      height={38}
      viewBox="0 0 34 34"
    >
      <Defs>
        <LinearGradient
          id="a"
          x1={0.485}
          y1={-0.871}
          x2={0.483}
          y2={1.729}
          gradientUnits="objectBoundingBox"
        >
          <Stop offset={0} stopColor="#00b2dd" />
          <Stop offset={0.386} stopColor="#20c9f2" />
          <Stop offset={1} stopColor="#00b2dd" />
        </LinearGradient>
      </Defs>
      <G transform="translate(-15.391 -38.646)">
        <Rect
          data-name="Rectangle 1950"
          width={34}
          height={34}
          rx={8}
          transform="translate(15.391 38.646)"
          fill="url(#a)"
        />
        <G
          data-name="user"
          transform="translate(21.391 44)"
          fill="none"
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
        >
          <Path
            data-name="Path 7444"
            d="M18.222 19v-1.777a3.556 3.556 0 00-3.555-3.556H7.556A3.556 3.556 0 004 17.223v1.778"
          />
          <Circle
            data-name="Ellipse 97"
            cx={3.556}
            cy={3.556}
            r={3.556}
            transform="translate(7.556 3)"
          />
        </G>
      </G>
    </Svg>
  )
}

export default SignupUser
