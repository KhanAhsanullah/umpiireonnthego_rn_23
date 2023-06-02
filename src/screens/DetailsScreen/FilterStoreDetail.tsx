import React, { useRef, useState } from 'react';
import { ImageBackground, StyleSheet, View, ScrollView, TouchableOpacity, Image, Modal, TextInput, Platform, Keyboard, Linking } from 'react-native';
import { COLORS, IMAGES, screenHeight } from '../../constants';
import { Button, Typography } from '../../components/atoms';
import SafeAreaContainer from '../../containers/SafeAreaContainer';
import { commonStyles } from '../../style';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconIonic from 'react-native-vector-icons/Ionicons';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconSimple from 'react-native-vector-icons/SimpleLineIcons';
import { ArrowLeftIcon, LocationIcon } from '../../components/icons';
import Swiper from 'react-native-swiper';
import { Rating } from 'react-native-ratings';
import { navigate, onBack } from '../../navigation/RootNavigation';
import { useSelector } from 'react-redux';
import { ratingApi } from '../../store/services/AppServices';
import moment from 'moment';

const FilterStoreDetail = (props: any) => {
	const modal: any = useRef();
	const [modalVisible, setModalVisible] = useState(false);
	const detailData = useSelector((state: any) => state.AppReducer.detailData);


	// const submitRating = () => {
	// 	let validateData = { name, email };
	// 	Validator.validate(validateData).then((err) => {
	// 		setErrors(err);
	// 		if (err && Object.keys(err).length) return;
	// 		ratingApi({
	// 			hotel_id: detailData.id,
	// 			rating: '',
	// 			name: '',
	// 			review: ''
	// 		});
	// 		// setModalVisible(!modalVisible)
	// 		// navigate('AppNavigation');
	// 	});
	// };
	const Reviews = () => {
		return (
			<>
				<View style={[commonStyles.flexJustRowAlign, { marginVertical: 20 }]}>
					<Typography size={14} textType='semiBold' style={{ flex: 1 }}>
						{detailData.name}
					</Typography>
					<View style={{ flexDirection: 'row', alignItems: "center", justifyContent: 'flex-end', flex: 1 }}>
						<LocationIcon fill={COLORS.primary} width={15} height={15} />
						<Typography size={14} color='#959DAA' style={{ marginLeft: 5 }}>
							{detailData.location},{detailData.state},{detailData.city}
						</Typography>
					</View>
				</View>

				<View style={[commonStyles.flexJustRowAlign, {}]}>
					<View style={{ flexDirection: 'row', alignItems: 'center' }}>
						{Array(Math.ceil(detailData.rating?.rating_avg || 0))
							?.fill(5)
							.map((e) => {
								return <Icon name='star' color={COLORS.rating} size={14} />;
							})}
						<Typography size={14} style={{ marginLeft: 5 }}>
							{Math.ceil(detailData.rating?.rating_avg || 0)}
						</Typography>
						<Typography size={14} color='#959DAA' style={{ marginLeft: 5 }}>
							({detailData.rating?.rating_count})
						</Typography>
					</View>
					<TouchableOpacity onPress={() => setModalVisible(true)}>
						<Typography size={14} color={COLORS.primary} textType='semiBold'>
							Rate & Review
						</Typography>
					</TouchableOpacity>
				</View>
			</>
		);
	};
	const RatingModal = () => {
		const inputRef: any = useRef([]);
		const [rating, setRating] = useState(2);
		const [name, setName] = useState('');
		const [description, setDescription] = useState('');
		const [disabled, setDisabled] = useState(true);

		const submitRating = () => {
			ratingApi({
				hotel_id: detailData.id,
				rating: rating,
				name: name,
				review: description,
			});
		};
		return (
			<Modal animationType='fade' transparent={true} visible={modalVisible}>
				<View
					style={{
						flex: 1,
						justifyContent: 'center',
						backgroundColor: 'rgba(0, 0, 0, 0.6)',
					}}>
					<View style={styles.modalView}>
						<TouchableOpacity activeOpacity={0.9} onPress={() => setModalVisible(false)} style={styles.closeButton}>
							<Icon name='close' size={15} color={'#fff'} />
						</TouchableOpacity>

						<Typography textType='semiBold' style={{ marginBottom: 10 }} align='center'>
							Recommend us to{'\n'}others by rating us!
						</Typography>
						<View style={{ marginVertical: 20 }}>
							<Rating onFinishRating={(e: any) => {
								setRating(e)
								// setDisabled(true)
							}} type='star' ratingCount={5} imageSize={35} />
						</View>
						<View style={commonStyles.lineBar} />
						<Typography textType='bold' style={{ marginVertical: 20 }} align='center'>
							Write a Compliment
						</Typography>

						<View style={styles.inputField}>
							<TextInput
								placeholder='Name (Optional)'
								placeholderTextColor={'#9A9A9A'}
								style={{ color: COLORS.black }}
								value={name}
								onChangeText={(text) => {
									setName(text)
								}}
								// onKeyPress={e => {
								// 	setDisabled(true)
								// }}
								autoCapitalize={'none'}
								keyboardType={'default'}
								blurOnSubmit={false}
								returnKeyType={'next'}
								ref={(e) => (inputRef['name'] = e)}
								onSubmitEditing={() => {
									console.log(inputRef['description']);
									inputRef['description'] && inputRef['description'].focus();
								}}
							/>
						</View>
						<View style={[styles.inputField, { height: 150 }]}>
							<TextInput
								placeholder='Type something...'
								placeholderTextColor={'#9A9A9A'}
								style={{ color: COLORS.black }}
								value={description}
								onChangeText={(text) => {
									setDescription(text)
									// setDisabled(false);

								}}
								// onKeyPress={e => {
								// 	setDisabled(true)
								// }}
								autoCapitalize={'none'}
								keyboardType={'default'}
								returnKeyType={'done'}
								ref={(e) => (inputRef['description'] = e)}
								onSubmitEditing={() => {
									Keyboard.dismiss();
								}}
							/>
						</View>

						<Button
							label='Submit'
							borderRadius={30}
							// disabled={disabled}
							style={{ marginHorizontal: 30 }}
							onPress={() => {
								submitRating();
								setModalVisible(!modalVisible);
							}}
						/>
					</View>
				</View>
			</Modal>
		);
	};
	const Header = () => {
		return (
			<View style={styles.headerView}>
				{/* <Swiper
					showsButtons={false}
					dotColor={COLORS.white}
					activeDotColor={COLORS.primary}
					// autoplay={{ delay: 5 }}
					dotStyle={{
						marginTop: 10,
						marginBottom: 10,
					}}>
					{detailData.hotel_image.map((i: any) => {
						return (
							<TouchableOpacity
								onPress={() => navigate('PreviewScreen')}
								// onPress={() => {
								// 	modal.current.show({
								// 		type: 'multi',
								// 		media: '',
								// 		data: detailData.hotel_image,
								// 	});
								// }}
								style={{ flex: 1 }}>
								<Image source={{ uri: i.image }} style={{ flex: 1, padding: 20 }} resizeMode='cover' />

								<TouchableOpacity onPress={() => onBack()} style={{ position: 'absolute', top: 50, left: 20, }}>
									<ArrowLeftIcon />
								</TouchableOpacity>
							</TouchableOpacity>
						);
					})}
				</Swiper> */}
			</View>
		);
	};
	const DstanceField = () => {
		return (
			<View style={commonStyles.cardWithShadow}>
				<View style={[commonStyles.flexJustRowAlign, { paddingHorizontal: 30 }]}>
					<IconIonic name='stopwatch' color={COLORS.primary} size={18} style={{ left: 5, top: -12 }} />
					<View>
						<Typography size={14} style={{ marginLeft: 5 }}>
							{moment(detailData.start_time, ['HH:mm']).format('hh:mm A')}
						</Typography>
						<Typography size={14} style={{ marginLeft: 5 }}>
							{moment(detailData.end_time, ['HH:mm']).format('hh:mm A')}
						</Typography>
					</View>

					<LocationIcon fill={COLORS.primary} width={18} height={18} style={{ left: 5, top: -12 }} />
					<View>
						<Typography size={14} style={{ marginLeft: 5 }}>
							Distance
						</Typography>
						<Typography size={14} style={{ marginLeft: 5 }} color={COLORS.lightGray}>
							{parseFloat(detailData.distance).toFixed(2)}  Miles
						</Typography>
					</View>
					<Image source={IMAGES.Trademark} style={{ width: 30, height: 30 }} resizeMode='cover' />
				</View>
			</View>
		);
	};
	const Overview = () => {
		return (
			<View style={{ marginVertical: 20 }}>
				<View style={{ flexDirection: 'row', alignItems: 'center' }}>
					<View>
						<Typography size={14} textType='bold'>
							Overview
						</Typography>
						<IconEntypo name='dot-single' color={COLORS.primary} style={{ top: -10, alignSelf: 'center' }} size={22} />
					</View>
					{/* <View>
						<Typography size={14} color={COLORS.lightGray} style={{ marginLeft: 40 }}>
							Reviews
						</Typography>
						<IconEntypo name='dot-single' color={COLORS.white} style={{ top: -10, alignSelf: 'center' }} size={22} />
					</View> */}
				</View>
				<Typography color={COLORS.lightGray}>{detailData.overview}</Typography>
			</View>
		);
	};
	const MapLinking = () => {
		// console.log(detailData);
		var url = `https://www.google.com/maps/dir/?api=1&travelmode=driving&dir_action=navigate&destination=${detailData.latitude},${detailData.longitude}`;
		Linking.canOpenURL(url)
			.then((supported) => {
				if (!supported) {
					console.log("Can't handle url: " + url);
				} else {
					return Linking.openURL(url);
				}
			})
			.catch((err) => console.error('An error occurred', err));
	};

	return (
		<SafeAreaContainer safeArea={false}>
			<ScrollView showsVerticalScrollIndicator={false} bounces={false}>
				<Header />
				<View style={styles.container}>
					<Reviews />
					<DstanceField />
					<Overview />
					<View style={commonStyles.flexJustRowAlign}>
						<TouchableOpacity onPress={() => MapLinking()} style={styles.btnStyle}>
							<View style={{ flexDirection: 'row', alignItems: 'center' }}>
								<IconSimple name='compass' size={16} color={COLORS.black} />
								<Typography style={{ marginLeft: 10 }}>Map Direction</Typography>
							</View>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() => navigate('Contact')}
							style={[styles.btnStyle, { marginLeft: 20, backgroundColor: COLORS.primary, borderColor: COLORS.primary }]}>
							<View style={commonStyles.flexRowAlign}>
								<IconIonic name='call-outline' size={16} color='#fff' />
								<Typography style={{ marginLeft: 10 }} color='#fff'>
									Contact Us
								</Typography>
							</View>
						</TouchableOpacity>
					</View>
				</View>
			</ScrollView>
			<RatingModal />
			{/* <MediaViewModal ref={modal} /> */}
		</SafeAreaContainer>
	);
};
export default FilterStoreDetail;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 20,
	},
	headerView: {
		flex: 1,
		height: screenHeight(50),
	},
	sliderImages: {
		width: '100%',
		height: '100%',
		zIndex: 1000,
	},
	btnStyle: {
		flex: 1,
		marginHorizontal: 10,
		marginBottom: 20,
		padding: 10,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 30,
		borderWidth: 1,
	},
	modalView: {
		margin: 20,
		maxHeight: screenHeight(85),
		padding: 20,
		backgroundColor: 'white',
		borderRadius: 20,
	},
	closeButton: {
		position: 'absolute',
		top: -10,
		right: -10,
		backgroundColor: COLORS.primary,
		padding: 8,
		borderRadius: 20,
	},
	inputField: {
		borderWidth: 1,
		borderColor: '#E4E9F2',
		paddingHorizontal: 15,
		borderRadius: 10,
		backgroundColor: '#E4E9F2',
		marginVertical: 10,
		// padding: 5,
		paddingVertical: Platform.OS === 'android' ? 5 : 15,
	},
});
