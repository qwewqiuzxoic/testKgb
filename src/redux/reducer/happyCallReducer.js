import { happyCallDetailInit, happyCallInit } from "../init/init";


export function happyCallListReducer(state = happyCallInit, action){
    switch(action.type){
        case "HAPPYCALL_LIST_SUCCESS":
            return{
                ...state,
                loading:false,
                error:"",
                result:action.data.result,
                list:action.data.list
            }
        case "HAPPYCALL_LIST_LOADING":
            return{
                ...state,
                loading:true,
                error:"",
                result:"",
                list:[]
            }
        case "HAPPYCALL_LIST_ERROR":
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

export function happyCallDetailReducer(state = happyCallDetailInit, action){
    switch(action.type){
        case "HAPPYCALL_DETAIL_SUCCESS":
            return{
                ...state,
                loading:false,
                error:"",
                data:action.data
            }
        case "HAPPYCALL_DETAIL_LOADING":
            return{
                ...state,
                loading:true,
                error:"",
                data:{
                    ...happyCallDetailInit
                }
            }
        case "HAPPYCALL_DETAIL_ERROR":
            return{
                ...state,
                loading:false,
                error:action.data,
                data:{
                    ...happyCallDetailInit
                }
            }
        default: return state;
    }
}