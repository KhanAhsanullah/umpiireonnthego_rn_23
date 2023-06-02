import React, { useEffect, useState } from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS } from '../../constants';
import { Typography } from './Typography';
import { commonStyles } from '../../style';

interface Props {
  label: string;
  backgroundColor?: string;
  onPress?: () => void;
  borderRadius?: number;
  borderWidth?: number;
  disabled?: boolean;
  style?: {};
  btnStyle?: {};
  isGradient?: boolean;
  rightIcon?: JSX.Element;
  textColor?: string;
  borderColor?: string;
}

export const Button = (props: Props) => {
  const {
    onPress = () => { },
    backgroundColor = COLORS.primary,
    label,
    disabled = false,
    style = {},
    btnStyle = {},
    isGradient = true,
    rightIcon = null,
    textColor = '#fff',
    borderColor = COLORS.white,
    borderWidth = 2,
    borderRadius = 10,
  } = props;

  const [preventTap, setPreventTap] = useState(false);

  useEffect(() => {
    preventTap && setTimeout(() => setPreventTap(prev => !prev), 500);
  }, [preventTap]);

  return (
    <TouchableOpacity
      disabled={disabled || preventTap}
      onPress={() => {
        setPreventTap(!preventTap);
        onPress();
      }}
      activeOpacity={0.8}
      style={style}>
      {isGradient ? (
        <LinearGradient
          colors={['#495BC1', '#BF2011']}
          style={[
            btnStyle,
            styles.button,
            {
              backgroundColor: disabled ? '#999B9F' : backgroundColor,
              borderRadius: borderRadius,
              marginHorizontal: 10,
            },
          ]}>
          <Typography color={textColor} size={16}>
            {label}
          </Typography>
          {rightIcon && rightIcon}
        </LinearGradient>
      ) : (
        <View
          style={[
            btnStyle,
            styles.button,
            {
              backgroundColor: disabled ? COLORS.halfWhite : backgroundColor,
              borderRadius: borderRadius,
              borderColor: borderColor,
              borderWidth: borderWidth,
              // marginHorizontal: 10
            },
          ]}>
          <Typography color={textColor} size={16}>{`${label} `}</Typography>
          {rightIcon && rightIcon}
        </View>
      )}
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    marginVertical: 10,
    flexDirection: 'row',
    ...commonStyles.boxShadow,
  },
});
