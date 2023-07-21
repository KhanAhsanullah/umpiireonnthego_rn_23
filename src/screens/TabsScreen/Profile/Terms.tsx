import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import SafeAreaContainer from '../../../containers/SafeAreaContainer';
import { WebView } from 'react-native-webview';
import { Header } from '../../../components/atoms';
import { COLORS } from '../../../constants';
import { termsApi } from '../../../store/services/AuthServices';


const Terms = (props: any) => {
	const [data, setData] = useState('');
	useEffect(() => {
		termsApi('')
			.then((data) => setData(data))
			.catch((err) => console.log('err', err));
	}, []);
	return (
		<SafeAreaContainer safeArea={false}>
			<View style={{ marginHorizontal: 20, marginTop: 40, }}>
				<Header
					titleText="Terms And Conditions"
					titleColor={COLORS.black}
				/>
			</View>

			<View style={styles.container}>
				<WebView
					source={{
						html: `<meta name="viewport" content="width=device-width, initial-scale=1.0">
                      ${data || 'data Terms'}`,
					}}
					showsVerticalScrollIndicator={false}
					style={{ width: '100%', flex: 1 }}
				/>
			</View>
		</SafeAreaContainer>
	);
};
export default Terms;
const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
	},
});



