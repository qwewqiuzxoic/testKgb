import React, { useEffect, useState } from 'react';
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
import { getBoardList, getBoardTopList } from '../redux/thunkFn/borad.thunk';

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
    const history = useHistory() 
    const user = JSON.parse(localStorage.getItem('user'));
    const [ modalOpen, setModalOpen ] = useState(false);
    const list = useSelector(state => state.boardTopReducer.boardList)
    const openModal = () => {
        setModalOpen(true);
    }
    const closeModal = () => {
        setModalOpen(false);
    }
    const boardCodeNm = Number(code);
    const [boardName, setBoardName] = useState({
      name:"",
      title:"",
      subtit:"",
      check:false,
      teamNm:true,
    });
    const [boardSubName, setBoardSubName] = useState({
      name1:"",
      name2:""
    })
    const [count,setCount] = useState(1);
    const changeTeamNm = ()=>{
      setBoardName({
        ...boardName,
        teamNm:!boardName.teamNm
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
        setCount(count+1)
        dispatch(getBoardList(user.brand,boardName.name,count))

      }
    };
    useEffect(() => {
      window.addEventListener('scroll',function(e){
        infiniteScroll()
      })
      if(boardCodeNm === 1){
        setBoardName({
          ...boardName,
          name:"자유게시판",
          title:"자유게시판",
          subtit:"KGB의 자유게시판서비스입니다",
          check:false,
          teamNm:true,
        })
      }else if(boardCodeNm === 2){
        setBoardName({
          ...boardName,
          name:"우리팀톡톡",
          title:"우리팀톡톡",
          subtit:"KGB의 우리팀 톡톡입니다",
          check:false,
          teamNm:true,
        })   
        
      }else if(boardCodeNm === 3){
        setBoardName({
          ...boardName,
          name:"칭찬하기",
          title:"칭찬글",
          subtit:"KGB의 칭찬글서비스입니다",
          check:true,
          teamNm:true,
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
        })    
      }
      if(boardName.name !== ""){
        dispatch(getBoardList(user.brand,boardName.name,count))
      }
      if(boardName.title==="공지사항"){
        dispatch(getBoardList(user.brand,boardName.name,count))
        dispatch(getBoardTopList(user.brand,boardName.name))
      }
      console.log(list)
        return () => {
        }
    }, [boardName.name])

  
  return (
      <Wrapper>
          {list.map(item=>{
            return(
              <div>
               { item.title}
              </div>
            )
          })}
            <BoardTitle  title={boardName.title} subtit={boardName.subtit} check={boardName.check} boardSubName={boardSubName} changeTeamNm={changeTeamNm}/>
            <ContentArea>
                <BoardListWrap check={boardName.check} teamCheck={boardName.teamNm}/>
            </ContentArea>
            <FloatingBtn bg="#009B90" icon="ico_add" onClick={ openModal }/>
            <Modal open={ modalOpen } close={ closeModal } header="글쓰기" boardName={boardName.name}>
              <InputGroup id="write_title" title="제목" ph="제목을 입력해주세요"/>
              <InputGroup id="write_writer" title="작성자" ph="홍길동"/>
              <InputGroup id="write_pw" title="비밀번호" ph="비밀번호을 입력해주세요"/>              
              <InputGroup id="write_mail" title="이메일" ph="이메일을 입력해주세요"/>
              <TextAreaGroup id="write_text" title="내용" ph="내용을 입력해주세요"/>
              <Button bg="#3397B9" color="#ffffff" text="저장" height="44px" fontSize="12px" mgt="30px"></Button>       
            </Modal>
      </Wrapper>
      
  );
}

export default Board;