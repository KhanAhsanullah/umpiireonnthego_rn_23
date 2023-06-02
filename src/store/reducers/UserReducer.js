import { RESET_STATE, RESET_USER_STATE, UPDATE_STATE, UPDATE_USER_STATE } from '../actions/UserActions';

const initialState = {
  defaultRoute: 'index',
  token: false,
  questionnaire: true,
  requirement: false,
  userType: null,
  account: null,

  notifications: {
    data: [],
    pagination: {},
  },
  user: {
    email: "",
    full_name: "",
    password: "",
    phone: "",
    address: "",
    profile_image: null,
  },
  services: [],
};

export default UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER_STATE:
      return {
        ...state,
        ...action.payload,
      };

    case RESET_USER_STATE:
      return { ...initialState };

    default:
      return state;
  }
};
