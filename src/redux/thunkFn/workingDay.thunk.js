import axios from "axios";
import { workingDayDetailError, workingDayDetailLoding, workingDayDetailSuccess, workingDayError, workingDayLoding, workingDaySuccess } from "../actionFn/workingDay";

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