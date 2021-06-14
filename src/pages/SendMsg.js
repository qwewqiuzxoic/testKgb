import React, { useState } from 'react';
import Modal from '../components/base/Modal'
import InputGroup from '../components/commonStyle/InputGroup';
import TextAreaGroup from '../components/commonStyle/TextAreaGroup';
import InputFile from '../components/msg/InputFile';
import Button from '../components/commonStyle/Button';
import Search from '../components/manage2_1/Search';
import GroupTitle from '../components/commonStyle/GroupTitle';
import { ChangeFont, Gutter } from '../components/commonStyle';

import styled from 'styled-components';
import { FlexBox } from '../components/commonStyle';
import SelectLists from '../components/msg/SelectLists';

const Wrapper = styled.div`
    background: #FAFAFA;
`;
const Tabs = styled.div`
    ${FlexBox('')};
    margin-top:17px;
    margin-bottom:20px;
`;
const TabName = styled.div`
    ${ChangeFont(true)};
    color : #CED5DB;
    padding: 12px 18px;
    border-radius: 20px;
    cursor:pointer;
    &.selected{
      background :#009B90;
      color: #FFFFFF;
      font-weight: bold;
      cursor: auto;
  }
`;

function SendMsg() {
    const [ modalOpenWrite, setModalOpenWrite ] = useState(true);
    const [ modalOpenAddr, setModalOpenAddr ] = useState(false);
    const [tab,setTab]= useState(0);

    const openModalWrite = () => {
        setModalOpenWrite(true);
    }
    const closeModalWrite = () => {
        setModalOpenWrite(false);
    }
    const openModalAddr = () => {
        setModalOpenAddr(true);
    }
    const closeModalAddr = () => {
        setModalOpenAddr(false);
    }
  return (
      <Wrapper>
            <Modal open={ modalOpenWrite } close={ closeModalWrite } header="쪽지보내기">
                <InputGroup id="write_title" title="받는사람" ph="제목을 입력해주세요" btn="주소록" onClick={openModalAddr}/>
                <TextAreaGroup id="write_text" title="내용" ph="내용을 입력해주세요"/>
                <InputFile id="msgFile" title="첨부파일"></InputFile>
                <Button bg="#3397B9" color="#ffffff" text="등록하기" h="44px" fontSize="12px" mgt="30px"></Button> 
            </Modal>
            <Modal open={ modalOpenAddr } close={ closeModalAddr } header="주소록" full='100%'>
                <Search id="searchAddr" ph="팀장명,팀명을 검색해주세요"/>
                <GroupTitle title="받는사람 목록"/>
                <Tabs>
                    <TabName className={tab === 0 ? "selected": ""} onClick={()=>setTab(0)}>YCAP</TabName>
                    <TabName className={tab === 1 ? "selected": ""} onClick={()=>setTab(1)}>KGB이사</TabName>
                    <TabName className={tab === 2 ? "selected": ""} onClick={()=>setTab(2)}>YES2404</TabName>
                    <TabName className={tab === 3 ? "selected": ""} onClick={()=>setTab(3)}>YES2404</TabName>
                </Tabs>
                <SelectLists/>
                <Button bg="#3397B9" color="#ffffff" text="선택" h="44px" fontSize="12px" mgt="30px"></Button> 
            </Modal>
      </Wrapper>
      
  );
}

export default SendMsg;