import { createStore, applyMiddleware } from 'redux'  
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from './reducers/root-reducer'

const initial_state = {}
const middleware = [thunk]

const store = createStore(rootReducer, initial_state, composeWithDevTools(applyMiddleware(...middleware)))

export default store