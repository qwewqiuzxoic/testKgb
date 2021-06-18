import { eduAttendListInit, eduPointUseInit } from "../init/init";


export function eduAttendListReducer(state = eduAttendListInit, action) {
    switch(action.type){
        case "EDUATTEND_LIST_SUCCESS":
            return{
                ...state,
                loading:false,
                error:"",
                result:action.data.result,
                totTime:action.data.totTime,
                totPoint:action.data.totPoint,
                nowPoint:action.data.nowPoint,
                usePoint:action.data.usePoint,
                list1:action.data.list1,
                list2:action.data.list2
            }
        case "EDUATTEND_LIST_LOADING":
            return{
                ...state,
                loading:true,
                error:"",
                result:"",
                totTime:"",
                totPoint:"",
                nowPoint:"",
                usePoint:"",
                list1:[],
                list2:[]
            }
        case "EDUATTEND_LIST_ERROR":
            return{
                ...state,
                loading:false,
                error:action.data,
                result:"",
                totTime:"",
                totPoint:"",
                nowPoint:"",
                usePoint:"",
                list1:[],
                list2:[]
            }
        default: return state
                
    }

}


export function usePointReducer(state=eduPointUseInit,action){
    switch(action.type){
        case "EDUPOINT_USE_SUCCESS":
            return{
                ...state,
                loading:false,
                error:"",
                result:action.data.result,
                message:action.data.message
            }
        case "EDUPOINT_USE_LOADING":
            return{
                ...state,
                loading:true,
                error:"",
                result:"",
                message:""
            }
        case "EDUPOINT_USE_ERROR":
            return{
                ...state,
                loading:false,
                error:action.data,
                result:"",
                message:""
            }
        default:return state
    }
}