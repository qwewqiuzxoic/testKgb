import axios from 'axios'
import {loginError, loginLoading, loginSuccess} from '../actionFn/auth'
export const login = (userid,password) => dispatch  => {
    dispatch(loginLoading())
    const url = '/BM/API/auth/login.asp';
        axios.post(url, {
            userid: userid,
            password: password
        }).then(function (res) {
            dispatch(loginSuccess(res.data.user));
             // response  
             console.log(res);
        }).catch(function (error) {
            console.log(error);
            dispatch(loginError(error))
        })

    
}