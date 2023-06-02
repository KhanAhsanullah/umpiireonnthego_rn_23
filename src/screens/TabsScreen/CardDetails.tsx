import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity, Image, FlatList } from 'react-native';
import { COLORS, IMAGES, screenHeight } from '../../constants';
import { Button, Typography } from '../../components/atoms';
import SafeAreaContainer from '../../containers/SafeAreaContainer';
import { commonStyles } from '../../style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFont from 'react-native-vector-icons/FontAwesome';
import IconIonic from 'react-native-vector-icons/Ionicons';
import IconMat from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import { navigate } from '../../navigation/RootNavigation';
const CardDetails = (props: any) => {
	const [radioTab, setRadioTab] = useState('');
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
	return (
		<SafeAreaContainer safeArea={false}>
			<ScrollView style={styles.container}>
				<View style={[commonStyles.headerView, styles.subContainer]}>
					<HomeHeader />
					<LocationTabPicker />
				</View>
				<HomeCard />
			</ScrollView>
		</SafeAreaContainer>
	);
};

const HomeHeader = (props: any) => {

	return (
		<View style={styles.headerStyle}>
			<View />
			{/* <TouchableOpacity style={styles.headerBkStyle}>
				<IconIonic name='menu' size={26} color={COLORS.primary} />
			</TouchableOpacity> */}
			<Typography color={COLORS.black} size={22} >
				Intermediates B
			</Typography>
			<TouchableOpacity
				onPress={() => navigate('AssignGame')}
				style={styles.headerBkStyle}>
				<Icon name="playlist-edit" color={COLORS.primary} size={20} />
			</TouchableOpacity>
		</View>
	);
};
const HomeCard = ({ item }: any) => {
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
							<Typography color='#fff' size={18}>INTERMEDIATE B</Typography>
							<Typography size={12} color='#fff'>Abu Dhabi | Abu Dhabi city</Typography>
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
							<View style={{ flexDirection: "row", alignItems: "center" }}>
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
							<Icon name="calendar-month" color={COLORS.white} size={20} />
							<Typography color='#fff' style={{ marginLeft: 10 }}>ADDRESS :</Typography>
						</View>
						<Typography color='#fff' size={10} style={{ marginLeft: 30 }}>New York Avenue Arlington, TX, USA</Typography>
					</View>

					<View>
						<View>
							<View style={{ flexDirection: "row", alignItems: "center" }}>
								<IconMat name="sports-soccer" color={COLORS.white} size={20} />
								<Typography color='#fff' style={{ marginLeft: 10 }}>POST BY :</Typography>
							</View>
							<Typography color='#fff' size={10} style={{ marginLeft: 30 }}>James Nonat</Typography>
						</View>
					</View>
				</View>

				<View style={[commonStyles.flexJustRowAlign, { marginVertical: 20 }]}>
					<View>
						<View style={{ flexDirection: "row", alignItems: "center" }}>
							<Icon name="calendar-month" color={COLORS.white} size={20} />
							<Typography color='#fff' style={{ marginLeft: 10 }}>DETAILS :</Typography>
						</View>
						<Typography color='#fff' size={10} style={{ marginLeft: 30 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remain essentially unchanged.</Typography>
					</View>
				</View>
				<View style={{ marginVertical: 20 }}>
					<Button label={'JOIN THIS GAME'} onPress={() => { navigate('Applicant') }} backgroundColor={COLORS.primary} borderRadius={10} />
				</View>
			</LinearGradient>
		</View>
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
		marginTop: 50,
		marginHorizontal: 20,
		flexDirection: 'row',
		alignItems: 'center',
	},
	tab: {
		marginHorizontal: 30,
		alignItems: 'center',
	},
});
export default CardDetails;

