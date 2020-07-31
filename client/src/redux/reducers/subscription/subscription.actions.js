import axios from 'axios'
import subscriptionActionTypes from './subscription.types'

export const getAllSubscriptions = () => async dispatch => {
    try {
        const res = await axios.get('/api/subscriptions')

        dispatch({
            type: subscriptionActionTypes.GET_SUBSCRIPTIONS_SUCCESS,
            payload: res.data
        })

    } catch (err) {
        
    }
    
}