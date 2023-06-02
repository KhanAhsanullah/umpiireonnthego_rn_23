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

export const SignupLocation = (props: any) => {

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
      <G transform="translate(-15.392 -38)">
        <Rect
          data-name="Rectangle 1950"
          width={34}
          height={34}
          rx={8}
          transform="translate(15.392 38)"
          fill="url(#a)"
        />
        <G
          fill="none"
          stroke="#fff"
          strokeWidth={1.5}
          data-name="vuesax/linear/location"
        >
          <Path
            d="M12.6 8.592a2.6 2.6 0 11-2.6-2.6 2.6 2.6 0 012.6 2.6z"
            transform="translate(-405.608 -143) translate(428 188)"
          />
          <Path
            data-name="Vector"
            d="M3.014 7.075C4.658-.141 15.35-.133 16.983 7.084c.958 4.233-1.675 7.817-3.983 10.033a4.328 4.328 0 01-6.008 0C4.691 14.9 2.058 11.309 3.014 7.075z"
            transform="translate(-405.608 -143) translate(428 188)"
          />
        </G>
      </G>
    </Svg>
  )
}
