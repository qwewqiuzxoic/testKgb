import { combineReducers } from 'redux';
import loginReducer from './reducer/loginReducer';
import {boardReducer,boardDetailReducer} from './reducer/boradReducer';

const rootReducer = combineReducers({
    loginReducer,
    boardReducer,
    boardDetailReducer
});
export default rootReducer;
