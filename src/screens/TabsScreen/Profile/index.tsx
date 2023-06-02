import React, { useState } from 'react';
import { View, StyleSheet, Image, ScrollView, Alert, TouchableOpacity } from 'react-native';
import { Header, Typography } from '../../../components/atoms';
import { COLORS, IMAGES } from '../../../constants';
import SafeAreaContainer from '../../../containers/SafeAreaContainer';
import { commonStyles } from '../../../style';
import HeaderProfile from './HeaderProfile';
import Icon from 'react-native-vector-icons/FontAwesome';
import { logoutApi } from '../../../store/services/AuthServices';
import FaIcon from 'react-native-vector-icons/FontAwesome';
import { notificationToggle } from '../../../store/services/AppServices';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserState } from '../../../store/selectors/userSelector';
import { updateUserStates } from '../../../store/actions/UserActions';

const Account = (props: any) => {
	const dispatch = useDispatch();
	const { user } = useSelector(selectUserState);
	const [value, setValue] = useState(user.notifications || false);

	const toggleApi = () => {
		notificationToggle({
			notifications: !value ? 1 : 0,
			_method: 'PATCH',
		}).then((res) => {
			dispatch(
				updateUserStates({
					user: { ...user, notifications: !value ? 1 : 0 },
				})
			);
		});
		setValue(!value);
	};
	const toggleBtn = () => {
		return (
			<TouchableOpacity
				onPress={() => {
					toggleApi();
				}}
				activeOpacity={0.8}>
				<FaIcon
					name='toggle-on'
					size={30}
					color={value ? COLORS.primary : COLORS.darkGray}
					style={{
						transform: [{ rotate: value ? '0deg' : '180deg' }],
					}}
				/>
			</TouchableOpacity>
		);
	};

	return (
		<SafeAreaContainer mode={'dark'} safeArea={false}>
			<View style={{ margin: 20, }}>
				<Header
					titleText='Update Profile'
					titleColor={COLORS.black}
				/>
			</View>
		</SafeAreaContainer>
	);
};

const customAlert = (props: any) => {
	Alert.alert('Logout', 'Do you want to logout?', [
		{
			text: 'Cancel',
			onPress: null,
		},
		{
			text: 'OK',
			onPress: () => logoutApi({ device_token: '' }),
		},
	]);
};

const styles = StyleSheet.create({
	profileCard: {
		borderWidth: 2,
		borderColor: '#EDEBFF',
		height: 55,
		justifyContent: 'center',
		paddingHorizontal: 15,
		borderRadius: 10,
		marginVertical: 5,
	},
});
export default Account;
const PROFILE_TAB = [
	{
		id: 1,
		leftIcon: IMAGES.privacyIcon,
		title: 'Privacy Policy',
		navigateTo: 'Privacy',
	},
	{
		id: 2,
		leftIcon: IMAGES.contactIcon,
		title: 'Contact Us',
		navigateTo: 'Contact',
	},
	{
		id: 3,
		leftIcon: IMAGES.aboutIcon,
		title: 'About Us',
		navigateTo: 'AboutUs',
	},
	{
		id: 4,
		leftIcon: IMAGES.privacyIcon,
		title: 'Change Password',
		navigateTo: 'ChangePassword',
	},
];
