import React, { useState } from 'react'
import { StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import { COLORS, } from '../../constants'
import FaIcon from "react-native-vector-icons/FontAwesome";
import { notificationToggle } from '../../store/services/AppServices';

export const Toggle = (props: any) => {
  const [value, setValue] = useState(false);
  const {
    onPress,
  } = props;

  return (
    <TouchableOpacity
      onPress={() => setValue(!value)}
      activeOpacity={0.8}>
      <FaIcon
        name="toggle-on"
        size={30}
        color={value ? COLORS.primary : COLORS.darkGray}
        style={{
          transform: [
            { rotate: value ? '0deg' : '180deg' }
          ]
        }}
      />
    </TouchableOpacity>
  )
}








