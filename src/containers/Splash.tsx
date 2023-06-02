import React, { useEffect } from 'react';
import { Image, ImageBackground, StyleSheet, View, TouchableOpacity } from 'react-native';
import { COLORS, IMAGES } from '../constants';
import SafeAreaContainer from './SafeAreaContainer';
import { useDispatch } from 'react-redux';
import { Button, Typography } from '../components/atoms';
import { navigate } from '../navigation/RootNavigation';
import store from '../store';
import { updateAppStates } from '../store/actions/AppActions';

const Splash = (props: any) => {

  // useEffect(() => {
  //   setTimeout(() => {
  //     props.navigation.navigate('Login')
  //   }, 1000);
  // }, []);
  // useEffect(() => {
  //   setTimeout(async () => {
  //     const token = await getItem('token');
  //     const user = await getItem('user');
  //     if (user && token) {
  //       console.log('user', user);
  //       console.log('token', token);

  //       dispatch(updateUserStates({
  //         token, user
  //       }))

  //       dispatch(updateAppStates({
  //         splash: false,
  //         is_authorized: true,
  //       }));
  //     } else {
  //       dispatch(updateAppStates({
  //         splash: false,
  //         is_authorized: false,
  //       }));
  //     }
  //   }, 3000);

  //   // requestUserPermission()
  // }, []);

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
            <Typography size={40} color='#fff' style={{ marginTop: 50, }}>
              WELCOME BACK!
            </Typography>
            <View style={{ width: 300, height: '40%' }}>
              <Image
                source={IMAGES.Umpire}
                style={{ flex: 1 }}
                resizeMode='contain'
              />
            </View>
            <Typography size={25} color={COLORS.darkGray} style={{ top: -10 }}>
              On The Go
            </Typography>
            <View style={{ marginVertical: 50, width: "100%" }}>
              <Button label={'Get Started'} onPress={() => {
                store.dispatch(updateAppStates({ splash: false }))
              }} backgroundColor={COLORS.primary} borderRadius={10} />

            </View>
            <TouchableOpacity>
              {/* <Typography size={16} color={COLORS.white} style={{}}>
                Already have an account? LOG IN
              </Typography> */}
            </TouchableOpacity>
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
