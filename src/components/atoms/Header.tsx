import React, { useContext, useEffect, useMemo, useState } from "react";
import { Image, Text, View, StyleSheet, TouchableOpacity, StatusBar, Platform } from "react-native";
import IconRight from 'react-native-vector-icons/Entypo';
import IonIcon from "react-native-vector-icons/MaterialIcons";
import Icon from "react-native-vector-icons/AntDesign";
import { COLORS, FONTS, FONTSIZE, IMAGES } from "../../constants";
import { Typography } from "./Typography";
import { navigate, onBack } from '../../navigation/RootNavigation';

type Props = {
	title?: string;
	titleText?: string;
	titleContent?: string;
	backBtn?: boolean;
	rightIcons?: JSX.Element;
	fixed?: boolean;
	notificationBtn?: boolean;
};

export const Header = (props: Props) => {
	const {
		onPressLeft,
		onPressRight,
		onPressRight2,
		leftIcon = "left",
		rightIcon,
		rightIcon2,
		titleText = "",
		leftIconColor = COLORS.black,
		titleColor = COLORS.white,
		style = {},
	}: any = props;

	return (
		<View style={styles.container}>
			<View style={styles.headerView}>
				{leftIcon && (
					<TouchableOpacity onPress={() => onBack()}
						style={{
							width: 25,
							height: 25,
							backgroundColor: "#E0E0E0",
							borderRadius: 5,
							justifyContent: "center",
							alignItems: "center"
						}}>
						<Icon name={leftIcon} size={15} color={leftIconColor} />
					</TouchableOpacity>
				)}
				<View style={{ flex: 5, alignItems: "center" }}>
					<Typography size={20} textType="semiBold" color={titleColor} style={{ marginLeft: 20, }}>{titleText}</Typography>
				</View>
				<View style={{ flex: 1 }}>
					<View style={{ flexDirection: "row", alignSelf: "flex-end" }}>
						{rightIcon && (
							<TouchableOpacity onPress={onPressRight} style={{ flex: 1 }}>
								<Icon name={rightIcon} style={{ marginRight: 20, }} size={20} color={COLORS.white} />
							</TouchableOpacity>
						)}
						{rightIcon2 && (
							<TouchableOpacity
								onPress={onPressRight2}
								style={{ flexDirection: "row", }}>
								<IconRight name='dot-single' color={COLORS.black} size={25} style={styles.dotStyle} />
								<TouchableOpacity
									onPress={onPressRight2}>
									<IonIcon name={rightIcon2} size={22} color={COLORS.white} />
								</TouchableOpacity>
							</TouchableOpacity>
						)}
					</View>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 15,
		paddingTop: Platform.OS == 'ios' ? 10 : 0
	},
	headerView: {
		flexDirection: "row",
		alignItems: "center",
		height: 50,
	},
	headerText: {
		fontSize: FONTSIZE.L,
		color: COLORS.black,
		alignSelf: "center"

	},
	iconStyle: {
		width: 18,
		height: 18,
		color: COLORS.primary,
	},
	dotStyle: {
		color: 'red',
		position: "absolute",
		top: -5,
		right: -5,
		zIndex: 1000
	}
});
