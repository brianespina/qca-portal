import axios from 'axios'
import setAlert from '../alert/alert.action'
import profileActionTypes from './profile.types'

export const getCurrentUsersProfile = () => async dispatch => {
    try {

        const res = await axios.get('api/profile/me')

        dispatch({
            type: profileActionTypes.GET_PROFILE,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: profileActionTypes.PROFILE_ERROR,
            payload: { msg: error.response.data.message, status: error.response.status }
        })
    }
}

export const clearProfile = () => dispatch => {
    dispatch({
        type: profileActionTypes.CLEAR_PROFILE
    })
}

export const getAllProfiles = () => async dispatch => {
    try {
        const res = await axios.get('api/profile')
        
        dispatch({
            type: profileActionTypes.GET_PROFILE_SUCCESS,
            payload: res.data
        })

    } catch (error) {
        console.error(error.response.status)
    }
}

export const createUpdateProfile = (formData) => async dispatch => {

    try {
        const config = {
            header: {
                'Content-Type': 'application/json'
            }
        }

        const res = await axios.post('api/profile', formData, config)
        
        console.log('prpofile created')
    } catch (err) {
        console.error('error')
        dispatch({
            type: profileActionTypes.PROFILE_ERROR,
            payload: { msg: err.response.data.message, status: err.response.status }
        })
    }
}