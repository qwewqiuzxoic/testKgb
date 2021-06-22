import { billDetailInit, billListInit } from "../init/init";

export function billListReducer(state= billListInit.error,action){
    switch(action.type){
        case "BILL_LIST_SUCCESS":
            return{
                ...state,
                loading:false,
                error:"",
                result:action.data.result,
                message:action.data.message,
                list:action.data.list
            }
        case "BILL_LIST_LOADING":
            return{
                ...state,
                loading:true,
                error:"",
                result:"",
                message:"",
                list:[]
            }
        case "BILL_LIST_ERROR":
            return{
                ...state,
                loading:false,
                error:action.data,
                result:"",
                message:"",
                list:[]
            }
        default:
            return state;
    }
}

export function billDetailReducer(state= billDetailInit.error,action){
    switch(action.type){
        case "BILL_DETAIL_SUCCESS":
            return{
                ...state,
                loading:false,
                error:"",
                data:action.data 
            }
        case "BILL_DETAIL_LOADING":
            return{
                ...state,
                loading:true,
                error:"",
                data:{} 
            }
        case "BILL_DETAIL_ERROR":
            return{
                ...state,
                loading:false,
                error:action.data,
                data:{} 
            }
        default:
            return state;
    }
}