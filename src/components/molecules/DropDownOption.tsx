import React, { useRef, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import { COLORS, FONTS, FONTSIZE } from '../../constants';
import { commonStyles } from '../../style';
import BottomSheet from '../atoms/BottomSheet';
import { Typography } from '../atoms/Typography';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LocationIcon } from '../icons';

export const DropDownOption = (props: any) => {
	const {
		rightIcon = <Icon name={'caret-down'} size={15} color={COLORS.darkGray} />,
		title,
		leftIcon = false,
		options = [],
		selected = null,
		onSelect = () => { },
		placeholder = 'Select a Option',
	} = props;
	const actionSheet: any = useRef();

	return (
		<TouchableOpacity
			onPress={() => {
				actionSheet.current.show({
					title: title,
					options: options,
					onSelect: (e: any) => {
						actionSheet.current.close();
						onSelect(e);
					},
				});
			}}
			style={{ flex: 1, backgroundColor: "#fff", paddingHorizontal: 10, marginVertical: 15, borderRadius: 10, height: 50, alignItems: 'center' }}>
			<Typography textType='semiBold' size={16}>
				{title}
			</Typography>
			<View style={commonStyles.flexJustRowAlign}>
				<View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
					{leftIcon && <LocationIcon fill={COLORS.primary} width={12} height={12} />}
					{
						placeholder &&
						<Typography
							color={COLORS.black}
							size={12} style={{ marginLeft: 5, marginTop: -10, }}
							numberOfLines={1}>
							{selected || placeholder}
						</Typography>
					}

				</View>
				<Icon name='angle-down' color={COLORS.black} style={{ marginLeft: 10, marginTop: -10, }} />
			</View>
			<BottomSheet ref={actionSheet} />
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	selectBtn: {
		paddingVertical: 10,
		marginVertical: 5,
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: 1,
		borderRadius: 30,
		width: '32%',
	},
	dropDownContainer: {
		flex: 1,
		fontSize: FONTSIZE.S,
		fontFamily: FONTS.PoppinsRegular,
		color: COLORS.black,
		padding: 10,
	},
	innerModalStyling: {
		marginVertical: 10,
		padding: 10,
		borderRadius: 10,
		borderColor: COLORS.primary,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
