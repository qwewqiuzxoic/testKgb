import { combineReducers } from 'redux';
import loginReducer from './reducer/loginReducer';
import {boardReducer} from './reducer/boradReducer';

const rootReducer = combineReducers({
    loginReducer,
    boardReducer
});
export default rootReducer;
