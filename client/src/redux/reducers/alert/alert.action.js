import { v4 as uuidv4 } from 'uuid'
import alertActionTypes from './alert.types'

export const setAlert = (msg, alertType, timeout = 5000) => dispatch => {
    const id = uuidv4()
    dispatch({
        type: alertActionTypes.SET_ALERT,
        payload: { msg, alertType, id }
    })

    setTimeout(()=> dispatch({ type: alertActionTypes.REMOVE_ALERT, payload: id }) , timeout)
}
