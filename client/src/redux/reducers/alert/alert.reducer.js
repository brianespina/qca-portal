import alertActionTypes from './alert.types'

const INITIAL_STATE = []

export default function( state = INITIAL_STATE, action ){

    const { type, payload } = action

    switch (type){

        case alertActionTypes.SET_ALERT:
            return [
                ...state,
                payload
            ]
            
        case alertActionTypes.REMOVE_ALERT:
            return state.filter( alert => alert.id !== payload )
        
        default:
            return [...state]
    }

}