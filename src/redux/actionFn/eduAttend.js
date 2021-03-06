import { EDUATTEND_LIST_ERROR, EDUATTEND_LIST_LOADING, EDUATTEND_LIST_SUCCESS, EDUISU_LIST_ERROR, EDUISU_LIST_LOADING, EDUISU_LIST_SUCCESS, EDUPOINT_USE_ERROR, EDUPOINT_USE_LOADING, EDUPOINT_USE_SUCCESS, EDUSURVEY_LIST_ERROR, EDUSURVEY_LIST_LOADING, EDUSURVEY_LIST_SUCCESS, EDU_MANUAL_ERROR, EDU_MANUAL_INIT, EDU_MANUAL_LOADING, EDU_MANUAL_SUCCESS } from "../types/eduAttend.type"


export const getAduAttendListSuccess = (data) =>{
    return{
        type:EDUATTEND_LIST_SUCCESS,
        data
    }
}
export const getAduAttendListLoading = () =>{
    return{
        type:EDUATTEND_LIST_LOADING
    }
}
export const getAduAttendListError = (data) =>{
    return{
        type:EDUATTEND_LIST_ERROR,
        data
    }
}

export const EduPointUseSuccess = (data) => {
    return{
        type:EDUPOINT_USE_SUCCESS,
        data
    }
}

export const EduPointUseLoading = () => {
    return{
        type:EDUPOINT_USE_LOADING
    }
}

export const EduPointUseError = (data) => {
    return{
        type:EDUPOINT_USE_ERROR,
        data
    }
}


//교육 설문 리스트
export const eduSurveySuccess = (data)=>{
    return{
        type:EDUSURVEY_LIST_SUCCESS,
        data
    }
}
export const eduSurveyLoading = ()=>{
    return{
        type:EDUSURVEY_LIST_LOADING
    }
}
export const eduSurveyError = (data)=>{
    return{
        type:EDUSURVEY_LIST_ERROR,
        data
    }
}

export const eduisuSuccess = (data)=>{
    return{
        type:EDUISU_LIST_SUCCESS,
        data
    }
}
export const eduisuLoading = ()=>{
    return{
        type:EDUISU_LIST_LOADING
    }
}
export const eduisuError = (data)=>{
    return{
        type:EDUISU_LIST_ERROR,
        data
    }
}

export const getAduManualSuccess = (data)=>{
    return{
        type:EDU_MANUAL_SUCCESS,
        data
    }
}
export const getAduManualLoading = ()=>{
    return{
        type:EDU_MANUAL_LOADING
    }
}
export const getAduManualError = (data)=>{
    return{
        type:EDU_MANUAL_ERROR,
        data
    }
}
export const getAduManualInit = ()=>{
    return{
        type:EDU_MANUAL_INIT
    }
}