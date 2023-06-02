import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity, Image, FlatList } from 'react-native';
import { COLORS, IMAGES } from '../../constants';
import { Header, Typography } from '../../components/atoms';
import SafeAreaContainer from '../../containers/SafeAreaContainer';
import { commonStyles } from '../../style';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useSelector } from 'react-redux';
import { detailById } from '../../store/services/AppServices';

const SearchStore = (props: any) => {
	const { filterData, coord } = useSelector((state: any) => state.AppReducer);
	const _filterStoreCard = ({ item }: any) => {
		return (
			<>
				<TouchableOpacity
					onPress={() => {
						detailById({
							id: item.id,
							lat: coord.lat,
							lng: coord.long,
						});
					}}
					style={[commonStyles.cardWithShadow, styles.cardInnerStyle]}>
					<View style={{ flex: 0 }}>
						{item?.hotel_image[0] ? (
							<Image source={{ uri: item?.hotel_image[0]?.image }} style={styles.imageStyle} resizeMode='cover' />
						) : (
							<Image source={IMAGES.Filter1} style={styles.imageStyle} resizeMode='cover' />
						)}
					</View>
					<View style={[styles.cardTextStyle, { flex: 1 }]}>
						<View style={commonStyles.flexJustRowAlign}>
							<Typography textType='semiBold' numberOfLines={1} style={{ flex: 1 }}>{item.name}</Typography>
							{item.student_friendly === 'yes' && (
								<Image source={IMAGES.Trademark} style={{ width: 30, height: 30, }} resizeMode='cover' />
							)}
						</View>
						<Typography textType='light' numberOfLines={2} size={12} style={{ marginTop: 3, flex: 1, width: '85%', }} >
							{item.location}
						</Typography>
						<Typography textType='light'>{item.number_of_people}</Typography>
						<View style={[commonStyles.flexJustRowAlign, { width: '50%', justifyContent: 'flex-start' }]}>
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
					</View>
				</TouchableOpacity>
			</>
		);
	};

	return (
		<SafeAreaContainer safeArea={false}>
			<View style={commonStyles.headerView}>
				<Header titleText='Search Results' />
			</View>
			<View style={[commonStyles.footerContainer, {}]}>
				<ScrollView showsVerticalScrollIndicator={false} style={styles.container} bounces={false}>
					{/* <_filterStoreCard /> */}
					{filterData.length > 0 ? (
						<FlatList
							showsVerticalScrollIndicator={false}
							contentContainerStyle={{ paddingHorizontal: 10 }}
							data={filterData}
							keyExtractor={(item, index) => item + index}
							renderItem={(item) => _filterStoreCard(item)}
						/>
					) : (
						<View style={{ marginTop: '60%' }}>
							<Typography align='center' size={22} color={COLORS.darkGray}>
								No Record Found
							</Typography>
						</View>
					)}
				</ScrollView>
			</View>
		</SafeAreaContainer>
	);
};
export default SearchStore;

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
		marginHorizontal: 10,
		height: '100%',
		width: 1,
		backgroundColor: '#909090',
	},
	cardInnerStyle: {
		marginVertical: 10,
		marginHorizontal: 0,
		padding: 0,
		flexDirection: 'row',

	},
	cardTextStyle: {
		padding: 10,
	},
	viewBtn: {
		paddingHorizontal: 10,
		paddingVertical: 5,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 30,
		backgroundColor: COLORS.primary,
	},
	imageStyle: {
		width: 120,
		flex: 1,
		// height: 120,
		borderTopLeftRadius: 20,
		borderBottomLeftRadius: 20,
	},
});
