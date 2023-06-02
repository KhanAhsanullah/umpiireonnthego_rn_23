import React from 'react';
import Svg, {Path, G} from 'react-native-svg';

export const TopupIcon = (props: any) => {

  const {
    color = '#dc5de0',
    stroke = 1.5
  } = props;

  return (
    <Svg
      width={18}
      height={18}
      viewBox="0 0 18 18"
    >
      <Path
        d="M1.5 6.375h8.625"
        fill="none"
        stroke={ color }
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <Path
        d="M4.5 12.375H6M7.875 12.375h3M16.5 9.025v3.06c0 2.632-.668 3.292-3.33 3.292H4.83c-2.662-.002-3.33-.662-3.33-3.294V5.918c0-2.633.668-3.293 3.33-3.293h5.3"
        fill="none"
        stroke={ color }
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <Path
        d="M12.375 4.688H16.5M14.438 6.75V2.625"
        fill="none"
        stroke={ color }
        strokeLinecap="round"
        strokeWidth={1.5}
      />
    </Svg>
  );
};