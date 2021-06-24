import axios from "axios";
import { UrlBody } from "../../util/UrlBody";
import { totalDataError, totalDataLoading, totalDataSuccess, totalListError, totalListLoading, totalListSuccess, totalMesError, totalMesLoading, totalMesSuccess } from "../actionFn/total";
String.prototype.replaceAll = function(org, dest) {
    return this.split(org).join(dest);
}
export const totalMesThunk= (type,data) => dispatch => {
    const {url,body} = UrlBody(type,data);

    dispatch(totalMesLoading());
        axios.post(url, body).then(function (res) {
            console.log(res)
            dispatch(totalMesSuccess(res.data));
        }).catch(function (error) {
            dispatch(totalMesError(error));
        })
}

export const totalListThunk= (type,data,fn) => dispatch => {
    const {url,body} = UrlBody(type,data);
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
            dispatch(totalDataSuccess(JSON.parse(res.data.replaceAll("","-").replaceAll("","|"))));
        }).catch(function (error) {
            dispatch(totalDataError(error));
        })
}