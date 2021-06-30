import React, { useEffect, useState } from 'react';
import BoardTitle from '../components/borad/BoardTitle';
import CommentBox from '../components/borad/CommentBox';
import { FlexBox, Gutter, ChangeFont } from '../components/commonStyle';
import Button from '../components/commonStyle/Button';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { getBoardDetail, getEduBoardDetail, getEduMovieBoardDetail, getEduMovieBoardList, postModifyBoard } from '../redux/thunkFn/borad.thunk';
import { getAsDetail } from '../redux/thunkFn/as.thunk';
import Loading from '../components/commonStyle/Loading';
import Modal from '../components/base/Modal';
import InputGroup from '../components/commonStyle/InputGroup';
import { boardPostInput } from '../redux/actionFn/board';
import TextAreaGroup from '../components/commonStyle/TextAreaGroup';

const Wrapper = styled.div`
    background: #FAFAFA;
`;
const ContentArea = styled.div`
    position:relative;
  ${Gutter()};
  margin-top:-40px;
`
const ContentBox = styled.div`
  background: ${(props) => props.theme.colors.white};
  border-radius: 4px;
  padding:15px;
`;

const Title = styled.div`
    font-size: ${(props) => props.theme.fontSizes.ml};
  span{
    color:#82898E;
    font-size: ${(props) => props.theme.fontSizes.ml};
  }
`;
const PostInfo = styled.div`
  ${FlexBox()}
  padding-top:4px;
  padding-bottom:10px;
  border-bottom:1px solid #DFE5EA;

  span{
    content:'';
    width:1px;
    height:10px;
    background: #DFE5EA;
    margin: 3px 8px;
    vertical-align: middle;
  }
`;
const Writer = styled.div`
  color: #82898E;
`;
const Date = styled.div`
  ${ChangeFont(true,200)};
  font-size: ${(props) => props.theme.fontSizes.s};
  color:#ACB6BC;
`;
const Desc = styled.div`
  padding: 10px 0;
  img{
    margin-bottom:10px;
  }
`;
const ButtonArea = styled.div`
  ${FlexBox()}
  margin:30px 0;
`;
const InnerCont = styled.div`
`;

