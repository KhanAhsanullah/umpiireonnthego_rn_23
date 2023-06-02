import React from 'react';
import Svg, { Path, G } from 'react-native-svg';

export const HistoryIcon = (props: any) => {

  const {
    active = false,
  } = props;
  
  return (
    <Svg
      width={22.213}
      height={22.219}
      viewBox="0 0 22.213 22.219"
    >
      <G data-name="Icon ionic-ios-timer" fill={ active ? "#6a59e2": "#999b9f"}>
        <Path
          data-name="Path 18090"
          d="M15.047 26.156a11.11 11.11 0 01-7.71-19.108.892.892 0 111.239 1.283 9.323 9.323 0 107.36-2.566v3.477a.894.894 0 11-1.789 0v-4.41a.894.894 0 01.894-.894 11.109 11.109 0 01.006 22.219z"
          transform="translate(-3.938 -3.938)"
        />
        <Path
          data-name="Path 18091"
          d="M12.134 11.356l5.527 3.972a1.672 1.672 0 11-1.944 2.722 1.615 1.615 0 01-.389-.389l-3.972-5.527a.557.557 0 01.778-.778z"
          transform="translate(-3.938 -3.938) translate(-1.536 -1.536)"
          fill={ active ?  "#d24f90" : "#999b9f"}
        />
      </G>
    </Svg>
  )

};