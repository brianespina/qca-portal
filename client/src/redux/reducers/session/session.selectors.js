import { createSelector } from 'reselect'

const selectSessionState = state => state.session

export const selectSessionItems = createSelector(
    selectSessionState,
    session => session.sessionItems
)