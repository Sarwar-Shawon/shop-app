/**
 * @copyright Sarwar Hoshen
 */

import React, {useEffect} from 'react';
import {
    ActivityIndicator,
} from 'react-native'
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {persistStore} from 'redux-persist'
import {PersistGate} from 'redux-persist/integration/react'
import thunk from 'redux-thunk';
import reducers from './rdx/reducers';
import AppNavigator from './config/router';
import SplashScreen from 'react-native-splash-screen'

const rdxStore = createStore(reducers, applyMiddleware(thunk))
const rdxPersistor = persistStore(rdxStore)

/**
 */
function App() {

    /**
     */
    useEffect(() => {
        SplashScreen.hide();
    }, []);

    return (
        <Provider store={rdxStore}>
            <PersistGate loading={<ActivityIndicator/>} persistor={rdxPersistor}>
                <AppNavigator/>
            </PersistGate>
        </Provider>
    )
}

/**
 */
export default App;
