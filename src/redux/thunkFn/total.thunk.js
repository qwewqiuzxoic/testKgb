import axios from "axios";
import { UrlBody } from "../../util/UrlBody";
import { totalListError, totalListLoading, totalListSuccess, totalMesError, totalMesLoading, totalMesSuccess } from "../actionFn/total";

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

export const totalListThunk= (type,data) => dispatch => {
    const {url,body} = UrlBody(type,data);
    dispatch(totalListLoading());
        axios.post(url, body).then(function (res) {
            console.log(res)
            dispatch(totalListSuccess(res.data));
        }).catch(function (error) {
            dispatch(totalListError(error));
        })
}