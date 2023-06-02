import React from 'react';
import Svg, { Path, G } from 'react-native-svg';

export const CategoryIcon = (props: any) => {

  const {
    color = '#999b9f',
    stroke = 1.5
  } = props;

  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={22}
      height={22}
      viewBox="0 0 22 22"
      {...props}
    >
      <Path
        d="M9.533 0h-8.8A.733.733 0 000 .733v8.8a.733.733 0 00.733.733h8.8a.733.733 0 00.733-.733v-8.8A.733.733 0 009.533 0zM8.8 8.8H1.467V1.467H8.8zm8.067 1.467a5.133 5.133 0 10-3.63-1.5 5.133 5.133 0 003.63 1.5zm0-8.8a3.667 3.667 0 11-2.593 1.074 3.667 3.667 0 012.593-1.074zM9.533 11.733h-8.8a.733.733 0 00-.733.734v8.8A.733.733 0 00.733 22h8.8a.733.733 0 00.733-.733v-8.8a.733.733 0 00-.733-.733zm-.733 8.8H1.467V13.2H8.8zm12.467-8.8h-8.8a.733.733 0 00-.733.733v8.8a.733.733 0 00.733.733h8.8a.733.733 0 00.733-.732v-8.8a.733.733 0 00-.733-.733zm-.733 8.8H13.2V13.2h7.333z"
        fill={color}
      />
    </Svg>
  )
};