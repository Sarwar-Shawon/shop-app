/**
 *  @copyright Sarwar Hoshen
 */
import React from "react";
import {Text, View, Dimensions, StyleSheet, Animated, Modal, FlatList, TextInput, TouchableOpacity} from "react-native";
import {BlueGradient} from './gradient'
import ui from '../../cfg/ui'
import LinearGradient from "react-native-linear-gradient";

function BlueButton(props) {
    return (
        <TouchableOpacity
            style={[{
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.35,
                shadowRadius: 3.84,
                elevation: 5,
            },props.style]}
            onPress={()=> props.onPress()}
        >
            <LinearGradient
                locations={[0, 0.25, 0.5, 1]}
                colors={['#667EEA', '#658DF0', '#659BF5', '#64B6FF']}
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    flex: 1,
                    borderRadius: 6,
                }}
                start={{x: 0, y: 1}}
                end={{x: 1, y: 1}}
            >
                <Text style={{color: ui.text.light}}>{props.text}</Text>
            </LinearGradient>

        </TouchableOpacity>
    )
}
function CusTextInput(props) {
    return (
        <View>
            <Text style={{fontSize: 12, color: "#A6A6A6"}}>{props.text}</Text>
            <TextInput style={{marginTop:8, borderBottomWidth: 0.2 ,borderColor: ui.text.gray , paddingBottom: 10}}
                       placeholderTextColor={"#747474"}
                       autoCorrect={false}
                       placeholder={props.placeholder}
                       value={props.val}
                       onChangeText={(text) => {
                           props.onChange(text)
                       }}
            />
        </View>
    )
}
export {BlueButton,CusTextInput}
