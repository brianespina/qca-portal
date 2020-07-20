import { createSelector } from 'reselect'

const selectProfileState = state => state.profile

export const selectProfile = createSelector(
    selectProfileState,
    profile => profile.profile
)

export const selectProfileIsLoading = createSelector(
    selectProfileState,
    profile => profile.loading
)

export const selectAllStudents = createSelector(
    selectProfileState,
    profile => profile.profiles
)