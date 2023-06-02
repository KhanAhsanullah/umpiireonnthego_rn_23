import React from 'react';
import Svg, { Path, G } from 'react-native-svg';

export const ArrowRight = (props: any) => {

  const {
    color = '#999b9f',
    stroke = 1.25,
    width = 14,
    height = 14
  } = props;

  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 8 8"
    >
      <Path
        d="M2.97 6.64l2.173-2.173a.662.662 0 000-.933L2.97 1.36"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={stroke}
      />
    </Svg>

  )
};