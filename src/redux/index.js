import { combineReducers } from 'redux';
import loginReducer from './reducer/loginReducer';
import ModalReducer from './reducer/ModalReducer';
import suggestionReducer from './reducer/suggestionReducer';
import {boardReducer,boardDetailReducer, boardPostReducer,boardTopReducer,boardPostModifyReducer} from './reducer/boradReducer';
import {dayScReducer, dayScReducer2, monthScReducer, sonDayReducer} from './reducer/scheduleReducer';
import {selfTestGetList,selfTestGetResult,selfTestGetQuestion,selfTestPost} from './reducer/selfTestReducer';
import {workingDayReducer, workingDayDetailReducer,workingDayFormReducer} from './reducer/workingDayReducer'
import {pictureCheckReducer,pictureCheckDetailReducer} from './reducer/pictureCheckReducer'
import {happyCallListReducer,happyCallDetailReducer} from './reducer/happyCallReducer'
import {warningListReducer,warningDetailReducer} from './reducer/warningReducer'
import phoneListReducer from './reducer/phoneListReducer'
import {eduAttendListReducer,usePointReducer,eduManualReducer,  eduSurveyListReducer,eduisuListReducer} from './reducer/eduAttendReducer'
import {getAsListReducer,getAsDetailReducer,postAsCommentReducer} from './reducer/asReducer'
import {billDetailReducer,billListReducer} from './reducer/billReducer'
import { msgDelReducer, msgSendListReducer, msgRcvListReducer, msgAddReducer,msgSendReducer} from './reducer/msgReducer'
import { totalMesReducer,
    totalListReducer, totalDataReducer, totalDataAnReducer, totalAnMesReducer} from './reducer/totalReducer'
import {movedayReducer} from './reducer/orderReducer'
import {pageMemoReducer} from './reducer/pageMemoReducer'



const rootReducer = combineReducers({
    loginReducer,
    boardReducer,
    boardDetailReducer,
    dayScReducer,
    dayScReducer2,
    monthScReducer,
    boardPostReducer,
    workingDayReducer,
    boardPostModifyReducer,
    workingDayDetailReducer,
    ModalReducer,
    suggestionReducer,
    workingDayFormReducer,
    boardTopReducer,
    selfTestGetList,
    selfTestGetResult,
    selfTestGetQuestion,
    selfTestPost,
    pictureCheckReducer,
    pictureCheckDetailReducer,
    happyCallListReducer,
    happyCallDetailReducer,
    warningListReducer,
    warningDetailReducer,
    phoneListReducer,
    eduAttendListReducer,
    eduisuListReducer,
    usePointReducer,
    getAsListReducer,
    getAsDetailReducer,
    postAsCommentReducer,
    billDetailReducer,
    billListReducer,
    eduSurveyListReducer,
    msgDelReducer,
    msgSendListReducer,
    msgRcvListReducer,
    msgAddReducer,
    msgSendReducer,
    totalMesReducer,
    totalListReducer,
    totalDataReducer,
    totalDataAnReducer,
    totalAnMesReducer,
    movedayReducer,
    eduManualReducer,
    sonDayReducer,
    pageMemoReducer
});
export default rootReducer;
