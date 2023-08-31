import React, { useState, useEffect } from 'react';
import {
    View,
    StyleSheet,
    Alert,
    Image,
    Platform,
    TouchableOpacity
} from 'react-native';
import { Typography } from '../components/atoms';
import { COLORS, IMAGES } from '../constants';
import SafeAreaContainer from '../containers/SafeAreaContainer';
import { useSelector } from 'react-redux';
import { selectUserState } from '../store/selectors/userSelector';
import { commonStyles } from '../style';
import Icon from 'react-native-vector-icons/AntDesign';
import IconIonic from 'react-native-vector-icons/Ionicons';
import store from '../store';
import { updateAppStates } from '../store/actions/AppActions';
import { logoutApi } from '../store/services/AuthServices';

// import { logoutApi } from '../../store/services/AuthServices';
// import { useSelector } from 'react-redux';
// import { selectUserState } from '../../store/selectors/userSelector';

const DrawerScreen = (props: any) => {
    const userState = useSelector(selectUserState);
    const imageFromState = userState?.user?.profile_image;
    const user_id = userState?.user.id;
    console.log('imageFromState', imageFromState);

    const { full_name: name, email, avatarImg } = userState.user;
    const onLogout = () => {
        Alert.alert('Logout', 'Do you want to logout?', [
            {
                text: 'Cancel',
                onPress: () => { },
            },
            {
                text: 'OK',
                // onPress: () => {
                //     store.dispatch(updateAppStates({ is_authorized: false, }));
                // },
                onPress: () => logoutApi({ devicetoken: '', user_id: user_id }),
            },
        ]);
    };
    return (
        <SafeAreaContainer >
            <View style={styles.container}>
                <TouchableOpacity
                    style={[styles.headerBkStyle]}
                    onPress={() => props.navigation.goBack()}>
                    <IconIonic name='menu' size={26} color={COLORS.primary} />
                </TouchableOpacity>
                <View>
                    {/* <Image
                        source={avatarImg || IMAGES.Umpire}
                        style={{ width: 150, height: 150, }}
                        resizeMode="contain"
                    /> */}
                    {imageFromState == null ? (
                        <Image source={IMAGES.Umpire} style={{
                            width: 150, height: 150, borderRadius: 150 / 2
                        }} resizeMode='cover' />

                    ) : (
                        <Image source={{ uri: imageFromState }} style={{ width: 150, height: 150, borderRadius: 150 / 2 }} resizeMode='cover' />
                    )}
                    <Typography color={COLORS.white} style={{ margin: 20 }}>On The Go</Typography>
                </View>
                {
                    DrawerContent.map((i) => (
                        <TouchableOpacity
                            onPress={() => props.navigation.navigate(i.navigateTo)}
                            style={[commonStyles.flexRowAlign, { marginTop: 20 }]}>
                            <Icon name='right' size={15} color={COLORS.white} />
                            <Typography size={12} color={COLORS.white} style={{ marginLeft: 10 }}>{i.title}</Typography>
                        </TouchableOpacity>
                    ))
                }
                <TouchableOpacity
                    onPress={() => onLogout()}
                    style={[commonStyles.flexRowAlign, { marginTop: 20 }]}>
                    <Icon name='right' size={15} color={COLORS.white} />
                    <Typography size={12} color={COLORS.white} style={{ marginLeft: 10 }}>Log Out</Typography>
                </TouchableOpacity>
            </View>
        </SafeAreaContainer>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '70%',
        backgroundColor: COLORS.secondary,
        padding: 20,
        marginTop: 50,
    },
    headerBkStyle: {
        position: 'absolute',
        right: 0,
        top: 20,
        padding: 10,
        width: 50,
        borderRadius: 10,
        backgroundColor: COLORS.bkColor,
        justifyContent: "center",
        alignItems: 'center'
    },
    DrawerSection: {
        marginTop: 30,
    },
    DrawerItem: {
        flexDirection: 'row',
        marginVertical: 15,
        alignItems: 'center',
    },
    ItemIcons: {
        color: COLORS.black,
        fontSize: 20,
    },
    menuTypography: {
        marginHorizontal: 14,
        color: '#1D2733',
        fontSize: 14,
        // fontFamily: FONTS.fontMedium,
    },
    logoutBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0
    },
    logoutIcon: {
        color: COLORS.black,
        fontSize: 20,
    },
    logoutTypography: {
        color: '#1D2733',
        fontSize: 14,
        // fontFamily: FONTS.fontMedium,
        paddingLeft: 10
    },

});


const DrawerContent = [
    {
        id: 1,
        title: 'MISSIONS STATEMENT',
        navigateTo: 'Mission',
    },
    {
        id: 2,
        title: 'APPLICANTS',
        navigateTo: 'Applicant',
    },
    {
        id: 3,
        title: 'ACTIVE GAMES',
        navigateTo: '',
    },
    {
        id: 4,
        title: 'EDIT PROFILE',
        navigateTo: '',
    },
    {
        id: 5,
        title: 'CHANGE PASSWORD',
        navigateTo: 'ChangePassword',
    },
    {
        id: 6,
        title: 'TERMS & CONDITIONS',
        navigateTo: 'Terms',
    },
    {
        id: 7,
        title: 'PRIVACY POLICY',
        navigateTo: 'Privacy',
    },

]

export default DrawerScreen;

