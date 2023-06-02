import React from 'react';
import Svg, {Path, G, Text, TSpan, Defs, Circle} from 'react-native-svg';

export const HomePin = (props: any) => {
  const {} = props;

  return (
    <Svg
      width={103}
      height={103}
      viewBox="0 0 103 103">
      <Defs></Defs>
      <G data-name="Group 69358">
        <G filter="url(#a)" transform="translate(-135 -402) translate(135 402)">
          <G data-name="Path 2" fill="#d24f90" opacity={0.3}>
            <Path
              d="M27.5 54.5a26.91 26.91 0 01-19.092-7.908A26.91 26.91 0 01.5 27.5 26.91 26.91 0 018.408 8.408 26.91 26.91 0 0127.5.5a26.91 26.91 0 0119.092 7.908A26.91 26.91 0 0154.5 27.5a26.91 26.91 0 01-7.908 19.092A26.91 26.91 0 0127.5 54.5z"
              transform="translate(24 24)"
            />
            <Path
              d="M27.5 1A26.413 26.413 0 008.762 8.762 26.413 26.413 0 001 27.5a26.413 26.413 0 007.762 18.738A26.413 26.413 0 0027.5 54a26.413 26.413 0 0018.738-7.762A26.413 26.413 0 0054 27.5a26.413 26.413 0 00-7.762-18.738A26.413 26.413 0 0027.5 1m0-1C42.688 0 55 12.312 55 27.5S42.688 55 27.5 55 0 42.688 0 27.5 12.312 0 27.5 0z"
              fill="#fff"
              transform="translate(24 24)"
            />
          </G>
        </G>
        <G filter="url(#b)" transform="translate(-135 -402) translate(135 402)">
          <G data-name="Path 3" fill="#d24f90">
            <Path
              d="M5.5 10.25C2.88 10.25.75 8.12.75 5.5S2.88.75 5.5.75s4.75 2.13 4.75 4.75-2.13 4.75-4.75 4.75z"
              transform="translate(46 46)"
            />
            <Path
              d="M5.5 1.5c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4m0-1.5a5.5 5.5 0 110 11 5.5 5.5 0 010-11z"
              fill="#fff"
              transform="translate(46 46)"
            />
          </G>
        </G>
      </G>
    </Svg>
  );
};
