import React, { useState } from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Platform, Image, ScrollView, TouchableOpacity } from 'react-native';
import { COLORS, IMAGES } from '../../constants';
import SafeAreaContainer from '../../containers/SafeAreaContainer';
import { Typography, Header } from '../../components/atoms';
import LinearGradient from 'react-native-linear-gradient';
import { navigate } from '../../navigation/RootNavigation';

const SignUp = (props: any) => {
	return (
		<SafeAreaContainer>
			<ScrollView style={{ flex: 1, backgroundColor: COLORS.secondary }}>
				<KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null} style={{ flex: 1 }}>
					<View style={styles.headerView}>
						<Header
							titleColor={COLORS.black}
						/>
						<Image
							source={IMAGES.Umpire}
							style={{ width: 120, height: 120, alignSelf: "center" }}
							resizeMode='contain'
						/>
						<Typography color={COLORS.primary} style={{ alignSelf: 'center', }} size={14}>On The Go</Typography>
						<Typography textType='semiBold' style={{ alignSelf: 'center', }} size={22}>Register As</Typography>
					</View>
					{
						REGISTER_BOX.map((i) => (
							<TouchableOpacity
								onPress={() => navigate('Register')}
								activeOpacity={0.9}
								style={styles.registerView}>
								<Image
									source={i.image}
									style={{
										width: '100%',
										borderTopLeftRadius: 20,
										borderTopRightRadius: 20
									}}
									resizeMode='cover'
								/>
								{
									i.type &&
									<View style={styles.circleBar}>
										<Image
											source={i.circleImg}
											style={{ width: 25, height: 25 }}
											resizeMode='cover'
										/>
									</View>
								}

								<LinearGradient
									colors={['#495BC1', '#BF2011']}
									style={styles.bottomBar}
								>
									<Typography size={16} color='#fff' textType='semiBold'>
										{i.title}</Typography>
								</LinearGradient>
							</TouchableOpacity>
						))
					}
				</KeyboardAvoidingView>
			</ScrollView>
		</SafeAreaContainer>
	);
};

const REGISTER_BOX = [
	{
		id: 1,
		title: "UMPIRE / REFEREE",
		image: IMAGES.image1,
		circleImg: IMAGES.Umpire,
		type: true
	},
	{
		id: 2,
		title: "GAME ASSIGNER",
		image: IMAGES.image2,
		circleImg: IMAGES.Umpire,
		type: true
	},
	{
		id: 3,
		title: "BOTH",
		image: IMAGES.image1,
		type: false
	},

]
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	headerView: {
		backgroundColor: COLORS.white,
		paddingHorizontal: 20,
		paddingTop: 30,
		borderBottomLeftRadius: 20,
		borderBottomRightRadius: 20,
	},
	registerView: {
		flex: 1,
		margin: 20,
		borderRadius: 20
	},
	bottomBar: {
		borderBottomLeftRadius: 20,
		borderBottomRightRadius: 20,
		width: '100%',
		height: 60,
		borderWidth: 1,
		justifyContent: 'center',
		alignItems: "center"
	},
	circleBar: {
		justifyContent: "center",
		alignItems: "center",
		position: 'absolute',
		right: 20,
		top: 20,
		width: 50,
		height: 50,
		borderRadius: 25,
		backgroundColor: "#fff"
	}

});
export default SignUp;