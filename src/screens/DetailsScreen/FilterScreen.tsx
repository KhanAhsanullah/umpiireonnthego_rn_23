import React, { useEffect, useState } from 'react';
import { TextInput, StyleSheet, View, ScrollView, TouchableOpacity, Image, KeyboardAvoidingView, Platform } from 'react-native';
import { COLORS, FONTS, IMAGES, screenWidth } from '../../constants';
import { Button, Header, Typography } from '../../components/atoms';
import SafeAreaContainer from '../../containers/SafeAreaContainer';
import { commonStyles } from '../../style';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import Icon from 'react-native-vector-icons/Entypo';
import { getCategoriesApi, getFilterApi } from '../../store/services/AppServices';
import { useSelector } from 'react-redux';
import { getPlaces, getPlaceDetail } from '../../utils/utils';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

const FilterScreen = (props: any) => {
	const [radioTab, setRadioTab] = useState({});
	const [selectedCategory, setSelectedCategory] = useState('');
	console.log('selectedCategory', selectedCategory);

	const [selectionTab, setSelectionTab] = useState(false);

	// const [address, setAddress] = useState('');
	const [people, setPeople] = useState('');
	const [disabled, setDisabled] = useState(true);

	const [searching, setSearching] = useState(true);
	const [predictions, setPredictions] = useState([]);
	const [keyword, setKeyword] = useState('');
	const [coord, setCoord]: any = useState(null);
	const [place, setPlace] = useState(null);
	const [range, setRange]: any = useState([]);

	const categories = useSelector((state: any) => state.AppReducer.categories);

	const changeTab = (item: any) => {
		setRadioTab(item.name);
		setSelectedCategory(item.id);
	};

	useEffect(() => {
		const delayDebounceFn = setTimeout(() => {
			console.log('place', place);
			if (keyword.length > 2 && place === null) {
				setSearching(true);
				getPlaces(keyword).then((res: any) => {
					setSearching(false);
					setPredictions(res.predictions);
				});
			}
		}, 1500);
		return () => clearTimeout(delayDebounceFn);
	}, [keyword]);

	const LocationTabPicker = () => {
		return (
			<>
				<View style={[styles.locationTabStyle]}>
					{categories.map((item: any) => {
						const bgColor = item.name == radioTab ? COLORS.primary : COLORS.white;
						const txtColor = item.name == radioTab ? COLORS.white : COLORS.lightGray;
						return (
							<TouchableOpacity
								style={[styles.tab, { backgroundColor: bgColor }]}
								onPress={() => {
									changeTab(item);
									setDisabled(false);
									// getFilterApi({ category_id: item.id, address: '' })
									//   .then((responseJson) => {
									//     console.log('responseJson', responseJson);

									//   })
									//   .catch((error) => {
									//     console.error(error);
									//   });
								}}>
								<Typography textType='bold' color={txtColor} size={14}>
									{item.name}
								</Typography>
							</TouchableOpacity>
						);
					})}
				</View>
			</>
		);
	};
	const SelectionFriendly = () => {
		return (
			<>
				<View style={[styles.locationTabStyle]}>
					{SELECTION_TAB.map((item) => {
						return (
							<View style={styles.checkBoxStyle}>
								<TouchableOpacity
									onPress={() => setSelectionTab(!selectionTab)}
									style={[styles.checkBox, { backgroundColor: selectionTab ? COLORS.primary : COLORS.white }]}>
									<Icon name='check' size={10} color={selectionTab ? COLORS.white : COLORS.lightGray} />
								</TouchableOpacity>

								<Typography size={14} style={{ marginLeft: 10 }}>
									{item.title}
								</Typography>
							</View>
						);
					})}
				</View>
			</>
		);
	};
	useEffect(() => {
		getCategoriesApi();
	}, []);

	return (
		<SafeAreaContainer safeArea={false}>
			<KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null} style={{ flex: 1 }}>
				<View style={commonStyles.headerView}>
					<Header titleText='Filter' />
				</View>
				<View style={[commonStyles.footerContainer, {}]}>
					<ScrollView showsVerticalScrollIndicator={false} style={styles.container} bounces={false}>
						<Typography textType='semiBold' size={16}>
							Select Location
						</Typography>
						<ScrollView scrollEnabled={true}>
							<LocationTabPicker />
						</ScrollView>
						<View style={styles.optionTab}>
							<TextInput
								placeholder='Enter Address Here...'
								placeholderTextColor={COLORS.black}
								style={{
									color: COLORS.black,
									fontFamily: FONTS.PoppinsRegular,
									flex: 1,
									marginRight: 10,
									paddingBottom: 10,
								}}
								value={keyword}
								onChangeText={(text) => {
									setPlace(null);
									setKeyword(text);
									setDisabled(false);
								}}
							/>
							{keyword && (
								<TouchableOpacity onPress={() => setKeyword('')}>
									<FontAwesome5Icon name='times-circle' size={20} />
								</TouchableOpacity>
							)}
						</View>
						{predictions.map((i: any) => (
							<TouchableOpacity
								onPress={() => {
									getPlaceDetail(i.place_id).then((res: any) => {
										const location = res.result?.geometry?.location;
										setPlace(i.place_id);
										setCoord({
											lat: location.lat,
											long: location.lng,
										});
										setPredictions([]);
										setKeyword(i.description);
									});
								}}
								style={{
									borderWidth: 1,
									marginVertical: 5,
									padding: 5,
									borderRadius: 5,
								}}>
								<Typography textType='light'>{i.description}</Typography>
							</TouchableOpacity>
						))}
						<View style={{ marginVertical: 50, paddingLeft: -20 }}>
							{/* <RangeBar
								onChange={(e: any) => {
									setRange(e);
								}}
							/> */}
						</View>
						<TextInput
							placeholder='No of People'
							placeholderTextColor={COLORS.black}
							keyboardType='number-pad'
							value={people}
							onChangeText={(text) => {
								setPeople(text);
								setDisabled(false);
							}}
							style={{
								borderBottomWidth: 1,
								color: COLORS.black,
								flex: 1,
								paddingBottom: 10,
							}}
						/>
						<SelectionFriendly />
						<Button
							label='Apply Filter'
							onPress={() => {
								getFilterApi({
									category_id: selectedCategory,
									address: keyword,
									people: people,
									student_friendly: selectionTab ? 'yes' : 'no',
									lat: coord?.lat || '',
									lng: coord?.long || '',
									min_miles: range[0] || '0',
									max_miles: range[1] || '100',
								}).then((res) => {
									props.navigation.navigate('SearchStore', {
										paramKey: radioTab.id,
										paramAddress: keyword,
										paramPeople: people,
										paramTab: selectionTab,
									});
								});
							}}
							disabled={disabled}
							style={{ marginBottom: 20 }}
						/>
					</ScrollView>
				</View>
			</KeyboardAvoidingView>
		</SafeAreaContainer>
	);
};
export default FilterScreen;

