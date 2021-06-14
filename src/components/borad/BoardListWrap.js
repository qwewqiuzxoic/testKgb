import React, { useEffect, useState } from 'react';
import BoardList from './BoardList';
import { getBoardList } from '../../redux/thunkFn/borad.thunk';
import { useDispatch, useSelector } from "react-redux";

import styled from 'styled-components';
import { FlexBox, Gutter, BottomBox, ChangeFont } from '../commonStyle';


const Wrapper = styled.div`

`;

function BoardListWrap({check, teamCheck}) {
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user.teamname)
    const state = useSelector(state => state.boardReducer.boardList);
    const loading = useSelector(state => state.boardReducer.loading);
  if(!check){
    return (
      <Wrapper>
        {state.map((post, index)=> (
            <BoardList key={index} title={post.title} regdate={post.regdate} board_sn={post.board_sn} index={index} loginname={post.loginname} tname={post.tname} countview={post.countview} cnt={post.cnt} />
        ))}
        {loading ? <div style={{position:'fixed',top:"100px",width:"200px",height:"200px",background:"red",left:"200px"}}>로딩중</div>:null}
      </Wrapper>
    );
  }else{
    return (
      <Wrapper>
       {state.filter(data=>
          (data.tname === user.teamname) === teamCheck
        ).map((post, index)=> (
            <BoardList key={index} title={post.title} regdate={post.regdate} board_sn={post.board_sn} index={index} loginname={post.loginname} tname={post.tname} countview={post.countview} cnt={post.cnt}/>
        ))}
         {loading ? <div style={{position:'fixed',top:"100px",width:"200px",height:"200px",background:"red",left:"200px"}}>로딩중</div>:null}
    </Wrapper>
    );
  }
}

export default BoardListWrap;