import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Appearance } from 'react-native';
// import DateTimePickerModal from 'react-native-modal-datetime-picker';

import { COLORS, FONTS, FONTSIZE } from '../../constants';
import { Typography } from './Typography';
import { commonStyles } from '../../style';
import { capitalize } from '../../utils/utils';
import moment from 'moment';

export const InputDateTime = props => {
  const {
    title = null,
    error,
    placeholder,
    placeholderColor = COLORS.halfWhite,
    inputRef = input => { },
    value,
    onChange = () => { },
    mode = 'date',
    is24Hour = false,
    style = {},
    inputStyle = {},
    cardStyle = {},
    rightIcon = null,
    maximumDate = new Date(),
  } = props;

  const [visible, setVisible]: any = useState(false);
  const [active, setActive] = useState(false);
  const colorScheme = Appearance.getColorScheme();

  return (
    <View
      style={{
        marginVertical: 10,
        ...style,
      }}>
      <TouchableOpacity
        onPress={() => setVisible(true)}
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
            style={styles.label}>
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

      {/* <DateTimePickerModal
        isDarkModeEnabled={colorScheme === 'dark'}
        isVisible={visible}
        mode={mode}
        is24Hour={is24Hour}
        maximumDate={maximumDate}
        onConfirm={(e: any) => {
          onChange(
            moment(new Date(e)).format(
              mode == 'date' ? 'DD-MM-YYYY' : 'hh:mm A',
            ),
          );
          setVisible(false);
        }}
        onCancel={() => setVisible(false)}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    position: 'absolute',
    top: -10,
    left: 15,
    paddingHorizontal: 5,
    backgroundColor: '#fff',
  },
});
