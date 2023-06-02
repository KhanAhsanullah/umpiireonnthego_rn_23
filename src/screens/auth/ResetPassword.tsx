import React, { useState, useRef } from "react";
import {
  View,
  StyleSheet,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Button, Typography, InputText, Loader } from "../../components/atoms";
import { COLORS, FONTSIZE } from "../../constants";
import { useDispatch, useSelector } from "react-redux";
import Icon from "react-native-vector-icons/FontAwesome";
import { validate } from "../../utils/Validator";
import { selectAppState } from "../../store/selectors/appSelector";
import { PopUpToast } from "../../containers/SafeAreaContainer";
import { resetPassword } from "../../store/services/AuthServices";
import { navigate } from "../../navigation/RootNavigation";

const ResetPassword = (props: any) => {
  const dispatch = useDispatch();
  const { toast, loader } = useSelector(selectAppState);
  const [errors, setErrors]: any = useState({});

  const [password, setPassword] = useState("");
  const [secureEntry1, setSecureEntry1] = useState(true);
  const [confirmPass, setConfirmPass] = useState("");
  const [secureEntry2, setSecureEntry2] = useState(true);

  const inputRef = useRef([]);

  const _onReset = () => {
    const validateData = {
      password,
      confirm_password: confirmPass,
    };

    validate(validateData).then((err) => {
      setErrors(err);
      console.log(err);
      if (err && Object.keys(err).length) return;
      resetPassword({
        email: props.route?.params?.paramEmail,
        password: password,
        password_confirmation: confirmPass
      })
      navigate('Login');
    });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      style={{ flex: 1, backgroundColor: "transparent" }}
    >
      <View style={styles.overlay}>
        {loader && <Loader />}
        <View style={styles.container}>
          <View style={styles.lineBar} />
          {toast.show && <PopUpToast />}
          <Typography
            textType="bold"
            size={FONTSIZE.XXL}
            color={COLORS.black}
            style={{ marginTop: 30 }}
          >
            Reset Password
          </Typography>

          <Typography size={FONTSIZE.S} style={{ marginVertical: 10 }}>
            Set the new password for your account so you can login and access
            all the features.
          </Typography>
          <InputText
            title={"New Password"}
            placeholder={"New Password"}
            onChangeText={(text) => setPassword(text)}
            value={password}
            error={errors.password || ""}
            autoCapitalize={"none"}
            returnKeyType={"next"}
            inputRef={(e) => (inputRef["password"] = e)}
            onSubmitEditing={() => {
              inputRef["confirmPass"] && inputRef["confirmPass"].focus();
            }}
            secureTextEntry={secureEntry1}
            rightIcon={
              <TouchableOpacity
                style={{ justifyContent: "center", marginHorizontal: 8 }}
                onPress={() => setSecureEntry1(!secureEntry1)}
              >
                <Icon
                  name={secureEntry1 ? "eye-slash" : "eye"}
                  size={15}
                  color={COLORS.darkGray}
                />
              </TouchableOpacity>
            }
          />
          <InputText
            title={"Re-enter Password"}
            placeholder={"Re-enter Password"}
            onChangeText={(text) => setConfirmPass(text)}
            value={confirmPass}
            error={errors.confirm_password || ""}
            autoCapitalize={"none"}
            returnKeyType={"done"}
            inputRef={(e) => (inputRef["confirmPass"] = e)}
            onSubmitEditing={() => {
              Keyboard.dismiss();
            }}
            secureTextEntry={secureEntry2}
            rightIcon={
              <TouchableOpacity
                style={{ justifyContent: "center", marginHorizontal: 8 }}
                onPress={() => setSecureEntry2(!secureEntry2)}
              >
                <Icon
                  name={secureEntry2 ? "eye-slash" : "eye"}
                  size={15}
                  color={COLORS.darkGray}
                />
              </TouchableOpacity>
            }
          />
          <Button
            label="Update Password"
            borderRadius={50}
            backgroundColor={COLORS.primary}
            onPress={_onReset}
            borderWidth={0}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    bottom: 0,
    padding: 20,
    width: "100%",
    position: "absolute",
    backgroundColor: "#fff",
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
  },
  lineBar: {
    alignSelf: "center",
    width: "40%",
    borderWidth: 2,
    borderRadius: 10,
    top: -10,
    borderColor: COLORS.darkGray,
  },
  overlay: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
});

export default ResetPassword;
