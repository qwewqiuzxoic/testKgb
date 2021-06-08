import { combineReducers } from 'redux';
import loginReducer from './reducer/loginReducer';
import {boardReducer,boardDetailReducer, boardPostReducer} from './reducer/boradReducer';
import {dayScReducer, monthScReducer} from './reducer/scheduleReducer';

const rootReducer = combineReducers({
    loginReducer,
    boardReducer,
    boardDetailReducer,
    dayScReducer,
    monthScReducer,
    boardPostReducer
});
export default rootReducer;
