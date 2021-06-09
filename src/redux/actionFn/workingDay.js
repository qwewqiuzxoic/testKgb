import { WORKINGDAY_DETAIL_ERROR, WORKINGDAY_DETAIL_LOADING, WORKINGDAY_DETAIL_SUCCESS, WORKINGDAY_ERROR, WORKINGDAY_LOADING, WORKINGDAY_SUCCESS } from "../types/workingDay.type"

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