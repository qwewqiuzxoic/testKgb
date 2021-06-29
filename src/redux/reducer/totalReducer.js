import { totalListInit, totalMesInit } from "../actionFn/total";
import { totalAnData, totalData } from "../init/init";

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
export function totalAnMesReducer(state = totalMesInit,action){
    switch(action.type){
        case "API_AN_SUCCESS":
            return{
                ...state,
                loading:false,
                error:"",
                data:action.data
            }
        case "API_AN_LOADING":
            return{
                ...state,
                loading:true,
                error:"",
                data:{}
            }
        case "API_AN_ERROR":
            return{
                ...state,
                loading:false,
                error:action.data,
                data:{}
            }
        case "API_AN_INIT":
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



export function totalDataReducer(state = totalData,action){
    switch(action.type){
        case "API_DATA_SUCCESS":
            return{
                ...state,
                loading:false,
                error:"",
                data:action.data
            }
        case "API_DATA_LOADING":
            return{
                ...state,
                loading:true,
                error:"",
                data:{}
            }
        case "API_DATA_ERROR":
            return{
                ...state,
                loading:false,
                error:action.data,
                data:{}
            }
        case "API_DATA_INIT":
            return totalData;
        default:
            return state;
    }
}


export function totalDataAnReducer(state = totalAnData,action){
    switch(action.type){
        case "API_ANDATA_SUCCESS":
            return{
                ...state,
                loading:false,
                error:"",
                data:action.data
            }
        case "API_ANDATA_LOADING":
            return{
                ...state,
                loading:true,
                error:"",
                data:{}
            }
        case "API_ANDATA_ERROR":
            return{
                ...state,
                loading:false,
                error:action.data,
                data:{}
            }
        case "API_ANDATA_INIT":
            return totalData;
        default:
            return state;
    }
}
