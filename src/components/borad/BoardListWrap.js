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


function BoardListWrap({boardCode}) {
    const user = JSON.parse(localStorage.getItem('user'));
    const list = useSelector(state => state.boardReducer.boardList);
    const loading = useSelector(state => state.boardReducer.loading);
    // const list = !check ? state: adu?state: state.filter(data=>
    //   (data.tname === user.teamname) === teamCheck
    // );
    useEffect(() => {

      return () => {
        
      }
    }, [list])
  return (

    <Wrapper >
      {list.map((post, index)=> (
          <BoardList key={index}
          board_sn={post.board_sn}
          cnt={post.cnt}
          countview={post.countview}
          loginname={post.loginname}
          regdate={post.regdate}
          title={post.title}
          tname={post.tname}
          boardCode={boardCode}
          />
      ))}
      {loading ? <Loading/>:null}

    </Wrapper>
  );

}

export default BoardListWrap;