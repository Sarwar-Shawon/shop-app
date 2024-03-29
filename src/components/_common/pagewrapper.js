/**
 *  @copyright Sarwar Hoshen
 */
import React from 'react'
import {
    View,
    StatusBar,
    SafeAreaView,
} from 'react-native'
import {connect} from 'react-redux'
import * as actions from '../../rdx/actions'
import ui from '../../cfg/ui'
import Header from './header'

function PageWrapper(props) {

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: ui.color.primary}}>
            {
                props.showHdr &&
                <Header {...props} />
            }
            <View style={{flex: 1}}>
                {props.children}
            </View>

        </SafeAreaView>
    )
} //func PageWrapper

/**
 */
const mapStateToProps = (state) => {
    return state;
}; //
/**
 */
export default connect(mapStateToProps, actions)(PageWrapper);









