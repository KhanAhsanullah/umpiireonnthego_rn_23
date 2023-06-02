import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, ScrollView, Keyboard, Modal, KeyboardAvoidingView, Platform } from 'react-native';
import { Button, Typography, Header, InputText } from '../../../components/atoms';
import Icon from 'react-native-vector-icons/AntDesign';
import { COLORS, FONTS, IMAGES, screenWidth } from '../../../constants';
import SafeAreaContainer from '../../../containers/SafeAreaContainer';
import ImagePicker from 'react-native-image-crop-picker';
import * as Validator from '../../../utils/Validator';
import { updateUserApi } from '../../../store/services/AuthServices';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserState } from '../../../store/selectors/userSelector';
import { commonStyles } from '../../../style';
import { navigate, onBack } from '../../../navigation/RootNavigation';
import { updateUserStates } from '../../../store/actions/UserActions';

const EditProfile = (props: any) => {
	const dispatch = useDispatch();
	const [errors, setErrors] = useState({});
	const inputRef = useRef([]);

	const [selectImg, setSelectImg] = useState('');
	const [visible, setVisible] = useState(false);

	const userState = useSelector(selectUserState);
	const imageFromState = userState?.user?.profile_image;
	const user = userState.user;

	const [name, setName] = useState('');
	const [phone, setPhone] = useState('');

	useEffect(() => {
		setName(user.full_name);
		setPhone(user.phone);
	}, []);

	const _navigateTo = () => {
		let validateData = { name, phone };
		Validator.validate(validateData).then((err) => {
			setErrors(err);
			if (err && Object.keys(err).length) return;
			updateUserApi({
				full_name: name,
				phone,
				profile_image: selectImg,
			}).then((res) => {
				if (res) {
					dispatch(updateUserStates({ user: { ...user, ...res } }));
					onBack();
				}
			});
			// onBack();
		});
	};
	const takePhotoFromCamera = () => {
		console.log('image', selectImg);
		ImagePicker.openCamera({
			width: 300,
			height: 400,
			cropping: true,
		})
			.then((images) => {
				console.log('img', images);
				setSelectImg({
					name: images.filename || `image_${new Date().getDate()}`,
					type: images.mime,
					uri: images.path,
				});
				setVisible(false);
			})
			.catch((error) => {
				console.log('error', error);
				setVisible(false);
			});
	};
	const choosePhotoFromLibrary = () => {
		ImagePicker.openPicker({
			width: 300,
			height: 400,
		})
			.then((images) => {
				console.log('gal', images);
				setSelectImg({
					name: images.filename || `image_${new Date().getDate()}`,
					type: images.mime,
					uri: images.path,
				});
				setVisible(false);
			})
			.catch((error) => {
				console.log('error', error);
				setVisible(false);
			});
	};
	return (
		<SafeAreaContainer mode={'dark'} safeArea={false}>
			<KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null} style={{ flex: 1 }}>
				<View style={commonStyles.headerView}>
					<Header titleText='Edit Profile' />
				</View>
				<ScrollView contentContainerStyle={{ margin: 20 }}>
					<View style={styles.profileImg}>
						{imageFromState == null || selectImg ? (
							<Image
								source={selectImg || IMAGES.placeHolderFace}
								style={{ width: 120, height: 120, borderRadius: 60 }}
								resizeMode='cover'
							/>
						) : (
							<Image source={{ uri: imageFromState }} style={{ width: 110, height: 110, borderRadius: 55 }} resizeMode='cover' />
						)}
						<TouchableOpacity
							style={styles.cameraIcon}
							onPress={() => {
								setVisible(true);
							}}>
							<Icon name='camera' size={24} color={COLORS.primary} />
						</TouchableOpacity>
					</View>
					<View style={{ marginTop: 20 }}>
						<InputText
							title={'Full Name'}
							placeholderTextColor={COLORS.halfWhite}
							placeholder={'Enter Your Full Name'}
							onChangeText={(text) => setName(text)}
							value={name}
							error={errors.name}
							returnKeyType={'next'}
							// inputRef={NameInput}
							// onSubmitEditing={() =>
							//   EmailInput.current && EmailInput.current.focus()
							// }
							inputRef={(e) => (inputRef['name'] = e)}
							onSubmitEditing={() => {
								console.log(inputRef['phone']);
								inputRef['phone'] && inputRef['phone'].focus();
							}}
						/>
						<InputText
							title={'Email'}
							placeholderTextColor={COLORS.halfWhite}
							placeholder={'Enter Your Email'}
							onChangeText={(text) => setEmail(text)}
							value={user.email}
							returnKeyType={'next'}
							error={errors.email}
							editable={false}
							inputRef={(e) => (inputRef['email'] = e)}
							onSubmitEditing={() => {
								console.log(inputRef['phone']);
								inputRef['phone'] && inputRef['phone'].focus();
							}}
						/>
						<InputText
							title={'Phone'}
							placeholderTextColor={COLORS.halfWhite}
							placeholder={'Enter Your Phone Number'}
							onChangeText={(text) => setPhone(text)}
							value={phone}
							returnKeyType={'next'}
							keyboardType='number-pad'
							error={errors.phone}
							inputRef={(e) => (inputRef['phone'] = e)}
							onSubmitEditing={() => {
								Keyboard.dismiss();
							}}
						/>
						<View style={{ marginTop: 40 }}>
							<Button label={'Update'} onPress={_navigateTo} />
						</View>
					</View>
				</ScrollView>
			</KeyboardAvoidingView>
			<Modal animationType='slide' transparent={true} visible={visible}>
				<TouchableOpacity
					onPress={() => {
						setVisible(!visible);
					}}
					style={styles.centerView}
				/>

				<View style={{ position: 'absolute', bottom: 20 }}>
					<View style={styles.modalStyle}>
						<TouchableOpacity style={styles.profileStyle} onPress={takePhotoFromCamera}>
							<Typography style={styles.textStyle}>Take Photos</Typography>
						</TouchableOpacity>
						<View style={styles.lineBar} />
						<TouchableOpacity style={styles.profileStyle} onPress={choosePhotoFromLibrary}>
							<Typography style={styles.textStyle}>Choose from Gallery</Typography>
						</TouchableOpacity>
					</View>
					<View style={[styles.cancelStyle, { marginTop: 10 }]}>
						<TouchableOpacity
							onPress={() => {
								setVisible(!visible);
							}}>
							<Typography style={{ color: '#007bff' }}>Cancel</Typography>
						</TouchableOpacity>
					</View>
				</View>
			</Modal>
		</SafeAreaContainer>
	);
};

