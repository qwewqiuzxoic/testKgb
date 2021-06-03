import React, { useEffect, useState } from 'react';
import BoardList from './BoardList';
import { getBoardList } from '../../redux/thunkFn/borad.thunk';
import { useDispatch, useSelector } from "react-redux";

import styled from 'styled-components';
import { FlexBox, Gutter, BottomBox, ChangeFont } from '../commonStyle';


const Wrapper = styled.div`

`;

function BoardListWrap({boardCode}) {
    console.log(boardCode)
    const boardCodeNm = Number(boardCode);
    const [boardName, setBoardName] = useState({
      name:"",
      title:""
    });

    const dispatch = useDispatch();
    const state = useSelector(state => state.boardReducer.boardList);
    const loading = useSelector(state => state.boardReducer.loading);
  
   
  return (
    <Wrapper>
        {loading ? <div>로딩중</div>:state.map((post, index)=> (
            <BoardList key={index} title={post.title} regdate={post.regdate} board_sn={post.board_sn} index={index} loginname={post.loginname} tname={post.tname} countview={post.countview} cnt={post.cnt}/>
        ))}
        
    </Wrapper>
  );
}

export default BoardListWrap;