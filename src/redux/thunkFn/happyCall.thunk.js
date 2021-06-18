import axios from "axios";
import { getHappyCallDetailError, getHappyCallDetailLoading, getHappyCallDetailSuccess, getHappyCallError, getHappyCallLoading, getHappyCallSuccess } from "../actionFn/happyCall";


const user = JSON.parse(localStorage.getItem('user'));       

export const getHappyCallList = (kind,teamType) => dispatch  => {
    dispatch(getHappyCallLoading())
    const url = kind === "1" ?'/BM/API/team/biz_happycall_list.asp' :'/BM/API/team/biz_nonhappycall_list.asp';
        axios.post(url, {
            biz_sn :user.biz_sn,
            code_brand : user.brand,
            pagesize : 20,
            tabtype : teamType,
        }).then(function (res) {
            dispatch(getHappyCallSuccess(res.data));
        }).catch(function (error) {
            dispatch(getHappyCallError(error))
        })
}

export const getHappyCallDetail= (kind,sn) => dispatch => {
    dispatch(getHappyCallDetailLoading())
    const url = kind === "1" ?'/BM/API/team/biz_happycall_desc.asp' :'/BM/API/team/biz_nonhappycall_desc.asp';
        axios.post(url, {
            sn:sn
        }).then(function (res) {
            console.log(res)
            dispatch(getHappyCallDetailSuccess(res.data));
        }).catch(function (error) {
            dispatch(getHappyCallDetailError(error))
        })
}