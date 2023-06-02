import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView, Platform } from 'react-native';
import { Header, Typography } from '../../../components/atoms';
import { COLORS } from '../../../constants';
import SafeAreaContainer from '../../../containers/SafeAreaContainer';
import { aboutApi, policyApi } from '../../../store/services/AuthServices';
import { commonStyles } from '../../../style';
import { WebView } from 'react-native-webview';

const AboutUs = (props: any) => {
	const [data, setData] = useState('');
	console.log('data', data);

	useEffect(() => {
		aboutApi(props.route.params.slug)
			.then((data) => {
				setData(data);
			})
			.catch((err) => {
				console.log('err', err);
			});
	}, []);

	return (
		<SafeAreaContainer mode={'dark'} safeArea={false}>
			<View style={commonStyles.headerView}>
				<Header titleText={props.route.params.paramKey} />
			</View>
			<View style={[commonStyles.footerContainer, {}]}>
				<Typography size={22} textType='semiBold' color={COLORS.primary} style={{ marginVertical: 20 }}>
					{props.route.params.paramKey}
				</Typography>
				<WebView
					source={{
						html: `<meta name="viewport" content="width=device-width, initial-scale=1.0">
						${data || 'Loading'}`,
					}}
					style={{ width: '100%', flex: 1 }}
				/>
			</View>
		</SafeAreaContainer>
	);
};

export default AboutUs;
