import { createSelector } from 'reselect'

const selectAlerts = state => state.alert

export const selectAllAlerts = createSelector(
    selectAlerts,
    alert => alert
)