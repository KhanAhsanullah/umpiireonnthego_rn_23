import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import { COLORS, IMAGES } from '../../constants';
import { Button, Header, Typography } from '../../components/atoms';
import SafeAreaContainer from '../../containers/SafeAreaContainer';
import { commonStyles } from '../../style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconIonic from 'react-native-vector-icons/Ionicons';
import IconMat from 'react-native-vector-icons/MaterialIcons';
import IconFont from 'react-native-vector-icons/FontAwesome';
import IconFont5 from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';
import { navigate } from '../../navigation/RootNavigation';
import { useSelector } from 'react-redux';
const UmpireDetails = (props: any) => {
	const HomeCard = () => {
		const umpireList = useSelector((state: any) => state.AppReducer.umpireList);
		console.log('umpireList', umpireList);
		const user_data = umpireList[0].request_belongs_to_user
		const game_data = umpireList[0].request_belongs_to_game
		return (
			<View style={styles.registerView}>
				<LinearGradient
					colors={['#495BC1', '#BF2011']}
					style={styles.cardStyle}
				>
					<View style={styles.profileImg}>
						<Image
							source={IMAGES.Vector1}
							style={{ width: 80, height: 80, }}
							resizeMode='cover'
						/>
					</View>
					<Typography size={20} color='#fff' style={{ alignSelf: 'center', marginVertical: 10, }}>{user_data?.first_name}</Typography>
					<Typography size={20} color='#fff' style={{ alignSelf: 'center', }}>{user_data?.last_name}</Typography>
					<View style={[commonStyles.lineBar, { width: "100%", marginVertical: 20 }]} />
					<View style={commonStyles.flexJustRowAlign}>
						<View>
							<View style={{ flexDirection: "row", alignItems: "center" }}>
								<Icon name="calendar-month" color={COLORS.white} size={20} />
								<Typography color='#fff' style={{ marginLeft: 10 }}>EMAIL :</Typography>
							</View>
							<Typography color='#fff' size={12} style={{ marginLeft: 30 }}>{user_data?.email}</Typography>
						</View>
						<View>
							<View>
								<View style={{ flexDirection: "row", alignItems: "center" }}>
									<IconMat name="sports-soccer" color={COLORS.white} size={20} />
									<Typography color='#fff' style={{ marginLeft: 10 }}>Games :</Typography>
								</View>
								<Typography color='#fff' size={12} style={{ marginLeft: 30 }}>{game_data?.title}</Typography>
							</View>
						</View>
					</View>

					<View style={[commonStyles.flexJustRowAlign, { marginVertical: 20 }]}>
						<View>
							<View style={{ flexDirection: "row", alignItems: "center" }}>
								<Icon name="map-marker-radius" color={COLORS.white} size={20} />
								<Typography color='#fff' style={{ marginLeft: 10 }}>ADDRESS :</Typography>
							</View>
							<Typography color='#fff' size={12} style={{ marginLeft: 30 }}>{user_data?.address}</Typography>
						</View>

						<View>
							<View>
								<View style={{ flexDirection: "row", alignItems: "center" }}>
									<IconFont name="user-circle" color={COLORS.white} size={20} />
									<Typography color='#fff' style={{ marginLeft: 10 }}>Gender :</Typography>
								</View>
								<Typography color='#fff' size={12} style={{ marginLeft: 30 }}>{user_data?.gender}</Typography>
							</View>
						</View>
					</View>
					<View style={[commonStyles.flexJustRowAlign, { marginVertical: 20 }]}>
						<View>
							<View style={{ flexDirection: "row", alignItems: "center" }}>
								<IconFont5 name="award" color={COLORS.white} size={20} />
								<Typography color='#fff' style={{ marginLeft: 10 }}>EXPERINCE :</Typography>
							</View>
							<Typography color='#fff' size={12} style={{ marginLeft: 30 }}>{user_data?.experience || "15 years of experience"}</Typography>
						</View>
					</View>

					<View style={[commonStyles.flexJustRowAlign, { marginVertical: 20 }]}>
						<View>
							<View style={{ flexDirection: "row", alignItems: "center" }}>
								<IconIonic name="information-circle" color={COLORS.white} size={20} />
								<Typography color='#fff' style={{ marginLeft: 10 }}>DETAILS :</Typography>
							</View>
							<Typography color='#fff' size={12} style={{ marginLeft: 30 }}>{game_data?.details}</Typography>
						</View>
					</View>
					<View style={{ marginVertical: 20 }}>
						<Button label={'ACCEPT REQUEST'} onPress={() => { navigate('Mission') }} backgroundColor={COLORS.primary} borderRadius={10} />
						<Button label={'REJECT REQUEST'} onPress={() => { navigate('Applicant') }} backgroundColor={COLORS.primary} borderRadius={10} />
					</View>
				</LinearGradient>
			</View>
		);
	};
	return (
		<SafeAreaContainer safeArea={false}>
			<ScrollView style={styles.container}>
				<View style={[commonStyles.headerView, styles.subContainer]}>
					{/* <HomeHeader /> */}
					<Header
						titleText='Umpire’s request'
						titleColor={COLORS.black}
					/>
				</View>
				<HomeCard />
			</ScrollView>
		</SafeAreaContainer>
	);
};

const HomeHeader = (props: any) => {
	return (
		<View style={styles.headerStyle}>
			<TouchableOpacity style={styles.headerBkStyle}>
				<IconIonic name='menu' size={22} color={COLORS.primary} />
			</TouchableOpacity>
			<View />
			<Typography color={COLORS.black} size={20} >
				Umpire’s request
			</Typography>
			<TouchableOpacity
				onPress={() => navigate('AssignGame')}
				style={styles.headerBkStyle}>
				<Icon name="playlist-edit" color={COLORS.primary} size={20} />
			</TouchableOpacity>
		</View>
	);
};

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
		justifyContent: "center",
		alignItems: 'center'
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
	profileImg: {
		marginTop: -80,
		alignSelf: "center",
		borderRadius: 30,
		width: 130,
		height: 130,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: "#fff",
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.11,
		shadowRadius: 4,
		elevation: 4,
	},
});
export default UmpireDetails;

