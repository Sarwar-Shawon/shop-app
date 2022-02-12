/**
 * @copyright Sarwar Hoshen
 */
import React from 'react'
import {createStackNavigator, TransitionPresets} from "@react-navigation/stack";
import PageWrapper from "../_common/pagewrapper";
import Checkout from "./checkout";
const Stack = createStackNavigator()

function ScreenCheckout(props) {
    return(
        <PageWrapper title={""}
                     showHdr={true}
                     showBack={true}
                     navigateTo={'Home'}
                     {...props}
        >
            <Checkout {...props}/>
        </PageWrapper>
    )
}

export default function StackCheckout() {
    return(
        <Stack.Navigator initialRouteName={'AppCheckout'}
                         screenOptions={({route, navigation}) => ({
                             headerShown: false,
                             // gestureEnabled: false,
                             ...TransitionPresets.SlideFromRightIOS,
                         })}
        >
            <Stack.Screen name={'AppCheckout'} component={ScreenCheckout}/>
        </Stack.Navigator>
    )
}