function BoardDetail({match}) {
  const number = match.params.number;
  const sn = match.params.sn;
  const type = match.params.type;
  const dispatch = useDispatch();

  const boardDetail = useSelector(state => state.boardDetailReducer.data);
  const data = useSelector(state => state.getAsDetailReducer);

  const [ modalOpen, setModalOpen ] = useState(false);
  const [inputValue,setInputValue] = useState("");
  const [modifyText, setModifyText] = useState({
    mode:"MOD",
    sn:sn,
    title:"",
    password:"",
    email:"",
    contents:""
  })
  const openModal = () => {
    setModalOpen(true);
  }
  const closeModal = () => {
    setModalOpen(false);
    setOpenModifyModal(false);
  }
  const setInputValue2 = (data) =>{
    setModifyText({
      ...modifyText,
      [data.target.name]:data.target.value
    })
  }
  useEffect(() => {
    if(type === undefined){
      dispatch(getBoardDetail(sn));
    }else if(type === "1"){
      dispatch(getEduBoardDetail(sn));
    }else if(type === "2"){
      dispatch(getEduMovieBoardDetail(sn));
    }else if(type === "3" ||type === "4"){
      dispatch(getAsDetail(sn));
    }
      
  }, [])
  const [openPass,setOpenPass] = useState(false);
  const onclick= () => {
    setOpenPass(true)
  }
  const [checkPass,setCheckPass] = useState("");
  const [openModifyModal, setOpenModifyModal]=useState(false);
  const onchange=(e)=>{
    const {value} = e.target;
    setCheckPass(value)
  }
  const confirmPass = ()=>{
    if(inputValue === boardDetail.passwd){
      setOpenModifyModal(true);
    } else{
      setOpenModifyModal(false);
    }
  }
  const onsubmit= () =>{
    dispatch(postModifyBoard(modifyText));
    console.log(modifyText);
  }
  if( type === "3" ||type === "4" ) {
      return (
        <Wrapper>
          {data.loading && <Loading></Loading>}
          {
            openPass?
            <div>
              <input onChange={(e)=>{onchange(e)}} value={checkPass}/>
              <button onClick={confirmPass}>
                aaaaa
              </button>
            </div>
            :
            null
          }
            <BoardTitle/>
            <ContentArea>
              <ContentBox>
                {/* <Title>
                {data.title}
                </Title> */}
                <PostInfo>
                  <Writer>{data.strLoginname}({data.tname})</Writer>
                  <Date>{data.regdate}</Date>
                </PostInfo>
                <Desc>
                <InnerCont dangerouslySetInnerHTML={ {__html: data.strContents} }>
                </InnerCont>
                </Desc>
                </ContentBox>
                <ButtonArea>
                  <Button onclick={onclick} bg="#DFE5EA" color="#ACB6BC" text="수정" w="24%" h="44px" fs="12px"></Button>
                  <Button bg="#DFE5EA" color="#ACB6BC" text="삭제" w="24%" h="44px" fs="12px"></Button>
                  <Button bg="#3397B9" color="#ffffff" text="목록" w="49%" h="44px" fs="12px"></Button>
                </ButtonArea>
            </ContentArea>
            <CommentBox showCheck={type ==="3"? true:false} commentlist={data.list} sn={sn}></CommentBox>
        </Wrapper>
      );
  } else {
    return (
      <Wrapper>
        {
          openPass?
          <div>
            <input onChange={(e)=>{onchange(e)}} value={checkPass}/>
            <button onClick={confirmPass}>
              aaaaa
            </button>
          </div>
          :
          null
        }
          <BoardTitle/>
          <ContentArea>
            <ContentBox>
              <Title>
              {boardDetail.title}
              </Title>
              <PostInfo>
                <Writer>{boardDetail.loginid}({boardDetail.tname})</Writer>
                <Date>{boardDetail.regdate}</Date>
              </PostInfo>
              <Desc>
                {/* <img src={process.env.PUBLIC_URL + '/images/dummyImg.jpg'} alt="icon" />
                <p>dfsdfsdf</p> */}
              </Desc>
              </ContentBox>
              <ButtonArea>
                <Button onclick={openModal} bg="#DFE5EA" color="#ACB6BC" text="수정" w="24%" h="44px" fs="12px"></Button>
                <Button bg="#DFE5EA" color="#ACB6BC" text="삭제" w="24%" h="44px" fs="12px"></Button>
                <Button bg="#3397B9" color="#ffffff" text="목록" w="49%" h="44px" fs="12px"></Button>
              </ButtonArea>
          </ContentArea>
          <CommentBox></CommentBox>
          <Modal open={ modalOpen } close={ closeModal } header="비밀번호 확인" >
              <InputGroup id="title" title="비밀번호" ph="제목을 입력해주세요"  value={inputValue}setInputValue={setInputValue}/>
              <Button onclick={confirmPass} bg="#3397B9" color="#ffffff" text="확인" height="44px" fontSize="12px" mgt="30px"></Button>       
            </Modal>
            <Modal open={ openModifyModal } close={ closeModal } header="글쓰기">
              <InputGroup id="title" title="제목" ph="제목을 입력해주세요" setInputValue2={setInputValue2} value={data.title}/>
              <InputGroup id="password" title="비밀번호" ph="비밀번호을 입력해주세요" setInputValue2={setInputValue2} value={data.password}/>              
              <InputGroup id="email" title="이메일" ph="이메일을 입력해주세요" setInputValue2={setInputValue2} value={data.email}/>
              <TextAreaGroup id="contents" title="내용" ph="내용을 입력해주세요" setInputValue2={setInputValue2} value={data.contents}/>
              <Button onclick={onsubmit} bg="#3397B9" color="#ffffff" text="저장" height="44px" fontSize="12px" mgt="30px"></Button>       
            </Modal>
      </Wrapper>
    );
  }

}

export default BoardDetail;