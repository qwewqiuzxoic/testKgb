import axios from "axios";
import { getPhoneListErorr, getPhoneListLoading, getPhoneListSuccess } from "../actionFn/phoneList";

export const getPhoneList = (type,brand,area) => dispatch  => {
    dispatch(getPhoneListLoading())
    const url = type === 1 ?'/BM/API/team/em_list.asp':'/BM/API/team/head_list.asp';
    const body = type === 1 ?
        {
            "code_brand" :brand
        }
        :
        {
            "code_brand":brand,
            "code_area":area
        }
    console.log(body)
        axios.post(url, body).then(function (res) {
            //console.log(res)
            dispatch(getPhoneListSuccess(res.data));
        }).catch(function (error) {
            dispatch(getPhoneListErorr(error))
        })
}
