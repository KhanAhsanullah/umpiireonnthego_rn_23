import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  Modal,
  TouchableOpacity,
} from "react-native";
import { COLORS, IMAGES, } from "../../constants";
import { Button, Typography } from "../atoms";

type Props = {
  visible: Boolean;
  onClose: () => void;
  onSubmit: () => void;
};

const ImageShowing = (props: Props) => {
  const { onSubmit, onClose, visible }: any = props;

  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          paddingHorizontal: 30,
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
        }}>
        <View style={styles.modalView}>
          <View style={styles.imgStyle}>
            <Image
              source={IMAGES.manImg}
              style={{ borderRadius: 20, height: 450, width: '100%', }}
              resizeMode="contain"
            />
          </View>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", marginVertical: 20 }}>
          <Button
            label={'Reject'}
            onPress={() => {
              onClose()
            }}
            backgroundColor="#E25959"
            style={{ width: '48%', marginRight: 20 }}
          />
          <Button
            label={'Approved'}
            onPress={() => {
              onSubmit()
            }}
            style={{ width: '48%' }}
            backgroundColor="#1D9201"
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalView: {
    padding: 0,
    borderRadius: 20,
    backgroundColor: COLORS.white,
  },
  imgStyle: {
    // alignSelf: "center",
    borderWidth: 1,
    borderColor: COLORS.white,
    width: '100%',
    height: 450,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    // marginVertical: 20

  }
});

export default ImageShowing;
export const TOOLS = [
  {
    id: 1,
    title: "On Time",
  },
  {
    id: 2,
    title: "Behavior",
  },
  {
    id: 3,
    title: "Safety",
  },
  {
    id: 4,
    title: "Driving",
  },
  {
    id: 5,
    title: "Satisfied",
  },
  {
    id: 6,
    title: "Others",
  },
];

