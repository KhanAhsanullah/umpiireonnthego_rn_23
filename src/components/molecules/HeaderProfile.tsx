import React, { useState } from 'react';
import { View, StyleSheet, Image, ImageBackground } from 'react-native';
import { Typography } from '../../components/atoms';
import { IMAGES } from '../../constants';
import SafeAreaContainer from '../../containers/SafeAreaContainer';

const HeaderProfile = (props: any) => {
  return (
    // <SafeAreaContainer mode={'dark'} safeArea={false}>
    <View style={styles.headerView}>
      <ImageBackground
        source={IMAGES.Filter1}
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        resizeMode="cover">
        <Typography
          color="#fff"
          align="center"
          size={18}
          style={{ marginBottom: 20 }}>
          My Account
        </Typography>
        <View style={styles.profileImg}>
          <Image
            source={IMAGES.avatar}
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
              marginVertical: 20,
            }}
            resizeMode="cover"
          />
        </View>
        <Typography color="#fff" align="center" size={28} style={{}}>
          Johnathan Charles
        </Typography>
        <Typography color="#fff" align="center" size={14} style={{}}>
          JOhnathan.charles@gmail.com
        </Typography>
      </ImageBackground>
    </View>
    // </SafeAreaContainer>
  );
};

const styles = StyleSheet.create({
  headerView: {
    flex: 1,
  },
  profileImg: {
    borderRadius: 55,
    borderWidth: 3,
    width: 110,
    height: 110,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#fff',
  },
});

export default HeaderProfile;
