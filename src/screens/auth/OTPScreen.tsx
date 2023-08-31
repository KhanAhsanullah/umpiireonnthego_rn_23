import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { Button, Loader, Typography } from '../../components/atoms';
import { COLORS, FONTSIZE } from '../../constants';
import { ArrowRightIcon } from '../../components/icons';
import { useDispatch, useSelector } from 'react-redux';
import { TimerOTP } from '../../components/atoms/TimerOTP';
import { showToast, updateAppStates } from '../../store/actions/AppActions';

import { forgetPasswordAction, verifyCodeAction } from '../../store/actions/UserActions';
import { PopUpToast } from '../../containers/SafeAreaContainer';
import { selectAppState } from '../../store/selectors/appSelector';
import { navigate, replace } from '../../navigation/RootNavigation';
import { OTPApi, loginApi } from '../../store/services/AuthServices';
import { selectUserState } from '../../store/selectors/userSelector';
import VerifyAccount from './VerifyAccount';
import store from '../../store';

const OTPScreen = (props: any) => {
	const dispatch = useDispatch();
	const { toast, loader, fcmToken } = useSelector(selectAppState);
	const [resend, setResend] = useState(false);
	const [emptyPin, setEmptyPin] = useState(false);
	const [disabled, setDisabled] = useState(true);
	const [pin, setPin]: any = useState();

	const userState = useSelector(selectUserState);
	const user_id = userState?.user.id;
	const email = userState?.user.email;
	const { whichRoute } = props.routes.params
	console.log('user_id', user_id);
	console.log('pin', pin);
	console.log('fcmToken', fcmToken);

	const _onSubmit = () => {
		OTPApi(whichRoute == 'LOGIN' ? {
			user_id: user_id,
			verification_code: pin,
			devicetoken: fcmToken
		} :
			{
				email: email,
				verification_code: pin,
				devicetoken: fcmToken
			}, whichRoute == 'LOGIN')
	}

	return (
		<KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null} style={{ flex: 1, backgroundColor: 'transparent' }}>
			{loader && <Loader />}
			<View
				style={{
					flex: 1,
					justifyContent: 'center',
					alignItems: 'center',
					backgroundColor: 'rgba(0, 0, 0, 0.6)',
				}}>
				<View style={styles.modalView}>
					<View style={styles.lineBar} />
					{toast.show && <PopUpToast />}

					<Typography textType='bold' size={FONTSIZE.XXL} color={COLORS.black} style={{ marginTop: 30 }}>
						Enter 5 Digits Code
					</Typography>

					<Typography size={FONTSIZE.S} style={{ marginVertical: 10 }}>
						Enter the 5 digits code that you received on your email.{' '}
					</Typography>

					<VerifyAccount onChange={setPin} emptyPin={emptyPin} setEmptyPin={setEmptyPin} />
					<Button
						label='Submit'
						onPress={() =>
							_onSubmit()
							// store.dispatch(updateAppStates({ is_authorized: true, }))
							// navigate('Login')
						}
					/>
					{/* <View
						style={{
							flexDirection: 'row',
							justifyContent: 'space-between',
							alignItems: 'center',
							marginVertical: 20,
							marginTop: 50,
						}}>
						<TouchableOpacity onPress={() => navigate('Login')}>
							<Typography color={COLORS.darkGray}>Back</Typography>
						</TouchableOpacity>
						<View style={{ flexDirection: 'row', alignItems: 'center' }}>
							<Typography size={12}> Didn't receive the code ?</Typography>
							{resend ? (
								<TouchableOpacity
									onPress={() => {
										dispatch(forgetPasswordAction({ ...params }, false));
										setResend(false);
										setEmptyPin(!emptyPin);
									}}>
									<Typography size={12} color={COLORS.primary} style={styles.resendStyle}>
										Resend
									</Typography>
									<View style={styles.horizentalLine} />
								</TouchableOpacity>
							) : (
								<TimerOTP onEnd={() => setResend(true)} />
							)}
						</View>
						<TouchableOpacity
							onPress={() => {
								if (pin.length == 4) {
									dispatch(
										verifyCodeAction({
											...params,
											code: pin,
										})
									);
									setDisabled(false);
									// _onSubmit();
									navigate('Home')
								}
								//  else {
								// 	dispatch(showToast(`Please enter the 5 digits code that you received on your email.`));
								// }
							}}>
							<ArrowRightIcon />
						</TouchableOpacity>
					</View> */}
				</View>
			</View>
		</KeyboardAvoidingView>
	);
};

const styles = StyleSheet.create({
	modalView: {
		bottom: 0,
		padding: 20,
		width: '100%',
		position: 'absolute',
		backgroundColor: '#fff',
		borderTopStartRadius: 20,
		borderTopEndRadius: 20,
	},
	lineBar: {
		alignSelf: 'center',
		width: '40%',
		borderWidth: 2,
		borderRadius: 10,
		top: -10,
		borderColor: COLORS.darkGray,
	},
	boxSmall: {
		width: 22,
		height: 22,
		borderRadius: 11,
		marginRight: 10,
		justifyContent: 'center',
		alignItems: 'center',
		borderColor: COLORS.primary,
	},
	radio: {
		flexDirection: 'row',
	},
	img: {
		height: 20,
		width: 20,
		marginHorizontal: 5,
	},
	radioStyling: {
		flexDirection: 'row',
		alignItems: 'center',
		marginVertical: 10,
	},
	forgotSelection: {},
	resendStyle: {
		marginLeft: 10,
	},
	horizentalLine: {
		marginTop: -2,
		width: '80%',
		marginHorizontal: 10,
		borderBottomWidth: 0.5,
		borderColor: COLORS.primary,
	},
});

export default OTPScreen;
