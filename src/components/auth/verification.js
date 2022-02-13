/**
 *  @copyright Sarwar Hoshen
 */
import React, {useState,useEffect} from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    TextInput
} from 'react-native'
import {connect, useDispatch} from 'react-redux'
import * as actions from '../../rdx/actions'
import ui from '../../cfg/ui'
import {BlueButton,CusTextInput} from "../_common/cusComponent";
import {RdxLogin} from "../../rdx/actions";
import {ShowAlert} from "../_common/ShowAlert";

function Verification(props) {
    const {params} = props.route
    const [otp,setOtp] = useState('')
    const dispatch = useDispatch()
    console.log("params",params)
    /**
     */
    const Login = async ()=>{
        try{
            const resp = await dispatch(RdxLogin({username: params.phone, otp:otp}))
            if(resp)
                return props.navigation.navigate('Home')
            else
            {
                ShowAlert({
                    title: 'Error', msg: `Information you've given is incorrect.`,
                    OnOK:() => {}
                })
            }
        }catch(err){
            return {err}
        }
    }
    /**
     */
    return(
        <View style={{flex:1}}>
            <View style={{height:60, marginTop: 15, marginLeft: 10}}>
                <Text style={{fontSize: 18}}>Verify</Text>
            </View>
            <View style={{height:80,marginLeft:20, marginRight: 20}}>
                <CusTextInput
                    val={otp}
                    text={'OTP'}
                    onChange={(text)=>setOtp(text)}
                    placeholder={'Enter Otp'}
                />
            </View>

            <View style={{margin:20,justifyContent:'center', alignItems: 'center'}}>
                <BlueButton
                    onPress={Login}
                    style={{
                        height: 52,
                        width: 315,
                    }}
                    text='Verify'
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
export default connect(mapStateToProps, actions)(Verification);
