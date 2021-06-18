import axios from "axios";
import { getWarningSuccess, getWarningLoading, getWarningError, getWarningDetailLoading, getWarningDetailSuccess, getWarningDetailError, getWarningConcatSuccess, getWarningConcatloading} from "../actionFn/warning";


const user = JSON.parse(localStorage.getItem('user'));       

export const warningCallList = (page=1) => dispatch  => {
    if(page === 1){
        dispatch(getWarningLoading())
    } else {
        dispatch(getWarningConcatloading())
    }
    const url = '/BM/API/team/warning_list.asp';
        axios.post(url, {
            biz_sn :user.biz_sn,
            brand  : user.brand,
            page  : page,
            pagesize  : 10,
        }).then(function (res) {
            if(page === 1){
                dispatch(getWarningSuccess(res.data));
            } else{
                dispatch(getWarningConcatSuccess(res.data));

            }
            
        }).catch(function (error) {
            dispatch(getWarningError(error))
        })
}

export const getHappyCallDetail= (sn) => dispatch => {
    dispatch(getWarningDetailLoading())
    const url = '/BM/API/team/warning_desc.asp';
        axios.post(url, {
            sn:sn
        }).then(function (res) {
            console.log(res)
            dispatch(getWarningDetailSuccess(res.data));
        }).catch(function (error) {
            dispatch(getWarningDetailError(error))
        })
}