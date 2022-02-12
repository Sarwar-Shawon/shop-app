/**
 *  @copyright Sarwar Hoshen
 */
import React, {useEffect} from 'react'
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native'
import {connect} from 'react-redux'
import * as actions from '../../rdx/actions'

function Home(props) {

    return(
        <View style={{flex:1}}>
            <Text>Home</Text>
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
export default connect(mapStateToProps, actions)(Home);
