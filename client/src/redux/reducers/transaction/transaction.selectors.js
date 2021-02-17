import { createSelector } from 'reselect'

const transactionState = state => state.transaction

export const selectTransactions = createSelector(
    transactionState,
    transaction => transaction.transactions
)