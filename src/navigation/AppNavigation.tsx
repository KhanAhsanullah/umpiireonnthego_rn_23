import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserState } from '../store/selectors/userSelector';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../screens/TabsScreen/Home';
import BottomTabs from './BottomTabs';
// import Places from '../screens/TabsScreen/Places';
import Notifications from '../screens/TabsScreen/Notifications';
import Account from '../screens/TabsScreen/Profile';
import Privacy from '../screens/TabsScreen/Profile/Privacy';
// import messaging from '@react-native-firebase/messaging';
import AssignGame from '../screens/TabsScreen/AssignGame';
import CardDetails from '../screens/TabsScreen/CardDetails';
import UmpireDetails from '../screens/TabsScreen/UmpireDetails';
import DrawerScreen from './DrawerScreen';
import { NavigationContainer } from '@react-navigation/native';
import Applicant from '../screens/TabsScreen/Applicant';
import Mission from '../screens/TabsScreen/Mission';
import Terms from '../screens/TabsScreen/Profile/Terms';
import ChangePassword from '../screens/TabsScreen/Profile/ChangePassword';
import EditGame from '../screens/TabsScreen/EditGame';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
// const Drawer = createDrawerNavigator();

const AppNavigation = () => {
	const { requirement } = useSelector(selectUserState);
	const initialRoute = requirement ? 'Login' : 'Tabs';
	// console.log('initial', initialRoute);

	const dispatch = useDispatch();

	// React.useEffect(() => {
	// 	const notificationOpenedApp = messaging().onNotificationOpenedApp((remoteMessage: any) => {
	// 		console.log('onNotificationOpenedApp: ', remoteMessage.data.custom);
	// 		navigate('Notifications');
	// 	});

	// 	const initialNotification = messaging()
	// 		.getInitialNotification()
	// 		.then((remoteMessage: any) => {
	// 			if (remoteMessage) {
	// 				const data = JSON.parse(remoteMessage.data.custom);
	// 				console.log('getInitialNotification: ', remoteMessage.data.custom);
	// 				navigate('Notifications');
	// 			}
	// 		});

	// 	const onMessage = messaging().onMessage(async (remoteMessage: any) => {
	// 		const data = JSON.parse(remoteMessage.data.custom);

	// 		dispatch(showToast(data.content));
	// 		console.log('onMessage');
	// 	});

	// 	return () => {
	// 		notificationOpenedApp();
	// 		onMessage();
	// 	};
	// }, []);

	return (
		<Stack.Navigator
			// initialRouteName='Tabs'
			initialRouteName={initialRoute}
			screenOptions={{ headerShown: false, animation: 'fade' }}>
			<Stack.Screen name='Tabs' component={BottomTabNavigation} />
			<Stack.Screen name='CardDetails' component={CardDetails} />
			<Stack.Screen name='UmpireDetails' component={UmpireDetails} />
			<Stack.Screen name='AssignGame' component={AssignGame} />
			<Stack.Screen name='EditGame' component={EditGame} />
			<Stack.Screen name='Applicant' component={Applicant} />
			<Stack.Screen name='Mission' component={Mission} />
			<Stack.Screen name='DrawerScreen' component={DrawerScreen} />
			<Stack.Screen name='Privacy' component={Privacy} />
			<Stack.Screen name='Terms' component={Terms} />
			<Stack.Screen name='ChangePassword' component={ChangePassword} />
		</Stack.Navigator>
	);
};

const BottomTabNavigation = (props: any) => {
	return (
		<Tab.Navigator
			initialRouteName='Home'
			tabBar={(e) => <BottomTabs {...e} {...props} />}
			screenOptions={{ headerShown: false }}>
			<Tab.Screen name='Home' component={Home} />
			{/* <Tab.Screen name='Places' component={Places} /> */}
			<Tab.Screen name='Notifications' component={Notifications} />
			<Tab.Screen name='Account' component={Account} />
		</Tab.Navigator>
	);
};
// const Drawer2 = () => {
// 	return (
// 		<NavigationContainer>
// 			<Drawer.Navigator initialRouteName="Home">
// 				<Drawer.Screen name="Home" component={Home} />
// 			</Drawer.Navigator>
// 		</NavigationContainer>
// 	);
// };




// const DrawerStack = () => {
// 	return (
// 		<Drawer.Navigator
// 			initialRouteName='Tabs'
// 			drawerContent={props => <DrawerScreen {...props} />}
// 		>
// 			<Drawer.Screen name="Tabs" component={AppNavigation} />

// 		</Drawer.Navigator>
// 	);
// }
export default AppNavigation;
