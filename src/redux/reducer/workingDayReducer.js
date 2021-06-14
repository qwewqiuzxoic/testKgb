import { workingDayDetailInit, workingDayFormInit, workingDayInit } from "../init/init";
import { WORKINGDAY_DETAIL_ERROR, WORKINGDAY_DETAIL_LOADING, WORKINGDAY_DETAIL_SUCCESS, WORKINGDAY_ERROR, WORKINGDAY_FORM_ERROR, WORKINGDAY_FORM_INPUT, WORKINGDAY_FORM_LOADING, WORKINGDAY_FORM_LOGIN_INPUT, WORKINGDAY_FORM_SUCCESS, WORKINGDAY_LOADING, WORKINGDAY_SUCCESS } from "../types/workingDay.type";


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

export function workingDayFormReducer(state = workingDayFormInit,action){
    console.log(action)
    switch(action.type){
        case WORKINGDAY_FORM_INPUT:
            return{
                ...state,
                data:{
                    ...state.data,
                    [action.name]:action.value
                }
            }
        case WORKINGDAY_FORM_LOGIN_INPUT:
            return{
                ...state,
                data:{
                    ...workingDayFormInit.data,
                    biz_sn:action.biz_sn,
                    man_info_sn:action.man_info_sn,
                    username:action.username,
                    userid:action.userid,
                    teamName:action.teamname
                },
                result:""
            }
        case WORKINGDAY_FORM_LOADING:
            return{
                ...state,
                loading:true
            }
        case WORKINGDAY_FORM_SUCCESS:
            return{
                ...state,
                error:"",
                loading:false,
                result:action.data
            }
        case WORKINGDAY_FORM_ERROR:
            return {
                ...state,
                error:action.data,
                loading:false,
                data:{
                    ...state.data
                }
            }
        default:
            return state;
    }
}