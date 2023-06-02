import React, { useEffect, useState } from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import { Typography } from './Typography';
import Icon from 'react-native-vector-icons/Entypo';
import { COLORS } from '../../constants';

const getRemaing = time => {
  const mins = Math.floor(time / 60);
  const secs = time - mins * 60;
  return { mins, secs };
};

export const TimerOTP = props => {
  const { onEnd = () => { } } = props;

  const [remaingSec, setRemaingSec] = useState(30);
  const { mins, secs } = getRemaing(remaingSec);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemaingSec(remaingSec => {
        if (remaingSec - 1 <= 0) {
          onEnd();
          clearInterval(interval);
          return remaingSec - 1;
        }
        return remaingSec - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <View
        style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 10 }}>
        <Typography size={14} color={COLORS.primary}>
          {String(mins).padStart(2, '0')}
        </Typography>
        <Icon name="dots-two-vertical" size={14} color={COLORS.primary} />
        <Typography size={14} color={COLORS.primary}>
          {String(secs).padStart(2, '0')}
        </Typography>
      </View>
    </>
  );
};
const styles = StyleSheet.create({});
