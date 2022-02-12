/**
 * @copyright Sarwar Hoshen
 */
export const RdxAddToCart = (p) =>
{
    return async (d, gs) =>
    {
        try
        {

            return {}
        }
        catch( err )
        {
            console.warn( 'actions/checkout: RdxAddToCart: err: ', err )
            return Promise.reject( err )
        }
    }
}   // RdxLogin

const AddToCart = (data) => {
    return {
        type: 'add:to:cart',
        payload: data
    }
}   //  AddToCart
