/**
 * @copyright Sarwar Hoshen
 */

import React,{useState,useEffect,useRef} from 'react';
import {
    View, Text, FlatList, Image, StyleSheet, TouchableOpacity,ImageBackground
} from 'react-native';
import ui from '../../cfg/ui'
import {Gradient} from '../_common/cusComponent'
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
                <ImageBackground
                    source={props.item.img}
                    style={styles.itemPhoto}
                    resizeMode="cover"
                >
                    <Gradient
                        cl1={'rgba('+ props.item.col1.join(',')+')'}
                        cl2={'rgba('+ props.item.col2.join(',')+')'}
                        text={props.item.name}
                    />
                </ImageBackground>
            </View>
        </View>
    )
}   // Category

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft:10,

    },
    itemPhoto: {
        width: 114,
        height: 65,
        resizeMode: 'contain',
        overflow: "hidden",
        borderRadius: 5,
    },
    shadow:{
        shadowColor: "#000",
        shadowOffset: {
            width: 1,
            height: 2,
        },
        shadowOpacity: 0.55,
        shadowRadius: 3.55,
        elevation: 5,

    }
});

/**
 */
export default Category;


