import React, { useEffect } from 'react';
import BoardTitArea from './BoardTitArea';

import {getBoardList} from '../../redux/thunkFn/borad.thunk';
import { useDispatch, useSelector } from "react-redux";

import styled from 'styled-components';
import { FlexBox, ChangeFont } from '../commonStyle';

const Wrapper = styled.div`
    padding:0 12px 32px 12px;
    width:100%;
`
const Post = styled.div`
    ${FlexBox()}
    padding: 11px 6px;
`
const Title = styled.div`
  font-size: ${(props) => props.theme.fontSizes.s};

`
const Date = styled.div`
  color: ${(props) => props.theme.colors.grey3};
  ${ChangeFont(true, 200)}
  font-size: ${(props) => props.theme.fontSizes.s};

`
const Posts = [
    {
        title : "2019년 10월 베스트 칭찬글 발표",
        date : "2019 .01 .01",
    },
    {
        title : "2019년 11월 베스트 칭찬글 발표",
        date : "2019 .01 .01",
    },
    {
        title : "2019년 12월 베스트 칭찬글 발표",
        date : "2019 .01 .01",
    },
]

function Board() {
  const dispatch = useDispatch();

  const boardList = useSelector(state => state.boardReducer.boardList);
  useEffect(() => {
      dispatch(getBoardList())
  }, [])

  return (
    <Wrapper>
        <BoardTitArea name="공지사항" rightText="더보기 +" lineColor="linear-gradient(90deg, #009B90 0%, #27C281 100%) 0% 0% " bgColor="#DFE5EA" color="#404345" rightColor="#404345"></BoardTitArea>
       {}
        <div>
          {boardList.length == 0 ? "LOADING": boardList.map((post, index)=> (
          <Post key={index} title={post.title}  desc={post.desc} >
              <Title>{post.title}</Title>
              <Date>{post.regdate}</Date>
          </Post>
        ))}
        </div>
    </Wrapper>
  );
}

export default Board;