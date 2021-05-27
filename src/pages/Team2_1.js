import React, {useState}  from 'react';
import H1 from '../components/commonStyle/H1'
import Button from '../components/commonStyle/Button'
import FloatingBtn from '../components/commonStyle/FloatingBtn'

import styled from 'styled-components';
import { FlexBox, Gutter, BottomBox, ChangeFont } from '../components/commonStyle';


const Wrapper = styled.div`
    background: ${(props) => props.theme.colors.bg};
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
  ${Gutter()};
  margin-top:-40px;
`

const Box = styled.div`
    position:relative;
    background: #FFFFFF;
    box-shadow: 4px 4px 20px #33333314;
    margin-bottom:15px;
    ${Gutter('14px 18px')};
    &:before{
        position:absolute;
        content:'';
        width:1.5px;
        height:100%;
        top:0;
        left:0;
        background:${(props) => props.color}     
    }
`
const Row = styled.div`
    ${FlexBox()}
    margin-bottom:4px;
    
`
const Name = styled.div`
        font-weight: bold;
        margin-bottom:6px;
    span{
        color : ${(props) => props.color};
    }
`
const Call = styled.div`
    ${ChangeFont(true, 200)};
    color: #82898E;


`
const Dt = styled.div`
    font-weight: bold;
    font-size: ${(props) => props.theme.fontSizes.s};
    color:  ${(props) => props.theme.colors.grey2};
`
const Dd = styled.div`
    ${ChangeFont(true, 200)};
`

const lists2_1 = [
  {
      state:'2548759',
      name: '문미옥',
      call: '010-1234-5678',
      date1: '2021.02.01',
      date2: '2019.11.24',
      price: '1,210,000'
  },
  {
      state:'2548759',
      name: '이승민',
      call: '010-1234-5678',
      date1: '2021.02.01',
      date2: '2019.11.24',
      price: '1,210,000'
  },
  {
      state:'2548759',
      name: '박현주',
      call: '010-1234-5678',
      date1: '2021.02.01',
      date2: '2019.11.24',
      price: '1,210,000'
  }
]

function Team2_1() {
  return (
    <>
      <Wrapper>
        <TopBg>
            <H1 title="방문견적 입력" subtit="KGB의 견적 및 계약 내역서입니다"></H1>
        </TopBg>
        <ContentArea>
        {lists2_1.map((list, index)=> (
            <Box key={index}>
                <Row>
                    <Name><span>[{list.state}] </span>{list.name}</Name>
                    <Call>{list.call}</Call>
                </Row>
                <Row>
                    <Dt>이사일</Dt>
                    <Dd>{list.date1}</Dd>
                </Row>
                <Row>
                    <Dt>전체금액</Dt>
                    <Dd>{list.price}</Dd>
                </Row>
                <Row>
                    <Dt>접수일</Dt>
                    <Dd>{list.date2}</Dd>
                </Row>
                <Button bg="#F2F6F8" color="#009B90" text="견적의뢰"></Button>
             </Box>
        ))}
        </ContentArea>
        <FloatingBtn bg="#009B90" icon="ico_add"/>       
      </Wrapper>
    </>
  );
}

export default Team2_1;