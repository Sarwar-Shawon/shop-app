/**
 * @copyright Sarwar Hoshen
 */

import React,{useState,useEffect,useRef} from 'react';
import {
    View, Text, FlatList, Image, StyleSheet, TouchableOpacity
} from 'react-native';
import ui from '../../cfg/ui'
/**
 */
function Category(props )
{
    console.log("props", props)
    /**
     */
    useEffect(()=>{

    },[])
    /**
     */
    return (
        <View style={styles.container}>
            <View style={[styles.shadow,{margin:5}]}>
                <Image
                    source={props.item.img}
                    style={styles.itemPhoto}
                    resizeMode="cover"
                />
            </View>
            <View style={{position:'absolute',height: 19, width: 60,marginTop: 28, marginLeft: 30}}>
                <Text style={{fontWeight: 'bold', fontSize: 16,color: ui.text.light, textAlign: 'center'}}>{props.item.name}</Text>
            </View>
        </View>
    )
}   // Category

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft:10
    },
    itemPhoto: {
        width: 114, //350 // 150 //109
        height: 65, //263   //180   //115
        borderRadius: 5,
        resizeMode: 'contain'
    },
    shadow:{
        shadowColor: "#000",
        shadowOffset: {
            width: 1,
            height: 2,
        },
        shadowOpacity: 0.35,
        shadowRadius: 3.84,
        elevation: 5,
    }
});

/**
 */
export default Category;


