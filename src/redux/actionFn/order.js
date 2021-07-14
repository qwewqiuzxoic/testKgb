import { GET_MOVEDAY_ERROR, GET_MOVEDAY_INIT, GET_MOVEDAY_LOADING, GET_MOVEDAY_SUCCESS } from "../types/order.type"

export const getMoveDaySuccess = (data)=>{
    return{
        type:GET_MOVEDAY_SUCCESS,
        data:data
    }
}
export const getMoveDayLoading = ()=>{
    return{
        type:GET_MOVEDAY_LOADING
    }
}
export const getMoveDayError = (data)=>{
    return{
        type:GET_MOVEDAY_ERROR,
        data:data
    }
}
export const getMoveDayInit = ()=>{
    return{
        type:GET_MOVEDAY_INIT
    }
}