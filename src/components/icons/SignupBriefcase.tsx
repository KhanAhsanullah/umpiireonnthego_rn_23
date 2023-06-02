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

export const SignupBriefcase = (props: any) => {

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
          fill="none"
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          data-name="vuesax/linear/briefcase"
        >
          <Path
            d="M6.666 18.333h6.667c3.35 0 3.95-1.342 4.125-2.975l.625-6.667C18.308 6.658 17.725 5 14.166 5H5.833C2.274 5 1.691 6.658 1.916 8.692l.625 6.667c.175 1.633.775 2.974 4.125 2.974z"
            transform="translate(-85.608 -143) translate(108 188)"
          />
          <Path
            data-name="Vector"
            d="M6.667 5v-.666c0-1.475 0-2.667 2.667-2.667h1.333c2.667 0 2.667 1.192 2.667 2.667v.667M11.666 10.833v.85c0 .908-.008 1.65-1.667 1.65s-1.666-.733-1.666-1.641v-.859c0-.833 0-.833.833-.833h1.667c.833 0 .833 0 .833.833zM18.042 9.167a13.737 13.737 0 01-6.375 2.517M2.183 9.392a13.569 13.569 0 006.15 2.3"
            transform="translate(-85.608 -143) translate(108 188)"
          />
        </G>
        <G data-name="vuesax/linear/briefcase">
          <G
            data-name="briefcase"
            fill="none"
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
          >
            <Path
              data-name="Vector"
              d="M6.666 18.333h6.667c3.35 0 3.95-1.342 4.125-2.975l.625-6.667C18.308 6.658 17.725 5 14.166 5H5.833C2.274 5 1.691 6.658 1.916 8.692l.625 6.667c.175 1.633.775 2.974 4.125 2.974z"
              transform="translate(-85.608 -143) translate(108 188)"
            />
            <Path
              data-name="Vector"
              d="M6.667 5v-.666c0-1.475 0-2.667 2.667-2.667h1.333c2.667 0 2.667 1.192 2.667 2.667v.667M11.666 10.833v.85c0 .908-.008 1.65-1.667 1.65s-1.666-.733-1.666-1.641v-.859c0-.833 0-.833.833-.833h1.667c.833 0 .833 0 .833.833zM18.042 9.167a13.737 13.737 0 01-6.375 2.517M2.183 9.392a13.569 13.569 0 006.15 2.3"
              transform="translate(-85.608 -143) translate(108 188)"
            />
          </G>
        </G>
      </G>
    </Svg>
  )
}

export default SignupBriefcase
