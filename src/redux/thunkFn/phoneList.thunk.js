import axios from "axios";
import { getPhoneListErorr, getPhoneListLoading, getPhoneListSuccess } from "../actionFn/phoneList";

export const getPhoneList = (type,brand) => dispatch  => {
    dispatch(getPhoneListLoading())
    const url = type === 1 ?'/BM/API/team/em_list.asp':'/BM/API/team/head_list.asp';
    //console.log(url)
        axios.post(url, {
            "code_brand" :brand
        }).then(function (res) {
            //console.log(res)
            dispatch(getPhoneListSuccess(res.data));
        }).catch(function (error) {
            dispatch(getPhoneListErorr(error))
        })
}
