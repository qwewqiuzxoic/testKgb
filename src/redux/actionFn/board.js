import {BOARD_FAIL, BOARD_LOADING, BOARD_SUCCESS} from '../types/board.type';


export const boardSuccess = (data) =>{
    return{
        type:BOARD_SUCCESS,
        data
    }
}
export const boardLoading = ()=>{
    return {
        type:BOARD_LOADING
    }
}
export const boardError = (data) => {
    return {
        type:BOARD_FAIL,
        data:data
    }
}
