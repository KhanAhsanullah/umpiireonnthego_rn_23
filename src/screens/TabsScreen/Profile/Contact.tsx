import React, { useEffect, useRef, useState } from 'react';
import { View, StyleSheet, ScrollView, Image, TextInput, Platform, Keyboard, KeyboardAvoidingView } from 'react-native';
import { useSelector } from 'react-redux';
import { Button, Header, InputText } from '../../../components/atoms';
import { COLORS, IMAGES } from '../../../constants';
import SafeAreaContainer from '../../../containers/SafeAreaContainer';
import { selectUserState } from '../../../store/selectors/userSelector';
import { contactUsApi } from '../../../store/services/AppServices';
import { commonStyles } from '../../../style';
import * as Validator from '../../../utils/Validator';

const Contact = (props: any) => {
	const [errors, setErrors] = useState({});
	const inputRef = useRef([]);

	const userState = useSelector(selectUserState);
	const user = userState.user;

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [query, setQuery] = useState('');

	// useEffect(() => {
	// 	setName(user.full_name);
	// 	setEmail(user.email);
	// 	setPhone(user.phone);
	// 	setQuery(user.query);
	// }, []);

	const _contactApi = () => {
		let validateData = { name, email, phone, query };
		Validator.validate(validateData).then((err) => {
			setErrors(err);
			if (err && Object.keys(err).length) return;
			contactUsApi({
				name,
				email,
				phone,
				query,
			});
		});
	};

	return (
		<SafeAreaContainer mode={'dark'} safeArea={false}>
			<KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null} style={{ flex: 1 }}>
				<View style={commonStyles.headerView}>
					<Header titleText={'Contact Us'} />
				</View>
				<View style={[commonStyles.footerContainer, {}]}>
					<ScrollView showsVerticalScrollIndicator={false}>
						<Image source={IMAGES.contactImg} style={styles.profileImg} resizeMode='contain' />

						<View style={{ marginTop: 20 }}>
							<InputText
								title={'Full Name'}
								placeholderTextColor={COLORS.halfWhite}
								placeholder={'Enter Your Full Name'}
								onChangeText={(text) => setName(text)}
								value={name}
								error={errors.name}
								maxLength={50}
								returnKeyType={'next'}
								inputRef={(e) => (inputRef['name'] = e)}
								onSubmitEditing={() => {
									console.log(inputRef['email']);
									inputRef['email'] && inputRef['email'].focus();
								}}
							/>
							<InputText
								title={'Email'}
								placeholderTextColor={COLORS.halfWhite}
								placeholder={'Enter Your Email'}
								onChangeText={(text) => setEmail(text)}
								value={email}
								maxLength={100}
								returnKeyType={'next'}
								error={errors.email}
								// editable={true}
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
								maxLength={15}
								error={errors.phone}
								inputRef={(e) => (inputRef['phone'] = e)}
								onSubmitEditing={() => {
									console.log(inputRef['query']);
									inputRef['query'] && inputRef['query'].focus();
								}}
							/>
							<InputText
								title={'Description'}
								placeholderTextColor={COLORS.halfWhite}
								placeholder={'tell us what you are looking for...'}
								onChangeText={(text) => setQuery(text)}
								value={query}
								error={errors.query}
								returnKeyType={'done'}
								inputRef={(e) => (inputRef['query'] = e)}
								onSubmitEditing={() => {
									Keyboard.dismiss();
								}}
								inputStyle={{ paddingVertical: 100 }}
							/>
							<View style={{ marginTop: 40 }}>
								<Button label={'Submit'} onPress={_contactApi} />
							</View>
						</View>
					</ScrollView>
				</View>
			</KeyboardAvoidingView>
		</SafeAreaContainer>
	);
};

export default Contact;
const styles = StyleSheet.create({
	profileImg: {
		alignSelf: 'center',
		width: 120,
		height: 120,
		borderRadius: 60,
		marginVertical: 20,
	},
	inputField: {
		borderWidth: 2,
		borderColor: '#E4E9F2',
		borderRadius: 10,
		behavior: Platform.OS === 'ios' ? 'padding' : null,
		paddingHorizontal: 5,
		marginVertical: Platform.OS === 'android' ? 5 : 10,
		backgroundColor: '#F9F9FC',
		padding: Platform.OS === 'android' ? 5 : 15,
	},
});
