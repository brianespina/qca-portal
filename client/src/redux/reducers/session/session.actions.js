import axios from 'axios'
import sessionTypes from './session.types'

export const getSessions = () => async dispatch => {

    try{
        let res = await axios.get('/api/sessions')
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


export const getTransactionBySession = (sid, uid) => async dispatch => {
    try {
        const res = await axios.get(`/api/sessions/${sid}/${uid}`)
        
        dispatch({
            type: sessionTypes.GET_SESSION_SUCCESS,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: sessionTypes.GET_SESSION_ERROR
        })
        console.error(err)
    }
}

export const addSession = formData => async dispatch => {

    const config = {
        header: {
            'Content type': 'application/json'
        }
    }

    const body = {
        ...formData
    }

    try{
        const res = await axios.post('/api/sessions', body, config)
        dispatch({
            type: sessionTypes.ADD_SESSION_SUCCESS,
            payload: res.data
        })
        dispatch(getSessions())

    }catch(err){
        console.error(err)
    }
}