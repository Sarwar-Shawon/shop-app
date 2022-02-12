/**
 *  @copyright Sarwar Hoshen
 */
import React, {useEffect, useState} from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    FlatList, StyleSheet, Image
} from 'react-native'
import {connect} from 'react-redux'
import * as actions from '../../rdx/actions'
import ui from '../../cfg/ui'
import {BlueButton} from "../_common/cusComponent";
import FA5Icon from "react-native-vector-icons/FontAwesome5";
import MCIcon from "react-native-vector-icons/MaterialCommunityIcons";

function Checkout(props) {
    const [featuredList,setFeaturedList] = useState([])
    return(
        <View style={{flex:1}}>
            <View style={{height: 50}}>
                <Text style={styles.chkHeader}>
                    Checkout
                </Text>
            </View>
            <ScrollView style={{flex:2,margin:20}}>
                <View style={[styles.cartItem,styles.shadow,{backgroundColor: '#fff'}]}>

                    <View style={{
                        width:109,
                        height: 115
                    }}>
                        <Image
                            source={require('../../assets/img/authPlaceholder.png')}
                            style={{
                                width:109,
                                height: 115
                            }}
                            resizeMode="cover"
                        />
                    </View>
                    <View style={{
                        flex:1
                    }}>
                        <View style={{margin: 15}}>
                            <Text style={{padding:2, color: ui.text.dark}}>Woman t-shirt</Text>
                            <Text style={{padding:2, color: ui.text.gray}}>Lotto</Text>
                            <Text style={{padding:2, color: ui.text.dark}}>$13</Text>

                            <View style={{
                                flexDirection: 'row',
                                backgroundColor: '#F6F6F6',
                                width: 120,
                                height: 40,
                                alignItems: 'center',
                                padding: 5,
                            }}
                            >
                                <TouchableOpacity style={{flex:1, alignItems: 'center',}}
                                                  onPress={() => {}}
                                >
                                    <FA5Icon name="minus" size={24} color={ui.text.dark} />
                                </TouchableOpacity>

                                <View style={{flex:1,alignItems: 'center',}}>
                                    <Text style={{fontSize:16, color: ui.text.dark}}>2</Text>
                                </View>

                                <TouchableOpacity style={{flex:1,alignItems: 'center',}}
                                                  onPress={() => {}}
                                >
                                    <FA5Icon name="plus" size={24} color={ui.text.dark} />
                                </TouchableOpacity>

                            </View>
                        </View>
                    </View>

                    <TouchableOpacity style={{position:'absolute', alignItems: 'center',right:20,top:10}}
                                      onPress={() => {}}
                    >
                        <MCIcon name="close" size={24} color={ui.text.gray} />
                    </TouchableOpacity>

                </View>
            </ScrollView>
            <View style={{flex:1}}>
                <View style={styles.sumHeader}>
                    <View>
                        <Text style={{color: "#919191", fontSize: 14}}>Subtotal</Text>
                    </View>
                    <View>
                        <Text style={{color: "#434343", fontSize: 14}}>$160</Text>
                    </View>
                </View>
                <View style={styles.sumHeader}>
                    <View>
                        <Text style={{color: "#919191", fontSize: 14}}>Discount</Text>
                    </View>
                    <View>
                        <Text style={{color: "#434343", fontSize: 14}}>$160</Text>
                    </View>
                </View>
                <View style={styles.sumHeader}>
                    <View>
                        <Text style={{color: "#919191", fontSize: 14}}>Shipping</Text>
                    </View>
                    <View>
                        <Text style={{color: "#434343", fontSize: 14}}>$160</Text>
                    </View>
                </View>
                <View style={{borderWidth:0.5,  borderColor: "#979797", margin: 20}}></View>
                <View style={styles.sumHeader}>
                    <View>
                        <Text style={{color: "#585B5E", fontSize: 14}}>Total</Text>
                    </View>
                    <View>
                        <Text style={{color: "#434343", fontSize: 14}}>$160</Text>
                    </View>
                </View>
                <View style={{margin:20,justifyContent:'center', alignItems: 'center'}}>
                    <BlueButton
                        onPress={()=>{}}
                        style={{
                            height: 52,
                            width: 315,
                        }}
                        text='Confirm Order'
                    />
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    chkHeader: {
        fontSize: 20,
        color: '#434343',
        marginLeft: 16,
        marginBottom:10,
        marginTop: 5
    },
    sumHeader:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft:20,
        marginRight: 20,
        marginTop: 10
    },
    cartItem:{
        flex:1,
        flexDirection: 'row',
        // width: 327,
        // height:133,
        borderWidth: 0.2,
        borderColor: "#ddd",
        padding:10
    },
    shadow:{
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3

    }
});
/**
 */
const mapStateToProps = (state) => {
    return state;
}; //
/**
 */
export default connect(mapStateToProps, actions)(Checkout);
