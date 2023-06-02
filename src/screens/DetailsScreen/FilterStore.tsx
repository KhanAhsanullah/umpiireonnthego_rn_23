import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity, Image, BackHandler, FlatList } from 'react-native';
import { COLORS, IMAGES, screenHeight } from '../../constants';
import { Header, Typography } from '../../components/atoms';
import SafeAreaContainer from '../../containers/SafeAreaContainer';
import { commonStyles } from '../../style';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LocationIcon } from '../../components/icons';
import { useSelector } from 'react-redux';
import { detailById } from '../../store/services/AppServices';
import moment from 'moment';
import { selectAppState } from '../../store/selectors/appSelector';

const FilterStore = (props: any) => {
	const { coord } = useSelector(selectAppState);
	const searchCategries = useSelector((state: any) => state.AppReducer.searchCategries);

	const OptionField = () => {
		return (
			<View style={[commonStyles.flexJustRowAlign, { paddingHorizontal: 0, marginVertical: 30 }]}>
				<View style={styles.optionTab}>
					<View>
						<Typography textType='bold' size={14}>
							What?
						</Typography>
						<View style={commonStyles.flexJustRowAlign}>
							<Typography color={COLORS.lightGray}>{props.route.params.paramKey}</Typography>
							{/* <Icon name='angle-down' color={COLORS.black} style={{ marginLeft: 20 }} /> */}
						</View>
					</View>
					<View style={styles.verticleLine} />
					<View>
						<Typography textType='bold' size={14}>
							Where?
						</Typography>
						<View style={commonStyles.flexJustRowAlign}>
							<LocationIcon fill={COLORS.primary} width={12} height={12} />
							<Typography color={COLORS.lightGray} style={{ marginLeft: 5 }}>
								{props.route.params.placeKey}
							</Typography>
							{/* <Icon name='angle-down' color={COLORS.black} style={{ marginLeft: 20 }} /> */}
						</View>
					</View>
				</View>
			</View>
		);
	};

	const RestaurantCard = ({ item }: any) => {
		console.log(item);
		return (
			<View style={[commonStyles.cardWithShadow, styles.cardInnerStyle]}>
				{item?.hotel_image?.length > 0 ? (
					<Image source={{ uri: item?.hotel_image[0]?.image }} style={styles.imageStyle} resizeMode='cover' />
				) : (
					<Image source={IMAGES.Filter2} style={styles.imageStyle} resizeMode='cover' />
				)}
				<View style={styles.cardTextStyle}>
					<View style={commonStyles.flexJustRowAlign}>
						<Typography textType='semiBold' style={{}}>
							{item.name}
						</Typography>
						{item.student_friendly === 'yes' ? (
							<Image source={IMAGES.Trademark} style={{ width: 30, height: 30 }} resizeMode='cover' />
						) : null}
					</View>
					<Typography textType='light' color={COLORS.disable}>
						{`${item.category.name} - ${parseFloat(item.distance || 0).toFixed(2)} mi`}
					</Typography>
					<Typography textType='light' color={COLORS.darkGray} size={12}>
						{/* Open ({i.start_time}) . Closed({i.end_time}) */}
						<Typography textType='light' color={COLORS.darkGray} size={12}>
							{/* Open ({val.start_time}) . Closed({val.end_time}) */}
							Open ({moment(item.start_time, ['HH:mm']).format('hh:mm A')}) . Closed (
							{moment(item.end_time, ['HH:mm']).format('hh:mm A')})
						</Typography>
					</Typography>
					<View style={[commonStyles.flexJustRowAlign, {}]}>
						<View style={[commonStyles.flexJustRowAlign, { width: '50%' }]}>
							{Array(Math.ceil(item.rating?.rating_avg || 0))
								?.fill(5)
								.map((e) => {
									return <Icon name='star' color={COLORS.rating} size={14} />;
								})}
							<View style={commonStyles.flexJustRowAlign}>
								<Typography size={14} style={{ marginLeft: 5 }}>
									{Math.ceil(item.rating?.rating_avg || 0)}
								</Typography>
								<Typography size={14} color={COLORS.lightGray} style={{ marginLeft: 5 }}>
									({item.rating?.rating_count})
								</Typography>
							</View>
						</View>
						<View style={styles.verticleLine} />
						<TouchableOpacity
							style={[styles.viewBtn, { justifyContent: 'flex-end' }]}
							// onPress={() => navigate('FilterStoreDetail')}>
							onPress={() => {
								detailById({
									id: item.id,
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
	};

	return (
		<SafeAreaContainer safeArea={false}>
			<View style={commonStyles.headerView}>
				<Header titleText='Search Results' />
			</View>
			<View style={[commonStyles.footerContainer, {}]}>
				<OptionField />
				<Typography textType='light' size={20} color={COLORS.lightGray}>
					{props.route.params.paramKey} - {props.route.params.placeKey}
				</Typography>
				<FlatList
					data={searchCategries}
					renderItem={(i) => <RestaurantCard {...i} />}
					ListEmptyComponent={() => {
						return (
							<View style={{ height: screenHeight(40), alignItems: 'center', justifyContent: 'center' }}>
								<Typography textType='light' size={16} color={COLORS.darkGray}>
									No Record Found
								</Typography>
							</View>
						);
					}}
				/>
			</View>
		</SafeAreaContainer>
	);
};
export default FilterStore;
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
