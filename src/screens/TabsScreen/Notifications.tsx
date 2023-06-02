import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList, Image, TouchableOpacity, RefreshControl } from 'react-native';
import IconIonic from 'react-native-vector-icons/Ionicons';
import { Typography, Header } from '../../components/atoms';
import { COLORS, IMAGES } from '../../constants';
import SafeAreaContainer from '../../containers/SafeAreaContainer';
import { getActivity } from '../../store/services/AppServices';
import { commonStyles } from '../../style';

const Notifications = (props: any) => {

	return (
		<SafeAreaContainer mode={'dark'} safeArea={false}>
			<View style={commonStyles.headerView}>
				<Header titleText='Saved' titleColor={COLORS.black} />
			</View>

		</SafeAreaContainer>
	);
};

const styles = StyleSheet.create({
	card: {
		flex: 1,
		padding: 15,
		backgroundColor: '#fff',
		borderColor: '#fff',
		borderRadius: 10,
		marginVertical: 15,
		flexDirection: 'row',
		// alignItems: 'center',
		...commonStyles.boxShadow,
	},
	leftBoxStyle: {
		height: 40,
		width: 40,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 10,
		backgroundColor: COLORS.primary,
	},
});

export default Notifications;
