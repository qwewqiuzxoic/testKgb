import React, { useEffect } from 'react';
import BoardList8_1 from './BoardList8_1';
import { getBoardList } from '../../redux/thunkFn/borad.thunk';
import { useDispatch, useSelector } from "react-redux";

import styled from 'styled-components';
import { FlexBox, Gutter, BottomBox, ChangeFont } from '../commonStyle';


const Wrapper = styled.div`

`;

function BoardListWrap8_1({boardCode, onClick}) {
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
    <Wrapper>
        {state.length ==0? <div>로딩중</div>:state.map((post, index)=> (
            <BoardList8_1 key={index} title={post.title} regdate={post.regdate} board_sn={post.board_sn} index={index} onClick={onClick}/>
        ))}
    </Wrapper>
  );
}

export default BoardListWrap8_1;