import { Alert } from 'react-native';
import store from '..';
import { navigate, onBack, reset } from '../../navigation/RootNavigation';
import { errorHandler } from '../../utils/utils';
import { disableLoader, enableLoader, showToast, updateAppStates } from '../actions/AppActions';

import { updateUserStates } from '../actions/UserActions';
import { deleting, get, post } from './Http';
import { removeItem, setItem } from '../../utils/localStorage';

// Home Api
export const getHomeApi = async () => {
	store.dispatch(enableLoader());
	return get(`game-listing`)
		.then((res) => {
			store.dispatch(disableLoader());
			console.log('homeRes', res);
			if (res.success == true) {
				store.dispatch(
					updateAppStates({
						homeData: res.data
					})
				);
			} else {
				console.log('err');
				
				errorHandler(res);
			}
			return res;
		})
		.catch((error) => {
			store.dispatch(disableLoader());
		});
};
export const navigateById = async (id: any) => {
	store.dispatch(enableLoader());
	return get(`game-listing?id=${id}`)
	// return get(`hotel/${id}`, data)
		.then((res) => {
			store.dispatch(disableLoader());
			console.log('navigateById.data',res);

			if (res.success == true) {
				store.dispatch(updateAppStates({ cardData: res}));
				console.log('cardData', res);
			} else {
				errorHandler(res);
				store.dispatch(disableLoader());
			}
			return res;
		})
		.catch((error) => {
			store.dispatch(disableLoader());
		});
};
export const getMissionApi= () => {
	store.dispatch(enableLoader());
	return get(`mission-statement`)
		.then((res) => {
			console.log('res',res);
			
			store.dispatch(disableLoader());
			if (res.success == true) {
				store.dispatch(disableLoader());
				return res;
			} else {
				errorHandler(res);
				store.dispatch(disableLoader());
			}
			return res;
		})
		.catch((error) => {
			store.dispatch(disableLoader());
		});
};
export const getGameList= () => {
	store.dispatch(enableLoader());
	return get(`game-open-listing`)
		.then((res) => {
			store.dispatch(disableLoader());
			if (res.success == true) {
				store.dispatch(disableLoader());
				store.dispatch(
					updateAppStates({
						categories: res.data
					})
				);
			} else {
				errorHandler(res);
				store.dispatch(disableLoader());
			}
			return res;
		})
		.catch((error) => {
			store.dispatch(disableLoader());
		});
};
export const getUmpireList= () => {
	store.dispatch(enableLoader());
	return get(`get-empire-listing`)
		.then((res) => {
			console.log('res',res);
			
			store.dispatch(disableLoader());
			if (res.success == true) {
				store.dispatch(disableLoader());
				store.dispatch(
					updateAppStates({
						umpireList: res.data
					})
				);
			} else {
				errorHandler(res);
				store.dispatch(disableLoader());
			}
		})
		.catch((error) => {
			store.dispatch(disableLoader());
		});
};
export const registerGame = async (data: any) => {
	console.log('dataCheck',data);
	store.dispatch(enableLoader());
	const formData = new FormData();
	formData.append('title', data.title);
	formData.append('city', data.city);
	formData.append('location', data.location)
	formData.append('time', data.time);
	formData.append('date', data.date);
	formData.append('sport_skills', data.sport_skills);
	formData.append('player_required', data.player_required);
	formData.append('details', data.details);
	formData.append('status',data.status );
	formData.append('user_id',data.user_id );
	formData.append('type_id',data.type_id );
	formData.append('img_path', data.profile_image);
	return post(`create-game`, formData, {}, true)
	.then((res) => {
		console.log('response',res);
		
		// store.dispatch(disableLoader());
		// if (res.status == 'success') {
		// 	store.dispatch(updateUserStates({
				
		// 		})
		// 	);
		// } 
		
	})
};
export const updateGame = async (data: any) => {
	console.log('dataCheck',data);
	store.dispatch(enableLoader());
	const formData = new FormData();
	formData.append('title', data.title);
	formData.append('city', data.city);
	formData.append('location', data.location)
	formData.append('time', data.time);
	formData.append('date', data.date);
	formData.append('sport_skills', data.sport_skills);
	formData.append('player_required', data.player_required);
	formData.append('details', data.details);
	formData.append('status',data.status );
	formData.append('user_id',data.user_id );
	formData.append('type_id',data.type_id );
	formData.append('img_path', data.profile_image);
	return post(`create-game`, formData, {}, true)
	.then((res) => {
		console.log('response',res);
		
		// store.dispatch(disableLoader());
		// if (res.status == 'success') {
		// 	store.dispatch(updateUserStates({
				
		// 		})
		// 	);
		// } 
		
	})
};







// Previous Project Api

// Conatct Us APIs
// export const contactUsApi = async (data: string) => {
// 	console.log('data', data);
// 	store.dispatch(enableLoader());
// 	return post(`contact-us`, JSON.stringify(data))
// 		.then((res) => {
// 			store.dispatch(disableLoader());
// 			if ('response' in res) {
// 				store.dispatch(updateUserStates({ user: res.response.messages }));
// 				navigate('Account');
// 				store.dispatch(showToast(res.response.messages[0]));
// 			} else {
// 				errorHandler(res);
// 			}
// 		})

