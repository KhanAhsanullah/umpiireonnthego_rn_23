import React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import { COLORS } from '../../constants';

export const CartIcon = (props: any) => {

  const {
    color = '#999b9f',
    stroke = 1.5
  } = props;

  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={21.412}
      height={24}
      viewBox="0 0 21.412 24"
      {...props}
    >
      <G
        data-name="Group 16"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={stroke}
      >
        <Path
          d="M180.809 770.769a.791.791 0 00-.572.248.866.866 0 00-.237.6v11.421a2.945 2.945 0 002.831 2.962h13.75a2.886 2.886 0 002.831-2.9v-11.485a.866.866 0 00-.237-.6.791.791 0 00-.572-.248zm4.044 0v-1.692a5.2 5.2 0 011.421-3.59 4.747 4.747 0 013.432-1.487h0a4.747 4.747 0 013.432 1.487 5.2 5.2 0 011.421 3.59v1.692"
          transform="translate(-179 -763)"
          fill={"none"}
        />
        <Path
          data-name="Vector"
          d="M184.853 773.308v.846a5.2 5.2 0 001.421 3.59 4.7 4.7 0 006.863 0 5.2 5.2 0 001.422-3.59v-.846"
          transform="translate(-179 -763)"
        />
      </G>
    </Svg>
  );
};