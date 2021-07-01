import React, { useEffect, useRef, useState } from 'react';
import BoardList from '../components/borad/BoardList';
import BoardListWrap from '../components/borad/BoardListWrap';
import BoardTitle from '../components/borad/BoardTitle';
import FloatingBtn from '../components/commonStyle/FloatingBtn'
import Modal from '../components/base/Modal'
import { Gutter } from '../components/commonStyle';
import InputGroup from '../components/commonStyle/InputGroup';
import TextAreaGroup from '../components/commonStyle/TextAreaGroup';
import Button from '../components/commonStyle/Button';
import { useHistory } from 'react-router-dom'

import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { getBoardList, getBoardTopList, getEduBoardList, getEduMovieBoardList, postRMDBoard } from '../redux/thunkFn/borad.thunk';
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
    const history = useHistory();

    const callback = () =>{
      dispatch(getBoardList(user.brand,boardName.name,1))
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
    const boardCodeNm = Number(code);
    const [boardName, setBoardName] = useState({
      name:"",
      title:"",
      subtit:"",
      check:false,
      teamNm:true,
      add:false,
      adu:false
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
      pageCount.current = 1;
      if(boardName.adu && boardName.teamNm && boardName.check === true){
        dispatch(getEduMovieBoardList(user.brand,boardName.name,pageCount.current))
      } else if(boardName.adu && !boardName.teamNm){
        dispatch(getEduBoardList(user.brand,boardName.name,pageCount.current))
      }else if(boardName.check === true && !boardName.adu && boardName.teamNm){
        dispatch(getBoardList(user.brand,boardName.name,pageCount.current))
      }else if(boardName.check === true && !boardName.adu && !boardName.teamNm){
        dispatch(getBoardList(user.brand,boardName.name,pageCount.current))
      }

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
        dispatch(getBoardList(user.brand,boardName.name,pageCount.current))

      }
    };
    const setInputValue2 = (data) =>{
      dispatch(boardPostInput(data))
    }
    const data =  useSelector(state =>state.boardPostReducer.data);
    useEffect(() => {
      window.addEventListener('scroll',infiniteScroll);
      if(boardCodeNm === 1){
        setBoardName({
          ...boardName,
          name:"자유게시판",
          title:"자유게시판",
          subtit:"KGB의 자유게시판서비스입니다",
          check:false,
          teamNm:true,
          add:true,
          adu:false
        })
      }else if(boardCodeNm === 2){
        setBoardName({
          ...boardName,
          name:"우리팀톡톡",
          title:"우리팀톡톡",
          subtit:"KGB의 우리팀 톡톡입니다",
          check:false,
          teamNm:true,
          add:true,
          adu:false
        })   
        
      }else if(boardCodeNm === 3){
        setBoardName({
          ...boardName,
          name:"칭찬하기",
          title:"칭찬글",
          subtit:"KGB의 칭찬글서비스입니다",
          check:true,
          teamNm:true,
          add:false,
          adu:false
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
          add:false,
          adu:false
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
          add:false,
          adu:false
        })    
      }else if(boardCodeNm === 6){
        setBoardName({
          ...boardName,
          name:"교육공지",
          title:"교육공지/이용안내",
          subtit:"KGB의 교육공지/이용안내입니다",
          check:false,
          teamNm:true,
          add:false,
          adu:false
        })    
      }else if(boardCodeNm === 7){
        setBoardName({
          ...boardName,
          name:"교육자료실",
          title:"교육자료실",
          subtit:"KGB의 육자료실입니다",
          check:true,
          teamNm:true,
          add:false,
          adu:true
        })    
        setBoardSubName({
          ...boardSubName,
          name1:"일반교육자료",
          name2:"영상교육자료"
        }) 
      }
      else if(boardCodeNm === 8){
        setBoardName({
          ...boardName,
          name:"A/S처리노하우",
          title:"A/S처리노하우",
          subtit:"KGB의 A/S처리노하우입니다",
          check:false,
          teamNm:true,
          add:true,
          adu:false
        })    
      }else if(boardCodeNm === 9){
        setBoardName({
          ...boardName,
          name:"자료실",
          title:"일반자료실",
          subtit:"KGB의 일반자료실입니다",
          check:false,
          teamNm:true,
          add:false,
          adu:false
        })    
      }
      else if(boardCodeNm === 10){
        setBoardName({
          ...boardName,
          name:"작업일정변경요청",
          title:"작업일정변경요청",
          subtit:"KGB의 작업일정변경요청입니다",
          check:false,
          teamNm:true,
          add:false,
          adu:false
        })    
      }
      if(boardTitle !== boardName.name){
        dispatch(boardInit())
        pageCount.current = 1;
      }
      if(boardName.name==="소사장공지사항" || boardName.name==="교육공지" || boardName.name==="자료실"){
        if(boardTitle===""){
          dispatch(getBoardList(user.brand,boardName.name,pageCount.current))
          dispatch(getBoardTopList(user.brand,boardName.name))
        }
        
      } else if(boardName.name === "교육자료실"){
        dispatch(getEduBoardList(user.brand,boardName.name,pageCount.current))
      } else if(boardName.name !== ""){
        dispatch(getBoardList(user.brand,boardName.name,pageCount.current))
      }
        return () => window.removeEventListener('scroll', infiniteScroll)
       
    }, [boardName.name])
  
  return (
      <Wrapper>
            <BoardTitle  title={boardName.title} subtit={boardName.subtit} check={boardName.check} boardSubName={boardSubName} changeTeamNm={changeTeamNm} boardTeamNm={boardName.teamNm}/>
            <ContentArea>
            { boardName.name==="소사장공지사항" || boardName.name==="교육공지" ||boardName.name==="자료실" ?list.map((item,index)=>{
              return (
                <NoticeWrap>
                  <BoardList key={index} title={item.title} regdate={item.regdate} board_sn={item.board_sn} index={index} loginname={item.loginname} tname={item.tname} countview={item.countview} cnt={item.cnt} adu={item.adu} typeCheck={item.teamNm} classname="important"/>
                </NoticeWrap>
              )
            }) : null }
            {boardCodeNm === 5 || boardCodeNm === 6 ? 
            <BoardListWrap check={boardName.check} teamCheck={boardName.teamNm} adu={boardName.adu} boardTeamNm={boardName.teamNm} classname="notice"/> :
            <BoardListWrap check={boardName.check} teamCheck={boardName.teamNm} adu={boardName.adu} boardTeamNm={boardName.teamNm}/>
            }
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