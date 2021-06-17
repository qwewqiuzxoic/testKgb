import { phoneListInit } from "../init/init";

export default function phoneListReducer(state = phoneListInit, action){
    switch(action.type){
        case "PHONE_LIST_SUCCESS":
            return {
                ...state,
                loading:false,
                error:"",
                result:action.data.result,
                list:action.data.list
            }
        case "PHONE_LIST_LOADING":
            return {
                ...state,
                loading:false,
                error:"",
                result:"",
                list:[]
            }
        case "PHONE_LIST_ERROR":
            return {
                ...state,
                loading:false,
                error:action.data,
                result:"",
                list:[]
            }
        default : return state;
    }
}