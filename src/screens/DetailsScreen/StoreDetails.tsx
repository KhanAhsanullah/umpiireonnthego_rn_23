import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import { COLORS, IMAGES } from '../../constants';
import { Header, Typography } from '../../components/atoms';
import SafeAreaContainer from '../../containers/SafeAreaContainer';
import { commonStyles } from '../../style';
import Icon from 'react-native-vector-icons/FontAwesome';
import { navigate } from '../../navigation/RootNavigation';
import { useSelector } from 'react-redux';
import { detailById } from '../../store/services/AppServices';

const StoreDetails = (props: any) => {
	const { filterData, coord } = useSelector((state: any) => state.AppReducer);
	const _filterStoreCard = () => {
		return (
			<>
				<ScrollView showsVerticalScrollIndicator={false}>
					{filterData.map((i: any) => {
						return (
							<View style={[commonStyles.cardWithShadow, styles.cardInnerStyle]}>
								{i?.hotel_image?.length > 0 ? (
									<Image source={{ uri: i?.hotel_image[0]?.image }} style={styles.imageStyle} resizeMode='cover' />
								) : (
									<Image source={IMAGES.Filter1} style={styles.imageStyle} resizeMode='cover' />
								)}
								<View style={styles.cardTextStyle}>
									<View style={commonStyles.flexJustRowAlign}>
										<Typography textType='semiBold' style={{}}>
											{i.name}
										</Typography>
										{i.student_friendly === 'yes' ? (
											<Image source={IMAGES.Trademark} style={{ width: 30, height: 30 }} resizeMode='cover' />
										) : null}
									</View>
									<Typography textType='light' color={COLORS.disable}>
										{props.route?.params?.paramKey} . {parseFloat(i.distance || 0).toFixed(2)} mi
									</Typography>
									<Typography textType='light' color={COLORS.darkGray} size={12}>
										Open ({i.start_time}) . Closed({i.end_time})
									</Typography>
									<View style={[commonStyles.flexJustRowAlign, {}]}>
										<View style={[commonStyles.flexJustRowAlign, { width: '50%' }]}>
											{Array(Math.ceil(i.rating.rating_avg))
												.fill(5)
												.map((e) => {
													return <Icon name='star' color={COLORS.rating} size={14} />;
												})}
											<View style={commonStyles.flexJustRowAlign}>
												<Typography size={14} style={{ marginLeft: 5 }}>
													{Math.ceil(i.rating.rating_avg)}
												</Typography>
												<Typography size={14} color={COLORS.lightGray} style={{ marginLeft: 5 }}>
													({i.rating.rating_count})
												</Typography>
											</View>
										</View>
										<View style={styles.verticleLine} />
										<TouchableOpacity
											style={[styles.viewBtn, { justifyContent: 'flex-end' }]}
											// onPress={() => navigate('FilterStoreDetail')}
											onPress={() => {
												detailById({
													id: i.id,
													lat: coord.lat,
													lng: coord.long,
												});
											}}>
											<Typography color='#fff' size={10}>
												View Details
											</Typography>
										</TouchableOpacity>
									</View>
								</View>
							</View>
						);
					})}
				</ScrollView>
			</>
		);
	};

	return (
		<SafeAreaContainer safeArea={false}>
			<View style={commonStyles.headerView}>
				<Header titleText='Search Results' />
			</View>
			<View style={[commonStyles.footerContainer]}>
				<ScrollView showsVerticalScrollIndicator={false} style={styles.container} bounces={false}>
					<Typography size={20} style={{ marginVertical: 20 }} textType='bold'>
						{props.route.params.paramKey}
					</Typography>
					<_filterStoreCard />
				</ScrollView>
			</View>
		</SafeAreaContainer>
	);
};
export default StoreDetails;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	headerStyle: {
		height: 250,
	},
	optionTab: {
		flex: 1,
		padding: 10,
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		borderRadius: 10,
		height: 60,
		backgroundColor: COLORS.white,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.11,
		shadowRadius: 4,
		elevation: 4,
	},
	verticleLine: {
		marginLeft: 0,
		height: '100%',
		width: 1,
		backgroundColor: '#909090',
	},
	cardInnerStyle: {
		marginVertical: 10,
		marginHorizontal: 2,
		padding: 0,
		flexDirection: 'row',
	},
	cardTextStyle: {
		padding: 10,
		flex: 1,
	},
	imageStyle: {
		width: 120,
		height: 120,
		borderTopLeftRadius: 20,
		borderBottomLeftRadius: 20,
	},
	viewBtn: {
		paddingHorizontal: 15,
		paddingVertical: 5,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 30,
		backgroundColor: COLORS.primary,
	},
});
