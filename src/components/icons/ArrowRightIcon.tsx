import React from 'react';
import Svg, { Path, G, Rect } from 'react-native-svg';
import { COLORS } from '../../constants';

export const ArrowRightIcon = (props: any) => {

  const {
    color = '#999b9f',
    stroke = 1.25,
    width = 20,
    height = 20
  } = props;

  return (

    <Svg
      data-name="Group 71135"
      xmlns="http://www.w3.org/2000/svg"
      width={38}
      height={38}
      viewBox="0 0 38 38"
      {...props}
      style={{
        transform: [{ rotate: '180deg' }]
      }}

    >
      <G data-name="Rectangle 42" fill="#fff" stroke={COLORS.primary} strokeWidth={1}>
        <Rect width={38} height={38} rx={19} stroke="none" />
        <Rect x={0.5} y={0.5} width={37} height={37} rx={18.5} fill="none" />
      </G>
      <Path
        data-name="Path 57371"
        d="M25.333 19H12.667l3.224-3.224V19"
        fill={COLORS.primary}
        stroke={COLORS.primary}
        strokeWidth={2}
      />
    </Svg>

  )
};