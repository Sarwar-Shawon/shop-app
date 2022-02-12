/**
 * @copyright Sarwar Hoshen
 */
import React from 'react'
import {createStackNavigator, TransitionPresets} from "@react-navigation/stack";
import PageWrapper from "../_common/pagewrapper";
import Login from "./login";
import Authentication from "./authentication";
import Verification from "./verification";
const Stack = createStackNavigator()

function ScreenLogin(props) {
    return(
        <PageWrapper title={""}
                     showHdr={true}
                     showBack={true}
                     navigateTo={'AuthHome'}
                     {...props}
        >
            <Login {...props}/>
        </PageWrapper>
    )
}
function ScreenVerification(props) {
    return(
        <PageWrapper title={""}
                     showHdr={true}
                     showBack={true}
                     navigateTo={'Login'}
                     {...props}
        >
            <Verification {...props} />
        </PageWrapper>
    )
}
function ScreenAuthorization(props) {
    return(
        <PageWrapper>
            <Authentication {...props}/>
        </PageWrapper>
    )
}
export default function StackAuth() {
    return(
        <Stack.Navigator initialRouteName={'AuthHome'}
                         screenOptions={({route, navigation}) => ({
                             headerShown: false,
                             // gestureEnabled: false,
                             ...TransitionPresets.SlideFromRightIOS,
                         })}
        >
            <Stack.Screen name={'AuthHome'} component={ScreenAuthorization}/>
            <Stack.Screen name={'Login'} component={ScreenLogin}/>
            <Stack.Screen name={'Verify'} component={ScreenVerification}/>
        </Stack.Navigator>
    )
}
