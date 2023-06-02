import React from 'react';
import Svg, { Path, G } from 'react-native-svg';

export const LocationIcon = (props: any) => {
	const { color = '#fff', stroke, width = 20, height = 20, fill } = props;

	return (
		<Svg xmlns='http://www.w3.org/2000/svg' width={16.5} height={22.012} viewBox='0 0 13.5 19.012' {...props}>
			<Path
				data-name='Icon material-location-on'
				d='M6.75.75a6 6 0 00-6 6c0 4.5 6 11.143 6 11.143s6-6.643 6-11.143a6 6 0 00-6-6zm0 8.143A2.143 2.143 0 118.893 6.75 2.144 2.144 0 016.75 8.893z'
				fill={fill}
				stroke={stroke}
				strokeWidth={1.5}
			/>
		</Svg>
	);
};
