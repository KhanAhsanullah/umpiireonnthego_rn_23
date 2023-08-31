// import React, { useState, useEffect, useRef } from 'react';
// import { StyleSheet, View, ScrollView, TextInput } from 'react-native';
// import { useDispatch } from 'react-redux';
// import { Typography } from '../../../components/atoms';
// import { COLORS, FONTS, FONTSIZE } from '../../../constants';

// const VerifyAccount = (props: any) => {
//   const dispatch = useDispatch();
//   const inputRef = useRef([]);
//   const [pin, setPin] = useState(Array(4).fill(''));

//   const { onChange } = props;
//   useEffect(() => {
//     onChange(pin.join(''));
//   }, [pin]);

//   return (
//     <ScrollView showsVerticalScrollIndicator={false}>
//       <View style={styles.sectionCode}>
//         {Array(4)
//           .fill('')
//           .map((_, i) => (
//             <View style={[styles.sectionField]}>
//               {/* <TextInput
//                 style={{
//                   marginTop: 10,
//                   // flex: 1,
//                   // backgroundColor: 'red',
//                   fontSize: 22,
//                   // fontFamily: FONTS.PoppinsBold,
//                   // color: COLORS.primary,
//                   // padding: 10,
//               /> */}
//               <TextInput
//                 style={{ color: '#000', fontSize: 22, marginLeft: 5, }}
//                 maxLength={1}
//                 ref={e => (inputRef[i] = e)}
//                 placeholderTextColor={COLORS.darkGray}
//                 onChangeText={text => {
//                   pin[i] = text;
//                   setPin([...pin]);
//                   if (text.length > 0) {
//                     inputRef[i + 1]?.focus();
//                     // inputRef[i - 1]?.clear();
//                   }
//                 }}
//                 // onFocus={() => inputRef[i]?.clear()}
//                 value={pin[i]}
//                 keyboardType="numeric"
//                 returnKeyType="next"
//                 blurOnSubmit={true}
//                 onKeyPress={e => {
//                   if (e.nativeEvent.key == "Backspace") {
//                     inputRef[i - 1]?.focus();
//                     // inputRef[i - 1]?.clear();
//                   }
//                 }}
//               />
//             </View>
//           ))}
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginVertical: 30,
//     marginHorizontal: 20,
//     justifyContent: 'center',
//   },
//   sectionCode: {
//     alignItems: "center",
//     flexDirection: 'row',
//     justifyContent: 'space-evenly',
//     marginVertical: 20,
//   },
//   sectionField: {
//     width: 55,
//     height: 55,
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: 5,
//     backgroundColor: COLORS.white,
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 3,
//     },
//     shadowOpacity: 0.29,
//     shadowRadius: 4.65,
//     elevation: 7,
//   },
// });

// export default VerifyAccount;





import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, ScrollView, TextInput } from 'react-native';
import { useDispatch } from 'react-redux';
import { Typography } from '../../components/atoms';
import { COLORS, FONTS, FONTSIZE } from '../../constants';

const VerifyAccount = (props: any) => {
  const dispatch = useDispatch();
  const inputRef = useRef([]);
  const [pin, setPin] = useState(Array(4).fill(''));

  const { onChange, emptyPin, setEmptyPin } = props;
  useEffect(() => {
    onChange(pin.join(''));
    setEmptyPin(false)
  }, [pin]);


  useEffect(() => {
    if (emptyPin) {
      setPin(Array(4).fill(''));
    }
  }, [emptyPin]);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.sectionCode}>
        {Array(5)
          .fill('')
          .map((_, i) => (
            <View style={[styles.sectionField]}>
              {/* <TextInput
                style={{
                  marginTop: 10,
                  // flex: 1,
                  // backgroundColor: 'red',
                  fontSize: 22,
                  // fontFamily: FONTS.PoppinsBold,
                  // color: COLORS.primary,
                  // padding: 10,
              /> */}
              <TextInput
                style={{ color: '#000', fontSize: 22, marginLeft: 5, }}
                maxLength={1}
                ref={e => (inputRef[i] = e)}
                placeholderTextColor={COLORS.darkGray}
                onChangeText={text => {
                  pin[i] = text;
                  setPin([...pin]);
                  if (text.length > 0) {
                    inputRef[i + 1]?.focus();
                    // inputRef[i - 1]?.clear();
                  }
                }}
                // onFocus={() => inputRef[i]?.clear()}
                value={pin[i]}
                keyboardType="numeric"
                returnKeyType="next"
                blurOnSubmit={true}
                onKeyPress={e => {
                  if (e.nativeEvent.key == "Backspace") {
                    inputRef[i - 1]?.focus();
                    // inputRef[i - 1]?.clear();
                  }
                }}
              />
            </View>
          ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 30,
    marginHorizontal: 20,
    justifyContent: 'center',
  },
  sectionCode: {
    alignItems: "center",
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 20,
  },
  sectionField: {
    width: 55,
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: COLORS.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
});

export default VerifyAccount;
