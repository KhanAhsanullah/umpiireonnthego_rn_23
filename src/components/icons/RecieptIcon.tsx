import React from 'react';
import Svg, {Path, G} from 'react-native-svg';

export const RecieptIcon = (props: any) => {

  const {
    color = '#fff',
  } = props;

  return (
    <Svg
      width={19.806}
      height={19.806}
      viewBox="0 0 19.806 19.806"
    >
      <Path
        d="M5.554 16.257a1.45 1.45 0 012.3.124l.834 1.114a1.435 1.435 0 002.418 0l.833-1.114a1.45 1.45 0 012.3-.124c1.469 1.568 2.666 1.048 2.666-1.147v-9.3c.012-3.327-.764-4.16-3.883-4.16H6.788c-3.124 0-3.9.833-3.9 4.159v9.292c0 2.204 1.2 2.715 2.666 1.156z"
        fill="none"
        stroke={ color }
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <Path
        d="M6.682 9.078h.005"
        fill="none"
        stroke={ color }
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
      <Path
        d="M8.994 9.078h4.539"
        fill="none"
        stroke={ color }
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <Path
        d="M6.682 5.777h.005"
        fill="none"
        stroke={ color }
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
      <Path
        d="M8.994 5.777h4.539"
        fill="none"
        stroke={ color }
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </Svg>
  );
};