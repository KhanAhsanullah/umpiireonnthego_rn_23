import React from 'react';
import Svg, {Path, G} from 'react-native-svg';

export const StarIcon = (props: any) => {

  const {
    color = '#fff',
  } = props;

  return (
    <Svg
      width={15.333}
      height={14.663}
      viewBox="0 0 15.333 14.663"
    >
      <Path
        d="M8.407 1.507l1.729 3.5a.825.825 0 00.622.452l3.867.562a.826.826 0 01.458 1.408l-2.8 2.728a.826.826 0 00-.237.731l.66 3.851a.826.826 0 01-1.2.871l-3.455-1.815a.827.827 0 00-.769 0l-3.458 1.818a.826.826 0 01-1.2-.871l.66-3.851a.826.826 0 00-.237-.731L.251 7.433a.826.826 0 01.458-1.408l3.867-.562a.825.825 0 00.624-.452l1.729-3.5a.825.825 0 011.478-.004z"
        transform="translate(-.001 -1.047)"
        fill={color}
      />
    </Svg>
  );
};