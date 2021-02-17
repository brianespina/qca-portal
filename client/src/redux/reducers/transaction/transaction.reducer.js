import transactionTypes from './transaction.types'

const INITIAL_STATE = {
    transactionsLoading: true,
    transactions: []
}

function transactionReducer (state = INITIAL_STATE, action ){
    const {type, payload}  = action

    switch(type){
        case transactionTypes.GET_TRANSACTIONS_SUCCESS:
            return{
                transactionsLoading: false,
                transactions: payload.transactions
            }

        case transactionTypes.GET_TRANSACTIONS_ERROR:
            return INITIAL_STATE

        default:
            return {
                ...state
            }
    }
}

export default transactionReducer