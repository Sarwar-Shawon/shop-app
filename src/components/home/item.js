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
function Item(props )
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
            <View style={[{margin:5}]}>
                <Image
                    source={props.item.img}
                    style={styles.itemPhoto}
                    resizeMode="cover"
                />
            </View>
            <View>
                <Text style={styles.itemText}>{props.item.cur}{props.item.price}</Text>
            </View>
            <View>
                <Text style={styles.itemText}>{props.item.name}</Text>
            </View>
        </View>
    )
}   // Item

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft:10
    },
    itemPhoto: {
        width: 150,
        height: 180,
        borderRadius: 5,
        resizeMode: 'contain'
    },
    itemText:{
        fontSize: 16,
        color: ui.text.dark,
        textAlign: 'left',
        marginLeft: 5,
        padding: 2,
    }
});

/**
 */
export default Item;


