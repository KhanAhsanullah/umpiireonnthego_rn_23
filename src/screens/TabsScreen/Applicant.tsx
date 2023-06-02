import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity, Image, FlatList } from 'react-native';
import { COLORS, IMAGES, screenHeight } from '../../constants';
import { Header, Typography } from '../../components/atoms';
import SafeAreaContainer from '../../containers/SafeAreaContainer';
import { commonStyles } from '../../style';
import LinearGradient from 'react-native-linear-gradient';
import { navigate } from '../../navigation/RootNavigation';
import Icon from "react-native-vector-icons/Ionicons";

const Applicant = (props: any) => {

	return (
		<SafeAreaContainer safeArea={false}>
			<ScrollView style={styles.container}>
				<View style={[commonStyles.headerView, styles.subContainer]}>
					<Header
						titleText="Applicants Requests"
						titleColor={COLORS.black}
					/>
				</View>

				<View style={styles.registerView}>
					<LinearGradient
						colors={['#495BC1', '#BF2011']}
						style={styles.cardStyle}>
						<FlatList
							data={CARD_DATA}
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
					</LinearGradient>
				</View>
			</ScrollView>
		</SafeAreaContainer>
	);
};

const HomeCard = ({ item }: any) => {
	return (
		<TouchableOpacity
			onPress={() => navigate('UmpireDetails', {
				title: item.title
			})}
			activeOpacity={0.9}
			style={styles.registerView}>
			<LinearGradient
				colors={['#2C2CFD', '#01026F']}
				style={styles.cardStyle}>
				<View style={commonStyles.flexJustRowAlign}>
					<View style={{ flexDirection: "row", alignItems: "center" }}>
						<View style={styles.leftViewBox}>
							<Image
								source={IMAGES.Umpire}
								style={{ width: 25, height: 25 }}
								resizeMode='cover'
							/>
						</View>
						<View style={{ marginLeft: 20 }}>
							<Typography color='#fff' size={16} textType='heading'>{item.title}</Typography>
							<Typography color='#fff' size={12}>{item.address}</Typography>
						</View>
					</View>
					<View style={{ alignItems: "flex-end" }}>
						<Typography color='#fff'>{item.date}</Typography>
						<Icon name="md-checkmark-done-sharp" size={15}

						/>
					</View>
				</View>
			</LinearGradient>
		</TouchableOpacity>
	);
};
const CARD_DATA = [
	{
		id: 1,
		title: "Kari Rasmussen",
		address: 'Head Umpire',
		date: '11/12/2021',
		teamPlayer: "11 / 13",
		type: true
	},
	{
		id: 2,
		title: "John",
		address: 'Head Umpire',
		date: '11/12/2021',
		teamPlayer: "Full",
		type: true
	},
	{
		id: 3,
		title: "Kari Smith",
		address: 'Head Umpire',
		date: '11/12/2021',
		teamPlayer: "Full",
		type: false
	},
	{
		id: 1,
		title: "William",
		address: 'Head Umpire',
		date: '11/12/2021',
		teamPlayer: "11 / 13",
		type: true
	},
	{
		id: 2,
		title: "Rasmussen",
		address: 'Head Umpire',
		date: '11/12/2021',
		teamPlayer: "Full",
		type: true
	},
	{
		id: 3,
		title: "Jon Don",
		address: 'Head Umpire',
		date: '11/12/2021',
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
		justifyContent: "space-between",
	},
	registerView: {
		flex: 1,
		marginHorizontal: 10,
		marginVertical: 10,
		borderRadius: 20
	},
	cardStyle: {
		borderRadius: 10,
		padding: 15,
	},
	leftViewBox: {
		justifyContent: "center",
		alignItems: "center",
		width: 50,
		height: 50,
		borderRadius: 25,
		backgroundColor: "#fff"
	},
});
export default Applicant;

