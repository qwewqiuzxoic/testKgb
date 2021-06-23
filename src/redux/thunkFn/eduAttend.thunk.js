import axios from "axios";
import {  eduisuError, eduisuLoading, eduisuSuccess, EduPointUseError, EduPointUseLoading, EduPointUseSuccess, eduSurveyError, eduSurveyLoading, eduSurveySuccess, getAduAttendListError, getAduAttendListLoading, getAduAttendListSuccess } from "../actionFn/eduAttend";

const user = JSON.parse(localStorage.getItem('user'));       

export const geteduAttendList= () => dispatch => {
    dispatch(getAduAttendListLoading())
    const url = '/BM/API/edu/edu_status.asp';
        axios.post(url, {
            man_info_sn :user.man_info_sn,
            brand :user.brand
        }).then(function (res) {
            console.log(res)
            dispatch(getAduAttendListSuccess(res.data));
        }).catch(function (error) {
            dispatch(getAduAttendListError(error))
        })
}

export const usePointEvnet= (point=0,nowPoint) => dispatch => {
    dispatch(EduPointUseLoading())
    const url = '/BM/API/edu/edu_status_proc.asp';
        axios.post(url, {
            man_info_sn : user.man_info_sn,
            brand : user.brand,
            point : point,
            nowPoint : nowPoint
        }).then(function (res) {
            console.log(res)
            dispatch(EduPointUseSuccess(res.data));
        }).catch(function (error) {
            dispatch(EduPointUseError(error))
        })
}
//교육설문 리스트
export const getEduSurveyList = (page) => dispatch => {
    dispatch(eduSurveyLoading());
    const url = page === "1"?'/BM/API/edu/edu_survey_list.asp':'/BM/API/edu/edu_isu_list.asp';
        axios.post(url, {
            man_info_sn : user.man_info_sn,
            brand : user.brand
        }).then(function (res) {
            console.log(res)
            dispatch(eduSurveySuccess(res.data));
        }).catch(function (error) {
            dispatch(eduSurveyError(error))
        })


}

export const getEduisuList = () => dispatch => {
    dispatch(eduisuLoading());
    const url = '/BM/API/edu/edu_isu_list.asp';
        axios.post(url, {
            man_info_sn : user.man_info_sn,
            brand : user.brand
        }).then(function (res) {
            console.log(res)
            dispatch(eduisuSuccess(res.data));
        }).catch(function (error) {
            dispatch(eduisuError(error))
        })


}