import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, View, ScrollView, Image, } from 'react-native';
import { COLORS, IMAGES } from '../../constants';
import { Header, Typography } from '../../components/atoms';
import SafeAreaContainer from '../../containers/SafeAreaContainer';
import { commonStyles } from '../../style';
import LinearGradient from 'react-native-linear-gradient';
import { getMissionApi } from '../../store/services/AppServices';
import { WebView } from 'react-native-webview';
const Mission = (props: any) => {
	const [data, setData] = useState()
	useEffect(() => {
		getMissionApi()
			.then((data) => setData(data))
			.catch((err) => console.log('err', err));
	}, [])
	const HomeCard = ({ data }: any) => {
		console.log('data2', data.data[0]?.img_path);
		return (
			<View style={styles.registerView}>
				<LinearGradient
					colors={['#495BC1', '#BF2011']}
					style={styles.cardStyle}>
					<View style={styles.profileImg}>
						<Image
							source={{ uri: data.data[0]?.img_path }}
							style={{
								borderRadius: 30,
								width: 200,
								height: 200,
							}}
							resizeMode='cover'
						/>
						{/* <Image source={{ uri: data.data[0]?.img_path }} style={styles.profileImg} resizeMode='cover' /> */}
					</View>

					<Typography color='#fff' align='center' style={{ marginVertical: 20, }}>{data.data[0].long_desc}</Typography>

					{/* <View style={styles.container}>
						<WebView
							source={{
								html: `<meta name="viewport" content="width=device-width, initial-scale=1.0">
                     			 ${data.data[0].long_desc || 'data Privacy'}`,
							}}
							showsVerticalScrollIndicator={false}
							style={{ width: '100%', flex: 1, }}
						/>
					</View> */}
				</LinearGradient>
			</View>
		);
	};

	return (
		<SafeAreaContainer safeArea={false}>
			<ScrollView style={styles.container}>
				<View style={[commonStyles.headerView, styles.subContainer]}>
					<Header
						titleText="Mission Statement"
						titleColor={COLORS.black}
					/>
				</View>
				{
					data == undefined ? null :
						<HomeCard data={data} />

				}
			</ScrollView>
		</SafeAreaContainer>
	);
};


const styles = StyleSheet.create({
	container: {
		backgroundColor: COLORS.secondary,
		flex: 1,
		padding: 20,
	},
	subContainer: {
		paddingVertical: 50,
	},
	registerView: {
		flex: 1,
		margin: 20,
		borderRadius: 20
	},
	cardStyle: {
		borderRadius: 15,
		padding: 10,
		borderWidth: 1,
	},
	profileImg: {
		marginTop: -80,
		alignSelf: "center",
		borderRadius: 30,
		width: 200,
		height: 200,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
export default Mission;

