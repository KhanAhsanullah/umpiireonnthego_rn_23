// import React from 'react';
// import { View, StyleSheet, TouchableOpacity, Image, Platform } from 'react-native';
// import { COLORS, FONTSIZE, IMAGES, headerHeight, screenWidth } from '../../constants';
// import { Typography } from './Typography';
// import { NotificationIcon } from '../icons/NotificationIcon';
// import { useSelector } from 'react-redux';
// import { selectUser } from '../../store/selectors/userSelector';
// import { ArrowLeftIcon } from '../icons/ArrowLeftIcon';
// import { navigate, onBack } from '../../navigation/RootNavigation';
// import { commonStyles } from '../../style';
// import LinearGradient from 'react-native-linear-gradient';

// type Props = {
// 	title?: string;
// 	titleContent?: string;
// 	backBtn?: boolean;
// 	rightIcons?: JSX.Element;
// 	fixed?: boolean;
// 	notificationBtn?: boolean;
// 	textColor?: string
// };

// export const MainHeader = (props: Props) => {
// 	const user = useSelector(selectUser);

// 	const {
// 		title,
// 		fixed = true,
// 		backBtn = false,
// 		notificationBtn = true,
// 		rightIcons = null,
// 		textColor = '#000',
// 		style = {},
// 	}: any = props;

// 	return (
// 		<LinearGradient
// 			colors={['#e1dcf8', '#d6c4ec', '#f3dae8']}
// 			useAngle={true}
// 			angle={90}
// 			style={[
// 				styles.header,
// 				style,
// 				fixed ? { zIndex: 5 } : {}
// 			]}>
// 			<View style={styles.headerContent}>
// 				<View
// 					style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
// 					{backBtn && (
// 						<TouchableOpacity style={styles.leftSideStyle} onPress={() => onBack()}>
// 							<ArrowLeftIcon color={COLORS.primary} />
// 						</TouchableOpacity>
// 					)}
// 				</View>

// 				<View style={{ flex: 5, justifyContent: 'center', alignItems: 'center' }}>
// 					{title && (
// 						<Typography textType='regular' size={FONTSIZE.L} color={textColor}>
// 							{title}
// 						</Typography>
// 					)}
// 				</View>

// 				<View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}>
// 					{rightIcons && rightIcons}
// 				</View>
// 			</View>
// 		</LinearGradient>
// 	);
// };

// const styles = StyleSheet.create({
// 	header: {
// 		height: headerHeight + (Platform.OS == 'ios' ? 50 : 50),
// 		width: screenWidth(100),
// 		paddingHorizontal: 20,
// 		justifyContent: 'flex-end',
// 		paddingBottom: 15,
// 	},
// 	headerContent: {
// 		flexDirection: 'row',
// 		justifyContent: 'space-between',
// 		alignItems: 'center',
// 	},
// 	leftSideStyle: {
// 		justifyContent: "center",
// 		alignItems: "center",
// 		borderColor: "#6A59E2",
// 		borderWidth: 1,
// 		borderRadius: 20,
// 		width: 40,
// 		height: 40,
// 	},
// 	notificationIcon: {
// 		flexDirection: 'row',
// 		justifyContent: 'center',
// 		alignItems: 'center',
// 		backgroundColor: COLORS.primary,
// 		width: 35,
// 		height: 35,
// 		borderRadius: 8,
// 	},
// 	bubble: {
// 		position: 'absolute',
// 		backgroundColor: '#FFCB42',
// 		width: 16,
// 		height: 16,
// 		borderRadius: 10,
// 		alignItems: 'center',
// 		top: -10,
// 		right: -10,
// 	}
// });
