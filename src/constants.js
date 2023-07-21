import { Dimensions, Platform } from 'react-native';

export const BASEURL = 'https://test-cmolds.com/umpireonthego_backend_2023/public/api/';
export const MAP_KEY = 'AIzaSyAquzgo847shlU-SpPXLZMgShv6EW9pQmw';
export const SRTIPE_PK = 'pk_test_51KxRBHEcLpIir0EoFjCv1Z3T7EAF2kPfyVXZWr6P1Y1RJi2kaow1tElS37tVxFK6qt1VK9pnmkMjAyrjW7xvKBFE00vwvkxGZD';

export const headerHeight = 50;

export const screenHeight = (percent) => {
	const windowHeight = Dimensions.get('window').height;
	return (windowHeight * percent) / 100;
};

export const screenWidth = (percent) => {
	const windowWidth = Dimensions.get('window').width;
	return (windowWidth * percent) / 100;
};

export const COLORS = {
	primary: '#6F3769',
	secondary: '#2C2CFD',
	bkColor: '#E0E0E0',

	placeholderColor: '#677294',
	rating: '#FFBC04',
	lightGray: '#959DAA',
	danger: '#FA3C48',
	text: '#677294',
	muted: '#b2b4b7',
	disable: '#989799',
	border: '#EDEBFF',

	black: '#000',
	lightBlack: '#3B4045',
	white: '#fff',
	halfWhite: '#A1A1A3',
	gray: '#e5e5e5',
	darkGray: '#999B9F',
};

export const FONTS = {
	PoppinsBold: 'Poppins-Bold',
	PoppinsSemiBold: 'Poppins-SemiBold',
	PoppinsRegular: 'Poppins-Regular',
	PoppinsMedium: 'Poppins-Medium',
	CarterOneRegular: Platform.OS == 'ios' ? 'Carter One' : 'CarterOne-Regular',
};

export const FONTSIZE = {
	XXL: 22,
	XL: 20,
	L: 18,
	M: 16,
	S: 14,
	XS: 12,
	XXS: 10,
};

export const IMAGES = {
	avatar: require('./assets/images/avatar.png'),
	SplashImg: require('./assets/images/SplashImg.png'),
	Umpire: require('./assets/images/Umpire.png'),
	image1: require('./assets/images/image1.png'),
	image2: require('./assets/images/image2.png'),
	image3: require('./assets/images/image3.png'),
	friends: require('./assets/images/friends.png'),

	Vector1: require('./assets/images/Vector1.png'),
	Vector2: require('./assets/images/Vector2.png'),
	Vector3: require('./assets/images/Vector3.png'),
	Vector4: require('./assets/images/Vector4.png'),
	VectorImg: require('./assets/images/VectorImg.png'),

	google: require('./assets/images/google.png'),
	apple: require('./assets/images/apple.png'),
	facebook: require('./assets/images/facebook.png'),

};
// export const SOCIALICONS = [
//   {
//     id: 1,
//     img: ICONS.google,
//   },
//   {
//     id: 2,
//     img: ICONS.facebook,
//   },
//   {
//     id: 3,
//     img: ICONS.apple,
//   },
// ];
