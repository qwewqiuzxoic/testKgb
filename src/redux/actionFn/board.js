import {BOARD_FAIL, BOARD_LOADING, BOARD_SUCCESS, BOARD_DETAIL_FAIL, BOARD_DETAIL_LOADING, BOARD_DETAIL_SUCCESS,BOARD_POST_SUCCESS, BOARD_POST_ERROR, BOARD_POST_LOADING,BOARD_CONCAT_SUCCESS, BOARD_TOP_FAIL, BOARD_TOP_LOADING, BOARD_TOP_SUCCESS} from '../types/board.type';

//게시판 정보
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
//게시판 공지 부분
export const boardTopSuccess = (data) =>{
    return{
        type:BOARD_TOP_SUCCESS,
        data
    }
}

export const boardTopLoading = ()=>{
    return {
        type:BOARD_TOP_LOADING
    }
}
export const boardTopError = (data) => {
    return {
        type:BOARD_TOP_FAIL,
        data:data
    }
}

//게시판 세부정보
export const boardDetailSuccess = (data) =>{
    return{
        type:BOARD_DETAIL_SUCCESS,
        data
    }
}
export const boardDetailLoading = ()=>{
    return {
        type:BOARD_DETAIL_LOADING
    }
}
export const boardDetailError = (data) => {
    return {
        type:BOARD_DETAIL_FAIL,
        data:data
    }
}

//게시판 등록 수정 삭제 
export const boardPostError = (data) =>{
    return{
        type:BOARD_POST_ERROR,
        data:data
    }
}
export const boardPostLoading = () =>{
    return{
        type:BOARD_POST_LOADING
    }
}
export const boardPostSuccess= (data) =>{
    return{
        type:BOARD_POST_SUCCESS,
        data:data
    }
}
