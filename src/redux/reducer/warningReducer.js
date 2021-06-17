import { warningDetailInit, warningInit } from "../init/init";

export function warningListReducer(state = warningInit, action){
    switch(action.type){
        case "WARNING_LIST_SUCCESS":
            return{
                ...state,
                loading:false,
                error:"",
                result:action.data.result,
                list:action.data.list
            }
        case "WARNING_LIST_CONCAT_SUCCESS":
            return{
                ...state,
                loading:false,
                error:"",
                result:action.data.result,
                list:state.list.concat(action.data.list)
            }
        case "WARNING_LIST_LOADING":
            return{
                ...state,
                loading:true,
                error:"",
                result:"",
                list:[]
            }
        case "WARNING_LIST_LOADING":
            return{
                ...state,
                loading:true,
                error:"",
                result:"",
            }
        case "WARNING_LIST_ERROR":
            return{
                ...state,
                loading:false,
                error:action.data,
                result:"",
                list:[]
            }
        default: return state;
    }
}

export function warningDetailReducer(state = warningDetailInit, action){
    switch(action.type){
        case "WARNING_DETAIL_SUCCESS":
            return{
                ...state,
                loading:false,
                error:"",
                data:action.data
            }
        case "WARNING_DETAIL_LOADING":
            return{
                ...state,
                loading:true,
                error:"",
                data:{}
            }
        case "WARNING_DETAIL_ERROR":
            return{
                ...state,
                loading:false,
                error:action.data,
                data:{}
            }
        default: return state;
    }
}