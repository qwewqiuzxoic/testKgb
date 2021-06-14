import { boardInit,boardDetailInit, boardPostInit, boardTopInit } from '../init/init';
import { BOARD_FAIL, BOARD_LOADING, BOARD_SUCCESS, BOARD_DETAIL_FAIL, BOARD_DETAIL_LOADING, BOARD_DETAIL_SUCCESS, BOARD_POST_LOADING, BOARD_POST_ERROR, BOARD_POST_SUCCESS, BOARD_TOP_FAIL, BOARD_TOP_LOADING, BOARD_TOP_SUCCESS } from '../types/board.type';


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
                loading:true
            }
        
        case BOARD_SUCCESS:
            return{
                ...state,
                loading:false,
                boardList:state.boardList.concat(action.data)
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
                data:action.data
            }     
        default: 
            return state
    }
}

export function boardPostReducer(state = boardPostInit, action) {
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
        default: 
            return state
    }
}