/**
 *  @copyright Sarwar Hoshen
 */
import React, {useState,useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {
    View,
    Text,
    TouchableOpacity,
    TextInput
} from 'react-native'
import {connect} from 'react-redux'
import * as actions from '../../rdx/actions'
import ui from '../../cfg/ui'
import {BlueButton,CusTextInput} from "../_common/cusComponent";
import {RdxLogin} from "../../rdx/actions";

function Login(props) {

    const [phone,onPhone] = useState('')

    return(
        <View style={{flex:1}}>
            <View style={{height:60, marginTop: 15, marginLeft: 10}}>
                <Text style={{fontSize: 18}}>Login</Text>
            </View>
            <View style={{height:80,marginLeft:20, marginRight: 20}}>
                <CusTextInput
                    text={'Phone'}
                    val={phone}
                    onChange={(text)=>onPhone(text)}
                    placeholder={'Phone'}
                />
            </View>

            <View style={{margin:20,justifyContent:'center', alignItems: 'center'}}>
                <BlueButton
                    onPress={()=>props.navigation.navigate('Verify',{
                        phone: phone
                    })}
                    style={{
                        height: 40,
                        width: '80%',
                    }}
                    text='Login With Phone'

                />
            </View>

        </View>
    )
}

// export default Login
/**
 */
const mapStateToProps = (state) => {
    return state;
}; //
/**
 */
export default connect(mapStateToProps, actions)(Login);
