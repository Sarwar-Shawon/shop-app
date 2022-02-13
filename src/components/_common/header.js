/**
 *  @copyright Sarwar Hoshen
 */

import React from 'react'

import {
    View, Text,
    TouchableOpacity,
    Image,
    ActivityIndicator,
    StatusBar, SafeAreaView,
    StyleSheet,

} from 'react-native'
import ui from '../../cfg/ui'
import FA5Icon from "react-native-vector-icons/FontAwesome5"

const Header = (props) => {

    return (

        <View style={styles.container}>
            <View style={{flex:1,flexDirection: 'row',alignItems: 'center', justifyContent: 'center'}}>
                {
                    props.showBack &&
                    <TouchableOpacity style={{position: 'absolute', left: 10}}
                                      onPress={() => {
                                          props.navigation.goBack(null)
                                          return props.navigation.navigate( props.navigateTo || 'Home' )
                                      }}
                    >
                        {
                            props.home ?
                            <Image
                                source={require('../../assets/icon/Group.png')}
                                style={{
                                    width:  30,
                                    height: 30,
                                    marginLeft: 5
                                }}
                                resizeMode="contain"
                            />
                            :
                            <Image
                                source={require('../../assets/icon/Arrow.png')}
                                style={{
                                    width:  30,
                                    height: 30,
                                    marginLeft: 5

                                }}
                                resizeMode="contain"
                            />
                        }

                    </TouchableOpacity>
                }
                {
                    props.home &&
                    <TouchableOpacity style={{position: 'absolute', right: 20}}
                                      onPress={() => {
                                          return props.navigation.navigate( 'Checkout' )
                                      }}
                    >
                        <FA5Icon name="cart-arrow-down" size={24} color={ui.text.gray} />
                    </TouchableOpacity>
                }
                {
                    props.home && Object.keys( props.__checkout.cart).length ?
                    <TouchableOpacity
                        onPress={() => {
                            return props.navigation.navigate( 'Checkout' )
                        }}
                        style={{
                        position:'absolute',
                        margin: 2,
                        right: 5,
                        top: -20,
                        height: 25,
                        width: 25,
                        borderRadius: 20,
                        backgroundColor: "#6666CC",
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Text style={{color: '#fdf3ff', fontSize: 10, fontWeight: 'bold'}}>{Object.keys( props.__checkout.cart).length}</Text>
                    </TouchableOpacity>
                    :
                        null
                }

                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Text allowFontScaling={false} style={[styles.title,props.style]}>
                        {props.hdrText}
                    </Text>
                </View>

            </View>
        </View>
    )
} // func Header

export default Header;

/**
 */
const styles = StyleSheet.create({
    container:{
        height:40,
        width:'100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: ui.color.primary,
    },
    title: {
        letterSpacing: 1,
        fontSize: 24,
        fontWeight: 'bold',
        color: ui.color.primary_pest,

    },
    headerStyle: {
        position: 'absolute',
        top:0,
        left:0,
        flexDirection: 'row',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "rgba(0,0,0,0)"
    },
    drawerButton: {
        position: 'absolute',
        marginStart:16,
        alignItems: 'center',
        justifyContent: 'center',
        elevation:2,
        height: 50,
        width: 50,
        borderRadius: 25,
    },
    backButton: {
        backgroundColor:'#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
        height: 48,
        width: 48,
        marginLeft: 12,
        borderRadius: 25,
    },
});







