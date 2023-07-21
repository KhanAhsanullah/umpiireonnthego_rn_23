import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import SafeAreaContainer from '../../../containers/SafeAreaContainer';
import { WebView } from 'react-native-webview';
import { Header, Typography } from '../../../components/atoms';
import { COLORS } from '../../../constants';
import { policyApi } from '../../../store/services/AuthServices';


const Privacy = (props: any) => {
	const [data, setData] = useState('');
	useEffect(() => {
		policyApi('')
			.then((data) => setData(data))
			.catch((err) => console.log('err', err));
	}, []);
	return (
		<SafeAreaContainer safeArea={false}>
			<View style={{ marginHorizontal: 20, marginTop: 40, }}>
				<Header
					titleText="Privacy Policy"
					titleColor={COLORS.black}
				/>
			</View>

			<View style={styles.container}>
				<WebView
					source={{
						html: `<meta name="viewport" content="width=device-width, initial-scale=1.0">
                      ${data || 'data Privacy'}`,
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




