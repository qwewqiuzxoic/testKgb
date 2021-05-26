
import { LOGIN_FAIL,LOGIN_SUCCESS,LOGIN_LOADING } from '../types/auth.type'

const init = {
    user:{},
    loading:false,
    error:{}
}


export default function loginReducer(state = init, action) {
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
            return{
                ...state,
                user:action.data
            }     
        default: 
            return state
    }



}