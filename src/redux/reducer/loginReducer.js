import { LOGIN_FAIL, LOGIN_SUCCESS, LOGIN_LOADING } from '../types/auth.type'
import { authInit } from '../init/init'


export default function loginReducer(state = authInit, action) {
    switch (action.type) {
        case LOGIN_FAIL:
            return{
                ...state,
                error:action.data
            }
        case LOGIN_LOADING:
            return{
                ...state,
                loading:true
            }
        
        case LOGIN_SUCCESS:
            localStorage.setItem('user', JSON.stringify(action.data));
            return{
                ...state,
                user:action.data,
                loading:false
            }     
        default: 
            return state;
    }
}