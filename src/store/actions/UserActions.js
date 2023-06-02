export const UPDATE_USER_STATE = 'UPDATE_USER_STATE';
export const RESET_USER_STATE = 'RESET_USER_STATE';

export const AUTHENTICATE = 'USER_AUTHENTICATE';
export const REGISTER = 'USER_REGISTER';
export const SOCIAL_AUTH = 'SOCIAL_AUTHENTICATE';
export const SOCIAL_REGISTER = 'SOCIAL_REGISTER';
export const LOGOUT = 'USER_LOGOUT';

export const FORGET_PASSWORD = 'FORGET_PASSWORD';
export const VERIFY_CODE = 'VERIFY_CODE';
export const RESET_PASSWORD = 'RESET_PASSWORD';

export const UPDATE_PROFILE = 'UPDATE_PROFILE';
export const UPLOAD_IMAGE = 'UPLOAD_IMAGE';
export const SUBMIT_SUPPORT = 'SUBMIT_SUPPORT';
export const GET_SERVICES = 'GET_SERVICES';
export const CUSTOMIZE_SERVICE = 'CUSTOMIZE_SERVICE';

export const updateUserStates = payload => ({ type: UPDATE_USER_STATE, payload });
export const resetUserStates = () => ({ type: RESET_USER_STATE });

export const loginAction = payload => ({ type: AUTHENTICATE, payload });
export const registerAction = payload => ({ type: REGISTER, payload });
export const logoutAction = () => ({ type: LOGOUT });

export const updateProfileAction = payload => ({ type: UPDATE_PROFILE, payload });
export const uploadImageAction = payload => ({ type: UPLOAD_IMAGE, payload });
export const submitSupportAction = payload => ({ type: SUBMIT_SUPPORT, payload });

export const getServiceAction = () => ({ type: GET_SERVICES });
export const customizeServicesAction = payload => ({
  type: CUSTOMIZE_SERVICE,
  payload,
});

export const forgetPasswordAction = (payload, redirect = true) => ({
  type: FORGET_PASSWORD,
  payload,
  redirect,
});

export const verifyCodeAction = payload => ({
  type: VERIFY_CODE,
  payload,
});

export const resetPasswordActon = payload => ({
  type: RESET_PASSWORD,
  payload,
});

export const updateUserModal = user => {
  const payload = { user };
  payload.userType = user.user_type;
  if (user.user_type == 'nanny' && user.user_media.length < 5) {
    payload.requirement = true;
  }
  return { type: UPDATE_STATE, payload };
};
