import axios from 'axios'
import sessionTypes from './session.types'

export const getSessions = () => async dispatch => {

    try{
        let res = await axios.get('/api/training')
        dispatch({
            type: sessionTypes.GET_SESSION_SUCCESS,
            payload: res.data
        })
    }catch(err){
        dispatch({
            type: sessionTypes.GET_SESSION_ERROR
        })
        console.error(err)
    }

}
