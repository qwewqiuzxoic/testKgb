import axios from "axios";
import { getHappyCallConcatLoading, getHappyCallConcatSuccess, getHappyCallDetailError, getHappyCallDetailLoading, getHappyCallDetailSuccess, getHappyCallError, getHappyCallLoading, getHappyCallSuccess } from "../actionFn/happyCall";



export const getHappyCallList = (kind,teamType,pageCount) => dispatch  => {
    const user = JSON.parse(localStorage.getItem('user'));      
    if(pageCount === 1) {
        dispatch(getHappyCallLoading());
    }else{
        dispatch(getHappyCallConcatLoading());
    }
    const url = kind === "1" ?'/BM/API/team/biz_happycall_list.asp' :'/BM/API/team/biz_nonhappycall_list.asp';
        axios.post(url, {
            biz_sn :user.biz_sn,
            code_brand : user.brand,
            page:pageCount,
            pagesize : 10,
            tabtype : teamType,
        }).then(function (res) {
            if(pageCount === 1){
                dispatch(getHappyCallSuccess(res.data));
            }else{
                dispatch(getHappyCallConcatSuccess(res.data));
            }

        }).catch(function (error) {
            dispatch(getHappyCallError(error));
        })
}

export const getHappyCallDetail= (kind,sn) => dispatch => {
const user = JSON.parse(localStorage.getItem('user'));       

    dispatch(getHappyCallDetailLoading())
    const url = kind === "1" ?'/BM/API/team/biz_happycall_desc.asp' :'/BM/API/team/biz_nonhappycall_desc.asp';
        axios.post(url, {
            sn:sn
        }).then(function (res) {
            //console.log(res)
            dispatch(getHappyCallDetailSuccess(res.data));
        }).catch(function (error) {
            dispatch(getHappyCallDetailError(error))
        })
}