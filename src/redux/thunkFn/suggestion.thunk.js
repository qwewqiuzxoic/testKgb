import axios from "axios";
import { suggestionDayLoding, suggestionError, suggestionInit, suggestionSuccess } from "../actionFn/suggestion";

const user = JSON.parse(localStorage.getItem('user'));       


export const submitSuggestion = (data,cate,board) => dispatch  => {
    dispatch(suggestionDayLoding())
    const url = '/BM/API/board/board_proc_basic.asp';
        axios.post(url, {
            "title" : data.title,
            "userid" : user.userid,
            "username" : user.name,
            "contents" : data.contents,
            "code_brand" : user.brand,
            "code_board" : board,
            "board_cate" : cate,
            "biz_sn" : user.biz_sn,
            "man_info_sn" : user.man_info_sn,
            "mode" : "INS",
            "sn" : "0",
            "password" : "0",
            "email" : "0"
        }).then(function (res) {
            console.log(data,cate,board)

            dispatch(suggestionSuccess(res.data.result));
           
            //console.log(JSON.parse(localStorage.getItem('user')));
             // response  
        }).catch(function (error) {
            console.log(error);
            dispatch(suggestionError(error))
        })
}