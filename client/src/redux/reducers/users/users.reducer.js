import usersActionTypes from './users.types'

const INITIAL_STATE = {
    loading: true,
    users: []
}

const usersReducer = (state = INITIAL_STATE, action) => {
    const { payload, type } = action
    switch( type ){

        case usersActionTypes.GET_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                users: payload
            }

        default:
            return {
                ...state
            }

    }
}

export default usersReducer