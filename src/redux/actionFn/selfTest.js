import { SELFTEST_ERROR, SELFTEST_LOADING, SELFTEST_POST_ERROR, SELFTEST_POST_LOADING, SELFTEST_POST_SUCCESS, SELFTEST_QUESTION_ERROR, SELFTEST_QUESTION_LOADING, SELFTEST_QUESTION_SUCCESS, SELFTEST_RESULT_ERROR, SELFTEST_RESULT_LOADING, SELFTEST_RESULT_SUCCESS, SELFTEST_SUCCESS } from "../types/selfTest.type"

export const getSelfTestListSuccess = (data) => {
    return{
        type:SELFTEST_SUCCESS,
        data
    }
}

export const getSelfTestListError = (data) => {
    return{
        type:SELFTEST_ERROR,
        data
    }
}

export const getSelfTestListLoading = () => {
    return{
        type:SELFTEST_LOADING
    }
}


//결과 상세페이지 
export const getSelfTestResultSuccess = (data) =>{
     return{
        type:SELFTEST_RESULT_SUCCESS,
        data
    }   
}
export const getSelfTestResultLoading = () =>{
    return{
        type:SELFTEST_RESULT_LOADING
    }
}
export const getSelfTestResultError = (data) =>{
    return{
        type:SELFTEST_RESULT_ERROR,
        data
    }
}

//질문지 받아오기
export const getSelfTestQuestionSuccess = (data) =>{
    return{
       type:SELFTEST_QUESTION_SUCCESS,
       data
   }   
}
export const getSelfTestQuestionLoading = () =>{
   return{
       type:SELFTEST_QUESTION_LOADING
   }
}
export const getSelfTestQuestionError = (data) =>{
   return{
       type:SELFTEST_QUESTION_ERROR,
       data
   }
}
//결과 보내기
export const postSelfTestSuccess = (data) =>{
    return{
       type:SELFTEST_POST_SUCCESS,
       data
   }   
}
export const postSelfTestLoading = () =>{
   return{
       type:SELFTEST_POST_LOADING
   }
}
export const postSelfTestError = (data) =>{
   return{
       type:SELFTEST_POST_ERROR,
       data
   }
}