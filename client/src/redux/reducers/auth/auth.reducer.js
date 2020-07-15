import authActionTypes from './auth.types'

const INITIAL_STATE = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null
}

const authReducer = ( state = INITIAL_STATE, action ) => {
    
    const { type, payload } = action

    switch(type){

        case authActionTypes.REGISTER_SUCCESS:
            localStorage.setItem('token', payload.token)
            return{
                ...state,
                ...payload,
                isAuthenticated: true,
                loading: false
            }
        
        case authActionTypes.REGISTER_FAIL:
            localStorage.removeItem('token')
            return{
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false
            }
            
        case authActionTypes.USER_LOADED:   
            return{
                ...state,
                isAuthenticated: true,
                user: payload,
                loading: false
            }
        
        case authActionTypes.AUTH_ERROR:
            localStorage.removeItem('token')
            return{
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false
            }

        default:
            return {
                ...state
            }

    }

}

export default authReducer