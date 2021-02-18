import axios from 'axios'
import transactionTypes from './transaction.types'

export const getTransactions = (uid) => async dispatch => {

    try {
        let res = await axios.get(`/api/transactions/${uid}`)
        dispatch({
            type: transactionTypes.GET_TRANSACTIONS_SUCCESS,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: transactionTypes.GET_TRANSACTIONS_ERROR
        })
    }
    
}

export const cleanupTransactions = () => dispatch => {
    dispatch({
        type: transactionTypes.CLEANUP_TRANSACTIONS
    })
}