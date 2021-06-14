import { SUGGESTION_ERROR, SUGGESTION_INIT, SUGGESTION_LOADING, SUGGESTION_SUCCESS } from "../types/suggestion.type"

export const suggestionDayLoding = () =>{
    return {
        type:SUGGESTION_LOADING
    }
}

export const suggestionError = (data) =>{
    return {
        type:SUGGESTION_ERROR,
        data:data
    }
}

export const suggestionSuccess = (data) =>{
    return {
        type:SUGGESTION_SUCCESS,
        data:data
    }
}
export const suggestionInit = () =>{
    return {
        type:SUGGESTION_INIT
    }
}