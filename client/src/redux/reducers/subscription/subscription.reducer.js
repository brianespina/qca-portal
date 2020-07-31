import subscriptionActionTypes from './subscription.types'

const INITIAL_STATE = {
    loading: true,
    items: []
}

function subscriptionReducer(state = INITIAL_STATE, action ){
    const { type, payload } = action
    switch(type){

        case subscriptionActionTypes.GET_SUBSCRIPTIONS_SUCCESS:
            return{
                ...state,
                loading: false,
                items: [...payload]
            }
    
        default:
            return{
                ...state
            }
    }
}

export default subscriptionReducer