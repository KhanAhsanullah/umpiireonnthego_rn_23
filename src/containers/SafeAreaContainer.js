import React, { useEffect, useRef } from 'react';
import { StatusBar, StyleSheet, View, SafeAreaView, Platform, Image, Animated, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Loader, Typography } from '../components/atoms';
import { COLORS, IMAGES, screenHeight } from '../constants';
import { selectAppState } from '../store/selectors/appSelector';
import { commonStyles } from '../style';

export default SafeAreaContainer = (props) => {
	const { toast, loader } = useSelector(selectAppState);

	const { safeArea = true, mode = 'dark', backgroundColor = 'transparent', style = {} } = props;

	return (
		<View style={{ flex: 1, backgroundColor: '#fff' }}>
			<StatusBar translucent={true} backgroundColor={backgroundColor} barStyle={mode === 'dark' ? 'dark-content' : 'light-content'} />
			{loader && <Loader />}
			{toast.show && <PopUpToast />}
			{safeArea ? (
				<SafeAreaView style={{ flex: 1, paddingTop: Platform.OS == 'ios' ? 50 : 0 }}>{props.children}</SafeAreaView>
			) : (
				<>{props.children}</>
			)}
		</View>
	);
};

const styles = StyleSheet.create({});

export const PopUpToast = () => {
	const dispatch = useDispatch();
	const { toast } = useSelector((state) => state.AppReducer);

	const translateAnim = useRef(new Animated.Value(150)).current;
	const fadeAnim = useRef(new Animated.Value(0)).current;
	const duration = 300;

	useEffect(() => show(), []);

	const show = () => {
		Animated.parallel([
			Animated.timing(translateAnim, {
				toValue: 0,
				duration: duration,
				useNativeDriver: true,
			}).start(),
			Animated.timing(fadeAnim, {
				toValue: 1,
				duration: duration,
				useNativeDriver: true,
			}),
		]).start(({ finished }) => {
			setTimeout(() => hide(), 3000);
		});
	};

	const hide = () => {
		Animated.parallel([
			Animated.timing(translateAnim, {
				toValue: 150,
				duration: duration,
				useNativeDriver: true,
			}).start(),
			Animated.timing(fadeAnim, {
				toValue: 0,
				duration: duration,
				useNativeDriver: true,
			}),
		]).start(({ finished }) => {
			dispatch({
				type: 'SHOW_TOAST',
				toast: {
					show: false,
					title: '',
				},
			});
		});
	};

	return (
		<Animated.View
			style={{
				...commonStyles.popupCard,
				alignItems: 'center',
				bottom: 45,
				opacity: fadeAnim,
				transform: [{ translateY: translateAnim }],
				backgroundColor: COLORS.primary,
				borderColor: COLORS.primary,
			}}>
			<TouchableOpacity activeOpacity={1} onPress={() => hide()} style={{ flex: 1 }}>
				<Typography size={14} color={'#fff'} numberOfLines={3}>
					{toast.title}
				</Typography>
			</TouchableOpacity>
		</Animated.View>
	);
};
