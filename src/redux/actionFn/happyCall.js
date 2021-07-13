import { HAPPYCALL_DETAIL_ERROR, HAPPYCALL_DETAIL_LOADING, HAPPYCALL_DETAIL_SUCCESS, HAPPYCALL_LIST_CONCAT_LOADING, HAPPYCALL_LIST_CONCAT_SUCCESS, HAPPYCALL_LIST_ERROR, HAPPYCALL_LIST_LOADING, HAPPYCALL_LIST_SUCCESS } from "../types/happyCall.type"

export const getHappyCallSuccess = (data) => {
    return{
        type:HAPPYCALL_LIST_SUCCESS,
        data
    }
}
export const getHappyCallConcatSuccess = (data) => {
    return{
        type:HAPPYCALL_LIST_CONCAT_SUCCESS,
        data
    }
}
export const getHappyCallLoading = () => {
    return{
        type:HAPPYCALL_LIST_LOADING
    }
}
export const getHappyCallConcatLoading = () =>{
    return{
        type:HAPPYCALL_LIST_CONCAT_LOADING
    }
}
export const getHappyCallError = (data) => {
    return{
        type:HAPPYCALL_LIST_ERROR,
        data
    }
}


export const getHappyCallDetailSuccess = (data) => {
    return{
        type:HAPPYCALL_DETAIL_SUCCESS,
        data
    }
}

export const getHappyCallDetailLoading = () => {
    return{
        type:HAPPYCALL_DETAIL_LOADING
    }
}

export const getHappyCallDetailError = (data) => {
    return{
        type:HAPPYCALL_DETAIL_ERROR,
        data
    }
}