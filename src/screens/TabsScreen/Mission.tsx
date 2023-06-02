import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, View, ScrollView, Image, } from 'react-native';
import { COLORS, IMAGES } from '../../constants';
import { Header, Typography } from '../../components/atoms';
import SafeAreaContainer from '../../containers/SafeAreaContainer';
import { commonStyles } from '../../style';
import LinearGradient from 'react-native-linear-gradient';
const Mission = (props: any) => {
	return (
		<SafeAreaContainer safeArea={false}>
			<ScrollView style={styles.container}>
				<View style={[commonStyles.headerView, styles.subContainer]}>
					<Header
						titleText="Mission Statement"
						titleColor={COLORS.black}
					/>
				</View>
				<HomeCard />
			</ScrollView>
		</SafeAreaContainer>
	);
};

const HomeCard = ({ item }: any) => {
	return (
		<View style={styles.registerView}>
			<LinearGradient
				colors={['#495BC1', '#BF2011']}
				style={styles.cardStyle}>
				<View style={styles.profileImg}>
					<Image
						source={IMAGES.friends}
						style={{ flex: 1 }}
						resizeMode='cover'
					/>
				</View>

				<Typography color='#fff' align='center' style={{ marginVertical: 20, }}>
					"Introducing Assignors to Umpires and Umpires to Assignors, to be sure that every ball field has umpires 	and every game is covered in America and the World"
					Umpire on the go started with 1 question, as my umpire buddies and I relaxed in the hot tub talking about our games and the plays that developed and did we get the calls right? We began discussing how short we are in the Umpire field and its true there are not enough umpires across the land. However I asked 1 question: " How many umpires do not know there are games available?"

					That question was asked, Because I had Mike Fought a 40 year umpire vetern that has learned the system and took time to help me meet Assignors. Mike was my 1st umpire on the go app. Without Mike Fought, I would of never known, Icould go to Denver and umpire for a week, Arizona or California, I could umpire just weekends and make an extra $300-1000.00 a weekend.

					With Umpire on the Go app, you will be able to find games where ever you are. Headed to Florida for Vacation, maybe driving through Georgia or Alabama, Long weekend inTexas, where ever you may be or are going you can now plan a head, meet assignors and meet umpire brotherhood.

					This APP is here to help "LET The Kids Play" Without Umpires the Games cannot go on.</Typography>
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
		width: 200,
		height: 200,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
export default Mission;

