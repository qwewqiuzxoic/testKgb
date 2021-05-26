import axios from 'axios'
import {boardError, boardLoading, boardSuccess} from '../actionFn/board'
export const getBoardList = (userid,password) => dispatch  => {
    dispatch(boardLoading())
    const url = '/BM/API/board/basic.asp';
        axios.post(url, {
            "code_board" : "공지사항",
            "code_brand" : "YES2404",
            "is_notice" : 0,
            "board_cate" : "",
            "page" : 1,
            "pagesize" : 4
        }).then(function (res) {
            dispatch(boardSuccess(res.data.list));
             // response  
             console.log(res.data.list);
        }).catch(function (error) {
            console.log(error);
            dispatch(boardError(error))
        })

    
}

