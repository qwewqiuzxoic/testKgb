import { boardInit,boardDetailInit, boardTopInit, boardPostFormInit } from '../init/init';
import { BOARD_FAIL, BOARD_LOADING, BOARD_SUCCESS, BOARD_DETAIL_FAIL, BOARD_DETAIL_LOADING, BOARD_DETAIL_SUCCESS, BOARD_POST_LOADING, BOARD_POST_ERROR, BOARD_POST_SUCCESS, BOARD_TOP_FAIL, BOARD_TOP_LOADING, BOARD_TOP_SUCCESS, BOARD_INIT, BOARD_POST_INPUT, BOARD_POST_MODIFY_LOADING, BOARD_POST_MODIFY_ERROR, BOARD_POST_MODIFY_SUCCESS, BOARD_POST_MODIFY_INPUT, BOARD_POST_MODIFY_LOGIN_INPUT, BOARD_POST_LOGIN_INPUT, BOARD_CONCAT_SUCCESS, BOARD_CONCAT_LOADING } from '../types/board.type';


export function boardReducer(state = boardInit, action) {
    switch (action.type) {
        case BOARD_FAIL:
            return{
                ...state,
                loading:false,
                error:action.data
            }
        case BOARD_LOADING:
            return{
                ...state,
                loading:true,
                boardList:[],
            }
        
        case BOARD_SUCCESS:
            return{
                ...state,
                loading:false,
                boardList:action.data,
                title:action.title
            }
        case BOARD_CONCAT_SUCCESS:
            return{
                ...state,
                loading:false,
                boardList:state.boardList.concat(action.data),
                title:action.title
            }
        case BOARD_CONCAT_LOADING:
            return{
                ...state,
                loading:true,
            }
        case BOARD_INIT:
            return{
                ...boardInit
            }     
        default: 
            return state
    }
}

//공지 윗부분
export function boardTopReducer(state = boardTopInit, action) {
    switch (action.type) {
        case BOARD_TOP_FAIL:
            return{
                ...state,
                loading:false,
                error:action.data
            }
        case BOARD_TOP_LOADING:
            return{
                ...state,
                loading:true
            }
        
        case BOARD_TOP_SUCCESS:
            return{
                ...state,
                loading:false,
                boardList:action.data
            }     
        default: 
            return state
    }
}

export function boardDetailReducer(state = boardDetailInit, action) {
    switch (action.type) {
        case BOARD_DETAIL_FAIL:
            return{
                ...state,
                error:action.data
            }
        case BOARD_DETAIL_LOADING:
            return{
                ...state,
                loading:true
            }
        
        case BOARD_DETAIL_SUCCESS:
            return{
                ...state,
                loading:false,
                data:action.data
            }     
        default: 
            return state
    }
}

export function boardPostReducer(state = boardPostFormInit, action) {
    switch (action.type){
        case BOARD_POST_LOADING:
            return{
                ...state,
                loading:true
            }
        case BOARD_POST_ERROR:
            return{
                ...state,
                loading:false,
                error:action.data
            }
        case BOARD_POST_SUCCESS:
            return{
                ...state,
                loading:false,
                error:{},
                result:action.data
            }
        case BOARD_POST_INPUT:
            return{
                ...state,
                data:{
                    ...state.data,
                    [action.name]:action.value
                }
            }
        case BOARD_POST_LOGIN_INPUT:
            return{
                ...state,
                data:{
                    ...boardPostFormInit.data,
                    code_brand:action.code_brand,
                    code_board:action.code_board,
                    biz_sn:action.biz_sn,
                    userid:action.userid,
                    username:action.username,
                    mode:action.mode,
                    man_info_sn:action.man_info_sn
                },
                result:""
            }
        default: 
            return state
    }
}

export function boardPostModifyReducer(state = boardPostFormInit, action) {
    switch (action.type){
        case BOARD_POST_MODIFY_LOADING:
            return{
                ...state,
                loading:true
            }
        case BOARD_POST_MODIFY_ERROR:
            return{
                ...state,
                loading:false,
                error:action.data
            }
        case BOARD_POST_MODIFY_SUCCESS:
            return{
                ...state,
                loading:false,
                error:{},
                result:action.data
            }
        case BOARD_POST_MODIFY_INPUT:
            return{
                ...state,
                
            }
        case BOARD_POST_MODIFY_LOGIN_INPUT:
            return{
                ...state,
                
            }
        default: 
            return state
    }
}