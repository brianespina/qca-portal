import axios from 'axios'
import authActionTypes from './auth.types'
import { setAlert } from '../alert/alert.action'
import setAuthToken from '../../../utlils/setAuthToken'
import { clearAllProfile } from '../profile/profile.actions'

export const loadUser = () => async dispatch => {
    if(localStorage.token){
        setAuthToken(localStorage.token)
    }
    
    try {
        const res = await axios.get('/api/auth')

        dispatch({
            type: authActionTypes.USER_LOADED,
            payload: res.data
        })

    } catch (err) {
        dispatch({
            type: authActionTypes.AUTH_ERROR
        })
    }
}

export const register = ({ name, email, type, password }) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ name, email, type, password })

    try {
        const res = await axios.post('/api/users', body, config )

        dispatch({
            type: authActionTypes.REGISTER_SUCCESS,
            payload: res.data
        })

        dispatch(loadUser())

    } catch (err) {
        const errors = err.response.data.errors

        if(errors){
            errors.forEach( error => dispatch(setAlert(error.msg, 'danger')))
        }

        dispatch({
            type: authActionTypes.REGISTER_FAIL
        })
    }
}

export const login = (email, password) => async dispatch => {

    dispatch({
        type: authActionTypes.LOGIN_LOADING
    })

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ email, password })

    try {
        const res = await axios.post('/api/auth', body, config )

        dispatch({
            type: authActionTypes.LOGIN_SUCCESS,
            payload: res.data
        })

        dispatch(loadUser())

    } catch (err) {
        const errors = err.response.data.errors

        if(errors){
            errors.forEach( error => dispatch(setAlert(error.msg, 'danger')))
        }

        dispatch({
            type: authActionTypes.LOGIN_FAIL
        })
    }
}

export const logout = () => dispatch => {

    dispatch(clearAllProfile())

    dispatch({
        type: authActionTypes.LOG_OUT
    })

    
}


