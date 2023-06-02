import React from 'react';
import {View, ActivityIndicator} from 'react-native';

export const Loader = () => {
  return (
    <View
      style={{
        position: 'absolute',
        height: '100%',
        width: '100%',
        backgroundColor: 'black',
        opacity: 0.5,
        zIndex: 999,
        elevation: 10,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <ActivityIndicator color="#fff" size={'large'} />
    </View>
  );
};
