import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { Platform } from 'react-native';

// import { LoginButton, AccessToken, GraphRequest, GraphRequestManager, LoginManager } from 'react-native-fbsdk';

// import { LoginManager, AccessToken, GraphRequest, GraphRequestManager } from 'react-native-fbsdk-next';
import Login from '../screens/auth/Login';

import store from '../store';
import { showToast } from '../store/actions/AppActions';

const profileRequestParams = {
	fields: {
		string: 'id, name, email, first_name, last_name, gender, picture',
	},
};
const profileRequestConfig = {
	httpMethod: 'GET',
	version: 'v2.5',
	parameters: profileRequestParams,
};

// export const facebookLogin = async (res: any = {}) => {
// 	return new Promise(async (resolve, reject) => {
// 		// if (Platform.OS === 'android') {
// 		// 	LoginManager.setLoginBehavior('web_only');
// 		// }

// 		LoginManager.logInWithPermissions(['email']).then(
// 			function (result: any) {
// 				if (result.isCancelled) {
// 					console.log('Login cancelled');
// 				} else {
// 					console.log('Login success with permissions: ' + result.grantedPermissions.toString());

// 					AccessToken.getCurrentAccessToken().then((data: any) => {
// 						console.log('data', data);

// 						const infoRequest = new GraphRequest('/me', profileRequestConfig, (error: any, result: any) => {
// 							if (error) {
// 								store.dispatch(showToast(error.toString()));
// 								console.log('Error fetching data: ', error.toString());
// 							} else {
// 								resolve(result);
// 								console.log('Success fetching data: ', result.toString());
// 							}
// 						});
// 						// Start the graph request.
// 						new GraphRequestManager().addRequest(infoRequest).start();
// 					});
// 				}
// 			},
// 			function (error: any) {
// 				console.log('Login fail with error: ' + error);
// 				store.dispatch(showToast(error));
// 				reject(error);
// 			}
// 		);
// 	});
// };

export const googleLogin = async (res: any = {}) => {
	GoogleSignin.configure({
		webClientId: '174350513218-sgaiirkkudnnen9gfl1p6ftgptkkblbl.apps.googleusercontent.com',
		offlineAccess: true,
		hostedDomain: '',
	});
	return new Promise(async (resolve, reject) => {
		try {
			await GoogleSignin.hasPlayServices();
			const userInfo = await GoogleSignin.signIn();
			resolve(userInfo.user);
		} catch (error: any) {
			console.log('error', error, error.code);
			// store.dispatch(showToast(error.toString()));
			reject(error);
			if (error.code === statusCodes.SIGN_IN_CANCELLED) {
				// user cancelled the login flow
			} else if (error.code === statusCodes.IN_PROGRESS) {
				// operation (e.g. sign in) is in progress already
			} else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
				// play services not available or outdated
			} else {
				// some other error happened
			}
		}
	});
};


