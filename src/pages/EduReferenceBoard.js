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
import { getBoardList, getTopEduBoardList, getEduBoardList, getEduMovieBoardList, postRMDBoard } from '../redux/thunkFn/borad.thunk';
import { boardInit, boardPostInput, boardPostLoginInput, boardPostModifyInput } from '../redux/actionFn/board';

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

function EduReferenceBoard() {
  if(user===null){
      user = JSON.parse(localStorage.getItem('user'));
  }   
  const [tab, setTab] = useState(1);
  const tabChagne = (num) =>{
      setTab(num);
  }
  const name = tab === 1 ? "교육자료실":"영상자료실";
    const setInputValue2 = (data) =>{
        dispatch(boardPostInput(data))
      }
    const pageCount = useRef(1);
    const data =  useSelector(state =>state.boardPostReducer.data);
    const boardData =  useSelector(state => state.boardPostReducer.data);
    const boarTopdData =  useSelector(state => state.boardTopReducer.boardList);

    const [ modalOpen, setModalOpen ] = useState(false);
    const openModal = () => {
        dispatch(boardPostLoginInput(user,name,"INS"))
        setModalOpen(true);
    }
    const closeModal = () => {
        setModalOpen(false);
    }
    const callback = () =>{
        dispatch(getBoardList(user.brand,name,1))
        pageCount.current = 1;
        closeModal();
      }
      const onsubmit= ()=>{
        const data = boardData;
        const len =  isEmptyObject(data).length;
        if(len>0){
          return false;
        }
        dispatch(postRMDBoard(data,callback));
      }
      const isEmptyObject = (obj) =>{
        const objKey = Object.keys(obj);
        const val = objKey.filter(key =>{
          return obj[key]==="";
        })
        return val;
      }
    // dispatch(getBoardList(user.brand,boardName.name,pageCount.current))

    const dispatch = useDispatch();
    // const list = useSelector(state => state.boardTopReducer.boardList);
    useEffect(() => {
        pageCount.current = 1;
        if(tab === 1){
        dispatch(getEduBoardList(user.brand,name,pageCount.current));
        dispatch(getTopEduBoardList(user.brand,name,0));
        } else {
        dispatch(getEduMovieBoardList(user.brand,name,pageCount.current));
        dispatch(getTopEduBoardList(user.brand,name,1));
        }
        return () => {
        }
    }, [tab])

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
        dispatch(getEduBoardList(user.brand,name,pageCount.current))
      }
    };
  useEffect(() => {
      window.addEventListener('scroll',infiniteScroll);

      return () => window.removeEventListener('scroll', infiniteScroll)
  }, [])
 
  
    //우리팀 톡톡 1
    //자유게시판 2
    //공지사항 3
    //칭찬글 4
    //꾸중글 5
  return (
    <Wrapper>
            <BoardTitle title="자료실"subtit="자료실 게시판입니다" 
            check={false} tabCheck={true} tabName={["일반자료실","영상자료실"]} tab={tab} changeTab={tabChagne}/>
            <ContentArea>
            <NoticeWrap>

            { boarTopdData.map((item,index)=>{
              return (
                  <BoardList key={index} title={item.title} regdate={item.regdate} board_sn={item.board_sn} index={index} loginname={item.loginname} tname={item.tname} countview={item.countview} cnt={item.cnt} adu={item.adu} typeCheck={item.teamNm} classname="important" boardCode="5"/>
              )
            })} 
            </NoticeWrap>

            <BoardListWrap boardCode="7"/>
            </ContentArea>
            
            {/* <FloatingBtn bg="#009B90" icon="ico_add" onClick={ openModal }/> */}
            <Modal open={ modalOpen } close={ closeModal } header="글쓰기" >
              <InputGroup id="title" title="제목" ph="제목을 입력해주세요" setInputValue2={setInputValue2} value={data.title}/>
              <InputGroup id="username" title="작성자"  setInputValue2={setInputValue2} value={data.username}/>
              <InputGroup id="password" title="비밀번호" ph="비밀번호을 입력해주세요" setInputValue2={setInputValue2} value={data.password}/>              
              <InputGroup id="email" title="이메일" ph="이메일을 입력해주세요" setInputValue2={setInputValue2} value={data.email}/>
              <TextAreaGroup id="contents" title="내용" ph="내용을 입력해주세요" setInputValue2={setInputValue2} value={data.contents}/>
              <Button onclick={onsubmit} bg="#3397B9" color="#ffffff" text="저장" height="44px" fontSize="12px" mgt="30px"></Button>       
            </Modal>
      </Wrapper>
  );
}

export default EduReferenceBoard;