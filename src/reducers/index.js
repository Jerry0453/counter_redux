import counterReducer from "./counterReducer";
import loggedReducer from "./loggedReducer";
import saveReducer from "./saveReducer";
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    counterReducer: counterReducer,
    loggedReducer: loggedReducer,
    saveReducer: saveReducer
})

export default allReducers;