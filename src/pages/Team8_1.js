import React, { useEffect, useRef, useState } from 'react';
import BoardList8_1 from '../components/team8_1/BoardList8_1';
import BoardListWrap8_1 from '../components/team8_1/BoardListWrap8_1';
import BoardTitle from '../components/borad/BoardTitle';
import FloatingBtn from '../components/commonStyle/FloatingBtn';
import Modal from '../components/base/Modal'
import { FlexBox, Gutter, BottomBox, ChangeFont } from '../components/commonStyle';
import InputGroup from '../components/commonStyle/InputGroup';
import TextAreaGroup from '../components/commonStyle/TextAreaGroup';
import Button from '../components/commonStyle/Button';

import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { getHappyCallDetail, warningCallList } from '../redux/thunkFn/warning.thunk';

const Wrapper = styled.div`
    background: #FAFAFA;
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
  height:260px;
  padding:15px;
  text-align: ${(props) => props.textAlign ? props.textAlign : 'left'};
  background:#F3F7FB;
  border-radius: 4px;
  overflow:scroll;
`;
const InnerCont = styled.div`
`;



function Team8_1({match}) {
    const code = match.params.boardTitle;
    const [title, subtitle] = code === "1" ?["월 평가(경고현황)","월 평가 목록입니다."]:["수정","수정"]
    console.log(code)
    const [ modalOpenDetail, setModalOpenDetail ] = useState(false);
    const [ modalOpenWrite, setModalOpenWrite ] = useState(false);
    
    const dispatch = useDispatch();
    const {data,loading} = useSelector(state=>state.warningDetailReducer)

    const openModalDetail = (sn) => {
        setModalOpenDetail(true);
        dispatch(getHappyCallDetail(sn))
    }
    const closeModalDetail = () => {
        setModalOpenDetail(false);
    }
    const openModalWrite = () => {
        setModalOpenWrite(true);
    }
    const closeModalWrite = () => {
        setModalOpenWrite(false);
    }


  return (
      <Wrapper>
            <BoardTitle title={title} subtit={subtitle} boardCode={code}/>
            <ContentArea>
                <BoardListWrap8_1 boardCode={code} onClick={ openModalDetail }/>
            </ContentArea>
            {
              code === "1" ? null:
              <FloatingBtn bg="#009B90" icon="ico_add" onClick={ openModalWrite }/>
            }
            <Modal open={ modalOpenDetail } close={ closeModalDetail } header="상세내역">
              <InputGroup id="write_title" title="제목" value={data.title} disabled={true}/>
              <InputGroup id="write_writer" title="팀명" value={data.tname} disabled={true}/>
              <InputGroup id="write_pw" title="작성자" value={data.loginname} disabled={true}/>              
              <InputGroup id="write_mail" title="작성일" value={data.regdate} disabled={true}/>
              <Name>내용</Name>
              <Content>
              <InnerCont dangerouslySetInnerHTML={ {__html: data.content} }>
              </InnerCont>
              </Content>
              <div>
                {
                  data.attfiles && data.attfiles.map(item =>
                      <div>
                        <Name>파일 다운로드</Name>
                        <a href={item.file_url} download={item.file_url}>{item.file_name}</a>
                      </div>
                    )
                }
              </div>
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