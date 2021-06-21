import React, { useState } from 'react';
import GroupTitle from '../commonStyle/GroupTitle'
import InputGroup from '../commonStyle/InputGroup'
import Button from '../commonStyle/Button'
import CommentList from './CommentList'


import styled from 'styled-components';
import { FlexBox, Gutter, BottomBox, ChangeFont } from '../commonStyle';
import { useDispatch } from 'react-redux';
import { postAsComment } from '../../redux/thunkFn/as.thunk';

const Wrapper = styled.div`
  ${BottomBox()};
  ${Gutter()};
  padding-top:5px;
`;

function CommentBox({title, subtit, showCheck, commentlist,sn}) {
  const [text,setText] = useState("");
  const dispatch = useDispatch();
  const commentSubmit = () =>{
    dispatch(postAsComment(text,sn))
    console.log(text)
  }
  return (
    <Wrapper>
       {showCheck &&
       <div>
         <GroupTitle title="댓글작성" />
         <InputGroup id="comment" title="" ph="댓글 내용을 입력해주세요"setInputValue={setText} value={text}/>
         <Button onclick={commentSubmit}bg="#404345" color="#ffffff" text="댓글 저장하기" height="44px" fontSize="12px" mgt="10px"/>
       </div>
       }
        <CommentList list={commentlist}/>
    </Wrapper>
  );
}

export default CommentBox;