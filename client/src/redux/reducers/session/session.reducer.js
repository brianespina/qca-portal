import sessionTypes from './session.types'

const INITIAL_STATE = {
    sessionsLoading: true,
    sessionItems: []
}

function sessionReducer(state = INITIAL_STATE, action){

    const {type, payload} = action

    switch (type) {

        case sessionTypes.GET_SESSION_SUCCESS:
            return {
                ...state,
                sessionsLoading: false,
                sessionItems: payload
            }

        case sessionTypes.GET_SESSION_ERROR:
            return{
                ...state,
                sessionsLoading: false
            }

        default: 
            return state
    }
}

export default sessionReducer
