import React, { useState } from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Platform, Keyboard, Image, TouchableOpacity, ScrollView } from 'react-native';
import { COLORS, FONTSIZE, ICONS, IMAGES } from '../../constants';
import SafeAreaContainer from '../../containers/SafeAreaContainer';
import { Button, Typography, InputText, Header } from '../../components/atoms';
import * as Validator from '../../utils/Validator';
import { SignupEmail, SignupLock } from '../../components/icons';
import { navigate, reset } from '../../navigation/RootNavigation';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { selectAppState } from '../../store/selectors/appSelector';
import { updateAppStates } from '../../store/actions/AppActions';
import store from '../../store';
import { loginApi } from '../../store/services/AuthServices';
import { getBrand, getSystemVersion, getUniqueId, getVersion } from 'react-native-device-info';

const Login = (props: any) => {
	const dispatch = useDispatch();
	const { fcmToken } = useSelector(selectAppState);
	const [errors, setErrors]: any = useState({});

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const [secureEntry, setSecureEntry] = useState(true);
	const [checkIcon, setCheckIcon] = useState(true);
	const EmailInput: any = React.createRef();
	const PasswordInput: any = React.createRef();

	const _onSignin = () => {
		let validateData = { email, password };
		Validator.validate(validateData).then(async (err) => {
			setErrors(err);
			if (err && Object.keys(err).length) return;
			loginApi({
				email,
				password,
				udid: await getUniqueId(),
				device_token: fcmToken,
				device_type: Platform.OS,
				device_brand: await getBrand(),
				device_os: await getSystemVersion(),
				app_version: await getVersion(),
			});
		});
	};
	return (
		<SafeAreaContainer>
			<KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null} style={{ flex: 1 }}>
				<ScrollView
					showsVerticalScrollIndicator={false}
					bounces={true}
					contentContainerStyle={{ paddingHorizontal: 20, paddingTop: Platform.OS === 'ios' ? 30 : 60 }}
					style={{ flex: 1 }}>
					<Header
						titleText="   Sign In"
						titleColor={COLORS.black}
						leftIcon={false}
					/>

					{
						SOCIAL_BTN.map((i: any) => (
							<>
								<TouchableOpacity style={[styles.socialBtn, {
									backgroundColor: i.type == true ? "#7583CA" : 'white',
									borderColor: i.type == true ? "#7583CA" : '#000',
								}]}>
									<Image
										source={i.image}
										style={{ width: 30, height: 30 }}
									/>
									<Typography
										style={{
											color: i.type == true ? 'white' : 'black',
										}}
									>{i.title}</Typography>
									<View />
								</TouchableOpacity>
							</>
						))
					}
					<View style={styles.inputContainer}>
						<Typography align='center' color={COLORS.halfWhite}>Or log in with email</Typography>
						<InputText
							title={'Email'}
							placeholder={'Enter your email address'}
							onChangeText={(text: string) => setEmail(text)}
							value={email}
							error={errors.email}
							autoCapitalize={'none'}
							keyboardType={'email-address'}
							returnKeyType={'done'}
							inputRef={EmailInput}
							onSubmitEditing={() => PasswordInput.current && PasswordInput.current.focus()}
							leftIconVisibility={false}
							leftIcon={<SignupEmail />}
							allowSpacing={false}
						/>
						<InputText
							title={'Password'}
							placeholder={'Enter your password'}
							onChangeText={(text: string) => setPassword(text)}
							value={password}
							error={errors.password}
							autoCapitalize={'none'}
							returnKeyType={'done'}
							secureTextEntry={secureEntry}
							inputRef={PasswordInput}
							onSubmitEditing={() => {
								Keyboard.dismiss();
							}}
							leftIconVisibility={false}
							leftIcon={<SignupLock />}
							rightIcon={
								<TouchableOpacity
									style={{ justifyContent: 'center', marginHorizontal: 8 }}
									onPress={() => setSecureEntry(!secureEntry)}>
									<Icon name={secureEntry ? 'eye-slash' : 'eye'} size={15} color={COLORS.darkGray} />
								</TouchableOpacity>
							}
						/>
						<View style={[styles.bottomView, { justifyContent: "flex-start" }]}>
							<TouchableOpacity onPress={() => setCheckIcon(!checkIcon)} style={styles.checkBox}>
								<Icon name={checkIcon ? 'check' : ''} size={15} color={COLORS.darkGray} />
							</TouchableOpacity>
							<Typography color={COLORS.black} style={{ marginLeft: 10 }}>
								I have read the&nbsp;
							</Typography>
							<TouchableOpacity onPress={() => navigate('Privacy')}>
								<Typography color={COLORS.primary} align='center'>
									Privace Policy
								</Typography>
							</TouchableOpacity>
						</View>
					</View>
					{/* <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
						<TouchableOpacity
							style={{ alignSelf: 'flex-end', flex: 1 }}
							onPress={() => {
								props.navigation.navigate('ForgetPassword');
							}}>
							<Typography size={FONTSIZE.XS} style={{}} align='right' color={COLORS.primary}>
								Forgot Password?
							</Typography>
						</TouchableOpacity>
					</View> */}
					<View style={{ marginVertical: 60 }}>
						<Button label={'Sign In'} onPress={_onSignin} backgroundColor={COLORS.primary} borderRadius={10} />
						<View style={[styles.bottomView, { marginVertical: 0 }]}>
							<Typography color={COLORS.black} align='center'>
								Don't have an account?&nbsp;
							</Typography>
							<TouchableOpacity onPress={() => reset('SignUp')}>
								<Typography color={COLORS.primary} align='center'>
									Sign Up
								</Typography>
							</TouchableOpacity>
						</View>
					</View>

				</ScrollView>
			</KeyboardAvoidingView>
		</SafeAreaContainer>
	);
};

