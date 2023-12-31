import { navigate, onBack, reset } from '../../navigation/RootNavigation';
import { errorHandler } from '../../utils/utils';
import { disableLoader, enableLoader, showToast, updateAppStates } from '../actions/AppActions';
import { updateUserStates } from '../actions/UserActions';
import { get, post } from './Http';
import { removeItem, setItem } from '../../utils/localStorage';
import store from '..';

export const registerApi = async (data: any) => {
	store.dispatch(enableLoader());
	const formData = new FormData();
	formData.append('first_name', data.first_name);
	formData.append('last_name', data.last_name);
	formData.append('email', data.email)
	formData.append('phone', data.phone);
	formData.append('address', data.address);
	formData.append('gender', data.gender);
	formData.append('password', data.password);
	// formData.append('user_role',data.user_role );
	formData.append('role_id',data.user_role );
	formData.append('img_path', data.profile_image);
	// formData.append('profile_image', data.profile_image);
	return post(`sign-up`, formData, {}, true)
	.then((res) => {
		store.dispatch(disableLoader());
		console.log('signupRes',res);
		if (res.status == 'success') {

			store.dispatch(updateUserStates({
				user: res.response.data,
				})
			);
			console.log('checkout',res.response.data);
			setItem('user', res.response.data);
			navigate('OTPScreen')
			
		} 
		else {
			errorHandler(res);
			store.dispatch(showToast(res.message.email[0]))
		}
	})
	// .catch((error) => {
	// 	console.log('err',error.message);
		
	// 	store.dispatch(disableLoader());
	// 	store.dispatch(showToast(error.message));
	// 	store.dispatch(disableLoader());
	// });
};
export const loginApi = async (data: any) => {
	store.dispatch(enableLoader());
	return post(`sign-in`, JSON.stringify(data))
		.then((res) => {
			store.dispatch(disableLoader());
			console.log('LoginRes',res);
			if (res.status == 200) {
				store.dispatch(updateUserStates({
					user: res.response.data,
					})
				);
				setItem('user', res.response.data);
				if(res.status == 200){
					store.dispatch(updateAppStates({ is_authorized: true, }));
			}else{
				navigate('OTPScreen', {
					// whichRoute: 'LOGIN'
				})
			}
			} 
			else {
				errorHandler(res);
				store.dispatch(showToast(res.message))
			}
		})
		// .catch((res) => {
		// 	store.dispatch(disableLoader());
		// 	store.dispatch(showToast(res.message[0]));
		// 	store.dispatch(disableLoader());
		// });
};
export const socialLoginApi = async (data: any) => {
	store.dispatch(enableLoader());
	return post(`social/register`, JSON.stringify(data))
		.then((res) => {
			console.log(res);
			store.dispatch(disableLoader());
		// 	if ('response' in res) {
		// 		store.dispatch(updateUserStates({
		// 				token: res.response.data.token,
		// 				user: res.response.data,
		// 			})
		// 		);
		// 		setItem('user', res.response.data);
		// 		setItem('token', res.response.data.token);
		// 		store.dispatch(
		// 			updateAppStates({
		// 				is_authorized: true,
		// 			})
		// 		);
		// 	} else {
		// 		errorHandler(res);
		// 	}

		// 	return res;
		// })
		if ('response' in res) {
			store.dispatch(
				updateUserStates({
					token: res.response.data.token,
					user: res.response.data,
				})
			);
			setItem('user', res.response.data);
			setItem('token', res.response.data.token);
			console.log('log');
			store.dispatch(
				updateAppStates({
					is_authorized: true,
				})
			);
			//   navigate('Tabs')
		} else {
			errorHandler(res);
		}
			return res;
		})
		.catch((error) => {
			store.dispatch(enableLoader());
		});
};
export const forgotApi = async (data: any, onSuccess: any) => {
	store.dispatch(enableLoader());
	return post(`send-code`, JSON.stringify(data))
		.then((res) => {
			store.dispatch(disableLoader());
			if ('response' in res) {
				store.dispatch(showToast(res.response?.messages[0]));
				onSuccess();
			} else {
				errorHandler(res);
			}
		})
		.catch((error) => {
			console.log(error);
			store.dispatch(disableLoader());
		});
};
export const OTPApi = async (data: any, login:any,) => {
	store.dispatch(enableLoader());
	return post(login ? `sign-in-verification` : 'verification-code', JSON.stringify(data))
		.then((res) => {
			store.dispatch(disableLoader());
			store.dispatch(updateAppStates({ is_authorized: true, }));

		})
		.catch((error) => {
			store.dispatch(disableLoader());
		});
};
export const resetPassword = async (data: any, props: any) => {
	store.dispatch(enableLoader());
	return post(`forgot-password`, JSON.stringify(data))
		.then((res) => {
			store.dispatch(disableLoader());
			console.log('res', res);
			if ('response' in res) {
				store.dispatch(
					updateUserStates({
						resetPassword: res.response.data,
					})
				);
				console.log('resetPassword', res.response.data);
				store.dispatch(showToast(res.response.messages[0]));
			} else {
				errorHandler(res);
			}
			return res;
		})
		.catch((error) => {
			store.dispatch(disableLoader());
		});
};
export const updateUserApi = async (data: any) => {
	console.log('data', data);
	store.dispatch(enableLoader());
	const formData = new FormData();
	formData.append('full_name', data.full_name);
	// formData.append('email', data.email)
	formData.append('phone', data.phone);
	formData.append('profile_image', data.profile_image);
	return post(`profile/update`, formData, {}, true)
		.then((res) => {
			console.log('res', res);
			store.dispatch(disableLoader());
			if ('response' in res) {
				// store.dispatch(updateUserStates({ user: res.response.data }));
				// setItem('user', res.response.data);
				store.dispatch(showToast(res.response?.messages[0]));
				// Alert.alert(res.response?.messages[0])
				return res.response.data;
			} else {
				errorHandler(res);
				return false;
			}

			return res;
		})
		.catch((error) => {
			store.dispatch(disableLoader());
		});
};
export const changePasswordApi = async (data: any) => {
	store.dispatch(enableLoader());
	return post(`change-password`, JSON.stringify(data))
		.then((res) => {
			store.dispatch(disableLoader());
			if ('response' in res) {
				console.log('res', res);
				store.dispatch(showToast(res.response?.messages[0]));
				onBack();
			} else {
				errorHandler(res);
			}
			return res;
		})
		.catch((error) => {
			store.dispatch(disableLoader());
		});
};
export const policyApi = async (data: any) => {
	store.dispatch(enableLoader());
	return get(`content/privacy-policy`)
		.then((res) => {
			console.log('res',res);
			store.dispatch(enableLoader());
			if ('response' in res) {
				store.dispatch(disableLoader());
				return res.response.data.content.description;
			} else {
				errorHandler(res);
				store.dispatch(disableLoader());
			}
		})
};
export const termsApi = async (data: any) => {
	store.dispatch(enableLoader());
	return get(`content/terms-and-conditions`)
		.then((res) => {
			store.dispatch(enableLoader());
			if ('response' in res) {
				store.dispatch(disableLoader());
				return res.response.data.content.description;
			} else {
				errorHandler(res);
				store.dispatch(disableLoader());
			}
		})
};
export const logoutApi = async (data: any) => {
	store.dispatch(enableLoader());
	return post(`signout`, JSON.stringify(data))
		.then((res) => {
			store.dispatch(disableLoader());
			if ('response' in res) {
				console.log('res', res);
				removeItem('user');
				removeItem('token');
				store.dispatch(updateUserStates({
						token: null,
						user: {},
					})
				);
				store.dispatch(updateAppStates({is_authorized: false})
				);
				store.showToast(res.response.messages[0])
			} else {
				errorHandler(res);
			}
			return res;
		})
		.catch((error) => {
			store.dispatch(disableLoader());
		});
};
