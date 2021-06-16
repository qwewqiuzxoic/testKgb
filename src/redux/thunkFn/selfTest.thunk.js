import axios from "axios";
import { getSelfTestListError, getSelfTestListLoading, getSelfTestListSuccess, getSelfTestQuestionError, getSelfTestQuestionLoading, getSelfTestQuestionSuccess, getSelfTestResultError, getSelfTestResultLoading, getSelfTestResultSuccess, postSelfTestError, postSelfTestLoading, postSelfTestSuccess } from "../actionFn/selfTest";

const user = JSON.parse(localStorage.getItem('user'));       


export const getSelfTestList = () => dispatch  => {
    dispatch(getSelfTestListLoading())
    const url = '/BM/API/team/selftest_list.asp';
        axios.post(url, {
            "biz_sn":user.biz_sn,
            "man_info_sn":user.man_info_sn,
            "page":"1",
            "pagesize":"20"
        }).then(function (res) {
            console.log(res)

            dispatch(getSelfTestListSuccess(res.data));
           
            //console.log(JSON.parse(localStorage.getItem('user')));
             // response  
        }).catch(function (error) {
            dispatch(getSelfTestListError(error))
        })
}


export const getSelfTestResult = (sn) => dispatch =>{
    dispatch(getSelfTestResultLoading())
    const url = '/BM/API/team/selftest_desc.asp';
        axios.post(url, {
            "sn" : sn,
            "brand" : user.brand
        }).then(function (res) {
            dispatch(getSelfTestResultSuccess(res.data));
        }).catch(function (error) {
            dispatch(getSelfTestResultError(error))
        })
        return "aa"
}
export const getSelfTestQuestion=()=>dispatch =>{
    dispatch(getSelfTestQuestionLoading())
    const url = '/BM/API/team/selftest_input.asp';
        axios.post(url, {
            "brand" : user.brand
        }).then(function (res) {
            console.log(res)
            dispatch(getSelfTestQuestionSuccess(res.data));
        }).catch(function (error) {
            dispatch(getSelfTestQuestionError(error))
        })
}

export const postSelfTest=(data,text,fn)=>dispatch =>{
    dispatch(postSelfTestLoading())
    const url = '/BM/API/team/selftest_proc.asp';
        axios.post(url, {
            "biz_sn" : user.biz_sn,
            "brand" : user.brand,
            "teamname" : user.teamname,
            "man_info_sn" : user.man_info_sn,
            "manname" : user.name,
            "lst1_div1": data[0],
            "lst1_div2": data[1],
            "lst1_div3": data[2],
            "lst1_div4": data[3],
            "lst1_div5": data[4],
            "lst1_div6": data[5],
            "lst1_div7": data[6],
            "lst1_div8": data[7],
            "lst1_div9": data[8],
            "lst1_div10": data[9],
            "lst1_div11": data[10],
            "lst1_div12": data[11],
            "lst1_div13": data[12],
            "lst1_div14": data[13],
            "lst1_div15": data[14],
            "content":text
        }).then(function (res) {
            dispatch(postSelfTestSuccess(res.data));
            fn()
        }).catch(function (error) {
            dispatch(postSelfTestError(error))
        })
        return true

}