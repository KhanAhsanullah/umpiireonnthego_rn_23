import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TextInput, Image, TouchableOpacity, FlatList, Platform } from 'react-native';
import { Typography } from '../../components/atoms';
import { COLORS, IMAGES } from '../../constants';
import SafeAreaContainer from '../../containers/SafeAreaContainer';
import Icon from 'react-native-vector-icons/Ionicons';
import IconEntypo from 'react-native-vector-icons/Entypo';
import { detailById, getHotelApi } from '../../store/services/AppServices';
import { commonStyles } from '../../style';
import { navigate } from '../../navigation/RootNavigation';
import { useSelector } from 'react-redux';
import IconAnt from 'react-native-vector-icons/AntDesign';

const Search = (props: any) => {
	const [radioTab, setRadioTab] = useState('');

	const [masterData, setMasterData] = useState([]);
	const [search, setSearch] = useState('');

	const { categories, searchFilter, coord } = useSelector((state: any) => state.AppReducer);
	console.log('searchFilter', searchFilter);

	useEffect(() => {
		if (search.length > 0) {
			getHotelApi({ name: search })
				.then((res) => {
					console.log('respose', res);
					setMasterData(res);
				})
				.catch((error) => {
					console.error(error);
				});
		} else {
			[];
		}
	}, [search]);

	const changeTab = (item: any) => {
		setRadioTab(item);
	};
	const LocationTabPicker = () => {
		return (
			<>
				<View style={[styles.locationTabStyle]}>
					{categories.map((item: any) => {
						const borderBottomColor = item.name == radioTab ? COLORS.primary : COLORS.lightGray;
						const txtColor = item.name == radioTab ? COLORS.primary : COLORS.lightGray;
						return (
							<TouchableOpacity
								style={[styles.tab, { borderBottomColor: borderBottomColor }]}
								onPress={() => {
									changeTab(item.name);
									getHotelApi({ name: search, category_id: item.id })
										.then((responseJson) => {
											console.log(responseJson, 'responseJson');
											setMasterData(responseJson);
										})
										.catch((error) => {
											console.error(error);
										});
								}}>
								<Typography textType='bold' color={txtColor} size={16}>
									{item.name}
								</Typography>
							</TouchableOpacity>
						);
					})}
				</View>
			</>
		);
	};
	const ItemView = ({ item }) => {
		console.log('item', item);
		return (
			<TouchableOpacity
				onPress={() => {
					detailById({
						id: item.id,
						lat: coord.lat,
						lng: coord.long,
					});
				}}
				style={[commonStyles.flexJustRowAlign, styles.searchFieldStyle]}>
				<View style={commonStyles.flexRowAlign}>
					<IconAnt name='clockcircleo' color={COLORS.darkGray} size={20} />
					<Typography style={{ marginLeft: 20 }} color={COLORS.black} size={16}>
						{item.name?.toUpperCase()}
					</Typography>
				</View>
				{/* <TouchableOpacity>
					<IconEntypo name='cross' color={COLORS.darkGray} size={20} />
				</TouchableOpacity> */}
			</TouchableOpacity>
		);
	};

	return (
		<SafeAreaContainer mode={'dark'} safeArea={false}>
			<View style={commonStyles.headerView}>
				<View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 5 }}>
					<Icon name='arrow-back' color={COLORS.white} size={20} onPress={() => navigate('Home')} />
					<View style={styles.searchBar}>
						<Icon name='search' color={COLORS.darkGray} size={20} style={{}} />
						<TextInput
							placeholder='Search attractions, hotels & Restuarants'
							placeholderTextColor={COLORS.darkGray}
							value={search}
							onChangeText={(text: any) => setSearch(text)}
							style={{ color: COLORS.black }}
						/>
					</View>
					<TouchableOpacity
						onPress={() => navigate('FilterScreen')}
						style={[
							styles.searchBar,
							{
								flex: 0,
								paddingVertical: Platform.OS === 'android' ? 20 : 10,
							},
						]}>
						<Image source={IMAGES.filter} style={{ width: 20, height: 20 }} resizeMode='cover' />
					</TouchableOpacity>
				</View>
			</View>
			<View style={[commonStyles.footerContainer, { padding: 20 }]}>
				<LocationTabPicker />
				<FlatList data={masterData} keyExtractor={(item, index) => index.toString()} renderItem={ItemView} />
			</View>
		</SafeAreaContainer>
	);
};

const styles = StyleSheet.create({
	lineBarStyle: {
		borderWidth: 0.3,
		borderColor: COLORS.lightGray,
		height: 0.8,
	},
	searchingStyle: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	mainSearchView: {
		paddingHorizontal: 10,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginHorizontal: 15,
		marginVertical: 10,
		borderBottomWidth: 1,
		borderColor: COLORS.lightGray,
		// paddingBottom: 15
	},
	searchBar: {
		flex: 1,
		marginVertical: 30,
		marginHorizontal: 10,
		paddingHorizontal: 15,
		paddingVertical: Platform.OS === 'android' ? 5 : 10,
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
	locationTabStyle: {
		flexDirection: 'row',
		alignItems: 'center',
		flexWrap: 'wrap',
		marginVertical: 10,
		justifyContent: 'space-between',
	},
	tab: {
		flex: 1,
		justifyContent: 'space-between',
		alignItems: 'center',
		margin: 5,
		borderBottomWidth: 1,
		borderBottomColor: COLORS.darkGray,
	},
});
export default Search;
