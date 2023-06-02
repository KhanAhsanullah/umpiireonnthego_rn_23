import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity, Image, FlatList } from 'react-native';
import { COLORS, IMAGES } from '../../constants';
import { Button, Typography } from '../../components/atoms';
import SafeAreaContainer from '../../containers/SafeAreaContainer';
import { commonStyles } from '../../style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconIonic from 'react-native-vector-icons/Ionicons';
import IconMat from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import { navigate } from '../../navigation/RootNavigation';
const UmpireDetails = (props: any) => {
	return (
		<SafeAreaContainer safeArea={false}>
			<ScrollView style={styles.container}>
				<View style={[commonStyles.headerView, styles.subContainer]}>
					<HomeHeader />
				</View>
				<HomeCard />
			</ScrollView>
		</SafeAreaContainer>
	);
};

const HomeHeader = (props: any) => {
	return (
		<View style={styles.headerStyle}>
			{/* <TouchableOpacity style={styles.headerBkStyle}>
				<IconIonic name='menu' size={26} color={COLORS.primary} />
			</TouchableOpacity> */}
			<View />
			<Typography color={COLORS.black} size={22} >
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
const HomeCard = ({ item }: any) => {
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
				<Typography size={20} color='#fff' style={{ alignSelf: 'center', marginVertical: 10, }}>James Balkove</Typography>
				<Typography size={20} color='#fff' style={{ alignSelf: 'center', }}>Umpire</Typography>
				<View style={[commonStyles.lineBar, { width: "100%", marginVertical: 20 }]} />
				<View style={commonStyles.flexJustRowAlign}>
					<View>
						<View style={{ flexDirection: "row", alignItems: "center" }}>
							<Icon name="calendar-month" color={COLORS.white} size={20} />
							<Typography color='#fff' style={{ marginLeft: 10 }}>EMAIL :</Typography>
						</View>
						<Typography color='#fff' size={10} style={{ marginLeft: 30 }}>info@demilonk.com</Typography>
					</View>
					<View>
						<View>
							<View style={{ flexDirection: "row", alignItems: "center" }}>
								<IconMat name="sports-soccer" color={COLORS.white} size={20} />
								<Typography color='#fff' style={{ marginLeft: 10 }}>Games :</Typography>
							</View>
							<Typography color='#fff' size={10} style={{ marginLeft: 30 }}>Baseket Ball</Typography>
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
								<Typography color='#fff' style={{ marginLeft: 10 }}>Gender :</Typography>
							</View>
							<Typography color='#fff' size={10} style={{ marginLeft: 30 }}>Male</Typography>
						</View>
					</View>
				</View>
				<View style={[commonStyles.flexJustRowAlign, { marginVertical: 20 }]}>
					<View>
						<View style={{ flexDirection: "row", alignItems: "center" }}>
							<Icon name="calendar-month" color={COLORS.white} size={20} />
							<Typography color='#fff' style={{ marginLeft: 10 }}>EXPERINCE :</Typography>
						</View>
						<Typography color='#fff' size={10} style={{ marginLeft: 30 }}>15 years of experience</Typography>
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
					<Button label={'ACCEPT REQUEST'} onPress={() => { navigate('Applicant') }} backgroundColor={COLORS.primary} borderRadius={10} />
					<Button label={'REJECT REQUEST'} onPress={() => { navigate('Mission') }} backgroundColor={COLORS.primary} borderRadius={10} />
				</View>
			</LinearGradient>
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

