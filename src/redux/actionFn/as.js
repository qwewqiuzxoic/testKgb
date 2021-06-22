import { AS_GET_DETAIL_ERROR, AS_GET_DETAIL_LOADING, AS_GET_DETAIL_SUCCESS, AS_GET_LIST_CONCAT_ERROR, AS_GET_LIST_CONCAT_LOADING, AS_GET_LIST_CONCAT_SUCCESS, AS_GET_LIST_ERROR, AS_GET_LIST_LOADING, AS_GET_LIST_SUCCESS, AS_POST_COMMENT_ERROR, AS_POST_COMMENT_INIT, AS_POST_COMMENT_LOADING, AS_POST_COMMENT_SUCCESS } from "../types/as.type"

export const getAsListSuccess = (data) =>{
    return{
        type:AS_GET_LIST_SUCCESS,
        data
    }
}

export const getAsListLoading = () =>{
    return{
        type:AS_GET_LIST_LOADING
    }
}

export const getAsListError = (data) =>{
    return{
        type:AS_GET_LIST_ERROR,
        data
    }
}

export const getAsListConcatSuccess = (data) =>{
    return{
        type:AS_GET_LIST_CONCAT_SUCCESS,
        data
    }
}

export const getAsListConcatLoading = () =>{
    return{
        type:AS_GET_LIST_CONCAT_LOADING
    }
}

export const getAsListConcatError = (data) =>{
    return{
        type:AS_GET_LIST_CONCAT_ERROR,
        data
    }
}


//AS 현황 상세보기
export const getAsDetailSuccess = (data) =>{
    return{
        type:AS_GET_DETAIL_SUCCESS,
        data
    }
}

export const getAsDetailLoading = () =>{
    return{
        type:AS_GET_DETAIL_LOADING
    }
}

export const getAsDetailError = (data) =>{
    return{
        type:AS_GET_DETAIL_ERROR,
        data
    }
}

//댓글달기
export const postAsCommentSuccess = (data) =>{
    return{
        type:AS_POST_COMMENT_SUCCESS,
        data
    }   
}

export const postAsCommentLoading = (data) =>{
    return{
        type:AS_POST_COMMENT_LOADING
    }   
}

export const postAsCommentError = (data) =>{
    return{
        type:AS_POST_COMMENT_ERROR,
        data
    }   
}

export const postAsCommentInit = () =>{
    return{
        type:AS_POST_COMMENT_INIT
    }   
}
