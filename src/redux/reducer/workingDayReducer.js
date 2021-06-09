import { workingDayDetailInit, workingDayInit } from "../init/init";
import { WORKINGDAY_DETAIL_ERROR, WORKINGDAY_DETAIL_LOADING, WORKINGDAY_DETAIL_SUCCESS, WORKINGDAY_ERROR, WORKINGDAY_LOADING, WORKINGDAY_SUCCESS } from "../types/workingDay.type";


export function workingDayReducer(state = workingDayInit,action){
    switch (action.type) {
        case WORKINGDAY_LOADING:
            return{
                ...state,
                loading:true,
                error:{}
            }
        case WORKINGDAY_ERROR:
            return{
                ...state,
                loading:false,
                error:action.data
            }
        case WORKINGDAY_SUCCESS:
            return{
                ...state,
                loading:false,
                error:{},
                workingDayList:action.data
            }
        default:
            return state;

    }

}

export function workingDayDetailReducer(state = workingDayDetailInit,action){
    switch (action.type) {
        case WORKINGDAY_DETAIL_LOADING:
            return{
                ...state,
                loading:true,
                error:{}
            }
        case WORKINGDAY_DETAIL_ERROR:
            return{
                ...state,
                loading:false,
                error:action.data
            }
        case WORKINGDAY_DETAIL_SUCCESS:
            return{
                ...state,
                loading:false,
                error:{},
                data:action.data
            }
        default:
            return state;

    }

}