import { LOGIN_FAIL,LOGIN_SUCCESS,LOGIN_LOADING } from '../types/auth.type';

export const loginSuccess = (data) =>{
    return{
        type:LOGIN_SUCCESS,
        data
    }
}
export const loginLoading = ()=>{
    return {
        type:LOGIN_LOADING
    }
}
export const loginError = (data) => {
    return{
        type:LOGIN_FAIL,
        data:data
    }
}
