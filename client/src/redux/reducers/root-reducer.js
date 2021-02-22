import { combineReducers } from 'redux'
import alertReducer from './alert/alert.reducer'
import authReducer from './auth/auth.reducer'
import profileReducer from './profile/profile.reducer'
import subscriptionReducer from './subscription/subscription.reducer'
import usersReducer from './users/users.reducer'
import transactionReducer from './transaction/transaction.reducer'
import sessionReducer from './session/session.reducer'

export default combineReducers({
    alert: alertReducer,
    auth: authReducer,
    profile: profileReducer,
    subscription: subscriptionReducer,
    users: usersReducer,
    transaction: transactionReducer,
    session: sessionReducer
})