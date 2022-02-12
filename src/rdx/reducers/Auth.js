/**
 * @copyright Sarwar Hoshen
 */
export default ( state = {
    auth: false,
    username: '01797569055',
    otp: '1234'
},action)=>{

    switch (action.type) {

        case 'user:auth':
            return {...state, auth: action.payload}
        default:
            return state
    }
}
