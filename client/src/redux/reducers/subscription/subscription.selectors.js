import { createSelector } from 'reselect'

const subscriptionState = state => state.subscription

export const selectSubscriptions = createSelector(
    subscriptionState,
    subscriptions => subscriptions
)