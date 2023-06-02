import React from 'react';
import Svg, {Path, G} from 'react-native-svg';

export const AddIcon = (props: any) => {

  const {
    color = '#fff',
    stroke = 2,
    width = 30, 
    height = 30
  } = props;

  return (
    <Svg width={width} height={height} viewBox="0 0 29 29">
      <G>
        <Path
          d="M12.083,24.167A12.083,12.083,0,1,0,0,12.083,12.119,12.119,0,0,0,12.083,24.167Z"
          transform="translate(2.417 2.417)"
          fill="none"
          stroke={color}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width={ stroke }
        />
        <Path
          d="M0,0H9.667"
          transform="translate(9.667 14.5)"
          fill="none"
          stroke={color}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width={ stroke }
        />
        <Path
          d="M0,9.667V0"
          transform="translate(14.5 9.667)"
          fill="none"
          stroke={color}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width={ stroke }
        />
        <Path d="M0,0H29V29H0Z" fill="none" opacity="0" />
      </G>
    </Svg>
  );
};