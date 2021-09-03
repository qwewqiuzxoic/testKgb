import axios from 'axios'
import {loginError, loginLoading, loginSuccess} from '../actionFn/auth';
import { useHistory } from "react-router-dom";

export const login = (userid,password,token,uuid) => dispatch  => {
    dispatch(loginLoading());
    const url = '/BM/API/auth/login.asp';
        axios.post(url, {
            userid: userid,
            password: password,
            token:token,
            uuid:uuid
        }).then(function (res) {
            dispatch(loginSuccess(res.data.user));
            if(res.data.user.man_info_sn !== undefined){
                localStorage.setItem('user', JSON.stringify(res.data.user));
            }
            //console.log(JSON.parse(localStorage.getItem('user')));
             // response  
        }).catch(function (error) {
            console.log(error);
            dispatch(loginError(error));
        })

    
}