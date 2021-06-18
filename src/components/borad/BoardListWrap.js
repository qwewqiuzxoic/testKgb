import React, { useEffect, useState } from 'react';
import BoardList from './BoardList';
import { getBoardList } from '../../redux/thunkFn/borad.thunk';
import { useDispatch, useSelector } from "react-redux";

import styled from 'styled-components';
import { FlexBox, Gutter, BottomBox, ChangeFont } from '../commonStyle';
import Loading from '../commonStyle/Loading';


const Wrapper = styled.div`
  position:relative;

`;

function BoardListWrap({check, teamCheck,adu}) {
    const user = JSON.parse(localStorage.getItem('user'));
    const state = useSelector(state => state.boardReducer.boardList);
    const loading = useSelector(state => state.boardReducer.loading);
    const list = !check ? state: adu?state: state.filter(data=>
      (data.tname === user.teamname) === teamCheck
    );
    useEffect(() => {
      
      return () => {
        
      }
    }, [state])
  return (
    <Wrapper>
      {list.map((post, index)=> (
          <BoardList key={index} title={post.title} regdate={post.regdate} board_sn={post.board_sn} index={index} loginname={post.loginname} tname={post.tname} countview={post.countview} cnt={post.cnt} />
      ))}
      {loading ? <Loading/>:null}

    </Wrapper>
  );

}

export default BoardListWrap;