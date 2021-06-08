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
function Manage13() {
   
  return (
      <Wrapper>
            <Head title="교육설문" subtit="KGB의 교육설문입니다"/>
            <ContentArea>
                <EduBox title="교육설문" date="2020.02.28">
                    <BlueBtn>설문</BlueBtn>
                </EduBox>
            </ContentArea>
      </Wrapper>
  );
}

export default Manage13;