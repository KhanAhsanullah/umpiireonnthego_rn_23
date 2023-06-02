import React, { useState, useRef } from 'react';
import {
  View,
  StyleSheet,
  Modal,
  Keyboard,
  Alert,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import * as Validator from '../../../utils/Validator';
import {
  Button,
  Typography,
  InputText,
  Timer,
  InputPhone,
} from '../../../components/atoms';
import { COLORS, FONTSIZE, FONTS } from '../../../constants';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ArrowRightIcon } from '../../../components/icons';
import VerifyAccount from './VerifyAccount';
import { useDispatch } from 'react-redux';
import { TimerOTP } from '../../../components/atoms/TimerOTP';
import { commonStyles } from '../../../style';
import { updateAppStates } from '../../../store/actions/AppActions';
import { navigate } from '../../../navigation/RootNavigation';

const ForgotModal = (props: any) => {
  const dispatch = useDispatch();
  const { visible = false, setVisible = () => { } } = props;
  const [activeTab, setActiveTab] = useState(0);
  const [resend, setResend] = useState(false);

  const [errors, setErrors]: any = useState({});

  const [forgetType, setForgetType] = useState(0);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const [password, setPassword] = useState('');
  const [secureEntry1, setSecureEntry1] = useState(true);
  const [confirmPass, setConfirmPass] = useState('');
  const [secureEntry2, setSecureEntry2] = useState(true);

  const PasswordInput = React.createRef();
  const ConfirmPassInput = React.createRef();

  const [forgotPass, setForgotPass] = useState(true);

  const _onSubmit = () => {
    setActiveTab(0);
    // let validateData = {
    //   new_password: password,
    //   confirm_password: confirmPass,
    // };
    // Validator.validate(validateData).then(err => {
    //   if (err != false) setErrors(err);
    //   dispatch(updateUserStates({ token: true }));
    // });
    props.navigation.goBack()
  };

  const FORGOTEMAIL = () => {
    return (
      <>
        <Typography size={FONTSIZE.S} style={{ marginVertical: 20 }}>
          Enter your email for verification process, we will send 4 digit code
          to your email
        </Typography>
        <InputText
          title={'Email Address'}
          placeholder={'Enter your email address'}
          onChangeText={text => setEmail(text)}
          value={email}
          error={errors.email}
          autoCapitalize={'none'}
          keyboardType={'email-address'}
          returnKeyType={'done'}
          onSubmitEditing={() => {
            Keyboard.dismiss();
          }}
          leftIconVisibility={false}
          allowSpacing={false}
        />
      </>
    );
  };
  const FORGOTPASSWORD = () => {
    return (
      <>
        <Typography size={FONTSIZE.S} style={{ marginVertical: 20 }}>
          Enter your phone number for Verification process, we will send 4 digit
          code to your phone
        </Typography>
        <InputPhone
          title="Phone"
          placeholder={'Enter your phone number'}
          value={phone}
          onChangeText={setPhone}
          error={errors.phone}
          onSubmitEditing={() => {
            Keyboard.dismiss();
          }}
        />
      </>
    );
  };

  const renderTab = () => {
    switch (activeTab) {
      case 0:
        return (
          <>
            <Typography
              textType="heading"
              size={FONTSIZE.XXL}
              color={COLORS.secondary}
              style={{ marginTop: 30 }}>
              Forgot Password?
            </Typography>

            <Typography size={FONTSIZE.S} style={{ marginVertical: 10 }}>
              Please select email or phone number option for the verification
              process of forgot password
            </Typography>
            <View style={styles.forgotSelection}>
              {['Email', 'Phone'].map((item, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() => setForgetType(index)}
                    style={styles.radioStyling}>
                    {forgetType == index ? (
                      <View
                        style={[styles.boxSmall, { backgroundColor: '#5C9819' }]}>
                        <Icon name={'check'} size={12} color={'#fff'} />
                      </View>
                    ) : (
                      <View
                        style={[
                          styles.boxSmall,
                          { backgroundColor: COLORS.gray },
                        ]}
                      />
                    )}
                    <Typography>{item}</Typography>
                  </TouchableOpacity>
                );
              })}
            </View>

            <View
              style={{
                ...commonStyles.justifyContentBetween,
                marginTop: 40,
              }}>
              <TouchableOpacity onPress={() => setVisible(false)}>
                <Typography color={COLORS.secondary}>Back</Typography>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => setActiveTab(1)}>
                <ArrowRightIcon />
              </TouchableOpacity>
            </View>
          </>
        );
      case 1:
        return (
          <>
            <Typography
              textType="heading"
              size={FONTSIZE.XXL}
              color={COLORS.secondary}
              style={{ marginTop: 30 }}>
              Forgot Password?
            </Typography>
            {!forgotPass ? FORGOTEMAIL() : FORGOTPASSWORD()}

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: 50,
              }}>
              <TouchableOpacity
                onPress={() => {
                  setActiveTab(0);
                }}>
                <Typography color={COLORS.secondary}>Back</Typography>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  setActiveTab(2);
                }}>
                <ArrowRightIcon />
              </TouchableOpacity>
            </View>
          </>
        );
      case 2:
        return (
          <>
            <Typography
              textType="heading"
              size={FONTSIZE.XXL}
              color={COLORS.secondary}
              style={{ marginTop: 30 }}>
              Enter 4 Digits Code
            </Typography>

            <Typography size={FONTSIZE.S} style={{ marginVertical: 10 }}>
              Enter the 4 digits code that you received on your{' '}
              {!forgetType ? 'email' : 'phone'}
            </Typography>

            <VerifyAccount />

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginVertical: 20,
                marginTop: 50,
              }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Typography size={12}>Didn't Receive The OTP?</Typography>
                {resend ? (
                  <TouchableOpacity
                    onPress={() => {
                      Alert.alert('Resent Successfully');
                      setResend(false);
                    }}>
                    <Typography
                      size={12}
                      color={COLORS.secondary}
                      style={styles.resendStyle}>
                      Resend
                    </Typography>
                  </TouchableOpacity>
                ) : (
                  <TimerOTP onEnd={() => setResend(true)} />
                )}
              </View>
              <TouchableOpacity onPress={() => setActiveTab(3)}>
                <ArrowRightIcon />
              </TouchableOpacity>
            </View>
          </>
        );
      case 3:
        return (
          <>
            <Typography
              textType="heading"
              size={FONTSIZE.XXL}
              color={COLORS.secondary}
              style={{ marginTop: 30 }}>
              Reset Password
            </Typography>

            <Typography size={FONTSIZE.S} style={{ marginVertical: 10 }}>
              Set the new password for your account so you can login and access
              all the features
            </Typography>
            <InputText
              title={'NEW PASSWORD'}
              placeholder={'Enter new password'}
              onChangeText={text => setPassword(text)}
              value={password}
              error={errors.new_password || ''}
              autoCapitalize={'none'}
              returnKeyType={'done'}
              inputRef={PasswordInput}
              onSubmitEditing={() =>
                ConfirmPassInput.current && ConfirmPassInput.current.focus()
              }
              secureTextEntry={secureEntry1}
              rightIcon={
                <TouchableOpacity
                  style={{ justifyContent: 'center', marginHorizontal: 8 }}
                  onPress={() => setSecureEntry1(!secureEntry1)}>
                  <Icon
                    name={secureEntry1 ? 'eye' : 'eye-slash'}
                    size={15}
                    color={COLORS.black}
                  />
                </TouchableOpacity>
              }
            />
            <InputText
              title={'RE-ENTER PASSWORD'}
              placeholder={'Enter Confirm password'}
              onChangeText={text => setConfirmPass(text)}
              value={confirmPass}
              error={errors.confirm_password || ''}
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
                  <Icon
                    name={secureEntry2 ? 'eye' : 'eye-slash'}
                    size={15}
                    color={COLORS.black}
                  />
                </TouchableOpacity>
              }
            />
            <Button
              label="Update Password"
              borderRadius={10}
              backgroundColor={COLORS.primary}
              onPress={_onSubmit}
            // onPress={() => navigate('Login')}
            />
          </>
        );
      default:
        break;
    }
  };
  return (
    <Modal animationType="fade" transparent={true} visible={visible}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
          }}>
          <View style={styles.modalView}>
            <View style={styles.lineBar} />
            {renderTab()}
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalView: {
    bottom: 0,
    padding: 20,
    width: '100%',
    position: 'absolute',
    backgroundColor: '#fff',
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
  },
  lineBar: {
    alignSelf: 'center',
    width: '40%',
    borderWidth: 2,
    borderRadius: 10,
    top: -10,
    borderColor: COLORS.primary,
  },
  boxSmall: {
    width: 22,
    height: 22,
    borderRadius: 11,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: COLORS.primary,
  },
  radio: {
    flexDirection: 'row',
  },
  img: {
    height: 20,
    width: 20,
    marginHorizontal: 5,
  },
  radioStyling: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  forgotSelection: {},
  resendStyle: {
    marginLeft: 10,
    borderColor: COLORS.secondary,
    borderBottomWidth: 1,
  },
  phoneInputStyle: {
    borderWidth: 1,
    // borderColor: COLORS.gray,
    borderRadius: 10,
  },
});

export default ForgotModal;
