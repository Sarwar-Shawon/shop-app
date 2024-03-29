/**
 * @copyright Sarwar Hoshen
 */
import React from 'react'
import {createStackNavigator, TransitionPresets} from "@react-navigation/stack";
import PageWrapper from "../_common/pagewrapper";
import Home from "./home";
const Stack = createStackNavigator()

function ScreenHome(props) {
    return(
        <PageWrapper title={""}
                     showHdr={true}
                     showBack={true}
                     home={true}
                     navigateTo={'Login'}
                     {...props}
        >
            <Home {...props}/>
        </PageWrapper>
    )
}

export default function StackHome() {
    return(
        <Stack.Navigator initialRouteName={'AppHome'}
                         screenOptions={({route, navigation}) => ({
                             headerShown: false,
                             // gestureEnabled: false,
                             ...TransitionPresets.SlideFromRightIOS,
                         })}
        >
            <Stack.Screen name={'AppHome'} component={ScreenHome}/>
        </Stack.Navigator>
    )
}
