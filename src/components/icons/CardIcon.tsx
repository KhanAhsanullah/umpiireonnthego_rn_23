import React from 'react';
import Svg, {Path, G} from 'react-native-svg';

export const CardIcon = (props: any) => {

  const {
    color = '#fff',
    stroke = 1.5
  } = props;

  return (
    <Svg
      width={21.365}
      height={14.689}
      viewBox="0 0 21.365 14.689"
    >
      <G fill="#8200d3">
        <Path
          d="M0 136.012a1.337 1.337 0 001.335 1.335H20.03a1.336 1.336 0 001.335-1.335V128H0zm14.021-5.341a1.991 1.991 0 011.335.519 2 2 0 110 2.967 2 2 0 11-1.335-3.487zm-10.683 1.335h4.006a.668.668 0 010 1.335H3.338a.668.668 0 010-1.335z"
          transform="translate(-4768.73 -3167.733) translate(4768.73 3045.074)"
        />
        <Path
          d="M20.03 0H1.335A1.338 1.338 0 000 1.335v1.336h21.365V1.335A1.337 1.337 0 0020.03 0z"
          transform="translate(-4768.73 -3167.733) translate(4768.73 3167.733)"
        />
      </G>
    </Svg>
  );
};