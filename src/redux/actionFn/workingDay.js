import { WORKINGDAY_DETAIL_ERROR, WORKINGDAY_DETAIL_LOADING, WORKINGDAY_DETAIL_SUCCESS, WORKINGDAY_ERROR, WORKINGDAY_FORM_ERROR, WORKINGDAY_FORM_INPUT, WORKINGDAY_FORM_LOADING, WORKINGDAY_FORM_LOGIN_INPUT, WORKINGDAY_FORM_SUCCESS, WORKINGDAY_LOADING, WORKINGDAY_SUCCESS } from "../types/workingDay.type"

export const workingDayLoding = () =>{
    return {
        type:WORKINGDAY_LOADING
    }
}

export const workingDayError = (data) =>{
    return {
        type:WORKINGDAY_ERROR,
        data:data
    }
}

export const workingDaySuccess = (data) =>{
    return {
        type:WORKINGDAY_SUCCESS,
        data:data
    }
}

export const workingDayDetailLoding = () =>{
    return {
        type:WORKINGDAY_DETAIL_LOADING
    }
}

export const workingDayDetailError = (data) =>{
    return {
        type:WORKINGDAY_DETAIL_ERROR,
        data:data
    }
}

export const workingDayDetailSuccess = (data) =>{
    return {
        type:WORKINGDAY_DETAIL_SUCCESS,
        data:data
    }
}

export const workingDayFormLoading = () => {
    return{
        type:WORKINGDAY_FORM_LOADING
    }
}

export const workingDayFormSuccess = (data) => {
    return{
        type:WORKINGDAY_FORM_SUCCESS,
        data:data
    }
}

export const workingDayFormError = (data) => {
    return{
        type:WORKINGDAY_FORM_ERROR,
        data:data
    }
}

export const workingDayFormDataInput = (data) => {
    //console.log(data)
    const {value, name} = data.target;
    return {
        type:WORKINGDAY_FORM_INPUT,
        name:name,
        value:value
    }
}

export const workingDayFormDataLoginIput = (data) =>{
    const {biz_sn, man_info_sn,userid,name,teamname} = data
    return {
        type:WORKINGDAY_FORM_LOGIN_INPUT,
        biz_sn:biz_sn,
        man_info_sn:man_info_sn,
        userid:userid,
        username:name,
        teamname:teamname
    }
}