const SOCIAL_BTN = [
	{
		id: 1,
		title: "CONTINUE WITH FACEBOOK",
		image: IMAGES.facebook,
		type: true
	},
	{
		id: 2,
		title: "CONTINUE WITH GOOGLE",
		image: IMAGES.google,
		type: false
	},
]

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	inputContainer: {
		marginTop: 40,
	},
	checkBox: {
		width: 20,
		height: 20,
		borderRadius: 5,
		borderWidth: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	socialIcon: {
		margin: 5,
		height: 30,
		width: 30,
		borderRadius: 15,
		justifyContent: 'center',
		alignItems: 'center',
	},
	bottomView: {
		flexDirection: 'row',
		marginVertical: 20,
		alignItems: 'center',
		justifyContent: 'center',
	},
	boxSmall: {
		width: 18,
		height: 18,
		borderRadius: 0,
		borderWidth: 1,
		marginRight: 10,
		justifyContent: 'center',
		alignItems: 'center',
		borderColor: COLORS.primary,
		backgroundColor: COLORS.white,
	},
	modalView: {
		bottom: 0,
		padding: 20,
		width: '100%',
		position: 'absolute',
		backgroundColor: '#fff',
		borderTopStartRadius: 20,
		borderTopEndRadius: 20,
		zIndex: 1,
	},
	socialIconStyle: {
		paddingLeft: 20,
		justifyContent: 'center',
	},
	socialBtn: {
		justifyContent: 'space-between',
		flexDirection: 'row',
		alignItems: "center",
		paddingHorizontal: 20,
		width: "100%",
		height: 50,
		borderRadius: 30,
		marginVertical: 10,
		borderWidth: 1
	}
});

export default Login;
// const socialIcon = () => {
// 	const _applelogin = async () => {
// 		const appleAuthRequestResponse = await appleAuth.performRequest({
// 			requestedOperation: appleAuth.Operation.LOGIN,
// 			// Note: it appears putting FULL_NAME first is important, see issue #293
// 			requestedScopes: [appleAuth.Scope.FULL_NAME, appleAuth.Scope.EMAIL],
// 		});

// 		// get current authentication state for user
// 		// /!\ This method must be tested on a real device. On the iOS simulator it always throws an error.
// 		const credentialState = await appleAuth.getCredentialStateForUser(
// 			appleAuthRequestResponse.user,
// 		);

// 		// use credentialState response to ensure the user is authenticated
// 		if (credentialState === appleAuth.State.AUTHORIZED) {
// 			console.log('appleAuthRequestResponse', appleAuthRequestResponse),
// 				console.log('credentialState', credentialState),
// 				socialLoginApi({
// 					full_name: `${appleAuthRequestResponse.fullName.givenName}`,
// 					email: appleAuthRequestResponse.email,
// 					social_id: appleAuthRequestResponse.authorizationCode,
// 					signup_via: 'apple',
// 				});
// 		}
// 	}
// 	return (
// 		<View style={[commonStyles.flexJustRowAlign, { alignSelf: 'center', marginTop: 0, flex: 1 }]}>
// 			<TouchableOpacity
// 				onPress={() => {
// 					googleLogin().then((res) => {
// 						console.log('googleLogin', res);
// 						socialLoginApi({
// 							full_name: `${res?.givenName} ${res?.familyName}`,
// 							email: res?.email,
// 							social_id: res.id,
// 							signup_via: 'google',
// 						});
// 					});
// 				}}
// 				style={styles.socialIconStyle}>
// 				<Image source={IMAGES.google} style={{ width: 60, height: 60, resizeMode: 'cover' }} resizeMode={'cover'} />
// 			</TouchableOpacity>

// 			<TouchableOpacity
// 				style={styles.socialIconStyle}
// 			// onPress={() => {
// 			// 	facebookLogin().then((res: any) => {
// 			// 		console.log('facebookLogin', res);

// 			// 		if (res) {
// 			// 			socialLoginApi({
// 			// 				full_name: `${res?.first_name}`,
// 			// 				email: res?.email,
// 			// 				social_id: res.id,
// 			// 				signup_via: 'facebook',
// 			// 			});
// 			// 		}
// 			// 	});
// 			// }}
// 			>
// 				<Image source={IMAGES.facebook} style={{ width: 50, height: 50, resizeMode: 'cover' }} resizeMode={'cover'} />
// 			</TouchableOpacity>

// 			{Platform.OS == 'ios' ? (
// 				<TouchableOpacity style={styles.socialIconStyle}
// 					onPress={_applelogin}
// 				>
// 					<Image source={IMAGES.apple} style={{ width: 50, height: 50, resizeMode: 'cover' }} />
// 				</TouchableOpacity>
// 			) : null}
// 		</View>
// 	);
// };
