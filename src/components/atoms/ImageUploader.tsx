import React, {useRef, useState} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import BottomSheet from './BottomSheet';
import {imageCamera, imagePicker} from '../../utils/utils';
import {COLORS, IMAGES} from '../../constants';

export const ImageUploader = (props: any) => {
  const {onSelect = () => {}, uri = null} = props;

  const actionSheet: any = useRef();
  const [image, setImage]: any = useState(uri);

  console.log(image);

  return (
    <View style={styles.container}>
      <Image
        // source={image}
        source={image || IMAGES.avatar}
        style={{
          width: 120,
          height: 120,
          borderRadius: 70,
        }}
      />

      <TouchableOpacity
        style={styles.plusIconStyle}
        onPress={() => {
          actionSheet.current.show({
            title: 'Select Image',
            options: ['Camera', 'Gallery', 'Cancel'],
            cancelButtonIndex: 2,
            onSelect: (index: any) => {
              switch (index) {
                case 0:
                  imageCamera().then((image: any) => {
                    onSelect(image);
                    setImage(image);
                    actionSheet.current.close();
                  });
                  break;

                case 1:
                  imagePicker({
                    multiple: false,
                  }).then((image: any) => {
                    onSelect(image);
                    setImage(image);
                    actionSheet.current.close();
                  });
                  break;

                default:
                  break;
              }
            },
          });
        }}>
        <Icon name="camera" size={15} color="#fff" />
      </TouchableOpacity>
      <BottomSheet ref={actionSheet} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    width: 130,
    height: 130,
    borderWidth: 1,
    borderColor: COLORS.secondary,
    borderRadius: 70,
    borderStyle: 'dashed',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  plusIconStyle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.secondary,
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
});
