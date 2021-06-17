import axios from 'axios'
import {boardError, boardLoading, boardSuccess,boardDetailError, boardDetailLoading, boardDetailSuccess, boardPostLoading, boardPostError,boardPostSuccess, boardTopSuccess, boardTopLoading, boardTopError, boardConcatLoading, boardConcatSuccess} from '../actionFn/board'
export const getBoardList = (brandName, boardName,count, length = 10) => dispatch  => {
    if(count === 1){
        dispatch(boardLoading())
    }else{
        dispatch(boardConcatLoading())
    }
    const url = '/BM/API/board/basic.asp';
        axios.post(url, {
            "code_board" : boardName,
            "code_brand" : brandName,
            "is_notice" : 0,
            "board_cate" : "",
            "page" : count,
            "pagesize" : length
        }).then(function (res) {
            if(count === 1){
                dispatch(boardSuccess(res.data.list,boardName))
            }else{
                dispatch(boardConcatSuccess(res.data.list,boardName))
            }
        }).catch(function (error) {
            dispatch(boardError(error))
        })
}


  
//공지사항의 공지 같은 게시판 윗부분 따로 불러오는 로직
export const getBoardTopList = (brandName, boardName, length = 5) => dispatch  => {
    dispatch(boardTopLoading())
    const url = '/BM/API/board/basic.asp';
        axios.post(url, {
            "code_board" : boardName,
            "code_brand" : brandName,
            "is_notice" : 1,
            "board_cate" : "",
            "page" : 1,
            "pagesize" : length
        }).then(function (res) {
            dispatch(boardTopSuccess(res.data.list));
             // response  
             if(res.data.list.length === 0){
                dispatch(boardTopSuccess(res.data.list));
             }
             console.log(res.data.list);
        }).catch(function (error) {
            console.log(error);
            dispatch(boardTopError(error))
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
let axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=euc-kr',
        "Access-Control-Allow-Origin": "*",
    }
  };
export const postRMDBoard = (data,fn) => dispatch =>{
    dispatch(boardPostLoading());
    const url = '/BM/API/board/board_proc_basic.asp';
    axios.post(url, data).then(function(res){
        console.log(res)
        dispatch(boardPostSuccess(res.result));
        if(fn !== undefined) fn()
    }).catch(function (error){
        dispatch(boardPostError(error))
    })
}
export const postDeleteBoard = (data) =>dispatch =>{
    dispatch(boardPostLoading());
    const url = '/BM/API/board/board_proc_basic.asp';
    axios.post(url, {
        "sn": data.sn
    }).then(function(res){
        dispatch(boardPostSuccess(res.result));
    }).catch(function (error){
        dispatch(boardPostError(error))
    })
}
export const postModifyBoard = (data) => dispatch =>{
    dispatch(boardPostLoading());
    const url = '/BM/API/board/board_proc_basic.asp';
    axios.post(url, {
        "sn": "",
        "title": "",
        "password": "",
        "email": "",
        "contents": ""
    }).then(function(res){
        dispatch(boardPostSuccess(res.result));
    }).catch(function (error){
        dispatch(boardPostError(error))
    })

}