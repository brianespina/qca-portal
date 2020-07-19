import profileActionTypes from './profile.types'

const INITIAL_STATE = {
    profile: null,
    profiles: [],
    repos: [],
    loading: true,
    error: {}
}

function profileReducer(state = INITIAL_STATE, action){
    const { type, payload } = action

    switch( type ){

        case profileActionTypes.GET_PROFILE:
            return {
                ...state,
                profile: payload,
                loading: false
            }

        case profileActionTypes.PROFILE_ERROR:
            return {
                ...state,
                profile: null,
                error: payload,
                loading: false
            }

        case profileActionTypes.CLEAR_PROFILE:
            return {
                ...INITIAL_STATE
            }

        case profileActionTypes.GET_PROFILE_SUCCESS:
            return {
                ...state,
                profiles: payload,
                loading: false
            }

        default:
            return {
                ...state
            }
    }
}

export default profileReducer