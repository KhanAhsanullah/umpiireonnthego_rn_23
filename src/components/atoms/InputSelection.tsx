import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';
import {COLORS, FONTS, FONTSIZE} from '../../constants';
import {Typography} from './Typography';
import {commonStyles} from '../../style';
import {capitalize} from '../../utils/utils';
import BottomSheet from './BottomSheet';
import {createRef} from 'react';

export const InputSelection = props => {
  const {
    title = null,
    error,
    placeholder,
    placeholderColor = COLORS.halfWhite,
    options = [],
    onSelect = () => {},
    value,
    inputRef = input => {},
    style = {},
    inputStyle = {},
    cardStyle = {},
    rightIcon = null,
  } = props;

  const [active, setActive] = useState(false);
  var sheet: any = createRef();

  return (
    <View
      style={{
        marginVertical: 10,
        ...style,
      }}>
      <TouchableOpacity
        onPress={() => {
          sheet.show({
            title: 'Select A Gender',
            options,
            onSelect: e => {
              sheet.close();
              onSelect(options[e]);
            },
          });
        }}
        style={{
          ...commonStyles.inputView,
          borderColor: active ? COLORS.primary : COLORS.lightGray,
          ...cardStyle,
        }}>
        {title && (
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
        )}
        {value ? (
          <Typography
            style={{
              flex: 1,
              fontSize: FONTSIZE.S,
              fontFamily: FONTS.PoppinsRegular,
              padding: 10,
              ...inputStyle,
            }}>
            {value}
          </Typography>
        ) : (
          <Typography
            color={placeholderColor}
            style={{
              flex: 1,
              fontSize: FONTSIZE.S,
              fontFamily: FONTS.PoppinsRegular,
              padding: 10,
              ...inputStyle,
            }}>
            {placeholder}
          </Typography>
        )}
        {rightIcon}
      </TouchableOpacity>

      {error != null && error != '' && (
        <Typography
          color={COLORS.primary}
          size={FONTSIZE.XXS}
          textType="light"
          align="right">
          {capitalize(error)}
        </Typography>
      )}
      <BottomSheet ref={e => (sheet = e)} />
    </View>
  );
};
