import axios from "axios";
import { getMsgDelError, getMsgDelLoading, getMsgDelSuccess, getMsgRcvListError, getMsgRcvListLoading, getMsgRcvListSuccess, getMsgSendListError, getMsgSendListLoading, getMsgSendListSuccess, getMsgAddSuccess, getMsgAddLoading, getMsgAddError, postMsgSendSuccess, postMsgSendLoading, postMsgSendError } from "../actionFn/msg";
const user = JSON.parse(localStorage.getItem('user'));       

export const getMsgRcvList= () => dispatch => {
    dispatch(getMsgRcvListLoading());
    const url = '/BM/API/board/msg_rcv_list.asp';
        axios.post(url, {
            "man_info_sn": user.man_info_sn
        }).then(function (res) {
            console.log(res)
            dispatch(getMsgRcvListSuccess(res.data));
        }).catch(function (error) {
            dispatch(getMsgRcvListError(error));
        })
}


export const getMsgSendList= () => dispatch => {
    dispatch(getMsgSendListLoading());
    const url = '/BM/API/board/msg_send_list.asp';
        axios.post(url, {
            "man_info_sn": user.man_info_sn
        }).then(function (res) {
            console.log(res)
            dispatch(getMsgSendListSuccess(res.data));
        }).catch(function (error) {
            dispatch(getMsgSendListError(error));
        })
}


export const postMsgDel= (list, kind) => dispatch => {
    dispatch(getMsgDelLoading());
    const url = kind === 1 ?'/BM/API/board/msg_send_del.asp':'/BM/API/board/msg_rcv_del.asp';
        axios.post(url, {
            "del_msg_sn": list
        }).then(function (res) {
            console.log(res)
            dispatch(getMsgDelSuccess(res.data));
        }).catch(function (error) {
            dispatch(getMsgDelError(error));
        })
}


export const getMsgAddList = (text) => dispatch =>{
    dispatch(getMsgAddLoading());
    const url = '/BM/API/board/msg_sch_user.asp';
        axios.post(url, {
            "sch_text": text
        }).then(function (res) {
            console.log(res)
            dispatch(getMsgAddSuccess(res.data));
        }).catch(function (error) {
            dispatch(getMsgAddError(error));
        })
}

export const getMsgAddOfficeList = (brand) => dispatch =>{
    dispatch(getMsgAddLoading());
    const url = '/BM/API/board/msg_sch_list.asp';
        axios.post(url, {
            "brand": brand
        }).then(function (res) {
            console.log(res)
            dispatch(getMsgAddSuccess(res.data));
        }).catch(function (error) {
            dispatch(getMsgAddError(error));
        })
}

export const postSendMsg = (text,list) => dispatch =>{
    dispatch(postMsgSendLoading());
    const url = '/BM/API/board/msg_save.asp';
        axios.post(url, {
            "brand" : user.brand,
            "content" : text,
            "rcv_id" : list,
            "man_info_sn" : user.man_info_sn,
            "manname" : user.teamname,
        }).then(function (res) {
            console.log(res)
            dispatch(postMsgSendSuccess(res.data));
        }).catch(function (error) {
            dispatch(postMsgSendError(error));
        })
}