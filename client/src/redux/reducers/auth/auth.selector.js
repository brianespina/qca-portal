import { createSelector } from 'reselect'

const selectAuth = state => state.auth

export const selecAuthIsAuthenticated = createSelector(
    [selectAuth],
    auth => auth.isAuthenticated
)

export const selectAuthState = createSelector(
    [selectAuth],
    auth => auth
)

export const selectUser = createSelector(
    [selectAuth],
    auth => auth.user
)

export const selectIsAdmin = createSelector(
    [selectAuth],
    auth => auth.user.type === 'admin' ? true : false
)

export const selectIsLoading = createSelector(
    [selectAuth],
    auth => auth.loading
)

export const selectUserId = createSelector(
    [selectAuth],
    auth => auth.user._id
)