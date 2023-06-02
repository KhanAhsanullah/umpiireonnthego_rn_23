import React from 'react';
import Svg, { Path, G, Rect, Defs } from 'react-native-svg';

export const AppleIcon = (props: any) => {

  const {
    color = '#999b9f',
    stroke = 1.25
  } = props;

  return (

    <Svg
      width={100}
      height={100}
      viewBox="30 30 120 120"
    >
      <G transform="translate(-126 -96) translate(126 96)" filter="url(#a)">
        <G transform="translate(66 66)" fill="#2e2e2e" stroke="#fff">
          <Rect width={50} height={50} rx={25} stroke="none" />
          <Rect x={0.5} y={0.5} width={49} height={49} rx={24.5} fill="none" />
        </G>
      </G>
      <G fill="#fff">
        <Path
          d="M15.641 12.218a5.2 5.2 0 012.483-4.379 5.368 5.368 0 00-4.206-2.275c-1.788-.183-3.493 1.054-4.4 1.054s-2.312-1.029-3.8-1A5.634 5.634 0 00.963 8.499c-2.028 3.519-.52 8.732 1.455 11.59.967 1.4 2.12 2.965 3.631 2.91 1.456-.058 2.006-.943 3.768-.943s2.256.943 3.8.915c1.568-.03 2.56-1.425 3.518-2.825a12.8 12.8 0 001.595-3.271 5.089 5.089 0 01-3.089-4.657zM12.745 3.673A5.068 5.068 0 0013.939 0a5.148 5.148 0 00-3.386 1.741A4.821 4.821 0 009.333 5.3a4.264 4.264 0 003.412-1.627z"
          transform="translate(-126 -96) translate(206.354 175.5) translate(1.282)"
        />
      </G>
    </Svg>

  )
};