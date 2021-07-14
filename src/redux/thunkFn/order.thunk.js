import axios from "axios";
import { UrlBody } from "../../util/UrlBody";
import { getMoveDayError, getMoveDayLoading, getMoveDaySuccess } from "../actionFn/order";

export const orderDayThunk= (type,data) => dispatch => {
    const {url,body} = UrlBody(type,data);
    dispatch(getMoveDayLoading());
        axios.post(url, body).then(function (res) {
            dispatch(getMoveDaySuccess(res.data));

        }).catch(function (error) {
            dispatch(getMoveDayError(error));
        })
}
