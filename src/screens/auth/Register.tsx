import React, { useState } from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Platform, Image, ScrollView, TouchableOpacity, Keyboard, Modal } from 'react-native';
import { COLORS, IMAGES, screenWidth } from '../../constants';
import SafeAreaContainer from '../../containers/SafeAreaContainer';
import { Typography, Header, InputText, Button } from '../../components/atoms';
import LinearGradient from 'react-native-linear-gradient';
import { SignupEmail, SignupLock } from '../../components/icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { navigate } from '../../navigation/RootNavigation';
import store from '../../store';
import { updateAppStates } from '../../store/actions/AppActions';
import { commonStyles } from '../../style';
import ImagePicker from 'react-native-image-crop-picker';

const Register = (props: any) => {
  const [errors, setErrors]: any = useState({});
  const [visible, setVisible] = useState(false);
  const [selectImg, setSelectImg] = useState('');

  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  const [secureEntry, setSecureEntry] = useState(true);
  const FnameInput: any = React.createRef();
  const LnameInput: any = React.createRef();
  const PhoneInput: any = React.createRef();
  const AddressInput: any = React.createRef();
  const EmailInput: any = React.createRef();
  const PasswordInput: any = React.createRef();
  const PasswordInput2: any = React.createRef();

  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then((images) => {
        console.log('img', images);
        setSelectImg({
          name: images.filename || `image_${new Date().getDate()}`,
          type: images.mime,
          uri: images.path,
        });
        setVisible(false);
      })
      .catch((error) => {
        console.log('error', error);
        setVisible(false);
      });
  };
  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
    })
      .then((images) => {
        console.log('gal', images);
        setSelectImg({
          name: images.filename || `image_${new Date().getDate()}`,
          type: images.mime,
          uri: images.path,
        });
        setVisible(false);
      })
      .catch((error) => {
        console.log('error', error);
        setVisible(false);
      });
  };
  return (
    <SafeAreaContainer>
      <ScrollView style={{ flex: 1, backgroundColor: COLORS.secondary }}>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null} style={{ flex: 1 }}>
          <View style={styles.headerView}>
            <Header
              titleText='Update Profile'
              titleColor={COLORS.black}
            />
            <TouchableOpacity
              activeOpacity={0.8} style={[commonStyles.cardWithShadow, styles.imgView]}
              onPress={() => setVisible(true)}>
              {selectImg ? (
                <Image
                  source={selectImg || IMAGES.VectorImg}
                  style={{ alignSelf: "center", width: 120, height: 120, borderRadius: 10 }}
                  resizeMode='cover'
                />
              ) : (
                <Image source={IMAGES.Umpire} style={{
                  alignSelf: "center", width: 120, height: 120, borderRadius: 10
                }} resizeMode='cover' />
              )}
            </TouchableOpacity>
          </View>
          <View style={{ margin: 20 }}>
            <InputText
              cardStyle={styles.cardStyle}
              placeholder={'First Name :'}
              onChangeText={(text: string) => setFname(text)}
              value={fname}
              error={errors.fname}
              autoCapitalize={'none'}
              keyboardType={'email-address'}
              returnKeyType={'next'}
              inputRef={FnameInput}
              onSubmitEditing={() => LnameInput.current && LnameInput.current.focus()}
              leftIconVisibility={false}
              allowSpacing={false}
            />
            <InputText
              cardStyle={styles.cardStyle}
              placeholder={'Last Name :'}
              onChangeText={(text: string) => setLname(text)}
              value={lname}
              error={errors.lname}
              autoCapitalize={'none'}
              keyboardType={'email-address'}
              returnKeyType={'next'}
              inputRef={LnameInput}
              onSubmitEditing={() => EmailInput.current && EmailInput.current.focus()}
              leftIconVisibility={false}
              allowSpacing={false}
            />
            <InputText
              cardStyle={styles.cardStyle}
              placeholder={'Email Address :'}
              onChangeText={(text: string) => setEmail(text)}
              value={email}
              error={errors.email}
              autoCapitalize={'none'}
              keyboardType={'email-address'}
              returnKeyType={'next'}
              inputRef={EmailInput}
              onSubmitEditing={() => PhoneInput.current && PhoneInput.current.focus()}
              leftIconVisibility={false}
              leftIcon={<SignupEmail />}
              allowSpacing={false}
            />
            <InputText
              cardStyle={styles.cardStyle}
              placeholder={'Phone :'}
              onChangeText={(text: string) => setPhone(text)}
              value={phone}
              error={errors.phone}
              autoCapitalize={'none'}
              keyboardType={'phone-pad'}
              returnKeyType={'next'}
              inputRef={PhoneInput}
              onSubmitEditing={() => AddressInput.current && AddressInput.current.focus()}
              leftIconVisibility={false}
              leftIcon={<SignupEmail />}
              allowSpacing={false}

            />
            <InputText
              cardStyle={styles.cardStyle}
              placeholder={'Address :'}
              onChangeText={(text: string) => setAddress(text)}
              value={address}
              error={errors.address}
              autoCapitalize={'none'}
              keyboardType={'email-address'}
              returnKeyType={'next'}
              inputRef={AddressInput}
              onSubmitEditing={() => PasswordInput.current && PasswordInput.current.focus()}
              leftIconVisibility={false}
              leftIcon={<SignupEmail />}
              allowSpacing={false}
            />
            <InputText
              cardStyle={styles.cardStyle}
              placeholder={'Password'}
              onChangeText={(text: string) => setPassword(text)}
              value={password}
              error={errors.password}
              autoCapitalize={'none'}
              returnKeyType={'next'}
              secureTextEntry={secureEntry}
              inputRef={PasswordInput}
              onSubmitEditing={() => PasswordInput2.current && PasswordInput2.current.focus()}
              leftIconVisibility={false}
              leftIcon={<SignupLock />}
              rightIcon={
                <TouchableOpacity
                  style={{ justifyContent: 'center', marginHorizontal: 8 }}
                  onPress={() => setSecureEntry(!secureEntry)}>
                  <Icon name={secureEntry ? 'eye-slash' : 'eye'} size={15} color={COLORS.darkGray} />
                </TouchableOpacity>
              }
            />
            <InputText
              cardStyle={styles.cardStyle}
              placeholder={'Confirm Password'}
              onChangeText={(text: string) => setPassword2(text)}
              value={password2}
              error={errors.password2}
              autoCapitalize={'none'}
              returnKeyType={'done'}
              secureTextEntry={secureEntry}
              inputRef={PasswordInput2}
              onSubmitEditing={() => {
                Keyboard.dismiss();
              }}
              leftIconVisibility={false}
              leftIcon={<SignupLock />}
              rightIcon={
                <TouchableOpacity
                  style={{ justifyContent: 'center', marginHorizontal: 8 }}
                  onPress={() => setSecureEntry(!secureEntry)}>
                  <Icon name={secureEntry ? 'eye-slash' : 'eye'} size={15} color={COLORS.darkGray} />
                </TouchableOpacity>
              }
            />
          </View>
          <LinearGradient
            colors={['#495BC1', '#BF2011']}
            style={styles.bottomBar}>
            {
              USER.map((i: any) => (
                <TouchableOpacity style={{ padding: 10, justifyContent: "center" }}>
                  <View style={styles.circleBar}>
                    <Image
                      source={i.image}
                      style={{ width: 30, height: 30, }}
                      resizeMode='cover'
                    />
                  </View>
                  <Typography align='center' color='#fff'>{i.user}</Typography>
                </TouchableOpacity>
              ))
            }
          </LinearGradient>
          <Button label={'REGISTER'}
            onPress={() =>
              store.dispatch(updateAppStates({ is_authorized: true }))
            }

            backgroundColor={COLORS.primary} borderRadius={10} />
        </KeyboardAvoidingView>
        <Modal animationType='slide' transparent={true} visible={visible}>
          <TouchableOpacity
            onPress={() => {
              setVisible(!visible);
            }}
            style={styles.centerView}
          />

          <View style={{ position: 'absolute', bottom: 20 }}>
            <View style={styles.modalStyle}>
              <TouchableOpacity style={styles.profileStyle} onPress={takePhotoFromCamera}>
                <Typography style={styles.textStyle}>Take Photos</Typography>
              </TouchableOpacity>
              <View style={styles.lineBar} />
              <TouchableOpacity style={styles.profileStyle} onPress={choosePhotoFromLibrary}>
                <Typography style={styles.textStyle}>Choose from Gallery</Typography>
              </TouchableOpacity>
            </View>
            <View style={[styles.cancelStyle, { marginTop: 10 }]}>
              <TouchableOpacity
                onPress={() => {
                  setVisible(!visible);
                }}>
                <Typography style={{ color: '#007bff' }}>Cancel</Typography>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </SafeAreaContainer>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerView: {
    backgroundColor: COLORS.white,
    paddingHorizontal: 20,
    paddingTop: 30,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  bottomBar: {
    paddingVertical: 10,
    width: '100%',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: "center",
    flexDirection: 'row'
  },
  profileImg: {
    backgroundColor: '#fff',
    marginVertical: 20,
    alignSelf: "center",
    width: 100,
    height: 100,
    borderWidth: 1,
    borderRadius: 10,
  },
  cardStyle: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 20,
  },
  circleBar: {
    marginHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#fff",
  },
  imgView: {
    width: "50%",
    alignSelf: 'center',
    paddingVertical: 20
  },
  // cardStyle: {
  // 	backgroundColor: '#fff',
  // 	borderRadius: 10,
  // 	paddingHorizontal: 10,
  // 	height: 55,
  // 	alignItems: "center",
  // },
  gameModalView: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  // Modal Styling
  centerView: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  modalStyle: {
    borderRadius: 10,
    backgroundColor: COLORS.white,
    width: screenWidth(100),
    paddingHorizontal: 30,
    // paddingVertical: 100,
    // marginHorizontal: 20,
  },
  profileStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  cancelStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    borderRadius: 10,
    backgroundColor: COLORS.white,
    // paddingVertical: 0,
    paddingHorizontal: 10,
    // marginHorizontal: 10,
  },
  lineBar: {
    width: '100%',
    borderBottomWidth: 0.5,
  },
  textStyle: {
    color: '#007bff',
    marginVertical: 10,
    fontSize: 16,
  },
});

const USER = [
  {
    id: 1,
    user: 'Male',
    image: IMAGES.Vector1,
    type: true
  },
  {
    id: 2,
    user: 'Female',
    image: IMAGES.Vector2,
    type: false
  },
]
export default Register;