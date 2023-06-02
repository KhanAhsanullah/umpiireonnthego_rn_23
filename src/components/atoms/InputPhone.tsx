// import React, { useRef, useState } from 'react';
// import { View, TextInput, StyleSheet } from 'react-native';
import React, { useRef, useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { COLORS, FONTS, FONTSIZE } from '../../constants';
import { Typography } from './Typography';
import { commonStyles } from '../../style';
import { capitalize } from '../../utils/utils';
// import PhoneInput, { isValidNumber } from 'react-native-phone-number-input';

export const InputPhone = (props: any) => {
	const {
		title = null,
		error,
		value,
		onChangeText = () => { },
		phoneRef = (input: any) => { },
		inputRef = (input: any) => { },
		style = {},
		onChangeFormattedText = () => { },
	} = props;

	const [active, setActive] = useState(false);

	return (
		<View style={[styles.inputField, style]}>
			<View
				style={[
					commonStyles.inputView,
					{
						borderColor: active ? COLORS.primary : COLORS.lightGray,
					},
				]}>
				<Typography textType={'light'} size={FONTSIZE.XS} color={active ? COLORS.primary : COLORS.darkGray} style={styles.fieldLabel}>
					{title}
				</Typography>

				{/* <PhoneInput
					ref={phoneRef}
					textInputProps={{
						ref: inputRef,
						placeholderTextColor: COLORS.darkGray,
						onFocus: () => setActive(true),
						onBlur: () => setActive(false),
						...props,
					}}
					onChangeText={onChangeText}
					defaultValue={value}
					defaultCode='US'
					layout='first'
					textContainerStyle={{
						backgroundColor: 'transparent',
						padding: 0,
						margin: -8,
					}}
					codeTextStyle={{
						fontFamily: FONTS.PoppinsRegular,
						fontSize: 14,
					}}
					textInputStyle={{
						fontFamily: FONTS.PoppinsRegular,
						color: COLORS.black,
						fontSize: 14,
						padding: 2,
					}}
					containerStyle={{
						flex: 1,
						alignItems: 'center',
					}}
					onChangeFormattedText={onChangeFormattedText}
				/> */}
			</View>
			{error && (
				<Typography color={COLORS.primary} size={FONTSIZE.XXS} textType='light' align='right'>
					{capitalize(error)}
				</Typography>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	inputField: {
		marginVertical: 10,
	},
	fieldLabel: {
		position: 'absolute',
		top: -10,
		left: 16,
		paddingHorizontal: 8,
		backgroundColor: '#fff',
	},
});
