import React, {useEffect, useState}from 'react';
import Head from '../components/commonStyle/Head';
import Score from '../components/commonStyle/Score';
import Search from '../components/manage2_1/Search';
import { FlexBox, Gutter, BottomBox, ChangeFont } from '../components/commonStyle';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { getHappyCallList } from '../redux/thunkFn/happyCall.thunk';
import { Link } from 'react-router-dom';
import Loading from '../components/commonStyle/Loading';

const Wrapper = styled.div`
    background: #FAFAFA;
`;
const Tabs = styled.div`
    position:absolute;
    width:100%;
    ${Gutter()};
    ${FlexBox('left')};
    margin-top:-72px;
`;
const TabName = styled.div`
    width:48%;
    ${ChangeFont(true)};
    color : rgba(255, 255, 255, .7);
    padding: 12px 18px;
    border-radius: 20px;
    cursor:pointer;
    text-align:center;
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
  {team:'서울1팀', name: '이지현', date1: '2020 .02 .28', date2: '2020 .02 .08', score:'44'}, 
  {team:'서울1팀', name: '이지현1', date1: '2020 .01 .28', date2: '2020 .01 .08', score:'55'}, 
  {team:'서울1팀', name: '이지현2', date1: '2020 .03 .28', date2: '2020 .03 .08', score:'66'}, 
  {team:'서울1팀', name: '이지현3', date1: '2020 .05 .28', date2: '2020 .05 .08', score:'20'}, 
]

function Manage2_1({match}) {

  const page = match.params.page;
  console.log(page)
  const [title,subtit] =  page === "1" ? ["계약 해피콜","KGB의 계약 해피콜입니다"] : ["미계약 해피콜","KGB의 미계약 해피콜입니다"];
  const [tab,setTab]= useState(0);
  const teamChange = (num,team) => {
    setTab(num)
    dispatch(getHappyCallList(page,team))
  }
  const dispatch = useDispatch();
  const {list,loading} = useSelector(state => state.happyCallListReducer);
    useEffect(() => {
        dispatch(getHappyCallList(page,"Y"));
        return () => {
        }
    }, [])
  return (
    <>
      <Wrapper>
        <Head title={title} subtit={subtit} pb="90px"/>
        <Tabs>
          <TabName className={tab === 0 ? "selected": ""} onClick={()=>teamChange(0,"Y")}>우리팀</TabName>
          <TabName className={tab === 1 ? "selected": ""} onClick={()=>teamChange(1,"N")}>다른팀</TabName>
        </Tabs>
        <ContentArea>
          {
            loading && <Loading></Loading>
          }
            {/* <Search id="search1" ph="이사일/입력일 기준으로 월별검색해주세요"/> */}
            {list.map((item, index)=> (
                <Link to={`/Manage2_2/${page}/${item.sn}`}>
                <Box key={index}>
                    <Row>
                        <Title>{item.custname}</Title>
                    </Row>
                    <Row>
                        <Dt>이사날짜</Dt>
                        <Dd>{item.daymove}</Dd>
                    </Row>
                    <Row>
                        <Dt>입력날짜</Dt>
                        <Dd>{item.regdate}</Dd>
                    </Row>
                    <Row>
                        <Score score={item.point}></Score>
                    </Row>
                </Box>
                </Link>
            ))}
        </ContentArea>      
      </Wrapper>
    </>
  );
}

export default Manage2_1;