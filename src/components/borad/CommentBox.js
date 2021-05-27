import React from 'react';
import GroupTitle from '../commonStyle/GroupTitle'
import InputGroup from '../commonStyle/InputGroup'
import Button from '../commonStyle/Button'
import CommentList from './CommentList'


import styled from 'styled-components';
import { FlexBox, Gutter, BottomBox, ChangeFont } from '../commonStyle';

const Wrapper = styled.div`
  ${BottomBox()};
  ${Gutter()};
  padding-top:5px;
`;

function CommentBox({title, subtit}) {
  return (
    <Wrapper>
        <GroupTitle title="댓글작성"/>
        <InputGroup id="comment" title="" ph="댓글 내용을 입력해주세요"/>
        <Button bg="#404345" color="#ffffff" text="댓글 저장하기" height="44px" fontSize="12px" mgt="10px"/>
        <CommentList/>
    </Wrapper>
  );
}

export default CommentBox;