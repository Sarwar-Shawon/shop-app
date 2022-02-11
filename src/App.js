// /**
//  * @copyright CallACab
//  */
//
// import React from 'react';
//
// import {
//     ActivityIndicator,
// } from 'react-native'
//
// import {Provider} from 'react-redux';
// import {createStore, applyMiddleware} from 'redux';
// import { persistStore } from 'redux-persist'
// import { PersistGate } from 'redux-persist/integration/react'
// import thunk from 'redux-thunk';
//
// import reducers from './rdx/reducers';
// import AppNavigator from './config/router';
//
// const rdx_store = createStore( reducers, applyMiddleware(thunk) )
// const rdx_persistor = persistStore( rdx_store )
//
// /**
//  */
// function App()
// {
//     return (
//         <Provider store={rdx_store}>
//             <PersistGate loading={<ActivityIndicator />} persistor={rdx_persistor}>
//                 <AppNavigator />
//             </PersistGate>
//         </Provider>
//     )
// }
//
// /**
//  */
// export default App ;
