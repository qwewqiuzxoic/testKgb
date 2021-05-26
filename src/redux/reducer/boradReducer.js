import { boardInit } from '../init/init';
import { BOARD_FAIL, BOARD_LOADING, BOARD_SUCCESS } from '../types/board.type';


export default function boardReducer(state = boardInit, action) {
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