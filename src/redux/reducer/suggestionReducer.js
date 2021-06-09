import { suggestionInit } from "../init/init";
import { SUGGESTION_ERROR, SUGGESTION_INIT, SUGGESTION_LOADING, SUGGESTION_SUCCESS } from "../types/suggestion.type";


export default function suggestionReducer (state =suggestionInit,action){
    switch(action.type){
        case SUGGESTION_LOADING:
            return{
                ...state,
                loading:true,
                error:{}
            }
        case SUGGESTION_ERROR:
            return{
                ...state,
                loading:false,
                error:action.data
            }
        case SUGGESTION_SUCCESS:
            return{
                ...state,
                loading:false,
                error:{},
                result:action.data
            }
        case SUGGESTION_INIT:
            return{
                ...suggestionInit
            }
        default : return state
    }

}