import React from 'react';
import Svg, {Path, G, Text, TSpan, Defs, Circle} from 'react-native-svg';

export const TimePin = (props: any) => {

  const {
    time = 3
  } = props;

  return (
    <Svg
      width={53}
      height={63}
      viewBox="0 0 53 63"
    >
      <Defs></Defs>
      <G data-name="Group 69357">
        <G transform="translate(-160 -404) translate(160 404)" filter="url(#a)">
          <Path
            data-name="Rectangle 4"
            transform="translate(26 29)"
            fill="#d24f90"
            d="M0 0H1V19H0z"
          />
        </G>
        <G transform="translate(-160 -404) translate(160 404)" filter="url(#b)">
          <G
            data-name="Ellipse 1229"
            transform="translate(24 46)"
            fill="#fff"
            stroke="#d24f90"
            strokeWidth={1.5}
          >
            <Circle cx={2.5} cy={2.5} r={2.5} stroke="none" />
            <Circle cx={2.5} cy={2.5} r={1.75} fill="none" />
          </G>
        </G>
        <G transform="translate(-160 -404) translate(160 404)" filter="url(#c)">
          <G data-name="Path 58672" fill="#fff">
            <Path
              d="M17.5 34c-4.407 0-8.55-1.716-11.667-4.833A16.392 16.392 0 011 17.5c0-4.407 1.716-8.55 4.833-11.667A16.392 16.392 0 0117.5 1c4.407 0 8.55 1.716 11.667 4.833A16.392 16.392 0 0134 17.5c0 4.407-1.716 8.55-4.833 11.667A16.392 16.392 0 0117.5 34z"
              transform="translate(9 6)"
            />
            <Path
              d="M17.5 2C13.36 2 9.467 3.612 6.54 6.54A15.398 15.398 0 002 17.5c0 4.14 1.612 8.033 4.54 10.96A15.398 15.398 0 0017.5 33c4.14 0 8.033-1.612 10.96-4.54A15.398 15.398 0 0033 17.5c0-4.14-1.612-8.033-4.54-10.96A15.398 15.398 0 0017.5 2m0-2C27.165 0 35 7.835 35 17.5S27.165 35 17.5 35 0 27.165 0 17.5 7.835 0 17.5 0z"
              fill="#d24f90"
              transform="translate(9 6)"
            />
          </G>
        </G>
        <Text
          transform="translate(-160 -404) translate(187 426)"
          fill="#535353"
          fontSize={14}
          fontFamily="Poppins-SemiBold, Poppins"
          fontWeight={600}
        >
          <TSpan x={-6} y={0}>
            {time}
          </TSpan>
          <TSpan
            fontSize={10}
            fontFamily="Poppins-Regular, Poppins"
            fontWeight={400}
          >
            <TSpan x={-9} y={10}>
              {"min"}
            </TSpan>
          </TSpan>
        </Text>
      </G>
    </Svg>
  );
};