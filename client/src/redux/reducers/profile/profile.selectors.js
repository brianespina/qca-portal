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

export const selectSingleProfileIsLoading = createSelector(
    selectProfileState,
    profile => profile.singleProfileLoading
)

export const selectAllStudents = createSelector(
    selectProfileState,
    profile => profile.profiles
)

// export const selectOneStudent = createSelector(
//     selectProfileState,
//     profile => profile.profiles[1]
// )

export const selectOneStudent = id => createSelector(
    selectProfileState,
    profile => profile.profiles.find(prof => prof._id === id)
)

export const selectView = createSelector(
    selectProfileState,
    profile => profile.view
)