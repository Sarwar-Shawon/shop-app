/**
 * @copyright Sarwar Hoshen
 */
export const RdxAddToCart = (p) =>
{
    return async (d, gs) =>
    {
        try
        {
            let cart_obj = gs().__checkout.cart
            if(cart_obj[p.id])
                cart_obj[p.id].quantity += 1
            else{

                p.quantity = 1
                cart_obj[p.id] = p

            }

            d(AddToCart(cart_obj))

            const total = CalculateTotal(cart_obj)
            d(UpdateSubTotal(total))

            return {}
        }
        catch( err )
        {
            console.warn( 'actions/checkout: RdxAddToCart: err: ', err )
            return Promise.reject( err )
        }
    }
}   // RdxAddToCart

export const RdxUpdateCart = (p,type) =>
{
    return async (d, gs) =>
    {
        try
        {
            let cart_obj = gs().__checkout.cart
            if(type === 'plus')
                cart_obj[p.id].quantity += 1
            else
                cart_obj[p.id].quantity -= 1
            if(!cart_obj[p.id].quantity)
                delete cart_obj[p.id]

            d(AddToCart(cart_obj))
            const total = CalculateTotal(cart_obj)
            d(UpdateSubTotal(total))
            return {}
        }
        catch( err )
        {
            console.warn( 'actions/checkout: RdxUpdateCart: err: ', err )
            return Promise.reject( err )
        }
    }
}   // RdxUpdateCart
export const RdxDeleteCartItem = (p) =>
{
    return async (d, gs) =>
    {
        try
        {
            let cart_obj = gs().__checkout.cart
            if(cart_obj[p.id])
                delete cart_obj[p.id]

            d(AddToCart(cart_obj))
            const total = CalculateTotal(cart_obj)
            d(UpdateSubTotal(total))
            return {}
        }
        catch( err )
        {
            console.warn( 'actions/checkout: RdxDeleteCartItem: err: ', err )
            return Promise.reject( err )
        }
    }
}   // RdxDeleteCartItem
export const RdxConfirmOrder = (p) =>
{
    return async (d, gs) =>
    {
        try
        {
            d(AddToCart({}))
            d(UpdateSubTotal(0))
            return {}
        }
        catch( err )
        {
            console.warn( 'actions/checkout: RdxConfirmOrder: err: ', err )
            return Promise.reject( err )
        }
    }
}   // RdxConfirmOrder

const CalculateTotal = (cart_obj) =>{

    return Object.keys(cart_obj).reduce((acc, cur) => {
        console.log("cur", cur)
        acc += (cart_obj[cur].quantity * cart_obj[cur].price)
        return acc
    }, 0)
}

const AddToCart = (data) => {
    return {
        type: 'add:to:cart',
        payload: data
    }
}   //  AddToCart
const UpdateSubTotal = (data) => {
    return {
        type: 'upd:sub:total',
        payload: data
    }
}   //  UpdateSubTotal
