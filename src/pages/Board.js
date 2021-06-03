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
import { useDispatch } from 'react-redux';
import { getBoardList } from '../redux/thunkFn/borad.thunk';

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
    //const [code, setCode] = useState(match.params.boardTitle)
    const [ modalOpen, setModalOpen ] = useState(false);

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
      subtit:""
    });

    const dispatch = useDispatch();
  
    useEffect(() => {
      
      if(boardCodeNm === 1){
        setBoardName({
          ...boardName,
          name:"자유게시판",
          title:"자유게시판",
          subtit:"KGB의 자유게시판서비스입니다"
        })
      }else if(boardCodeNm === 2){
        setBoardName({
          ...boardName,
          name:"우리팀톡톡",
          title:"우리팀톡톡",
          subtit:"KGB의 우리팀 톡톡입니다"
        })    
      }else if(boardCodeNm === 3){
        setBoardName({
          ...boardName,
          name:"칭찬하기",
          title:"칭찬글",
          subtit:"KGB의 칭찬글서비스입니다"
        })    
      }else if(boardCodeNm === 4){
        setBoardName({
          ...boardName,
          name:"꾸중하기",
          title:"꾸중글",
          subtit:"KGB의 꾸중글서비스입니다"
        })    
      }else if(boardCodeNm === 5){
        setBoardName({
          ...boardName,
          name:"소사장공지사항",
          title:"공지사항",
          subtit:"KGB의 공지사항입니다"
        })    
      }
      if(boardName.name !== ""){
        dispatch(getBoardList("YES2404",boardName.name))
      }
        return () => {
        }
    }, [boardName.name])

  
  return (
      <Wrapper>
            <BoardTitle  title={boardName.title} subtit={boardName.subtit} boardCode={code}/>
            <ContentArea>
                <BoardListWrap boardCode={code} />
            </ContentArea>
            <FloatingBtn bg="#009B90" icon="ico_add" onClick={ openModal }/>
            <Modal open={ modalOpen } close={ closeModal } header="글쓰기">
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