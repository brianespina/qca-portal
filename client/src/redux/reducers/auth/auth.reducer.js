import authActionTypes from './auth.types'

const INITIAL_STATE = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: {
        type: ''
    }
}

const authReducer = ( state = INITIAL_STATE, action ) => {
    
    const { type, payload } = action

    switch(type){

        case authActionTypes.REGISTER_SUCCESS:
        case authActionTypes.LOGIN_SUCCESS:
            localStorage.setItem('token', payload.token)
            return{
                ...state,
                ...payload,
                isAuthenticated: true,
                loading: false
            }
        
        case authActionTypes.REGISTER_FAIL:
        case authActionTypes.AUTH_ERROR:
        case authActionTypes.LOGIN_FAIL:
        case authActionTypes.LOG_OUT:
            localStorage.removeItem('token')
            return{
                ...state,
                user:{
                    type: null
                },
                token: null,
                isAuthenticated: false,
                loading: false
            }
            
        case authActionTypes.USER_LOADED:   
            return{
                ...state,
                isAuthenticated: true,
                user: {
                    ...payload
                },
                loading: false
            }
        
        case authActionTypes.AUTH_ERROR:
            localStorage.removeItem('token')
            return{
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false,
                user:{
                    type: null
                }
            }

        default:
            return {
                ...state
            }

    }

}

export default authReducer