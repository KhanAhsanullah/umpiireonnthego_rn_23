import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity, Image, FlatList } from 'react-native';
import { COLORS, IMAGES, screenHeight } from '../../constants';
import { Typography } from '../../components/atoms';
import SafeAreaContainer from '../../containers/SafeAreaContainer';
import { commonStyles } from '../../style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFont from 'react-native-vector-icons/FontAwesome';
import IconIonic from 'react-native-vector-icons/Ionicons';

import LinearGradient from 'react-native-linear-gradient';
import { navigate } from '../../navigation/RootNavigation';
import { getHomeApi } from '../../store/services/AppServices';
import { useSelector } from 'react-redux';
const Home = (props: any) => {
	const homeData = useSelector((state: any) => state.AppReducer.homeData);
	console.log('homeData == >', homeData);
	useEffect(() => {
		getHomeApi()
	}, []);
	const [radioTab, setRadioTab] = useState('Open');
	const [active, setActive] = useState(homeData.active);
	const [close, setClose] = useState(homeData.close);
	const [open, setOpen] = useState(homeData.open);
	const changeTab = (item: any) => {
		setRadioTab(item);
	};
	const LocationTabPicker = () => {
		return (
			<View style={[styles.locationTabStyle]}>
				{tabView.map((item: any) => {
					const txtColor = item.title == radioTab ? COLORS.white : '#777777';
					return (
						<>
							{item.title == radioTab ?
								<LinearGradient
									colors={['#495BC1', '#BF2011']}
									style={[styles.headerBkStyle, { paddingHorizontal: 20, paddingVertical: 5, }]}>
									<TouchableOpacity
										onPress={() => { changeTab(item.title) }}
										style={[styles.tab]}
									>
										<Typography color={txtColor} size={14}>
											{item.title}
										</Typography>
									</TouchableOpacity>
								</LinearGradient>
								:
								<TouchableOpacity
									onPress={() => { changeTab(item.title) }}
									style={[styles.tab]}
								>
									<Typography color={txtColor} size={14} style={{ alignSelf: 'center', }}>
										{item.title}
									</Typography>
								</TouchableOpacity>
							}

						</>

					);
				})}
			</View>
		);
	};
	const HomeCard = ({ item }: any) => {
		console.log('item', item);
		let split = item.sport_skills.split(" ", 2)
		console.log('split', split);

		return (
			<TouchableOpacity
				onPress={() => navigate('CardDetails', {
					title: item.title,
					_id: item.id
				})}
				activeOpacity={0.9}
				style={styles.registerView}>
				<LinearGradient
					colors={['#495BC1', '#BF2011']}
					style={styles.cardStyle}>
					<View style={commonStyles.flexJustRowAlign}>
						<View style={styles.leftViewBox}>
							<Image
								source={IMAGES.Umpire}
								style={{ width: 25, height: 25 }}
								resizeMode='cover'
							/>
						</View>
						<View>
							<Typography color='#fff' size={20}>{item.title}</Typography>
							<Typography color='#fff'>{item.location}</Typography>
						</View>
						<View style={{ alignItems: "center" }}>
							<Image
								source={IMAGES.Vector3}
								style={{ width: 25, height: 25, marginBottom: 10 }}
								resizeMode='contain'
							/>
							<Typography color='#fff'>{item.player_required}</Typography>
						</View>
					</View>
					<View style={[commonStyles.lineBar, { width: "100%", marginVertical: 20 }]} />
					<Typography color='#fff'>{item.time}</Typography>
					<View style={commonStyles.flexJustRowAlign}>
						<View>
							<Typography color='#fff'>{item.sport_skills}</Typography>
						</View>
						<View>
							<Typography color='#fff'>{item.player_required}</Typography>
						</View>
					</View>
					<View style={[commonStyles.lineBar, { width: "100%", marginVertical: 20 }]} />
					<View style={commonStyles.flexJustRowAlign}>
						<View style={[styles.headerBkStyle, styles.userIcon, {
							backgroundColor: item.teamPlayer == 'Full' ? COLORS.danger : '#43B67B'
						}]}>
							<IconFont name="users" color="#fff" size={20} />
							<Typography style={{ marginLeft: 10, }} color="#fff">{item.player_required
							}</Typography>
						</View>

						<TouchableOpacity onPress={() => navigate('AssignGame', {
							title: "Edit Game"
						})} style={commonStyles.flexRowAlign}>
							<Icon name="playlist-edit" color="#fff" size={20} />
							<Typography color="#fff" style={{ marginLeft: 10, }}>Edit Info</Typography>
						</TouchableOpacity>
					</View>
				</LinearGradient>
			</TouchableOpacity>
		);
	};
	return (
		<SafeAreaContainer safeArea={false}>
			<ScrollView style={styles.container}>
				<View style={[commonStyles.headerView, styles.subContainer]}>
					<HomeHeader />
				</View>
				<View style={[commonStyles.cardWithShadow, { marginTop: -20 }]}>
					<LocationTabPicker />
				</View>
				<FlatList
					data={radioTab == 'Open' ? homeData.open :
						radioTab == 'Closed' ? homeData.close :
							homeData.active
					}
					renderItem={(i) => HomeCard(i)}
					ListEmptyComponent={() => {
						return (
							<View style={{ height: screenHeight(40), alignItems: 'center', justifyContent: 'center' }}>
								<Typography textType='light' size={16} color={COLORS.darkGray}>
									No Record Found
								</Typography>
							</View>
						);
					}}
				/>
			</ScrollView>
		</SafeAreaContainer>
	);
};

