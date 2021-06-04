import React, { useState } from 'react';
import Head from '../components/commonStyle/Head';
import EduBox from '../components/commonStyle/EduBox';
import Graph from '../components/Manage11_1_4/Graph';
import { FlexBox, Gutter, BottomBox, ChangeFont } from '../components/commonStyle';

import styled from 'styled-components';

const Wrapper = styled.div`
    background:#FAFAFA;
`;

const ContentArea = styled.div`
    position:relative;
    ${Gutter()};
    margin-top:-40px;
`;
const GraphWrap = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 60px;
    background: ${(props) => props.isRed? 'transparent linear-gradient(90deg, #FDB97C 0%, #EE4057 100%) 0% 0% no-repeat' : 'transparent linear-gradient(90deg, #77C190 0%, #4B57A1 100%) 0% 0% no-repeat' };
    ${FlexBox('center')};
    align-items: center;

`
function Manage11_1_4() {
   
  return (
      <Wrapper>
            <Head title="자가평가" subtit="KGB의 자가평가글이 노출됩니다"/>
            <ContentArea>
                <EduBox title="홍길동" date="2020.02.28">
                    <GraphWrap isRed={false}>
                        <Graph value="50" size="54" strokewidth="2"></Graph>
                    </GraphWrap>
                </EduBox>
                <EduBox title="홍길동" date="2020.02.28">
                    <GraphWrap isRed={true}>
                        <Graph value="70" size="54" strokewidth="2"></Graph>
                    </GraphWrap>
                </EduBox>
            </ContentArea>
      </Wrapper>
  );
}

export default Manage11_1_4;