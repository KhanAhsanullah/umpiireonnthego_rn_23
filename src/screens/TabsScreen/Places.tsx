import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, TouchableOpacity, StyleSheet, Image, View } from 'react-native';
import { COLORS, IMAGES, screenWidth } from '../../constants';
import { navigate, reset } from '../../navigation/RootNavigation';
import { Typography } from '../../components/atoms';
import SafeAreaContainer from '../../containers/SafeAreaContainer';
import MapView, { Marker } from 'react-native-maps';
import { commonStyles } from '../../style';
import Icon from 'react-native-vector-icons/Ionicons';
import IconIonic from 'react-native-vector-icons/Ionicons';
import IconMat from 'react-native-vector-icons/MaterialIcons';
import { useDispatch, useSelector } from 'react-redux';
import { detailById, getHotelApi } from '../../store/services/AppServices';
import { Linking } from 'react-native';
import { getCurrentLocation } from '../../utils/Geolocation';
import { updateAppStates } from '../../store/actions/AppActions';
import moment from 'moment';

const Places = (props: any) => {
	const dispatch = useDispatch();
	const [data, setData] = useState([]);
	const [markerData, setMarkerData] = useState([]);

	const [center, setCenter] = useState({
		latitude: 0,
		longitude: 0,
	});
	const { categories, coord } = useSelector((state: any) => state.AppReducer);

	useEffect(() => {
		getHotelApi({ lat: center.latitude, lng: center.longitude })
			.then((res) => {
				console.log({ lat: center.latitude, lng: center.longitude });

				setData(res);
			})
			.catch((err) => {
				console.log('err', err);
			});
	}, [center]);

	useEffect(() => {
		currentLocation();
	}, []);

	const [radioTab, setRadioTab] = useState(0);
	const [showCard, setShowCard] = React.useState(false);

	const { width, height } = Dimensions.get('window');
	const DELTA = 0.0062 * 8;
	const ASPECT_RATIO = width / height;

	const SearchBar = () => {
		return (
			<View style={styles.searchBarStyle}>
				<TouchableOpacity onPress={() => navigate('SearchScreen')} style={styles.searchBar}>
					<Typography color={COLORS.lightGray} style={{ flex: 1 }}>
						Search hotels & Restaurants
					</Typography>
					<Icon name='search' color={COLORS.darkGray} size={20} />
				</TouchableOpacity>
				<TouchableOpacity onPress={() => navigate('FilterScreen')} style={[styles.searchBar, { flex: 0, marginLeft: 10 }]}>
					<Image source={IMAGES.filter} style={{ width: 20, height: 20 }} />
				</TouchableOpacity>
			</View>
		);
	};
	const MarkerIndicator = () => {
		return (
			<View style={styles.markerOuterCircle}>
				<View style={styles.markerInnerCircle} />
			</View>
		);
	};
	const currentLocation = () => {
		getCurrentLocation().then((info) => {
			setCenter({
				latitude: info.latitude || 0,
				longitude: info.longitude || 0,
			});
		});
	};
	const CurrentLocationPicker = () => {
		return (
			<TouchableOpacity style={styles.currentLocationStyle} onPress={() => currentLocation()}>
				<IconMat name='my-location' size={30} color={COLORS.primary} />
			</TouchableOpacity>
		);
	};
	const changeTab = (item: any) => {
		setRadioTab(item);
	};
	const LocationTabPicker = () => {
		return (
			<>
				<View style={[styles.locationTabStyle]}>
					{categories.map((item: any) => {
						const bgColor = item.id == radioTab ? COLORS.primary : COLORS.white;
						const txtColor = item.id == radioTab ? COLORS.white : COLORS.lightGray;
						return (
							<TouchableOpacity
								style={[styles.tab, { backgroundColor: bgColor }]}
								onPress={() => {
									changeTab(item.id);
									setShowCard(false);
									getHotelApi({ category_id: item.id })
										.then((res) => {
											console.log(res, 'res');
											setData(res);
										})
										.catch((error) => {
											console.error(error);
										});
								}}>
								<View style={{ flexDirection: 'row', alignItems: 'center' }}>
									<Image
										source={{ uri: item.icon }}
										style={{ tintColor: txtColor, width: 10, height: 10, alignSelf: 'center' }}
										resizeMode='cover'
									/>
									<Typography textType='light' color={txtColor} style={{ marginLeft: 5 }} size={14}>
										{item.name}
									</Typography>
								</View>
							</TouchableOpacity>
						);
					})}
					<TouchableOpacity
						style={[styles.tab, { backgroundColor: !radioTab ? COLORS.primary : COLORS.white }]}
						onPress={() => {
							changeTab(null);
							setShowCard(false);
							getHotelApi({})
								.then((res) => {
									console.log(res, 'res');
									setData(res);
								})
								.catch((error) => {
									console.error(error);
								});
						}}>
						<View style={{ flexDirection: 'row', alignItems: 'center' }}>
							<Typography textType='light' color={!radioTab ? COLORS.white : COLORS.lightGray} size={14}>
								All
							</Typography>
						</View>
					</TouchableOpacity>
				</View>
			</>
		);
	};

	const LocationCard = ({ val }) => {
		console.log('LocationCard', val);
		return (
			<>
				<View style={[styles.locationCardStyle, {}]}>
					<View style={{ flexDirection: 'row' }}>
						{val?.hotel_image?.length > 0 ? (
							<Image source={{ uri: val?.hotel_image[0]?.image }} style={{ width: 100, height: 100 }} />
						) : (
							<Image source={IMAGES.Filter1} style={{ width: 100, height: 100 }} />
						)}
						<View style={{ marginLeft: 20 }}>
							<Typography>{val.name}</Typography>

							<View style={[commonStyles.flexJustRowAlign, { width: '50%' }]}>
								{Array(Math.ceil(val.rating?.rating_avg || 0))
									?.fill(5)
									.map((e) => {
										return <Icon name='star' color={COLORS.rating} size={14} />;
									})}
								<View style={commonStyles.flexJustRowAlign}>
									<Typography size={14} style={{ marginLeft: 5 }}>
										{Math.ceil(val.rating?.rating_avg || 0)}
									</Typography>
									<Typography size={14} color={COLORS.lightGray} style={{ marginLeft: 5 }}>
										({val.rating?.rating_count})
									</Typography>
								</View>
							</View>
							<View style={{ flex: 1, flexDirection: 'row' }}>
								<Typography textType='semiBold' color={COLORS.black}>
									{val.name}
								</Typography>
								<Typography textType='light' color={COLORS.disable}>
									({(val.distance || 0).toFixed(2)}mi)
								</Typography>
							</View>
							<Typography textType='light' color={COLORS.darkGray} size={12}>
								{/* Open ({val.start_time}) . Closed({val.end_time}) */}
								Open ({moment(val.start_time, ['HH:mm']).format('hh:mm A')}) . Closed (
								{moment(val.end_time, ['HH:mm']).format('hh:mm A')})
							</Typography>
						</View>
					</View>

					<View style={[commonStyles.flexJustRowAlign, { marginRight: 30 }]}>
						<TouchableOpacity
							onPress={() => {
								dispatch(
									updateAppStates({
										detailData: val,
									})
								);
								detailById({
									id: val.id,
									lat: coord.lat,
									lng: coord.long,
								});
								// navigate('FilterStoreDetail');
							}}
							style={[styles.btnStyle, { backgroundColor: COLORS.primary, borderColor: COLORS.primary, flex: 0.7 }]}>
							<View style={commonStyles.flexRowAlign}>
								<Icon name='eye' size={16} color='#fff' />
								<Typography style={{ marginLeft: 10 }} color='#fff'>
									View Details
								</Typography>
							</View>
						</TouchableOpacity>

						<TouchableOpacity
							onPress={() => {
								Linking.openURL(`tel:${val.phone}`);
							}}
							style={[styles.btnStyle, { marginLeft: 10, flex: 0.5 }]}>
							<View style={commonStyles.flexRowAlign}>
								<IconIonic name='call-outline' size={16} color={COLORS.primary} />
								<Typography style={{ marginLeft: 10 }}>Call</Typography>
							</View>
						</TouchableOpacity>

						{/* {keyword && (
							<TouchableOpacity style={styles.cancelIcon} onPress={() => setKeyword('')}>
								<FontAwesome5Icon name='times-circle' size={20} style={{ color: 'red' }} />
							</TouchableOpacity>
						)} */}
					</View>
				</View>
			</>
		);
	};

	return (
		<SafeAreaContainer safeArea={false}>
			<MapView
				style={{
					flex: 1,
				}}
				region={{
					latitudeDelta: DELTA,
					longitudeDelta: DELTA / ASPECT_RATIO,
					...center,
				}}
				initialRegion={{
					latitudeDelta: DELTA,
					longitudeDelta: DELTA / ASPECT_RATIO,
					...center,
				}}
				showsUserLocation={true}
				showsMyLocationButton={false}
				showsCompass={false}
				followsUserLocation={true}
				loadingEnabled={true}
				toolbarEnabled={false}
				zoomEnabled={true}
				rotateEnabled={true}>
				<Marker coordinate={center}>
					<TouchableOpacity style={{ flex: 1 }}>
						<MarkerIndicator />
					</TouchableOpacity>
				</Marker>
				{data.map((i: any, ind) => {
					console.log(i, 'wwee');

					return (
						<Marker
							coordinate={{
								latitude: parseFloat(i.latitude || 0),
								longitude: parseFloat(i.longitude || 0),
							}}
							key={ind}
							onPress={() => {
								setShowCard(true);
								setMarkerData(i);
							}}>
							<View style={styles.iconStyle}>
								<Image source={{ uri: i.category.icon }} style={{ width: 15, height: 15, tintColor: '#fff' }} resizeMode='cover' />
							</View>
						</Marker>
					);
				})}
			</MapView>
			<CurrentLocationPicker />
			<SearchBar />
			<LocationTabPicker />
			<View style={styles.locationCard}>{showCard ? <LocationCard val={markerData} /> : null}</View>
		</SafeAreaContainer>
	);
};

