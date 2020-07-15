import { createSelector } from 'reselect'

const selectAuth = state => state.auth

export const selecAuthIsAuthenticated = createSelector(
    [selectAuth],
    auth => auth.isAuthenticated
)