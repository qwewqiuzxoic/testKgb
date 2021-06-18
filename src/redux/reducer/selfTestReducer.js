import { selfTestInit, selfTestPostInit, selfTestQuestionInit, selfTestResultInit } from "../init/init";
import { SELFTEST_ERROR, SELFTEST_LOADING, SELFTEST_POST_ERROR, SELFTEST_POST_LOADING, SELFTEST_POST_SUCCESS, SELFTEST_QUESTION_ERROR, SELFTEST_QUESTION_LOADING, SELFTEST_QUESTION_SUCCESS, SELFTEST_RESULT_ERROR, SELFTEST_RESULT_LOADING, SELFTEST_RESULT_SUCCESS, SELFTEST_SUCCESS } from "../types/selfTest.type";

export function selfTestGetList(state=selfTestInit,action){
    switch (action.type) {
        case SELFTEST_SUCCESS:
            return{
                ...state,
                result:action.data.result,
                loading:false,
                error:"",
                btn_flag:action.data.btn_flag,
                list:action.data.list
            }
        case SELFTEST_LOADING:
            return{
                ...state,
                result:"",
                loading:true,
                error:"",
                list:[]
            }
        case SELFTEST_ERROR:
            return{
                ...state,
                result:"",
                loading:false,
                error:action.data,
                list:[]
            }
        default: return state
        
    }
}


export function selfTestGetResult(state=selfTestResultInit,action){
    switch(action.type){
        case SELFTEST_RESULT_SUCCESS:
            return{
                ...state,
                result:action.data.result,
                loading:false,
                error:"",
                content:action.data.content,
                list:action.data.list
            }
        case SELFTEST_RESULT_LOADING:
            return{
                ...state,
                result:"",
                loading:true,
                error:"",
                content:"",
                list:[]
            }
        case SELFTEST_RESULT_ERROR:
            return{
                ...state,
                result:"",
                loading:false,
                error:action.data,
                content:"",
                list:[]
            }
        default: return state
    }
}
export function selfTestGetQuestion(state=selfTestQuestionInit,action){
    switch(action.type){
        case SELFTEST_QUESTION_SUCCESS:
            return{
                ...state,
                result:action.data.result,
                loading:false,
                error:"",
                list:action.data.list
            }
        case SELFTEST_QUESTION_LOADING:
            return{
                ...state,
                result:"",
                loading:true,
                error:"",
                list:[]
            }
        case SELFTEST_QUESTION_ERROR:
            return{
                ...state,
                result:"",
                loading:false,
                error:action.data,
                list:[]
            }
        default: return state
    }
}

export function selfTestPost(state = selfTestPostInit,action){
    switch(action.type){
        case SELFTEST_POST_SUCCESS:
            return{
                ...state,
                result:action.data.result,
                message:action.data.message,
                loading:false,
                error:"",
            }
        case SELFTEST_POST_LOADING:
            return{
                ...state,
                result:"",
                message:"",
                loading:true,
                error:"",
            }
        case SELFTEST_POST_ERROR:
            return{
                ...state,
                result:"",
                message:"",
                loading:false,
                error:action.data,
            }
        default: return state
    }

}