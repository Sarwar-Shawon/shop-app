/**
 * @copyright Sarwar Hoshen
 */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import StackAuth from '../components/auth'
import StackHome from '../components/home'
import connect from 'react-redux/lib/connect/connect';
import * as actions from '../rdx/actions';

const Stack = createStackNavigator();
/**
 */
const StackApp = () => {
    return (
        <Stack.Navigator initialRouteName="Landing"
                         screenOptions={({route, navigation}) => ({
                             headerShown: false
                         })}>
            <Stack.Screen name='Auth' component={StackAuth}/>
            <Stack.Screen name='Home' component={StackHome}/>
        </Stack.Navigator>
    )
}
/**
 */

const AppNavigator = (props) => {
    return (
        <NavigationContainer>
            <StackApp/>
        </NavigationContainer>
    )
}
/**
 */
const mapStateToProps = (state) => {
    return {
        __auth: state.__auth
    };
};
/**
 */
export default connect(mapStateToProps, actions)(AppNavigator);
