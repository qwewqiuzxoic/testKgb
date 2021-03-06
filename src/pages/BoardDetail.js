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
import Row from '../components/bill/Row';
import { boardPostInput } from '../redux/actionFn/board';
import TextAreaGroup from '../components/commonStyle/TextAreaGroup';
import { Link, useHistory } from 'react-router-dom';
import { totalMesThunk } from '../redux/thunkFn/total.thunk';
import ConfirmModal from '../components/base/ConfirmModal';
import { totalMesInit } from '../redux/actionFn/total';

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
  overflow:scroll;
  img{
    margin-bottom:10px;
  }
`;
const Process = styled.div`
  margin-top : 30px;
`
const ButtonArea = styled.div`
  ${FlexBox()}
  margin:30px 0;
`;
const InnerCont = styled.div`
`;
//????????? ?????? 1
//??????????????? 2
//???????????? 3
//????????? 4
//????????? 5
function BoardDetail({match}) {
  const history = useHistory();

  const sn = match.params.sn;
  const type = match.params.type;
  const dispatch = useDispatch();

  const boardDetail1 = useSelector(state => state.boardDetailReducer.data);
  const boardDetail2 = useSelector(state => state.getAsDetailReducer);
  const boardDetail = type === "asy"?boardDetail2:boardDetail1;
  const loading1 = useSelector(state => state.boardDetailReducer.loading);
  const loading2 = useSelector(state => state.getAsDetailReducer.loading);
  const loading = type === "asy" ? loading2:loading1;

  const {result} = useSelector(state => state.totalMesReducer);

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
    setPassWarning(false);
  }
  const setInputValue2 = (data) =>{
    setModifyText({
      ...modifyText,
      [data.target.name]:data.target.value
    })
  }
// ????????? ?????? 1
// ?????? 2
// ?????? 3
// ?????? 4
// ?????? 5
// ???????????? 6
// ??????????????? 7
// as??????????????? 8
// ??????????????? 9
// ????????????????????? 10
  useEffect(() => {
    if(type === "1" || type === "2" || type === "3" || type === "4" || type === "5"|| type === "6" || type === "8" || type === "9" || type === "10"){
      dispatch(getBoardDetail(sn));
    }else if(type === "1"){
      dispatch(getEduBoardDetail(sn));
    }else if(type === "2"){
      dispatch(getEduMovieBoardDetail(sn));
    }else if(type === "asy"){
      dispatch(getAsDetail(sn));
    } else if(type === "7"){
      dispatch(getEduMovieBoardDetail(sn));
    }
  }, [])
  const [openPass,setOpenPass] = useState(false);
  const onclick= () => {
    setOpenPass(true)
  }
  const [checkPass,setCheckPass] = useState("");
  const [openModifyModal, setOpenModifyModal]=useState(false);
  const [passWarning,setPassWarning] = useState(false);
  const onchange=(e)=>{
    const {value} = e.target;
    setCheckPass(value)
  }
  const confirmPass = ()=>{
    if(inputValue === boardDetail.passwd){
      setOpenModifyModal(true);
      setPassWarning(false);
      setModifyText({...modifyText,password:inputValue})
    } else{
      setOpenModifyModal(false);
      setPassWarning(true);
    }
  }
  const callback = () =>{
    history.goBack();
  }
  const onsubmit= () =>{
    dispatch(postModifyBoard(modifyText,callback));
  }
  const toBack = ()=>{
    history.goBack();
    
  }

  const [delCheck,setDelCheck] = useState(false);
  const [delPassCheck,setDelPassCheck] = useState(false);
  const delCheckFn = () =>{
    if(inputValue === boardDetail.passwd){
      setDelCheck(true);
      setPassWarning(false);
    } else{
      setDelCheck(false);
      setPassWarning(true);
    }
    //dispatch(totalMesThunk("del_board_proc_basic",{sn:sn}))
  }
  const delSn = ()=>{
    setDelCheck(false);
    dispatch(totalMesThunk("del_board_proc_basic",{sn:sn}));
    toBack();
  }
  const checkDelPass = () =>{
    setDelPassCheck(true)
  }
  const checkDelPassClose = () =>{
    setPassWarning(false);
    setDelPassCheck(false)
  }
  useEffect(() => {
    dispatch(totalMesInit())
    return () => {
      
    }
  }, [])
return(
  <Wrapper>
          {
            loading ? <Loading/>:
            <div>
            <BoardTitle/>
          <ContentArea>
            <ContentBox>
              <Title>
              {boardDetail.title}
              </Title>
              <PostInfo>
                <Writer>{boardDetail.loginid}{boardDetail.strLoginname}{boardDetail.loginname}({boardDetail.tname})</Writer>
                <Date>{boardDetail.regdate}</Date>
              </PostInfo>
              <Desc>
                {/* <img src={process.env.PUBLIC_URL + '/images/dummyImg.jpg'} alt="icon" />
                <p>dfsdfsdf</p> */}
                {/* { type !== "5" && boardDetail.content} */}
                <InnerCont dangerouslySetInnerHTML={ {__html: boardDetail.strContents} }>
                </InnerCont>
                <InnerCont dangerouslySetInnerHTML={ {__html: boardDetail.content} }>
                </InnerCont>
                
                {boardDetail.movie && <iframe src={boardDetail.movie} frameborder="0" allowfullscreen webkitallowfullscreen mozallowfullscreen> 

                </iframe> }
              </Desc>
              <Process>
                {
                  boardDetail.asresult && <Row dt="????????????" dtColor="#ACB6BC" dd={boardDetail.asresult} ddColor="#3397B9" ddWeight="bold"></Row>
                }
                </Process>
                {
                  boardDetail.attfiles && boardDetail.attfiles.map(item =>
                      <div style={{dispaly:"flex"}}> 
                        <img style={{width:"10px", display:"inline"}} src={process.env.PUBLIC_URL + '/images/clip.png'}/>
                        <a href={item.file_url} download={item.file_url}>{item.file_name}</a>
                      </div>
                    )
                }
              </ContentBox>
              <ButtonArea>
                {
                  type !== "1" && type !== "4"?null:<Button onclick={openModal} bg="#DFE5EA" color="#ACB6BC" text="??????" w="24%" h="44px" fs="12px"></Button>
                }
                {
                  type !== "1" && type !== "4"?null:<Button onclick={()=>checkDelPass()} bg="#DFE5EA" color="#ACB6BC" text="??????" w="24%" h="44px" fs="12px"></Button>
                }
                
                <Button onclick={toBack} bg="#3397B9" color="#ffffff" text="??????" w={type !== "1" && type !== "4"? "100%" : "49%"} h="44px" fs="12px"></Button>
              </ButtonArea>
          </ContentArea>
          <CommentBox list={boardDetail.list} sn={sn} tname={boardDetail.tname} type={type} commentlist={boardDetail.list}></CommentBox>
          <Modal open={ modalOpen } close={ closeModal } header="???????????? ??????" >
              <InputGroup id="title" title="????????????" ph="????????? ??????????????????"  value={inputValue}setInputValue={setInputValue}/>
              {passWarning && <div style={{color:"red"}}>??????????????? ??????????????????</div>}  
              <Button onclick={confirmPass} bg="#3397B9" color="#ffffff" text="??????" height="44px" fontSize="12px" mgt="30px"></Button>
             
            </Modal>
            <Modal open={ openModifyModal } close={ closeModal } header="?????????">
              <InputGroup id="title" title="??????" ph="????????? ??????????????????" setInputValue2={setInputValue2} value={data.title}/>
              {/* <InputGroup id="password" title="????????????" ph="??????????????? ??????????????????" setInputValue2={setInputValue2} value={data.password}/>               */}
              <InputGroup id="email" title="?????????" ph="???????????? ??????????????????" setInputValue2={setInputValue2} value={data.email}/>
              <TextAreaGroup id="contents" title="??????" ph="????????? ??????????????????" setInputValue2={setInputValue2} value={data.contents}/>
              <Button onclick={onsubmit} bg="#3397B9" color="#ffffff" text="??????" height="44px" fontSize="12px" mgt="30px"></Button>       
            </Modal>    
            </div>
          }
          <Modal open={ delPassCheck } close={ checkDelPassClose } header="???????????? ??????" >
              <InputGroup id="title" title="????????????" ph="????????? ??????????????????"  value={inputValue}setInputValue={setInputValue}/>
              {passWarning && <div style={{color:"red"}}>??????????????? ??????????????????</div>}  
              <Button onclick={delCheckFn} bg="#3397B9" color="#ffffff" text="??????" height="44px" fontSize="12px" mgt="30px"></Button>       
            </Modal>
          <ConfirmModal open={delCheck} text="????????? ?????????????????????????" onsubmit={delSn}></ConfirmModal>
          
      </Wrapper>
)
}

export default BoardDetail;