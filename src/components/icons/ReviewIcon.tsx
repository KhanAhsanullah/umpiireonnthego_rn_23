import React from 'react';
import Svg, {Path, G} from 'react-native-svg';

export const ReviewIcon = (props: any) => {

  const {
    color = '#999b9f',
    stroke = 1.5
  } = props;

  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
    >
      <G
        fill="none"
        stroke={ color }
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={ stroke }
      >
        <Path
          d="M244.5 269h-.5c-4 0-6-1-6-6v-5q0-6 6-6h8q6 0 6 6v5q0 6-6 6h-.5a1.014 1.014 0 00-.8.4l-1.5 2a1.421 1.421 0 01-2.4 0l-1.5-2a1.13 1.13 0 00-.8-.4z"
          transform="translate(-236 -250)"
        />
        <Path
          data-name="Vector"
          d="M243 258h10M243 263h6"
          transform="translate(-236 -250)"
        />
      </G>
    </Svg>
  )
};