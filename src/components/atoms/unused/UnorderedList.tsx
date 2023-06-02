import React from 'react';
import {Text, TouchableOpacity, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS, FONTSIZE} from '../../../constants';
import {Typography} from '../Typography';

export const UnorderedList = (props: any) => {
  const list = props.list.map((item: any, index: number) => {
    return (
      <View key={index} style={{flexDirection: 'row', alignItems: 'center'}}>
        <View
          style={{
            height: 5,
            width: 5,
            backgroundColor: COLORS.primary,
            borderRadius: 5,
            marginRight: 5,
            alignSelf: 'flex-start',
            marginTop: 10,
          }}
        />
        <Typography
          textType="light"
          color={'#2e4045'}
          size={FONTSIZE.XS}
          style={{lineHeight: 25}}>
          {item}
        </Typography>
      </View>
    );
  });

  return <View>{list}</View>;
};
