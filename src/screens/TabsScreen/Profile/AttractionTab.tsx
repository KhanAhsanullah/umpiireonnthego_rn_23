import React, { useEffect, useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo';
import { useSelector } from 'react-redux';
import { Typography } from '../../../components/atoms';
import { COLORS } from '../../../constants';
import { commonStyles } from '../../../style';

const AttractionTab = (props: any) => {
	const searchFilter = useSelector((state: any) => state.AppReducer.searchFilter);
	console.log('searchFilter', searchFilter);

	const SearchField = () => {
		return (
			<>
				{searchFilter.map((i: any) => (
					<View style={[commonStyles.flexJustRowAlign, styles.searchFieldStyle]}>
						<View style={commonStyles.flexRowAlign}>
							<IconAnt name='clockcircleo' color={COLORS.darkGray} size={20} />
							<Typography style={{ marginLeft: 20 }} size={16}>
								{i.name}
							</Typography>
						</View>
						<TouchableOpacity>
							<IconEntypo name='cross' color={COLORS.darkGray} size={20} />
						</TouchableOpacity>
					</View>
				))}
			</>
		);
	};
	return (
		<>
			<SearchField />
			<PopularSearch />
		</>
	);
};

export default AttractionTab;

const PopularSearch = () => {
	return (
		<View style={{ marginVertical: 10 }}>
			<Typography textType='semiBold' size={20} style={{ marginHorizontal: 10 }}>
				Popular Search
			</Typography>
			<View style={styles.popularTabs}>
				{POPULAR_SEARCH.map((i) => (
					<TouchableOpacity style={styles.selectBtn}>
						<Typography size={16} color={COLORS.lightGray}>
							{i.title}
						</Typography>
					</TouchableOpacity>
				))}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	searchBar: {
		flex: 1,
		margin: 20,
		paddingHorizontal: 15,
		paddingVertical: 5,
		borderRadius: 10,
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: '#fff',
		...commonStyles.boxShadow,
	},
	searchFieldStyle: {
		marginVertical: 10,
		borderBottomWidth: 1,
		borderColor: COLORS.lightGray,
		paddingBottom: 20,
	},
	popularTabs: {
		marginVertical: 10,
		// justifyContent: "space-between",
		flexWrap: 'wrap',
		flexDirection: 'row',
	},
	selectBtn: {
		marginLeft: 10,
		padding: 10,
		marginVertical: 10,
		borderWidth: 1,
		borderColor: COLORS.darkGray,
		borderRadius: 10,
	},
});
const SEARCH_FIELD = [
	{
		id: 1,
		title: 'Georgia Aquarium',
	},
	{
		id: 2,
		title: 'Dinotorium',
	},
	{
		id: 3,
		title: 'Marietta Fire Museum',
	},
];
const POPULAR_SEARCH = [
	{
		id: 1,
		title: 'Marietta Fire Museum',
	},
	{
		id: 2,
		title: 'Georgia Aquarium',
	},
	{
		id: 3,
		title: 'Stone Mountain Skyride',
	},
	{
		id: 4,
		title: 'Dinotorium',
	},
	{
		id: 5,
		title: 'Road To Tara Museum',
	},
];
