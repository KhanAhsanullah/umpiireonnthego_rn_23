import { Alert } from 'react-native';
import store from '..';
import { navigate, onBack, reset } from '../../navigation/RootNavigation';
import { errorHandler } from '../../utils/utils';
import { disableLoader, enableLoader, showToast, updateAppStates } from '../actions/AppActions';

import { updateUserStates } from '../actions/UserActions';
import { deleting, get, post } from './Http';
import { removeItem, setItem } from '../../utils/localStorage';

// Home Api
export const getHomeApi = async (lat: string, long: string) => {
	store.dispatch(enableLoader());
	return get(`home?lat=${lat}&lng=${long}`)
		.then((res) => {
			console.log('check', `home?lat=${lat}&lng=${long}`);

			store.dispatch(disableLoader());
			console.log('aaa', res);
			if ('response' in res) {
				store.dispatch(
					updateAppStates({
						homeData: res.response.data,
					})
				);
				console.log('home APi', res.response.data);
			} else {
				errorHandler(res);
			}
			return res;
		})
		.catch((error) => {
			store.dispatch(disableLoader());
		});
};
export const navigateById = async (data: any) => {
	store.dispatch(enableLoader());
	return get(`hotel/${data.id}`, data)
		.then((res) => {
			store.dispatch(disableLoader());
			console.log(res);
			if ('response' in res) {
				store.dispatch(updateAppStates({ filterData: res.response.data.data }));
				console.log('filter', res.response.data.data);
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
interface HotelDetailsProps {
	id?: string;
	lat?: string | number;
	lng?: string | number;
}
export const detailById = async (data: HotelDetailsProps) => {
	store.dispatch(enableLoader());
	return get(`hotel/detail/${data.id}`, data)
		.then((res) => {
			store.dispatch(disableLoader());
			console.log(res);
			if ('response' in res) {
				store.dispatch(updateAppStates({ detailData: res.response.data }));
				navigate('FilterStoreDetail', {
					// detailData: res.response.data.data,
				});
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
export const getSearchApi = async ({ category, destination, lat, lng }: any) => {
	store.dispatch(enableLoader());
	return get(`hotel/search`, {
		category_id: category,
		location: destination,
		lat,
		lng,
	})
		.then((res) => {
			store.dispatch(disableLoader());
			console.log('res', res);
			if ('response' in res) {
				store.dispatch(
					updateAppStates({
						searchCategries: res.response.data.data,
					})
				);
			} else {
				errorHandler(res);
			}
			return res;
		})
		.catch((error) => {
			store.dispatch(disableLoader());
		});
};
// Notification Api
export const notificationToggle = (data: any) => {
	store.dispatch(enableLoader());
	return post(`user/notification`, JSON.stringify(data))
		.then((res) => {
			console.log(res);
			store.dispatch(disableLoader());
		})

		.catch((error) => {
			store.dispatch(disableLoader());
			console.log('err', error);
		});
};
export const getActivity = () => {
	store.dispatch(enableLoader());
	return get(`activity`)
		.then((res) => {
			store.dispatch(disableLoader());
			console.log('res', res);
			if ('response' in res) {
				store.dispatch(disableLoader());
				return res.response.data.data;
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
// Conatct Us APIs
export const contactUsApi = async (data: string) => {
	console.log('data', data);
	store.dispatch(enableLoader());
	return post(`contact-us`, JSON.stringify(data))
		.then((res) => {
			store.dispatch(disableLoader());
			if ('response' in res) {
				store.dispatch(updateUserStates({ user: res.response.messages }));
				navigate('Account');
				store.dispatch(showToast(res.response.messages[0]));
			} else {
				errorHandler(res);
			}
		})

		.catch((error) => {
			store.dispatch(disableLoader());
			console.log('err', error);
		});
};
// Rating Api
export const ratingApi = (data: any) => {
	store.dispatch(enableLoader());
	return post(`rating`, JSON.stringify(data))
		.then((res) => {
			console.log('res', res, data);
			store.dispatch(disableLoader());
			if ('response' in res) {
				store.dispatch(showToast(res.response.messages));
			} else {
				errorHandler(res);
			}
		})
		.catch((error) => {
			store.dispatch(disableLoader());
			console.log('err', error);
		});
};
// Filter Screen

interface FilterProps {
	category_id?: string;
	address: any;
	people: any;
	student_friendly: any;
	lat?: string | number;
	lng?: string | number;
	min_miles?: string | number;
	max_miles?: string | number;
}

export const getFilterApi = (data: FilterProps) => {
	store.dispatch(enableLoader());
	return get(`filters`, data)
		.then((res) => {
			store.dispatch(disableLoader());
			console.log('res', res);
			if ('response' in res) {
				store.dispatch(
					updateAppStates({
						filterData: res.response.data.data,
					})
				);
			} else {
				errorHandler(res);
			}
			return res;
		})
		.catch((error) => {
			store.dispatch(disableLoader());
		});
};
export const getCategoriesApi = () => {
	store.dispatch(enableLoader());
	return get(`categories`)
		.then((res) => {
			store.dispatch(disableLoader());
			console.log('res', res);
			if ('response' in res) {
				store.dispatch(
					updateAppStates({
						categories: res.response.data.data,
					})
				);
				console.log('categories', res.response.data.data);
			} else {
				errorHandler(res);
			}
			return res;
		})
		.catch((error) => {
			store.dispatch(disableLoader());
		});
};
export const getDestinationApi = () => {
	store.dispatch(enableLoader());
	return get(`destination`)
		.then((res) => {
			store.dispatch(disableLoader());
			console.log('res', res);
			if ('response' in res) {
				store.dispatch(
					updateAppStates({
						findDestination: res.response.data.data,
					})
				);
			} else {
				errorHandler(res);
			}
			return res;
		})
		.catch((error) => {
			store.dispatch(disableLoader());
		});
};
// Get Hotel Api

interface HotelProps {
	name?: string;
	category_id?: string;
	lat?: string | number;
	lng?: string | number;
}

export const getHotelApi = async (data: HotelProps) => {
	store.dispatch(enableLoader());
	return get(`hotels`, data)
		.then((res) => {
			store.dispatch(disableLoader());
			if ('response' in res) {
				store.dispatch(
					updateAppStates({
						searchFilter: res.response.data.data,
					})
				);
				return res.response.data.data;
			} else {
				errorHandler(res);
			}
			return res;
		})
		.catch((error) => {
			store.dispatch(disableLoader());
		});
};
