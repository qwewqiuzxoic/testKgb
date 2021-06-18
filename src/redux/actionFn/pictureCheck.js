import { PICTURECHECK_DETAIL_ERROR, PICTURECHECK_DETAIL_LOADING, PICTURECHECK_DETAIL_SUCCESS, PICTURECHECK_LIST_ERROR, PICTURECHECK_LIST_LOADING, PICTURECHECK_LIST_SUCCESS } from "../types/pictureCheck.type"

export const picturecheckSuccess = (data)=>{
    return{
        type:PICTURECHECK_LIST_SUCCESS,
        data
    }
}

export const picturecheckLoading = ()=>{
    return{
        type:PICTURECHECK_LIST_LOADING
    }
}

export const picturecheckError = (data)=>{
    return{
        type:PICTURECHECK_LIST_ERROR,
        data
    }
}

//상세보기
export const picturecheckDetailSuccess = (data)=>{
    return{
        type:PICTURECHECK_DETAIL_SUCCESS,
        data
    }
}

export const picturecheckDetailLoading = ()=>{
    return{
        type:PICTURECHECK_DETAIL_LOADING
    }
}

export const picturecheckDetailError = (data)=>{
    return{
        type:PICTURECHECK_DETAIL_ERROR,
        data
    }
}