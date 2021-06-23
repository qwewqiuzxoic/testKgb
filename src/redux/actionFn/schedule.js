import {D_SC_ERROR,D_SC_GETDATA,D_SC_LOADING,EDU_SUBMIT_ERROR,EDU_SUBMIT_INIT,EDU_SUBMIT_LOADING,EDU_SUBMIT_SUCCESS,M_SC_ERROR,M_SC_GETDATA,M_SC_LOADING} from '../types/schedule.type';


export const monthScLoading = () =>{
    return{
        type: M_SC_LOADING
    }
}

export const monthScGetdata = (data) =>{
    return{
        type: M_SC_GETDATA,
        data: data
    }
}

export const monthScError = () =>{
    return{
        type: M_SC_ERROR
    }
}



export const dayScLoading = () =>{
    return{
        type: D_SC_LOADING
    }
}

export const dayScGetdata = (data) =>{
    return{
        type: D_SC_GETDATA,
        data: data
    }
}

export const dayScError = () =>{
    return{
        type: D_SC_ERROR
    }
}


export const eduScLoading = () =>{
    return{
        type: EDU_SUBMIT_LOADING
    }
}

export const eduScGetdata = (data) =>{
    return{
        type: EDU_SUBMIT_SUCCESS,
        data: data
    }
}

export const eduScError = () =>{
    return{
        type: EDU_SUBMIT_ERROR
    }
}
export const eduScInit = () =>{
    return{
        type: EDU_SUBMIT_INIT
    }
}