const HomeHeader = () => {
	return (
		<View style={styles.headerStyle}>
			<TouchableOpacity onPress={() => navigate('DrawerScreen')} style={styles.headerBkStyle}>
				<IconIonic name='menu' size={26} color={COLORS.primary} />
			</TouchableOpacity>
			<Typography color={COLORS.black} size={22} >
				Games
			</Typography>
			<TouchableOpacity
				onPress={() => navigate('AssignGame',
					{
						title: "Assign Game"
					}
				)}
				style={styles.headerBkStyle}>
				<Typography color={COLORS.primary}>+ Assign</Typography>
			</TouchableOpacity>
		</View>
	);
};

const tabView = [
	{
		id: 1,
		title: 'Open',
		type: true
	},
	{
		id: 2,
		title: 'Active',
		type: false

	},
	{
		id: 3,
		title: 'Closed',
		type: false

	},
]
const CARD_DATA = [
	{
		id: 1,
		title: "INTERMEDIATE B",
		address: 'Abu Dhabi | Abu Dhabi city',
		date: 'January 3 to March 27, 2021',
		teamPlayer: "11 / 13",
		type: true
	},
	{
		id: 2,
		title: "INTERMEDIATE B",
		address: 'Abu Dhabi | Abu Dhabi city',
		date: 'January 3 to March 27, 2021',
		teamPlayer: "Full",
		type: true
	},
	{
		id: 3,
		title: "INTERMEDIATE B",
		address: 'Abu Dhabi | Abu Dhabi city',
		date: 'January 3 to March 27, 2021',
		teamPlayer: "Full",
		type: false
	},

]
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.secondary
	},
	subContainer: {
		paddingVertical: 50,
	},
	headerStyle: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		marginVertical: 20
	},
	headerBkStyle: {
		padding: 5,
		borderRadius: 10,
		backgroundColor: COLORS.bkColor,
		// justifyContent: "center",
		// alignItems: 'center'
	},
	tabBar: {
		top: -20,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	registerView: {
		flex: 1,
		margin: 20,
		borderRadius: 20
	},
	cardStyle: {
		borderRadius: 15,
		padding: 20,
		borderWidth: 1,
	},
	leftViewBox: {
		justifyContent: "center",
		alignItems: "center",
		width: 50,
		height: 50,
		borderRadius: 10,
		backgroundColor: "#fff"
	},
	userIcon: {
		paddingHorizontal: 20,
		backgroundColor: "red",
		flexDirection: 'row',
		alignItems: "center",
	},
	locationTabStyle: {
		flexDirection: 'row',
		alignItems: 'center',
		// flexWrap: 'wrap',
		justifyContent: 'space-evenly',
	},
	tab: {
		justifyContent: 'space-between',
		alignItems: 'center',
	},
});
export default Home;




