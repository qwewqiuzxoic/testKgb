import axios from "axios";
import { picturecheckDetailError, picturecheckDetailLoading, picturecheckDetailSuccess, picturecheckError, picturecheckLoading, picturecheckSuccess } from "../actionFn/pictureCheck";
import { PICTURECHECK_DETAIL_SUCCESS } from "../types/pictureCheck.type";




export const getPictureCheckList = (kind,teamType) => dispatch  => {
    const user = JSON.parse(localStorage.getItem('user'));       

    dispatch(picturecheckLoading())
    const url = kind === "1" ?'/BM/API/team/biz_sitecheck_list.asp' :'/BM/API/team/biz_agencycheck_list.asp';
    console.log({
        biz_sn : user.biz_sn,
        code_brand : user.brand,
        page : 1,
        pagesize : 20,
        tabtype : teamType
    },kind,url)
        axios.post(url, {
            biz_sn : user.biz_sn,
            code_brand : user.brand,
            page : 1,
            pagesize : 20,
            tabtype : teamType
        }).then(function (res) {
            console.log(res)
            dispatch(picturecheckSuccess(res.data));
        }).catch(function (error) {
            dispatch(picturecheckError(error))
        })
}

export const getPictureCheckDetail = (kind,sn) => dispatch  => {
    const user = JSON.parse(localStorage.getItem('user'));       

    dispatch(picturecheckDetailLoading())
    const url = kind === "1" ?'/BM/API/team/biz_sitecheck_view.asp' :'/BM/API/team/biz_agencycheck_desc.asp';
    console.log(sn)
        axios.post(url, {
            sn:sn
        }).then(function (res) {
            console.log(res.data)
            dispatch(picturecheckDetailSuccess(res.data));
        }).catch(function (error) {
            dispatch(picturecheckDetailError(error))
        })
}

