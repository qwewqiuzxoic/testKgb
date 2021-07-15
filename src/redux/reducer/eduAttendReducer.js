import { eduAttendListInit, eduisuListInit, eduManual, eduPointUseInit, eduSurveyListInit } from "../init/init";


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



//교육 설문 리듀서
export function eduSurveyListReducer(state = eduSurveyListInit, action){
    switch(action.type){
        case "EDUSURVEY_LIST_SUCCESS":
            return{
                ...state,
                loading:false,
                error:"",
                result:action.data.result,
                message:action.data.message,
                list:action.data.list
            }
        case "EDUSURVEY_LIST_LOADING":
            return{
                ...state,
                loading:true,
                error:"",
                result:"",
                message:"",
                list:[]
            }
        case "EDUSURVEY_LIST_ERROR":
            return{
                ...state,
                loading:false,
                error:"",
                result:"",
                message:"",
                list:[]
            }
        default :return state;
    }
}

export function eduisuListReducer(state = eduisuListInit, action){
    switch(action.type){
        case "EDUISU_LIST_SUCCESS":
            return{
                ...state,
                loading:false,
                error:"",
                result:action.data.result,
                message:action.data.message,
                list:action.data.list
            }
        case "EDUISU_LIST_LOADING":
            return{
                ...state,
                loading:true,
                error:"",
                result:"",
                message:"",
                list:[]
            }
        case "EDUISU_LIST_ERROR":
            return{
                ...state,
                loading:false,
                error:"",
                result:"",
                message:"",
                list:[]
            }
        default :return state;
    }
}

export const EDU_MANUAL_SUCCESS = "EDU_MANUAL_SUCCESS";
export const EDU_MANUAL_LOADING = "EDU_MANUAL_LOADING";
export const EDU_MANUAL_ERROR = "EDU_MANUAL_ERROR";
export const EDU_MANUAL_INIT = "EDU_MANUAL_INIT";

export function eduManualReducer(state= eduManual,action){
    switch(action.type){
        case "EDU_MANUAL_SUCCESS":
            return{
                loading:false,
                error:"",
                result:action.data.result,
                message:action.data.message,
                docurl:action.data.docurl
            }
        case "EDU_MANUAL_LOADING":
            return{
                loading:true,
                error:"",
                result:"",
                message:"",
                docurl:""
            }
        case "EDU_MANUAL_ERROR":
            return{
                loading:false,
                error:action.data,
                result:"",
                message:"",
                docurl:""
            }
        case "EDU_MANUAL_INIT":
            return eduManual
        default: return state
    }
}