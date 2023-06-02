import React, { useState } from 'react';
import { View, StyleSheet, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { Typography } from '../../../components/atoms';
import { IMAGES } from '../../../constants';
import SafeAreaContainer from '../../../containers/SafeAreaContainer';
import { commonStyles } from '../../../style';
import IconIonic from 'react-native-vector-icons/Ionicons';
import { navigate } from '../../../navigation/RootNavigation';
import { useSelector } from 'react-redux';
import { selectUserState } from '../../../store/selectors/userSelector';

const HeaderProfile = (props: any) => {
	const userState = useSelector(selectUserState);
	const imageFromState = userState?.user?.profile_image;
	const full_name = userState?.user?.full_name;
	const email = userState?.user?.email;
	const phone = userState?.user?.phone;

	return (
		<View style={styles.headerView}>
			<ImageBackground source={IMAGES.profileBk} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} resizeMode='cover'>
				<View
					style={{
						width: '100%',
						flexDirection: 'row',
						justifyContent: 'space-between',
						alignItems: 'center',
						padding: 20,
					}}>
					<View style={{ width: 30 }} />
					<Typography color='#fff' align='center' size={18} style={{ marginBottom: 0 }}>
						My Profile
					</Typography>
					<TouchableOpacity onPress={() => navigate('EditProfile')} style={styles.editIconStyle}>
						<Image source={IMAGES.editIcon} style={{ width: 15, height: 15 }} resizeMode='cover' />
					</TouchableOpacity>
				</View>
				<View style={styles.profileImageStyling}>
					{imageFromState == null ? (
						<Image source={IMAGES.placeHolderFace} style={{ width: 110, height: 110, borderRadius: 55 }} resizeMode='cover' />
					) : (
						<Image source={{ uri: imageFromState }} style={{ width: 110, height: 110, borderRadius: 55 }} resizeMode='cover' />
					)}
				</View>
				<Typography color='#fff' align='center' size={28} style={{}}>
					{full_name || ''}
				</Typography>
				<Typography color='#fff' align='center' size={12} style={{ borderColor: '#fff', borderBottomWidth: 1 }}>
					{email || ''}
				</Typography>
				{phone ? (
					<View style={[commonStyles.flexRowAlign, { marginVertical: 10 }]}>
						<IconIonic name='call-outline' size={16} color='#fff' />
						<Typography style={{ marginLeft: 10 }} color='#fff'>
							{phone || ''}
						</Typography>
					</View>
				) : null}
			</ImageBackground>
		</View>
	);
};

const styles = StyleSheet.create({
	headerView: {
		flex: 0.8,
	},
	editIconStyle: {
		padding: 10,
	},
	profileImg: {
		borderRadius: 55,
		borderWidth: 3,
		width: 110,
		height: 110,
		justifyContent: 'center',
		alignItems: 'center',
		borderColor: '#fff',
		marginVertical: 10,
	},
	profileImgStyle: {
		width: 100,
		height: 100,
		borderRadius: 50,
		marginVertical: 20,
	},
	profileImageStyling: {
		alignItems: 'center',
		justifyContent: 'center',
		borderWidth: 1,
		width: 120,
		height: 120,
		borderRadius: 60,
		borderColor: '#fff',
	},
});

export default HeaderProfile;
