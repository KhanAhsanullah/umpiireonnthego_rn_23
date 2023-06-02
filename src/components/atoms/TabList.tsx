import React, { Component, useContext, useMemo, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { COLORS, FONTS } from '../../constants';
import { Typography } from './Typography';

const TabList = (props: any) => {
	const { data = [], onSelect = () => { }, selected = 0 } = props;
	const categories = useSelector((state: any) => state.AppReducer.categories)
	return (
		<View style={styles.tabView}>
			{data.map((item: any, i: any) => (
				<TouchableOpacity
					key={item.id}
					style={[styles.tab, selected == i ? styles.activeTabText : styles.tabText]}
					onPress={() => onSelect(i)}>
					<Typography color={selected == i ? COLORS.primary : '#6D6D6D'}>{item.label}</Typography>
				</TouchableOpacity>
			))}
		</View>
	);
};

const styles = StyleSheet.create({
	tab: {
		marginHorizontal: 3,
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
	},
});

export default TabList;
