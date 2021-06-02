import React, { useState } from 'react';
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

const Wrapper = styled.div`
    background: #FAFAFA;
`;
const ContentArea = styled.div`
    position:relative;
  ${Gutter()};
  margin-top:-40px;
  
`;

function Team8_1({match}) {
    const code = match.params.boardTitle;
    const [ modalOpen, setModalOpen ] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    }
    const closeModal = () => {
        setModalOpen(false);
    }
  
  return (
      <Wrapper>
            <BoardTitle title="상조회" subtit="KGB의 긴급연락망입니다" boardCode={code}/>
            <ContentArea>
                <BoardListWrap8_1 boardCode={code} onClick={ openModal }/>
            </ContentArea>
            <Modal open={ modalOpen } close={ closeModal } header="상세내역">
              <InputGroup id="write_title" title="제목" value="상조회비 입출금내역"/>
              <InputGroup id="write_writer" title="팀명" value="KGB 강동대리점"/>
              <InputGroup id="write_pw" title="작성자" value="홍길동"/>              
              <InputGroup id="write_mail" title="작성일" value="2021 .01 .01"/>
              <TextAreaGroup id="write_text" title="내용" value="내용이 노출됩니다 내용이 노출됩니다"/>
            </Modal>
      </Wrapper>
      
  );
}

export default Team8_1;