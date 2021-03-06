import React, { useEffect, useRef, useState } from 'react';
import BoardListWrap8_1 from '../components/team8_1/BoardListWrap8_1';
import BoardTitle from '../components/borad/BoardTitle';
import FloatingBtn from '../components/commonStyle/FloatingBtn';
import Modal from '../components/base/Modal'
import { Gutter } from '../components/commonStyle';
import InputGroup from '../components/commonStyle/InputGroup';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { getHappyCallDetail, warningCallList } from '../redux/thunkFn/warning.thunk';
import Loading from '../components/commonStyle/Loading';
import { getBoardDetail } from '../redux/thunkFn/borad.thunk';

const Wrapper = styled.div`
    background: #FAFAFA;
    padding-bottom:40px;
`;
const ContentArea = styled.div`
    position:relative;
  ${Gutter()};
  margin-top:-40px;
`;
const Name = styled.div`
  display:inline-block;
  font-size: ${(props) => props.theme.fontSizes.s};
  color:  ${(props) => props.theme.colors.grey2};
  margin:10px 0 5px;
  font-weight:bold;
`
const Content = styled.div`
  width:100%;
  min-height: ${(props) => props.scroll ? '130px' : '40px'}; 
  padding:15px;
  background:#F3F7FB;
  border-radius: 4px;
  overflow: ${(props) => props.scroll ? 'scroll' : 'unset'};
`;
const InnerCont = styled.div`
`;



function Team8_1({match}) {
    const code = match.params.boardTitle;
    const [title, subtitle] = code === "1" ?["월 평가(경고현황)","월 평가 목록입니다."]:["상조회","상조회 목록입니다"]
    console.log(code)
    const [ modalOpenDetail, setModalOpenDetail ] = useState(false);
    const [ modalOpenWrite, setModalOpenWrite ] = useState(false);
    
    const dispatch = useDispatch();
    const {data,loading} = useSelector(state=> code ==="1"?state.warningDetailReducer:state.boardDetailReducer);

    const openModalDetail = (sn) => {
        setModalOpenDetail(true);
        if(code === "1"){
          dispatch(getHappyCallDetail(sn));
        } else if(code ==="2"){
          dispatch(getBoardDetail(sn));
        }
    }
    const closeModalDetail = () => {
        setModalOpenDetail(false);
        document.body.style.overflow = 'unset';
    }
    const openModalWrite = () => {
        setModalOpenWrite(true);
    }
    const closeModalWrite = () => {
        setModalOpenWrite(false);
        document.body.style.overflow = 'unset';
    }


  return (
      <Wrapper>
            <BoardTitle title={title} subtit={subtitle} boardCode={code}/>
            <ContentArea>
                <BoardListWrap8_1 code={code} boardCode={code} onClick={ openModalDetail }/>
            </ContentArea>
            {/* {
              code === "1" ? null:
              <FloatingBtn bg="#009B90" icon="ico_add" onClick={ openModalWrite }/>
            } */}
            <Modal open={ modalOpenDetail } close={ closeModalDetail } header="상세내역">
            {loading && <Loading></Loading>}

              <InputGroup id="write_title" title="제목" value={data.title} disabled={true}/>
              <InputGroup id="write_pw" title="작성자" value={data.loginname} disabled={true}/>              
              <InputGroup id="write_mail" title="작성일" value={data.regdate} disabled={true}/>
              <Name>파일 다운로드</Name>
              <Content>
                {
                  data.attfiles && data.attfiles.map(item =>
                      <div>
                        <a href={item.file_url} download={item.file_url}>{item.file_name}</a>
                      </div>
                    )
                }
              </Content>
              <Name>내용</Name>
              <Content scroll={true}>
                <InnerCont dangerouslySetInnerHTML={ {__html: data.content} }>
                </InnerCont>
              </Content>
              
            </Modal>
            {/* <Modal open={ modalOpenWrite } close={ closeModalWrite } header="글쓰기">
              <InputGroup id="write_title" title="제목" ph="제목을 입력해주세요"/>
              <TextAreaGroup id="write_text" title="내용" ph="내용을 입력해주세요"/>
              <Button bg="#3397B9" color="#ffffff" text="저장" height="44px" fontSize="12px" mgt="30px"></Button> 
            </Modal> */}
      </Wrapper>
      
  );
}

export default Team8_1;