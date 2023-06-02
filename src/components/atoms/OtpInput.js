import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const OtpInput = (props) => {

    const { inputStyle = {}, style = {} } = props;

    return (
        <View style={[styles.container, style]}>
            {/* <Text style={styles.labelText}>{props.title}</Text> */}
            <TextInput
                style={inputStyle}
                placeholder={props.placeholder}
                placeholderTextColor={props.placeholderColor}
                underlineColorAndroid="transparent"
                onChangeText={props.onChangeText}
                value={props.value}
                fontSize={props.fontSize}
                autoCapitalize={props.autoCapitalize}
                keyboardType={props.keyboardType}
                returnKeyType={props.returnKeyType}
                blurOnSubmit={props.blurOnSubmit}
                maxLength={props.maxLength}
                ref={props.inputRef}
                onSubmitEditing={props.onSubmitEditing}
                secureTextEntry={props.secureTextEntry}
                autoFocus={props.autoFocus}
                onFocus={props.onFocus}
                onBlur={props.onBlur}
                selectionColor={props.selectionColor}
                onKeyPress={props.onKeyPress}
            // caretHidden={true}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 15,
    },
    labelText: {
        fontSize: 16,
        color: 'red',
    },
});

export default OtpInput;
