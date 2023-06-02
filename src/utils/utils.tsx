import React from 'react';
import {Alert, Dimensions} from 'react-native';
import {COLORS, MAP_KEY, SRTIPE_PK} from '../constants';
import ImagePicker from 'react-native-image-crop-picker';
// import { disableLoader, enableLoader, showToast } from "../store/actions/AppActions";
import Icon from 'react-native-vector-icons/FontAwesome';
import store from '../store';
import {removeItem} from './localStorage';
import moment from 'moment';
import {StarIcon} from '../components/icons';
import {
  disableLoader,
  enableLoader,
  showToast,
} from '../store/actions/AppActions';
import {updateUserStates} from '../store/actions/UserActions';
const {width, height} = Dimensions.get('window');

export const getPlaces = (q: string) => {
  return new Promise((resolve, reject) => {
    fetch(
      `https://maps.googleapis.com/maps/api/place/autocomplete/json?key=${MAP_KEY}&input=${q}&types=geocode`,
      {
        method: 'post',
      },
    )
      .then(res => res.json())
      .then(res => {
        console.log('getPlaces', res);
        resolve(res);
      })
      .catch(err => reject(err));
  });
};

export const getGeocode = (lat: string, lng: string) => {
  return new Promise((resolve, reject) => {
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&sensor=true&key=${MAP_KEY}`,
      {
        method: 'post',
      },
    )
      .then(res => res.json())
      .then(res => {
        console.log('getGeocode', res);
        resolve(res);
      })
      .catch(err => reject(err));
  });
};

export const getPlaceDetail = (place_id: string) => {
  return new Promise((resolve, reject) => {
    fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?key=${MAP_KEY}&placeid=${place_id}&types=geocode`,
      {
        method: 'post',
      },
    )
      .then(res => res.json())
      .then(res => {
        // console.log('getPlaceDetail', res);
        resolve(res);
      })
      .catch(err => reject(err));
  });
};

export const imageCamera = () => {
  return ImagePicker.openCamera({
    mediaType: 'photo',
    compressImageQuality: 1,
    cropping: true,
  })
    .then((resp: any) => {
      return {
        name: resp.filename || `image_${new Date().getDate()}`,
        type: resp.mime,
        uri: resp.path,
      };
    })
    .catch(error => {
      console.log(error);
    });
};

export const imagePicker = (props?: any) => {
  const {
    multiple = false,
    minFiles = 1,
    maxFiles = 1,
    cropping = false,
  } = props;

  return ImagePicker.openPicker({
    mediaType: 'any',
    compressImageQuality: 1,
    cropping,
    multiple,
    minFiles,
  })
    .then((resp: any) => {
      if (multiple) {
        return resp.map((item: any) => {
          return {
            name: item.filename || `image_${new Date().getDate()}`,
            type: item.mime,
            uri: item.path,
          };
        });
      }

      return {
        name: resp.filename || `image_${new Date().getDate()}`,
        type: resp.mime,
        uri: resp.path,
      };
    })
    .catch(error => {
      console.log(error);
    });
};

export const renderStars = (
  rating: any,
  size: number = 12,
  color: string = COLORS.rating,
) => {
  const stars = new Array(parseInt(rating)).fill(0);
  return stars.map(() => <StarIcon color={color} />);
};

export const serialize = (obj: any | {}) => {
  var str = [];
  for (var p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
    }
  return str.join('&');
};

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;
export const scale = (size: number) => (width / guidelineBaseWidth) * size;
export const verticalScale = (size: number) =>
  (height / guidelineBaseHeight) * size;
export const moderateScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;

export const formatUserType = (str: any) => {
  return str.replace('_', ' ');
};

export const dateFormate = (date: any) => {
  var d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();
  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;
  return [year, month, day].join('-');
  // return moment( str, 'YYYY-MM-DD hh:mm:ss' ).format('lll');
};

export const datetimeFormat = (str: string, utc = false) => {
  let date: any = moment(str, 'YYYY-MM-DD hh:mm:ss');
  if (utc) date = moment.utc(str).local();
  return date.format('lll');
};

export const timeSince = (date: any) => {
  return moment(moment(date).utc()).local().fromNow();
};

export function errorHandler(res: any) {
  if ('error' in res) {
    store.dispatch(showToast(res.error.messages[0]));

    switch (res.error.code) {
      case 401:
        removeItem('key');
        store.dispatch(
          updateUserStates({
            user: {},
            token: null,
            is_authorized: false,
          }),
        );

        break;

      case 'invalid_number':
        store.dispatch(showToast('invalid_number'));
        break;
      default:
        if (res.error?.messages[0])
          store.dispatch(showToast(JSON.stringify(res.error?.messages[0])));
        else store.dispatch(showToast(JSON.stringify(res)));
        break;
    }
  } else {
    store.dispatch(showToast('Something went wrong'));
  }
}

export function getCurrentWeek(date: string) {
  var currentDate = moment(date);
  var weekStart = currentDate.clone().startOf('isoWeek');
  var weekEnd = currentDate.clone().endOf('isoWeek');
  return [weekStart.format('YYYY-MM-DD'), weekEnd.format('YYYY-MM-DD')];
}

export function formUrlEncode(payload: {}) {
  let formBody: any = [];
  for (var property in payload) {
    var encodedKey = encodeURIComponent(property);
    var encodedValue = encodeURIComponent(payload[property]);
    formBody.push(encodedKey + '=' + encodedValue);
  }

  return formBody.join('&');
}

interface CardProps {
  card_holder: string;
  card_number: string;
  expiry_date: string;
  cvv: Number;
}

export function getCardToken(data: CardProps) {
  var myHeaders = new Headers();
  myHeaders.append('Authorization', `Bearer ${SRTIPE_PK}`);
  myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');

  const expiry = data.expiry_date.split('/');
  const details: any = {
    'card[name]': data.card_holder,
    'card[number]': data.card_number.replace(' ', ''),
    'card[exp_month]': expiry[0],
    'card[exp_year]': expiry[1],
    'card[cvc]': data.cvv,
  };

  var requestOptions: any = {
    method: 'POST',
    headers: myHeaders,
    body: formUrlEncode(details),
  };

  store.dispatch(enableLoader());
  return fetch(`https://api.stripe.com/v1/tokens`, requestOptions)
    .then(response => response.json())
    .then(result => {
      store.dispatch(disableLoader());
      return result.id;
    })
    .catch(err => errorHandler(err));
}

export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
