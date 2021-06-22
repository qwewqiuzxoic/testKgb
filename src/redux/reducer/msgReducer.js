import { msgDelInit, msgPostInit, msgRcvListInit, msgSearchAddInit } from "../init/init";


export function msgRcvListReducer(state = msgRcvListInit,action){
    switch(action.type){
        case "MSG_RCV_LIST_SUCCESS":
            return {
                ...state,
                loading:false,
                error:"",
                result:action.data.result,
                message:action.data.message,
                list:action.data.list.map(item=>({...item,checked:false}))   
            }
        case "MSG_RCV_LIST_LOADING":
            return {
                ...state,
                loading:true,
                error:"",
                result:"",
                message:"",
                list:[]   
            }
        case "MSG_RCV_LIST_ERROR":
            return {
                ...state,
                loading:false,
                error:action.data,
                result:"",
                message:"",
                list:[]   
            }
        default:return state;
    }
}



export function msgSendListReducer(state = msgRcvListInit,action){
    switch(action.type){
        case "MSG_SEND_LIST_SUCCESS":
            return {
                ...state,
                loading:false,
                error:"",
                result:action.data.result,
                message:action.data.message,
                list:action.data.list   
            }
        case "MSG_SEND_LIST_LOADING":
            return {
                ...state,
                loading:true,
                error:"",
                result:"",
                message:"",
                list:[]   
            }
        case "MSG_SEND_LIST_ERROR":
            return {
                ...state,
                loading:false,
                error:action.data,
                result:"",
                message:"",
                list:[]   
            }
        default:return state;
    }
}

export function msgDelReducer(state = msgDelInit, action){
    switch(action.type){
        case "MSG_DEL_SUCCESS":
            return {
                ...state,
                loading:false,
                error:"",
                result:action.data.result,
                message:action.data.message
            }
        case "MSG_DEL_LOADING":
            return {
                ...state,
                loading:true,
                error:"",
                result:"",
                message:""
            }
        case "MSG_DEL_ERROR":
            return {
                ...state,
                loading:false,
                error:action.data,
                result:"",
                message:""
            }
        case "MSG_DEL_INIT":
            return{
                ...msgDelInit
            }
        default:return state;
    }
}

export function msgAddReducer(state = msgSearchAddInit, action){
    switch(action.type){
        case "MSG_SEARCH_ADD_SUCCESS":
            return {
                ...state,
                loading:false,
                error:"",
                result:action.data.result,
                message:action.data.message,
                list:action.data.list   
            }
        case "MSG_SEARCH_ADD_LOADING":
            return {
                ...state,
                loading:true,
                error:"",
                result:"",
                message:"",
                list:[]   
            }
        case "MSG_SEARCH_ADD_ERROR":
            return {
                ...state,
                loading:false,
                error:action.data,
                result:"",
                message:"",
                list:[]   
            }
        default:return state;
    }
}

export function msgSendReducer(state = msgPostInit, action){
    switch(action.type){
        case "MSG_SEND_SUCCESS":
            return {
                ...state,
                loading:false,
                error:"",
                result:action.data.result,
                message:action.data.message,
            }
        case "MSG_SEND_LOADING":
            return {
                ...state,
                loading:true,
                error:"",
                result:"",
                message:"",
            }
        case "MSG_SEND_ERROR":
            return {
                ...state,
                loading:false,
                error:action.data,
                result:"",
                message:"",
            }
        case "MSG_SEND_INIT":
            return{
                ...msgPostInit
            }
        default:return state;
    }
}