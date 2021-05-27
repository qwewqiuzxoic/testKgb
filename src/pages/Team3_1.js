import React, {useState}  from 'react';
import H1 from '../components/commonStyle/H1'
import Button from '../components/commonStyle/Button'
import GroupTitle from '../components/commonStyle/GroupTitle'
import InputGroup from '../components/commonStyle/InputGroup'

import styled from 'styled-components';
import { FlexBox, Gutter, BottomBox, ChangeFont } from '../components/commonStyle';


const Wrapper = styled.div`
    height: 100vh;
`;
const TopBg = styled.div`
    position:relative;
    top:0;
    left:0;
    right:0;
    background: ${(props) => props.theme.colors.primary};
    border-radius: 0 0 0 30px;
    padding-bottom: 56px;

`;
const ContentArea = styled.div`
    position: relative;
    ${Gutter()};
`

const Box = styled.div`
`

const selectOptions = ['이사형태1', '이사형태2']


function Team3_1() {
  return (
    <>
      <Wrapper>
        <TopBg>
            <H1 title="개인오더" subtit="KGB의 방문견적서 내역입니다"></H1>
        </TopBg>
        <ContentArea>
            <GroupTitle title="고객정보"/>
            <InputGroup id="customerName" title="고객명"/>
            <InputGroup id="customerTel0" title="대표전화 (SMS)"/>
            <InputGroup id="customerTel1" title="전화번호"/>
        </ContentArea>  
      </Wrapper>
    </>
  );
}

export default Team3_1;