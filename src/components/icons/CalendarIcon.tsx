import React from 'react';
import Svg, {Path, G} from 'react-native-svg';

export const CalendarIcon = (props: any) => {

  const {
    color = '#999b9f',
    stroke = 1.5,
    width = 16,
    height = 16,
  } = props;

  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
    >
      <G
        fill="none"
        stroke={ color }
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path
          d="M5.333 1.333v2"
          transform="translate(-492 -188) translate(492 188)"
        />
        <Path
          data-name="Vector"
          d="M10.667 1.333v2M2.333 6.06h11.333M14 5.666v5.667a2.99 2.99 0 01-3.333 3.333H5.333A2.99 2.99 0 012 11.333V5.666a2.99 2.99 0 013.333-3.333h5.334A2.99 2.99 0 0114 5.666z"
          transform="translate(-492 -188) translate(492 188)"
        />
        <Path
          data-name="Vector"
          d="M10.464 9h.005M10.464 11.5h.005M7.997 9h.005M7.997 11.5h.005M5.53 9h.005M5.53 11.5h.005"
          strokeWidth={ stroke }
          transform="translate(-492 -188) translate(492 188)"
        />
      </G>
    </Svg>
  )
};