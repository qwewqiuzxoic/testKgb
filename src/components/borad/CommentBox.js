import React, { useEffect, useState } from 'react';
import GroupTitle from '../commonStyle/GroupTitle'
import InputGroup from '../commonStyle/InputGroup'
import Button from '../commonStyle/Button'
import CommentList from './CommentList'


import styled from 'styled-components';
import { BottomBox } from '../commonStyle';
import { useDispatch, useSelector } from 'react-redux';
import { getAsDetail, postAsComment } from '../../redux/thunkFn/as.thunk';
import ConfirmModal from '../../components/base/ConfirmModal';
import { postAsCommentInit } from '../../redux/actionFn/as';
import { totalMesThunk } from '../../redux/thunkFn/total.thunk';
import { getBoardDetail } from '../../redux/thunkFn/borad.thunk';
import { totalMesInit } from '../../redux/actionFn/total';
import Loading from '../commonStyle/Loading';

const Wrapper = styled.div`
  ${BottomBox()};
  padding:0 12px 30px;
  padding-top:5px;
`;
function CommentBox({title, subtit, showCheck, commentlist,sn,type, list, tname}) {
  const [text,setText] = useState("");
  const dispatch = useDispatch();
  const {result,message,loading} = useSelector(state => state.postAsCommentReducer)
  const {result:result2,message:message2,loading:loading2} = useSelector(state => state.totalMesReducer);
  const commentSubmit = () =>{
    if(text === ""){
      return;
    }
    if(type === "asy"){
      dispatch(totalMesThunk("as_comment_proc",{sn:sn,contents:text}));
    }else{
      dispatch(totalMesThunk("comment_proc",{sn:sn,contents:text}));
    }

  }
  const user = JSON.parse(localStorage.getItem('user'))  ;       

  const confirmSubmit = () =>{
    if(type === "asy"){
      dispatch(getAsDetail(sn));
      dispatch(totalMesInit());
    }else{
      dispatch(getBoardDetail(sn)); 
      dispatch(totalMesInit());
    }
    
    setText("");
  }
  console.log(tname !== user.teamname)
  return (
    <Wrapper>
        {/* {type} <br></br>
        {sn} */}
        {type === "3"? null:type === "2" && tname !== user.teamname?null:
        type === "asy" && tname !== user.teamname? null:
        <div>
          <GroupTitle title="????????????" />
          <InputGroup id="comment" title="" ph="?????? ????????? ??????????????????"setInputValue={setText} value={text}/>
          <Button onclick={commentSubmit}bg="#404345" color="#ffffff" text="?????? ????????????" height="44px" fontSize="12px" mgt="10px"/>
        </div>
        }
      
         
       {/* {showCheck &&
       
       } */}
        <CommentList list={commentlist}/>
        {result2==="success"?<ConfirmModal open={true} text={message || message2} onsubmit={confirmSubmit}></ConfirmModal>:null}
       {
         loading && <Loading></Loading>
       }
       {
         loading2 && <Loading></Loading>
       }
        
    </Wrapper>
  );
}

export default CommentBox;