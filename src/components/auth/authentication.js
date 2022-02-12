/**
 *  @copyright Sarwar Hoshen
 */
import React, {useEffect} from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native'
import {connect} from 'react-redux'
import * as actions from '../../rdx/actions'
import {BlueButton} from "../_common/cusComponent";
import ui from '../../cfg/ui'

function Authentication(props) {

    return(
        <View style={{flex:1}}>
            <View style={{justifyContent: 'center', alignItems: 'center',height:80}}>
                <Text style={{fontSize: 20, color: ui.text.gray}}>Welcome to Bolt</Text>
            </View>
            <View style={{flex:1,justifyContent: 'center', alignItems: 'center',margin: 10}}>
                <Image
                    source={require('../../assets/img/authPlaceholder.png')}
                    style={{
                        width:'100%',
                        height: 250
                    }}
                    resizeMode="contain"
                />
            </View>
            <View style={{flex:1,justifyContent: 'center', alignItems: 'center', margin: 10,}}>
                <BlueButton
                    onPress={()=>props.navigation.navigate('Login')}
                    style={{
                        height: 40,
                        width: '60%',
                    }}
                    text='Login With Phone'
                />
                <TouchableOpacity
                    style={{
                        marginTop: 10,
                        height: 40,
                        width: '100%',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                    onPress={()=> props.navigation.navigate('Home')}
                >
                    <Text style={{color: ui.text.gray}}>Shop With us</Text>

                </TouchableOpacity>
            </View>

        </View>
    )
}

// export default Authentication
/**
 */
const mapStateToProps = (state) => {
    return state;
}; //
/**
 */
export default connect(mapStateToProps, actions)(Authentication);
