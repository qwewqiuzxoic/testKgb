import { dayScInit, monthScInit } from "../init/init";
import { D_SC_ERROR, D_SC_GETDATA, D_SC_LOADING, M_SC_ERROR, M_SC_GETDATA, M_SC_LOADING } from "../types/schedule.type";

export function monthScReducer(state = monthScInit,action){
    switch (action.type){
        case M_SC_LOADING:
            return{
                ...state,
                loading:true,
                error:{}
            }
        case M_SC_GETDATA:
            return{
                ...state,
                loading:false,
                data:action.data,
                error:{}
            }
        case M_SC_ERROR:
            return{
            ...state,
            loading:false,
            error:action.data
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
                loading:true,
                error:{}
            }
        case D_SC_GETDATA:
            return{
                ...state,
                loading:false,
                data:action.data,
                error:{}
            }
        case D_SC_ERROR:
            return{
            ...state,
            loading:false,
            error:action.data
        }
        default:
            return{
                ...state
            }
    }
}