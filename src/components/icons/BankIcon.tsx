import React from 'react';
import Svg, {Path, G} from 'react-native-svg';

export const BankIcon = (props: any) => {

  const {
    color = '#00a7d9',
    stroke = 1.5
  } = props;

  return (
    <Svg
      width={19.229}
      height={19.231}
      viewBox="0 0 19.229 19.231"
    >
      <Path
        d="M23.949 162.6h1v5.436h-1v2.15h17.839v-2.15h-1.447V162.6h1.447v-1.81H23.949zm10.524 0h2.207v5.436h-2.207zm-5.867 0h2.207v5.436h-2.207zm0 0"
        transform="translate(-23.048 -154.742)"
        fill={color}
      />
      <Path
        d="M19.229 4.924v-.493L9.614 0 0 4.431v.493zm0 0"
        fill={color}
      />
      <Path
        transform="translate(0 16.574)"
        fill={color}
        d="M0 0H19.229V2.656H0z"
      />
    </Svg>
  );
};