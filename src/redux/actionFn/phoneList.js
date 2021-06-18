import { PHONE_LIST_ERROR, PHONE_LIST_LOADING, PHONE_LIST_SUCCESS } from "../types/phoneList.type"

export const getPhoneListSuccess = (data) =>{
    return{
        type:PHONE_LIST_SUCCESS,
        data
    }
}

export const getPhoneListLoading = (data) =>{
    return{
        type:PHONE_LIST_LOADING,
    }
}

export const getPhoneListErorr = (data) =>{
    return{
        type:PHONE_LIST_ERROR,
        data
    }
}