// /**
//  * @copyright Sarwar Hoshen
//  */
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native'
// import {createStackNavigator, TransitionPresets} from '@react-navigation/stack'
// import StackAuth from '../components/auth'
// import connect from 'react-redux/lib/connect/connect';
// import * as actions from '../rdx/actions';
// import {Screen_Home, Screen_Search} from "./landing_screen";
// import {Screen_CurrentTrip, Screen_TripInvoice} from "./trip_screen";
// /**
//  */
// const Stack = createStackNavigator();
//
// /**
//  */
// const StackApp = () =>
// {
//     return (
//         <Stack.Navigator initialRouteName="Landing" screenOptions={({ route, navigation }) => ({
//             headerShown: false,
//             gestureEnabled: false,
//             ...TransitionPresets.SlideFromRightIOS,
//         })}>
//             <Stack.Screen name='Landing' component={Screen_Home}/>
//             <Stack.Screen name='Search' component={Screen_Search}/>
//             <Stack.Screen name='CurrentTrip' component={Screen_CurrentTrip}/>
//             <Stack.Screen name='TripInvoice' component={Screen_TripInvoice}/>
//         </Stack.Navigator>
//     )
// }
//
// const AppNavigator = (props) =>
// {
//     console.log("props.__auth",props.__auth)
//     return (
//         <NavigationContainer>
//             {
//                 props.__auth.user
//                     ?
//                     <StackApp />
//                     :
//                     <StackAuth />
//             }
//         </NavigationContainer>
//
//     )
// }
// /**
//  */
// const mapStateToProps = (state) => {
//     return {
//         __auth:state.__auth
//     };
// };
//
// /**
//  */
// export default connect ( mapStateToProps, actions )(AppNavigator);
