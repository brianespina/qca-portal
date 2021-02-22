import sessionTypes from './session.types'

const INITIAL_STATE = {
    sessionsLoading: true,
    sessionsItems: []
}

function sessionReducer(state = INITIAL_STATE, action){

    const {type, payload} = action

    switch (type) {

        case sessionTypes.GET_SESSION_SUCCESS:
            return {
                ...state,
                sessionsLoading: false,
                sessionsItems: payload
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
