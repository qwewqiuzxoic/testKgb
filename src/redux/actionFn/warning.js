import { WARNING_DETAIL_ERROR, WARNING_DETAIL_LOADING, WARNING_DETAIL_SUCCESS, WARNING_LIST_CONCAT_LOADING, WARNING_LIST_CONCAT_SUCCESS, WARNING_LIST_ERROR, WARNING_LIST_LOADING, WARNING_LIST_SUCCESS } from "../types/warning.type"

export const getWarningSuccess = (data) => {
    return{
        type:WARNING_LIST_SUCCESS,
        data
    }
}
export const getWarningConcatSuccess = (data) => {
    return{
        type:WARNING_LIST_CONCAT_SUCCESS,
        data
    }
}
export const getWarningConcatloading = () => {
    return{
        type:WARNING_LIST_CONCAT_LOADING
    }
}
export const getWarningLoading = () => {
    return{
        type:WARNING_LIST_LOADING
    }
}

export const getWarningError = (data) => {
    return{
        type:WARNING_LIST_ERROR,
        data
    }
}


export const getWarningDetailSuccess = (data) => {
    return{
        type:WARNING_DETAIL_SUCCESS,
        data
    }
}

export const getWarningDetailLoading = () => {
    return{
        type:WARNING_DETAIL_LOADING
    }
}

export const getWarningDetailError = (data) => {
    return{
        type:WARNING_DETAIL_ERROR,
        data
    }
}