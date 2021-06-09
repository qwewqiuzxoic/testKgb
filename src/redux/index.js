import { combineReducers } from 'redux';
import loginReducer from './reducer/loginReducer';
import ModalReducer from './reducer/ModalReducer';
import suggestionReducer from './reducer/suggestionReducer';
import {boardReducer,boardDetailReducer, boardPostReducer} from './reducer/boradReducer';
import {dayScReducer, monthScReducer} from './reducer/scheduleReducer';
import {workingDayReducer, workingDayDetailReducer} from './reducer/workingDayReducer'
const rootReducer = combineReducers({
    loginReducer,
    boardReducer,
    boardDetailReducer,
    dayScReducer,
    monthScReducer,
    boardPostReducer,
    workingDayReducer,
    workingDayDetailReducer,
    ModalReducer,
    suggestionReducer
});
export default rootReducer;
