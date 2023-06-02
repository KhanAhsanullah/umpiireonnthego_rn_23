import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { Image, Modal, StyleSheet, TouchableOpacity, View, Dimensions, ScrollView } from 'react-native';
import { COLORS, IMAGES } from '../../constants';
import Icon from 'react-native-vector-icons/Entypo';
import { useSelector } from 'react-redux';
const { width, height } = Dimensions.get('window');
const MediaViewModal = forwardRef((props: any, ref) => {
	const [item, setItem]: any = useState({
		type: '',
		media: '',
		data: null,
		visibility: false,
	});
	const detailData = useSelector((state: any) => state.AppReducer.detailData);

	useImperativeHandle(ref, () => ({
		show: ({ type, media, data }: any) => {
			setItem({
				type,
				media,
				data,
				visibility: true,
			});
		},
		close: () => {
			setItem({ ...item, visibility: false });
		},
	}));
	const _renderViews = () => {
		switch (item.type) {
			// case "video":
			//   return (
			//     <Video
			//       source={item.media}
			//       style={styles.backgroundVideo}
			//       playInBackground={true}
			//       resizeMode="contain"
			//       repeat={false}
			//       rate={1.0}
			//       ignoreSilentSwitch={"obey"}
			//       controls={true}
			//     />
			//   );
			//   break;
			case 'image':
				return <Image source={item.media} style={{ height: '90%', width: '100%', resizeMode: 'contain' }} />;

				break;
			case 'multi':
				return (
					<ScrollView horizontal contentContainerStyle={{}}>
						{item.data.map((i, index) => {
							return (
								<View style={[styles.bannerView, {}]} key={index}>
									{/* <Image source={i.img} style={styles.bannerImage} /> */}
									<Image source={{ uri: i.image }} style={styles.bannerImage} />

									{/* {detailData?.hotel_image?.length > 0 ? (
										<Image source={{ uri: i.image }} style={styles.bannerImage} />
									) : (
										<Image source={IMAGES.Filter1} style={styles.bannerImage} />
									)} */}
								</View>
							);
						})}
					</ScrollView>
				);
				break;
			default:
				break;
		}
	};
	return (
		<Modal animationType='slide' transparent={true} visible={item.visibility} statusBarTranslucent={true}>
			<View style={styles.centerView}>
				<TouchableOpacity
					onPress={() => {
						console.log('check', item);

						setItem({ ...item, visibility: false });
					}}
					style={{
						position: 'absolute',
						top: 30,
						right: 20,
						zIndex: 999,
					}}>
					<Icon name='circle-with-cross' size={30} color={COLORS.white} />
				</TouchableOpacity>
				{_renderViews()}
			</View>
		</Modal>
	);
});

export default MediaViewModal;

const styles = StyleSheet.create({
	centerView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: COLORS.black,
	},
	backgroundVideo: {
		backgroundColor: COLORS.black,
		width: width,
		height: height / 1.5,
	},
	bannerView: {},
	bannerImage: {
		resizeMode: 'contain',
		width: width / 1,
		height: height,
		justifyContent: 'flex-start',
		marginHorizontal: 10,
	},
});
