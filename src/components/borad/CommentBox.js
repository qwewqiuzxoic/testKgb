import React, { useEffect, useState } from 'react';
import GroupTitle from '../commonStyle/GroupTitle'
import InputGroup from '../commonStyle/InputGroup'
import Button from '../commonStyle/Button'
import CommentList from './CommentList'


import styled from 'styled-components';
import { Gutter, BottomBox } from '../commonStyle';
import { useDispatch, useSelector } from 'react-redux';
import { getAsDetail, postAsComment } from '../../redux/thunkFn/as.thunk';
import ConfirmModal from '../../components/base/ConfirmModal';
import { postAsCommentInit } from '../../redux/actionFn/as';

const Wrapper = styled.div`
  ${BottomBox()};
  ${Gutter()};
  padding-top:5px;
`;
function CommentBox({title, subtit, showCheck, commentlist,sn}) {
  const [text,setText] = useState("");
  const dispatch = useDispatch();
  const {result,message} = useSelector(state => state.postAsCommentReducer)
  const commentSubmit = () =>{
    dispatch(postAsComment(text,sn));
  }
  const confirmSubmit = () =>{
    dispatch(getAsDetail(sn));
    dispatch(postAsCommentInit());
    setText("");
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
        {result ==="success"?<ConfirmModal open={true} text={message} onsubmit={confirmSubmit}></ConfirmModal>:null}

        
    </Wrapper>
  );
}

export default CommentBox;