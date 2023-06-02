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

export const SignupEmail = (props: any) => {

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
      <G transform="translate(-15.391 -38)">
        <Rect
          data-name="Rectangle 1950"
          width={34}
          height={34}
          rx={8}
          transform="translate(15.391 38)"
          fill="url(#a)"
        />
        <G
          fill="none"
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
        >
          <Path
            data-name="Path 7442"
            d="M3.6 4h12.8A1.6 1.6 0 0118 5.6v9.6a1.6 1.6 0 01-1.6 1.6H3.6A1.6 1.6 0 012 15.2V5.6A1.6 1.6 0 013.6 4z"
            transform="translate(22.391 44)"
          />
          <Path
            data-name="Path 7443"
            d="M18 5.6l-8 5.6-8-5.6"
            transform="translate(22.391 44)"
          />
        </G>
      </G>
    </Svg>
  )
}

export default SignupEmail
