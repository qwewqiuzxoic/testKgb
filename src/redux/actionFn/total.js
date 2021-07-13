import { API_ANDATA_ERROR, API_ANDATA_INIT, API_ANDATA_LOADING, API_ANDATA_SUCCESS, API_AN_ERROR, API_AN_INIT, API_AN_LOADING, API_AN_SUCCESS, API_DATA_ERROR, API_DATA_INIT, API_DATA_LOADING, API_DATA_SUCCESS, API_ERROR, API_INIT, API_LIST_CONCAT_ERROR, API_LIST_CONCAT_INIT, API_LIST_CONCAT_LOADING, API_LIST_CONCAT_SUCCESS, API_LIST_ERROR, API_LIST_INIT, API_LIST_LOADING, API_LIST_SUCCESS, API_LOADING, API_SUCCESS } from "../types/total.type"

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


export const totalAnMesSuccess = (data) =>{
    return{
        type:API_AN_SUCCESS,
        data
    }   
}

export const totalAnMesLoading = () =>{
    return{
        type:API_AN_LOADING
    }   
}

export const totalAnMesError = (data) =>{
    return{
        type:API_AN_ERROR,
        data
    }   
}

export const totalAnMesInit = () =>{
    return{
        type:API_AN_INIT
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


export const totalListConcatSuccess = (data) =>{
    return{
        type:API_LIST_CONCAT_SUCCESS,
        data
    }
}
export const totalListConcatLoading = () =>{
    return{
        type:API_LIST_CONCAT_LOADING
    }
}
export const totalListConcatError = (data) =>{
    return{
        type:API_LIST_CONCAT_ERROR,
        data
    }
}
export const totalListConcatInit= () =>{
    return{
        type:API_LIST_CONCAT_INIT
    }
}


export const totalDataSuccess = (data) =>{
    return{
        type:API_DATA_SUCCESS,
        data
    }   
}

export const totalDataLoading = () =>{
    return{
        type:API_DATA_LOADING
    }   
}

export const totalDataError = (data) =>{
    return{
        type:API_DATA_ERROR,
        data
    }   
}

export const totalDataInit = () =>{
    return{
        type:API_DATA_INIT
    }   
}


export const totalDataAnSuccess = (data) =>{
    return{
        type:API_ANDATA_SUCCESS,
        data
    }   
}

export const totalDataAnLoading = () =>{
    return{
        type:API_ANDATA_LOADING
    }   
}

export const totalDataAnError = (data) =>{
    return{
        type:API_ANDATA_ERROR,
        data
    }   
}

export const totalDataAnInit = () =>{
    return{
        type:API_ANDATA_INIT
    }   
}

