import {combineReducers} from 'redux';
import GameOanTuXiReducer from './GameOanTuXiReducer';


const rootReducer = combineReducers({
    state: GameOanTuXiReducer
}) 

export default rootReducer;