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
import { getBoardList, getBoardTopList, postRMDBoard } from '../redux/thunkFn/borad.thunk';
import { boardInit, boardPostInput, boardPostLoginInput, boardPostModifyInput } from '../redux/actionFn/board';

const Wrapper = styled.div`
    background: #FAFAFA;
`;
const ContentArea = styled.div`
    position:relative;
  ${Gutter()};
  margin-top:-40px;
  
`;

function Board({match}) {
    const code = match.params.boardTitle;
    const user = JSON.parse(localStorage.getItem('user'));
    const [ modalOpen, setModalOpen ] = useState(false);
    const list = useSelector(state => state.boardTopReducer.boardList)
    const boardTitle = useSelector(state => state.boardReducer.title)
    const boardData =  useSelector(state => state.boardPostReducer.data)
    const openModal = () => {
      dispatch(boardPostLoginInput(user,boardName.name,"INS"))
      setModalOpen(true);
    }
    const closeModal = () => {
        setModalOpen(false);
    }

    const isEmptyObject = (obj) =>{
      const objKey = Object.keys(obj);
      const val = objKey.filter(key =>{
        return obj[key]==="";
      })
      return val;
    }
   
    const onsubmit= ()=>{
      const data = boardData;
      const len =  isEmptyObject(data).length;
      console.log(data)
      if(len>0){
        return false;
      }
      console.log(data)
      dispatch(postRMDBoard(data))
    }
    const boardCodeNm = Number(code);
    const [boardName, setBoardName] = useState({
      name:"",
      title:"",
      subtit:"",
      check:false,
      teamNm:true,
      add:false
    });
    
    const [boardSubName, setBoardSubName] = useState({
      name1:"",
      name2:""
    })
    const pageCount = useRef(1)
    const changeTeamNm = (check)=>{
      setBoardName({
        ...boardName,
        teamNm:check
      })
    }
    const dispatch = useDispatch();
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
        console.log(pageCount)
        dispatch(getBoardList(user.brand,boardName.name,pageCount.current))

      }
    };
    const setInputValue2 = (data) =>{
      dispatch(boardPostInput(data))
    }
    const data =  useSelector(state =>state.boardPostReducer.data);
    useEffect(() => {
      window.addEventListener('scroll',infiniteScroll)
      if(boardCodeNm === 1){
        setBoardName({
          ...boardName,
          name:"자유게시판",
          title:"자유게시판",
          subtit:"KGB의 자유게시판서비스입니다",
          check:false,
          teamNm:true,
          add:true
        })
      }else if(boardCodeNm === 2){
        setBoardName({
          ...boardName,
          name:"우리팀톡톡",
          title:"우리팀톡톡",
          subtit:"KGB의 우리팀 톡톡입니다",
          check:false,
          teamNm:true,
          add:true
        })   
        
      }else if(boardCodeNm === 3){
        setBoardName({
          ...boardName,
          name:"칭찬하기",
          title:"칭찬글",
          subtit:"KGB의 칭찬글서비스입니다",
          check:true,
          teamNm:true,
          add:false
        })    
        setBoardSubName({
          ...boardSubName,
          name1:"우리 팀",
          name2:"다른 팀"
        })
      }else if(boardCodeNm === 4){
        setBoardName({
          ...boardName,
          name:"꾸중하기",
          title:"꾸중글",
          subtit:"KGB의 꾸중글서비스입니다",
          check:true,
          teamNm:true,
          add:false
        })    
        setBoardSubName({
          ...boardSubName,
          name1:"우리 팀",
          name2:"다른 팀"
        }) 
      }else if(boardCodeNm === 5){
        setBoardName({
          ...boardName,
          name:"소사장공지사항",
          title:"공지사항",
          subtit:"KGB의 공지사항입니다",
          check:false,
          teamNm:true,
          add:false
        })    
      }
      if(boardTitle !== boardName.name){
        dispatch(boardInit())
        pageCount.current = 1;
      }
      if(boardName.name==="소사장공지사항"){
        if(boardTitle===""){
          dispatch(getBoardList(user.brand,boardName.name,pageCount.current))
          dispatch(getBoardTopList(user.brand,boardName.name))
        }
        
      } else if(boardName.name !== ""){
        dispatch(getBoardList(user.brand,boardName.name,pageCount.current))
      }
        return () => window.removeEventListener('scroll', infiniteScroll)
       
    }, [boardName.name])
  
  return (
      <Wrapper>
            <BoardTitle  title={boardName.title} subtit={boardName.subtit} check={boardName.check} boardSubName={boardSubName} changeTeamNm={changeTeamNm} boardTeamNm={boardName.teamNm}/>
            <ContentArea>
            { boardName.name==="소사장공지사항" ?list.map(item=>{
              return(
                <div>
                { item.title }
                </div>
              )
            }):null}
                <BoardListWrap check={boardName.check} teamCheck={boardName.teamNm}/>
            </ContentArea>
            
            {
              boardName.add ? <FloatingBtn bg="#009B90" icon="ico_add" onClick={ openModal }/>:null
            }
            <Modal open={ modalOpen } close={ closeModal } header="글쓰기" boardName={boardName.name}>
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

export default Board;