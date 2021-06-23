import { totalListInit, totalMesInit } from "../actionFn/total";

export function totalMesReducer(state = totalMesInit,action){
    switch(action.type){
        case "API_SUCCESS":
            return{
                ...state,
                loading:false,
                error:"",
                result:action.data.result,
                message:action.data.message
            }
        case "API_LOADING":
            return{
                ...state,
                loading:true,
                error:"",
                result:"",
                message:""
            }
        case "API_ERROR":
            return{
                ...state,
                loading:false,
                error:action.data,
                result:"",
                message:""
            }
        case "API_INIT":
            return totalMesInit;
        default:
            return state;
    }
}


export function totalListReducer(state = totalListInit,action){
    switch (action.type){
        case "API_LIST_SUCCESS":
            return{
                ...state,
                ...action.data,
                // list:action.data.list,
                 loading: false,
                 error:"",
                // result:action.data.result,
                // message:action.data.message
            }
        case "API_LIST_LOADING":
            return{
                ...state,
                list:[],
                loading: true,
                error:action.data,
                result:"",
                message:""
            }
        case "API_LIST_ERROR":
            return{
            ...state,
            list:[],
            loading: false,
            error:action.data,
            result:"",
            message:""
        }
        case "API_LIST_INIT":
            return totalListInit;
        default:
            return{
                ...state
            }
    }
}
