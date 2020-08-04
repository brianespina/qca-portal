import { createSelector } from 'reselect'

const usersState = state => state.users

export const selectUsers = createSelector(
    usersState,
    users => users
)
