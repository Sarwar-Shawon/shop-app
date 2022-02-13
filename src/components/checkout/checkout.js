/**
 *  @copyright Sarwar Hoshen
 */
import React, {useEffect, useState,useRef} from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    FlatList, StyleSheet, Image, Animated
} from 'react-native'
import {connect} from 'react-redux'
import * as actions from '../../rdx/actions'
import ui from '../../cfg/ui'
import {BlueButton} from "../_common/cusComponent";
import FA5Icon from "react-native-vector-icons/FontAwesome5";
import MCIcon from "react-native-vector-icons/MaterialCommunityIcons";
import {ShowAlert} from "../_common/ShowAlert";

function Checkout(props) {

    const timeInterval = useRef();
    const [count, setCount] = useState(20)
    /**
     */
    useEffect(() => {

        timeInterval.current = setInterval(() => {
            setCount(oldCount=> oldCount ? oldCount-1 : 0)
        }, 1000);

        return () =>{
            clearInterval(timeInterval.current)
        }

    }, []);
    /**
     */
    useEffect(() => {

        if(count === 0)
        {
            clearInterval(timeInterval.current)
            return props.navigation.navigate( 'Home' )
        }

    }, [count]);


    /**
     */
    const RenderItem = ({item}) =>
    {
        const _item = props.__checkout.cart[item]
        console.log("item", _item)

        return (
            <View style={[styles.cartItem,styles.shadow,{backgroundColor: '#fff',marginBottom: 8}]}>

                <View style={{
                    width:109,
                    height: 115
                }}>
                    <Image
                        source={_item.img}
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
                        <Text style={{padding:2, color: ui.text.dark}}>{_item.name}</Text>
                        <Text style={{padding:2, color: ui.text.gray}}>{_item.brand? _item.brand: ''}</Text>
                        <Text style={{padding:2, color: ui.text.dark,marginBottom: 8}}>${_item.price}</Text>

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
                                              onPress={() => {
                                                  props.RdxUpdateCart(_item, 'minus')
                                              }}
                            >
                                {/*<FA5Icon name="minus" size={24} color={ui.text.dark} />*/}
                                <Text style={{fontSize: 20, fontWeight: 'bold'}}>-</Text>
                            </TouchableOpacity>

                            <View style={{flex:1,alignItems: 'center',}}>
                                <Text style={{fontSize:16, color: ui.text.dark}}>{_item.quantity}</Text>
                            </View>

                            <TouchableOpacity style={{flex:1,alignItems: 'center',}}
                                              onPress={() => {
                                                  props.RdxUpdateCart(_item, 'plus')
                                              }}
                            >
                                {/*<FA5Icon name="plus" size={24} color={ui.text.dark} />*/}
                                <Text style={{fontSize: 20, fontWeight: 'bold'}}>+</Text>

                            </TouchableOpacity>

                        </View>
                    </View>
                </View>

                <TouchableOpacity style={{position:'absolute', alignItems: 'center',right:20,top:10}}
                                  onPress={() => {
                                      props.RdxDeleteCartItem(_item)
                                  }}
                >
                    <MCIcon name="close" size={24} color={ui.text.gray} />
                </TouchableOpacity>

            </View>
        )
    }
    /**
     */
    const ConfirmOrder = async () =>{

        try {
            clearInterval(timeInterval.current)

            ShowAlert({
                title: 'Success', msg: `Your Order has submitted successfully.`,
                OnOK:() => {
                    props.RdxConfirmOrder()
                    return props.navigation.navigate( 'Home' )
                }
            })
        }catch(err){
            return {err}
        }
    }
    /**
     */
    return(
        <View style={{flex:1}}>
            <View style={{height: 50, flexDirection: 'row', justifyContent:'space-between',alignItems:'center'}}>
                <View style={{flex:1}}>
                    <Text style={styles.chkHeader}>
                        Checkout
                    </Text>
                </View>
                <View style={{flex:2,flexDirection: 'row', justifyContent: 'center', alignItems:'center'}}>
                    <Text style={styles.timeSec}>Time Left To Submit:</Text>
                    <Counter count={count}/>
                </View>
            </View>

            <View style={{flex:1,margin:20}}>
                <FlatList
                    data={Object.keys(props.__checkout.cart)}
                    keyExtractor={(item) => props.__checkout.cart[item].id}
                    renderItem={RenderItem}
                    initialNumToRender={5}
                    showsVerticalScrollIndicator={false}
                    // maxToRenderPerBatch={1}
                    // extraData={props.__data.categories}
                />
            </View>

            <View style={{flex:1}}>

                <View style={{
                    marginLeft:20,
                    marginRight: 20,
                    marginTop: 10
                }}>
                    <Text style={{color: "#434343", fontSize: 16}}>{props.__checkout.address}</Text>
                </View>

                <View style={{borderWidth:0.5,  borderColor: "#979797", margin: 20}}></View>

                <View style={styles.sumHeader}>
                    <View>
                        <Text style={{color: "#919191", fontSize: 14}}>Subtotal</Text>
                    </View>
                    <View>
                        <Text style={{color: "#434343", fontSize: 14}}>${parseFloat(props.__checkout.subtotal).toFixed(2)}</Text>
                    </View>
                </View>
                <View style={styles.sumHeader}>
                    <View>
                        <Text style={{color: "#919191", fontSize: 14}}>Discount</Text>
                    </View>
                    <View>
                        <Text style={{color: "#434343", fontSize: 14}}>${!Object.keys(props.__checkout.cart).length? 0 : parseFloat(props.__checkout.discount).toFixed(2)}</Text>
                    </View>
                </View>
                <View style={styles.sumHeader}>
                    <View>
                        <Text style={{color: "#919191", fontSize: 14}}>Shipping</Text>
                    </View>
                    <View>
                        <Text style={{color: "#434343", fontSize: 14}}>${parseFloat(!Object.keys(props.__checkout.cart).length? 0 :props.__checkout.shipping).toFixed(2)}</Text>
                    </View>
                </View>
                <View style={{borderWidth:0.5,  borderColor: "#979797", margin: 20}}></View>
                <View style={styles.sumHeader}>
                    <View>
                        <Text style={{color: "#585B5E", fontSize: 14}}>Total</Text>
                    </View>
                    <View>
                        <Text style={{color: "#434343", fontSize: 14}}>${parseFloat(!Object.keys(props.__checkout.cart).length? 0 :(props.__checkout.subtotal + props.__checkout.shipping - props.__checkout.discount) ).toFixed(2)}</Text>
                    </View>
                </View>

                <View style={{margin:20,justifyContent:'center', alignItems: 'center'}}>
                    <BlueButton
                        onPress={()=>{

                            Object.keys(props.__checkout.cart).length ?
                            ConfirmOrder().catch() :
                                ShowAlert({
                                    title: 'Error', msg: 'Please select an item.'
                                })
                        }}
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

function Counter(props) {

    const CounterView = ({scale = 1})=>(

        <View style={{
            width: 40,
            height: 40,
            justifyContent:'center',
            alignItems: 'center',
            backgroundColor: props.count <= 5 ? '#99000a' : '#659DF6',
            borderRadius: 20
        }}>
            <Animated.View
                style={{

                    transform:[
                        {scale}
                    ]
                }}
            >
                <Text style={{fontWeight: 'bold', fontSize: 20 , color: '#fff' }}>
                    {props.count}
                </Text>
            </Animated.View>
        </View>

    )

    const calScale = (startDelay = 500) => {

        const scale = useRef(new Animated.Value(1)).current;

        const animate = () => {
            Animated.sequence([
                Animated.timing(scale, { toValue: 1.2 ,useNativeDriver: true}),
                Animated.timing(scale, { toValue: 0.8 ,useNativeDriver: true}),

            ],).start(() => animate());
        };

        useEffect(() => {
            const timeout = setTimeout(() => animate(), startDelay);
            return () => clearTimeout(timeout);
        }, []);

        return scale;
    };

    const scale = calScale(props.count <= 5 ? 500 : 1000 );
    return (
        <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around' }}
        >
            <CounterView scale={scale} />
        </View>
    );
}
const styles = StyleSheet.create({
    chkHeader: {
        fontSize: 20,
        color: '#434343',
        marginLeft: 16,
        marginBottom:10,
        marginTop: 5
    },
    timeSec: {
        fontSize: 20,
        color: '#434343',
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
        height: 140,
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
