/**
 * @copyright Sarwar Hoshen
 */
import {combineReducers} from 'redux'
import {persistReducer} from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Auth from './Auth'
import Data from './Data'
import Checkout from './Data'
/**
 */
const rdx_reduers = combineReducers( {
    __auth: Auth,
    __data: Data,
    __checkout: Checkout,
} )
/**
 */
const persist_cfg = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: [
        '__auth','__data'
    ],
}
/**
 */
export default persistReducer( persist_cfg, rdx_reduers )


