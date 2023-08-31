import React from 'react';
import { StyleSheet, View, TouchableOpacity, Platform } from 'react-native';
import { Typography } from '../components/atoms';
import { FONTS, COLORS } from '../constants';
import Icon from 'react-native-vector-icons/Ionicons';
import IconFont from 'react-native-vector-icons/FontAwesome';

import { commonStyles } from '../style';

const BottomTabs = (props: any) => {
	return (
		<View style={styles.tabContainer}>
			{BOTTOMTABS.map((i, index) => {
				const isActive = i.key == props.state.index;
				return (
					<TouchableOpacity style={styles.tabView} onPress={() => props.navigation.navigate(i.navigateTo)}>
						{isActive ? i.imageActive : i.image}
						<Typography color={isActive ? COLORS.primary : COLORS.halfWhite} size={10} style={{ marginTop: 5 }}>
							{i.title}
						</Typography>
					</TouchableOpacity>
				);
			})}
		</View>
	);
};

export default BottomTabs;

const styles = StyleSheet.create({
	tabContainer: {
		flexDirection: 'row',
		backgroundColor: COLORS.white,
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.2,
		shadowRadius: 4,
		elevation: 4,
	},
	tabView: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		...Platform.select({
			ios: {
				paddingBottom: 0,
				height: 80,
			},
			android: {
				paddingBottom: 0,
				height: 80,
			},
			default: {
				height: 80,
			},
		}),
	},
	tabText: {
		fontSize: 12,
		marginTop: 6,
		fontFamily: FONTS.PoppinsSemiBold,
	},
});
const BOTTOMTABS = [
	{
		key: 0,
		title: 'Home',
		navigateTo: 'Home',
		image: <Icon name="home-outline" color={COLORS.lightBlack} size={20} />,
		imageActive: <Icon name="home" color={COLORS.primary} size={20} />,
		// image: <HomeIcon fill={COLORS.secondary} />,
		// imageActive: <HomeIcon active={true} fill={COLORS.primary} />,
	},
	{
		key: 1,
		title: 'CHAT',
		navigateTo: 'Home',
		image: <Icon name="chatbox-ellipses-outline" color={COLORS.lightBlack} size={20} />,
		imageActive: <Icon name="chatbox-ellipses-outline" color={COLORS.primary} size={20} />,
	},
	{
		key: 2,
		title: 'SAVED',
		navigateTo: 'Notifications',
		image: <Icon name="heart-outline" color={COLORS.lightBlack} size={20} />,
		imageActive: <Icon name="heart" color={COLORS.primary} size={20} />,
	},
	{
		key: 3,
		title: 'PROFILE',
		navigateTo: 'DrawerScreen',
		image: <IconFont name="user-o" color={COLORS.lightBlack} size={20} />,
		imageActive: <IconFont name="user" color={COLORS.primary} size={20} />,
	},
];
