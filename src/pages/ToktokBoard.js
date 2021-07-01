import React, { useEffect, useRef, useState } from 'react';
import BoardList from '../components/borad/BoardList';
import BoardListWrap from '../components/borad/BoardListWrap';
import BoardTitle from '../components/borad/BoardTitle';
import FloatingBtn from '../components/commonStyle/FloatingBtn'
import Modal from '../components/base/Modal'
import { FlexBox, Gutter, BottomBox, ChangeFont } from '../components/commonStyle';
import InputGroup from '../components/commonStyle/InputGroup';
import TextAreaGroup from '../components/commonStyle/TextAreaGroup';
import Button from '../components/commonStyle/Button';
import { useHistory } from 'react-router-dom'

import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { getBoardList } from '../redux/thunkFn/borad.thunk';

const Wrapper = styled.div`
    background: #FAFAFA;
`;
const ContentArea = styled.div`
    position:relative;
  ${Gutter()};
  margin-top:-40px;
`;
const NoticeWrap = styled.div`
  &:first-child{
    margin-top:70px;
    border-top: 1px solid #009B90;
    border-radius: 0;
  }
`;
let user = JSON.parse(localStorage.getItem('user'));       
function ToktokBoard() {
    const pageCount = useRef(1)

    if(user===null){
        user = JSON.parse(localStorage.getItem('user'));
    }
    // dispatch(getBoardList(user.brand,boardName.name,pageCount.current))

    const dispatch = useDispatch();
    const list = useSelector(state => state.boardTopReducer.boardList);
    useEffect(() => {
        dispatch(getBoardList(user.brand,"우리팀톡톡",pageCount.current))
        return () => {
            
        }
    }, [])

    //우리팀 톡톡 1
    //자유게시판 2
    //공지사항 3
    //칭찬글 4
    //꾸중글 5
  return (
    <Wrapper>
            <BoardTitle title="우리팀 톡톡"subtit="우리팀 톡톡 게시판입니다" check={false}/>
            <ContentArea>
            {/* <NoticeWrap>
            <BoardList />
            </NoticeWrap> */}
            {/* <BoardListWrap/>  */}
            <BoardListWrap boardCode="1"/>
            </ContentArea>
            
             <FloatingBtn bg="#009B90" icon="ico_add" />
            <Modal>
              <InputGroup/>
              <InputGroup/>
              <InputGroup/>              
              <InputGroup/>
              <TextAreaGroup />
              <Button  bg="#3397B9" color="#ffffff" text="저장" height="44px" fontSize="12px" mgt="30px"></Button>       
            </Modal>
      </Wrapper>
  );
}

export default ToktokBoard;