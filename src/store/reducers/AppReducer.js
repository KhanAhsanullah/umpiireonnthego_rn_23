import {
  CHECK_MARK,
  SHOW_TOAST,
  UPDATE_APP_STATE,
  UPDATE_LOADER,
} from '../actions/AppActions';

const initialState = {
  splash: true,
  loader: false,
  is_authorized: false,

  fcmToken: null,

  homeData: [],
  searchCategries: [],
  cardData: [],
  detailData: [],
  ratingData: [],
  categories: [],
  umpireList: [],
  findDestination: [],
  searchFilter: [],
  previoueSearches: [],
  notificationData: [],
  allData: [],

  coord: {
    lat: '',
    long: ''
  },

  info: {},
  toast: {
    show: false,
    title: '',
    message: '',
  },
  service: null,
  origin: {},
  destination: {},
  duration: 0,

};

export default AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_LOADER:
      return {
        ...state,
        loader: action.loader,
      };
    case CHECK_MARK:
      return {
        ...state,
        checkMark: action.checkMark,
      };

    case SHOW_TOAST:
      return {
        ...state,
        toast: action.toast,
      };

    case UPDATE_APP_STATE:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};
