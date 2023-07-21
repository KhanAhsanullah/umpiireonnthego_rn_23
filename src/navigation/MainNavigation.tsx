import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { useSelector } from 'react-redux';
import { navigationRef } from './RootNavigation';
import Splash from '../containers/Splash';
import AppNavigation from './AppNavigation';
import Login from '../screens/auth/Login';
import SignUp from '../screens/auth/SignUp';
import ForgetPassword from '../screens/auth/ForgetPassword';
import OTPScreen from '../screens/auth/OTPScreen';
import ResetPassword from '../screens/auth/ResetPassword';
import Home from '../screens/TabsScreen/Home';
import Register from '../screens/auth/Register';
import Privacy from '../screens/TabsScreen/Profile/Privacy';
import Terms from '../screens/TabsScreen/Profile/Terms';

const Stack = createNativeStackNavigator();

export default MainNavigation = () => {
	const { splash, is_authorized } = useSelector((state: any) => state.AppReducer);
	if (splash) return <Splash />;
	console.log(is_authorized, splash, 'is_authorized');

	return (
		<NavigationContainer ref={navigationRef}>
			{/* <AppNavigation /> */}
			{is_authorized ? <AppNavigation /> : <AuthNavigation />}
		</NavigationContainer>
	);
};

const AuthNavigation = () => {
	return (
		<Stack.Navigator
			initialRouteName='Splash' screenOptions={{ headerShown: false, animation: 'fade' }}>
			<Stack.Screen name='Login' component={Login} options={{ animationTypeForReplace: 'push' }} />
			<Stack.Screen name='SignUp' component={SignUp} />
			<Stack.Screen name='Register' component={Register} />
			<Stack.Screen name='Privacy' component={Privacy} />
			<Stack.Screen name='Terms' component={Terms} />


			{/* <Stack.Screen name='ForgetPassword' component={ForgetPassword} options={{ presentation: 'transparentModal' }} />
			<Stack.Screen name='OTPScreen' component={OTPScreen} options={{ presentation: 'transparentModal' }} />
			<Stack.Screen name='ResetPassword' component={ResetPassword} options={{ presentation: 'transparentModal' }} /> */}
		</Stack.Navigator>
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
// 			initialRouteName='Screen 1'
// 			// overlayColor="rgba(0,0,0,0.7)"
// 			// backBehavior='none'
// 			// //drawerPosition="permanent"
// 			// drawerPosition="right"
// 			// drawerType="back"
// 			// drawerStyle={{ width: '70%' }}
// 			// drawerContentOptions={{
// 			// 	activeTintColor: '#e91e63',
// 			// 	itemStyle: { marginVertical: 5 },
// 			// }}
// 			drawerContent={props => <DrawerScreen {...props} />}
// 		>
// 			<Drawer.Screen name="Home" component={Home} />

// 		</Drawer.Navigator>
// 	);
// }