import React, { Component, useContext, useMemo, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { COLORS, FONTS, IMAGES } from '../../constants';
import { commonStyles } from '../../style';
import { Typography } from './Typography';

const MapTabList = (props) => {
	const { data = [], onSelect = () => {}, selected = 0, leftIcon = false } = props;

	return (
		<>
			{data.map((item, i) => (
				<View style={[styles.searchBar, styles.tab]}>
					<TouchableOpacity
						key={item.id}
						style={[styles.tab, selected == i ? styles.activeTabText : styles.tabText]}
						onPress={() => onSelect(i)}>
						{leftIcon && (
							<TouchableOpacity onPress={() => onBack()} style={{ flex: 1 }}>
								<Image source={leftIcon} style={{ width: 10, height: 10, alignSelf: 'center' }} resizeMode='cover' />
								{/* <IonIcon name={leftIcon} size={20} color={leftIconColor} /> */}
							</TouchableOpacity>
						)}

						{/* <Image source={i.image} style={{ width: 10, height: 10, alignSelf: 'center' }} resizeMode='cover' /> */}
						<Typography color={selected == i ? COLORS.primary : '#6D6D6D'}>{item.label}</Typography>
					</TouchableOpacity>
				</View>
			))}
		</>
	);
};

const styles = StyleSheet.create({
	tab: {
		// marginHorizontal: 3,
		marginVertical: 10,
		borderRadius: 8,
		paddingVertical: 5,
		alignItems: 'center',
		flex: 1,
	},
	tabView: {
		flexDirection: 'row',
		justifyContent: 'center',
		paddingHorizontal: 10,
	},
	activeTabText: {
		color: COLORS.white,
		borderBottomWidth: 1,
		borderColor: COLORS.primary,
	},
	tabText: {
		color: COLORS.text,
		fontFamily: FONTS.SFProTextRegular,
	},
	searchBarStyle: {
		flex: 1,
		position: 'absolute',
		top: 20,
		flexDirection: 'row',
		margin: 20,
	},
	searchBar: {
		flex: 1,
		padding: 5,
		borderRadius: 10,
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: '#fff',
		...commonStyles.boxShadow,
	},
});

export default MapTabList;
const FILTER_TAB = [
	{
		id: 1,
		title: 'All',
		image: IMAGES.restaurantImg,
		type: false,
		select: 'All',
	},
	{
		id: 2,
		title: 'Restaurants',
		image: IMAGES.restaurantImg,
		type: true,
		select: 'Restaurants',
	},
	{
		id: 3,
		title: 'Attractions',
		image: IMAGES.attractionImg,
		type: true,
		select: 'Attractions',
	},
	{
		id: 4,
		title: 'Hotel',
		image: IMAGES.hotelImg,
		type: true,
		select: 'Hotel',
	},
];
