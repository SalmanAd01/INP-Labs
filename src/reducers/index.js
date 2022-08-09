import changeMode from "./mode";
import changeNavToggle from "./nav";
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    changeMode,
    changeNavToggle
})
export default rootReducer;