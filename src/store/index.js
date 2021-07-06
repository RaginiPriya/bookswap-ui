import { createStore, combineReducers } from 'redux';
import userReducer from './userReducer'

const reducers = combineReducers({
    userReducer
})

const store = createStore(reducers)

export default store