export default Places;

const styles = StyleSheet.create({
	currentLocationStyle: {
		zIndex: 999,
		position: 'absolute',
		bottom: '5%',
		right: 20,
		borderRadius: 25,
		width: 50,
		height: 50,
		backgroundColor: '#fff',
		justifyContent: 'center',
		alignItems: 'center',
		...commonStyles.boxShadow,
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
		padding: 10,
		borderRadius: 5,
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: '#fff',
		...commonStyles.boxShadow,
	},
	locationTabStyle: {
		marginHorizontal: 20,
		position: 'absolute',
		top: 100,
		flexDirection: 'row',
		flexWrap: 'wrap',
	},
	currentImg: {
		width: 30,
		height: 30,
		justifyContent: 'center',
		alignItems: 'center',
	},
	tab: {
		marginTop: 5,
		marginRight: 7,
		paddingVertical: 10,
		paddingHorizontal: 10,
		flex: 0,
	},
	markerOuterCircle: {
		width: 25,
		height: 25,
		borderRadius: 25 / 2,
		borderWidth: 5,
		borderColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#fff',
	},
	markerInnerCircle: {
		width: 20,
		height: 20,
		borderRadius: 20 / 2,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: COLORS.primary,
	},
	locationCardStyle: {
		margin: 20,
		position: 'absolute',
		bottom: 10,
		padding: 10,
		height: 200,
		width: screenWidth(90),
		backgroundColor: '#fff',
		borderRadius: 10,
	},
	btnStyle: {
		flex: 1,
		marginVertical: 20,
		marginBottom: 20,
		padding: 10,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 30,
		borderWidth: 1,
	},
	tabBar: {
		borderColor: COLORS.lightGray,
		flexDirection: 'row',
		marginTop: 20,
	},
	tabsStyle: {
		borderColor: COLORS.primary,
		paddingHorizontal: 15,
		paddingVertical: 5,
		borderTopRightRadius: 5,
		borderTopLeftRadius: 5,
	},
	locationCard: {
		position: 'absolute',
		zIndex: 99,
		width: '100%',
		height: 200,
		bottom: 0,
	},
	iconStyle: {
		width: 30,
		height: 30,
		borderRadius: 15,
		backgroundColor: COLORS.primary,
		justifyContent: 'center',
		alignItems: 'center',
	},
	cancelIcon: {
		backgroundColor: 'red',
		flex: 1,
	},
});
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
		title: 'Hotels',
		image: IMAGES.hotelImg,
		type: true,
		select: 'Hotel',
	},
];
