import { StyleSheet } from 'react-native';
import { COLORS, screenHeight, screenWidth } from './constants';

export const commonStyles = StyleSheet.create({
	flexRowAlign: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	flexJustRowAlign: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	boxShadow: {
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 5,
		},
		shadowOpacity: 0.2,
		shadowRadius: 4,
		elevation: 4,
	},
	cardWithShadow: {
		backgroundColor: 'white',
		borderRadius: 10,
		marginVertical: 10,
		marginHorizontal: 20,
		padding: 10,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.11,
		shadowRadius: 4,
		elevation: 4,
	},
	// PAID & UNPAID DOT
	dotView: {
		width: 5,
		height: 5,
		borderRadius: 5,
		marginRight: 5,
	},
	// COMMON INPUTTEXT & INPUTVIEW STYLES
	inputView: {
		padding: 5,
		flexDirection: 'row',
		alignItems: 'center',
		borderWidth: 1.5,
		borderColor: COLORS.lightGray,
		borderRadius: 5,
	},
	iconView: {
		marginRight: 10,
		borderRadius: 8,
		width: 40,
		height: 40,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: COLORS.secondary,
	},
	// NOTIFICATON POP CARD
	popupCard: {
		width: '90%',
		maxWidth: 400,
		backgroundColor: '#fff',
		position: 'absolute',
		zIndex: 999,
		alignSelf: 'center',
		borderRadius: 10,
		padding: 15,
		borderWidth: 2,
		borderColor: COLORS.secondary,
	},
	chatBtn: {
		height: 35,
		width: 35,
		backgroundColor: COLORS.secondary,
		borderRadius: 25,
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'flex-end',
	},
	separator: {
		width: '100%',
		height: 1,
		backgroundColor: COLORS.lightGray,
		opacity: 0.8,
		marginVertical: 10,
	},
	unreadBadge: {
		backgroundColor: COLORS.danger,
		width: 20,
		height: 20,
		borderRadius: 10,
		position: 'absolute',
		justifyContent: 'center',
		alignItems: 'center',
		top: -5,
		right: -5,
	},
	justifyContentBetween: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	// Modal Styling
	centerView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
	},
	modalStyle: {
		alignItems: 'center',
		borderRadius: 10,
		backgroundColor: COLORS.white,
		width: screenWidth(90),
		padding: 30,
	},
	lineBar: {
		width: '100%',
		borderWidth: 0.5,
		borderColor: COLORS.lightGray,
	},
	// Header
	headerView: {
		backgroundColor: COLORS.white,
		paddingHorizontal: 20,
		paddingTop: 30,
		borderBottomLeftRadius: 20,
		borderBottomRightRadius: 20,
	},

	// Footer
	bottomBar: {
		borderBottomLeftRadius: 20,
		borderBottomRightRadius: 20,
		width: '100%',
		height: 60,
		borderWidth: 1,
		justifyContent: 'center',
		alignItems: "center"
	},
});
