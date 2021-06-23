import { API_ERROR, API_INIT, API_LIST_ERROR, API_LIST_INIT, API_LIST_LOADING, API_LIST_SUCCESS, API_LOADING, API_SUCCESS } from "../types/total.type"

export const totalMesSuccess = (data) =>{
    return{
        type:API_SUCCESS,
        data
    }   
}

export const totalMesLoading = () =>{
    return{
        type:API_LOADING
    }   
}

export const totalMesError = (data) =>{
    return{
        type:API_ERROR,
        data
    }   
}

export const totalMesInit = () =>{
    return{
        type:API_INIT
    }   
}

export const totalListSuccess = (data) =>{
    return{
        type:API_LIST_SUCCESS,
        data
    }   
}

export const totalListLoading = () =>{
    return{
        type:API_LIST_LOADING
    }   
}

export const totalListError = (data) =>{
    return{
        type:API_LIST_ERROR,
        data
    }   
}

export const totalListInit = () =>{
    return{
        type:API_LIST_INIT
    }   
}