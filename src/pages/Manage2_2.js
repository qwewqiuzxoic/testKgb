import React, {useEffect, useState}from 'react';
import Head from '../components/commonStyle/Head';
import Search from '../components/manage2_1/Search';
import ScoreBox from '../components/manage2_1/ScoreBox';
import Button from '../components/commonStyle/Button';
import { FlexBox, Gutter, BottomBox, ChangeFont } from '../components/commonStyle';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { getHappyCallDetail } from '../redux/thunkFn/happyCall.thunk';
import QuestionBox from '../components/Manage11/QuestionBox';

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
const Total = styled.div`
    font-weight: bold;
    margin-bottom:3px;
    font-size:14px;
    span{
        color:${(props) => props.theme.colors.secondary};
    }
`
const Dt = styled.div`
    font-weight: bold;
    color:  ${(props) => props.theme.colors.grey2};
`
const Dd = styled.div`
    ${ChangeFont(true)};
`
const WhiteWrap = styled.div`
    background: #FFFFFF;
    ${Gutter('0  15px')};

`

const ListManage2_1 = [
    {team:'서울1팀', name: '이지현', date1: '2020 .02 .28', date2: '2020 .02 .08', score:'44'}, 
    {team:'서울1팀', name: '이지현1', date1: '2020 .01 .28', date2: '2020 .01 .08', score:'55'}, 
    {team:'서울1팀', name: '이지현2', date1: '2020 .03 .28', date2: '2020 .03 .08', score:'66'}, 
    {team:'서울1팀', name: '이지현3', date1: '2020 .05 .28', date2: '2020 .05 .08', score:'20'}, 
  ]

function Manage2_2({match}) {
    const page = match.params.page;
    const sn = match.params.sn;
    console.log(match.params)
    const [title,subtit] =  page === "1" ? ["계약 해피콜","KGB의 계약 해피콜입니다"] : ["미계약 해피콜","KGB의 미계약 해피콜입니다"];  
    const [tab,setTab]= useState(0);
    const dispatch = useDispatch();
    const {data,loadng} = useSelector(state=>state.happyCallDetailReducer);
    const {list} = useSelector(state=>state.happyCallDetailReducer.data);
    useEffect(() => {
        dispatch(getHappyCallDetail(page,sn))
        return () => {
            console.log(list)
        }
    }, [])

  return (
    <>
      <Wrapper>
        
        <Head title={title} subtit={subtit} pb="90px"/>
        <Tabs>
          <TabName className={tab === 0 ? "selected": ""} onClick={()=>setTab(0)}>우리팀</TabName>
          <TabName className={tab === 1 ? "selected": ""} onClick={()=>setTab(1)}>다른팀</TabName>
        </Tabs>
        <ContentArea>
            <Search id="search1" ph="이사일/입력일 기준으로 월별검색해주세요"/>
                {/* Manage2_1과 이부분만 다름 */}
                <Box>
                    <Row>
                        <Title>{data.teamname} 점수현황</Title>
                        <Total>총점: <span>{data.totalpoint}</span></Total>
                    </Row>
                    <Row>
                        <Dt>고객명</Dt>
                        <Dd>{data.custname}</Dd>
                    </Row>
                    <Row>
                        <Dt>이사날짜</Dt>
                        <Dd>{data.daymove}</Dd>
                    </Row>
                </Box>
                <WhiteWrap>
                {
                list && list.map((item,index) =>{
                    const ans = item.answer.split("||");
                    const idx = ans.indexOf(item.point.trim())+1;

                    return(
                    <ScoreBox q={item.question} score={idx} answer={ans} text={item.point.trim()}/>

                    )
                        }
                    )
                }
                </WhiteWrap>
                <Button bg="#3397B9" color="#ffffff" text="확인" height="44px" fontSize="12px" mgt="30px"></Button>
                {/* Manage2_1과 이부분만 다름 */}
        </ContentArea>      
      </Wrapper>
    </>
  );
}

export default Manage2_2;