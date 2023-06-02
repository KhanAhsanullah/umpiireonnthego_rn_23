import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  StyleSheet,
  Image,
  Modal,
  Animated,
  TouchableOpacity,
} from 'react-native';
import { COLORS, IMAGES } from '../../constants';
import { Button, Typography } from '../../components/atoms';
import { commonStyles } from '../../style';
import StarRating from 'react-native-star-rating';
import { SelectableComponent } from './SelectableComponent';
type Props = {
  visible: Boolean;
  userName: any;
  onClose: () => void;
  onSubmit: () => void;
};

const Review = (props: any) => {
  const { onSubmit, onClose, visible, userName = "NANNY'S" }: any = props;
  const [show, setShow] = useState(true);
  const [starCount, onStarRatingPress] = useState(3);
  const [tools, setTools] = useState([]);
  const value = useRef(new Animated.Value(0)).current;
  // useEffect(() => {
  //   if (show) {
  //     Animated.timing(value, {
  //       toValue: 0,
  //       duration: 500,
  //       useNativeDriver: false,
  //     }).start();
  //   } else {
  //     Animated.timing(value, {
  //       toValue: 300,
  //       duration: 500,
  //       useNativeDriver: false,
  //     }).start();
  //   }
  // }, [show]);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      statusBarTranslucent={false}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          paddingHorizontal: 30,
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
        }}>
        <Animated.View
          style={{
            ...styles.modalView,
            transform: [
              {
                translateY: value,
              },
            ],
          }}>
          <View style={styles.imgStyle}>
            <Image
              source={IMAGES.avatar}
              style={{ width: 100, height: 100 }}
              resizeMode="contain"
            />
          </View>
          <Typography align="center" size={20} textType="heading" color="#000">
            RATE {userName}
          </Typography>
          <View
            style={[commonStyles.justifyContentBetween, { marginVertical: 10 }]}>
            <Typography color={COLORS.black} textType={'light'}>
              Your Rating
            </Typography>
            <StarRating
              disabled={false}
              maxStars={5}
              starSize={20}
              fullStarColor={'#FFA200'}
              rating={starCount}
              starStyle={{ padding: 3 }}
              selectedStar={rating => onStarRatingPress(rating)}
            />
          </View>
          <SelectableComponent
            data={TOOLS}
            mode={'single'}
            selected={tools}
            setSelected={setTools}
          />
          <Button
            label={'Confirm Rating'}
            onPress={() => {
              // onSubmit();
              props.navigation.replace('Tabs');
            }}
            style={{ width: '100%' }}
          />
        </Animated.View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalView: {
    padding: 15,
    borderRadius: 15,
    backgroundColor: COLORS.white,
  },
  imgStyle: {
    alignSelf: 'center',
    borderWidth: 0.5,
    borderColor: COLORS.halfWhite,
    width: 110,
    height: 110,
    borderRadius: 55,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
});

export default Review;
export const TOOLS = [
  {
    id: 1,
    title: 'On Time',
  },
  {
    id: 2,
    title: 'Behavior',
  },
  {
    id: 3,
    title: 'Safety',
  },
  {
    id: 4,
    title: 'Driving',
  },
  {
    id: 5,
    title: 'Satisfied',
  },
  {
    id: 6,
    title: 'Others',
  },
];
