import { dayScInit, eduSubmitInit, monthScInit, sonDayInit } from "../init/init";
import { D_SC_ERROR, D_SC_GETDATA, D_SC_LOADING, M_SC_ERROR, M_SC_GETDATA, M_SC_LOADING } from "../types/schedule.type";

export function monthScReducer(state = monthScInit,action){
    switch (action.type){
        case M_SC_LOADING:
            return{
                ...state,
                list:[],
                loading: true,
                error:action.data,
                result:"",
                message:""
            }
        case M_SC_GETDATA:
            return{
                ...state,
                list:action.data.list,
                loading: false,
                error:"",
                result:action.data.result,
                message:action.data.message
            }
        case M_SC_ERROR:
            return{
            ...state,
            list:[],
            loading: false,
            error:action.data,
            result:"",
            message:""
        }
        default:
            return{
                ...state
            }
    }
}

export function dayScReducer(state = dayScInit,action){
    switch (action.type){
        case D_SC_LOADING:
            return{
                ...state,
                list:[],
                loading: true,
                error:action.data,
                result:"",
                message:""
            }
        case D_SC_GETDATA:
            return{
                ...state,
                list:action.data.list,
                loading: false,
                error:"",
                result:action.data.result,
                message:action.data.message
            }
        case D_SC_ERROR:
            return{
            ...state,
            list:[],
            loading: false,
            error:action.data,
            result:"",
            message:""
        }
        default:
            return{
                ...state
            }
    }
}
export function eduScReducer(state= eduSubmitInit,action){
    switch (action.type){
        case "EDU_SUBMIT_LOADING":
            return{
                ...state,
                loading: true,
                error:action.data,
                result:"",
                message:""
            }
        case "EDU_SUBMIT_SUCCESS":
            return{
                ...state,
                loading: false,
                error:"",
                result:action.data.result,
                message:action.data.message
            }
        case "EDU_SUBMIT_ERROR":
            return{
            ...state,
            loading: false,
            error:action.data,
            result:"",
            message:""
        }
        case "EDU_SUBMIT_INIT":
            return eduSubmitInit;
        default:
            return{
                ...state
            }
    }
}


// export const SONDAY_SUCCESS = 'SONDAY_SUCCESS';
// export const SONDAY_LOADING = 'SONDAY_LOADING';
// export const SONDAY_ERROR = 'SONDAY_ERROR';
// export const SONDAY_INIT = 'SONDAY_INIT';

export function sonDayReducer(state = sonDayInit,action){
    switch(action.type){
        case "SONDAY_SUCCESS":
            return{
                ...state,
                loading:false,
                error:"",
                result:action.data.result,
                message:action.data.message,
                list:action.data.list
            }
        case "SONDAY_LOADING":
            return{
                ...state,
                loading:true,
                error:"",
                result:"",
                message:"",
                list:[]
            }
        case "SONDAY_ERROR":
            return{
                ...state,
                loading:false,
                error:action.data,
                result:"",
                message:"",
                list:[]
            }
        case "SONDAY_INIT":
            return sonDayInit;
        default:
            return state;
    }
}