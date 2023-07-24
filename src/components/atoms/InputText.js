import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import { COLORS, FONTS, FONTSIZE } from '../../constants';
import { Typography } from './Typography';
import { commonStyles } from '../../style';
import { capitalize } from '../../utils/utils';

export const InputText = props => {
  const {
    title = null,
    error,
    placeholder,
    placeholderColor = COLORS.halfWhite,
    onChangeText = () => { },
    onKeyPress = () => { },
    value,
    autoCapitalize,
    keyboardType = 'default',
    returnKeyType = 'done',
    inputRef = input => { },
    onSubmitEditing = () => { },
    secureTextEntry = false,
    autoFocus = false,
    maxLength = 100,
    style = {},
    inputStyle = {},
    cardStyle = {},
    rightIcon = null,
    multiline = false,
    editable = true,
    allowSpacing = true,
    validationColor = 'red'
  } = props;

  const [active, setActive] = useState(false);

  return (
    <View
      style={{
        marginVertical: 10,
        ...style,
      }}>
      <View
        style={{
          ...commonStyles.inputView,
          borderColor: active ? COLORS.primary : COLORS.lightGray,
          ...cardStyle,
        }}>
        {/* {title && (
          <Typography
            textType={'light'}
            size={FONTSIZE.XS}
            color={active ? COLORS.primary : COLORS.darkGray}
            style={{
              position: 'absolute',
              top: -10,
              left: 15,
              paddingHorizontal: 5,
              backgroundColor: '#fff',
            }}>
            {title}
          </Typography>
        )} */}
        <TextInput
          style={{
            flex: 1,
            fontSize: FONTSIZE.S,
            fontFamily: FONTS.PoppinsRegular,
            color: COLORS.black,
            padding: 10,
            ...inputStyle,
          }}
          placeholder={placeholder}
          placeholderTextColor={placeholderColor}
          underlineColorAndroid="transparent"
          onChangeText={e => {
            onChangeText(!allowSpacing ? e.replace(/\s/g, '') : e);
          }}
          onKeyPress={onKeyPress}
          value={value}
          autoCapitalize={autoCapitalize}
          keyboardType={keyboardType}
          returnKeyType={returnKeyType}
          blurOnSubmit={false}
          maxLength={maxLength}
          ref={inputRef}
          onSubmitEditing={onSubmitEditing}
          secureTextEntry={secureTextEntry}
          autoFocus={autoFocus}
          onBlur={() => setActive(false)}
          onFocus={() => setActive(true)}
          multiline={multiline}
          editable={editable}
        />
        {rightIcon}
      </View>
      {error != null && error != '' && (
        <Typography
          color={validationColor}
          size={FONTSIZE.XXS}
          textType="light"
          align="right">
          {capitalize(error)}
        </Typography>
      )}
    </View>
  );
};
