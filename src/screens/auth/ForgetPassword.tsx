import React, { useState } from 'react';
import { View, StyleSheet, Keyboard, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import * as Validator from '../../utils/Validator';
import { Typography, InputText, Loader } from '../../components/atoms';
import { COLORS, FONTSIZE } from '../../constants';
import { ArrowRightIcon } from '../../components/icons';
import { useDispatch, useSelector } from 'react-redux';
import { selectAppState } from '../../store/selectors/appSelector';
import { PopUpToast } from '../../containers/SafeAreaContainer';
import { navigate, onBack } from '../../navigation/RootNavigation';
import { forgotApi } from '../../store/services/AuthServices';

const ForgetPassword = (props: any) => {
	const dispatch = useDispatch();
	const { toast, loader } = useSelector(selectAppState);
	const [errors, setErrors]: any = useState({});
	const [email, setEmail] = useState('');

	const _onSubmit = () => {
		let validateData = { email };
		Validator.validate(validateData).then((err) => {
			setErrors(err);
			if (err && Object.keys(err).length) return;
			forgotApi({ email }, () => {
				console.log(email);
				props.navigation.navigate('OTPScreen', {
					paramEmail: email,
				});
			});
		});
	};

	return (
		<KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null} style={{ flex: 1, backgroundColor: 'transparent' }}>
			{loader && <Loader />}
			<View style={styles.overlay}>
				<View style={styles.container}>
					<View style={styles.lineBar} />
					{toast.show && <PopUpToast />}
					<Typography textType='bold' size={FONTSIZE.XXL} color={COLORS.black} style={{ marginTop: 30 }}>
						Enter Email
					</Typography>
					<Typography size={FONTSIZE.S} style={{ marginVertical: 20 }}>
						Enter your email for the verification process, we will send 4 digits code to your email.
					</Typography>
					<InputText
						title={'Email Address'}
						placeholder={'Enter your email address'}
						onChangeText={(text: any) => setEmail(text)}
						value={email}
						error={errors.email}
						autoCapitalize={'none'}
						keyboardType={'email-address'}
						returnKeyType={'done'}
						onSubmitEditing={() => {
							Keyboard.dismiss();
						}}
						leftIconVisibility={false}
						allowSpacing={false}
					/>
					<View
						style={{
							flexDirection: 'row',
							justifyContent: 'space-between',
							alignItems: 'center',
							marginTop: 50,
						}}>
						<TouchableOpacity onPress={() => onBack()}>
							<Typography color={COLORS.darkGray}>Back</Typography>
						</TouchableOpacity>

						<TouchableOpacity onPress={_onSubmit}>
							<ArrowRightIcon />
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</KeyboardAvoidingView>
	);
};

const styles = StyleSheet.create({
	container: {
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
		borderColor: COLORS.secondary,
		borderBottomWidth: 1,
	},
	overlay: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgba(0, 0, 0, 0.6)',
	},
});

export default ForgetPassword;
