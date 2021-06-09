import React, { useState } from 'react';
import Modal from '../components/base/Modal'
import InputGroup from '../components/commonStyle/InputGroup';
import TextAreaGroup from '../components/commonStyle/TextAreaGroup';
import Button from '../components/commonStyle/Button';

import styled from 'styled-components';

const Wrapper = styled.div`
    background: #FAFAFA;
`;
const TextBox = styled.div`
    background: #F3F7FB;
    color:#ACB6BC;
    padding:12px 14px;
`;


function CommunityWrite() {
    const [ modalOpenWrite, setModalOpenWrite ] = useState(true);

    const openModalWrite = () => {
        setModalOpenWrite(true);
    }
    const closeModalWrite = () => {
        setModalOpenWrite(false);
    }
   
  return (
      <Wrapper>
            <Modal open={ modalOpenWrite } close={ closeModalWrite } header="건의함 글쓰기">
                <InputGroup id="write_title" title="제목" ph="제목을 입력해주세요"/>
                <TextAreaGroup id="write_text" title="내용" ph="내용을 입력해주세요"/>
                <Button bg="#3397B9" color="#ffffff" text="저장" height="44px" fontSize="12px" mgt="30px"></Button> 
            </Modal>
            <Modal open={ modalOpenWrite } close={ closeModalWrite } header="비리제보 글쓰기">
                <TextBox>비리제보 내용이 노출됩니다비리제보 내용이 노출됩니다비리제보 내용이 노출됩니다비리제보 내용이 노출됩니다비리제보 내용이 노출됩니다</TextBox>
                <InputGroup id="write_title" title="제목" ph="제목을 입력해주세요"/>
                <TextAreaGroup id="write_text" title="내용" ph="내용을 입력해주세요"/>
                <Button bg="#3397B9" color="#ffffff" text="저장" height="44px" fontSize="12px" mgt="30px"></Button> 
            </Modal>
      </Wrapper>
      
  );
}

export default CommunityWrite;