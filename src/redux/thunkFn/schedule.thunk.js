import axios from "axios";
import { dayScError, dayScGetdata, dayScLoading,  dayScError2, dayScGetdata2, dayScLoading2,monthScError, monthScGetdata, monthScLoading, sondayError, sondayLoading, sondaySuccess } from "../actionFn/schedule";
import { useDispatch, useSelector } from 'react-redux';





export const getMonthSc = (year,month,page) => dispatch => {
    const user = JSON.parse(localStorage.getItem('user'));       
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
    const user = JSON.parse(localStorage.getItem('user'));       
    dispatch(dayScLoading());
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
const user = JSON.parse(localStorage.getItem('user'));       

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
export const getMainDaySc2 = () => dispatch => {
    const user = JSON.parse(localStorage.getItem('user'));       
    
        dispatch(dayScLoading2());
        const url ='/BM/API/main/main_schedule.asp';
        axios.post(url,{
            "brand": user.brand,
            "biz_sn" : user.biz_sn
        }).then(res =>{
            dispatch(dayScGetdata2(res.data))
        }).catch(function(error){
            dispatch(dayScError2(error))
        })
    }
    
export const postEduSubmit = (sn) => dispatch =>{
const user = JSON.parse(localStorage.getItem('user'));       

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

export const getSonDayList = (yy,mm) => dispatch =>{
    dispatch(sondayLoading());
    const url ='/BM/API/seller/get_sonday_info.asp';
    axios.post(url,{
        "dDateY":yy,
        "dDateM":mm
    }).then(res =>{
        dispatch(sondaySuccess(res.data))
    }).catch(function(error){
        dispatch(sondayError(error))
    })
}