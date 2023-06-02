import React from 'react';
import Svg, { Path, G } from 'react-native-svg';

export const ProfileIcon = (props: any) => {

  const {
    active = false,
    stroke,
    width = 24,
    height = 24,
    fill
  } = props;

  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
    >
      <G
        fill="none"
        stroke={active ? "#6a59e2" : "#8292bb"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={stroke}
      >
        <Path
          d="M125 195a5 5 0 11-5-5 5 5 0 015 5z"
          transform="translate(-108 -188)"
          fill={fill}
        />
        <Path
          data-name="Vector"
          d="M128.59 210c0-3.87-3.85-7-8.59-7s-8.59 3.13-8.59 7"
          transform="translate(-108 -188)"
          fill={fill}
        />
      </G>
    </Svg>
  )
};