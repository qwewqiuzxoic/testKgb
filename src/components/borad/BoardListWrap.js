import React, { useEffect } from 'react';
import BoardList from './BoardList';
import { getBoardList } from '../../redux/thunkFn/borad.thunk';
import { useDispatch, useSelector } from "react-redux";
function BoardListWrap({boardCode}) {
    console.log(boardCode)
    const dispatch = useDispatch();
    const state = useSelector(state => state.boardReducer.boardList);
    useEffect(() => {
        dispatch(getBoardList())
        console.log(state)
        return () => {
            
        }
    }, [])
  return (
    <div>
        {state.length ==0? <div>로딩중</div>:state.map((post, index)=> (
            <BoardList key={index} title={post.title} regdate={post.regdate} board_sn={post.board_sn}/>
        ))}
        
    </div>
  );
}

export default BoardListWrap;