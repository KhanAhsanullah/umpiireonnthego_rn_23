import React from 'react';
import Svg, { Path, G } from 'react-native-svg';

export const HeartIcon = (props: any) => {

  const {
    color = '#999b9f',
    fill = 'none',
    stroke = 1.5,
    width = 24,
    height = 24
  } = props;

  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
    >
      <Path
        d="M248.62 208.81a2.181 2.181 0 01-1.24 0c-2.9-.99-9.38-5.12-9.38-12.12a5.574 5.574 0 015.56-5.59 5.515 5.515 0 014.44 2.24 5.547 5.547 0 0110 3.35c0 7-6.48 11.13-9.38 12.12z"
        fill={fill}
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={stroke}
        transform="translate(-236 -188)"
      />
    </Svg>
  )
};