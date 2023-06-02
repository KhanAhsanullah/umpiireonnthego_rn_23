import {deleting, get, post} from './Http';

export const getInfoApi = () => get(`/info`);

export const registerApi = (data: any) =>
  post(`/register`, JSON.stringify(data));
export const loginApi = (data: any) => post(`/login`, JSON.stringify(data));

export const logoutApi = (data: any) =>
  post(`/user/logout`, JSON.stringify(data));

export const socialLoginApi = (data: any) =>
  post(`/social/login`, JSON.stringify(data));

export const socialRegisterApi = (data: any) =>
  post(`/social/register`, JSON.stringify(data));

export const setDeviceApi = (data: any) =>
  post(`/user/device`, JSON.stringify(data));

export const changePasswordApi = (data: any) =>
  post(`/change-password`, JSON.stringify(data));

export const forgotPasswordApi = (data: any) =>
  post(`/request-code`, JSON.stringify(data));

export const verifyCodeApi = (data: any) =>
  post(`/verify-code`, JSON.stringify(data));

export const resetPasswordApi = (data: any) =>
  post(`/change-password`, JSON.stringify(data));

export const getProfileApi = () => get(`/user/user`);

export const userUpdateApi = (data: any) =>
  post(`/user/update`, data, {}, true);

export const imageUploadApi = (data: any) =>
  post(`/user/update-profile-picture`, data, {}, true);

export const supportApi = (data: any) =>
  post(`/help-and-support/create`, JSON.stringify(data));

export const getServicesApi = () => get(`/settings/customize-service`);
export const customizeServicesApi = (data: any) =>
  post(`/settings/customize-service`, JSON.stringify(data));

/* 
  ==============================
  CARDS API
  ==============================
*/

export const getCardsApi = () => get(`/cards`);
export const createCardApi = (data: any) => post(`/card`, JSON.stringify(data));
export const deleteCardApi = (id: string) => deleting(`/card?card_id=${id}`);

