import React from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS, FONTS, FONTSIZE, screenHeight } from "../../constants";
import { Typography } from "./Typography";
import Icon from "react-native-vector-icons/Feather";
import { commonStyles } from "../../style";

export const InputView = (props: any) => {

  const {
    title,
    error,
    placeholder,
    value,
    inputRef = (input: any) => {},
    style = {},
    cardStyle = {},
    leftIconName = 'question',
    rightIcon = null,
    leftIcon = null,
    onPress= () => {},
    leftIconVisibility = true,

    titleBtn = null
  }: any = props;

  return (
    <View style={ style }>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        { title && <Typography textType={'light'} size={ FONTSIZE.XS } color={ COLORS.darkGray }>
          { title }
        </Typography>}

        { titleBtn }
      </View>

      <TouchableOpacity style={[ commonStyles.inputView, cardStyle ]} onPress={ onPress } activeOpacity={ 0.8 }>
        { leftIconVisibility && <View style={ commonStyles.iconView }>
          { leftIcon || <Icon name={ leftIconName } size={20} color={COLORS.white} /> }
        </View>}

        { !leftIconVisibility && leftIcon }

        { !value ? <Typography textType={'light'} color={ COLORS.darkGray } 
          style={ styles.inputText }
          numberOfLines={1}
        >
          { placeholder }
        </Typography> : 
        
        <Typography textType={'light'}
          style={ styles.inputText }
          numberOfLines={1}
        >
          { value }
        </Typography> }

        { rightIcon }
      </TouchableOpacity>

      { error != "" && <Typography color="red" size={FONTSIZE.XXS} textType={ 'light' } align="right">
        { error }
      </Typography>}
    </View>
  );
};

const styles = StyleSheet.create({
  inputText: { 
    flex: 1, 
    alignSelf: 'center', 
    padding: 5,
    marginLeft: 5,
  }
});