// 		.catch((error) => {
// 			store.dispatch(disableLoader());
// 			console.log('err', error);
// 		});
// };
// // Rating Api
// export const ratingApi = (data: any) => {
// 	store.dispatch(enableLoader());
// 	return post(`rating`, JSON.stringify(data))
// 		.then((res) => {
// 			console.log('res', res, data);
// 			store.dispatch(disableLoader());
// 			if ('response' in res) {
// 				store.dispatch(showToast(res.response.messages));
// 			} else {
// 				errorHandler(res);
// 			}
// 		})
// 		.catch((error) => {
// 			store.dispatch(disableLoader());
// 			console.log('err', error);
// 		});
// };
// // Filter Screen

// interface FilterProps {
// 	category_id?: string;
// 	address: any;
// 	people: any;
// 	student_friendly: any;
// 	lat?: string | number;
// 	lng?: string | number;
// 	min_miles?: string | number;
// 	max_miles?: string | number;
// }

// export const getFilterApi = (data: FilterProps) => {
// 	store.dispatch(enableLoader());
// 	return get(`filters`, data)
// 		.then((res) => {
// 			store.dispatch(disableLoader());
// 			console.log('res', res);
// 			if ('response' in res) {
// 				store.dispatch(
// 					updateAppStates({
// 						filterData: res.response.data.data,
// 					})
// 				);
// 			} else {
// 				errorHandler(res);
// 			}
// 			return res;
// 		})
// 		.catch((error) => {
// 			store.dispatch(disableLoader());
// 		});
// };
// export const getCategoriesApi = () => {
// 	store.dispatch(enableLoader());
// 	return get(`categories`)
// 		.then((res) => {
// 			store.dispatch(disableLoader());
// 			console.log('res', res);
// 			if ('response' in res) {
// 				store.dispatch(
// 					updateAppStates({
// 						categories: res.response.data.data,
// 					})
// 				);
// 				console.log('categories', res.response.data.data);
// 			} else {
// 				errorHandler(res);
// 			}
// 			return res;
// 		})
// 		.catch((error) => {
// 			store.dispatch(disableLoader());
// 		});
// };
// export const getDestinationApi = () => {
// 	store.dispatch(enableLoader());
// 	return get(`destination`)
// 		.then((res) => {
// 			store.dispatch(disableLoader());
// 			console.log('res', res);
// 			if ('response' in res) {
// 				store.dispatch(
// 					updateAppStates({
// 						findDestination: res.response.data.data,
// 					})
// 				);
// 			} else {
// 				errorHandler(res);
// 			}
// 			return res;
// 		})
// 		.catch((error) => {
// 			store.dispatch(disableLoader());
// 		});
// };
// // Get Hotel Api

// interface HotelProps {
// 	name?: string;
// 	category_id?: string;
// 	lat?: string | number;
// 	lng?: string | number;
// }
// export const getHotelApi = async (data: HotelProps) => {
// 	store.dispatch(enableLoader());
// 	return get(`hotels`, data)
// 		.then((res) => {
// 			store.dispatch(disableLoader());
// 			if ('response' in res) {
// 				store.dispatch(
// 					updateAppStates({
// 						searchFilter: res.response.data.data,
// 					})
// 				);
// 				return res.response.data.data;
// 			} else {
// 				errorHandler(res);
// 			}
// 			return res;
// 		})
// 		.catch((error) => {
// 			store.dispatch(disableLoader());
// 		});
// };




// interface HotelDetailsProps {
// 	id?: string;
// 	lat?: string | number;
// 	lng?: string | number;
// }
// export const detailById = async (data: HotelDetailsProps) => {
// 	store.dispatch(enableLoader());
// 	return get(`hotel/detail/${data.id}`, data)
// 		.then((res) => {
// 			store.dispatch(disableLoader());
// 			console.log(res);
// 			if ('response' in res) {
// 				store.dispatch(updateAppStates({ detailData: res.response.data }));
// 				navigate('FilterStoreDetail', {
// 					// detailData: res.response.data.data,
// 				});
// 			} else {
// 				errorHandler(res);
// 				store.dispatch(disableLoader());
// 			}
// 			return res;
// 		})
// 		.catch((error) => {
// 			store.dispatch(disableLoader());
// 		});
// };
// export const getSearchApi = async ({ category, destination, lat, lng }: any) => {
// 	store.dispatch(enableLoader());
// 	return get(`hotel/search`, {
// 		category_id: category,
// 		location: destination,
// 		lat,
// 		lng,
// 	})
// 		.then((res) => {
// 			store.dispatch(disableLoader());
// 			console.log('res', res);
// 			if ('response' in res) {
// 				store.dispatch(
// 					updateAppStates({
// 						searchCategries: res.response.data.data,
// 					})
// 				);
// 			} else {
// 				errorHandler(res);
// 			}
// 			return res;
// 		})
// 		.catch((error) => {
// 			store.dispatch(disableLoader());
// 		});
// };
// // Notification Api
// export const notificationToggle = (data: any) => {
// 	store.dispatch(enableLoader());
// 	return post(`user/notification`, JSON.stringify(data))
// 		.then((res) => {
// 			console.log(res);
// 			store.dispatch(disableLoader());
// 		})

// 		.catch((error) => {
// 			store.dispatch(disableLoader());
// 			console.log('err', error);
// 		});
// };