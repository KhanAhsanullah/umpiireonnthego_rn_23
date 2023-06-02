import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Keyboard, TouchableOpacity, Modal } from 'react-native';
import { InputText, Button, Header } from '../../../components/atoms';
import { COLORS, screenWidth } from '../../../constants';
import SafeAreaContainer from '../../../containers/SafeAreaContainer';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import * as Validator from '../../../utils/Validator';
import { changePasswordApi } from '../../../store/services/AuthServices';
import { commonStyles } from '../../../style';
import { onBack } from '../../../navigation/RootNavigation';


const ChangePassword = (props: any) => {
    const [errors, setErrors] = useState({});

    const [currentPass, setCurrentPass] = useState('');
    const [secureEntry, setSecureEntry] = useState(true);

    const [password, setPassword] = useState('');
    const [secureEntry1, setSecureEntry1] = useState(true);

    const [confirmPass, setConfirmPass] = useState('');
    const [secureEntry2, setSecureEntry2] = useState(true);

    const CurrentPassword = React.createRef();
    const PasswordInput = React.createRef();
    const ConfirmPassInput = React.createRef();

    const _onSubmit = () => {
        let validateData = {
            old_password: currentPass,
            new_password: password,
            password_confirmation: confirmPass,
        };
        Validator.validate(validateData).then((err) => {
            setErrors(err);
            if (err && Object.keys(err).length) return;
            changePasswordApi({
                current_password: currentPass,
                password: password,
                password_confirmation: confirmPass,
            });
        });
    };

    return (
        <SafeAreaContainer mode={'dark'} safeArea={false}>
            <View style={commonStyles.headerView}>
                <Header titleText="Change Password" />
            </View>
            <View style={[commonStyles.footerContainer, {}]}>
                <ScrollView style={styles.formPassword}>
                    <View style={styles.mainContainer}>
                        <InputText
                            style={{ margin: 10 }}
                            title={'CURRENT PASSWORD'}
                            placeholder={'Enter current password'}
                            onChangeText={(text) => setCurrentPass(text)}
                            value={currentPass}
                            error={errors.old_password || ''}
                            autoCapitalize={'none'}
                            returnKeyType={'done'}
                            inputRef={CurrentPassword}
                            onSubmitEditing={() => PasswordInput.current && PasswordInput.current.focus()}
                            secureTextEntry={secureEntry}
                            rightIcon={
                                <TouchableOpacity style={{ justifyContent: 'center', marginHorizontal: 8 }} onPress={() => setSecureEntry(!secureEntry)}>
                                    <Icon name={secureEntry ? 'eye-slash' : 'eye'} size={18} color={COLORS.halfWhite} />
                                </TouchableOpacity>
                            }
                        />
                        <InputText
                            style={{ margin: 10 }}
                            title={'NEW PASSWORD'}
                            placeholder={'Enter new password'}
                            onChangeText={(text) => setPassword(text)}
                            value={password}
                            error={errors.new_password || ''}
                            autoCapitalize={'none'}
                            returnKeyType={'done'}
                            inputRef={PasswordInput}
                            onSubmitEditing={() => ConfirmPassInput.current && ConfirmPassInput.current.focus()}
                            secureTextEntry={secureEntry1}
                            rightIcon={
                                <TouchableOpacity
                                    style={{ justifyContent: 'center', marginHorizontal: 8 }}
                                    onPress={() => setSecureEntry1(!secureEntry1)}>
                                    <Icon name={secureEntry1 ? 'eye-slash' : 'eye'} size={18} color={COLORS.halfWhite} />
                                </TouchableOpacity>
                            }
                        />
                        <InputText
                            style={{ margin: 10 }}
                            title={'CONFIRM PASSWORD'}
                            placeholder={'Enter Confirm password'}
                            onChangeText={(text) => setConfirmPass(text)}
                            value={confirmPass}
                            error={errors.password_confirmation || ''}
                            autoCapitalize={'none'}
                            returnKeyType={'done'}
                            inputRef={ConfirmPassInput}
                            onSubmitEditing={() => {
                                Keyboard.dismiss();
                            }}
                            secureTextEntry={secureEntry2}
                            rightIcon={
                                <TouchableOpacity
                                    style={{ justifyContent: 'center', marginHorizontal: 8 }}
                                    onPress={() => setSecureEntry2(!secureEntry2)}>
                                    <Icon name={secureEntry2 ? 'eye-slash' : 'eye'} size={18} color={COLORS.halfWhite} />
                                </TouchableOpacity>
                            }
                        />
                    </View>
                    <Button
                        label='Submit'
                        borderRadius={10}
                        backgroundColor={COLORS.primary}
                        onPress={_onSubmit}
                        // onPress={() => onBack()}
                        style={{ marginVertical: 20 }}
                    />
                </ScrollView>
            </View>
        </SafeAreaContainer>
    );
};

const styles = StyleSheet.create({
    formPassword: {
        marginVertical: 20,
    },
    mainContainer: {
        marginTop: 50,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 5,
        paddingVertical: 15,
    },
    centerView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalStyle: {
        borderRadius: 10,
        backgroundColor: COLORS.white,
        width: screenWidth(95),
        marginHorizontal: 10,
        paddingVertical: 10,
    },
});

export default ChangePassword;
