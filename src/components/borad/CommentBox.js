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
import { totalMesThunk } from '../../redux/thunkFn/total.thunk';
import { getBoardDetail } from '../../redux/thunkFn/borad.thunk';
import { totalMesInit } from '../../redux/actionFn/total';

const Wrapper = styled.div`
  ${BottomBox()};
  ${Gutter()};
  padding-top:5px;
`;
function CommentBox({title, subtit, showCheck, commentlist,sn,type, list}) {
  const [text,setText] = useState("");
  const dispatch = useDispatch();
  const {result,message} = useSelector(state => state.postAsCommentReducer)
  const {result:result2,message:message2} = useSelector(state => state.totalMesReducer);
  const commentSubmit = () =>{
    if(text === ""){
      return;
    }
    if(type === "8"){
      dispatch(postAsComment(text,sn));
    }else{
      dispatch(totalMesThunk("comment_proc",{sn:sn,contents:text}));
    }

  }
  const confirmSubmit = () =>{
    if(type === "8"){
      dispatch(getAsDetail(sn));
      dispatch(postAsCommentInit());
    }else{
      dispatch(getBoardDetail(sn)); 
      dispatch(totalMesInit());
    }

    
    setText("");
  }

  return (
    <Wrapper>
      <div>
        {/* {type} <br></br>
        {sn} */}
         <GroupTitle title="댓글작성" />
         <InputGroup id="comment" title="" ph="댓글 내용을 입력해주세요"setInputValue={setText} value={text}/>
         <Button onclick={commentSubmit}bg="#404345" color="#ffffff" text="댓글 저장하기" height="44px" fontSize="12px" mgt="10px"/>
       </div>
       {/* {showCheck &&
       
       } */}
        <CommentList list={commentlist}/>
        {result ==="success" || result2==="success"?<ConfirmModal open={true} text={message || message2} onsubmit={confirmSubmit}></ConfirmModal>:null}

        
    </Wrapper>
  );
}

export default CommentBox;