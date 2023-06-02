import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import SafeAreaContainer from '../../../containers/SafeAreaContainer';
import { WebView } from 'react-native-webview';
import { Header } from '../../../components/atoms';
import { COLORS } from '../../../constants';


const Privacy = (props: any) => {
	const [data, setData] = useState('');
	// useEffect(() => {
	// 	policyApi('privacy-policy')
	// 		.then((data) => {
	// 			console.log('data Check', data);
	// 			setData(data);
	// 		})
	// 		.catch((err) => {
	// 			console.log('err', err);
	// 		});
	// }, []);
	return (
		<SafeAreaContainer safeArea={false} mode={'light'}>
			<View style={{ margin: 20, }}>
				<Header
					titleText="Privacy Policy"
					titleColor={COLORS.black}
				// leftArrowColor={COLORS.white}
				/>
			</View>

			<View style={styles.container}>
				<WebView
					source={{
						html: `<meta name="viewport" content="width=device-width, initial-scale=1.0">
                      ${data || 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available'}`,
					}}
					showsVerticalScrollIndicator={false}
					style={{ width: '100%', flex: 1 }}
				/>
			</View>
		</SafeAreaContainer>
	);
};

export default Privacy;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
	},
});