const styles = StyleSheet.create({
	profileImg: {
		width: 120,
		height: 120,
		borderRadius: 120 / 2,
		borderWidth: 2,
		borderColor: COLORS.white,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: COLORS.black,
		alignSelf: 'center',
	},
	inputType: {
		fontSize: 15,
		fontFamily: FONTS.PoppinsRegular,
		paddingVertical: 2,
		color: COLORS.text,
	},
	inputField: {
		borderWidth: 1,
		borderColor: COLORS.halfWhite,
		paddingHorizontal: 10,
		borderRadius: 5,
		// backgroundColor: COLORS.lightBlack,
		marginVertical: 10,
	},
	// Modal Styling
	centerView: {
		flex: 1,
		width: '100%',
		alignItems: 'center',
		backgroundColor: 'rgba(0, 0, 0, 0.4)',
	},
	modalStyle: {
		borderRadius: 10,
		backgroundColor: COLORS.white,
		width: screenWidth(95),
		marginHorizontal: 10,
		paddingVertical: 10,
	},
	profileStyle: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	cancelStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		height: 50,
		borderRadius: 10,
		backgroundColor: COLORS.white,
		paddingVertical: 0,
		paddingHorizontal: 10,
		marginHorizontal: 10,
	},
	lineBar: {
		width: '100%',
		borderBottomWidth: 0.5,
	},
	cameraIcon: {
		position: 'absolute',
		backgroundColor: '#fff',
		width: 40,
		height: 40,
		borderRadius: 20,
		borderWidth: 1,
		borderColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
		bottom: 0,
		right: 0,
	},
	textStyle: {
		color: '#007bff',
		marginVertical: 10,
		fontSize: 16,
	},
});

export default EditProfile;
