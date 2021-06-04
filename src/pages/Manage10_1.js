import React, { useState } from 'react';
import Head from '../components/commonStyle/Head';
import EduBox from '../components/commonStyle/EduBox';
import { FlexBox, Gutter, BottomBox, ChangeFont } from '../components/commonStyle';

import styled from 'styled-components';

const Wrapper = styled.div`
    background:#FAFAFA;
`;

const ContentArea = styled.div`
    position:relative;
    ${Gutter()};
    margin-top:-40px;
    p{
        font-size:${(props)=>props.theme.fontSizes.s};
        margin: 26px 0 17px;
        font-weight:bold;
    }
`;
const BlueBtn = styled.div`
    width:45px;
    height:45px;
    border-radius:15px;
    background:#3397B9;
    ${FlexBox('center')};
    align-items: center;
    color:#ffffff;
`;
const GreyBtn = styled.div`
    width:45px;
    height:45px;
    border-radius:15px;
    background:#F3F7FB;
    ${FlexBox('center')};
    align-items: center;
    color:#ACB6BC;
    margin-left: 5px;
`;
function Manage10_1() {
   
  return (
      <Wrapper>
            <Head title="교육출결체크 QR코드" subtit="KGB의 매뉴얼학습입니다"/>
            <ContentArea>
                <EduBox title="이사서비스 매뉴얼" date="2020.02.28">
                    <BlueBtn>입실</BlueBtn>
                    <GreyBtn>퇴실</GreyBtn>
                </EduBox>
            </ContentArea>
      </Wrapper>
  );
}

export default Manage10_1;