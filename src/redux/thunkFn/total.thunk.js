import axios from "axios";
import { UrlBody } from "../../util/UrlBody";
import { totalAnMesError, totalAnMesLoading, totalAnMesSuccess, totalDataAnError, totalDataAnLoading, totalDataAnSuccess, totalDataError, totalDataLoading, totalDataSuccess, totalListError, totalListLoading, totalListSuccess, totalMesError, totalMesLoading, totalMesSuccess } from "../actionFn/total";
String.prototype.replaceAll = function(org, dest) {
    return this.split(org).join(dest);
}
export const totalMesThunk= (type,data,header) => dispatch => {
    const {url,body} = UrlBody(type,data);
    console.log(url,body)
    if(header !== undefined){
        dispatch(totalMesLoading());
        axios.post(url, body,header).then(function (res) {
            console.log(res)
            dispatch(totalMesSuccess(res.data));
        }).catch(function (error) {
            dispatch(totalMesError(error));
        })
    } else {
        dispatch(totalMesLoading());
        axios.post(url, body).then(function (res) {
            console.log(res)
            dispatch(totalMesSuccess(res.data));
        }).catch(function (error) {
            dispatch(totalMesError(error));
        })
    }
    
}

export const totalListThunk= (type,data,fn) => dispatch => {
    const {url,body} = UrlBody(type,data);
    console.log(url,body)
    dispatch(totalListLoading());
        axios.post(url, body).then(function (res) {
            console.log(res)
            if(fn !==undefined){
                fn(res.data.list)
            }
            dispatch(totalListSuccess(res.data));
        }).catch(function (error) {
            dispatch(totalListError(error));
        })
}

export const totalDataThunk= (type,data) => dispatch => {
    const {url,body} = UrlBody(type,data);
    dispatch(totalDataLoading());
        axios.post(url, body).then(function (res) {
            console.log(typeof(res.data))
            if(typeof(res.data) === "string"){
                dispatch(totalDataSuccess(JSON.parse(res.data.replaceAll("","-").replaceAll("","|"))));
            } else {
                dispatch(totalDataSuccess(res.data));
            }
        }).catch(function (error) {
            dispatch(totalDataError(error));
        })
}

export const totalAnDataThunck = (type,data) => dispatch => {
    const {url,body} = UrlBody(type,data);
    console.log(body);

    dispatch(totalDataAnLoading());
        axios.post(url, body).then(function (res) {
            console.log(res)
            if(typeof(res.data) === "string"){
                dispatch(totalDataAnSuccess(JSON.parse(res.data.replaceAll("","-").replaceAll("","|"))))
            } else{
                dispatch(totalDataAnSuccess(res.data));
            }
        }).catch(function (error) {
            console.log(body,url)
            dispatch(totalDataAnError(error));
        })
}

export const totalMesAnThunk = (type,data) => dispatch => {
    const {url,body} = UrlBody(type,data);
    console.log(url,body)
    dispatch(totalAnMesLoading());
        axios.post(url, body).then(function (res) {
            console.log(res)
            dispatch(totalAnMesSuccess(res.data));
        }).catch(function (error) {
            dispatch(totalAnMesError(error));
        })
} 