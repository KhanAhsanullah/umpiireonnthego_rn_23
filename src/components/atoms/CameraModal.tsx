import React, { useState, useEffect } from 'react';
import { View, Modal, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS, screenWidth } from '../../constants';
import ImagePicker from 'react-native-image-crop-picker';
import { Typography } from './Typography';

const CameraModal = (props: any) => {
  const { visible = false, setVisible = () => { }, onSelect = () => { } } = props;

  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      multiple: true,
      useFrontCamera: true,
      cropping: true,
    })
      .then((images: any) => {
        onResponse({
          name: images.filename || `image_${new Date().getDate()}`,
          type: images.mime,
          uri: images.path,
        });
      })
      .catch(err => console.log(err));
  };

  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
      multiple: false,
    })
      .then(images => {
        onResponse(images);
      })
      .catch(err => console.log(err));
  };

  const onResponse = data => {
    onSelect(data);
    setVisible(false);
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      statusBarTranslucent={true}>
      <TouchableOpacity
        onPress={() => {
          setVisible(!visible);
        }}
        style={styles.centerView}
      />

      <View style={{ position: 'absolute', bottom: 0 }}>
        <View style={styles.modalStyle}>
          <TouchableOpacity
            style={styles.profileStyle}
            onPress={takePhotoFromCamera}>
            <Typography style={styles.textStyle}>Take Photos</Typography>
          </TouchableOpacity>
          <View style={styles.lineBar} />
          <TouchableOpacity
            style={styles.profileStyle}
            onPress={choosePhotoFromLibrary}>
            <Typography style={styles.textStyle}>
              Choose from Library
            </Typography>
          </TouchableOpacity>
        </View>
        <View style={[styles.cancelStyle, { marginVertical: 10 }]}>
          <TouchableOpacity
            onPress={() => {
              setVisible(!visible);
            }}>
            <Typography style={{ color: '#007bff' }}>Cancel</Typography>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  // Modal Styling
  centerView: {
    flex: 1,
    // width: '100%',
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
  profileStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    // margin: 2
  },
  cancelStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    borderRadius: 10,
    backgroundColor: COLORS.white,
    paddingVertical: 0,
    paddingHorizontal: 10,
    marginHorizontal: 10,
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

export default CameraModal;
