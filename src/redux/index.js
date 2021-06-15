import { combineReducers } from 'redux';
import loginReducer from './reducer/loginReducer';
import ModalReducer from './reducer/ModalReducer';
import suggestionReducer from './reducer/suggestionReducer';
import {boardReducer,boardDetailReducer, boardPostReducer,boardTopReducer,boardPostModifyReducer} from './reducer/boradReducer';
import {dayScReducer, monthScReducer} from './reducer/scheduleReducer';
import {workingDayReducer, workingDayDetailReducer,workingDayFormReducer} from './reducer/workingDayReducer'
const rootReducer = combineReducers({
    loginReducer,
    boardReducer,
    boardDetailReducer,
    dayScReducer,
    monthScReducer,
    boardPostReducer,
    workingDayReducer,
    boardPostModifyReducer,
    workingDayDetailReducer,
    ModalReducer,
    suggestionReducer,
    workingDayFormReducer,
    boardTopReducer
});
export default rootReducer;
