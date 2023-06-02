import React, { useRef, useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Platform, } from 'react-native';
import { COLORS, screenHeight, screenWidth } from '../../constants';
import { ArrowLeftIcon } from '../../components/icons';
import Swiper from 'react-native-swiper';
import { onBack } from '../../navigation/RootNavigation';
import { useSelector } from 'react-redux';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

const PreviewScreen = () => {
	const detailData = useSelector((state: any) => state.AppReducer.detailData);
	return (
		<View style={styles.headerView}>
			<TouchableOpacity
				onPress={onBack}
				style={{ marginBottom: 100, marginTop: 50 }}>
				<FontAwesome5Icon name='times-circle' size={30} color={COLORS.white} />
			</TouchableOpacity>
			{/* <Swiper
				showsButtons={false}
				dotColor={COLORS.white}
				activeDotColor={COLORS.primary}
				dotStyle={{
					marginTop: 10,
					marginBottom: 10,
				}}>


				{detailData.hotel_image.map((i: any) => {
					console.log('i', i);
					return (
						<View style={{
							height: screenHeight(50),
							width: screenWidth(100),
							paddingHorizontal: 10,
							paddingLeft: -10,

						}}>
							<Image source={{ uri: i.image }} style={{ flex: 1, padding: 20 }} resizeMode='cover' />
						</View>
					);
				})}
			</Swiper> */}
		</View>
	);
};
export default PreviewScreen;

const styles = StyleSheet.create({
	headerView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: COLORS.black
	}
});
