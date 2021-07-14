import { moveDayInit } from "../init/init"

export function movedayReducer(state = moveDayInit, action){
    switch(action.type){
        case "GET_MOVEDAY_SUCCESS":
            return{
                ...state,
                result:action.data.result,
                message:action.data.message,
                loading:false,
                movedayinfo:action.data.movedayinfo,
                error:""
            }
        case "GET_MOVEDAY_LOADING":
            return{
                ...state,
                result:"",
                message:"",
                loading:true,
                movedayinfo:"",
                error:""
            }
        case "GET_MOVEDAY_ERROR":
            return{
                ...state,
                result:"",
                message:"",
                loading:false,
                movedayinfo:"",
                error:action.data
            }
        case "GET_MOVEDAY_INIT":
            return moveDayInit
        default :
        return state
    }
}