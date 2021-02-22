import axios from 'axios'
import { setAlert } from '../alert/alert.action'
import profileActionTypes from './profile.types'


export const clearSingleProfile = () => dispatch =>{
    dispatch({
        type: profileActionTypes.CLEAR_SINGLE_PROFILE
    })
}

export const getCurrentUsersProfile = (id) => async dispatch => {
    
    try {
        let res 
        if (id) {
            res = await axios.get(`/api/profile/user/${id}`)
        }else{
            res = await axios.get('api/profile/me')
        }

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

export const clearAllProfile = () => dispatch => {
    dispatch({
        type: profileActionTypes.CLEAR_PROFILE
    })
}

export const getAllProfiles = () => async dispatch => {
    try {
        const res = await axios.get('/api/profile')
        
        dispatch({
            type: profileActionTypes.GET_PROFILE_SUCCESS,
            payload: res.data
        })

    } catch (error) {
        console.log(error)
    }
}

export const getAllStudentProfiles = () => async dispatch => {
    try {
        const res = await axios.get('api/profile')

        const students = res.data.filter( profile => profile.user.type === 'student')
        
        dispatch({
            type: profileActionTypes.GET_PROFILE_SUCCESS,
            payload: students
        })

    } catch (error) {
        console.log(error)
    }
}

export const createUpdateProfile = (formData, id) => async dispatch => {

    try {
        const config = {
            header: {
                'Content-Type': 'application/json'
            }
        }

        const body = {
            ...formData,
            user: id || false
        }

        const res = await axios.post('/api/profile', body, config)

        dispatch({
            type: profileActionTypes.CREATE_PROFILE_SUCCESS,
            payload: res.data
        })

        dispatch(setAlert('Profile Updated', 'success'))

    } catch (err) {
        console.error('error')
        dispatch({
            type: profileActionTypes.PROFILE_ERROR,
            payload: { msg: err.response.data.message, status: err.response.status }
        })

        const errors = err.response.data.errors

        if(errors){
            errors.forEach( error => dispatch(setAlert(error.msg, 'danger')))
        }
    }
}

export const updateView = (viewType) => dispatch => {
    dispatch({
        type: profileActionTypes.UPDATE_PROFILE_VIEW,
        payload: viewType
    })
}

export const cleanupProfiles = () => dispatch => {
    dispatch({
        type: profileActionTypes.CLEANUP_PROFILES
    })
}