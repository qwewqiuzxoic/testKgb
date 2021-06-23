import axios from "axios";
import { getAsDetailError, getAsDetailLoading, getAsDetailSuccess, getAsListConcatError, getAsListConcatLoading, getAsListConcatSuccess, getAsListError, getAsListLoading, getAsListSuccess, postAsCommentError, postAsCommentLoading, postAsCommentSuccess } from "../actionFn/as";
const user = JSON.parse(localStorage.getItem('user'));       

export const getAsList= (team, count, length = 10) => dispatch => {
    dispatch(getAsListLoading());
    const url = '/BM/API/team/as_list.asp';
        axios.post(url, {
            "biz_sn" : user.biz_sn,
            "code_brand" : user.brand,
            "page" : count,
            "pagesize" : length,
            "tabtype" : team,
        }).then(function (res) {
            console.log(res)
            dispatch(getAsListSuccess(res.data));
        }).catch(function (error) {
            dispatch(getAsListError(error));
        })
}

export const getAsListConcat= (team, count, length = 10) => dispatch => {
    dispatch(getAsListConcatLoading());
    const url = '/BM/API/team/as_list.asp';
        axios.post(url, {
            "biz_sn" : user.biz_sn,
            "code_brand" : user.brand,
            "page" : count,
            "pagesize" : length,
            "tabtype" : team,
        }).then(function (res) {
            console.log(res)
            dispatch(getAsListConcatSuccess(res.data));
        }).catch(function (error) {
            dispatch(getAsListConcatError(error));
        })
}

export const getAsDetail =(sn) => dispatch => {
    dispatch(getAsDetailLoading());
    const url = '/BM/API/team/as_desc.asp';
        axios.post(url, {
            "sn":sn
        }).then(function (res) {
            console.log(res)
            dispatch(getAsDetailSuccess(res.data));
        }).catch(function (error) {
            dispatch(getAsDetailError(error));
        })
}

export const postAsComment = (text,sn) => dispatch =>{
    dispatch(postAsCommentLoading());
    const url = '/BM/API/team/as_comment_proc.asp';
    axios.post(url,{
        "sn":sn,
        "contents":text,
        "man_info_sn":user.man_info_sn,
        "userid":user.userid,
        "name":user.name
    }).then(function (res){
        dispatch(postAsCommentSuccess(res.data));
    }).catch(function (error){
        dispatch(postAsCommentError(error));
    })
}