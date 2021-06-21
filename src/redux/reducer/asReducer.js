import { asCommentInit, asDetailInit, asInit } from "../init/init"
import { AS_GET_LIST_CONCAT_ERROR, AS_GET_LIST_CONCAT_LOADING, AS_GET_LIST_CONCAT_SUCCESS, AS_GET_LIST_ERROR, AS_GET_LIST_LOADING, AS_GET_LIST_SUCCESS } from "../types/as.type"

export function getAsListReducer(state = asInit, action) {
    switch (action.type) {
        case AS_GET_LIST_ERROR:
            return{
                ...state,
                loading:false,
                error:action.data,
                list:[],
                result:""
            }
        case AS_GET_LIST_LOADING:
            return{
                ...state,
                loading:true,
                list:[],
                result:""
            }
        
        case AS_GET_LIST_SUCCESS:
            return{
                ...state,
                loading:false,
                error:"",
                list:action.data.list,
                result:action.data.result
            }
        case AS_GET_LIST_CONCAT_SUCCESS:
            return{
                ...state,
                loading:false,
                error:"",
                list:state.list.concat(action.data.list),
                result:action.data.result
            }
        case AS_GET_LIST_CONCAT_LOADING:
            return{
                ...state,
                error:"",
                loading:true,
                result:""
            } 
        case AS_GET_LIST_CONCAT_ERROR:
            return{
                ...state,
                loading:false,
                error:action.data,
                list:[],
                result:""
            }
        
        default: 
            return state
    }
}



export function getAsDetailReducer(state = asDetailInit, action) {
    switch (action.type) {
        case "AS_GET_DETAIL_SUCCESS":
            return{
                ...state,
                loading:false,
                error:"",
                result:action.data.result,
                message:action.data.message,
                strLoginname:action.data.strLoginname,
                regdate:action.data.regdate,
                strContents:action.data.strContents,
                asresult:action.data.asresult,
                list:action.data.list
            }
        case "AS_GET_DETAIL_LOADING":
            return{
                ...state,
                loading:true,
                error:"",
                result:"",
                message:"",
                strLoginname:"",
                regdate:"",
                strContents:"",
                asresult:"",
                list:[]
            }
        
        case "AS_GET_DETAIL_ERROR":
            return{
                ...state,
                loading:false,
                error:action.data,
                result:"",
                message:"",
                strLoginname:"",
                regdate:"",
                strContents:"",
                asresult:"",
                list:[]
            }     
        default: 
            return state
    }
}


export function postAsCommentReducer(state = asCommentInit,action){
    switch(action.type){
        case "AS_POST_COMMENT_SUCCESS":
            return{
                ...state,
                loading:false,
                error:"",
                result:action.data.result,
                message:action.data.message
            }
        case "AS_POST_COMMENT_LOADING":
            return{
                ...state,
                loading:true,
                error:"",
                result:"",
                message:""
            }
        case "AS_POST_COMMENT_ERROR":
            return{
                ...state,
                loading:false,
                error:action.data,
                result:"",
                message:""
            }
        default:
            return state;
    }
}