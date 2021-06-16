import { pictureCheckDetailInit, pictureCheckInit } from "../init/init"
import { PICTURECHECK_DETAIL_ERROR, PICTURECHECK_DETAIL_LOADING, PICTURECHECK_DETAIL_SUCCESS, PICTURECHECK_LIST_ERROR, PICTURECHECK_LIST_LOADING, PICTURECHECK_LIST_SUCCESS } from "../types/pictureCheck.type"

export function pictureCheckReducer(state=pictureCheckInit,action){
    switch(action.type){
        case PICTURECHECK_LIST_SUCCESS:
            return{
                ...state,
                result:action.data.result,
                loading:false,
                error:"",
                list:action.data.list
            }
        case PICTURECHECK_LIST_LOADING:
            return{
                ...state,
                result:"",
                loading:true,
                error:"",
                list:[]
            }
        case PICTURECHECK_LIST_ERROR:
            return{
                ...state,
                result:"",
                loading:false,
                error:action.data,
                list:[]
            }
        default: return state
    }
}


export function pictureCheckDetailReducer(state=pictureCheckDetailInit,action){
    switch(action.type){
        case PICTURECHECK_DETAIL_SUCCESS:
            return{
                ...state,
                loading:false,
                error:"",
                data:action.data
            }
        case PICTURECHECK_DETAIL_LOADING:
            return{
                ...state,
                loading:true,
                error:"",
                data:{}
            }
        case PICTURECHECK_DETAIL_ERROR:
            return{
                ...state,
                loading:false,
                error:action.data,
                data:{}
            }
        default: return state
    }
}