// const RangeBar = ({ onChange }: any) => {
// 	return (
// 		<MultiSlider
// 			isMarkersSeparated={true}
// 			sliderLength={screenWidth(80)}
// 			min={0}
// 			max={100}
// 			step={1}
// 			values={[0, 100]}
// 			containerStyle={{
// 				alignSelf: 'center',
// 			}}
// 			customLabel={(e) => {
// 				// console.log('e', e)
// 				return (
// 					<View style={styles.labelStyle}>
// 						<Typography color='#fff'>{`Miles ${e.oneMarkerValue} - ${e.twoMarkerValue}`}</Typography>
// 					</View>
// 				);
// 			}}
// 			enableLabel={true}
// 			enabledOne={true}
// 			customMarkerLeft={(e) => {
// 				return <Image source={IMAGES.DotFilter} style={{ width: 20, height: 20 }} />;
// 			}}
// 			customMarkerRight={(e) => {
// 				return <Image source={IMAGES.DotFilter} style={{ width: 20, height: 20 }} />;
// 			}}
// 			onValuesChangeFinish={onChange}
// 		/>
// 	);
// };

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingVertical: 20,
	},
	locationTabStyle: {
		flexDirection: 'row',
		alignItems: 'center',
		flexWrap: 'wrap',
		marginVertical: 20,
	},
	currentImg: {
		width: 40,
		height: 40,
		justifyContent: 'center',
		alignItems: 'center',
	},
	tab: {
		justifyContent: 'center',
		alignItems: 'center',
		marginHorizontal: 2,
		marginVertical: 15,
		marginRight: 5,
		padding: Platform.OS === 'android' ? 12 : 12,
		flex: 0,
		borderWidth: 1,
		borderColor: COLORS.darkGray,
		borderRadius: 10,
	},
	optionTab: {
		flex: 1,
		marginVertical: 20,
		borderBottomWidth: 1,
		flexDirection: 'row',
	},
	checkBox: {
		width: 14,
		height: 14,
		borderWidth: 0.5,
		borderRadius: 3,
		justifyContent: 'center',
		alignItems: 'center',
	},
	checkBoxStyle: {
		marginRight: 20,
		marginVertical: 30,
		...commonStyles.flexJustRowAlign,
	},
	labelStyle: {
		backgroundColor: COLORS.primary,
		padding: 20,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 5,
	},
});

const SELECTION_TAB = [
	{
		id: 2,
		title: 'Student Friendly',
	},
];
