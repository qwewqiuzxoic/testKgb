import { boardInit,boardDetailInit } from '../init/init';
import { BOARD_FAIL, BOARD_LOADING, BOARD_SUCCESS, BOARD_DETAIL_FAIL, BOARD_DETAIL_LOADING, BOARD_DETAIL_SUCCESS } from '../types/board.type';


export function boardReducer(state = boardInit, action) {
    switch (action.type) {
        case BOARD_FAIL:
            return{
                ...state,
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
                boardList:action.data
            }     
        default: 
            return state
    }
}

