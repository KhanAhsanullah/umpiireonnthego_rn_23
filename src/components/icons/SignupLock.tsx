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

export const SignupLock = (props: any) => {

  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={38}
      height={38}
      viewBox="0 0 34 34"
      {...props}
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
          transform="translate(22.392 45)"
          fill="none"
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
        >
          <Rect
            data-name="Rectangle 5378"
            width={14.4}
            height={8.8}
            rx={1}
            transform="translate(3 9.2)"
          />
          <Path data-name="Path 49207" d="M6.2 9.2V6a4 4 0 018 0v3.2" />
        </G>
      </G>
    </Svg>
  )
}

export default SignupLock
