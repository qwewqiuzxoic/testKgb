import axios from "axios";
import { dayScError, dayScGetdata, dayScLoading, monthScError, monthScGetdata, monthScLoading } from "../actionFn/schedule"



export const getMonthSc = () => dispatch => {
    dispatch(monthScLoading());
    const url ='http://localhost:3001/calendar';
    axios.get(url).then(res =>{
        dispatch(monthScGetdata(res.data))
        console.log(res.data)
    }).catch(function(error){
        dispatch(monthScError(error))
    })
}

export const getDaySc = (date) => dispatch => {
    dispatch(dayScLoading());
    const url =`http://localhost:3001/calendar?date=${date}`;
    axios.get(url).then(res =>{
        dispatch(dayScGetdata(res.data))
    }).catch(function(error){
        dispatch(dayScError(error))
    })
}