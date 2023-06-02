import React from 'react';
import Svg, {Path, G} from 'react-native-svg';

export const BriefCaseIcon = (props: any) => {

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
          d="M116 210h8c4.02 0 4.74-1.61 4.95-3.57l.75-8c.27-2.44-.43-4.43-4.7-4.43h-10c-4.27 0-4.97 1.99-4.7 4.43l.75 8c.21 1.96.93 3.57 4.95 3.57z"
          transform="translate(-108 -188)"
        />
        <Path
          data-name="Vector"
          d="M116 194v-.8c0-1.77 0-3.2 3.2-3.2h1.6c3.2 0 3.2 1.43 3.2 3.2v.8M122 201v1.02c0 1.09-.01 1.98-2 1.98s-2-.88-2-1.97V201c0-1 0-1 1-1h2c1 0 1 0 1 1zM129.65 199a16.484 16.484 0 01-7.65 3.02M110.62 199.27a16.283 16.283 0 007.38 2.76"
          transform="translate(-108 -188)"
        />
      </G>
    </Svg>
  )
};