/**
 * @copyright Sarwar Hoshen
 */
export default ( state = {
    cart: {},
    address: '388, Rsa Meser Achia Tower , North Shahjahanpur , Dhaka-1217',
    subtotal: 0,
    discount: 10,
    shipping: 5,
    total: 0,
},action)=>{

    switch (action.type) {

        case 'add:to:cart':
            return {...state, cart: action.payload}
        case 'upd:sub:total':
            return {...state, subtotal: action.payload}
        default:
            return state
    }
}
