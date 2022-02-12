/**
 * @copyright Sarwar Hoshen
 */
export const RdxLogin = (p) =>
{
    return async (d, gs) =>
    {
        try
        {
            if(p.username === gs().__auth.username && p.otp === gs().__auth.otp)
            {
                d(RdxAuth(true))
                return true
            }
            return false
        }
        catch( err )
        {
            console.warn( 'actions/auth: RdxLogin: err: ', err )

            return Promise.reject( err )
        }
    }
}   // RdxLogin

const RdxAuth = (data) => {
    return {
        type: 'user:auth',
        payload: data
    }
}   //  RdxAuth
