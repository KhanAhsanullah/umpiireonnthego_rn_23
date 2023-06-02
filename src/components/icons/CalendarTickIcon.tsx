import React from 'react';
import Svg, {Path, G} from 'react-native-svg';

export const CalendarTickIcon = (props: any) => {

  const {
    color = '#999b9f',
    stroke = 1.5
  } = props;

  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" {...props}>
      <G
        fill="none"
        stroke={ color }
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path
          d="M564 190v3"
          strokeWidth={ stroke }
          transform="translate(-556 -188)"
        />
        <Path
          data-name="Vector"
          d="M572 190v3M559.5 197.09h17"
          strokeWidth={ stroke }
          transform="translate(-556 -188)"
        />
        <G strokeWidth={ stroke }>
          <Path
            data-name="Vector"
            d="M578 207a3.921 3.921 0 01-.58 2.06A3.97 3.97 0 01574 211a3.905 3.905 0 01-2.63-1 3.593 3.593 0 01-.79-.94A3.921 3.921 0 01570 207a4 4 0 018 0z"
            transform="translate(-556 -188)"
          />
          <Path
            data-name="Vector"
            d="M572.44 207l.99.99 2.13-1.97"
            transform="translate(-556 -188)"
          />
        </G>
        <Path
          data-name="Vector"
          d="M577 196.5v7.86a4 4 0 00-7 2.64 3.921 3.921 0 00.58 2.06 3.593 3.593 0 00.79.94H564c-3.5 0-5-2-5-5v-8.5c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5z"
          strokeWidth={ stroke }
          transform="translate(-556 -188)"
        />
        <Path
          data-name="Vector"
          d="M567.996 201.7h.005M564.295 201.7h.005M564.295 204.7h.005"
          strokeWidth={2}
          transform="translate(-556 -188)"
        />
      </G>
    </Svg>
  )
};