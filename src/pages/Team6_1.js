import React from 'react';
import Head from '../components/commonStyle/Head';
import { FlexBox, Gutter, BottomBox, ChangeFont } from '../components/commonStyle';
import styled from 'styled-components';


const Wrapper = styled.div`
    background: #FAFAFA;
`;
const ContentArea = styled.div`
    position:relative;
    ${Gutter()};
    margin-top:-60px;
`;

const Box = styled.div`
    position:relative;
    background: #FFFFFF;
    box-shadow: 4px 4px 10px #33333314;
    margin-bottom:15px;
    border-radius: 4px;
    ${Gutter('15px')};
`
const Row = styled.div`
    ${FlexBox()};
    align-items: center;
    margin-bottom:4px;
    
`
const Title = styled.div`
    font-weight: bold;
    margin-bottom:6px;
    font-size:15px;
`
const State = styled.div`
    font-size: ${(props) => props.theme.fontSizes.xs};
    color:#fff;
    background: ${(props) => props.color};
    padding:3px 10px;
    font-weight: bold;
    border-radius: 3px;
`
const Name = styled.div`
    font-weight: bold;
    margin-bottom:6px;
    color: #82898E;
`
const Weight = styled.div`
    ${ChangeFont(true)};
`
const Dt = styled.div`
    font-weight: bold;
    color:  ${(props) => props.theme.colors.grey2};
`
const Dd = styled.div`
    ${ChangeFont(true, 200)};
`

const lists6_1 = [
  {
        state:'대기',
        title: '서울71팀',
        name: '윤상필',
        weight: '1톤',
        date1: '2020.11.24',
        call: '010-1234-5678',
        region: '전지역',
        date2: '2019.11.24',
        price: '1,210,000'
  },
  {
        state:'대기',
        title: '서울72팀',
        name: '윤상필',
        weight: '2톤',
        date1: '2020.11.24',
        call: '010-1234-5678',
        region: '전지역',
        date2: '2019.11.24',
        price: '1,210,000'
  },
  {
        state:'대기',
        title: '서울73팀',
        name: '윤상필',
        weight: '3톤',
        date1: '2020.11.24',
        call: '010-1234-5678',
        region: '전지역',
        date2: '2019.11.24',
        price: '1,210,000'
  },
]

function Team6_1() {
  return (
    <>
      <Wrapper>
        <Head title="팀 단체사진" subtit="KGB의 우리팀톡톡입니다" pb="90px"/>
        <ContentArea>
        {lists6_1.map((list, index)=> (
            <Box key={index}>
                <Row>
                    <Title>{list.title}</Title>
                    <State color="#009944">{list.state}</State>
                </Row>
                <Row>
                    <Name>{list.name}</Name>
                    <Weight color="#009944">{list.weight}</Weight>
                </Row>
                <Row>
                    <Dt>이사날짜</Dt>
                    <Dd>{list.date1}</Dd>
                </Row>
                <Row>
                    <Dt>연락처</Dt>
                    <Dd>{list.call}</Dd>
                </Row>
                <Row>
                    <Dt>전지역</Dt>
                    <Dd>{list.region}</Dd>
                </Row>
                <Row>
                    <Dt>등록일</Dt>
                    <Dd>{list.date2}</Dd>
                </Row>
             </Box>
        ))}
        </ContentArea>      
      </Wrapper>
    </>
  );
}

export default Team6_1;