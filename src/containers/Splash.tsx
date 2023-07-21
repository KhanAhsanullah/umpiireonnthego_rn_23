import React, { useEffect } from 'react';
import { Image, ImageBackground, StyleSheet, View, TouchableOpacity } from 'react-native';
import { COLORS, IMAGES } from '../constants';
import SafeAreaContainer from './SafeAreaContainer';
import { useDispatch } from 'react-redux';
import { Button, Typography } from '../components/atoms';
import { navigate } from '../navigation/RootNavigation';
import store from '../store';
import { updateAppStates } from '../store/actions/AppActions';
import { getItem } from '../utils/localStorage';
import { updateUserStates } from '../store/actions/UserActions';

const Splash = (props: any) => {
  const dispatch = useDispatch()
  useEffect(() => {
    setTimeout(() => {
      // props.navigation.navigate('Login')
    }, 1000);
  }, []);
  useEffect(() => {
    setTimeout(async () => {
      const token = await getItem('token');
      const user = await getItem('user');
      if (user && token) {
        console.log('user', user);
        console.log('token', token);

        dispatch(updateUserStates({
          token, user
        }))

        dispatch(updateAppStates({
          splash: false,
          is_authorized: true,
        }));
      } else {
        dispatch(updateAppStates({
          splash: false,
          is_authorized: false,
        }));
      }
    }, 3000);

    // requestUserPermission()
  }, []);

  // const requestUserPermission = async () => {
  //   const authStatus = await messaging().requestPermission();
  //   const enabled =
  //     authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
  //     authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  //   if (enabled) {
  //     getFcmToken();
  //     console.log('Authorization status:', authStatus);
  //   }
  // };

  // const getFcmToken = async () => {
  //   const fcmToken = await messaging().getToken();
  //   if (fcmToken) {
  //     console.log('Your Firebase Token is:', fcmToken);
  //     dispatch(updateAppStates({ fcmToken }));
  //   } else {
  //     console.log('Failed', 'No token received');
  //   }
  // };

  return (
    <SafeAreaContainer safeArea={false}>
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={IMAGES.SplashImg}
          style={{ width: '100%', height: '110%' }}
          resizeMode='cover'
        >
          <View style={styles.container}>
            <Typography size={40} color='#fff' style={{ marginTop: 100, }}>
              WELCOME BACK!
            </Typography>
            <View style={{ width: 300, height: 250 }}>
              <Image
                source={IMAGES.Umpire}
                style={{ flex: 1 }}
                resizeMode='contain'
              />
            </View>
            <Typography size={25} color={COLORS.darkGray} style={{ top: 0 }}>
              On The Go
            </Typography>

            <View style={{ width: "100%" }}>
              <Button label={'Get Started'} onPress={() => {
                store.dispatch(updateAppStates({ splash: false }))
              }} backgroundColor={COLORS.primary} borderRadius={10} />
            </View>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaContainer >
  );
};
export default Splash;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
});
