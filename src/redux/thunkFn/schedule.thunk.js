import axios from "axios";
import { dayScError, dayScGetdata, dayScLoading, monthScError, monthScGetdata, monthScLoading } from "../actionFn/schedule";

const user = JSON.parse(localStorage.getItem('user'));       




export const getMonthSc = (year,month,page) => dispatch => {
    dispatch(monthScLoading());
    const url = page === "1" ?'/BM/API/seller/task_month.asp':'/BM/API/edu/edu_sch_month.asp';

    axios.post(url,{
        "brand": user.brand,
        "biz_sn" : user.biz_sn,
        "dDateY" : year,
        "dDateM" : month
    }).then(res =>{
        dispatch(monthScGetdata(res.data))
        console.log(res.data)
    }).catch(function(error){
        dispatch(monthScError(error))
    })
}

export const getDaySc = (date,page) => dispatch => {
    dispatch(dayScLoading());
    console.log(date)
    const url = page === "1"? '/BM/API/seller/task_list.asp':'/BM/API/edu/edu_sch_list.asp';
    const body = page === "1"?
    {
        "brand": user.brand,
        "biz_sn" : user.biz_sn,
        "daymove" : date,
    }
        :
    {
        "brand": user.brand,
        "biz_sn" : user.biz_sn,
        "man_info_sn":user.man_info_sn,
        "dayedu" : date,
    }
    axios.post(url,body).then(res =>{
        dispatch(dayScGetdata(res.data))
    }).catch(function(error){
        dispatch(dayScError(error))
    })
}

export const getMainDaySc = () => dispatch => {
    dispatch(dayScLoading());
    const url ='/BM/API/main/main_schedule.asp';
    axios.post(url,{
        "brand": user.brand,
        "biz_sn" : user.biz_sn
    }).then(res =>{
        dispatch(dayScGetdata(res.data))
    }).catch(function(error){
        dispatch(dayScError(error))
    })
}

export const postEduSubmit = (sn) => dispatch =>{
    dispatch(dayScLoading());
    const url ='/BM/API/edu/edu_sch_request.asp';
    axios.post(url,{
        "brand": user.brand,
        "biz_sn" : user.biz_sn,
        "man_info_sn":user.man_info_sn,
        "sn":sn
    }).then(res =>{
        dispatch(dayScGetdata(res.data))
    }).catch(function(error){
        dispatch(dayScError(error))
    })
}