import axios from 'axios'
import usersActionTypes from './users.types'

export const getAllUsers = () => async dispatch => {
    try {
        const res = await axios.get('/api/users')

        dispatch({
            type: usersActionTypes.GET_USERS_SUCCESS,
            payload: res.data
        })

    } catch (err) {
        dispatch({
            type: usersActionTypes.GET_USERS_FAILED,
            payload: { msg: err.response.data.message, status: err.response.status }
        })
    }
    
}