import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import { COLORS, IMAGES } from '../../constants';
import { Button, Header, Typography } from '../../components/atoms';
import SafeAreaContainer from '../../containers/SafeAreaContainer';
import { commonStyles } from '../../style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFont from 'react-native-vector-icons/FontAwesome';
import IconIonic from 'react-native-vector-icons/Ionicons';
import IconMat from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import { navigate } from '../../navigation/RootNavigation';
import { useSelector } from 'react-redux';
import { navigateById } from '../../store/services/AppServices';
const CardDetails = (props: any) => {
	const id = props?.route?.params?._id
	const [radioTab, setRadioTab] = useState('Details');
	const cardData = useSelector((state: any) => state.AppReducer.cardData.data);
	console.log('cardData ==>', cardData);
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
									<Typography color={txtColor} size={16}>
										{item.title}
									</Typography>
								</TouchableOpacity>
							}

						</>

					);
				})}
			</View>
		);
	}
	useEffect(() => {
		navigateById(id)
	}, []);
	return (
		<SafeAreaContainer safeArea={false}>
			<ScrollView style={styles.container}>
				<View style={[commonStyles.headerView, styles.subContainer]}>
					<Header
						titleText={'asd'}
						titleColor={COLORS.black}
					/>
				</View>
				<View style={[commonStyles.cardWithShadow, { marginTop: -20 }]}>
					<LocationTabPicker />
				</View>
				<HomeCard cardData={cardData} />
			</ScrollView>
		</SafeAreaContainer>
	);
};

const HomeCard = ({ cardData }: any) => {
	console.log('itemCheck', cardData);

	return (
		<View style={styles.registerView}>
			<LinearGradient
				colors={['#495BC1', '#BF2011']}
				style={styles.cardStyle}>
				<View style={[commonStyles.flexJustRowAlign,]}>
					<View style={{ flexDirection: "row" }}>
						<View style={styles.leftViewBox}>
							<Image
								source={IMAGES.Umpire}
								style={{ width: 25, height: 25 }}
								resizeMode='cover'
							/>
						</View>
						<View style={{ marginLeft: 10 }}>
							<Typography color='#fff' size={18}>{cardData?.title}</Typography>
							<Typography size={12} color='#fff'>{cardData?.city || 'Abu Dhabi | Abu Dhabi city'}</Typography>
						</View>
					</View>
					<View style={{ alignItems: "center" }}>
						<Image
							source={IMAGES.Vector3}
							style={{ width: 25, height: 25, marginBottom: 10 }}
							resizeMode='contain'
						/>
						<Typography color='#fff'>12 - 18</Typography>
					</View>
				</View>
				<View style={[commonStyles.lineBar, { width: "100%", marginVertical: 20 }]} />
				<View style={commonStyles.flexJustRowAlign}>
					<View>
						<View style={{ flexDirection: "row", alignItems: "center" }}>
							<Icon name="calendar-month" color={COLORS.white} size={20} />
							<Typography color='#fff' style={{ marginLeft: 10 }}>DATE :</Typography>
						</View>
						<Typography color='#fff' size={10} style={{ marginLeft: 30 }}>Sun 30 Aug 2023 | 11:46 am</Typography>
					</View>


					<View>
						<View>
							<View style={{ flexDirection: "row", alignItems: "center", }}>
								<IconMat name="sports-soccer" color={COLORS.white} size={20} />
								<Typography color='#fff' style={{ marginLeft: 10 }}>SPORT :</Typography>
							</View>
							<Typography color='#fff' size={10} style={{ marginLeft: 30 }}>Baseball</Typography>
						</View>
					</View>
				</View>

				<View style={[commonStyles.flexJustRowAlign, { marginVertical: 20 }]}>
					<View>
						<View style={{ flexDirection: "row", alignItems: "center" }}>
							<Icon name="map-marker-radius" color={COLORS.white} size={20} />
							<Typography color='#fff' style={{ marginLeft: 10 }}>ADDRESS :</Typography>
						</View>
						<Typography color='#fff' size={10} style={{ marginLeft: 30, }}>New York Avenue Arlington{'\n'}TX, USA</Typography>
					</View>

					<View>
						<View>
							<View style={{ flexDirection: "row", alignItems: "center" }}>
								<IconFont name="user-circle" color={COLORS.white} size={20} />
								<Typography color='#fff' style={{ marginLeft: 10 }}>POST BY :</Typography>
							</View>
							<Typography color='#fff' size={10} style={{ marginLeft: 30 }}>James Nonat</Typography>
						</View>
					</View>
				</View>

				<View style={[commonStyles.flexJustRowAlign, { marginVertical: 20 }]}>
					<View>
						<View style={{ flexDirection: "row", alignItems: "center" }}>
							<IconIonic name="information-circle" color={COLORS.white} size={20} />
							<Typography color='#fff' style={{ marginLeft: 10 }}>Detail :</Typography>
						</View>
						<Typography color='#fff' size={10} style={{ marginLeft: 30 }}>{cardData?.details}</Typography>
					</View>
				</View>
				<View style={{ marginVertical: 20 }}>
					<Button label={'JOIN THIS GAME'} onPress={() => { navigate('Applicant') }} backgroundColor={COLORS.primary} borderRadius={10} />
				</View>
			</LinearGradient >
		</View >
	);
};

const tabView = [
	{
		id: 1,
		title: 'Details',
		type: true
	},
	{
		id: 2,
		title: 'Applicants',
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
	},
	headerBkStyle: {
		padding: 5,
		borderRadius: 10,
		backgroundColor: COLORS.bkColor,
		justifyContent: "center",
		alignItems: 'center'
	},
	tabBar: {
		top: -20,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-evenly",
	},
	registerView: {
		flex: 1,
		margin: 20,
		borderRadius: 20
	},
	cardStyle: {
		borderRadius: 15,
		padding: 10,
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
		marginTop: 0,
		marginHorizontal: 20,
		flexDirection: 'row',
		justifyContent: "center",
		alignItems: 'center',
	},
	tab: {
		marginHorizontal: 30,
		alignItems: 'center',
	},
});
export default CardDetails;

