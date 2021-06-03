import axios from 'axios'
import {boardError, boardLoading, boardSuccess,boardDetailError, boardDetailLoading, boardDetailSuccess} from '../actionFn/board'
export const getBoardList = (brandName, boardName) => dispatch  => {
    dispatch(boardLoading())
    const url = '/BM/API/board/basic.asp';
        axios.post(url, {
            "code_board" : boardName,
            "code_brand" : brandName,
            "is_notice" : 0,
            "board_cate" : "",
            "page" : 1,
            "pagesize" : 4
        }).then(function (res) {
            dispatch(boardSuccess(res.data.list));
             // response  
             if(res.data.list.length === 0){
                dispatch(boardSuccess(res.data.list));
             }
             console.log(res.data.list);
        }).catch(function (error) {
            console.log(error);
            dispatch(boardError(error))
        })

    
}

export const getBoardDetail = (sn) => dispatch => {
    dispatch(boardDetailLoading())
    const url = '/BM/API/board/desc.asp';
        axios.post(url, {
            "sn": sn
        }).then(function (res) {
            dispatch(boardDetailSuccess(res.data));
             // response  
        }).catch(function (error) {
            console.log(error);
            dispatch(boardDetailError(error))
        })

}