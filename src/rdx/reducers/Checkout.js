/**
 * @copyright Sarwar Hoshen
 */
export default ( state = {
    cart: [],
    address: '',
    subtotal: 0,
    discount: 0,
    shipping: 0,
    total: 0,
},action)=>{

    switch (action.type) {

        case 'add:to:cart':
            return {...state, auth: action.payload}
        default:
            return state
    }
}
