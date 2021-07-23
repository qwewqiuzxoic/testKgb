import React, { useEffect } from 'react';
import BoardTitArea from './BoardTitArea';

import {getBoardList} from '../../redux/thunkFn/borad.thunk';
import { useDispatch, useSelector } from "react-redux";

import styled from 'styled-components';
import { FlexBox, ChangeFont, Gutter } from '../commonStyle';
import { Link } from 'react-router-dom';
import BoardDetail from '../../pages/BoardDetail';

const Wrapper = styled.div`
    ${Gutter('0 12px 32px 12px')};
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


function Board() {
  const user = JSON.parse(localStorage.getItem('user'));
  const dispatch = useDispatch();

  const boardList = useSelector(state => state.boardReducer.boardList);
  useEffect(() => { //user.brand,"소사장공지사항",pageCount.current
      dispatch(getBoardList(user.brand,"소사장공지사항",1,"",4))
  }, [])

  return (
    <Wrapper>
        <BoardTitArea name="공지사항" rightText="더보기 +" lineColor="linear-gradient(90deg, #009B90 0%, #27C281 100%) 0% 0% " bgColor="#DFE5EA" color="#404345" rightColor="#404345"></BoardTitArea>
       {}
        <div>
          {boardList && boardList.map((post, index)=> (
            <Post key={index} title={post.title}  desc={post.desc} >
                <Title>
                  <Link to={`boarddetail/5/${post.board_sn}`}>
                  {post.title}
                  </Link>
                </Title>
                <Date>{post.regdate}</Date>
            </Post>
        ))}
        </div>
    </Wrapper>
  );
}

export default Board;