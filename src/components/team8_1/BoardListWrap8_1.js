import React, { useEffect, useRef } from 'react';
import BoardList8_1 from './BoardList8_1';
import { getBoardList } from '../../redux/thunkFn/borad.thunk';
import { useDispatch, useSelector } from "react-redux";

import styled from 'styled-components';
import { FlexBox, Gutter, BottomBox, ChangeFont } from '../commonStyle';
import { warningCallList } from '../../redux/thunkFn/warning.thunk';


const Wrapper = styled.div`

`;

function BoardListWrap8_1({boardCode, onClick}) {
    const dispatch = useDispatch();
    const list = useSelector(state => state.warningListReducer.list);

    useEffect(() => {
        dispatch(warningCallList())
        return () => {
        }
    }, [])
    const pageCount = useRef(1)
    const infiniteScroll = () => {
      let scrollHeight = Math.max(
        document.documentElement.scrollHeight,
        document.body.scrollHeight
      );
      let scrollTop = Math.max(
        document.documentElement.scrollTop,
        document.body.scrollTop
      );
      let clientHeight = document.documentElement.clientHeight;
  
      if (scrollTop + clientHeight >= scrollHeight) {
        pageCount.current += 1;
        console.log(pageCount)
        dispatch(warningCallList(pageCount.current))

      }
    };
    useEffect(() => {
      window.addEventListener('scroll',infiniteScroll)
        return () => window.removeEventListener('scroll', infiniteScroll)
       
    }, [])
  return (
    <Wrapper>
        {list.length ==0? <div>로딩중</div>:list.map((post, index)=> (
            <BoardList8_1 key={index} title={post.title} regdate={post.regdate} board_sn={post.board_sn} index={index} onClick={()=>onClick(post.board_sn)}/>
        ))}
    </Wrapper>
  );
}

export default BoardListWrap8_1;