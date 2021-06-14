import axios from "axios";
import { useSelector } from "react-redux";
import { workingDayDetailError, workingDayDetailLoding, workingDayDetailSuccess, workingDayError, workingDayFormError, workingDayFormLoading, workingDayFormSuccess, workingDayLoding, workingDaySuccess } from "../actionFn/workingDay";
import { WORKINGDAY_FORM_ERROR } from "../types/workingDay.type";
import {useHistory} from "react-router-dom";

export const getWorkingDayChange = () => dispatch  => {
    dispatch(workingDayLoding());
    const url = '/BM/API/team/sup_list.asp';
        axios.post(url, {
            "code_brand" : "YES2404",
            "page" : "페이지명",
            "pagesize" : "페이지" ,
            "biz_sn" : "267",
            "gbn" : ""
        }).then(function (res) {
            dispatch(workingDaySuccess(res.data.list));
           
        }).catch(function (error) {
            dispatch(workingDayError(error));
        })
}


export const getWorkingDayDetailChange = (sn) => dispatch  => {
    dispatch(workingDayDetailLoding());
    const url = '/BM/API/team/sup_desc.asp';
        axios.post(url, {
            "sn":sn
        }).then(function (res) {
            dispatch(workingDayDetailSuccess(res.data));
        }).catch(function (error) {
            dispatch(workingDayDetailError(error));
        })
}

export const postWorkingDayForm = (data) => dispatch =>{
   
    dispatch(workingDayFormLoading());
    const url = '/BM/API/team/sup_proc.asp';
    axios.post(url,data).then(function (res) {
        dispatch(workingDayFormSuccess(res.data.message))
    }).catch(function (error) {
        dispatch(workingDayFormError(error));
    })

}