import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity, Image, Modal, Keyboard } from 'react-native';
import { COLORS, IMAGES, screenWidth } from '../../constants';
import { Button, Header, InputText, Typography } from '../../components/atoms';
import SafeAreaContainer from '../../containers/SafeAreaContainer';
import { commonStyles } from '../../style';
import ImagePicker from 'react-native-image-crop-picker';
import { navigate } from '../../navigation/RootNavigation';
import { DropDownOption } from '../../components/molecules/DropDownOption';
import { getGameList, registerGame, registerUmpire } from '../../store/services/AppServices';
import { useSelector } from 'react-redux';

const AssignGame = (props: any) => {
	const [title, setTitle] = useState('');
	const [city, setCity] = useState('');
	const [location, setLocation] = useState('');
	const [time, setTime] = useState('');
	const [date, setDate] = useState('');
	const [player_required, setRequired] = useState('');
	const [sport_skills, setSports] = useState('');
	const [details, setDetails] = useState('');
	const [errors, setErrors]: any = useState({});

	const TitleInput: any = React.createRef();
	const CityInput: any = React.createRef();
	const LocationInput: any = React.createRef();
	const TimeInput: any = React.createRef();
	const DateInput: any = React.createRef();
	const SportsInput: any = React.createRef();
	const DetailsInput: any = React.createRef();
	const [visible, setVisible] = useState(false);
	const [gameModal, setGameModal] = useState(false);
	const [selectImg, setSelectImg] = useState('');
	const titleHeader = props.route.params.title;
	const categories = useSelector((state: any) => state.AppReducer.categories);
	const [category, setCategory] = useState(['Select an Option']);
	const [option, setOption] = useState(['Open']);
	console.log('option', option);

	useEffect(() => {
		getGameList()
	}, [])
	const takePhotoFromCamera = () => {
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
	const onSubmit = () => {
		registerGame({
			title: title,
			city: city,
			location: location,
			time: time,
			date: date,
			sport_skills: sport_skills,
			player_required: player_required,
			details: details,
			status: tabView.filter((i) => option[0] == i.title)[0].id,
			user_id: '12',
			img_path: selectImg,
			type_id: '1'
		});
	}
	return (
		<SafeAreaContainer safeArea={false}>
			<ScrollView style={styles.container}>
				<View style={[commonStyles.headerView, styles.subContainer]}>
					<Header
						titleText={titleHeader}
						titleColor={COLORS.black}
					/>
				</View>
				<View style={{ margin: 20 }}>
					<TouchableOpacity
						activeOpacity={0.8} style={[commonStyles.cardWithShadow, styles.imgView]}
						onPress={() => setVisible(true)}>
						{selectImg ? (
							<Image
								source={selectImg || IMAGES.VectorImg}
								style={{ alignSelf: "center", width: 120, height: 120, borderRadius: 10 }}
								resizeMode='cover'
							/>
						) : (
							<Image source={IMAGES.VectorImg} style={{ width: 110, height: 110, borderRadius: 10, alignSelf: "center", }} resizeMode='cover' />
						)}
					</TouchableOpacity>
					<InputText
						cardStyle={styles.cardStyle}
						placeholder={'Add title'}
						onChangeText={(text: string) => setTitle(text)}
						value={title}
						error={errors.email}
						autoCapitalize={'none'}
						keyboardType={'email-address'}
						returnKeyType={'next'}
						inputRef={TitleInput}
						onSubmitEditing={() => CityInput.current && CityInput.current.focus()}
						leftIconVisibility={false}
						allowSpacing={false}
					/>
					<InputText
						cardStyle={styles.cardStyle}
						placeholder={'City'}
						onChangeText={(text: string) => setCity(text)}
						value={city}
						error={errors.email}
						autoCapitalize={'none'}
						keyboardType={'email-address'}
						returnKeyType={'next'}
						inputRef={CityInput}
						onSubmitEditing={() => LocationInput.current && LocationInput.current.focus()}
						leftIconVisibility={false}
						allowSpacing={false}
					/>
					<InputText
						cardStyle={styles.cardStyle}
						placeholder={'Location'}
						onChangeText={(text: string) => setLocation(text)}
						value={location}
						error={errors.email}
						autoCapitalize={'none'}
						keyboardType={'email-address'}
						returnKeyType={'next'}
						inputRef={LocationInput}
						onSubmitEditing={() => TimeInput.current && TimeInput.current.focus()}
						leftIconVisibility={false}
						allowSpacing={false}
					/>
					<InputText
						cardStyle={styles.cardStyle}
						placeholder={'Time'}
						onChangeText={(text: string) => setTime(text)}
						value={time}
						error={errors.email}
						autoCapitalize={'none'}
						keyboardType={'email-address'}
						returnKeyType={'next'}
						inputRef={TimeInput}
						onSubmitEditing={() => DateInput.current && DateInput.current.focus()}
						leftIconVisibility={false}
						allowSpacing={false}
					/>
					<InputText
						cardStyle={styles.cardStyle}
						placeholder={'Date'}
						onChangeText={(text: string) => setDate(text)}
						value={date}
						error={errors.email}
						autoCapitalize={'none'}
						keyboardType={'email-address'}
						returnKeyType={'next'}
						inputRef={DateInput}
						onSubmitEditing={() => SportsInput.current && SportsInput.current.focus()}
						leftIconVisibility={false}
						allowSpacing={false}
					/>
					<DropDownOption
						options={categories.map((i: any) => i.title)}
						selected={category}
						onSelect={() => {
							setCategory(categories[0]?.title);
						}}

					/>
					<DropDownOption
						options={tabView.map((i: any) => i.title)}
						selected={option}
						onSelect={(i: any) => {
							setOption(tabView[i]?.title);
						}}

					/>
					<InputText
						cardStyle={styles.cardStyle}
						placeholder={'Player required'}
						onChangeText={(text: string) => setRequired(text)}
						value={player_required}
						error={errors.email}
						autoCapitalize={'none'}
						keyboardType={'email-address'}
						returnKeyType={'next'}
						inputRef={SportsInput}
						onSubmitEditing={() => DetailsInput.current && DetailsInput.current.focus()}
						leftIconVisibility={false}
						allowSpacing={false}
					/>
					<InputText
						cardStyle={styles.cardStyle}
						placeholder={'Sports Skills'}
						onChangeText={(text: string) => setSports(text)}
						value={sport_skills}
						multiline={true}
						error={errors.email}
						autoCapitalize={'none'}
						keyboardType={'email-address'}
						returnKeyType={'done'}
						inputRef={DetailsInput}
						onSubmitEditing={() => Keyboard.dismiss()}
						leftIconVisibility={false}
						allowSpacing={false}
					// inputStyle={{ paddingVertical: 30, backgroundColor: '#fff', }}
					/>
					<InputText
						// cardStyle={styles.cardStyle}
						placeholder={'Details'}
						onChangeText={(text: string) => setDetails(text)}
						value={details}
						multiline={true}
						error={errors.email}
						autoCapitalize={'none'}
						keyboardType={'email-address'}
						returnKeyType={'done'}
						inputRef={DetailsInput}
						onSubmitEditing={() => Keyboard.dismiss()}
						leftIconVisibility={false}
						allowSpacing={false}
						inputStyle={{ paddingVertical: 30, backgroundColor: '#fff', }}
					/>
					<Button label={'Assign Game'}
						onPress={() => {
							onSubmit()
							// setGameModal(true)
						}
						}
						backgroundColor={COLORS.primary}
						borderRadius={10}
					/>
				</View>

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

				<Modal
					animationType="fade"
					transparent={true}
					visible={gameModal}
					statusBarTranslucent={true}>
					<TouchableOpacity
						onPress={() => {
							setGameModal(!gameModal);
						}}
						style={styles.gameModalView}
					/>
					<View style={styles.modalStyle}>
						<Typography size={26} style={{ marginVertical: 20, }}>Your Game has been uploaded successfully!</Typography>
						<Button label={'View Your Game'} onPress={() => {
							setGameModal(false);
							navigate('CardDetails');
						}} backgroundColor={COLORS.primary} borderRadius={10} />
					</View>
				</Modal>
			</ScrollView>
		</SafeAreaContainer>
	);
};

const tabView = [
	{
		id: 1,
		title: 'Open',
		type: true
	},
	{
		id: 2,
		title: 'Active',
		type: false

	},
	{
		id: 3,
		title: 'Closed',
		type: false

	},
]
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.secondary
	},
	subContainer: {
		paddingVertical: 50,
	},
	headerStyle: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	headerBkStyle: {
		padding: 5,
		borderRadius: 10,
		backgroundColor: COLORS.bkColor,
		justifyContent: "center",
		alignItems: 'center'
	},
	imgView: {
		width: "50%",
		alignSelf: 'center',
		paddingVertical: 20
	},
	cardStyle: {
		backgroundColor: '#fff',
		borderRadius: 10,
		paddingHorizontal: 10,
		height: 55,
		alignItems: "center",

	},
	gameModalView: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: 'rgba(0, 0, 0, 0.8)',
	},
	// Modal Styling
	centerView: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: 'rgba(0, 0, 0, 0.8)',
	},
	modalStyle: {
		borderRadius: 10,
		backgroundColor: COLORS.white,
		width: screenWidth(100),
		paddingHorizontal: 30,
		// paddingVertical: 100,
		// marginHorizontal: 20,
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
		// paddingVertical: 0,
		paddingHorizontal: 10,
		// marginHorizontal: 10,
	},
	lineBar: {
		width: '100%',
		borderBottomWidth: 0.5,
	},
	textStyle: {
		color: '#007bff',
		marginVertical: 10,
		fontSize: 16,
	},
});
export default AssignGame;

