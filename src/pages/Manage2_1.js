import React, {useState}from 'react';
import Head from '../components/commonStyle/Head';
import Score from '../components/commonStyle/Score';
import { FlexBox, Gutter, BottomBox, ChangeFont } from '../components/commonStyle';
import styled from 'styled-components';


const Wrapper = styled.div`
    background: #FAFAFA;
`;
const Tabs = styled.div`
    position:absolute;
    ${Gutter()};
    ${FlexBox('')};
    margin-top:-72px;
`;
const TabName = styled.div`
    ${ChangeFont(true)};
    color : rgba(255, 255, 255, .7);
    padding: 12px 18px;
    border-radius: 20px;
    cursor:pointer;
    &.selected{
      background : rgba(255, 255, 255, .3);
      color: #FFFFFF;
      font-weight: bold;
      cursor: auto;
  }
`;
const ContentArea = styled.div`
    position:relative;
    margin-top:30px;
    ${Gutter()};   
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
    margin-bottom:3px;
    font-size:14px;
`
const Dt = styled.div`
    font-weight: bold;
    color:  ${(props) => props.theme.colors.grey2};
`
const Dd = styled.div`
    ${ChangeFont(true)};
`

const ListManage2_1 = [
  {name: '이지현', date1: '2020 .02 .28', date2: '2020 .02 .08', score:'44'}, 
  {name: '이지현1', date1: '2020 .01 .28', date2: '2020 .01 .08', score:'55'}, 
  {name: '이지현2', date1: '2020 .03 .28', date2: '2020 .03 .08', score:'66'}, 
  {name: '이지현3', date1: '2020 .05 .28', date2: '2020 .05 .08', score:'20'}, 
]

function Manage2_1() {
  const [tab,setTab]= useState(0);

  return (
    <>
      <Wrapper>
        <Head title="미계약 해피콜" subtit="KGB의 미계약 해피콜입니다" pb="90px"/>
        <Tabs>
          <TabName className={tab === 0 ? "selected": ""} onClick={()=>setTab(0)}>우리팀</TabName>
          <TabName className={tab === 1 ? "selected": ""} onClick={()=>setTab(1)}>다른팀</TabName>
        </Tabs>
        <ContentArea>
            {ListManage2_1.map((list, index)=> (
                <Box key={index}>
                    <Row>
                        <Title>{list.name}</Title>
                    </Row>
                    <Row>
                        <Dt>이사날짜</Dt>
                        <Dd>{list.date1}</Dd>
                    </Row>
                    <Row>
                        <Dt>입력날짜</Dt>
                        <Dd>{list.date2}</Dd>
                    </Row>
                    <Row>
                        <Score score={list.score}></Score>
                    </Row>
                </Box>
            ))}
        </ContentArea>      
      </Wrapper>
    </>
  );
}

export default Manage2_1;